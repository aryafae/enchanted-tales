var pantalla_de_juego;
var niebla;
var esquina_salida;
var spirit;

var actores=[]
var party=[]
var monster_list=[]
var elements_list={}

var hechizo_actual=""
var boton_magia

var items={}
//n_bala=0;
var npcs={}

var ultimoDisparo=(new Date()).getTime()


var scene
var personajeObjetivo=false;
var testLayers={};
var barraMenu, botonLibro, opcionBtnSprite, capa_interfaz
var libroAbierto=true;

var textos_es,textos_en
var preguntas_base
var mapa_caminos_base

function preparaEscenario(){
	var userLang = navigator.language || navigator.userLanguage; 
	textos_es = loader.getResult("textos");
	textos_en = loader.getResult("textos_en");
	var textos_actuales=textos_en
	if(userLang.includes("es")) textos_actuales=textos_es
	
	textos=textos_actuales.textos
	preguntas=textos_actuales.preguntas
	dialogos=textos_actuales.dialogos
	lecciones=textos_actuales.lecciones
    
    preguntas_base=JSON.stringify(preguntas)
    mapa_caminos_base=JSON.stringify(mapa_caminos)
	
	// Creamos interfaz
	tilemaptest = new createjs.SpriteSheet({
			images: [loadImage("tiles")],
			frames: {width:32*pixelScale, height:32*pixelScale, regX:0, regY:0, spacing:0, margin:0}
		});
			
	testLayers['map_layer'] = new createjs.Container();
	testLayers['map_layer'].mouseEnabled=false;
	//testLayers['click_layer'] = new createjs.Container();
	testLayers['character_layer'] = new createjs.Container();
	testLayers['brillos_layer'] = new createjs.Container();
	testLayers['balas_layer'] = new createjs.Container();
	scene.addChild(testLayers['map_layer']);
	//scene.addChild(testLayers['click_layer']);
	scene.addChild(testLayers['character_layer']);
	scene.addChild(testLayers['brillos_layer']);
	scene.addChild(testLayers['balas_layer']);
	var hit = new createjs.Shape();
	hit.graphics.beginFill("#000").drawRect(0, 0, 19200, 10800);
	//testLayers['click_layer'].hitArea = hit;
	//testLayers['click_layer'].on("click", testClickHandler)
	scene.hitArea = hit;
	scene.on("click",testClickHandler)
	
	drawTestMap()
	
	
	barra_energia = new createjs.Bitmap(loader.getResult("barra_energia"))
	barra_energia.x=1780-getEstado('aura');
	barra_energia.y=0;
	capa_interfaz.addChild(barra_energia)
	
	nivel_energia = new createjs.Bitmap(loader.getResult("nivel_energia"))
	nivel_energia.x=1775-getEstado('aura');
	nivel_energia.y=0;
	capa_interfaz.addChild(nivel_energia)
	
	boton_magia = new createjs.Bitmap(loader.getResult("magia"))
	boton_magia.addEventListener("pressup",boton_magia_click)
	boton_magia.abierto=false;
	boton_magia.x=1760;
	boton_magia.y=-35;
	capa_interfaz.addChild(boton_magia)
	
	esquina_salida = new createjs.Bitmap(loader.getResult("esquina"))
	esquina_salida.on("click",volverAlMenu)
	capa_interfaz.addChild(esquina_salida)
	
	
	niebla = new createjs.Bitmap(loader.getResult("niebla"))
	capa_niebla.addChild(niebla);
	
	pantalla_de_juego.addChild(scene);
	pantalla_de_juego.addChild(capa_niebla);
	pantalla_de_juego.addChild(capa_interfaz);
	pantalla_de_juego.addChild(capa_interfaz_izquierdo);
	pantalla_de_juego.addChild(capa_interfaz_derecho);
	
	pantalla_de_juego.addChild(capa_animaciones);
	
	startMovingJoystic=false
	moveX=0;
	moveY=0;
	if(game_options.versionTactil){
		botonUsar = new createjs.Container();
		botonUsar.x=1450
		botonUsar.y=810
		capa_interfaz_derecho.addChild(botonUsar)
		var fondo = new createjs.Shape();
		fondo.graphics.beginFill("#000").beginStroke("#fff").drawRoundRect(0, 0, 400, 200,15);
        iCache(fondo)
		botonUsar.addChild(fondo)
		var text = new createjs.Text(textos["Mirar"], "65px 'Merienda One'", "#fff");
		text.x = 200;
		text.y = 55;
		text.textAlign='center'
        iCache(text)
		botonUsar.addChild(text);
		botonUsar.alpha=0;
		
		botonUsar.on("click",function(){
			if(objetoActivable && objetoActivable.activo){
                stage.update();
                capturaPantalla()
                guardarPartida("autosave",screenShot)
				iniciaDialogo(objetoActivable.nombre)
				objetoActivable.removeAllEventListeners("click") // Sólo se puede usar una vez
				objetoActivable.activo=false;
				objetoActivable.shadow=null;
				objetoActivable=false;
			}
		})
		
		move_control = new createjs.Bitmap(loader.getResult("move_control"))
		move_control.regX=114
		move_control.regY=114
		move_control.x=250
		move_control.y=830
		move_control.alpha=0
		capa_interfaz_izquierdo.addChild(move_control)
	}
	
	if(!getEstado('juegoEmpezado')){
		// Capa negra
		// Luz azul
		// Acercar luz azul
		estado.juegoEmpezado=true;
		iniciaDialogo("preset")
        endMoveControls()
	}
	
	//frameRate = new createjs.Text("", "12px Arial", "rgba(255,255,255,1)");
	//frameRate.x=150;
	//frameRate.y=10;
	//frameRate.alpha=0;
	//capa_interfaz.addChild(frameRate)
	
	cargaElementosIniciales()
}

var touchPoints=[]

function startMoveControls(){
    if(game_options.versionTactil){
        touchPoints=[]
        joystic={x:0,y:0}
        scene.on("mousedown",stageMouseDown)
        scene.on("pressmove",stageMouseMove)
        scene.on("pressup",stageMouseUp)
    }
}

function endMoveControls(){
    if(game_options.versionTactil){
        scene.removeAllEventListeners()
        joystic={x:0,y:0}
        touchPoints=[]
    }
}

function stageMouseDown(evt){
    touchPoints.push({'x':evt.stageX,'y':evt.stageY,'originX':evt.stageX,'originY':evt.stageY,'start':new Date().getTime()})
}

var joystic={x:0,y:0}
function stageMouseMove(evt){
    var x=evt.stageX
    var y=evt.stageY
    
    var minDist=1000000000000000000000000000
    var currentPoint=0
    for(var point in touchPoints){
        var distance=Math.abs(touchPoints[point].x-x)+Math.abs(touchPoints[point].y-y)
        if(minDist>distance){
            currentPoint=point
            minDist=distance
        }
    }
    if(currentPoint){
        touchPoints[currentPoint].x=x
        touchPoints[currentPoint].y=y
        
        var distance=dist({'x':touchPoints[currentPoint].originX,'y':touchPoints[currentPoint].originY},{'x':x,'y':y})
        if(distance/capa_interfaz_izquierdo.scaleY>70){
            var difX=(x-touchPoints[currentPoint].originX)
            var difY=(y-touchPoints[currentPoint].originY)
            
            if(Math.abs(difX)>2.6*Math.abs(difY)){
                joystic.y=0
                joystic.x=(difX>0)?1:-1
            }
            else if(Math.abs(difY)>2.6*Math.abs(difX)){
                joystic.x=0
                joystic.y=(difY>0)?1:-1
            }
            else{
                joystic.x=(difX>0)?0.7:-0.7
                joystic.y=(difY>0)?0.7:-0.7
            }
            
            move_control.x=touchPoints[currentPoint].originX/capa_interfaz_izquierdo.scaleY
            move_control.y=touchPoints[currentPoint].originY/capa_interfaz_izquierdo.scaleY
            move_control.alpha=0.8
            touchPoints[currentPoint].joystic=1
        }
        else if(touchPoints[currentPoint].joystic) joystic={x:0,y:0}
    }
}

function stageMouseUp(evt){
    var x=evt.stageX
    var y=evt.stageY
    
    var minDist=1000000000000000000000000000
    var currentPoint=false
    for(var point in touchPoints){
        var dist=Math.abs(touchPoints[point].x-x)+Math.abs(touchPoints[point].y-y)
        if(minDist>dist){
            currentPoint=point
            minDist=dist
        }
    }
    
    if(currentPoint){
        // Intentamos usar un objeto
        sceneX=(x-scene.x)/pixelartScale
        sceneY=(y-scene.y)/pixelartScale
        
        var tileX=(Math.floor(sceneX/32))
        var tileY=(Math.floor(sceneY/32))
        
        var distance=Math.abs(sceneX-spirit.x)+Math.abs(sceneY-spirit.y)
        
        if(distance < 96){
            // Exploramos
            if((child=testLayers['character_layer'].getObjectUnderPoint(sceneX,sceneY)) && child.parent) child=child.parent
            if(child && child!=spirit && child.activo && 
                (child.map_x==tileX || (child.map_x+1==tileX)) && (child.map_y==tileY || (child.map_y-1==tileY))){
                stage.update();
                capturaPantalla()
                guardarPartida("autosave",screenShot)
                iniciaDialogo(child.nombre)
                child.activo=false;
                child.removeChild(child.interrogacion)
                return
            }
        }
            
        // Curamos
        if(hechizo_actual=="hechizo_curar"){
            var child=testLayers['character_layer'].getObjectUnderPoint(sceneX,sceneY)
            if(child && child.parent && child.parent.tipo=="npc"){
                actualizaEnergia(-40)
                lanzaCuracion(child.parent)
                return
            }
        }
        
        // Escudo
        if(hechizo_actual=="hechizo_escudo"){
            var child=testLayers['character_layer'].getObjectUnderPoint(sceneX,sceneY)
            if(child && child.parent && child.parent.tipo=="npc"){
                actualizaEnergia(-100-dotes["Escudo potenciado"].aprendido*20)
                lanzaEscudo(child.parent)
                return
            }
        }
        
	else if(hechizo_actual=="hechizo_escudo"){
		actualizaEnergia(-100-dotes["Escudo potenciado"].aprendido*20)
		lanzaEscudo(actor)
	}
    
        // Disparamos si no hemos hecho ninguna otra acción antes
        var dist=Math.abs(touchPoints[currentPoint].originX-x)+Math.abs(touchPoints[currentPoint].originY-y)
        if(dist<70 && touchPoints[currentPoint].start+800>(new Date().getTime())){
            x=(x-scene.x)/pixelartScale
            y=(y-scene.y)/pixelartScale
            var objetivo=0
            if(dotes["Ataque seguidor"].aprendido){
                var cercano=0
                var min_distancia=32*pixelScale+1
                for(var i in monster_list){
                    var child=monster_list[i]
                    var distancia=dist({"x":child.x+16*pixelScale,"y":child.y+16*pixelScale},{"x":x,"y":y})
                    if(distancia<min_distancia){
                        objetivo=child
                        min_distancia=distancia
                    }
                }
            }
            dispara(x,y,objetivo)
        }
        
        // Si es el joystic, lo soltamos
        if(touchPoints[currentPoint].joystic){
            joystic={x:0,y:0}
            move_control.alpha=0
        }
        
        touchPoints.splice(currentPoint,1)
    }
    /*
    move_control.x=250
    move_control.y=830
    move_control.alpha=0.3
    startMovingJoystic=false
    moveX=0;
    moveY=0;
    if(x<400 && y>680){
        evt.preventDefault();
        return true
    }*/
}

function cargaElementosIniciales(){
	for(var i in elementos_escena)
		createElemento(elementos_escena[i].id,elementos_escena[i].nombre,elementos_escena[i].x,elementos_escena[i].y)
	
	for(var i in monsters)
		createMonster(monsters[i].id,monsters[i].nombre,monsters[i].x,monsters[i].y)
	
	for(var i in characters)
		createCharacter(characters[i].id,characters[i].nombre,characters[i].x,characters[i].y)
	
	createSpirit(initial_pos[0],initial_pos[1])
		
	//pantalla_de_juego.cache(0,0,1920,1080);
}

function createElemento(id,nombre,map_x,map_y,activo=1){	
	var elemento=new createjs.Container();
	if(configObjetos[id]){
		var charimg=loadImage("elemento"+id);
		var actions=configObjetos[id]
		actions.images= [charimg];
		var spriteSheet = new createjs.SpriteSheet(actions);
		elemento.sprite = new createjs.Sprite(spriteSheet, "inicial");

	}
	else elemento.sprite=new createjs.Bitmap(loadImage("elemento"+id))
    elemento.addChild(elemento.sprite)
             
		//elemento=new createjs.Bitmap(nearestNeighborScale(loader.getResult("elemento"+elementos_escena[i].id),pixelScale))
	elemento.nombre=nombre;
	elemento.regY=elemento.getBounds().height-32*pixelScale
	elemento.y=32*pixelScale*map_y;
	elemento.x=32*pixelScale*map_x;
	testLayers['character_layer'].addChild(elemento);
	elemento.tipo="escena"
	elemento.id=id
	
	elemento.activo=1
	
	elemento.map_y=map_y
	elemento.map_x=map_x
	
	if(!elements_list[elemento.nombre]) elements_list[elemento.nombre]=[elemento]
	else elements_list[elemento.nombre].push(elemento)
	
	if(activo){
        elemento.interrogacion=new createjs.Bitmap(loadImage("interrogacion"))
        elemento.interrogacion.regX=8
        elemento.interrogacion.regY=16
        //elemento.interrogacion.alpha=0.6
        elemento.addChild(elemento.interrogacion)
        elemento.interrogacion.x=elemento.getBounds().width/2
        elemento.interrogacion.y=elemento.getBounds().height/4
		/*if(!game_options.controlTeclado)
			elemento.addEventListener("click", function(evt) {
				if(game_options.controlTeclado) return;
				if(ultimoDisparo+game_values.bloqueaDesdeDisparo>(new Date()).getTime()) return;
				spirit.objetivo=evt.target
				
				spirit.camino=new PathFinder(spirit,[evt.target.map_x,evt.target.map_y],true)
				spirit.camino.ignoreParty()
				spirit.camino.limitMap(9)
				spirit.camino.searchPath()
				spirit.localizacionObjetivo=false
			})*/
    }
	
	mapa_caminos[map_x][map_y]=0;
	if(elemento.getBounds().width>48*pixelScale){
		mapa_caminos[map_x+1][map_y]=0;
		elemento.size=2;
	}
	return elemento;
}

function createMonster(id,nombre,map_x,map_y){
	var monster=new createjs.Container();
	if(nombre=="Gelatina grande")
		monster.sprite=createBlob("monster"+id,64)
	else monster.sprite=createBlob("monster"+id)
	monster.sprite.parent=monster
	monster.addChild(monster.sprite)
	
	monster.tipo="monstruo"
	
	monster.id=id
	monster.nombre=nombre
	monster.x=32*pixelScale*map_x;
	monster.y=32*pixelScale*map_y;
	monster.map_x=map_x;
	monster.map_y=map_y;
	monster.velocidad=15;
	monster.move="randomBlob"
	mapa_caminos[map_x][map_y]=2;
	monster.sprite.gotoAndPlay("move")
	testLayers['character_layer'].addChild(monster);
	//npcs["monster"+(npcs.length+1)]=monster;
	actores.push(monster);
	
	monster.max_life=70;
	
	monster.next_attack=0; // Cuanto queda hasta el próximo ataque
	monster.attack_delay=1000; // Tiempo a esperar entre ataques
	monster.attack_type='poison' // Tipo de ataque
	monster.attack_damage=5 // Daño que hace el ataque
	
	if(nombre=="Gelatina grande"){
		monster.max_life=1000;
		monster.attack_damage=25
		monster.velocidad=50;
		monster.movimiento=gelatinaGrandeFollow
		monster.size=2
		monster.attack_type='shoot'
		/*mapa_caminos[monsters[i].x][monsters[i].y+1]=2;
		mapa_caminos[monsters[i].x+1][monsters[i].y]=2;
		mapa_caminos[monsters[i].x+1][monsters[i].y+1]=2;*/
	}
	else if(nombre=="Gelatina verde"){
		monster.max_life=140;
		monster.attack_damage=10
		monster.velocidad=40;
	}
	else if(nombre=="Gelatina negra"){
		monster.max_life=400;
		monster.attack_damage=20
		monster.velocidad=40;
		monster.move="followBlob"
	}
	monster.life=monster.max_life;
	
	if(!game_options.controlTeclado)
		monster.addEventListener("click", disparaMonstruo)
	
	monster_list.push(monster)
	
	return monster
}

function createSpirit(x,y){
	spirit= new createjs.Bitmap(loadImage("spirit"))
	spirit.imageName="spirit";
	spirit.walker=false;
	spirit.regY=16*pixelScale;
	spirit.x=32*pixelScale*x;
	spirit.y=32*pixelScale*y
	spirit.map_x=x
	spirit.map_y=y
	//mapa_caminos[initial_pos[0]][initial_pos[1]]=2;
	spirit.base_damage=10
	spirit.velocidad=100;
	spirit.caminando=false;
	spirit.tipo="espíritu"
	actores.push(spirit)
	testLayers['character_layer'].addChild(spirit);
	
	return spirit;
}

function createCharacter(id,nombre,x,y){
	var npc=new createjs.Container();
	npc.walker=createCharacterImage("character"+id)
	npc.addChild(npc.walker)
	npc.id=id
	npc.regY=16*pixelScale
	npc.y=32*pixelScale*y
	npc.x=32*pixelScale*x;
	npc.map_x=x
	npc.map_y=y
	npc.caminando=false;
	
	npc.tipo="npc"
	
	npc.max_life=200;
	npc.life=npc.max_life;
	
	mapa_caminos[x][y]=2;
	npc.nombre=nombre;
	npc.walker.gotoAndStop("stand")
	npc.walker.parent=npc
	testLayers['character_layer'].addChild(npc);
	
	
	npc.on("click", clickCharacter)
	
	npcs[nombre]=npc;
	npc.velocidad=200;
	actores.push(npc)
	npc.direccion="walk"
	npc.seguidor=1
	
	if(npc.nombre=="Bibliotecaria") party.push(npc)
	else{
        npc.activo=true;
        npc.interrogacion=new createjs.Bitmap(loadImage("interrogacion"))
        npc.interrogacion.regX=8
        npc.interrogacion.regY=16
        npc.addChild(npc.interrogacion)
        npc.interrogacion.x=npc.getBounds().width/2
        //npc.interrogacion.y=npc.getBounds().height/4
    }
	//if(npc.nombre=="Niña") party.push(npc)
		
	return npc;
}

function clickCharacter(evt) {
	if(ultimoDisparo+game_values.bloqueaDesdeDisparo>(new Date()).getTime()) return;
	
	var actor=evt.target.parent;
	if(hechizo_actual=="hechizo_curar"){
		actualizaEnergia(-40)
		lanzaCuracion(actor)
	}
	else if(hechizo_actual=="hechizo_escudo"){
		actualizaEnergia(-100-dotes["Escudo potenciado"].aprendido*20)
		lanzaEscudo(actor)
	}
	else{
		if(game_options.controlTeclado) return;
		spirit.objetivo=evt.target.parent
		spirit.camino=new PathFinder(spirit,[evt.target.parent.map_x,evt.target.parent.map_y],true)
		spirit.camino.ignoreParty()
		spirit.camino.limitMap(9)
		spirit.camino.searchPath()
		spirit.localizacionObjetivo=false
		if(!spirit.camino.ruta.length) llegaObjetivo(spirit)
	}
	
	if(item_hechizo_actual){
		var animSpeed=200;
		var ease=createjs.Ease.getPowOut(2);
		createjs.Tween.get(item_hechizo_actual).to({ alpha: 0 },animSpeed,ease).call(function(){
			capa_interfaz.removeChild(item_hechizo_actual)
		})
		item_hechizo_actual=false
		hechizo_actual="";
	}
}

function lanzaCuracion(actor){
	var corazon= new createjs.Bitmap(loadImage("curar"))
	actor.addChild(corazon)
	
	corazon.x=16*pixelScale
	corazon.y=24*pixelScale
	corazon.scaleX=0;
	corazon.scaleY=0;
	corazon.alpha=1;
	corazon.regX=16*pixelScale
	corazon.regY=14*pixelScale
	
	var animSpeed=300;
	var ease=createjs.Ease.getPowOut(2);
	var easeIn=createjs.Ease.getPowIn(2);
	createjs.Tween.get(corazon).to({ alpha: 0 },animSpeed,easeIn)
	createjs.Tween.get(corazon).to({ scaleX: 1 },animSpeed,ease)
	createjs.Tween.get(corazon).to({ scaleY: 1 },animSpeed,ease).call(function(parent, object){
		parent.removeChild(object);
	},[actor,corazon])
	
	
	actor.life+=(dotes["Hechizo de curar"].aprendido+dotes["Curación potenciada"].aprendido)*game_values.vida_recuperada_curacion
	if(actor.life>=actor.max_life){
		actor.life=actor.max_life;
		actor.removeChild(actor.barra_vida)
		actor.barra_vida=false;
	}
	else{
		var ancho_barra=Math.floor(32*pixelScale*actor.life/actor.max_life)
		actor.barra_vida.graphics.command.w=ancho_barra;
		actor.barra_vida.x=16*pixelScale-ancho_barra/2;
        iCache(actor.barra_vida)
	}
}

function lanzaEscudo(npc){
	if(!npc.escudo){
		var escudo= new createjs.Bitmap(loadImage("escudo"))
		escudo.regX=26*pixelScale
		escudo.regY=26*pixelScale
		escudo.x=16*pixelScale
		escudo.y=24*pixelScale
		escudo.scaleX=0;
		escudo.scaleY=0;
		escudo.alpha=0;
		npc.addChildAt(escudo,1)
		npc.escudo=escudo
		
		var animSpeed=300;
		var ease=createjs.Ease.getPowOut(2);
		createjs.Tween.get(escudo).to({ alpha: 1 },animSpeed,ease)
		createjs.Tween.get(escudo).to({ scaleX: 1 },animSpeed,ease)
		createjs.Tween.get(escudo).to({ scaleY: 1 },animSpeed,ease)
	}
	
	if(!npc.barra_escudo){
		npc.barra_escudo = new createjs.Shape();
		npc.barra_escudo.graphics.beginFill("#0ff").drawRect(0,0,0,2);
        npc.barra_escudo.y=-4
		npc.barra_escudo.x=16*pixelScale
		npc.barra_escudo.scaleX=0
        iCache(npc.barra_escudo)
		npc.addChild(npc.barra_escudo)
	}
	createjs.Tween.get(npc.barra_escudo).to({ scaleX: 1 },animSpeed,ease)
	createjs.Tween.get(npc.barra_escudo).to({ x: 0 },animSpeed,ease)
	
	npc.max_escudo=200+dotes["Escudo potenciado"].aprendido*100
	npc.escudo_actual=200
}

var items_hechizo=[]
function boton_magia_click(){
	// Mostramos u ocultamos menú
	var hechizos=[]
	if(dotes["Hechizo de curar"].aprendido) hechizos.push("hechizo_curar")
	if(dotes["Hechizo de escudo"].aprendido) hechizos.push("hechizo_escudo")
	
	if(!hechizos.length) return;
	if(boton_magia.abierto) recogeHechizos()
	else{
		items_hechizo=[]
		for(var i=0;i<hechizos.length;i++){
			hechizo = new createjs.Bitmap(loader.getResult(hechizos[i]))
			hechizo.x=1760;
			hechizo.y=-35;
			hechizo.alpha=0;
			hechizo.hechizo=hechizos[i]
			capa_interfaz.addChild(hechizo)
			hechizo.on("click",selecciona_hechizo)
			items_hechizo.push(hechizo)
			
			var animSpeed=200;
			var ease=createjs.Ease.getPowOut(2);
			createjs.Tween.get(hechizo).to({ x: 1760-140*(1+i) },animSpeed,ease)
			createjs.Tween.get(hechizo).to({ alpha: 1 },animSpeed,ease)
		}
		
		scene.mouseEnabled=false;
		estado.dialogoAbierto=true;
		boton_magia.abierto=true;
	}
}

function recogeHechizos(){
	var animSpeed=200;
	var ease=createjs.Ease.getPowOut(2);
	
	for(var i in items_hechizo){
		createjs.Tween.get(items_hechizo[i]).to({ x: 1760 },animSpeed,ease)
		createjs.Tween.get(items_hechizo[i]).to({ alpha: 0 },animSpeed,ease).call(function(item){
			capa_interfaz.removeChild(item)
		},[items_hechizo[i]])
		items_hechizo[i].removeAllEventListeners();
	}
	
	scene.mouseEnabled=true;
	estado.dialogoAbierto=false;
	boton_magia.abierto=false;
}

var item_hechizo_actual
function selecciona_hechizo(evt){
	if(evt.target.hechizo=="hechizo_escudo" && dotes["Escudo en grupo"].aprendido){
		for(var i in party)
			lanzaEscudo(party[i])
		actualizaEnergia(-100-dotes["Escudo potenciado"].aprendido*20)
		recogeHechizos()
		return
	}
	if(evt.target.hechizo=="hechizo_curar" && dotes["Curación en grupo"].aprendido){
		for(var i in party)
			lanzaCuracion(party[i])
		actualizaEnergia(-40)
		recogeHechizos()
		return
	}
	hechizo_actual=evt.target.hechizo;
	item_hechizo_actual=evt.target
	
	var animSpeed=200;
	var ease=createjs.Ease.getPowOut(2);
	for(var i in items_hechizo){
		createjs.Tween.get(items_hechizo[i]).to({ x: 1760 },animSpeed,ease)
		if(evt.target!=items_hechizo[i])
			createjs.Tween.get(items_hechizo[i]).to({ alpha: 0 },animSpeed,ease).call(function(item){
				capa_interfaz.removeChild(item)
			},[items_hechizo[i]])
		
		items_hechizo[i].removeAllEventListeners();
	}
	
	evt.target.on("click",function(evt){
		var animSpeed=200;
		var ease=createjs.Ease.getPowOut(2);
		createjs.Tween.get(evt.target).to({ alpha: 0 },animSpeed,ease).call(function(item){
			capa_interfaz.removeChild(item)
		},[evt.target])
		hechizo_actual="";
	})
	scene.mouseEnabled=true;
	estado.dialogoAbierto=false;
	boton_magia.abierto=false;
}

function disparaMonstruo(evt){
	if(game_options.controlTeclado) return;
	var dest_x=evt.target.parent.x+((evt.target.parent.size==2)?32:16)*pixelScale
	var dest_y=evt.target.parent.y+((evt.target.parent.size==2)?32:16)*pixelScale
	dispara(dest_x,dest_y,(dotes["Ataque seguidor"].aprendido?evt.target.parent:false))
}

function dispara(dest_x,dest_y,seguir=false){
	ultimoDisparo=(new Date()).getTime()
	if(!(spirit.lastAttack && spirit.lastAttack+((dotes["Ataque frecuente"].aprendido)?500:1000)>(new Date()).getTime()) && getEstado('ataque')<=getEstado('nivelEnergia')){
		spirit.lastAttack=(new Date()).getTime()
		
		var bala = new createjs.Bitmap(loader.getResult("bala_energia"))
		bala.regX=5;
		bala.regY=5;
		bala.x=spirit.x+16*pixelScale
		bala.y=spirit.y+8*pixelScale
		bala.damage=getEstado('ataque')
		//frameRate.text=spirit.base_damage
		bala.target="monster"
		
		bala.lifetime=2000;
		
		if(seguir) bala.seguir=seguir;
		disparaBala(bala,{'x':dest_x,'y':dest_y},200+dotes["Bala acelerada"].aprendido*150)
		
		// Gastamos energía al disparar
		actualizaEnergia(-getEstado('ataque'))
	}
}

function actualizaEnergia(variacion){
	variacion=parseFloat(variacion)
	estado.nivelEnergia=variacion+getEstado('nivelEnergia')
	if(getEstado('nivelEnergia')<0) getEstado('nivelEnergia')=0;
	if(getEstado('nivelEnergia')>getEstado('aura')) estado.nivelEnergia=getEstado('aura');
	//nivel_energia.x=1775-estado.nivelEnergia;
	
	var diferencia=Math.abs(nivel_energia.x-1775+getEstado('nivelEnergia'))
	
	createjs.Tween.get(nivel_energia , {override:true}).to({ x:1775-getEstado('nivelEnergia')}, diferencia*5)
	
	if(getEstado('nivelEnergia')<20 && !getEstado('dialogoSinEnergia')){
        stage.update();
        capturaPantalla()
        guardarPartida("autosave",screenShot)
		estado.dialogoSinEnergia=true;
		iniciaDialogo("sinEnergía")
	}
}

function disparaBala(bala,target,velocidad=300){
	var distancia=dist(bala,target)
	
	bala.velocidad=velocidad
	bala.velx=(target.x-bala.x)*velocidad/distancia
	bala.vely=(target.y-bala.y)*velocidad/distancia
	
	bala.lifetime=2000;
	
	testLayers['balas_layer'].addChild(bala)
}

function setCentro(){
		var centroX=Math.round(spirit.x)
		var centroY=Math.round(spirit.y)
		
		var sx=canvasWidth/2-(centroX+16)*pixelartScale
        sx_base=sx
		if(sx>0) sx=0
		if(sx<(canvasWidth-32*map_width*pixelartScale)) sx=canvasWidth-32*map_width*pixelartScale
		var sy=canvasHeight/2-(centroY+16)*pixelartScale;
        sy_base=sy
		if(sy>0) sy=0
		if(sy<(canvasHeight-32*map_height*pixelartScale)) sy=canvasHeight-32*map_height*pixelartScale
		
		scene.x=Math.round(sx);
		scene.y=Math.round(sy);
        
        capa_niebla.x=canvasWidth/2-1920*capa_niebla.scaleX+sx-sx_base
        capa_niebla.y=canvasHeight/2-1080*capa_niebla.scaleX+sy-sy_base
}
	
function abreJuego() {
    startMoveControls()
	libroAbierto=false;
	playMusic("3exploracion");
	pantalla_de_juego.uncache();
	
	if(!getEstado('juegoAbierto')){
		if(dialogo_inicio) iniciaDialogo("inicio")
		//if(dialogo_inicio) iniciaDialogo("Cristal2")
		estado.juegoAbierto=true;
	}
	else if(!getEstado('dialogoCurame') && dotes["Hechizo de curar"].aprendido){
		iniciaDialogo("Curame")
		estado.dialogoCurame=true;
	}
}
	
function testClickHandler(evt){
	var ex=evt.stageX
	var ey=evt.stageY
	if(rotated){
		ex=evt.stageY
		ey=canvasHeight-evt.stageX
	}
	
	if(game_options.controlTeclado){
        var x=evt.stageX/capa_interfaz_izquierdo.scaleX
        var y=evt.stageY/capa_interfaz_izquierdo.scaleY
        
        if(game_options.versionTactil){}
        else{
            x=(ex-scene.x)/pixelartScale
            y=(ey-scene.y)/pixelartScale
            var objetivo=0
            if(dotes["Ataque seguidor"].aprendido){
                var cercano=0
                var min_distancia=32*pixelScale+1
                for(var i in monster_list){
                    var child=monster_list[i]
                    var distancia=dist({"x":child.x+16*pixelScale,"y":child.y+16*pixelScale},{"x":x,"y":y})
                    if(distancia<min_distancia){
                        objetivo=child
                        min_distancia=distancia
                    }
                }
            }
            dispara(x,y,objetivo)
        }
	}
	else{
		if(ultimoDisparo+game_values.bloqueaDesdeDisparo>(new Date()).getTime()) return;
		var x=Math.floor((ex-scene.x)/(32*pixelScale));
		var y=Math.floor((ey-scene.y)/(32*pixelScale));
		
		if(mapa_caminos[x][y]==1){
			spirit.camino=new PathFinder(spirit,[x,y])
			spirit.camino.ignoreParty()
			spirit.camino.limitMap(9)
			spirit.camino.searchPath()
			spirit.objetivo=false;
			spirit.localizacionObjetivo=false
		}
	}
	/*else  if(locations[x+"x"+y] && (graph=locations[x+"x"+y].graph)){
		spirit.camino=new PathFinder(spirit,[x,y],true)
		spirit.camino.ignoreParty()
		spirit.camino.limitMap(9)
		spirit.camino.searchPath()
		spirit.localizacionObjetivo=locations[x+"x"+y]
		spirit.objetivo=false
	}*/
}

var moveUp, moveDown, moveLeft, moveRight
var handleKeyDown = function(e){
	if(!e){var e = window.event;}

	if(e.keyCode==65 || e.keyCode==37) moveLeft=true
	if(e.keyCode==87 || e.keyCode==38) moveUp=true
	if(e.keyCode==68 || e.keyCode==39) moveRight=true
	if(e.keyCode==83 || e.keyCode==40) moveDown=true
};

var handleKeyUp = function(e){
	if (!e) {var e = window.event;}

	if(e.keyCode==65 || e.keyCode==37) moveLeft=false
	if(e.keyCode==87 || e.keyCode==38) moveUp=false
	if(e.keyCode==68 || e.keyCode==39) moveRight=false
	if(e.keyCode==83 || e.keyCode==40) moveDown=false
	
	if(game_options.controlTeclado && (e.keyCode==32 || e.keyCode==13) && objetoActivable){
        stage.update();
        capturaPantalla()
        guardarPartida("autosave",screenShot)
		iniciaDialogo(objetoActivable.nombre)
		objetoActivable.removeAllEventListeners("click") // Sólo se puede usar una vez
		objetoActivable.activo=false;
		//objetoActivable.shadow=null;
        objetoActivable.removeChildAt(0)
		objetoActivable=false;
	}
};

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

var destino={x:0,y:0};
var dir=[0,0]

var monster_hit;
//var siguienteEncuentro=100+5+Math.floor(Math.random()*10);
function tick(event) {
	var benchmark_time=new Date().getTime();
	
	if(!libroAbierto && !getEstado('dialogoAbierto')){
		
	// Se regenera la energía
	actualizaEnergia((game_values.energia_recuperada_segundo+
		dotes["Absorber energía ambiental"].aprendido*game_values.energia_recuperada_nivel)*event.delta/1000)
		
	if(!getEstado('vistoEnemigo')){
		for(var m in monster_list){
			var monster=monster_list[m]
			if(Math.abs(monster.x-spirit.x)<3*32*pixelScale && Math.abs(monster.y-spirit.y)<3*32*pixelScale){
                stage.update();
                capturaPantalla()
                guardarPartida("autosave",screenShot)
				estado.vistoEnemigo=true;
				iniciaDialogo("vesPrimerEnemigo")
			}
		}
	}
	
	// Gestión de brillos
	for(var i in testLayers['brillos_layer'].children){
		var brillo=testLayers['brillos_layer'].children[i]
		brillo.vida-=event.delta
		if(brillo.vida<0) testLayers['brillos_layer'].removeChild(brillo)
		var distMax=50
		if(dotes["Atraer partículas"].aprendido) distMax=150
		if(Math.abs(spirit.x+15*pixelScale-brillo.x)<distMax*pixelScale && Math.abs(spirit.y+11*pixelScale-brillo.y)<distMax*pixelScale){
			
			var velocidad=80
			if(dotes["Atraer partículas"].aprendido) velocidad=150
			var target={x:spirit.x+15*pixelScale,y:spirit.y+11*pixelScale};
			var distancia=dist(brillo,target)
			
			if(distancia > 10){
				brillo.x+=event.delta/1000*(target.x-brillo.x)*velocidad/distancia*(pixelScale/2)
				brillo.y+=event.delta/1000*(target.y-brillo.y)*velocidad/distancia*(pixelScale/2)
			}
			else{
				testLayers['brillos_layer'].removeChild(brillo)
				// Aumentar la energía espiritual
				actualizaEnergia(game_values.energia_brillo)
			}
		}
		else{
			if(!brillo.dir)
			brillo.x+=pixelScale*brillo.velX*event.delta/1000
			brillo.y+=pixelScale*brillo.velY*event.delta/1000
		}
	}
	
	// Gestion de balas
	for(var i in  testLayers['balas_layer'].children){
		
		var bala=testLayers['balas_layer'].children[i]
		if(bala.seguir)
			if(!bala.espera_giro || bala.espera_giro<0){
				var dest_x=bala.seguir.x+((bala.seguir.size==2)?32:16)*pixelScale
				var dest_y=bala.seguir.y+((bala.seguir.size==2)?32:16)*pixelScale
				var target={'x':dest_x,'y':dest_y}
				var distancia=dist(bala,target)
				bala.velx=(target.x-bala.x)*bala.velocidad/distancia
				bala.vely=(target.y-bala.y)*bala.velocidad/distancia
				bala.espera_giro=100;
			}
			else {
				bala.espera_giro-=event.delta
				//frameRate.text=bala.espera_giro
			}
		
		bala.x+=event.delta/1000*bala.velx*(pixelScale/2)
		bala.y+=event.delta/1000*bala.vely*(pixelScale/2)
		bala.lifetime-=event.delta
		if(bala.lifetime<0)
			testLayers['balas_layer'].removeChild(bala);
		// Si chocamos contra un muro
		else if(mapa_caminos[Math.floor(bala.x/(32*pixelScale))][Math.floor(bala.y/(32*pixelScale))]==0 && 
				mapa_caminos[Math.floor(bala.x/(32*pixelScale))][Math.floor(bala.y/(32*pixelScale))+1]==0) 
			testLayers['balas_layer'].removeChild(bala);
		else if(bala.target=="character"){
			for(var i in party){
				var pt = bala.localToLocal(5, 5, party[i].walker);
				if(party[i].walker.hitTest(pt.x, pt.y)){
					testLayers['balas_layer'].removeChild(bala);
					atacaPersonaje(party[i],bala.damage)
				}
			}
		}
		else if(bala.target=="monster") for(var m in monster_list){
			var monster=monster_list[m]
			var pt = bala.localToLocal(5, 5, monster.sprite);
			if(monster.sprite.hitTest(pt.x, pt.y)){
				testLayers['balas_layer'].removeChild(bala);
				monster.sprite.alpha=0.5;
				monster_hit=monster
				setTimeout(function(){
					monster_hit.sprite.alpha=1;
				},100)
				
				monster.life-=bala.damage
				if(monster.life<=0){
					// Mostramos los brillos
					var numBrillos=3;
					if(monster.nombre=="Gelatina verde") numBrillos=5
					if(monster.nombre=="Gelatina negra") numBrillos=10
					for(var i=0;i<numBrillos;i++)
						creaBrillo(monster.x+16*pixelScale,monster.y-16*pixelScale)
					
					// Quitamos el monstruo
					actores.splice(actores.indexOf(monster), 1);
					monster_list.splice(monster_list.indexOf(monster), 1);
					mapa_caminos[monster.map_x][monster.map_y]=1;
					testLayers['character_layer'].removeChild(monster);
					
					if(!getEstado('eliminasPrimerEnemigo')){
                        stage.update();
                        capturaPantalla()
                        guardarPartida("autosave",screenShot)
						estado.eliminasPrimerEnemigo=true;
						iniciaDialogo("eliminasPrimerEnemigo")
					}
				}
				else{
					if(!monster.barra_vida){
						monster.barra_vida = new createjs.Shape();
						if(monster.size==2)
							monster.barra_vida.graphics.beginFill("#f00").drawRect(0,0,64,2);
						else monster.barra_vida.graphics.beginFill("#f00").drawRect(0,0,32,2);
						monster.addChild(monster.barra_vida)
						
					}
					
					var ancho_barra=Math.floor(32*pixelScale*monster.life/monster.max_life)
					if(monster.size==2) ancho_barra=Math.floor(64*pixelScale*monster.life/monster.max_life)
					monster.barra_vida.graphics.command.w=ancho_barra;
					monster.barra_vida.x=16*pixelScale-ancho_barra/2;
					if(monster.size==2) monster.barra_vida.x=32*pixelScale-ancho_barra/2;
                    
                    iCache(monster.barra_vida)
				}
				
				break;
			}
		}
	}
	
	var y=spirit.map_y;
		
		for(var actor in actores){
			actor=actores[actor]
			
	
			// Se reduce el escudo
			if(actor.escudo){
				actor.escudo_actual-=10*event.delta/1000
				if(actor.escudo_actual>0){
					var ancho=32*pixelScale*actor.escudo_actual/actor.max_escudo
					actor.barra_escudo.graphics.command.w=ancho
					actor.barra_escudo.x=16*pixelScale-ancho/2
                    iCache(actor.barra_escudo)
				}
				else{
					actor.removeChild(actor.barra_escudo)
					actor.barra_escudo=0;
					var animSpeed=300;
					var ease=createjs.Ease.getPowOut(2);
					createjs.Tween.get(actor.escudo).to({ alpha: 0 },animSpeed,ease)
					createjs.Tween.get(actor.escudo).to({ scaleX: 0 },animSpeed,ease)
					createjs.Tween.get(actor.escudo).to({ scaleY: 0 },animSpeed,ease).call(function(actor){
						actor.removeChild(actor.escudo)
						actor.escudo=0
					},[actor])
				}
			}
			
			// Attacks
			if(actor.attack_type)
				if(actor.next_attack>0){
					actor.next_attack-=event.delta // Si aún no toca el siguiente ataque, vamos reduciendo
				}
				else{
					if(actor.attack_type=='shoot'){
						for(var i in party)
							if(Math.abs(actor.map_x-party[i].map_x)<=5 && Math.abs(actor.map_y-party[i].map_y)<=5){
								actor.next_attack=actor.attack_delay
								
								var bala = new createjs.Bitmap(loader.getResult("bala_gelatina"))
								bala.regX=5;
								bala.regY=5;
								bala.x=actor.x+16*pixelScale
								bala.y=actor.y+15*pixelScale
								bala.damage=10
								bala.target="character"
								
								var dest_x=party[i].x+16*pixelScale
								var dest_y=party[i].y+16*pixelScale
								
								bala.lifetime=2000;
								
								disparaBala(bala,{'x':dest_x,'y':dest_y})
							}
					}
					else if(actor.attack_type=='poison'){
						actor.next_attack=actor.attack_delay
						for(var i in party)
							if((Math.abs(actor.x-party[i].x)<=48*pixelScale) && (Math.abs(actor.y-(party[i].y))<=48*pixelScale)){ // Si están al lado, envenenamos
								atacaPersonaje(party[i],actor.attack_damage)
								var nube_toxica= new createjs.Bitmap(loadImage("nube_toxica"))
								party[i].addChild(nube_toxica)
								
								nube_toxica.x=16*pixelScale
								nube_toxica.y=16*pixelScale
								nube_toxica.scaleX=0;
								nube_toxica.scaleY=0;
								nube_toxica.alpha=1;
								nube_toxica.regX=16*pixelScale
								nube_toxica.regY=16*pixelScale
								
								var animSpeed=300;
								var ease=createjs.Ease.getPowOut(2);
								var easeIn=createjs.Ease.getPowIn(2);
								createjs.Tween.get(nube_toxica).to({ alpha: 0 },animSpeed,easeIn)
								createjs.Tween.get(nube_toxica).to({ scaleX: 1 },animSpeed,ease)
								createjs.Tween.get(nube_toxica).to({ scaleY: 1 },animSpeed,ease).call(function(parent, object){
									parent.removeChild(object);
								},[party[i],nube_toxica])
							}
					}
				}
			
			if(!actor.camino || actor.camino.ruta.length==0){
				if(actor.movimiento) actor.movimiento(actor)
				else if(actor.move=="randomBlob"){
					// Si es una gelatina de movimiento aleatorio y está cerca del espíritu, lo movemos
					if(Math.abs(actor.map_x-spirit.map_x)<6 && Math.abs(actor.map_y-spirit.map_y)<6){
						var pos_dir=[]
						if(actor.map_x>0 && mapa_caminos[actor.map_x-1][actor.map_y]==1) pos_dir.push([actor.map_x-1,actor.map_y])
						if(actor.map_y>0 && mapa_caminos[actor.map_x][actor.map_y-1]==1) pos_dir.push([actor.map_x,actor.map_y-1])
						if(actor.map_x+1<mapa_caminos.length && mapa_caminos[actor.map_x+1][actor.map_y]==1) pos_dir.push([actor.map_x+1,actor.map_y])
						if(actor.map_y+1<mapa_caminos.length && mapa_caminos[actor.map_x][actor.map_y+1]==1) pos_dir.push([actor.map_x,actor.map_y+1])
							
						if(pos_dir.length>0){
							actor.camino={}
							actor.camino.ruta=[]
							var next=Math.floor(Math.random()*pos_dir.length)
							actor.camino.ruta[0]={'x':pos_dir[next][0],'y':pos_dir[next][1]}
						}
					}
				}
				else if(actor.move=="followBlob"){
					for(var i in party) if(Math.abs(actor.map_x-party[i].map_x)<5 && Math.abs(actor.map_y-party[i].map_y)<5){
						if(Math.abs(actor.map_x-party[i].map_x)>Math.abs(actor.map_y-party[i].map_y)){
							if(actor.map_x>party[i].map_x){
								if(mapa_caminos[actor.map_x-1][actor.map_y]==1){
									actor.camino={}
									actor.camino.ruta=[]
									actor.camino.ruta[0]={'x':actor.map_x-1,'y':actor.map_y}
									break;
								}
							}
							else if(mapa_caminos[actor.map_x+1][actor.map_y]==1){
								actor.camino={}
								actor.camino.ruta=[]
								actor.camino.ruta[0]={'x':actor.map_x+1,'y':actor.map_y}
								break;
							}
						}
						
						if(actor.map_y>party[i].map_y){
							if(mapa_caminos[actor.map_x][actor.map_y-1]==1){
								actor.camino={}
								actor.camino.ruta=[]
								actor.camino.ruta[0]={'x':actor.map_x,'y':actor.map_y-1}
								break;
							}
						}
						else if(mapa_caminos[actor.map_x][actor.map_y+1]==1){
							actor.camino={}
							actor.camino.ruta=[]
							actor.camino.ruta[0]={'x':actor.map_x,'y':actor.map_y+1}
							break;
						}
						
						if(actor.map_x>party[i].map_x){
							if(mapa_caminos[actor.map_x-1][actor.map_y]==1){
								actor.camino={}
								actor.camino.ruta=[]
								actor.camino.ruta[0]={'x':actor.map_x-1,'y':actor.map_y}
								break;
							}
						}
						else if(mapa_caminos[actor.map_x+1][actor.map_y]==1){
							actor.camino={}
							actor.camino.ruta=[]
							actor.camino.ruta[0]={'x':actor.map_x+1,'y':actor.map_y}
							break;
						}
					}
				}
			}
			if(actor.camino && actor.camino.ruta.length>0){
				// Si no estamos caminando
				if(!actor.caminando){
					
					// Si el próximo punto es igual al actual, lo quitamos
					if(actor.map_x==actor.camino.ruta[0].x && actor.map_y==actor.camino.ruta[0].y)
						actor.camino.ruta.shift()
					
					// Si no quedan puntos, llegamos al objetivo y salimos
					if(actor.camino.ruta.length==0){
						if(actor.objetivo) llegaObjetivo(spirit)
						continue;
					}
					
					// Si el próximo punto está ocupado, paramos
					if(actor!=spirit && mapa_caminos[actor.camino.ruta[0].x][actor.camino.ruta[0].y]!=1){
						continue;
					}
					
					// Si podemos seguir, cerramos este y abrimos el siguiente
					if(actor!=spirit) mapa_caminos[actor.map_x][actor.map_y]=1;
					actor.map_x=actor.camino.ruta[0].x
					actor.map_y=actor.camino.ruta[0].y
					if(actor!=spirit) mapa_caminos[actor.map_x][actor.map_y]=2;
					
					actor.caminando=true;
					if(actor.walker) actor.walker.gotoAndPlay(actor.direccion);
				}
				
				// Si llegamos aquí estamos caminando
				var vel=0;
				if(actor.seguidor){
					vel=event.delta/1000*actor.velocidad*(pixelScale/2)*(0.5+0.5*actor.life/actor.max_life)
					//if(actor.walker) actor.walker.framerate=Math.round(0.5+0.5*actor.max_life/actor.life)
				}
				else vel=event.delta/1000*actor.velocidad*(pixelScale/2)
				
				// Calculamos el destino
				var dest_x=actor.camino.ruta[0].x*32*pixelScale;
				var dest_y=actor.camino.ruta[0].y*32*pixelScale;
				
				// Calculamos la distancia
				var distancia=dist(actor,{'x':dest_x,'y':dest_y})
				
				if(actor.walker){
					var direccion=getDireccion(actor,dest_x,dest_y)
					if(direccion!=actor.direccion){
						actor.direccion=direccion;
						actor.walker.gotoAndPlay(actor.direccion);
					}
				}
				
				// Si no llegamos al punto avanzamos
				if(distancia>vel){
					actor.x+=vel*(dest_x-actor.x)/distancia;
					actor.y+=vel*(dest_y-actor.y)/distancia;
				}
				else{
					// Llegamos al destino
					actor.x=dest_x;
					actor.y=dest_y;
					
					if(actor.nombre=="Bibliotecaria" && locations[actor.camino.ruta[0].x+"x"+actor.camino.ruta[0].y]){
                        stage.update();
                        capturaPantalla()
                        guardarPartida("autosave",screenShot)
						iniciaDialogo(locations[actor.camino.ruta[0].x+"x"+actor.camino.ruta[0].y].name)
					}
					
					actor.camino.ruta.shift()
					
					
					if(actor==spirit) sigueEspiritu()
					
					// Si no hemos llegado al final del camino
					if(actor.camino.ruta.length>0){
						if(actor!=spirit && mapa_caminos[actor.camino.ruta[0].x][actor.camino.ruta[0].y]!=1){
							if(actor.walker) actor.walker.gotoAndStop(actor.direccion);
							
							actor.caminando=false;
							continue;
						}
						else{
							// Si podemos seguir, cerramos este y abrimos el siguiente
							if(actor!=spirit) mapa_caminos[actor.map_x][actor.map_y]=1;
							actor.map_x=actor.camino.ruta[0].x
							actor.map_y=actor.camino.ruta[0].y
							if(actor!=spirit) mapa_caminos[actor.map_x][actor.map_y]=2;
						}
					}
					else{
						actor.caminando=false;
						if(actor.walker) actor.walker.gotoAndStop(actor.direction);
						actor.camino='';
						
						if(actor.objetivo){
							llegaObjetivo(actor)
						}
						else if(spirit.localizacionObjetivo){
							
							if(!spirit.localizacionObjetivo.used){
								spirit.localizacionObjetivo.tile.gotoAndStop(spirit.localizacionObjetivo.graph2)
								testLayers['map_layer'].uncache
								stage.update()
								testLayers['map_layer'].cache(0,0,32*pixelScale*map_width,32*pixelScale*map_height);
								if(!spirit.localizacionObjetivo.used) mostrar_tesoro()
								
								spirit.localizacionObjetivo.used=true;
							}
							spirit.localizacionObjetivo=false;
						}
						dir=[0,0]
					}
					
					// Aumentamos la posibilidad de encotrar monstruos
				}
			}
			
		}
		
		if(game_options.controlTeclado) controlTeclado(event)
		
		
		setCentro()
		
		//niebla.x=spirit.x+scene.x+16*pixelScale//-1920*niebla.scaleX
		//niebla.y=spirit.y+32*pixelScale+scene.y//-1080*niebla.scaleX
		
		testLayers['character_layer'].sortChildren(function(obj1, obj2, options) {
			 if (obj1.y > obj2.y) { return 1; }
			 if (obj1.y < obj2.y) { return -1; }
			 if(obj1.y == obj2.y && obj1==objetoActivable) { return 1; }
			 if(obj1.y == obj2.y && obj2==objetoActivable) { return -1; }
			 return 0;
		});
		//testLayers['character_layer'].setChildIndex(spirit,testLayers['character_layer'].numChildren-1)
		
	}
    //vari++
	//frameRate.text="("+joystic.x+"x"+joystic.y+" - "+vari+") - "+Math.round(createjs.Ticker.getMeasuredFPS());
    ////iCache(frameRate)
	//frameRate.text=canvasWidth+" - "+sy;
    
    
	stage.update();
    
	//if(moveLeft) console.log(new Date().getTime()-benchmark_time)
}
vari=0

function controlTeclado(event){
	// Movemos el espíritu con el joystic virtual
	if(joystic.x) spirit.x+=event.delta/1000*spirit.velocidad*joystic.x*(pixelScale/2)
	if(joystic.y) spirit.y+=event.delta/1000*spirit.velocidad*joystic.y*(pixelScale/2)
	// Movemos el espíritu con el teclado
	if(moveUp){
		if(moveLeft){
			spirit.y-=event.delta/1000*spirit.velocidad*(pixelScale/2)*0.7
			spirit.x-=event.delta/1000*spirit.velocidad*(pixelScale/2)*0.7
		}
		else if(moveRight){
			spirit.y-=event.delta/1000*spirit.velocidad*(pixelScale/2)*0.7
			spirit.x+=event.delta/1000*spirit.velocidad*(pixelScale/2)*0.7
		}
		else spirit.y-=event.delta/1000*spirit.velocidad*(pixelScale/2)
	}
	else if(moveDown){
		if(moveLeft){
			spirit.y+=event.delta/1000*spirit.velocidad*(pixelScale/2)*0.7
			spirit.x-=event.delta/1000*spirit.velocidad*(pixelScale/2)*0.7
		}
		else if(moveRight){
			spirit.y+=event.delta/1000*spirit.velocidad*(pixelScale/2)*0.7
			spirit.x+=event.delta/1000*spirit.velocidad*(pixelScale/2)*0.7
		}
		else spirit.y+=event.delta/1000*spirit.velocidad*(pixelScale/2)
	}
	else if(moveLeft) spirit.x-=event.delta/1000*spirit.velocidad*(pixelScale/2)
	else if(moveRight) spirit.x+=event.delta/1000*spirit.velocidad*(pixelScale/2)
		
	// Controlamos no salirnos a una zona bloqueada
	if(mapa_caminos[spirit.map_x-1][spirit.map_y]==0) 
		if(spirit.x<(spirit.map_x*32-8)*pixelScale) spirit.x=(spirit.map_x*32-8)*pixelScale
	if(mapa_caminos[spirit.map_x+1][spirit.map_y]==0) 
		if(spirit.x>(spirit.map_x*32+8)*pixelScale) spirit.x=(spirit.map_x*32+8)*pixelScale
	
	if(mapa_caminos[spirit.map_x][spirit.map_y-1]==0) 
		if(spirit.y<(spirit.map_y*32-15)*pixelScale) spirit.y=(spirit.map_y*32-15)*pixelScale
	if(mapa_caminos[spirit.map_x][spirit.map_y+1]==0) 
		if(spirit.y>(spirit.map_y*32+15)*pixelScale) spirit.y=(spirit.map_y*32+15)*pixelScale
	
	// Cambiamos la casilla al movernos
	if(spirit.map_x!=Math.floor((spirit.x+16*pixelScale)/(32*pixelScale))){
		spirit.map_x=Math.floor((spirit.x+16*pixelScale)/(32*pixelScale))
		sigueEspiritu()
	}
	if(spirit.map_y!=Math.floor((spirit.y+16*pixelScale)/(32*pixelScale))){
		spirit.map_y=Math.floor((spirit.y+16*pixelScale)/(32*pixelScale))
		sigueEspiritu()
	}
	
	// Detectar si estamos cerca de un objeto
	// Creamos mapa de objetos
	// Calculamos distancia a casilla
	// For para cada elemento calculamos la distancia (nos quedamos con el más cercano que esté en rango y no inactivo)
	/*var cercano=0
	var min_distancia=64*pixelScale+1
	for(var i=0;i<testLayers['character_layer'].numChildren;i++){
		var child=testLayers['character_layer'].getChildAt(i)
		if(child!=spirit && child.activo){
			if(child.size==2 && Math.abs(child.map_x+1-spirit.map_x)<2 && Math.abs(child.map_y-spirit.map_y)<2){
				var distancia=dist({'x':child.x+32*pixelScale,'y':child.y},spirit)
				if(distancia<min_distancia){
					cercano=child
					min_distancia=distancia
				}
			}

			if(Math.abs(child.map_x-spirit.map_x)<2 && Math.abs(child.map_y-spirit.map_y)<2){
				var distancia=dist(child,spirit)
				if(distancia<min_distancia){
					cercano=child
					min_distancia=distancia
				}
			}
		}
	}
	if(cercano){
		if(objetoActivable!=cercano){
			if(objetoActivable) objetoActivable.removeChildAt(0)
			objetoActivable=cercano
			//objetoActivable.shadow = new createjs.Shadow("#ffff00", 0, 0, 20);
            //objetoActivable.cache(-20,-20,objetoActivable.getBounds().width+120,objetoActivable.getBounds().height+20)
            
             var blurFilter = new createjs.BlurFilter(3, 3, 2);
             var shadow=objetoActivable.sprite.clone()
             shadow.filters = [ new createjs.ColorFilter(0,0,0,1, 255,255,0,0),blurFilter];
             shadow.cache(-20,-20,objetoActivable.getBounds().width+120,objetoActivable.getBounds().height+20)
             objetoActivable.addChildAt(shadow,0)
             //alert((-20)+" / "+(-20)+" / "+(objetoActivable.sprite.getBounds().width+40)+" / "+(objetoActivable.sprite.getBounds().height+40))
		}
	}
	else if(objetoActivable){
		//objetoActivable.shadow=null;
        //objetoActivable.uncache()
        objetoActivable.removeChildAt(0)
		objetoActivable=0;
	}*/
	
	/*if(game_options.versionTactil)
		if(objetoActivable) botonUsar.alpha=0.8
		else botonUsar.alpha=0*/
}

var objetoActivable

function atacaPersonaje(actor,damage){
	if(actor.escudo){
		if(actor.escudo_actual>damage){
			actor.escudo_actual-=damage
			damage=0;
		}
		else damage-=actor.escudo_actual
		
		if(actor.escudo_actual>0){
			var ancho=32*pixelScale*actor.escudo_actual/actor.max_escudo
			actor.barra_escudo.graphics.command.w=ancho
			actor.barra_escudo.x=16*pixelScale-ancho/2
            
            iCache(actor.barra_escudo)
		}
		else{
			actor.removeChild(actor.barra_escudo)
			actor.barra_escudo=0;
			var animSpeed=300;
			var ease=createjs.Ease.getPowOut(2);
			createjs.Tween.get(actor.escudo).to({ alpha: 0 },animSpeed,ease)
			createjs.Tween.get(actor.escudo).to({ scaleX: 0 },animSpeed,ease)
			createjs.Tween.get(actor.escudo).to({ scaleY: 0 },animSpeed,ease).call(function(actor){
				actor.removeChild(actor.escudo)
				actor.escudo=0
			},[actor])
		}
		
		if(!damage) return;
	}
	
	actor.life-=damage
	if(actor.life<0) actor.life=0;
	if(!actor.barra_vida){
		actor.barra_vida = new createjs.Shape();
		actor.barra_vida.graphics.beginFill("#f00").drawRect(0,0,32*pixelScale,2);
		actor.addChild(actor.barra_vida)
	}
	
	var ancho_barra=Math.floor(32*pixelScale*actor.life/actor.max_life)
	actor.barra_vida.graphics.command.w=ancho_barra;
	actor.barra_vida.x=16*pixelScale-ancho_barra/2;
    
    iCache(actor.barra_vida)
}

function creaBrillo(x,y){
	var brillo=createBrillo()
	brillo.x=x+(Math.random()-0.5)*30*pixelScale;
	brillo.y=y+(Math.random()-0.5)*30*pixelScale;
	brillo.velX=(Math.random()-0.5)*60
	brillo.velY=(Math.random()-0.5)*60
	brillo.vida=1000+Math.random()*5000;
	testLayers['brillos_layer'].addChild(brillo)
}

function llegaObjetivo(actor){
	if(actor.objetivo.x>actor.x){
		if(actor.objetivo.walker) actor.objetivo.walker.gotoAndStop("left")
		if(actor.walker) actor.walker.gotoAndStop("right")
	}
	else if(actor.objetivo.x<actor.x){
		if(actor.objetivo.walker) actor.objetivo.walker.gotoAndStop("right")
		if(actor.walker) actor.walker.gotoAndStop("left")
	}
	else if(actor.objetivo.y>actor.y){
		if(actor.objetivo.walker) actor.objetivo.walker.gotoAndStop("back")
		if(actor.walker) actor.walker.walker.gotoAndStop("stand")
	}
	else{
		if(actor.objetivo.walker) actor.objetivo.walker.gotoAndStop("stand")
		if(actor.walker) actor.walker.gotoAndStop("back")
	}

	if(dist(spirit,party[0])>pixelScale*32*4){
        stage.update();
        capturaPantalla()
        guardarPartida("autosave",screenShot)
		iniciaDialogo("Nami lejos")
    }
	else{
		if(actor.objetivo.tipo=="escena"){
			actor.objetivo.removeAllEventListeners("click") // Sólo se puede usar una vez
			actor.objetivo.activo=false;
		}
		iniciaDialogo(actor.objetivo.nombre)
	}
	actor.objetivo=false;
}

function getDireccion(actor, dest_x, dest_y){
	var direccion="walk";
	if(dest_y>actor.y) direccion="walk";
	else if(dest_x>actor.x) direccion="right";
	else if(dest_x<actor.x) direccion="left";
	else if(dest_y<actor.y) direccion="back";
	
	return direccion;
}

function sigueEspiritu(){
	if(!getEstado('mensajeEsperame') && dist(spirit,party[0])>pixelScale*32*5){
        stage.update();
        capturaPantalla()
        guardarPartida("autosave",screenShot)
		iniciaDialogo("mensajeEsperame")
		estado.mensajeEsperame=true;
	}
	//frameRate.text=""
	for(var i in party){
		party[i].camino=new PathFinder(party[i],[spirit.map_x,spirit.map_y])
		party[i].camino.limitMap(9)
		party[i].camino.searchPath()
		
		// Si no hay un camino evitando a otros personajes, buscamos un camino que pase por otros personajes (siguiéndolos)
		//frameRate.text+=party[i].nombre+": "+party[i].camino.ruta.length+"("+((party[i].camino && party[i].camino.ruta.length)?
		//	party[i].camino.ruta[0].x+","+party[i].camino.ruta[0].y:"")+")"+" - "
		if(party[i].camino.ruta.length<2){
			party[i].camino=new PathFinder(party[i],[spirit.map_x,spirit.map_y])
			party[i].camino.ignoreParty()
			party[i].camino.limitMap(9)
			party[i].camino.searchPath()
		}
		
		party[i].camino.removeLast()
					
		party[i].objetivo=false;
		party[i].localizacionObjetivo=false
	}
}


	
function drawTestMap(){
	testLayers['map_layer'].removeAllChildren();
    var maxRow=0;
    var maxCol=0;
    
    var supertiles=[]
    for(var i=0;i<16;i++){
        supertiles[i] = new createjs.Container();
        supertiles[i].x=32*25*(i%4)
        supertiles[i].y=32*25*Math.floor(i/4)
        testLayers['map_layer'].addChild(supertiles[i]);
    }
    
	for (var row=0; row<map_width; row++) {
		for (var col=0; col<map_height; col++) {
            var supertile=Math.floor(row/25)*4+Math.floor(col/25)
            var x=(col%25)*32
            var y=(row%25)*32
			if(typeof map[col][row] == "number" && map[col][row]>0){
				var idx = map[col][row] - 1;
				
				var tile = new createjs.Sprite(tilemaptest);
				tile.gotoAndStop(idx);
				tile.x = x
				tile.y = y
				supertiles[supertile].addChild(tile);
			}
			else for (var tile_level=0; tile_level<map[col][row].length; tile_level++) if(map[col][row][tile_level]){
				var idx = map[col][row][tile_level] - 1;
				
				var tile = new createjs.Sprite(tilemaptest);
				tile.gotoAndStop(idx);
				tile.x = x
				tile.y = y
				supertiles[supertile].addChild(tile);
			}
			/*if(locations[col+"x"+row] && (graph=locations[col+"x"+row].graph)){
				var tile = new createjs.Sprite(tilemaptest);
				tile.gotoAndStop(graph);
				tile.x = 32*pixelScale*col;
				tile.y = 32*pixelScale*row;
				testLayers['map_layer'].addChild(tile);
				if(supertiles[supertile]) supertiles[supertile].tile=tile;
			}*/
			
		}
	}
    
    for(var i=0;i<16;i++){
        supertiles[i].cache(0,0,32*25,32*25)
    }
}

function createBlob(pj,tam=32){
	var charimg=loadImage(pj);
	var spriteSheet = new createjs.SpriteSheet({
			framerate: 30,
			"images": [charimg],
			"frames": {"width": tam*pixelScale, "height": tam*pixelScale, "regX": 0, "regY": 0},
			"animations": {
				"move": [0, 7, "move", 0.1]
			}
		});
		
	
	pj = new createjs.Sprite(spriteSheet, "stand");
	var hit = new createjs.Shape();
	hit.graphics.beginFill("#000").drawRect(-5*pixelScale, -5*pixelScale, (tam+10)*pixelScale, (tam+10)*pixelScale);
	pj.hitArea = hit;
	return pj;
}

function createBrillo(pj){
	var spriteSheet = new createjs.SpriteSheet({
			framerate: 30,
			"images": [loadImage("brillo")],
			"frames": {"width": 10*pixelScale, "height": 10*pixelScale, "regX": 5*pixelScale, "regY": 5*pixelScale},
			"animations": {
				"float": [0, 7, "float", 0.1]
			}
		});
	return new createjs.Sprite(spriteSheet, "float");
}

function createCharacterImage(pj){
	var charimg=loadImage(pj);
	var spriteSheet = new createjs.SpriteSheet({
			framerate: 30,
			"images": [charimg],
			"frames": {"width": 32*pixelScale, "height": 48*pixelScale, "regX": 0, "regY": 0},
			"animations": {
				"stand": 0,
				"walk": [0, 3, "walk", 0.1],
				"left": [4, 7, "left", 0.1],
				"right": [8, 11, "right", 0.1],
				"back": [12, 15, "back", 0.1]
			}
		});
		
	
	pj = new createjs.Sprite(spriteSheet, "stand");
	var hit = new createjs.Shape();
	hit.graphics.beginFill("#000").drawRect(0, 0, 32*pixelScale, 48*pixelScale);
	pj.hitArea = hit;
	return pj;
}

function dist(a,b){
	return Math.sqrt(Math.pow(a.x-b.x,2)+Math.pow(a.y-b.y,2));
}


/*********************************************************

					BÚSQUEDA DE CAMINOS
					
 *********************************************************/

function PathFinder(actor,destino,adyacente=false){
	this.actor=actor
	this.origen=[actor.map_x,actor.map_y]
	this.destino={'x':destino[0],'y':destino[1]}
	// Los nodos que podemos probar. Sabemos la distancia a estos desde el origen.
	this.nodosAbiertos=[{'x':this.origen[0],'y':this.origen[1],'dist_origen':0,'dist_estimada':10,}]
	this.adyacente=adyacente
	this.ruta=[]
	this.mapa=[]
	for(var i=0;i<mapa_caminos.length;i++){
		this.mapa.push([])
		for(var j=0;j<mapa_caminos[i].length;j++)
			this.mapa[i][j]=mapa_caminos[i][j]
	}
	var x=4;
	var y=20;
}

PathFinder.prototype.ignoreParty=function(){
	for(var i in party)
		this.mapa[party[i].map_x][party[i].map_y]=1;
}

PathFinder.prototype.limitMap=function(radius){
	for(var i=-radius;i<=radius;i++){
		if(this.actor.map_x+i>=0 && this.actor.map_x+i<this.mapa.length){
			if(this.actor.map_y-radius>=0)
				this.mapa[this.actor.map_x+i][this.actor.map_y-radius]=0;
			
			if(this.actor.map_y+radius<this.mapa[0].length)
				this.mapa[this.actor.map_x+i][this.actor.map_y+radius]=0;
		}
		
		if(this.actor.map_y+i>=0 && this.actor.map_y+i<this.mapa[0].length){
			if(this.actor.map_x-radius>=0)
				this.mapa[this.actor.map_x-radius][this.actor.map_y+i]=0;
			
			if(this.actor.map_x+radius<this.mapa.length)
				this.mapa[this.actor.map_x+radius][this.actor.map_y+i]=0;
		}
	}
}

PathFinder.prototype.removeLast=function(){
	this.ruta.pop();
}


PathFinder.prototype.finalNode=function(node,anterior){
	if((this.adyacente && ((node.y==this.destino.y && Math.abs(node.x-this.destino.x)==1) ||
			(node.x==this.destino.x && Math.abs(node.y-this.destino.y)==1))) || node.x==this.destino.x && node.y==this.destino.y){
		this.ruta=[node]
		if(anterior){
			node.anterior=anterior;
			while(this.ruta[0].anterior.anterior) this.ruta.unshift(this.ruta[0].anterior)
		}
		return true;
	}
}

PathFinder.prototype.searchPath=function (){
	//if(this.mapa[this.destino.x][this.destino.y]==2) return this.addSiCamina();
		
	if(this.finalNode(this.nodosAbiertos[0],false)) return this.addSiCamina();
	
	var maxIteraciones=100
	while(maxIteraciones>0){
		// Terminamos si no hay camino
		if(!this.nodosAbiertos.length) return this.addSiCamina();
		
		maxIteraciones--;
		// Escogemos nodo de menor distancia de la lista abierta
		var nodo_pos=this.getMenor();
		
		var nodo=this.nodosAbiertos[nodo_pos]
		
		// Sacamos de lista abierta y metemos en cerrada
		this.nodosAbiertos.splice(nodo_pos,1)
		this.mapa[nodo.x][nodo.y]=2
		
		var x=4;
		var y=20;
		
		// Obtenemos adyacentes accesibles a ese nodo
		var adyacentes=this.getAdyacentes(nodo)
		
		// Si alguno es final, terminamos aquí
		for(var adyacente in adyacentes)
			if(this.finalNode(adyacentes[adyacente],nodo)) return this.addSiCamina();
		// Calculamos distancia estimada para cada nodo
		for(var adyacente in adyacentes)
			adyacentes[adyacente].dist_estimada=adyacentes[adyacente].dist_origen+
				10*(Math.abs(this.destino.x-adyacentes[adyacente].x)+Math.abs(this.destino.y-adyacentes[adyacente].y))
		// Metemos nodos en lista abierta o actualizamos
		for(var adyacente in adyacentes){
			adyacentes[adyacente].anterior=nodo;
			for(var i in this.nodosAbiertos)
				if(this.nodosAbiertos[i].x==adyacentes[adyacente].x && this.nodosAbiertos[i].y==adyacentes[adyacente].y){
					if(adyacentes[adyacente].dist_estimada<this.nodosAbiertos[i].dist_estimada)
							this.nodosAbiertos[i]=adyacentes[adyacente];
					break;
				}
			this.nodosAbiertos.push(adyacentes[adyacente])
		}
	}
	//alert("Demasiadas iteraciones") //<< Algún error debe haber con el algoritmo
	//alert(this.mapa) //<< Creo que el error está al intentar llegar al nodo actual, o quizás cuando está encima de otro pj
}

PathFinder.prototype.addSiCamina=function (){
	// Si está caminando y el punto no coincide, metemos el punto
	
	if(this.actor.caminando){
		if(!this.ruta.length || this.ruta[0].x!=this.actor.map_x || this.ruta[0].y!=this.actor.map_y){
			this.ruta.unshift({"x":this.actor.map_x,"y":this.actor.map_y})
		}
	}
}

// Escogemos nodo de menor distancia de la lista abierta
PathFinder.prototype.getMenor=function (){
	var menorDistancia=10000000000000;
	var nodoElegido=0;
	for(var nodo in this.nodosAbiertos){
		if(this.nodosAbiertos[nodo].dist_estimada<menorDistancia){
			menorDistancia=this.nodosAbiertos[nodo].dist_estimada;
			nodoElegido=nodo;
		}
	}
	return nodoElegido;
}

// Obtenemos adyacentes accesibles a nodo
PathFinder.prototype.getAdyacentes=function (nodo){
	var x=nodo.x
	var y=nodo.y
	
	var adyacentes=[]
	
	function addNode(x,y,mapa,nodo){
		if(y>=0 && x>=0 && y<mapa[0].length && x<mapa.length && mapa[x][y]==1)
			adyacentes.push({'x':x,'y':y,'dist_origen':10+nodo.dist_origen})
	}
	
	function addNodeDiagonal(x,y,mapa,nodo,des_x,des_y){
		if((y+des_y)>=0 && (x+des_x)>=0 && (y+des_y)<mapa[0].length && (x+des_x)<mapa.length && mapa[(x+des_x)][(y+des_y)]==1
			 && mapa[x][y+des_y]!=0 && mapa[x+des_x][y]!=0)
			adyacentes.push({'x':(x+des_x),'y':(y+des_y),'dist_origen':10+nodo.dist_origen})
	}
	
	addNode(x+1,y,this.mapa,nodo)
	addNode(x,y+1,this.mapa,nodo)
	addNode(x-1,y,this.mapa,nodo)
	addNode(x,y-1,this.mapa,nodo)
	
	addNodeDiagonal(x,y,this.mapa,nodo,+1,+1)
	addNodeDiagonal(x,y,this.mapa,nodo+1,-1)
	addNodeDiagonal(x,y,this.mapa,nodo,-1,+1)
	addNodeDiagonal(x,y,this.mapa,nodo,-1,-1)
	
	return adyacentes;
}

	
/*********************************************************

					UTILIDADES BÁSICAS
					
 *********************************************************/

 var imagesLoaded=[]
function loadImage(name)
{
	var img=loader.getResult(name);
	if(pixelScale==1) return img
	if(imagesLoaded[name]) return imagesLoaded[name];
	var scale=pixelScale
	//return img
//	img=loader.getResult(img);
  scale = snapValue(scale,.5);
  if ( scale <= 0 ) scale = 0.5;
  var pixelSize = (scale+0.99) | 0;
  var src_canvas = document.createElement('canvas');
  src_canvas.width = img.width;
  src_canvas.height = img.height;
  var src_ctx = src_canvas.getContext('2d');
  src_ctx.drawImage(img, 0, 0);
  var src_data = src_ctx.getImageData(0, 0, img.width, img.height).data;
  var dst_canvas = document.createElement('canvas');
  dst_canvas.width = (img.width * scale+1) | 0;
  dst_canvas.height = (img.height * scale+1) | 0;
  var dst_ctx = dst_canvas.getContext('2d');
  var offset = 0;
  for (var y = 0; y < img.height; ++y) {
      for (var x = 0; x < img.width; ++x) {
          var r = src_data[offset++];
          var g = src_data[offset++];
          var b = src_data[offset++];
          var a = src_data[offset++] / 255; // the alpha value needs to be divided
          dst_ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
          dst_ctx.fillRect(x * scale, y * scale, pixelSize, pixelSize);
      }
  }
  
	imagesLoaded[name]=dst_canvas
  return dst_canvas;
}	 

function nearestNeighborScale(img, scale)
{
	//return img
//	img=loader.getResult(img);
	
  scale = snapValue(scale,.5);
  if ( scale <= 0 ) scale = 0.5;
  var pixelSize = (scale+0.99) | 0;
  var src_canvas = document.createElement('canvas');
  src_canvas.width = img.width;
  src_canvas.height = img.height;
  var src_ctx = src_canvas.getContext('2d');
  src_ctx.drawImage(img, 0, 0);
  var src_data = src_ctx.getImageData(0, 0, img.width, img.height).data;
  var dst_canvas = document.createElement('canvas');
  dst_canvas.width = (img.width * scale+1) | 0;
  dst_canvas.height = (img.height * scale+1) | 0;
  var dst_ctx = dst_canvas.getContext('2d');
  var offset = 0;
  for (var y = 0; y < img.height; ++y) {
      for (var x = 0; x < img.width; ++x) {
          var r = src_data[offset++];
          var g = src_data[offset++];
          var b = src_data[offset++];
          var a = src_data[offset++] / 255; // the alpha value needs to be divided
          dst_ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
          dst_ctx.fillRect(x * scale, y * scale, pixelSize, pixelSize);
      }
  }
  return dst_canvas;
}

function snapValue(value,snap)
{
  var roundedSnap = (value/snap + (value > 0 ? .5 : -.5)) | 0;
  return roundedSnap * snap;
}