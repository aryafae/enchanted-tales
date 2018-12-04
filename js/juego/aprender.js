
var diccionario={}

/*********************************************************

				SISTEMA DE APRENDIZAJE
					
 *********************************************************/

function abrirDiccionario(){
	diccionario.pagina=1
	
	diccionario.palabras_diccionario=[]
	for(var pregunta in preguntas)
		//if(typeof preguntas[pregunta].nivel!=='undefined')
			diccionario.palabras_diccionario.push(preguntas[pregunta])
	
	var pagI = new createjs.Container();
	addLineasDiccionario(pagI,diccionario.pagina)
	
	
	var pagD = new createjs.Container();
	addLineasDiccionario(pagD,diccionario.pagina+1)
	var pags=pasarPaginaDerecha(pagI,pagD)
	pags[0].addEventListener("click",volverAIndice)
	pags[1].addEventListener("click",siguientePaginaDiccionario)
}

function siguientePaginaDiccionario(evt){
	evt.currentTarget.removeAllEventListeners()
	
	diccionario.pagina+=2;
	var pagI = new createjs.Container();
	addLineasDiccionario(pagI,diccionario.pagina)
	
	
	var pagD = new createjs.Container();
	addLineasDiccionario(pagD,diccionario.pagina+1)
	
	var pags=pasarPaginaDerecha(pagI,pagD)
	pags[0].addEventListener("click",anteriorPaginaDiccionario)
	
	if(Math.ceil(diccionario.palabras_diccionario.length/8)>diccionario.pagina+1)
		pags[1].addEventListener("click",siguientePaginaDiccionario)
}

function anteriorPaginaDiccionario(evt){
	evt.currentTarget.removeAllEventListeners()
	
	diccionario.pagina-=2;
	var pagI = new createjs.Container();
	addLineasDiccionario(pagI,diccionario.pagina)
	
	
	var pagD = new createjs.Container();
	addLineasDiccionario(pagD,diccionario.pagina+1)
	
	var pags=pasarPaginaIzquierda(pagI,pagD)
	if(diccionario.pagina==1) pags[0].addEventListener("click",volverAIndice)
	else pags[0].addEventListener("click",anteriorPaginaDiccionario)
	pags[1].addEventListener("click",siguientePaginaDiccionario)
}

function addLineasDiccionario(pag,numpag){
		
	pag.addChild(crearTextoLibro(textos.Palabra,260,35,20,'#000'))
	pag.addChild(crearTextoLibro(textos.Significado,600,35,20,'#000'))
		
	var altoLinea=110;
	var topTabla=30;

	for(var p=0+(numpag-1)*8;p<8+(numpag-1)*8;p++){
		if(p<0) break;
		if(p>=diccionario.palabras_diccionario.length) break;
		var pos=p-(numpag-1)*8;
		
		var linea = new createjs.Shape();
		linea.graphics.setStrokeStyle(1).beginStroke("rgba(50,40,20,0.2)").moveTo(0,0).lineTo(850,0)
        linea.x=50
        linea.y=topTabla+pos*altoLinea+50
        iCache(linea)
		pag.addChild(linea)
		
		var texto=crearTextoLibro(diccionario.palabras_diccionario[p].r,260,topTabla+pos*altoLinea+55,45)
		if(texto.getMeasuredWidth()>380) texto=crearTextoLibro(diccionario.palabras_diccionario[p].r,260,
			topTabla+pos*altoLinea+55+20*(1-380/texto.getMeasuredWidth())
			,Math.round(45*380/texto.getMeasuredWidth()));
		
		pag.addChild(texto)
		pag.addChild(crearTextoLibro(diccionario.palabras_diccionario[p].p,260,topTabla+pos*altoLinea+115,25,'#742'))
		pag.addChild(txtLeft(crearTextoLibro(diccionario.palabras_diccionario[p].s,500,topTabla+pos*altoLinea+80,25,'#742')))
	}
	
	pag.addChild(crearTextoLibro(numpag+'/'+Math.ceil(diccionario.palabras_diccionario.length/8)+' - '+textos.Diccionario,450,970,25,'#963'));
    iCache(pag)
}

 
 function crearTextoLibro(texto,x,y,tam=40,color="#432"){
	var texto=new createjs.Text(texto, ""+tam+"px 'Merienda One'", color);
	texto.textAlign='center';texto.x=x;texto.y=y;
    iCache(texto)
	return texto
 }
 
 function crearTextoIzq(texto,x,y,tam=40,color="#432"){
	var texto=new createjs.Text(texto, ""+tam+"px 'Merienda One'", color);
	texto.x=x;texto.y=y;
    iCache(texto)
	return texto
 }
 
/*********************************************************

				EJERCICIOS
					
 *********************************************************/
 
var palabrasPreguntadas=[];
var palabrasPreguntas;
var habilidadActual
var muestra_teoria, inicio_ejercicio // Fechas para betatest
var preguntas={}
function abrirEjercicio(){
	muestra_teoria=new Date()
	//habilidadActual=evento.target.habilidad
	palabrasPreguntas=[]
	var manifest=[]
	
    leccion=getEstado('paginasPracticadas')
	var teoria=lecciones[leccion].teoria
	var preg=lecciones[leccion].preguntas
	var j=0;
	for(var i in preg){
		palabrasPreguntas.push(preg[i])
        preg[i].indice=leccion+"_"+i
        if(preg[i].snd)
            if(voces_cargadas.indexOf(preg[i].snd) == -1){
                manifest.push({id:"snd_"+preg[i].snd, src:"snd/ejercicios/"+preg[i].snd+".mp3"})
                voces_cargadas.push(preg[i].snd)
            }
	}
	// Palabras repaso
	var repaso=[]
	for(var i in preguntas){
		if(typeof preguntas[i].nivel !== 'undefined')
			repaso.push(preguntas[i])
	}
	
	repaso.sort(function(a, b){return a.nivel-b.nivel})
	repaso=repaso.slice(0,20-palabrasPreguntas.length)
	palabrasPreguntas = palabrasPreguntas.concat(repaso); 
	
	// Cargamos las voces si falta alguna
	for(var i in palabrasPreguntas){
		if(palabrasPreguntas[i].snd)
			if(voces_cargadas.indexOf(palabrasPreguntas[i].snd) == -1){
				manifest.push({id:"snd_"+palabrasPreguntas[i].snd, src:"snd/ejercicios/"+palabrasPreguntas[i].snd+".mp3"})
				voces_cargadas.push(palabrasPreguntas[i].snd)
			}
	}
		
	var pagI = new createjs.Container();
	var pagD = new createjs.Container();
	
	esquina_salida = new createjs.Bitmap(loader.getResult("esquina"))
	esquina_salida.addEventListener("click",function(){
		resumenEjercicio(true)
	})
	esquina_salida.x=0;
	esquina_salida.y=9;
	pagI.addChild(esquina_salida)
	
	var altoLinea=110;
	var topTabla=50;
	
	var pagTabla=pagD
	/*if(palabrasPreguntas.length<9){
		pagTabla=pagD
		topTabla=50;
	}*/
	
	pagTabla.addChild(crearTextoLibro(textos["Palabra"],260,topTabla,25,'#000'));
	//pagTabla.addChild(crearTextoLibro(textos["Romaji"],400,topTabla,25,'#000'));
	pagTabla.addChild(crearTextoLibro(textos["Significado"],600,topTabla,25,'#000'));
	
	for(var p in palabrasPreguntas){
		if(!(typeof palabrasPreguntas[p].nivel=='undefined' || palabrasPreguntas[p].nivel==0)) continue;
			
		var pos=p;
		if(p>6){
			pagTabla=pagI
			topTabla=150
			
			pagTabla.addChild(crearTextoLibro(textos["Palabra"],260,topTabla,25,'#000'));
			//pagTabla.addChild(crearTextoLibro(textos["Romaji"],400,topTabla,25,'#000'));
			pagTabla.addChild(crearTextoLibro(textos["Significado"],600,topTabla,25,'#000'));
			pos=p-7
		}
		
		if(typeof palabrasPreguntas[p].nivel=='undefined' || palabrasPreguntas[p].nivel==0){
			var destacado = new createjs.Shape();
			destacado.graphics.beginFill((palabrasPreguntas[p].nivel==0)?"#fe0":"#fff").drawRect(50,topTabla+pos*altoLinea+50,820,altoLinea);
			destacado.alpha=0.2;
            iCache(destacado)
			pagTabla.addChild(destacado)
		}
		else continue;
		
		palabrasPreguntas[p].fallo=0;
		
		var linea = new createjs.Shape();
		linea.graphics.setStrokeStyle(1).beginStroke("rgba(50,40,20,0.2)").moveTo(0,0).lineTo(820,0);
        linea.x=50
        linea.y=topTabla+pos*altoLinea+50
        iCache(linea)
		pagTabla.addChild(linea)
		
		var texto=crearTextoLibro(palabrasPreguntas[p].r,260,topTabla+pos*altoLinea+55,45);
		if(texto.getBounds().width>360) texto=crearTextoLibro(palabrasPreguntas[p].r,260,
			topTabla+pos*altoLinea+55+20*(1-360/texto.getBounds().width)
			,Math.round(45*360/texto.getBounds().width));
		
		pagTabla.addChild(texto)
		pagTabla.addChild(crearTextoLibro(palabrasPreguntas[p].p,260,topTabla+pos*altoLinea+115,25,'#742'))
		pagTabla.addChild(txtLeft(crearTextoLibro(palabrasPreguntas[p].s,500,topTabla+pos*altoLinea+80,25,'#742')))
		
		/*
		var texto=crearTextoLibro(palabrasPreguntas[p].r,150,topTabla+pos*altoLinea+55,35);
		if(texto.getBounds().width>180) texto=crearTextoLibro(palabrasPreguntas[p].r,150,
			topTabla+p*altoLinea+55+20*(1-180/texto.getBounds().width)
			,Math.round(35*180/texto.getBounds().width));
		
		pagTabla.addChild(texto)
		pagTabla.addChild(crearTextoLibro(palabrasPreguntas[p].p,400,topTabla+pos*altoLinea+65,20))
		pagTabla.addChild(txtLeft(crearTextoLibro(palabrasPreguntas[p].s,560,topTabla+pos*altoLinea+65,20,'#742')))*/
	}
	
	
	preguntaActual=0;
	numeroFallos=0;
	shuffle(palabrasPreguntas)
	
	pasarPaginaDerecha(pagI,pagD)
	
	if(manifest.length){
		var queue = new createjs.LoadQueue();
		queue.installPlugin(createjs.Sound);
		queue.on("complete", function(){
			var botonPracticar = new createjs.Container();
			botonPracticar.x=550
			botonPracticar.y=900
			pagD.addChild(botonPracticar)
			botonPracticar.addChild(creaBotonLibro(300,100,inicia_preguntas))
			botonPracticar.addChild(crearTextoLibro(textos["Practicar"],150,25))
		});
		queue.loadManifest(manifest);
	}
	else{
		var botonPracticar = new createjs.Container();
		botonPracticar.x=550
		botonPracticar.y=900
		pagD.addChild(botonPracticar)
		botonPracticar.addChild(creaBotonLibro(300,100,inicia_preguntas))
		botonPracticar.addChild(crearTextoLibro(textos["Practicar"],150,25))
	}
	
	if(teoria) setTimeout(function(){
		dialogo.alpha=0;
		iniciaDialogo(teoria)
		
		var animSpeed=500;
		var ease=createjs.Ease.getPowOut(2);
		createjs.Tween.get(dialogo).to({ alpha: 1 },animSpeed,ease)
	},500)
	
	estrellas=0;
	aciertos=0;
}

function inicia_preguntas(){
	inicio_ejercicio=new Date()
	mostrarPregunta()
}
 
 var pagI;
 
 function mostrarPregunta(){
	fallada=0;
	var pregunta=palabrasPreguntas[preguntaActual];
	
	if(pregunta.snd) setTimeout(function(){
		var instance = createjs.Sound.play("snd_"+pregunta.snd);
		instance.volume = 1;
	},100)
	
	pagI = new createjs.Container();
	
	if(pregunta.t && pregunta.t=="trad"){
		var text=crearTextoLibro(pregunta.r,450,300,100);
		if(text.getBounds().width>800) text=crearTextoLibro(pregunta.r,450,
			300+40*(1-800/text.getBounds().width)
			,Math.round(100*800/text.getBounds().width));
			
		pagI.addChild(text)
		pagI.addChild(crearTextoLibro(pregunta.p,450,450,50,'#742'))
	}
	else{
		var text=crearTextoLibro(pregunta.p,450,300,100);
		if(text.getBounds().width>800) text=crearTextoLibro(pregunta.p,450,
			300+40*(1-800/text.getBounds().width)
			,Math.round(100*800/text.getBounds().width));
			
		pagI.addChild(text)
		pagI.addChild(crearTextoLibro(pregunta.s,450,450,50,'#742'))
	}
	
	/*var barraProgreso = new createjs.Shape();
	barraProgreso.graphics.beginFill("#432").drawRoundRect(0,0,700,20,3);
	barraProgreso.x=100;barraProgreso.y=900;
	pagI.addChild(barraProgreso)
	
	barraAciertos = new createjs.Shape();
	barraAciertos.graphics.beginFill("#0c0").drawRoundRect(0,0,Math.round(700*(preguntaActual)/palabrasPreguntas.length),20,3);
	barraAciertos.x=100;barraAciertos.y=900;
	pagI.addChild(barraAciertos)*/
	
	
	var alternativas=pregunta.o;
	
	var alternativa=alternativas[Math.floor(Math.random() * alternativas.length)];
	pregunta.ultimaAlternativa=alternativa
	var opciones=[pregunta.r,alternativa]
	if(pregunta.t && pregunta.t=="trad") opciones=[pregunta.s,alternativa]
	shuffle(opciones)
	
	var pagD = new createjs.Container();
	
	ejercicioOpcion1=creaOpcion(opciones[0],"",250,pagD)
	ejercicioOpcion2=creaOpcion(opciones[1],"",500,pagD)
	ejercicioOpcion1.boton.identificador=opciones[0]
	ejercicioOpcion2.boton.identificador=opciones[1]
	
	for(var i=0;i<estrellas;i++){
		var estrella = new createjs.Bitmap(loader.getResult("estrella"))
		estrella.regX=20;
		estrella.regY=20;
		estrella.y=800
		estrella.x=350+i*50
		pagI.addChild(estrella)
	}
	
	pasarPaginaDerecha(pagI,pagD)
 }
 
 function creaOpcion(texto,subtexto,y,pag){
	var ejercicioOpcion={}
	ejercicioOpcion.boton=creaBotonLibro(700,200,pulsaOpcion);
	ejercicioOpcion.boton.x=150;
	ejercicioOpcion.boton.y=y;
	pag.addChild(ejercicioOpcion.boton)
			
	if(subtexto){
		ejercicioOpcion.texto=crearTextoLibro(texto,500,y+40,60); //670
		pag.addChild(ejercicioOpcion.texto)
		ejercicioOpcion.subtexto=crearTextoLibro(subtexto,500,y+120,40,'#743');
		pag.addChild(ejercicioOpcion.subtexto)
	}
	else{
		
		var text=crearTextoLibro(texto,500,y+40,80);
		if(text.getBounds().width>600) text=crearTextoLibro(texto,500,
			y+40+40*(1-600/text.getBounds().width)
			,Math.round(80*600/text.getBounds().width));
			
		ejercicioOpcion.texto=text; //670
		pag.addChild(ejercicioOpcion.texto)
	}
	
	return ejercicioOpcion;
 }
 
var aciertos=0;
var estrellas=0;
function pulsaOpcion(evt){
	var pregunta=palabrasPreguntas[preguntaActual];
	if(pregunta.t && pregunta.t=="trad") respuesta=pregunta.s
	else respuesta=pregunta.r
	// Si fallamos
	if(evt.target.identificador!=respuesta){
		evt.target.graphics.clear().setStrokeStyle(1).beginStroke("#cc0000").beginFill("rgba(255,200,200,0.8)").drawRoundRect(0,0,700,200,20);
        iCache(evt.target)
		evt.target.mouseEnabled=false;
		fallada=1;
		numeroFallos++;
		pregunta.fallo=1;
		pregunta.nivel=0;
	}
	else{
		evt.target.graphics.clear().setStrokeStyle(1).beginStroke("#00cc00").beginFill("rgba(200,255,200,0.8)").drawRoundRect(0,0,700,200,20);
        iCache(evt.target)
		evt.target.mouseEnabled=false;
		
		if(fallada && !pregunta.repetida){
			pregunta.repetida=1
			if(preguntaActual+1<palabrasPreguntas.length){
				var temp=palabrasPreguntas[preguntaActual]
				palabrasPreguntas[preguntaActual]=palabrasPreguntas[preguntaActual+1]
				palabrasPreguntas[preguntaActual+1]=temp
			}
			preguntaActual--
		}
		
		if(!pregunta.fallo){
			if(pregunta.nivel) pregunta.nivel++;
			else pregunta.nivel=1;
			aciertos++
		}
		
		muestraEstrella(evt)
		
		setTimeout(function(){
			preguntaActual++
			//resumenEjercicio(); return;
			if(preguntaActual<palabrasPreguntas.length) mostrarPregunta()
			else{ 
                for(var p in palabrasPreguntas)
                    if(-1==preguntas.indexOf(palabrasPreguntas[p])) preguntas.push(palabrasPreguntas[p])
				estado.paginasPracticadas=getEstado("paginasPracticadas")+1
				resumenEjercicio(true,estrellas)
			}
		},500)
	}
	//barraFallos.graphics.clear().beginFill("#c00").drawRoundRect(0,0,Math.round(700*(numeroFallos)/palabrasPreguntas.length),20,3);
}

function muestraEstrella(evt){
	if((estrellas+0.6)<=5*aciertos/palabrasPreguntas.length){
		estrellas++;
		
		var estrella = new createjs.Bitmap(loader.getResult("estrella"))
		estrella.regX=20;
		estrella.regY=20;
		estrella.y=evt.target.y+100
		estrella.x=500+configLibro.pageWidth-41
		paginasLayer.addChild(estrella)
		
		var animSpeed=200;
		var ease=createjs.Ease.getPowOut(2);
		createjs.Tween.get(estrella).to({ x: 350+(estrellas-1)*50 },animSpeed,ease)
		createjs.Tween.get(estrella).to({ y: 800 },animSpeed,ease).call(function(parent, object){
			muestraEstrella(evt)
		})
	}
}



/*********************************************************

				RESUMEN EJERCICIO
					
 *********************************************************/
 
// Puntos necesarios para cada subida de nivel (max 125, medio 100)
var estrellas_niveles=[3,8,15,23,32,42,52,62,72,82,92,102,112,122]
var dotesEncontradas=[]
 
function resumenEjercicio(volver=false,estrellas=false){
	var altoLinea=60;
	var topTabla=50;
	
	if(estrellas!==false){
		// Si hemos realizado un ejercicio, enviamos la información
		$.get("http://faerygames.com/betatest/",{"info":JSON.stringify({
			"inicio_partida":inicio_partida,
			"muestra_teoria":muestra_teoria,
			"inicio_ejercicio":inicio_ejercicio,
			"fin_ejercicio":new Date(),
			"preguntas":palabrasPreguntas,
			"paginasEncontradas":getEstado('paginasEncontradas'),
			"paginasPracticadas":getEstado('paginasPracticadas')
		})})
	}
	
	pagI = new createjs.Container();
	
	esquina_salida = new createjs.Bitmap(loader.getResult("esquina"))
	esquina_salida.addEventListener("click",volverAIndice)
	esquina_salida.x=0;
	esquina_salida.y=9;
	pagI.addChild(esquina_salida)
	
	lista_estrellas=[]
	for(var i=0;i<estrellas;i++){
		var estrella = new createjs.Bitmap(loader.getResult("estrella"))
		estrella.regX=20;
		estrella.regY=20;
		estrella.y=100
		estrella.x=350+i*50
		pagI.addChild(estrella)
		lista_estrellas.push(estrella)
	}
	
	var fondo_progreso_nivel = new createjs.Bitmap(loader.getResult("fondo_progreso_nivel"))
	fondo_progreso_nivel.regX=125;fondo_progreso_nivel.regY=125;
	fondo_progreso_nivel.y=451;fondo_progreso_nivel.x=449
    fondo_progreso_nivel.scaleX=-1
    iCache(fondo_progreso_nivel)
	pagI.addChild(fondo_progreso_nivel)
    
	progreso_nivel1 = new createjs.Bitmap(loader.getResult("progreso_nivel"))
	progreso_nivel1.regX=125;progreso_nivel1.regY=125;
	progreso_nivel1.y=451;progreso_nivel1.x=451
    iCache(progreso_nivel1)
	pagI.addChild(progreso_nivel1)
    
	fondo_progreso_nivel = new createjs.Bitmap(loader.getResult("fondo_progreso_nivel"))
	fondo_progreso_nivel.regX=125;fondo_progreso_nivel.regY=125;
	fondo_progreso_nivel.y=451;fondo_progreso_nivel.x=451
    iCache(fondo_progreso_nivel)
	pagI.addChild(fondo_progreso_nivel)
    
	progreso_nivel2 = new createjs.Bitmap(loader.getResult("progreso_nivel"))
	progreso_nivel2.regX=125;progreso_nivel2.regY=125;
	progreso_nivel2.y=451;progreso_nivel2.x=451
    progreso_nivel2.alpha=0
    iCache(progreso_nivel2)
	pagI.addChild(progreso_nivel2)
	
	estrellas_niveles[getEstado('nivel')-1]
	porcentaje_inicial=0;
	if(getEstado('nivel')==1) porcentaje_inicial=getEstado('estrellas')/estrellas_niveles[getEstado('nivel')-1]
	else porcentaje_inicial=(getEstado('estrellas')-estrellas_niveles[getEstado('nivel')-2])/(estrellas_niveles[getEstado('nivel')-1]-estrellas_niveles[getEstado('nivel')-2])
    
	if(porcentaje_inicial<0.5){
        progreso_nivel1.rotation=360*porcentaje_inicial
    }
    else{
        progreso_nivel1.rotation=180
        progreso_nivel2.alpha=1
        progreso_nivel2.rotation=360*porcentaje_inicial
    }
	
	var esfera_nivel = new createjs.Bitmap(loader.getResult("esfera_nivel"))
	esfera_nivel.regX=127;esfera_nivel.regY=127
	esfera_nivel.y=450;esfera_nivel.x=450
    iCache(esfera_nivel)
	pagI.addChild(esfera_nivel)
	
	pagI.addChild(crearTextoLibro(textos["Nivel"],450,200,70))
	textoNivel=crearTextoLibro(getEstado('nivel'),450,370,100,'#fff');
	pagI.addChild(textoNivel)
	
	textoEstrellas=txtLeft(crearTextoLibro(getEstado('estrellas')+"/"+(getEstado('paginasPracticadas')*5),750,50,40));
	
	mejorasDisponibles=getEstado('nivel')-getEstado('dotesAprendidas')-1;
	textoMejorasDisponibles=txtRight(crearTextoLibro(textos["Mejoras disponibles"]+": "+mejorasDisponibles,870,85,30));

	if(estrellas) setTimeout(function(){
        animateLevelUp(estrellas)
    },500)
	
	var pagD = new createjs.Container();
	
	var estrella = new createjs.Bitmap(loader.getResult("estrella"))
	estrella.y=60
	estrella.x=700
	pagI.addChild(estrella)
	
	pagI.addChild(textoEstrellas)
	
	// Mostramos mejoras disponibles
	pagD.addChild(textoMejorasDisponibles)
	
	
	pagD.addChild(txtLeft(crearTextoLibro(textos["Habilidades"],100,50,60)))
	
	var pos=0;
	var habilidades=["Comunes","Energía","Ataque","Curación","Protección"]
	dotesEncontradas=[]
	for(var i=0;i<5;i++){
		var mostrar=true;
		var aprendidas={}
		var encontradas={}
		
		for(var j in dotes){
			if(dotes[j].tipo==(i+1) && dotes[j].encontrado){
				mostrar=true
				if(dotes[j].aprendido) aprendidas[j]=dotes[j]
				if(dotes[j].aprendido<dotes[j].encontrado) encontradas[j]=dotes[j]
			}
		}
		if(mostrar){
			pagD.addChild(txtLeft(crearTextoLibro(textos[habilidades[i]],100,140+pos*150,40)))
			
			var posX=0;
			for(var j in aprendidas){
				
				var b=new BotonLibro(100+posX*100,140+pos*150+60,80,80,verDote)
				b.setHideIfOut()
				b.boton.dote=j
				pagD.addChild(b.boton)
				
				var icono = new createjs.Sprite(iconos_dotes);
				icono.gotoAndStop(aprendidas[j].icono)
				icono.x=b.boton.x+40
				icono.y=b.boton.y+40
				icono.scaleX=0.33
				icono.scaleY=0.33
				pagD.addChild(icono)
				
				if(aprendidas[j].encontrado>1){
					var circulo = new createjs.Shape();
					circulo.graphics.beginFill("#fff").beginStroke("#742").drawCircle(0,0,15);
					circulo.x=b.boton.x+70;circulo.y=b.boton.y+70
                    iCache(circulo)
					pagD.addChild(circulo)
	
					pagD.addChild(crearTextoLibro(aprendidas[j].aprendido,b.boton.x+70,b.boton.y+55,20))
				}
				
				posX++;
			}
			
			for(var j in encontradas){
				var b=new BotonLibro(100+posX*100,140+pos*150+60,80,80,verDote)
				b.boton.dote=j
				if(mejorasDisponibles) b.setStrokeColor("#ff0000")
				if(mejorasDisponibles) b.setStrokeStyle(2)
				pagD.addChild(b.boton)
				dotesEncontradas.push(b)
				
				var icono = new createjs.Sprite(iconos_dotes);
				icono.gotoAndStop(encontradas[j].icono)
				icono.x=b.boton.x+40
				icono.y=b.boton.y+40
				icono.alpha=0.5
				icono.scaleX=0.33
				icono.scaleY=0.33
				pagD.addChild(icono)
				
				if(encontradas[j].encontrado>1){
					var circulo = new createjs.Shape();
					circulo.graphics.beginFill("#fff").beginStroke("#742").drawCircle(0,0,15);
					circulo.x=b.boton.x+70;circulo.y=b.boton.y+70
                    iCache(circulo)
					pagD.addChild(circulo)
	
					pagD.addChild(crearTextoLibro(1+encontradas[j].aprendido,b.boton.x+70,b.boton.y+55,20))
				}
				
				posX++;
			}
			
			pos++
		}
	}
	
	if(getEstado('paginasEncontradas')>getEstado('paginasPracticadas')){
		var boton = new createjs.Container();
		boton.x=550
		boton.y=900
		pagD.addChild(boton)
		boton.addChild(creaBotonLibro(300,100,function(){
			abrirEjercicio(true)
		}))
		boton.addChild(crearTextoLibro(textos["Entrenar"],150,25))
	}
	
	var boton = new createjs.Container();
	boton.x=200
	boton.y=900
	pagD.addChild(boton)
	boton.addChild(creaBotonLibro(300,100,function(){
		volverAIndice(function(){
			entraJuego()
		})
	}))
	boton.addChild(crearTextoLibro(textos["Salir"],150,25))
	
	
	if(volver===true) pasarPaginaIzquierda(pagI,pagD)
	else pasarPaginaDerecha(pagI,pagD)
 } 
 
 function animateLevelUp(estrellas){
    for(var i=0;i<lista_estrellas.length;i++) lanzaEstrella(lista_estrellas[i],i,pagI)
        
    estado.estrellas=getEstado('estrellas')+estrellas
    
    textoEstrellas.text=getEstado('estrellas')+"/"+(getEstado('paginasPracticadas')*5) // Actualizamos el número de estrellas conseguidas
    iCache(textoEstrellas)
    
    var tiempoAnimacion=1000
    
    if(getEstado('estrellas')<estrellas_niveles[getEstado('nivel')-1]){// No subimos de nivel
        porcentaje_final=0;
        if(getEstado('nivel')==1) porcentaje_final=getEstado('estrellas')/estrellas_niveles[getEstado('nivel')-1]
        else porcentaje_final=(getEstado('estrellas')-estrellas_niveles[getEstado('nivel')-2])/(estrellas_niveles[getEstado('nivel')-1]-estrellas_niveles[getEstado('nivel')-2])
        
        if(porcentaje_final>0.5){
            if(porcentaje_inicial>0.5){
                createjs.Tween.get(progreso_nivel2).to({rotation:porcentaje_final*360}, tiempoAnimacion/2); 
            }
            else{
                var t1=tiempoAnimacion*(0.5-porcentaje_inicial)/(porcentaje_final-porcentaje_inicial)
                var t2=tiempoAnimacion*(porcentaje_final-0.5)/(porcentaje_final-porcentaje_inicial)
                createjs.Tween.get(progreso_nivel1).to({rotation:180}, t1).call(function(){
                    progreso_nivel2.alpha=1
                    progreso_nivel2.rotation=180
                    createjs.Tween.get(progreso_nivel2).to({rotation:porcentaje_final*360}, t2); 
                }); 
            }
        }
        else{
            createjs.Tween.get(progreso_nivel1).to({rotation:porcentaje_final*360}, tiempoAnimacion/2); 
        }
        
    }
    else{
        estado.nivel=getEstado('nivel')+1;
        porcentaje_final=(getEstado('estrellas')-estrellas_niveles[getEstado('nivel')-2])/(estrellas_niveles[getEstado('nivel')-1]-estrellas_niveles[getEstado('nivel')-2])
        
        var t3=tiempoAnimacion*(1-porcentaje_inicial)/(porcentaje_final+1-porcentaje_inicial)
        var t4=tiempoAnimacion*(porcentaje_final)/(porcentaje_final+1-porcentaje_inicial)
        
        if(porcentaje_inicial>0.5){
            createjs.Tween.get(progreso_nivel2).to({rotation:porcentaje_final*360}, t3).call(function(){
                subirNivel(t4,porcentaje_final)
            })
        }
        else{
            var t1=t3*(0.5-porcentaje_inicial)/(1-porcentaje_inicial)
            var t2=t3*(1-0.5)/(1-porcentaje_inicial)
            createjs.Tween.get(progreso_nivel1).to({rotation:180}, t1).call(function(){
                progreso_nivel2.alpha=1
                progreso_nivel2.rotation=180
                createjs.Tween.get(progreso_nivel2).to({rotation:360}, t2).call(function(){
                    subirNivel(t4,porcentaje_final)
                })
            }); 
        }
    }
}
 
function subirNivel(tiempo,porcentaje_final){
    progreso_nivel2.alpha=0
    progreso_nivel1.rotation=0
    
    playMusic("11nivel",0);
    setTimeout(function(){
        if(libroAbierto) playMusic("7libro");
    },6000)
    
    mejorasDisponibles=getEstado('nivel')-getEstado('dotesAprendidas')-1;
    textoMejorasDisponibles.text=textos["Mejoras disponibles"]+": "+mejorasDisponibles;
    iCache(textoMejorasDisponibles)
    for(var i in dotesEncontradas){
        dotesEncontradas[i].setStrokeColor("#ff0000")
        dotesEncontradas[i].setStrokeStyle(2)
    }

    actualizarNivel()
    if(getEstado('primeraSubida')){
        estado.primeraSubida=false;
        
        dialogo.alpha=0;
        setTimeout(function(){
            iniciaDialogo("primeraSubida")
        },1000)
        
        var animSpeed=500;
        var ease=createjs.Ease.getPowOut(2);
        createjs.Tween.get(dialogo).to({ alpha: 1 },animSpeed,ease)
    }
    
    createjs.Tween.get(textoNivel).to({alpha:0}, 300).call(function(){
        textoNivel.text=getEstado('nivel')
        iCache(textoNivel)
        createjs.Tween.get(textoNivel).to({alpha:1}, 300)
    }); 
    
    pagI.addChild(crearTextoLibro(textos["¡Nivel alcanzado!"],450,600,50))
    

    progreso_nivel1.rotation=0
    progreso_nivel2.alpha=0
    if(porcentaje_final>0.5){
        var t1=tiempo*0.5/porcentaje_final
        var t2=tiempo*(porcentaje_final-0.5)/porcentaje_final
        createjs.Tween.get(progreso_nivel1).to({rotation:180}, t1).call(function(){
            progreso_nivel2.alpha=1
            progreso_nivel2.rotation=180
            createjs.Tween.get(progreso_nivel2).to({rotation:porcentaje_final*360}, t2); 
        }); 
    }
    else createjs.Tween.get(progreso_nivel1).to({rotation:porcentaje_final*360}, tiempo); 
    
}
 
 function lanzaEstrella(estrella,i,pagI){
	setTimeout(function(){
		createjs.Tween.get(estrella).to({x:450}, 250)
		createjs.Tween.get(estrella).to({y:450}, 250).call(function(estrella){
			pagI.removeChild(estrella)
		},[estrella]); 
	},i*250)
 }
 
function verDote(evt){
	var dote=dotes[evt.target.dote]
	
	var pagI = new createjs.Container();
	
	esquina_salida = new createjs.Bitmap(loader.getResult("esquina"))
	esquina_salida.addEventListener("click",function(){resumenEjercicio(true)})
	esquina_salida.x=0;
	esquina_salida.y=9;
	pagI.addChild(esquina_salida)
	
	var pagD = new createjs.Container();
	
	pagD.addChild(crearTextoLibro(textos[evt.target.dote],450,200,60))
	
	var texto_desc=crearTextoLibro(textos[evt.target.dote+"_desc"],450,700,40)
	texto_desc.lineWidth=700;
    iCache(texto_desc)
	pagD.addChild(texto_desc)
	
	var icono = new createjs.Sprite(iconos_dotes);
	icono.gotoAndStop(dote.icono)
	icono.x=450
	icono.y=500
	pagD.addChild(icono)
	
	if(dote.aprendido<dote.encontrado && getEstado('dotesAprendidas')<(getEstado('nivel')-1)){
		var boton = new createjs.Container();
		boton.x=200
		boton.y=800
		pagD.addChild(boton)
		boton.addChild(creaBotonLibro(500,100,function(){
			estado.dotesAprendidas=getEstado('dotesAprendidas')+1
			dote.aprendido++
			actualizarNivel()
			resumenEjercicio(true)
		}))
		boton.addChild(crearTextoLibro(textos["Mejorar habilidad"],250,25))
	}
	
	var pags=pasarPaginaDerecha(pagI,pagD)
}

function actualizarNivel(){
	estado.velocidad=120+dotes["Movimiento ágil"].aprendido*100
	spirit.velocidad=getEstado('velocidad')
	
	estado.ataque=game_values.ataqueBase+dotes["Ataque potenciado"].aprendido*game_values.subidasAtaque
	
	estado.aura=200+dotes["Aura ampliada"].aprendido*100
	barra_energia.x=1780-getEstado('aura');
}


/*********************************************************

				UTILIDADES
					
 *********************************************************/
 
 function txtLeft(texto){
	texto.textAlign='left';
    iCache(texto)
	return texto
 }
 
 function txtRight(texto){
	texto.textAlign='right';
    iCache(texto)
	return texto
 }

function BotonLibro(x,y,ancho,alto,accion){
	this.hideIfOut==0;
	this.strokeColor="#000000";
	this.strokeStyle=1;
	
	this.boton = new createjs.Shape();
	this.boton.object=this;
	this.boton.graphics.setStrokeStyle(this.strokeStyle).beginStroke(this.strokeColor).beginFill("rgba(255,255,255,0.2)").drawRoundRect(0,0,ancho,alto,20);
    iCache(this.boton)
	this.boton.cursor='pointer';
	this.boton.addEventListener("mouseover",function(evt){
		if(evt.target.mouseEnabled){
			if(evt.target.object.hideIfOut) evt.target.object.boton.alpha=1;
			evt.target.graphics.clear().setStrokeStyle(evt.target.object.strokeStyle).beginStroke(evt.target.object.strokeColor).beginFill("rgba(255,255,255,0.9)").drawRoundRect(0,0,ancho,alto,20);
            iCache(evt.target)
        }
	})
	this.boton.addEventListener("mouseout",function(evt){
		if(evt.target.mouseEnabled){
			if(evt.target.object.hideIfOut) evt.target.object.boton.alpha=0.03;
			evt.target.graphics.clear().setStrokeStyle(evt.target.object.strokeStyle).beginStroke(evt.target.object.strokeColor).beginFill("rgba(255,255,255,0.4)").drawRoundRect(0,0,ancho,alto,20);
            iCache(evt.target)
		}
	})
	this.boton.addEventListener("click",accion)
	this.boton.x=x;
	this.boton.y=y;
	
	this.setHideIfOut=function(hideIfOut=1){
		this.hideIfOut=hideIfOut;
		this.boton.alpha=0.03;
	}
	
	this.setStrokeColor=function(color){
		this.strokeColor=color;
		this.boton.graphics.clear().setStrokeStyle(1).beginStroke(this.strokeColor).beginFill("rgba(255,255,255,0.2)").drawRoundRect(0,0,ancho,alto,20);
        iCache(this.boton)
	}
	this.setStrokeStyle=function(style){
		this.strokeStyle=style;
		this.boton.graphics.clear().setStrokeStyle(this.strokeStyle).beginStroke(this.strokeColor).beginFill("rgba(255,255,255,0.2)").drawRoundRect(0,0,ancho,alto,20);
        iCache(this.boton)
	}
}
 
function creaBotonLibro(ancho,alto,accion){
	var boton = new createjs.Shape();
	boton.graphics.setStrokeStyle(1).beginStroke("#000000").beginFill("rgba(255,255,255,0.2)").drawRoundRect(0,0,ancho,alto,20);
    iCache(boton)
	boton.cursor='pointer';
	boton.addEventListener("mouseover",function(evt){
		if(evt.target.mouseEnabled){
			evt.target.graphics.clear().setStrokeStyle(1).beginStroke("#000000").beginFill("rgba(255,255,255,0.9)").drawRoundRect(0,0,ancho,alto,20);
            iCache(evt.target)
        }
	})
	boton.addEventListener("mouseout",function(evt){
		if(evt.target.mouseEnabled){
			evt.target.graphics.clear().setStrokeStyle(1).beginStroke("#000000").beginFill("rgba(255,255,255,0.4)").drawRoundRect(0,0,ancho,alto,20);
            iCache(evt.target)
        }
	})
	boton.addEventListener("click",accion)
	return boton
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}