var debug={
	"avoidExercises":0,
	"avoidDialogs":0,
}

var game_options={
	controlTeclado:1,
	versionTactil:1
}

var game_values={
	vida_recuperada_curacion:40,
	energia_recuperada_segundo:5, // Cuanto recuperamos de base por segundo
	energia_recuperada_nivel:5, // Cuanta energía recuperamos por nivel de habilidad
	energia_brillo:45, // Energía que tiene cada punto brillante que liberan los monstruos
	
	bloqueaDesdeDisparo:400, // Tiempo que no se deja mover después de haber disparado
	
	ataqueBase:10,
	subidasAtaque:20,
}

window.onerror = function (msg, url, lineNo, columnNo, error) {
  if (error) alert(error.stack)

  return false;
}

var canvasWidth, canvasHeight;
var rotated=false;
var scale;
var pixelScale;
libroAbierto=true;
var fondo_juego
 
 var libro_juego,barra_progreso,barra_progreso_avance, interior_libro, interfaz_libro, entrada_juego,paginasLayer,capaAnimacion;
 var libroMusic,musicaExploracion,musicaDialogo;
 
 var iconos_dotes // Hoja de sprites para los iconos de las dotes
 
var libro={}

var configObjetos
var inicio_partida=new Date() // Para pruebas beta


function init() {

    queue = new createjs.LoadQueue();
    queue.on("complete", initialize, this);
    queue.loadFile({id:"portada_libro", src:"img/juego/portada_libro.png"});

}

var webGL=1
var stage
function initialize(){
    
    pixelScale=1;
	
	configObjetos={
		7:{
				framerate: 30,
				"frames": {"width": 34*pixelScale, "height": 81*pixelScale, "regX": 0, "regY": 0},
				"animations": {
					"inicial": 0,
					"inactivo": 1
				}
			},
		6:{
				framerate: 30,
				"frames": {"width": 64*pixelScale, "height": 88*pixelScale, "regX": 0, "regY": 0},
				"animations": {
					"inicial": 0,
					"abierta": 1
				}
			}
	}
    
    
    
    if(webGL)
        stage = new createjs.StageGL("canvas",{ antialias: true });
    else stage = new createjs.Stage("canvas",{ antialias: true });
    if(webGL) stage.setClearColor("#4d311f");
	var w=window.innerWidth;
	var h=window.innerHeight;
    stage.canvas.width=w;
    stage.canvas.height=h;
    if(webGL) stage.updateViewport(w,h)
	stage.enableMouseOver(5);
	createjs.Touch.enable(stage);
	stage.preventSelection = false;
	
	pantalla_de_juego = new createjs.Container();
	pantalla_de_juego.alpha=0;
	stage.addChild(pantalla_de_juego)
	
	capa_libro = new createjs.Container();
	stage.addChild(capa_libro);
	
	interfaz_libro = new createjs.Container();
	capa_libro.addChild(interfaz_libro);
	
	capa_animaciones=new createjs.Container();
	dialogo = new createjs.Container();
	capa_interfaz= new createjs.Container();
	capa_interfaz_izquierdo= new createjs.Container();
	capa_interfaz_derecho= new createjs.Container();
	capa_niebla= new createjs.Container();
	scene= new createjs.Container();
    
	resize()
    window.addEventListener('resize', resize, false);
	
	stage.addChild(dialogo)
	
	interior_libro = new createjs.Container();
	interfaz_libro.addChild(interior_libro);
	
	libro_juego = new createjs.Container();
	libro_juego.x=540;
	interfaz_libro.addChild(libro_juego);
	
	
	var portada_libro = new createjs.Bitmap(queue.getResult("portada_libro"));
	libro_juego.addChild(portada_libro);
    
	barra_progreso = new createjs.Container();
	barra_progreso.x=160
	barra_progreso.y=600
	libro_juego.addChild(barra_progreso)
	
	var fondo_barra_progreso = new createjs.Shape();
	fondo_barra_progreso.graphics.beginFill("#030").drawRoundRect(0, 0, 660, 120,15);
			//objetoActivable.shadow = new createjs.Shadow("#ffff00", 0, 0, 20);
	barra_progreso.addChild(fondo_barra_progreso)
    iCache(fondo_barra_progreso)
	
	barra_progreso_avance = new createjs.Shape();
    
	barra_progreso.addChild(barra_progreso_avance);
    
	//createjs.Ticker.on("tick", stage);
    //createjs.Ticker.on("tick", handleTick);
	//createjs.Ticker.timingMode = createjs.Ticker.RAF;

    /*
    var loader = new createjs.FontLoader({src:[
      {
        src: "local('Merienda One'), url(font/Merienda-Regular.ttf) format('truetype')",
        family: "Merienda One"
      }],
    type: "font",
    injectCSS: true});
    loader.load();*/
	
	var manifest = [
		{src: "js/juego/textos.json", id: "textos"},
		{src: "js/juego/textos_en.json", id: "textos_en"},
		
		{src: "img/juego/es.png", id: "es"},
		{src: "img/juego/en.png", id: "en"},
		
		{src: tilesFile, id: "tiles"},
		{src: "img/char1.png", id: "character"},
		{src: "img/niebla.png", id: "niebla"},
		{src: "img/juego/dialogo.png", id: "dialogo"},
		//{src: "img/juego/opcion.png", id: "opciones_dialogo"},
		{src: "img/juego/opcion_btn.png", id: "opcion_btn"},
		{src: "img/juego/marco.png", id: "marco"},
		{src: "img/juego/texto_capitulo.jpg", id: "texto_capitulo"},
		{src: "img/juego/esquina.png", id: "esquina"},
		{src: "img/juego/acierto.png", id: "acierto"},
		{src: "img/juego/fallo.png", id: "fallo"},
		{src: "img/juego/fondo_d.png", id: "fondo_libro_d"},
		{src: "img/juego/fondo_i.png", id: "fondo_libro_i"},
		//{src: "img/juego/flecha_volver.png", id: "flecha_volver"},
		{src: "img/juego/boton.png", id: "boton"},
		
		{src: "img/juego/brillo.png", id: "brillo"},
		{src: "img/juego/interrogacion.png", id: "interrogacion"},
		
		{src: "img/juego/barra_energia.png", id: "barra_energia"},
		{src: "img/juego/nivel_energia.png", id: "nivel_energia"},
		{src: "img/juego/move_control.png", id: "move_control"},
        
		{src: "img/lecciones/tutorial_mover.png", id: "tutorial_mover"},
		{src: "img/lecciones/tutorial_atacar.png", id: "tutorial_atacar"},
		{src: "img/lecciones/hiragana_de_su.png", id: "hiragana_de_su"},
		{src: "img/lecciones/hiragana_desu.png", id: "hiragana_desu"},
		{src: "img/lecciones/hiragana_doko.png", id: "hiragana_doko"},
		{src: "img/lecciones/frase_doko_desu_ka.png", id: "frase_doko_desu_ka"},
		{src: "img/lecciones/particula_ka.png", id: "particula_ka"},
		{src: "img/lecciones/kanjis.png", id: "kanjis"},
		{src: "img/lecciones/radicales.png", id: "radicales"},
		{src: "img/lecciones/hayaku.png", id: "hayaku"},
		{src: "img/lecciones/soko.png", id: "soko"},
		{src: "img/lecciones/so.png", id: "so"},
		{src: "img/lecciones/iku.png", id: "iku"},
		{src: "img/lecciones/frase_soko_ni_iku.png", id: "frase_soko_ni_iku"},
		{src: "img/lecciones/particula_ni.png", id: "particula_ni"},
		
		{src: "img/juego/cuaderno.png", id: "cuaderno"},
		{src: "img/juego/pagina.png", id: "pagina"},
		
		{src: "img/juego/spirit.png", id: "spirit"},
		{src: "img/juego/spirit2.png", id: "spirit2"},
		
		{src: "img/juego/c_nami.png", id: "c_nami"},
		{src: "img/juego/c_nina.png", id: "c_nina"},
		{src: "img/juego/c_mei.png", id: "c_mei"},
		{src: "img/juego/c_hikari.png", id: "c_hikari"},
		
		{src: "img/juego/luz.jpg", id: "luz"},
		
		//{src: "img/juego/mazmorra.jpg", id: "mazmorra"},
		//{src: "img/juego/barra_personajes.png", id: "barra_personajes"},
		//{src: "img/juego/monstruo.png", id: "monstruo"},
		//{src: "img/juego/personaje.png", id: "personaje"},
		//{src: "img/juego/dialogo_combate.png", id: "dialogo_combate"},
		//{src: "img/juego/seleccionado.png", id: "seleccionado"},
		//{src: "img/juego/ataque.png", id: "ataque"},
		{src: "img/juego/toxico.png", id: "nube_toxica"},
		
		{src: "img/juego/ataque_energia.png", id: "bala_energia"},
		{src: "img/juego/bala_gelatina.png", id: "bala_gelatina"},
		
		{src: "img/juego/magia.png", id: "magia"},
		{src: "img/juego/hechizo_curar.png", id: "hechizo_curar"},
		{src: "img/juego/hechizo_escudo.png", id: "hechizo_escudo"},
		
		{src: "img/juego/curar.png", id: "curar"},
		{src: "img/juego/escudo.png", id: "escudo"},
		
		//{src: "img/items/oro.png", id: "oro"},
		//{src: "img/items/pagina.png", id: "pagina"},
		{src: "img/juego/gema.png", id: "gema"},
		
		{src: "img/juego/dotes.png", id: "dotes"},
		{src: "img/juego/esfera_nivel.png", id: "esfera_nivel"},
		{src: "img/juego/progreso_nivel.png", id: "progreso_nivel"},
		{src: "img/juego/fondo_progreso_nivel.png", id: "fondo_progreso_nivel"},
		
		{src: "img/juego/estrella.png", id: "estrella"},
		
		{src: "snd/flip-page.mp3", id: "flip-page"},
		{src: "snd/7libro.mp3", id: "7libro"},
		//{src: "snd/8dialogo.mp3", id: "8dialogo"},
		{src: "snd/3exploracion.mp3", id: "3exploracion"},
		{src: "snd/10intro.mp3", id: "10intro"},
		{src: "snd/11nivel.mp3", id: "11nivel"},
		{src: "snd/12hoja.mp3", id: "12hoja"},
		{src: "snd/13inicio.mp3", id: "13inicio"},
	];
	
	var cargadas=[]
	
	for(var i in characters)
		if(cargadas.indexOf(characters[i].imagen) == -1){
			manifest.push({src: files_dir+characters[i].imagen+files_name, "id": "character"+characters[i].id})
			cargadas.push(characters[i].imagen)
		}
	
	/*for(var i in info_personajes)
		if(cargadas.indexOf(info_personajes[i].avatar) == -1){
			manifest.push({src: itrad.filesUrl+info_personajes[i].avatar+"/0/0/1/character.png", "id": "avatar"+info_personajes[i].avatar})
			cargadas.push(info_personajes[i].avatar)
		}*/
	
	for(var i in monsters)
		if(cargadas.indexOf(monsters[i].imagen) == -1){
			manifest.push({src: files_dir+monsters[i].imagen+files_name, "id": "monster"+monsters[i].id})
			cargadas.push(monsters[i].imagen)
		}
	
	for(var i in elementos_escena)
		if(cargadas.indexOf(elementos_escena[i].imagen) == -1){
			manifest.push({src: files_dir+elementos_escena[i].imagen+files_name, "id": "elemento"+elementos_escena[i].id});
			cargadas.push(elementos_escena[i].imagen)
		}
		
	manifest.push({src: "img/juego/brillo.png", id: "brillo"}) // Hack por que al parecer no carga la el último archivo añadido, así que metemos uno innecesario
	
	//for(var i in soundsToLoad)
	//	manifest.push({src: itrad.filesDir+soundsToLoad[i]+"/0/0/1/sound.mp3", "id": "sound"+soundsToLoad[i]})
	
	loader = new createjs.LoadQueue();
	loader.installPlugin(createjs.Sound);
	loader.on('progress', function(evt) {
		var progress = Math.round(evt.loaded * 650);
		if(progress<34) progress=34;
		barra_progreso_avance.graphics.beginLinearGradientFill(["#eae","#b3b","#707","#a0a"],[0,0.5,0.5,1],0,1,0,110).
			drawRoundRect(5, 5, progress, 110,12);
        iCache(barra_progreso_avance)
	});
	
	loader.addEventListener("complete", function(){
		preparaEscenario()
		
		iconos_dotes = new createjs.SpriteSheet({"images": [loader.getResult("dotes")],"frames": {"width":150, "height":150,"regX":75, "regY":75}});
		
		var text = new createjs.Text(textos["Abrir"], "70px 'Merienda One'", "#ed0");
		text.x = 330;
		text.y = 20;
		text.textAlign='center'
		barra_progreso.addChild(text);
        iCache(text)
		barra_progreso.addEventListener("click",function(){
			playMusic("10intro",0);
			setTimeout(function(){
				if(libroAbierto){
					playMusic("7libro")
				}
			},12000)
			openBook()
		});
	});
	loader.loadManifest(manifest, true, "");
    
    
	frameRate = new createjs.Text("", "12px Arial", "rgba(255,255,255,1)");
	frameRate.x=550;
	frameRate.y=10;
	//frameRate.alpha=0;
	stage.addChild(frameRate)
    
	createjs.Ticker.framerate=60;
     createjs.Ticker.on("tick", tick);
     
     window.onbeforeunload = salirJuego;
     return;
}

function salirJuego(){
    if(!libroAbierto && !getEstado('dialogoAbierto')){
        stage.update();
        capturaPantalla()
        guardarPartida("autosave",screenShot)
    }
}

var currentMusic
function playMusic(music,loop=-1){
	if(currentMusic) currentMusic.stop()
	var ppc = new createjs.PlayPropsConfig().set({"loop": loop, volume: 0.5})
	currentMusic=createjs.Sound.play(music,ppc);
}

function openBook(){
	var ppc = new createjs.PlayPropsConfig().set({loop: -1, volume: 0.5})
	////musicaDialogo=createjs.Sound.play("8dialogo",ppc);
	//musicaDialogo.stop()
	/*musicaExploracion=createjs.Sound.play("3exploracion",ppc);
	musicaExploracion.stop()
	libroMusic=createjs.Sound.play("7libro",ppc);
	libroMusic.stop()*/
	
	var metodo=createjs.Ease.getPowOut(8) 
	
	paginasLayer = new createjs.Container();
	paginasLayer.y=12
	paginasLayer.x=41
	interior_libro.addChild(paginasLayer)
	
	capaAnimacion = new createjs.Container();
	capaAnimacion.y=12
	capaAnimacion.x=41
	interior_libro.addChild(capaAnimacion)
	
		
	
	var fondo_libro_d = new createjs.Bitmap(loader.getResult("fondo_libro_d"))
	fondo_libro_d.x=960;
	interior_libro.addChild(fondo_libro_d)
	
    // Mirar si hay partidas guardadas
	var partidasGuardadas = localStorage.getItem('partidasGuardadas');
	if(!partidasGuardadas) partidasGuardadas=[]
	else partidasGuardadas=JSON.parse(partidasGuardadas)
	
	if(partidasGuardadas.length>0){
        try {
            screenShot = new createjs.Bitmap(partidasGuardadas[0].image)
            cargarPartida(0)
        }
        catch(error) {
            alert(error);
        }
    }
    else{
        screenShot = new createjs.Bitmap( loader.getResult("luz") );
        screenShot.cache( 0, 0, screenShot.getBounds().width, screenShot.getBounds().height,703/screenShot.getBounds().width);
        screenShot=screenShot.cacheCanvas;
    }
	
	var pags=getPaginasIndice();
    
	var paginaD=new createjs.Container();
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1028);
    iCache(rect)
	paginaD.addChild(rect);
	paginaD.addChild(pags[1]);
    
	var paginaI=new createjs.Container();
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1028);
    iCache(rect)
	paginaI.x=41;
	paginaI.y=10
	paginaI.addChild(rect);
	paginaI.addChild(pags[0]);
    
	paginasLayer.addChild(paginaD)
	paginaD.x=919;
	
	//screenShot = loader.getResult("luz");
	
	var sombraD = new createjs.Shape();
	sombraD.graphics.beginLinearGradientFill(["rgba(100,50,20,0.3)","rgba(100,50,20,0)"],[0,1],0,0,200,0).drawRect(0, 0, 200,1028);
    iCache(sombraD)
	paginaD.addChild(sombraD);
	libro.pagD=paginaD;
	
	var animSpeed=1000;
	interior_libro.x=-400
	createjs.Tween.get(interior_libro).to({ x:0 },animSpeed)
	createjs.Tween.get(libro_juego).to({ skewY: -90, x:960 },animSpeed).call(function(){
		
		var lateralI = new createjs.Container();
		interfaz_libro.addChild(lateralI)
		
		
		var espejado = new createjs.Container();
		lateralI.addChild(espejado)
		espejado.scaleX=-1;
		espejado.x=960;
		espejado.addChild(paginaI)
		
		var sombraI = new createjs.Shape();
		sombraI.graphics.beginLinearGradientFill(["rgba(100,50,20,0)","rgba(100,50,20,0.2)"],[0,1],0,0,200,0).drawRect(0, 0, 200,1028);
        iCache(sombraI)
		sombraI.x=919-200;
		paginaI.addChild(sombraI);
		libro.pagI=paginaI;
		
		var fondo_libro_i = new createjs.Bitmap(loader.getResult("fondo_libro_i"))
		espejado.addChild(fondo_libro_i)
		
		lateralI.skewY=-90;
		lateralI.x=960;
		
		//lateralI.cache(0,0,960,1080);
		
		createjs.Tween.get(lateralI).to({ skewY: -180 },animSpeed).call(function(){
			espejado=null;
			paginasLayer.addChild(paginaI)
			paginaI.x=0;paginaI.y=0;
			interior_libro.addChild(fondo_libro_i)
		})
	})
}

capturar=false
function capturaPantalla() {
	var canvas = document.getElementById( 'canvas' );
    var retCanvas = document.createElement('canvas');
    retCanvas.width = 703;
    retCanvas.height = 395;
    retCanvas.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 703, 395);
    screenShot=retCanvas
    entrada_juego.image=screenShot
}

function entraJuego(){
	capa_libro.mouseEnabled=false;
	setCentro()
	//pantalla_de_juego.updateCache();
	
	var scale=canvasWidth/703;
	var scaleY=canvasHeight/395;
	var x=-(entrada_juego.x+entrada_juego.parent.x+entrada_juego.parent.parent.x+(entrada_juego.parent.parent.parent?entrada_juego.parent.parent.parent.x:0))*scale
	var y=-(entrada_juego.y+entrada_juego.parent.y+entrada_juego.parent.parent.y+(entrada_juego.parent.parent.parent?entrada_juego.parent.parent.parent.y:0))*scaleY
	var ease=createjs.Ease.getPowOut(2);
	capa_libro.previousScale=capa_libro.scaleX
	capa_libro.previousX=capa_libro.x
	capa_libro.previousY=capa_libro.y
    capa_libro.alpha=1
		pantalla_de_juego.alpha=1;
    
	createjs.Tween.get(capa_libro).to({ scaleX: scale,scaleY: scaleY,x:x,y:y },500)
	.call(function(){
		createjs.Tween.get(capa_libro).to({ alpha: 0 },100).call(function(){
            capa_libro.alpha=0
			pantalla_de_juego.mouseEnabled=true;
            pantalla_de_juego.uncache()
			abreJuego()
		})
	})
}

function volverAlMenu(callback){
    stage.update();
    capturaPantalla()
    guardarPartida("autosave",screenShot)
            
    endMoveControls()
	paginaAbierta=false
	libroAbierto=true
	pantalla_de_juego.mouseEnabled=false;
    
	stage.update();
    capturaPantalla()
    
	//pantalla_de_juego.cache(0,0,canvasWidth,canvasHeight)
	
	playMusic("7libro");
    pantalla_de_juego.alpha=0;
    capa_libro.alpha=1;
	
	createjs.Tween.get(capa_libro).to({ scaleX: capa_libro.previousScale,scaleY: capa_libro.previousScale,
		x: capa_libro.previousX,y: capa_libro.previousY },500,createjs.Ease.getPowOut(2)).call(function(){
		capa_libro.uncache()
		if(typeof callback=='function') callback()
        capa_libro.mouseEnabled=true;
	})
}

function volverAIndice(callback=false){
	var pags=getPaginasIndice();
	var pags=pasarPaginaIzquierda(pags[0],pags[1],callback)
}

var screenShot
var enlace_practica
function getPaginasIndice(){
	var paginaD = new createjs.Container();
	
	var titulo_capitulo=new createjs.Text(textos["Capítulo 1"], "40px 'Merienda One',Cursive", '#642');
	titulo_capitulo.x=100;titulo_capitulo.y=60;
	paginaD.addChild(titulo_capitulo);
    iCache(titulo_capitulo)
	
	entrada_juego = new createjs.Bitmap(screenShot)
	entrada_juego.x=125
	entrada_juego.y=154
	paginaD.addChild(entrada_juego)
	
	if(entrada_juego.getBounds()) entrada_juego.scaleY=395/entrada_juego.getBounds().height
	
	if(!screenShot){
		screenShot = new createjs.Bitmap( loader.getResult("luz") );
		screenShot.cache( 0, 0, screenShot.getBounds().width, screenShot.getBounds().height,entrada_juego.getBounds().width/screenShot.getBounds().width);
	}
    
    if(screenShot.image)
        entrada_juego.image=screenShot.image
    else entrada_juego.image=screenShot
	
	/*entrada_juego.scaleX=entrada_juego.getBounds().width/1920
	entrada_juego.scaleY=entrada_juego.getBounds().width/1920
	entrada_juego.image=loader.getResult("luz");*/
	
	marco = new createjs.Bitmap(loader.getResult("marco"))
	marco.x=100
	marco.y=130
	paginaD.addChild(marco)
	marco.addEventListener("click", entraJuego)
	
	
	var menu=[
		{'nombre':textos.Jugar,'enlace':entraJuego,'activo':true},
		{'nombre':textos.Diccionario,'enlace':abrirDiccionario,'activo':true},
		{'nombre':textos.Entrenamiento,'enlace':resumenEjercicio,'activo':true},
	]
	
	for(var i in menu){
		var enlace=new createjs.Text(menu[i].nombre, "60px 'Merienda One',Cursive", '#642');
		enlace.x=150;enlace.y=600+i*120;
        iCache(enlace)
		paginaD.addChild(enlace);
		
		if(!menu[i].activo) enlace.alpha=0.3;
		else enlace.addEventListener("click",menu[i].enlace)
		
		var hit_enlace_diccionario = new createjs.Shape();
		hit_enlace_diccionario.graphics.beginFill("#000").drawRect(0, 0, enlace.getMeasuredWidth(), enlace.getMeasuredHeight());
		enlace.hitArea = hit_enlace_diccionario;
	}
	
	/*var texto_capitulo = new createjs.Bitmap(loader.getResult("texto_capitulo"))
	texto_capitulo.x=100
	texto_capitulo.y=590
	paginaD.addChild(texto_capitulo)
	
	
	var texto_jugar=new createjs.Text(textos.Jugar, "60px 'Merienda One',Cursive", '#fdb');
	texto_jugar.x=500;texto_jugar.y=300;texto_jugar.textAlign='center'
	texto_jugar.alpha=0.7
	paginaD.addChild(texto_jugar);*/
	
	
	var paginaI = new createjs.Container();
	
	var texto_indice=new createjs.Text(textos["Menú"], "70px 'Merienda One',Cursive", '#421');
	texto_indice.x=100;texto_indice.y=80;
    iCache(texto_indice)
	paginaI.addChild(texto_indice);
	
	var menu=[
		{'nombre':textos["Nuevo"],'enlace':mostrarNuevo,'activo':true},
		{'nombre':textos["Guardar"],'enlace':mostrarGuardar,'activo':true},
		{'nombre':textos["Cargar"],'enlace':mostrarCargar,'activo':true},
		{'nombre':textos["Créditos"],'enlace':mostrarCreditos,'activo':true},
		//{'nombre':textos["Apoya nuestro proyecto"],'enlace':mostrarApoyar,'activo':true},
		//{'nombre':textos["Cerrar"],'enlace':cerrar,'activo':true},
	]
	
	for(var i in menu){
		var enlace=new createjs.Text(menu[i].nombre, "60px 'Merienda One',Cursive", '#642');
		enlace.x=150;enlace.y=200+i*120;
        iCache(enlace)
		paginaI.addChild(enlace);
		
		if(!menu[i].activo) enlace.alpha=0.3;
		else enlace.addEventListener("click",menu[i].enlace)
		
		var hit_enlace_diccionario = new createjs.Shape();
		hit_enlace_diccionario.graphics.beginFill("#000").drawRect(0, 0, enlace.getMeasuredWidth(), enlace.getMeasuredHeight());
		enlace.hitArea = hit_enlace_diccionario;
	}
	
	
	var en = new createjs.Bitmap( loader.getResult("en") );
	en.x=100; en.y=905
	paginaI.addChild(en)
		
	var enlace=new createjs.Text("English", "50px 'Merienda One',Cursive", '#642');
    iCache(enlace)
	enlace.x=170;enlace.y=890;
	paginaI.addChild(enlace);
	enlace.on("click",setIdiomaIngles)
	
	var hit_enlace = new createjs.Shape();
	hit_enlace.graphics.beginFill("#000").drawRect(-70, 0, enlace.getMeasuredWidth()+70, enlace.getMeasuredHeight());
	enlace.hitArea = hit_enlace;
	
	
	var es = new createjs.Bitmap( loader.getResult("es") );
	es.x=580; es.y=905
	paginaI.addChild(es)
	
	var enlace=new createjs.Text("Español", "50px 'Merienda One',Cursive", '#642');
    iCache(enlace)
	enlace.x=650;enlace.y=890;
	paginaI.addChild(enlace);
	enlace.on("click",setIdiomaEspanol)
	
	var hit_enlace = new createjs.Shape();
	hit_enlace.graphics.beginFill("#000").drawRect(-70, 0, enlace.getMeasuredWidth()+70, enlace.getMeasuredHeight());
	enlace.hitArea = hit_enlace;
	
	return [paginaI,paginaD];
}

function mostrarNuevo(){
    screenShot = new createjs.Bitmap( loader.getResult("luz") );
    screenShot.cache( 0, 0, screenShot.getBounds().width, screenShot.getBounds().height,703/screenShot.getBounds().width);
    screenShot=screenShot.cacheCanvas;
    
    
	testLayers['character_layer'].removeAllChildren()
	testLayers['brillos_layer'].removeAllChildren()
	testLayers['balas_layer'].removeAllChildren()
	capa_animaciones.removeAllChildren();
	elementosAnimacion=[];
	actores=[]
	party=[]
	monster_list=[]
	elements_list={}
	npcs={}
    preguntas=[]
    estado={}
	voces_cargadas=[]
    
    dotes=JSON.parse(dotes_base)
    preguntas=JSON.parse(preguntas_base)
    mapa_caminos=JSON.parse(mapa_caminos_base)
    
    cargaElementosIniciales()
    
    iniciaDialogo("preset")
    
	volverAIndice()
}

function mostrarApoyar(){
	if(confirm(textos["¿Quieres continuar?"]))
		window.location="https://ulule.com/enchanted-tales/"
}

function cerrar(){
	var el = document
	  rfs = el.exitFullscreen
		|| el.webkitExitFullscreen
		|| el.mozCancelFullScreen
		|| el.msExitFullscreen 
	//$('canvas').removeClass('fullScreen');
	rfs.call(el);
	resize()
}

function setIdiomaIngles(){
	lecciones=textos_en.lecciones
	textos=textos_en.textos
	preguntas=textos_en.preguntas
	dialogos=textos_en.dialogos
	volverAIndice()
}

function setIdiomaEspanol(){
	lecciones=textos_es.lecciones
	textos=textos_es.textos
	preguntas=textos_es.preguntas
	dialogos=textos_es.dialogos
	volverAIndice()
}

var c={
	"Música":"Phrank Álvarez",
	"Community Manager":"María Davia Cue",
	"Tests y calidad":"Luis Carbajales",
	"Niveles e interfaz":"[Error 154: Undefined entity]",
	"Programación":"Aryadna García Marsá"
}

function mostrarGuardar(){
		
	var pagI = new createjs.Container();
	
	esquina_salida = new createjs.Bitmap(loader.getResult("esquina"))
	esquina_salida.addEventListener("click",volverAIndice)
	esquina_salida.x=0;
	esquina_salida.y=9;
	pagI.addChild(esquina_salida)
	
	var pagD = new createjs.Container();
	
	var imagen = new createjs.Bitmap(screenShot)
	imagen.x=123
	imagen.y=204
	pagD.addChild(imagen)
	
	marco = new createjs.Bitmap(loader.getResult("marco"))
	marco.x=100
	marco.y=180
	pagD.addChild(marco)
	
	var name=textos["Capítulo 1"]+" - "+((new Date()).getHours()+":"+(new Date()).getMinutes());
	pagD.addChild(crearTextoLibro(name,477,650,30,'#742'))
	
	var boton = new createjs.Container();
	boton.x=550
	boton.y=900
	pagD.addChild(boton)
	boton.addChild(creaBotonLibro(300,100,function(){
		guardarPartida(name,screenShot)
	}))
	boton.addChild(crearTextoLibro(textos["Guardar"],150,25))
	
	var boton = new createjs.Container();
	boton.x=200
	boton.y=900
	pagD.addChild(boton)
	boton.addChild(creaBotonLibro(300,100,volverAIndice))
	boton.addChild(crearTextoLibro(textos["Cancelar"],150,25))
		
	pasarPaginaDerecha(pagI,pagD)
}

function mostrarCargar(){
		
	var pagI = new createjs.Container();
	
	esquina_salida = new createjs.Bitmap(loader.getResult("esquina"))
	esquina_salida.addEventListener("click",volverAIndice)
	esquina_salida.x=0;
	esquina_salida.y=9;
	pagI.addChild(esquina_salida)
	
	
	var partidasGuardadas = localStorage.getItem('partidasGuardadas');
	if(!partidasGuardadas) partidasGuardadas=[]
	else partidasGuardadas=JSON.parse(partidasGuardadas)
	
	var pagD = new createjs.Container();
	
	for(var i in partidasGuardadas){
		var pos=i
		var pag=pagI
		if(i>5) break;
		else if(i>2){
			pos=i-3
			pag=pagD
		}
		var contenido=new createjs.Container();
		
		var imagen = new createjs.Bitmap(partidasGuardadas[i].image)
		imagen.x=23
		imagen.y=24
		contenido.addChild(imagen)
		
		marco = new createjs.Bitmap(loader.getResult("marco"))
		marco.pos=i
		marco.on("click",function(){
			cargarPartida(this.pos)
            volverAIndice()
		})
		contenido.addChild(marco)
		
		contenido.scaleX=0.5
		contenido.scaleY=0.5
		contenido.x=290
		contenido.y=100+280*pos
		pag.addChild(contenido)
	
		pag.addChild(crearTextoLibro(partidasGuardadas[i].name,477,330+280*pos,20,'#742'))
	}
	
		
	pasarPaginaDerecha(pagI,pagD)
}

var creditos={
    "Equipo de desarrollo":[],
    "Magos colaboradores":["Alex Valero “Danda”"],
    "Estudiantes de honor":["Fermin Sáez","Christian Viñolo Fernández","Luis Gasco Poderoso","Rubén Estebanez del Toro","Christian Labarca Conejeros"],
    "Estudiantes de magia":["Manzano Galán","Blapo Merjebo","Lord Nacht","S.Roberto Padilla","Rocio  Gutiérrez Muñoz de la Torre"],
    "Estudiantes novatos de magia":["Alberto San Segundo Sierra","Mónica Sánchez Calzado","Kuwabara","Alva Majo","Laura González Fernández","Maria Ruiz","Oriol García","Jairo Rios Suárez",
        "Andrea Giannini","Jamie White","Francisco López Ambrosio","Mulflar","Raoul Medina (Rhazer)","Ester Garcia","Nekoyasha"],
    "Escépticos en la magia":["Kaori Tamashiro","Enrique Villegas"],
}

function mostrarCreditos(pagina=1,dir='der'){
    if(typeof pagina === 'object') pagina=1
		
	var pagI = new createjs.Container();
        
    var infoPag=[]
    var numPag=0;
	for(var i in creditos){
        numPag++
        if (pagina==numPag) infoPag[0]=i
        if (pagina+1==numPag) infoPag[1]=i
	}
	
	var pagD = new createjs.Container();
	
    for(var inf in infoPag){
        pag=inf==1?pagD:pagI
        pag.addChild(txtLeft(crearTextoLibro(textos[infoPag[inf]],150,80,40,'#742')))
        
        if(infoPag[inf]=="Equipo de desarrollo"){
            var pos=0;
            for(var i in c){
                pag.addChild(txtLeft(crearTextoLibro(textos[i],150,200+pos*150,30)))
                pag.addChild(txtLeft(crearTextoLibro(c[i],230,250+pos*150,40,'#742')))
                pos++
            }
        }
        else{
            var pos=0;
            for(var i in creditos[infoPag[inf]]){
                pag.addChild(txtLeft(crearTextoLibro(creditos[infoPag[inf]][i],180,160+pos*55,35)))
                pos++
            }
        }
    }
    
	var hit_enlace = new createjs.Shape();
	hit_enlace.graphics.beginFill('#eda').drawRect(0, 0, 919,1036);
	pagI.hitArea = hit_enlace;
	pagD.hitArea = hit_enlace;
    
    if(pagina==1) pagI.addEventListener("click",volverAIndice)
    else pagI.on("click",function(evt){
        mostrarCreditos(pagina-2,'izq')
    })
    
    if(pagina+2<=numPag)
        pagD.on("click",function(evt){
            mostrarCreditos(pagina+2)
        })
    
	/**/
	
    if(dir=='izq') pasarPaginaIzquierda(pagI,pagD)
	else pasarPaginaDerecha(pagI,pagD)
}


var menuWidth=0;
function resize() { 
	var w=window.innerWidth;
	var h=window.innerHeight;
    
    stage.canvas.width=w;
    stage.canvas.height=h;
    if(webGL) stage.updateViewport(w,h)
	//console.log(window.innerWidth)
    
    pixelartScale=Math.ceil(h/300)
        
    scene.scaleX=pixelartScale
    scene.scaleY=pixelartScale
	
	if(w<h){
		stage.rotation=90;
		rotated=1;
		canvasWidth=h
		canvasHeight=w
		stage.regY=canvasHeight;
		
		tempH=h
		h=w
		w=tempH
	}
	else{
		stage.rotation=0;
		stage.regY=0;
		rotated=0;
		canvasWidth=w
		canvasHeight=h
	}
	
	// Calculamos el espacio y posición de la capa del libro
	if(w/h>=1920/1080){ // Si es tan ancho o más que fullhd
		var escala=h/1080
		capa_libro.scaleX=escala
		capa_libro.scaleY=escala
		capa_libro.y=0;
		capa_libro.x=(w-1920*escala)/2
	}
	else{
		var escala=w/1920
		capa_libro.scaleX=escala
		capa_libro.scaleY=escala
		capa_libro.y=(h-1080*escala)/2
		capa_libro.x=0
	}
	
	capa_interfaz_izquierdo.scaleX=h/1080
	capa_interfaz_izquierdo.scaleY=h/1080
	
	capa_interfaz_derecho.scaleX=h/1080
	capa_interfaz_derecho.scaleY=h/1080
	capa_interfaz_derecho.x=w-1920*h/1080
	
	capa_niebla.scaleX=h/700
	capa_niebla.scaleY=h/700
	capa_niebla.x=w/2-1920*capa_niebla.scaleX
	capa_niebla.y=h/2-1080*capa_niebla.scaleX
	//capa_niebla.x=(w-1920*h/1080)/2
	
	/*if(w/h>=1920/1080){ // Si es tan ancho o más que fullhd
		var escala=h/1080
		capa_animaciones.scaleX=escala
		capa_animaciones.scaleY=escala
		capa_animaciones.y=0;
		capa_animaciones.x=(w-1920*escala)/2
	}
	else{
		var escala=w/1920
		capa_animaciones.scaleX=escala
		capa_animaciones.scaleY=escala
		capa_animaciones.y=(h-1080*escala)/2
		capa_animaciones.x=0
	}*/
	
	if(w/h>=1920/1080){ // Si es tan ancho o más que fullhd
		var escala=h/1080
		dialogo.scaleX=escala
		dialogo.scaleY=escala
		dialogo.y=0;
		dialogo.x=(w-1920*escala)/2
	}
	else{
		var escala=w/1920
		dialogo.scaleX=escala
		dialogo.scaleY=escala
		dialogo.y=(h-1080*escala)
		dialogo.x=0
	}
	
	capa_animaciones.scaleX=w/1920
	capa_animaciones.scaleY=h/1080
	
	capa_interfaz.scaleX=w/1920
	capa_interfaz.scaleY=h/1080
	
	/*scale=canvasWidth/1920;
	
	if(capa_interfaz){
		capa_interfaz.scaleX=scale;
		capa_interfaz.scaleY=scale;
		capa_animaciones.scaleX=scale;
		capa_animaciones.scaleY=scale;
		dialogo.scaleX=scale;
		dialogo.scaleY=scale;
	}*/
}

var configLibro={
	"pageWidth":919,
	"pageHeight":1028,
	"offsetD":919
}

function pasarPaginaDerecha(contI,contD,callback=false){
	capa_libro.mouseEnabled=false;
	paginasLayer.mouseEnabled = false;
	
	var animacionPagina = new createjs.Container();
	capaAnimacion.addChild(animacionPagina)
	
	var sound=createjs.Sound.play("flip-page");
	sound.volume =0.3;
	
	var paginaD = new createjs.Container();
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1036);
	paginaD.x=configLibro.pageWidth*2;
	paginaD.addChild(rect);
    iCache(rect)
	paginaD.addChild(contD);
    paginaD.scaleX=0;
	animacionPagina.addChild(paginaD)
	
	var sombra4 = new createjs.Shape();
	sombra4.graphics.beginLinearGradientFill(["rgba(100,50,20,0.3)","rgba(100,50,20,0)"],[0,1],0,0,200,0).drawRect(0, 0, 200,configLibro.pageHeight);
	sombra4.x=configLibro.pageWidth*2;
	animacionPagina.addChild(sombra4);
    iCache(sombra4)
	
	var sombraAnima = new createjs.Shape();
	sombraAnima.graphics.beginLinearGradientFill(["rgba(100,50,20,0)","rgba(100,50,20,0.4)"],[0,1],0,0,50,0).drawRect(0, 0, 50,configLibro.pageHeight);
	sombraAnima.x=configLibro.pageWidth*2-40;
	sombraAnima.alpha=0;
	animacionPagina.addChild(sombraAnima);
    iCache(sombraAnima)
    
	var paginaI = new createjs.Container();
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1036);
	paginaI.x=configLibro.pageWidth*2;
	paginaI.addChild(rect);
	paginaI.addChild(contI)
	animacionPagina.addChild(paginaI)
    paginaI.scaleX=0;
    iCache(rect)
	
	var sombra3 = new createjs.Shape();
	sombra3.graphics.beginLinearGradientFill(["rgba(100,50,20,0)","rgba(100,50,20,1)"],[0,1],0,0,100,0).drawRect(0, 0, 100,configLibro.pageHeight);
	sombra3.x=819;
	sombra3.alpha=0.5
	paginaI.addChild(sombra3);
    iCache(sombra3)
    //paginaI.cache(0, 0, 919,1028)
	
	var pageSpeed=500
	var metodo=createjs.Ease.getPowOut(8) //createjs.Ease.getPowInOut(4)
	
	createjs.Tween.get(paginaD).to({ x: configLibro.pageWidth, scaleX:1 }, pageSpeed/2, metodo)
	createjs.Tween.get(paginaI).to({ x: 0, scaleX:1 }, pageSpeed, metodo)
	createjs.Tween.get(sombra4).to({ x: configLibro.pageWidth }, pageSpeed, metodo)
	createjs.Tween.get(sombraAnima).to({ alpha: 0.5 }, pageSpeed/2, metodo)
	createjs.Tween.get(sombraAnima).to({ x: -40 }, pageSpeed, metodo)
	createjs.Tween.get(sombra3).to({ x: configLibro.pageWidth-100, alpha: 0.2 }, pageSpeed, metodo).call(function(){
        paginaD.addChild(sombra4)
        sombra4.x=0
		reset(paginaI,paginaD,animacionPagina)
		if(typeof callback=='function') callback()
	})
	
	return [paginaI,paginaD]
}

function pasarPaginaIzquierda(contI,contD,callback=false){
	capa_libro.mouseEnabled=false;
	paginasLayer.mouseEnabled = false;
	
	var animacionPagina = new createjs.Container();
	capaAnimacion.addChild(animacionPagina)
	
	var sound=createjs.Sound.play("flip-page");
	sound.volume =0.3;
    
	var paginaI = new createjs.Container();
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1028);
	paginaI.addChild(rect);
	paginaI.addChild(contI);
    paginaI.scaleX=0;
	animacionPagina.addChild(paginaI)
    iCache(rect)
	
	var sombra4 = new createjs.Shape();
	sombra4.graphics.beginLinearGradientFill(["rgba(100,50,20,0)","rgba(100,50,20,1)"],[0,1],0,0,200,0).drawRect(0, 0, 200,configLibro.pageHeight);
	sombra4.x=-200;
	sombra4.alpha=0.5
	animacionPagina.addChild(sombra4);
    iCache(sombra4)
	
	var sombraAnima = new createjs.Shape();
	sombraAnima.graphics.beginLinearGradientFill(["rgba(100,50,20,0)","rgba(100,50,20,0.4)"],[0,1],50,0,0,0).drawRect(0, 0, 50,configLibro.pageHeight);
	sombraAnima.alpha=0;
	animacionPagina.addChild(sombraAnima);
    iCache(sombraAnima)
	
	var paginaD = new createjs.Container();
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1028);
	paginaD.x=0;
	paginaD.addChild(rect);
	paginaD.addChild(contD)
    paginaD.scaleX=0;
	animacionPagina.addChild(paginaD)
    iCache(rect)
	
	var sombra3 = new createjs.Shape();
	sombra3.graphics.beginLinearGradientFill(["rgba(100,50,20,0.3)","rgba(100,50,20,0)"],[0,1],0,0,100,0).drawRect(0, 0, 100,configLibro.pageHeight);
	sombra3.x=0;
	paginaD.addChild(sombra3);
    iCache(sombra3)
	
	var pageSpeed=500
	var metodo=createjs.Ease.getPowOut(8) //createjs.Ease.getPowInOut(4)
	
	//stage.update();
	createjs.Tween.get(paginaI).to({ x: 0, scaleX:1 }, pageSpeed/2, metodo)
	createjs.Tween.get(paginaD).to({ x: configLibro.pageWidth, scaleX:1 }, pageSpeed, metodo)
	//createjs.Tween.get(sombra3).to({ x: configLibro.pageWidth }, pageSpeed, metodo)
	createjs.Tween.get(sombraAnima).to({ alpha: 0.5 }, pageSpeed/2, metodo)
	createjs.Tween.get(sombraAnima).to({ x: configLibro.pageWidth*2 }, pageSpeed, metodo)
	createjs.Tween.get(sombra4).to({ x: configLibro.pageWidth-200 }, pageSpeed, metodo)
	createjs.Tween.get(sombra4).to({ alpha: 0.2 }, pageSpeed, metodo).call(function(callback){
        paginaI.addChild(sombra4)
        reset(paginaI,paginaD,animacionPagina)
		if(callback && {}.toString.call(callback) === '[object Function]') callback()
	},[callback])
	
	return [paginaI,paginaD]
  }

function reset(pagA,pagB,animacionPagina){
	paginasLayer.mouseEnabled = true;
    stage.releaseTexture(paginasLayer)
	paginasLayer.removeAllChildren()
	paginasLayer.addChild(pagA)
	paginasLayer.addChild(pagB)
	capaAnimacion.removeChild(animacionPagina)
	libro.pagI=pagA
	libro.pagD=pagB
	capa_libro.mouseEnabled=true;
}

function iCache(item){
    if(!webGL) return;
    var x=0
    var y=0
    var width=0
    var height=0
    if(item instanceof createjs.Text){
        if(item.textAlign=="center")
            x=-item.getMeasuredWidth()/2
        width=item.getMeasuredWidth()
        height=item.getMeasuredHeight()*1.3
    }
    else{
        if(item.graphics && item.graphics.command && item.graphics.command.radius){
            x=-item.graphics.command.radius-1
            y=-item.graphics.command.radius-1
            width=item.graphics.command.radius*2+2
            height=item.graphics.command.radius*2+2
        }
        if(item.graphics && item.graphics.command && item.graphics.command.w){
            x=item.graphics.command.x-1
            y=item.graphics.command.y-1
            width=item.graphics.command.w+2
            height=item.graphics.command.h+2
        }
       else  if(item.graphics && item.graphics.command && item.graphics.command.x){
            width=item.graphics.command.x
            height=item.graphics.command.y
        }
        else if(item.getBounds() && item.getBounds().width && item.getBounds().height){
            width=item.getBounds().width
            height=item.getBounds().height
        }
    }
    
    var sizes=[2,4,8,16,32,64,128,256,512,1024,2048]
    
    for(var s in sizes) if(sizes[s]>=width){
        width=sizes[s]
        break;
    }
    
    for(var s in sizes) if(sizes[s]>=height){
        height=sizes[s]
        break;
    }
    //if(item.test) alert(x+"/"+y+"/"+width+"/"+height)
    item.cache(x,y,width,height,1,["stageGL"])
}