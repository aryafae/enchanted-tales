var pila_acciones=[]
function iniciaDialogo(nombre){
	if(dialogos[nombre]){
		pila_acciones=[]
		capa_interfaz.mouseEnabled=false;
		scene.mouseEnabled=false;
		scene.tickEnabled =false;
		estado.dialogoAbierto=true;
		//musicaExploracion.stop()
		//musicaDialogo.play()
		ejecutarAcciones(dialogos[nombre])
	}
}

function ejecutarAcciones(acciones){
	if(!acciones.length) siguienteAccion()
	pila_acciones.push({'indice':0,'acciones':acciones})
	var acc_act=pila_acciones[pila_acciones.length-1];
	ejecutarAccion(acc_act.acciones[acc_act.indice])
}

function siguienteAccion(){
	if(!pila_acciones.length){
		// Fin diálogo
		finDialogo()
		return;
	}
	var acc_act=pila_acciones[pila_acciones.length-1];
	acc_act.indice++
	if(acc_act.acciones.length>acc_act.indice)
		ejecutarAccion(acc_act.acciones[acc_act.indice])
	else{
		pila_acciones.pop()
		siguienteAccion()
	}
}

function showPreviousDialog(){
	var acc_act=pila_acciones[pila_acciones.length-1];
	if(acc_act.indice>0 && acc_act.acciones[acc_act.indice-1].t){
		acc_act.indice--
		ejecutarAccion(acc_act.acciones[acc_act.indice])
	}
}

var paginaAbierta=false
function finDialogo(){
	if(!paginaAbierta){
		capa_interfaz.mouseEnabled=true;
		scene.mouseEnabled=true;
		scene.tickEnabled =true;
		estado.dialogoAbierto=false;
		removeDialogo()
		dialogo.removeAllChildren()
	}
	dialogo.removeChild(burbuja_dialogo)
	imagen_avatar=null;
	burbuja_dialogo=null;
	endAnimation()
}

function removeDialogo(){
	dialogo.removeChild(burbuja_dialogo);
	imagen_avatar=null;
	burbuja_dialogo=null;
}

var animationRunning=false;
var skipAnimation=false
var skipAnimationButton;
var currentAnims=[]
function startAnimation(){
	if(!animationRunning){
		skipAnimationButton=new createjs.Container()
		skipAnimationButton.x=1750
		skipAnimationButton.y=1010
		dialogo.addChild(skipAnimationButton)
		
		var fondo = new createjs.Shape();
		fondo.graphics.beginFill("#ccc").drawRoundRect(0, 0, 150, 50,8);
		skipAnimationButton.addChild(fondo)
		
		var text = new createjs.Text(textos["Saltar"], "30px Arial", "#000");
		text.x = 75;
		text.y = 10;
		text.textAlign='center'
		skipAnimationButton.addChild(text);
		
		skipAnimationButton.on("click",function(){
			for(var anim in currentAnims)
				if(currentAnims[anim])
					currentAnims[anim].setPosition(currentAnims[anim].duration)
			skipAnimation=true;
		})
	}
	skipAnimation=false
	animationRunning=true;
}

function endAnimation(){
	if(animationRunning){
		skipAnimation=false
		currentAnims=[]
		dialogo.removeChild(skipAnimationButton)
		animationRunning=false;
	}
}

var elementosAnimacion={}
var listaDeOpciones;
function ejecutarAccion(accion){
	if(accion.t){
		endAnimation()
		if(debug.avoidDialogs) siguienteAccion()
		else showMessage(accion)
	}
	else if(accion.music){
		playMusic(accion.music,0)
		siguienteAccion()
	}
	else if(accion.anim){
		startAnimation()
		if(accion.anim=="text"){
			
			var texto_dialogo = new createjs.Text(accion.text, "45px Arial", "#fff");
			texto_dialogo.x=accion.x
			texto_dialogo.y=accion.y
			texto_dialogo.alpha=0
			texto_dialogo.lineWidth=1200;
			texto_dialogo.textAlign='center';
			capa_animaciones.addChild(texto_dialogo)
		
			var anim=createjs.Tween.get(texto_dialogo)
			if(accion.wait) anim.wait(accion.wait)
			anim.to({ alpha:1 },1000).call(function(){
				var anim=createjs.Tween.get(texto_dialogo)
				anim.wait(accion.time).to({ alpha:0 },1000).call(function(){
				})
				if(skipAnimation) anim.setPosition (anim.duration)
				else currentAnims.push(anim)
			})
			if(skipAnimation) anim.setPosition (anim.duration)
			else currentAnims.push(anim)
		}
		else if(accion.anim=="rect"){
			removeDialogo()
			var rect = new createjs.Shape();
			rect.graphics.beginFill(accion.color).drawRect(0, 0, accion.width,accion.height);
			elementosAnimacion[accion.name]=rect;
			capa_animaciones.addChild(rect);
		}
		else if(accion.anim=="hide"){
			removeDialogo()
			var anim=createjs.Tween.get(elementosAnimacion[accion.name])
			if(accion.wait) anim.wait(accion.wait)
			anim.to({ alpha:0 },accion.time).call(function(){
				elementosAnimacion[accion.name]=null
				if(accion.waitEnd) siguienteAccion()
			})
			if(skipAnimation) anim.setPosition (anim.duration)
			else currentAnims.push(anim)
		}
		else if(accion.anim=="image"){
			
			var imagen=new createjs.Bitmap(loader.getResult(accion.name))
			imagen.x=accion.x
			imagen.y=accion.y
			imagen.regX=imagen.getBounds().width/2
			imagen.regY=imagen.getBounds().height/2
			imagen.alpha=0
			if(accion.scale){
				imagen.scaleX=accion.scale
				imagen.scaleY=accion.scale
			}
			capa_animaciones.addChild(imagen);
			elementosAnimacion[accion.name]=imagen;
			
			var anim=createjs.Tween.get(elementosAnimacion[accion.name])
			if(accion.wait) anim.wait(accion.wait)
			anim.to({ alpha:1 },accion.time).call(function(){
				if(accion.waitEnd) siguienteAccion()
			})
			if(skipAnimation) anim.setPosition (anim.duration)
			else currentAnims.push(anim)
		}
		else if(accion.anim=="change"){
			//removeDialogo()
			var ease=createjs.Ease.getPowIn(2);
			var anim=createjs.Tween.get(elementosAnimacion[accion.name])
			if(accion.wait) anim.wait(accion.wait)
			anim.to({ "scaleX":accion.scale, "scaleY":accion.scale },accion.time,ease).call(function(){
				if(accion.waitEnd) siguienteAccion()
			})
			if(skipAnimation) anim.setPosition (anim.duration)
			else currentAnims.push(anim)
		}
		
		if(!accion.waitEnd) siguienteAccion()
	}
	else if(accion.del_char){
		testLayers['character_layer'].removeChild(npcs[accion.del_char]);
		siguienteAccion()
	}
	else if(accion.add_party){
		party.push(npcs[accion.add_party]);
		siguienteAccion()
	}
	else if(accion.find){
		removeDialogo()
		encuentraPagina(accion.feat)
	}
	else if(accion.findObject){
		removeDialogo()
		muestraObjeto(accion.findObject)
	}
	else if(accion.search){
		removeDialogo()
		alert("Error 1047")
		siguienteAccion()
		//mostrar_tesoro(accion.search)
	}
	else if(accion.if){
		if(resuelveExpresion(accion.if)) ejecutarAcciones(accion.then)
		else if(accion.else) ejecutarAcciones(accion.else)
		else siguienteAccion()
	}
	else if(accion.set){
		estado[accion.set]=resuelveExpresion(accion.expresion)
		siguienteAccion()
	}
	else if(accion.custom){
		window[accion.custom](accion);
		siguienteAccion()
	}
	else if(accion.addSpell){
		habilidades[accion.addSpell].activa=1;
		siguienteAccion()
	}
	else if(accion.changeFrame){
		for(var i in elements_list[accion.changeFrame])
			elements_list[accion.changeFrame][i].gotoAndPlay(accion.frame)
		siguienteAccion()
	}
	else if(accion.changeSpirit){
		spirit.image=loadImage(accion.changeSpirit)
		spirit.imageName=accion.changeSpirit;
		siguienteAccion()
	}
	else if(accion.unblock){
		for(var i in elements_list[accion.unblock]){
			mapa_caminos[elements_list[accion.unblock][i].map_x][elements_list[accion.unblock][i].map_y]=1;
			if(elements_list[accion.unblock][i].getBounds().width>48*pixelScale) mapa_caminos[elements_list[accion.unblock][i].map_x+1][elements_list[accion.unblock][i].map_y]=1;
		}
		siguienteAccion()
	}
	else if(accion.opciones){
		endAnimation()
		removeDialogo()
		listaDeOpciones=new createjs.Container();
		dialogo.addChild(listaDeOpciones)
		
		var n_acciones=0;
		for(var opcion in accion.opciones) if(!accion.opciones[opcion].expresion || resuelveExpresion(accion.opciones[opcion].expresion)){
			listaDeOpciones.addChild(addOpcion(accion.opciones[opcion],n_acciones*186,opcion))
			n_acciones++
		}
		
		listaDeOpciones.y=(canvasHeight/scale-186*n_acciones)/2
	}
	else if(accion.tipo==5){
		var acciones=pila_acciones[0].acciones
		pila_acciones=[]
		recorreAcciones(acciones,accion.etiqueta)
	}
	else if(accion.tipo==6){
		scene.mouseEnabled=true;
	}
	else alert(JSON.stringify(accion))
}

var ordenDotes=[
	"Movimiento ágil",
	"Aura ampliada",
	"Proyectil acelerado",
	"Ataque potenciado",
	"Ataque rápido",
	"Energía ambiente",
	"Ataque potenciado",
	"Atraer energía",
	"Balas seguidoras",
	"Ataque potenciado",
	"Movimiento ágil",
	"Curación potenciada",
	"Aura ampliada",
	"Curación en grupo",
	"Ataque potenciado",
	"Proyectil acelerado",
	"Energía ambiente",
	"Curacion potenciada",
	"Ataque potenciado",
	"Escudo en grupo",
	"Aura ampliada",
	"Escudo potenciado",
	"Movimiento ágil",
	"Escudo potenciado",
	
	"Hechizo de curar",
	"Hechizo de escudo"
]

function muestraObjeto(imgObjeto){
	var objeto = new createjs.Bitmap(loader.getResult(imgObjeto))
	objeto.regX=objeto.getBounds().width/2;
	objeto.regY=objeto.getBounds().height/2;
	objeto.scaleX=0.01;
	objeto.scaleY=0.01;
	objeto.x=960;
	objeto.y=440;
	dialogo.addChild(objeto)
	
	// Animamos la página para ir hacia arriba, el centro y expandirse en ancho (y=50,x=960,scaleX=0.5,¿scaleY=0?)
	
		var animSpeed=500;
		var ease=createjs.Ease.getPowOut(2);
		createjs.Tween.get(objeto).to({ y: 50},animSpeed,ease)
		createjs.Tween.get(objeto).to({ x: 960 },animSpeed,ease)
		createjs.Tween.get(objeto).to({ scaleY: 0.2 },animSpeed,ease)
		createjs.Tween.get(objeto).to({ scaleX: 0.2 },animSpeed,ease).call(function(){
			
			var ease=createjs.Ease.getPowIn(2);
			createjs.Tween.get(objeto).to({ y: 540-dialogo.y/dialogo.scaleY },animSpeed,ease)
			createjs.Tween.get(objeto).to({ x: 960 },animSpeed,ease)
			createjs.Tween.get(objeto).to({ scaleY: 1 },animSpeed,ease)
			createjs.Tween.get(objeto).to({ scaleX: 1 },animSpeed,ease).call(function(){
				siguienteAccion()
			})
		})
}
	
var pagina
function encuentraPagina(dote){
	perfil.paginasEncontradas++;
	paginaAbierta=true
	
	playMusic("12hoja", 0);
	setTimeout(function(){
		if(!libroAbierto) playMusic("3exploracion");
	},6000)
	
	// Reproducimos sonido
	// Creamos la página en la posición del objeto, escalada (scaleX=0.03, scaleY=-0.03)
	
	pagina= new createjs.Container();
	pagina.x=960;
	pagina.y=440;
	pagina.scaleX=0
	pagina.scaleY=0.02
	dialogo.addChild(pagina)
	
	var fondopagina = new createjs.Bitmap(loader.getResult("pagina"))
	fondopagina.regX=430;
	fondopagina.regY=412;
	pagina.addChild(fondopagina)
	// Y metemos textos, símbolo de conocimiento y botones.
	
	
	var preg=preguntas.slice(perfil.paginasPracticadas*4,perfil.paginasPracticadas*4+4)
	var j=0;
	for(var i in preg){
		var palabra = new createjs.Text(preg[i].r, "60px 'Merienda One',Cursive",'#742');
		palabra.x = 0;
		palabra.y = 100*i-200;
		palabra.textAlign = "center"
		palabra.alpha = 0.6
		pagina.addChild(palabra)
	}
	
	var boton_cerrar = new createjs.Shape();
	boton_cerrar.graphics.beginStroke("#432").beginFill("#dc8").drawRoundRect(-320,290,200,70,5);
	boton_cerrar.alpha=0.6
	pagina.addChild(boton_cerrar)
	
	var texto_cerrar = new createjs.Text(textos["Cerrar"], "30px 'Merienda One',Cursive", "#742");
	texto_cerrar.x = -220; texto_cerrar.y=300; texto_cerrar.textAlign = "center"
	texto_cerrar.alpha=0.8
	pagina.addChild(texto_cerrar)
	
	
	var boton_aprender = new createjs.Shape();
	boton_aprender.graphics.beginStroke("#432").beginFill("#dc8").drawRoundRect(120,290,200,70,5);
	boton_aprender.alpha=0.6
	pagina.addChild(boton_aprender)
	
	var texto_aprender = new createjs.Text(textos["Aprender"], "30px 'Merienda One',Cursive", "#742");
	texto_aprender.x = 220; texto_aprender.y=300; texto_aprender.textAlign = "center"
	texto_aprender.alpha=0.8
	pagina.addChild(texto_aprender)
	
	var texto_dote = new createjs.Text(textos[dote], "40px 'Merienda One',Cursive", "#742");
	texto_dote.x = 0; texto_dote.y=-300; texto_dote.textAlign = "center"
	pagina.addChild(texto_dote)
	
	var icono = new createjs.Sprite(iconos_dotes);
	icono.gotoAndStop(dotes[dote].icono)
	icono.x=-texto_dote.getBounds().width/2-45;
	icono.y=-280;
	icono.scaleX=0.5;
	icono.scaleY=0.5;
	pagina.addChild(icono)
	
	dotes[dote].encontrado++
	
	
	// Animamos la página para ir hacia arriba, el centro y expandirse en ancho (y=50,x=960,scaleX=0.5,¿scaleY=0?)
	
		var animSpeed=500;
		var ease=createjs.Ease.getPowIn(2);
		createjs.Tween.get(pagina).to({ y: 50 },animSpeed,ease)
		createjs.Tween.get(pagina).to({ x: 960 },animSpeed,ease)
		createjs.Tween.get(pagina).to({ scaleY: 0.03 },animSpeed,ease)
		createjs.Tween.get(pagina).to({ scaleX: 0.5 },animSpeed,ease).call(function(){
			// Animamos la página para ir hacia el centro y alcanzar sus proporciones normales (x=960, y=540,scaleX=1,scaleY=1)
			
	//pagina.scaleY=0.03
			var ease=createjs.Ease.getPowOut(2);
			createjs.Tween.get(pagina).to({ y: 540 },animSpeed,ease)
			createjs.Tween.get(pagina).to({ x: 960 },animSpeed,ease)
			createjs.Tween.get(pagina).to({ scaleY: 1 },animSpeed,ease)
			createjs.Tween.get(pagina).to({ scaleX: 1 },animSpeed,ease).call(function(){
				// Activamos los botones y pasamos al siguiente diálogo
				items.libros++;
				siguienteAccion()
				
				boton_cerrar.on("click",function(){
					paginaAbierta=false
					finDialogo()
				})
				
				boton_aprender.on("click",abre_aprendizaje)
			})
		})
	// Activamos los botones
}

function abre_aprendizaje(evt){
	paginaAbierta=false
	finDialogo()
					
	pagina.mouseEnabled=false;
	libroAbierto=true
	capa_interfaz.mouseEnabled=false;
	scene.mouseEnabled=true;
	scene.tickEnabled =true;
	siguienteAccion()
	
	playMusic("7libro");
	createjs.Ticker.removeEventListener("tick", tick);
	
	pantalla_de_juego.cache(0,0,canvasWidth,canvasHeight)
	pantalla_de_juego.mouseEnabled=false;
	stage.addChildAt(interfaz_libro,1);
	var animSpeed=500;
	var ease=createjs.Ease.getPowOut(2);
	createjs.Tween.get(interfaz_libro).to({ scaleX: scale },animSpeed,ease)
	createjs.Tween.get(interfaz_libro).to({ scaleY: scale },animSpeed,ease)
	createjs.Tween.get(interfaz_libro).to({ x: 0 },animSpeed,ease)
	createjs.Tween.get(interfaz_libro).to({ y: 0 },animSpeed,ease).call(function(){
		capa_interfaz.removeChild(pagina);
		stage.removeChild(pantalla_de_juego)
		interfaz_libro.uncache()
		
		if(debug.avoidExercises) resumenEjercicio(false,5)
		else abrirEjercicio()
	})
	createjs.Tween.get(interfaz_libro).to({ alpha: 1 },500,ease)
}

var capa_dialogo;

function recorreAcciones(acciones,etiqueta){
	pila_acciones.push({'indice':0,'acciones':acciones})
	for(var i in acciones){
		pila_acciones[pila_acciones.length-1].indice=i
		if(acciones[i].tag==etiqueta){
			pila_acciones[pila_acciones.length-1].indice--
			siguienteAccion()
			return true;
		}
		if(acciones[i].tipo==3)
			if(recorreAcciones(acciones[i].acciones,etiqueta)) return true;
		else if(acciones[i].tipo==4){
			for(var opcion in acciones[i].opciones)
				if(recorreAcciones(acciones[i].opciones[opcion].acciones,etiqueta)) return true;
		}
	}
	pila_acciones.pop()
}

var burbuja_dialogo;
var texto_dialogo;
var imagen_avatar;
function showMessage(accion){
	if(!burbuja_dialogo){
		var fondo_dialogo=new createjs.Bitmap(loader.getResult("dialogo"))
		burbuja_dialogo = new createjs.Container();
		burbuja_dialogo.y=-fondo_dialogo.getBounds().height+canvasHeight/scale;
		dialogo.addChild(burbuja_dialogo)
		burbuja_dialogo.addChild(fondo_dialogo)
		
		
		texto_dialogo = new createjs.Text('', "45px Arial", "#fff");
		texto_dialogo.y=55;
		texto_dialogo.lineWidth=1200;
		texto_dialogo.textAlign='center';
		burbuja_dialogo.addChild(texto_dialogo)
	}
	
	if(accion.pj && accion.pj=="none"){
		if(imagen_avatar) burbuja_dialogo.removeChild(imagen_avatar)
		imagen_avatar=null;
	}
	else if(accion.pj){
		if(imagen_avatar) burbuja_dialogo.removeChild(imagen_avatar)
		imagen_avatar=new createjs.Bitmap(loader.getResult(accion.pj))
		imagen_avatar.y=-imagen_avatar.getBounds().height+canvasHeight/scale-burbuja_dialogo.y;
		if(accion.opacity) imagen_avatar.alpha=accion.opacity
		burbuja_dialogo.addChild(imagen_avatar)
		texto_dialogo.lineWidth=1850-imagen_avatar.getBounds().width;
		texto_dialogo.x=(1850+imagen_avatar.getBounds().width)/2;
		
		imagen_avatar.r=accion.r;
	}
	
	var texto_offset=20;
	if(!imagen_avatar)
		texto_offset=300;
	else if(imagen_avatar.r)
		imagen_avatar.x=1300;
	else texto_offset=575;
	
	texto_dialogo.x=35+texto_offset+600;
	texto_dialogo.text=accion.t;
	
	var hit = new createjs.Shape();
	hit.graphics.beginFill("#000").rect(0, 0, 1920, 1080);
	dialogo.hitArea = hit;
	dialogo.removeAllEventListeners("click")
	dialogo.on("click",pasaDialogo)
	document.onkeydown=pasaDialogoDown
	document.onkeyup = pasaDialogoUp
	if(moveRight) waitRightUp=true
	else waitLeftUp=false
	moveUp = moveDown = moveLeft = moveRight = false;
	
	//x.nav=10
}

var backClick=false
var nextClick=false
var waitRightUp=false
function pasaDialogoDown(){
	if(waitRightUp) return
	backClick=nextClick=false;
	if(event.keyCode==8 || event.keyCode==37) backClick=true;
	else if(event.keyCode==32 || event.keyCode==39 || event.keyCode==13) nextClick=true;
}

function pasaDialogoUp(){
	if(waitRightUp && event.keyCode==39) waitRightUp=false;
	if(backClick && (event.keyCode==8 || event.keyCode==37)) showPreviousDialog()
	else if(nextClick && (event.keyCode==32 || event.keyCode==39 || event.keyCode==13)) pasaDialogo()
	backClick=nextClick=false;
}

function pasaDialogo(event){
	if(ultimoDisparo+game_values.bloqueaDesdeDisparo>(new Date()).getTime()) return;
	dialogo.hitArea = null;
	window.onkeypress=null
	document.onkeyup=handleKeyUp
	document.onkeydown=handleKeyDown
	dialogo.removeAllEventListeners("click")
	
	siguienteAccion()
}

function addOpcion(opcion,posY,opcion_id){
	dialogo_opciones = new createjs.Container();
	//dialogo.mouseChildren = false;
	dialogo_opciones.x=300;
	dialogo_opciones.y=posY;
	
	var spriteSheet = new createjs.SpriteSheet({images: [loader.getResult("opcion_btn")],frames: {width:1309, height:186},animations: {normal:[1], hover:[0]}});
	opcionBtnSprite = new createjs.Sprite(spriteSheet);
	opcionBtnSprite.clave=opcion_id
	var helper = new createjs.ButtonHelper(opcionBtnSprite, "normal", "hover", "clicked");
	dialogo_opciones.addChild(opcionBtnSprite)
		
	texto = new createjs.Text(opcion.t, "40px Arial", "#fff");
	texto.x=40;
	texto.y=60;
	dialogo_opciones.addChild(texto)
	
	/*texto_traduccion = new createjs.Text(frases[opcion.id].trad, "30px Arial", "rgba(255,255,255,0.4)");
	texto_traduccion.x=40;
	texto_traduccion.y=95;
	dialogo_opciones.addChild(texto_traduccion)*/
	opcionBtnSprite.on("click",function(event){
		listaDeOpciones.parent.removeChild(listaDeOpciones);
		var acc_act=pila_acciones[pila_acciones.length-1];
		var acciones=acc_act.acciones[acc_act.indice].opciones[event.target.clave].a
		if(acciones.length) 
			pila_acciones.push({'indice':-1,'acciones':acciones})
		siguienteAccion()
		//showMessage(acc_act.acciones[acc_act.indice].opciones[event.target.clave].id,1)
		
		event.stopPropagation();
	})
	
	return dialogo_opciones;
}

var variables={}
function resuelveExpresion(expresion){
	if(expresion[0]=='not') return !resuelveExpresion(expresion[1])
	if(expresion[0]=='and') return resuelveExpresion(expresion[1]) && resuelveExpresion(expresion[2])
	else if(expresion[0]=='var') return estado[expresion[1]]
	else if(expresion[0]=='val') return expresion[1]
	else alert(JSON.stringify(expresion))
}