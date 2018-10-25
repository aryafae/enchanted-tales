var debug={
	"avoidExercises":0,
	"avoidDialogs":0,
}

var game_options={
	controlTeclado:1
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
  alert(error.stack)

  return false;
}

var canvasWidth, canvasHeight;
var rotated=false;
var scale;
var pixelScale;
libroAbierto=true;
 
 var libro_juego,barra_progreso,barra_progreso_avance, interior_libro, interfaz_libro, entrada_juego,paginasLayer,capaAnimacion;
 var libroMusic,musicaExploracion,musicaDialogo;
 
 var iconos_dotes // Hoja de sprites para los iconos de las dotes
 
var libro={}

var configObjetos
var inicio_partida=new Date() // Para pruebas beta
 
$(function(){
	$("button").click(function(){
			var el = document.getElementById('canvas'),
			  rfs = el.requestFullscreen
				|| el.webkitRequestFullScreen
				|| el.mozRequestFullScreen
				|| el.msRequestFullscreen 
			$('canvas').addClass('fullScreen');
			rfs.call(el);
			resize()
	})
	
	if(screen.width>1600) pixelScale=3;
	else if(screen.width>1000) pixelScale=2;
	else if(screen.width>600) pixelScale=1;
	else pixelScale=1;
	
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
	
    stage = new createjs.Stage("canvas");
	stage.canvas.width = 500
	stage.canvas.height = 281
	stage.enableMouseOver(5);
	
	interfaz_libro = new createjs.Container();
	stage.addChild(interfaz_libro);
	
	dialogo = new createjs.Container();
	dialogo.x=0;
	stage.addChild(dialogo)
	
	interior_libro = new createjs.Container();
	interfaz_libro.addChild(interior_libro);
	
	libro_juego = new createjs.Container();
	libro_juego.x=125;
	interfaz_libro.addChild(libro_juego);
	
	
	var portada_libro = new createjs.Bitmap("img/juego/portada_libro.png");
	portada_libro.scaleX=0.2
	portada_libro.scaleY=0.2
	libro_juego.addChild(portada_libro);
	
	barra_progreso = new createjs.Container();
	barra_progreso.x=54
	barra_progreso.y=160
	libro_juego.addChild(barra_progreso)
	
	var fondo_barra_progreso = new createjs.Shape();
	fondo_barra_progreso.graphics.beginFill("#030").drawRoundRect(0, 0, 150, 30,8);
	barra_progreso.addChild(fondo_barra_progreso)
	
	barra_progreso_avance = new createjs.Shape();
	barra_progreso.addChild(barra_progreso_avance);
	
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);
	
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
		{src: "img/juego/fondo_marco.png", id: "fondo_marco"},
		{src: "img/juego/texto_capitulo.jpg", id: "texto_capitulo"},
		{src: "img/juego/esquina.png", id: "esquina"},
		{src: "img/juego/acierto.png", id: "acierto"},
		{src: "img/juego/fallo.png", id: "fallo"},
		{src: "img/juego/fondo_d.png", id: "fondo_libro_d"},
		{src: "img/juego/fondo_i.png", id: "fondo_libro_i"},
		//{src: "img/juego/flecha_volver.png", id: "flecha_volver"},
		{src: "img/juego/boton.png", id: "boton"},
		
		{src: "img/juego/brillo.png", id: "brillo"},
		
		{src: "img/juego/barra_energia.png", id: "barra_energia"},
		{src: "img/juego/nivel_energia.png", id: "nivel_energia"},
		
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
	
	//for(var i in soundsToLoad)
	//	manifest.push({src: itrad.filesDir+soundsToLoad[i]+"/0/0/1/sound.mp3", "id": "sound"+soundsToLoad[i]})
	
	loader = new createjs.LoadQueue();
	loader.installPlugin(createjs.Sound);
	loader.on('progress', function(evt) {
		var progress = Math.round(evt.loaded * 148);
		if(progress<14) progress=14;
		barra_progreso_avance.graphics.beginLinearGradientFill(["#eae","#b3b","#707","#a0a"],[0,0.5,0.5,1],0,1,0,29).drawRoundRect(1, 1, progress, 28,7);
	});
	loader.addEventListener("complete", function(){
		preparaEscenario()
		
		iconos_dotes = new createjs.SpriteSheet({"images": [loader.getResult("dotes")],"frames": {"width":150, "height":150,"regX":75, "regY":75}});
		
		var text = new createjs.Text(textos["Abrir"], "20px Arial", "#ff0");
		text.x = 74;
		text.y = 3;
		text.textAlign='center'
		barra_progreso.addChild(text);
		barra_progreso.addEventListener("click",function(){
			resize()
			
			interfaz_libro.scaleX=scale;
			interfaz_libro.scaleY=scale;
			
			libro_juego.x=960;
			libro_juego.y=0;
			libro_juego.scaleX=4;
			libro_juego.scaleY=4;
			//libro_juego.cache();
			
			$("button").show()
			playMusic("10intro",0);
			setTimeout(function(){
				if(libroAbierto){
					playMusic("7libro")
				}
			},12000)
			setTimeout(openBook,1000)
		});
	});
	loader.loadManifest(manifest, true, "");
})

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
	
	screenShot=loader.getResult("fondo_marco")
	
	screenShot = new createjs.Bitmap( loader.getResult("luz") );
	screenShot.cache( 0, 0, screenShot.getBounds().width, screenShot.getBounds().height,703/screenShot.getBounds().width);
	screenShot=screenShot.cacheCanvas;
	
	var pags=getPaginasIndice();
	var paginaD=pags[1]
	var paginaI=pags[0]
	paginasLayer.addChild(paginaD)
	paginaD.x=919;
	
	//screenShot = loader.getResult("luz");
	
	var sombraD = new createjs.Shape();
	sombraD.graphics.beginLinearGradientFill(["rgba(100,50,20,0.3)","rgba(100,50,20,0)"],[0,1],0,0,200,0).drawRect(0, 0, 200,1028);
	paginaD.addChild(sombraD);
	libro.pagD=paginaD;
	
	var animSpeed=1000;
	createjs.Tween.get(libro_juego).to({ skewY: -90 },animSpeed).call(function(){
		
		var lateralI = new createjs.Container();
		interfaz_libro.addChild(lateralI)
		
		
		var espejado = new createjs.Container();
		lateralI.addChild(espejado)
		espejado.scaleX=-1;
		espejado.x=960;
		espejado.addChild(paginaI)
		
		var sombraI = new createjs.Shape();
		sombraI.graphics.beginLinearGradientFill(["rgba(100,50,20,0)","rgba(100,50,20,0.2)"],[0,1],0,0,200,0).drawRect(0, 0, 200,1028);
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

function entraJuego(){
	setCentro()
	pantalla_de_juego.updateCache();
	
	var scale=canvasWidth/entrada_juego.getBounds().width;
	var x=-(entrada_juego.x+entrada_juego.parent.x+entrada_juego.parent.parent.x+(entrada_juego.parent.parent.parent?entrada_juego.parent.parent.parent.x:0))*scale
	var y=-(entrada_juego.y+entrada_juego.parent.y+entrada_juego.parent.parent.y+(entrada_juego.parent.parent.parent?entrada_juego.parent.parent.parent.y:0))*scale
	stage.addChildAt(pantalla_de_juego,0);
	$('canvas').css('background','black')
	var animSpeed=1000;
	var ease=createjs.Ease.getPowOut(2);
	interfaz_libro.cache(0,0,1920,1080)
	createjs.Tween.get(interfaz_libro).to({ scaleX: scale,scaleY: scale,x:x,y:y },animSpeed)
	.call(function(){
		createjs.Tween.get(interfaz_libro).to({ alpha: 0 },400).call(function(){
			pantalla_de_juego.mouseEnabled=true;
			stage.removeChild(interfaz_libro)
			abreJuego()
			
			// Hacemos un autoguardado
			var canvas = document.getElementById( 'canvas' );
			screenshot = new createjs.Bitmap( canvas );
			screenshot.cache( 0, 0, canvas.width, canvas.height,entrada_juego.getBounds().width/canvas.width);
	
			guardarPartida("autosave",screenshot.cacheCanvas)
		})
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
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1028);
	paginaD.addChild(rect);
	
	var titulo_capitulo=new createjs.Text(textos["Capítulo 1"], "40px 'Merienda One',Cursive", '#642');
	titulo_capitulo.x=100;titulo_capitulo.y=60;
	paginaD.addChild(titulo_capitulo);
	
	entrada_juego = new createjs.Bitmap(screenShot)
	entrada_juego.x=123
	entrada_juego.y=154
	paginaD.addChild(entrada_juego)
	
	if(!screenShot){
		screenShot = new createjs.Bitmap( loader.getResult("luz") );
		screenShot.cache( 0, 0, screenShot.getBounds().width, screenShot.getBounds().height,entrada_juego.getBounds().width/screenShot.getBounds().width);
		entrada_juego.image=screenShot.cacheCanvas;
	}
	
	/*entrada_juego.scaleX=entrada_juego.getBounds().width/1920
	entrada_juego.scaleY=entrada_juego.getBounds().width/1920
	entrada_juego.image=loader.getResult("luz");*/
	
	marco = new createjs.Bitmap(loader.getResult("marco"))
	marco.x=100
	marco.y=130
	paginaD.addChild(marco)
	marco.addEventListener("click", entraJuego)
	
	var texto_capitulo = new createjs.Bitmap(loader.getResult("texto_capitulo"))
	texto_capitulo.x=100
	texto_capitulo.y=590
	paginaD.addChild(texto_capitulo)
	
	
	var texto_jugar=new createjs.Text(textos.Jugar, "60px 'Merienda One',Cursive", '#fdb');
	texto_jugar.x=500;texto_jugar.y=300;texto_jugar.textAlign='center'
	texto_jugar.alpha=0.7
	paginaD.addChild(texto_jugar);
	
	
	var paginaI = new createjs.Container();
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1028);
	paginaI.x=41;
	paginaI.y=10
	paginaI.addChild(rect);
	
	var texto_indice=new createjs.Text(textos["Menú"], "50px 'Merienda One',Cursive", '#421');
	texto_indice.x=100;texto_indice.y=100;
	paginaI.addChild(texto_indice);
	
	var menu=[
		{'nombre':textos.Diccionario,'enlace':abrirDiccionario,'activo':true},
		{'nombre':textos.Entrenamiento,'enlace':resumenEjercicio,'activo':true},
		{'nombre':textos["Guardar"],'enlace':mostrarGuardar,'activo':true},
		{'nombre':textos["Cargar"],'enlace':mostrarCargar,'activo':true},
		{'nombre':textos["Créditos"],'enlace':mostrarCreditos,'activo':true},
		{'nombre':textos["Cerrar"],'enlace':cerrar,'activo':true},
	]
	
	for(var i in menu){
		var enlace=new createjs.Text(menu[i].nombre, "40px 'Merienda One',Cursive", '#642');
		enlace.x=150;enlace.y=200+i*80;
		paginaI.addChild(enlace);
		
		if(!menu[i].activo) enlace.alpha=0.3;
		else enlace.addEventListener("click",menu[i].enlace)
		
		var hit_enlace_diccionario = new createjs.Shape();
		hit_enlace_diccionario.graphics.beginFill("#000").drawRect(0, 0, enlace.getMeasuredWidth(), enlace.getMeasuredHeight());
		enlace.hitArea = hit_enlace_diccionario;
	}
	
	
	var en = new createjs.Bitmap( loader.getResult("en") );
	en.x=100; en.y=910
	paginaI.addChild(en)
		
	var enlace=new createjs.Text("English", "40px 'Merienda One',Cursive", '#642');
	enlace.x=170;enlace.y=900;
	paginaI.addChild(enlace);
	enlace.on("click",setIdiomaIngles)
	
	var hit_enlace = new createjs.Shape();
	hit_enlace.graphics.beginFill("#000").drawRect(-70, 0, enlace.getMeasuredWidth()+70, enlace.getMeasuredHeight());
	enlace.hitArea = hit_enlace;
	
	
	var es = new createjs.Bitmap( loader.getResult("es") );
	es.x=580; es.y=910
	paginaI.addChild(es)
	
	var enlace=new createjs.Text("Español", "40px 'Merienda One',Cursive", '#642');
	enlace.x=650;enlace.y=900;
	paginaI.addChild(enlace);
	enlace.on("click",setIdiomaEspanol)
	
	var hit_enlace = new createjs.Shape();
	hit_enlace.graphics.beginFill("#000").drawRect(-70, 0, enlace.getMeasuredWidth()+70, enlace.getMeasuredHeight());
	enlace.hitArea = hit_enlace;
	
	return [paginaI,paginaD];
}

function cerrar(){
	var el = document
	  rfs = el.exitFullscreen
		|| el.webkitExitFullscreen
		|| el.mozCancelFullScreen
		|| el.msExitFullscreen 
	$('canvas').removeClass('fullScreen');
	rfs.call(el);
	resize()
}

function setIdiomaIngles(){
	textos=textos_en.textos
	preguntas=textos_en.preguntas
	dialogos=textos_en.dialogos
	volverAIndice()
}

function setIdiomaEspanol(){
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

function mostrarCreditos(){
		
	var pagI = new createjs.Container();
	
	esquina_salida = new createjs.Bitmap(loader.getResult("esquina"))
	esquina_salida.addEventListener("click",volverAIndice)
	esquina_salida.x=0;
	esquina_salida.y=9;
	pagI.addChild(esquina_salida)
	
	var pagD = new createjs.Container();
	
	pagD.addChild(txtLeft(crearTextoLibro("Equipo de desarrollo",150,80,40,'#742')))
	
	var pos=0;
	for(var i in c){
		pagD.addChild(txtLeft(crearTextoLibro(i,150,200+pos*150,30)))
		pagD.addChild(txtLeft(crearTextoLibro(c[i],230,250+pos*150,40,'#742')))
		pos++
	}
		
	pasarPaginaDerecha(pagI,pagD)
}

function volverAlMenu(){
	
    var canvas = document.getElementById( 'canvas' );
    screenshot = new createjs.Bitmap( canvas );
    screenshot.cache( 0, 0, canvas.width, canvas.height,entrada_juego.getBounds().width/canvas.width);
	entrada_juego.image=screenshot.cacheCanvas;
	screenShot=screenshot.cacheCanvas;
	
	libroAbierto=true
	playMusic("7libro");
	createjs.Ticker.removeEventListener("tick", tick);
	pantalla_de_juego.cache(0,0,canvasWidth,canvasHeight)
	pantalla_de_juego.mouseEnabled=false;
	interfaz_libro.uncache()
	interfaz_libro.cache(0,0,canvasWidth*3,canvasHeight*3)
	
	stage.addChildAt(interfaz_libro,1);
	createjs.Tween.get(interfaz_libro).to({ scaleX: scale,scaleY: scale,x: 0,y: 0 },1000,createjs.Ease.getPowOut(2)).call(function(){
		stage.removeChild(pantalla_de_juego)
		interfaz_libro.uncache()
	})
	createjs.Tween.get(interfaz_libro).to({ alpha: 1 },500,createjs.Ease.getPowOut(2))
}

window.addEventListener('resize', resize, false);

var menuWidth=0;
function resize() { 
	if(stage.canvas.height>window.innerHeight)
		$('canvas').removeClass('fullScreen');
	var w=window.innerWidth;
	var h=window.innerHeight;
	stage.canvas.width = w
	stage.canvas.height = h
	
	if(w<h){
		stage.rotation=90;
		rotated=1;
		canvasWidth=h
		canvasHeight=w
		stage.regY=canvasHeight;
	}
	else{
		stage.rotation=0;
		stage.regY=0;
		rotated=0;
		canvasWidth=w
		canvasHeight=h
	}
	//alert(canvasWidth)
	
	scale=canvasWidth/1920;
	
	if(capa_interfaz){
		capa_interfaz.scaleX=scale;
		capa_interfaz.scaleY=scale;
		capa_animaciones.scaleX=scale;
		capa_animaciones.scaleY=scale;
		dialogo.scaleX=scale;
		dialogo.scaleY=scale;
	}
}


var configLibro={
	"pageWidth":919,
	"pageHeight":1028,
	"offsetD":919
}

function pasarPaginaDerecha(contI,contD,callback=false){
	paginasLayer.mouseEnabled = false;
	
	var animacionPagina = new createjs.Container();
	capaAnimacion.addChild(animacionPagina)
	
	var sound=createjs.Sound.play("flip-page");
	sound.volume =0.3;
	var mascara4 = new createjs.Shape();
	mascara4.graphics.beginFill("#000").drawRect(0, 0, configLibro.pageWidth*2,configLibro.pageHeight);
	mascara4.x=configLibro.pageWidth*2
	
	var paginaD = new createjs.Container();
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1028);
	paginaD.x=configLibro.pageWidth;
	paginaD.addChild(rect);
	paginaD.mask=mascara4;
	paginaD.addChild(contD);
	animacionPagina.addChild(paginaD)
	
	var maskSombra4 = new createjs.Shape(); // ???
	maskSombra4.graphics.beginFill("#000").drawRect(0, 0, configLibro.pageWidth,configLibro.pageHeight);
	
	var sombra4 = new createjs.Shape();
	sombra4.graphics.beginLinearGradientFill(["rgba(100,50,20,0.3)","rgba(100,50,20,0)"],[0,1],0,0,200,0).drawRect(0, 0, 200,configLibro.pageHeight);
	sombra4.x=configLibro.pageWidth;
	sombra4.mask=maskSombra4;
	paginaD.addChild(sombra4);
	
	var maskSombraAnima = new createjs.Shape();
	maskSombraAnima.graphics.beginFill("#000").drawRect(0, 0, configLibro.pageWidth*2,configLibro.pageHeight);
	
	var sombraAnima = new createjs.Shape();
	sombraAnima.graphics.beginLinearGradientFill(["rgba(100,50,20,0)","rgba(100,50,20,0.4)"],[0,1],0,0,50,0).drawRect(0, 0, 50,configLibro.pageHeight);
	sombraAnima.x=configLibro.pageWidth*2-40;
	sombraAnima.mask=maskSombraAnima
	sombraAnima.alpha=0;
	animacionPagina.addChild(sombraAnima);
	
	var recorte = new createjs.Shape();
	recorte.graphics.beginFill("#000").drawRect(0, 0, configLibro.pageWidth*2,configLibro.pageHeight);
	
	var paginaI = new createjs.Container();
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1028);
	paginaI.x=configLibro.pageWidth*2;
	paginaI.addChild(rect);
	paginaI.mask=recorte;
	paginaI.addChild(contI)
	animacionPagina.addChild(paginaI)
	
	
	var maskSombraPag3 = new createjs.Shape(); // ??
	maskSombraPag3.graphics.beginFill("#000").drawRect(0, 0, configLibro.pageWidth*2,configLibro.pageHeight);
	
	var sombra3 = new createjs.Shape();
	sombra3.graphics.beginLinearGradientFill(["rgba(100,50,20,0)","rgba(100,50,20,1)"],[0,1],0,0,100,0).drawRect(0, 0, 100,configLibro.pageHeight);
	sombra3.x=-90;
	sombra3.alpha=0.5
	sombra3.mask=maskSombraPag3
	paginaI.addChild(sombra3);
	
	var pageSpeed=500
	var metodo=createjs.Ease.getPowOut(8) //createjs.Ease.getPowInOut(4)
	
	createjs.Tween.get(paginaI).to({ x: 0 }, pageSpeed, metodo)
	createjs.Tween.get(sombra4).to({ x: 0 }, pageSpeed, metodo)
	createjs.Tween.get(recorte).to({ x: -configLibro.pageWidth }, pageSpeed, metodo)
	createjs.Tween.get(mascara4).to({ x: configLibro.pageWidth }, pageSpeed, metodo)
	createjs.Tween.get(sombraAnima).to({ alpha: 0.5 }, pageSpeed/2, metodo)
	createjs.Tween.get(sombraAnima).to({ x: -40 }, pageSpeed, metodo)
	createjs.Tween.get(sombra3).to({ x: configLibro.pageWidth-100 }, pageSpeed, metodo)
	createjs.Tween.get(sombra3).to({ alpha: 0.2 }, pageSpeed, metodo).call(function(){
		reset(paginaI,paginaD,animacionPagina)
		if(callback) callback()
	})
	
	return [paginaI,paginaD]
}

function pasarPaginaIzquierda(contI,contD,callback=false){
	paginasLayer.mouseEnabled = false;
	
	var animacionPagina = new createjs.Container();
	capaAnimacion.addChild(animacionPagina)
	
	var sound=createjs.Sound.play("flip-page");
	sound.volume =0.3;
	var mascara4 = new createjs.Shape();
	mascara4.graphics.beginFill("#000").drawRect(0, 0, configLibro.pageWidth,configLibro.pageHeight);
	mascara4.x=-configLibro.pageWidth
	
	var paginaI = new createjs.Container();
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1028);
	paginaI.addChild(rect);
	paginaI.mask=mascara4;
	paginaI.addChild(contI);
	animacionPagina.addChild(paginaI)
	
	var maskSombraPag4 = new createjs.Shape();
	maskSombraPag4.graphics.beginFill("#000").drawRect(0, 0, configLibro.pageWidth,configLibro.pageHeight);
	
	var sombra4 = new createjs.Shape();
	sombra4.graphics.beginLinearGradientFill(["rgba(100,50,20,0)","rgba(100,50,20,1)"],[0,1],0,0,200,0).drawRect(0, 0, 200,configLibro.pageHeight);
	sombra4.x=-200;
	sombra4.alpha=0.5
	sombra4.mask=maskSombraPag4
	paginaI.addChild(sombra4);
	
	var maskSombraAnima = new createjs.Shape();
	maskSombraAnima.graphics.beginFill("#000").drawRect(0, 0, configLibro.pageWidth*2,configLibro.pageHeight);
	
	var sombraAnima = new createjs.Shape();
	sombraAnima.graphics.beginLinearGradientFill(["rgba(100,50,20,0)","rgba(100,50,20,0.4)"],[0,1],50,0,0,0).drawRect(0, 0, 50,configLibro.pageHeight);
	sombraAnima.mask=maskSombraAnima
	sombraAnima.alpha=0;
	animacionPagina.addChild(sombraAnima);
	
	// Seguir
	var recorte = new createjs.Shape();
	recorte.graphics.beginFill("#000").drawRect(0, 0, configLibro.pageWidth,configLibro.pageHeight);
	
	var paginaD = new createjs.Container();
	var rect = new createjs.Shape();
	rect.graphics.beginFill('#eda').drawRect(0, 0, 919,1028);
	paginaD.x=-configLibro.pageWidth;
	paginaD.addChild(rect);
	paginaD.mask=recorte;
	paginaD.addChild(contD)
	animacionPagina.addChild(paginaD)
	
	var sombra3 = new createjs.Shape();
	sombra3.graphics.beginLinearGradientFill(["rgba(100,50,20,0.3)","rgba(100,50,20,0)"],[0,1],0,0,100,0).drawRect(0, 0, 100,configLibro.pageHeight);
	sombra3.x=configLibro.pageWidth;
	paginaD.addChild(sombra3);
	
	var pageSpeed=500
	var metodo=createjs.Ease.getPowOut(8) //createjs.Ease.getPowInOut(4)
	
	//stage.update();
	createjs.Tween.get(paginaD).to({ x: configLibro.pageWidth }, pageSpeed, metodo)
	createjs.Tween.get(sombra3).to({ x: 0 }, pageSpeed, metodo)
	createjs.Tween.get(recorte).to({ x: configLibro.pageWidth }, pageSpeed, metodo)
	createjs.Tween.get(mascara4).to({ x: 0 }, pageSpeed, metodo)
	createjs.Tween.get(sombraAnima).to({ alpha: 0.5 }, pageSpeed/2, metodo)
	createjs.Tween.get(sombraAnima).to({ x: configLibro.pageWidth*2 }, pageSpeed, metodo)
	createjs.Tween.get(sombra4).to({ x: configLibro.pageWidth-100 }, pageSpeed, metodo)
	createjs.Tween.get(sombra4).to({ alpha: 0.2 }, pageSpeed, metodo).call(function(callback){
		reset(paginaI,paginaD,animacionPagina)
		if(callback && {}.toString.call(callback) === '[object Function]') callback()
	},[callback])
	
	return [paginaI,paginaD]
  }

function reset(pagA,pagB,animacionPagina){
	paginasLayer.mouseEnabled = true;
	
	paginasLayer.removeAllChildren()
	paginasLayer.addChild(pagA)
	paginasLayer.addChild(pagB)
	capaAnimacion.removeChild(animacionPagina)
	libro.pagI=pagA
	libro.pagD=pagB
}