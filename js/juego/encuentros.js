var interfaz_batalla=null;
var capa_monstruos, capa_seleccion_mostruos, capa_dialogo, personaje, textoCabecera

var pos_pantalla_de_juego;

function entraEncuentro(){
		interfaz_batalla=new createjs.Container();
		interfaz_batalla.scaleX=scale;
		interfaz_batalla.scaleY=scale;
		interfaz_batalla.addChild(new createjs.Bitmap(loader.getResult("mazmorra")))
		
		var barra_personajes=new createjs.Bitmap(loader.getResult("barra_personajes"));
		barra_personajes.y=746
		interfaz_batalla.addChild(barra_personajes)
		
		/*var personaje=new createjs.Bitmap(loader.getResult("personaje"));
		personaje.y=746
		personaje.x=793
		interfaz_batalla.addChild(personaje)*/
		
		var spriteSheet = new createjs.SpriteSheet({images: [loader.getResult("personaje")],frames: {width:342, height:342},animations: {normal:[0], hover:[1]}});
		personaje = new createjs.Sprite(spriteSheet);
		personaje.y=746
		personaje.x=793
		personaje.helper = new createjs.ButtonHelper(personaje, "normal", "hover", "normal");
		interfaz_batalla.addChild(personaje)
		
		var vida = new createjs.Shape();
		vida.graphics.beginFill("#f00").drawRect(personaje.x+personaje.getBounds().width/2-80,1040,160,10);
		interfaz_batalla.addChild(vida)
		
		personaje.barra_vida=vida
		personaje.vida=personaje.max_vida=200;
		
		capa_seleccion_mostruos=new createjs.Container();
		interfaz_batalla.addChild(capa_seleccion_mostruos)
		
		capa_monstruos=new createjs.Container();
		interfaz_batalla.addChild(capa_monstruos)
		
		capa_dialogo=new createjs.Container();
		interfaz_batalla.addChild(capa_dialogo)
		
		textoCabecera = new createjs.Text(textos["¡Monstruos!"], "50px 'Merienda One',Cursive", "#FFF");
		textoCabecera.x = 960;
		textoCabecera.y = 40;
		textoCabecera.textAlign = "center"
		interfaz_batalla.addChild(textoCabecera)
	addMonsters()
	stage.addChildAt(interfaz_batalla,0);
	
	//interfaz_batalla.updateCache();
	
	//stage.addChildAt(interfaz_batalla,0);
	
	//esquina_salida.visible = false;
	$('canvas').css('background','black')
	var animSpeed=2000;
	var ease=createjs.Ease.getPowOut(2);
	pantalla_de_juego.cache(0,0,1920,1080)
	createjs.Tween.get(pantalla_de_juego).to({ scaleX: scale*3 },animSpeed,ease)
	createjs.Tween.get(pantalla_de_juego).to({ scaleY: scale*3 },animSpeed,ease)
	//createjs.Tween.get(pantalla_de_juego).to({ x: character.x-1920+scene.x},animSpeed,ease)
	//createjs.Tween.get(pantalla_de_juego).to({ y: character.y-1080+64+scene.y},animSpeed,ease)
	pos_pantalla_de_juego=[pantalla_de_juego.x,pantalla_de_juego.y]
	createjs.Tween.get(pantalla_de_juego).to({ x: -960},animSpeed,ease)
	createjs.Tween.get(pantalla_de_juego).to({ y: -540},animSpeed,ease)
	
	setTimeout(function(){
		createjs.Tween.get(pantalla_de_juego).to({ alpha: 0 },1500,ease).call(function(){
			stage.removeChild(pantalla_de_juego)
			turnoPersonaje()
			//victoria()
		})
	},500)
}


function victoria(){
	textoCabecera.text=textos["¡Victoria!"]
	
	var animSpeed=1000;
	var ease=createjs.Ease.getPowOut(2);
	interfaz_batalla.cache(0,0,canvasWidth,canvasHeight)
		
	stage.addChild(pantalla_de_juego)
	var animSpeed=1000;
	var ease=createjs.Ease.getPowOut(2);
	createjs.Tween.get(pantalla_de_juego).to({ scaleX: 1 },animSpeed,ease)
	createjs.Tween.get(pantalla_de_juego).to({ scaleY: 1 },animSpeed,ease)
	createjs.Tween.get(pantalla_de_juego).to({ x: 0 },animSpeed,ease)
	createjs.Tween.get(pantalla_de_juego).to({ y: 0 },animSpeed,ease).call(function(){
		stage.removeChild(interfaz_batalla)
		interfaz_batalla=null;
		pantalla_de_juego.uncache()
	})
	createjs.Tween.get(pantalla_de_juego).to({ alpha: 1 },500,ease)
}

var monstruos=new Array();
function addMonsters(){
	var num=Math.ceil(Math.random()*3);
	
	if(num==2 || num==3){
		creaMonstruo(650,650)
		creaMonstruo(1280,650)
		
	}
	
	if(num==1 || num==3)
		creaMonstruo(960,700)
}

function creaMonstruo(x,y){
	var monstruo=new createjs.Bitmap(loader.getResult("monstruo"))
	monstruo.y=y-monstruo.getBounds().height;
	monstruo.x=x-monstruo.getBounds().width/2;
	monstruos.push(monstruo)
	capa_monstruos.addChild(monstruo)
	
	var vida = new createjs.Shape();
	vida.graphics.beginFill("#f00").drawRect(x-80,y-20,160,10);
	capa_monstruos.addChild(vida)
	
	monstruo.barra_vida=vida
	monstruo.vida=100;
	monstruo.max_vida=100;
	
	return monstruo;
}

function turnoPersonaje(){
	personaje.addEventListener("click",seleccionaPersonaje)
	textoCabecera.text=textos["Selecciona personaje"]
	personaje.helper.enabled=true;
	personaje.helper.play=true;
}

function seleccionaPersonaje(){
	personaje.removeAllEventListeners("click")
	textoCabecera.text=textos["Escoge acción"]
	personaje.helper.enabled=false;
	personaje.helper.play=false;
	
	var dialogo_combate=new createjs.Bitmap(loader.getResult("dialogo_combate"))
	capa_dialogo.addChild(dialogo_combate);
	capa_dialogo.x=960-dialogo_combate.getBounds().width/2;
	capa_dialogo.y=540-dialogo_combate.getBounds().height/2;
	
	var i=0;
	for(var habilidad in habilidades){
		if(habilidades[habilidad] > 0){
			i++;
			AddOpcionDialogo(textos[habilidad],window["accion_"+habilidad],i)
		}
	}
	//AddOpcionDialogo("Defender",defender,2)
}

function AddOpcionDialogo(texto,accion,pos){
	var label2 = new createjs.Text(texto, "50px 'Merienda One',Cursive", "#FF0");
	label2.x = 100;
	label2.y = 70*pos;
	
	// create a rectangle shape the same size as the text, and assign it as the hitArea
	// note that it is never added to the display list.
	var hit = new createjs.Shape();
	hit.graphics.beginFill("#000").drawRect(0, 0, label2.getMeasuredWidth(), label2.getMeasuredHeight());
	label2.hitArea = hit;
	
	label2.on("mouseover", iluminaBoton);
	label2.on("mouseout", iluminaBoton);
	label2.on("click",accion)
	capa_dialogo.addChild(label2);
}

function accion_Curar(){
	textoCabecera.text=textos["Selecciona personaje"]
	capa_dialogo.removeAllChildren();
	
	personaje.on("click", curarPersonaje);
}

function curarPersonaje(event){
	personaje.removeAllEventListeners()
	
	var curacion=new createjs.Bitmap(loader.getResult("curar"));
	curacion.x=event.target.x+event.target.getBounds().width/2
	curacion.y=event.target.y+event.target.getBounds().height/2
	interfaz_batalla.addChild(curacion)
	
	curacion.x=event.target.x+event.target.getBounds().width/2
	curacion.y=event.target.y+event.target.getBounds().height/2
	curacion.scaleX=0;
	curacion.scaleY=0;
	curacion.alpha=1;
	curacion.regX=curacion.getBounds().width/2
	curacion.regY=curacion.getBounds().height/2
	
	var animSpeed=500;
	var ease=createjs.Ease.getPowOut(2);
	var easeIn=createjs.Ease.getPowIn(2);
	createjs.Tween.get(curacion).to({ alpha: 0 },animSpeed,easeIn)
	createjs.Tween.get(curacion).to({ scaleX: 1 },animSpeed,ease)
	createjs.Tween.get(curacion).to({ scaleY: 1 },animSpeed,ease)
	createjs.Tween.get(curacion).to({ rotation: 360},animSpeed);
	
	var curacion=habilidades["Curar"]*2
	if(curacion+personaje.vida>personaje.max_vida) curacion=personaje.max_vida-personaje.vida;
	personaje.vida+=curacion;
	var aumenta=160*curacion/personaje.max_vida
	createjs.Tween.get(personaje.barra_vida).to({x: personaje.barra_vida.x-aumenta/2 },animSpeed,ease)
	createjs.Tween.get(personaje.barra_vida.graphics.command).to({w: personaje.barra_vida.graphics.command.w+aumenta },animSpeed,ease).call(function(){
		finAcciones()
	})
	
}

function accion_Atacar(){
	textoCabecera.text=textos["Escoge un monstruo"]
	capa_dialogo.removeAllChildren();
	
	for(var monstruo in monstruos){
		monstruos[monstruo].on("mouseover", handleMonsterOver);
		monstruos[monstruo].on("mouseout", handleMonsterOver);
		monstruos[monstruo].on("click", atacaMonstruo);
	}
}

function atacaMonstruo(event){
	capa_seleccion_mostruos.removeAllChildren();
	for(var monstruo in monstruos)
		monstruos[monstruo].removeAllEventListeners()
		
	var monstruo=event.target;
	
	var ataque=new createjs.Bitmap(loader.getResult("ataque"));
	ataque.x=event.target.x+event.target.getBounds().width/2
	ataque.y=event.target.y+event.target.getBounds().height/2-20
	capa_monstruos.addChild(ataque)
	
	ataque.scaleX=0;
	ataque.scaleY=0;
	ataque.alpha=1;
	
	var animSpeed=500;
	var ease=createjs.Ease.getPowOut(2);
	createjs.Tween.get(ataque).to({ alpha: 0 },animSpeed,ease)
	createjs.Tween.get(ataque).to({ scaleX: scale*2 },animSpeed,ease)
	createjs.Tween.get(ataque).to({ scaleY: scale*2 },animSpeed,ease)
	createjs.Tween.get(ataque).to({ x: event.target.x+event.target.getBounds().width/2-ataque.getBounds().width/2},animSpeed,ease)
	createjs.Tween.get(ataque).to({ y: event.target.y+event.target.getBounds().height/2-ataque.getBounds().height/2-20},animSpeed,ease);
	
	var damage=habilidades["Atacar"]*2
	if(damage>monstruo.vida) damage=monstruo.vida;
	monstruo.vida-=damage;
	var reduce=160*damage/monstruo.max_vida
	createjs.Tween.get(monstruo.barra_vida).to({x: monstruo.barra_vida.x+reduce/2 },animSpeed,ease)
	createjs.Tween.get(monstruo.barra_vida.graphics.command).to({w: monstruo.barra_vida.graphics.command.w-reduce },animSpeed,ease).call(function(){
		if(monstruo.vida==0){
			createjs.Tween.get(monstruo).to({x: monstruo.x+monstruo.getBounds().width/2 },animSpeed,ease)
			createjs.Tween.get(monstruo).to({y: monstruo.y+monstruo.getBounds().height/2 },animSpeed,ease)
			createjs.Tween.get(monstruo).to({scaleX: 0 },animSpeed,ease)
			createjs.Tween.get(monstruo).to({scaleY: 0 },animSpeed,ease).call(function(){
				// Eliminamos el monstruo
				monstruos.splice(monstruos.indexOf(monstruo), 1);
				  
				capa_monstruos.removeChild(monstruo.barra_vida)
				capa_monstruos.removeChild(monstruo)
				
				if(monstruos.length)
					finAcciones()
				else victoria()
			})
		}
		else finAcciones()
	})
	
}

function finAcciones(){
	textoCabecera.text=textos["Los monstruos atacan"]
	
	for(var monstruo in monstruos)
		monstruos[monstruo].ataco=false;
	
	atacanMonstruos()
}

function atacanMonstruos(){
	for(var monstruo in monstruos)
		if(!monstruos[monstruo].ataco){
			monstruos[monstruo].ataco=true;
			
			capa_seleccion_mostruos.removeAllChildren();
			var seleccionado=new createjs.Bitmap(loader.getResult("seleccionado"));
			seleccionado.x=monstruos[monstruo].x+monstruos[monstruo].getBounds().width/2-seleccionado.getBounds().width/2
			seleccionado.y=monstruos[monstruo].y+monstruos[monstruo].getBounds().height-seleccionado.getBounds().height*3/4
			capa_seleccion_mostruos.addChild(seleccionado)
			
			setTimeout(function(){
				var ataque=new createjs.Bitmap(loader.getResult("ataque"));
				ataque.x=personaje.x+personaje.getBounds().width/2
				ataque.y=personaje.y+personaje.getBounds().height/2-20
				capa_monstruos.addChild(ataque)
				
				ataque.scaleX=0;
				ataque.scaleY=0;
				ataque.alpha=1;
				
				var animSpeed=500;
				var ease=createjs.Ease.getPowOut(2);
				createjs.Tween.get(ataque).to({ alpha: 0 },animSpeed,ease)
				createjs.Tween.get(ataque).to({ scaleX: scale*2 },animSpeed,ease)
				createjs.Tween.get(ataque).to({ scaleY: scale*2 },animSpeed,ease)
				createjs.Tween.get(ataque).to({ x: personaje.x+personaje.getBounds().width/2-ataque.getBounds().width/2},animSpeed,ease)
				createjs.Tween.get(ataque).to({ y: personaje.y+personaje.getBounds().height/2-ataque.getBounds().height/2-20},animSpeed,ease);
				
				var damage=10
				if(damage>personaje.vida) damage=personaje.vida;
				personaje.vida-=damage;
				var reduce=160*damage/personaje.max_vida
				createjs.Tween.get(personaje.barra_vida).to({x: personaje.barra_vida.x+reduce/2 },animSpeed,ease)
				createjs.Tween.get(personaje.barra_vida.graphics.command).to({w: personaje.barra_vida.graphics.command.w-reduce },animSpeed,ease).call(function(){
					atacanMonstruos()
				})
			},500)
			return;
		}
		
	turnoPersonaje()
}

function handleMonsterOver(event) {
	if(event.type == "mouseover"){
		var seleccionado=new createjs.Bitmap(loader.getResult("seleccionado"));
		seleccionado.x=event.target.x+event.target.getBounds().width/2-seleccionado.getBounds().width/2
		seleccionado.y=event.target.y+event.target.getBounds().height-seleccionado.getBounds().height*3/4
		capa_seleccion_mostruos.addChild(seleccionado)
	}
	else{
		capa_seleccion_mostruos.removeAllChildren();
	}
}

function iluminaBoton(event) {
	event.target.color = (event.type == "mouseover") ? "#FFF" : "#FF0"; 
	//event.target.cursor = (event.type == "mouseover") ? "pointer" : "arrow"; 
}