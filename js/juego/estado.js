var perfil={
	"nivel":1,
	"estrellas":0,
	"dotesAprendidas":0,
	
	"velocidad":120, //100
	"ataque":10, //5
	"aura":200
}

function getEstado(key){
    if(key in estado) return estado[key]
    else return estado_inicial[key]
}

var estado_inicial={
	"nivel":1,
	"estrellas":0,
	"dotesAprendidas":0,
	
	"velocidad":120, //100
	"ataque":10, //5
	"aura":200,
    
	"paginasEncontradas":0,
	"paginasPracticadas":0,
    
	"juegoEmpezado":false,
	"primeraSubida":true,
	"juegoAbierto":false,
	"primerTesoro":true,
	"vistoEnemigo":false,
	"dialogoAbierto":false,
	"puertaVista":false,
	"energiaAbsorvida":false,
	"eliminasPrimerEnemigo":false,
	"intentoHablar":false,
	
	"nivelEnergia":200,
	
	// Estados diálogos usados
	"mensajeEsperame":false,
	"dialogoSinEnergia":false,
	"agradecimientoEspiritu":false,
	"emboscada":false,
	"vistoLaboratorio":false,
	"estatuaVista":false,
	"bibliotecaVista":false,
	"primeraJaula":true,
	"primeraCama":true,
	"primerEscritorio":true,
	"dialogoCurame":false,
	"encontradoHana":false
}

var estado={
    
}

var dotes={
	"Movimiento ágil":{
		"encontrado":0,
		"aprendido":0,
		"tipo":1,
		"icono":0,
	},
	
	"Aura ampliada":{
		"encontrado":0,
		"aprendido":0,
		"tipo":2,
		"icono":12,
	},
	"Absorber energía ambiental":{
		"encontrado":0,
		"aprendido":0,
		"tipo":2,
		"icono":13,
	},
	"Atraer partículas":{
		"encontrado":0,
		"aprendido":0,
		"tipo":2,
		"icono":14,
	},
	
	"Ataque potenciado":{
		"encontrado":1,
		"aprendido":0,
		"tipo":3,
		"icono":1,
	},
	"Bala acelerada":{
		"encontrado":0,
		"aprendido":0,
		"tipo":3,
		"icono":2,
	},
	"Ataque frecuente":{
		"encontrado":0,
		"aprendido":0,
		"tipo":3,
		"icono":7,
	},
	"Ataque seguidor":{
		"encontrado":0,
		"aprendido":0,
		"tipo":3,
		"icono":3,
	},
	
	"Hechizo de curar":{
		"encontrado":0,
		"aprendido":0,
		"tipo":4,
		"icono":4,
	},
	"Curación potenciada":{
		"encontrado":0,
		"aprendido":0,
		"tipo":4,
		"icono":6,
	},
	"Curación en grupo":{
		"encontrado":0,
		"aprendido":0,
		"tipo":4,
		"icono":5,
	},
	
	"Hechizo de escudo":{
		"encontrado":0,
		"aprendido":0,
		"tipo":5,
		"icono":8,
	},
	"Escudo potenciado":{
		"encontrado":0,
		"aprendido":0,
		"tipo":5,
		"icono":10,
	},
	"Escudo en grupo":{
		"encontrado":0,
		"aprendido":0,
		"tipo":5,
		"icono":9,
	},
}

var dotes_base=JSON.stringify(dotes)

var voces_cargadas=[]

function guardarPartida(name,image){
	var partidasGuardadas = localStorage.getItem('partidasGuardadas');
	if(!partidasGuardadas) partidasGuardadas=[]
	else partidasGuardadas=JSON.parse(partidasGuardadas)
	
	if(name=="autosave"){
		// Borra el anterior autosave
		for(var i in partidasGuardadas)
			if(partidasGuardadas[i].name==name){
				partidasGuardadas.splice(i, 1)
				break;
			}
	}
	
	// Guardamos la info
	var guardar={
		"estado":estado,
		"perfil":perfil,
		"dotes":dotes
	}
    
	var partida={"name":name,"image":image.toDataURL(),"info":guardar}
	// Guardamos el aprendizaje
	partida.preguntas=preguntas
	// Guardamos el mapa de caminos
	partida.mapa_caminos=mapa_caminos
	
	// Guardamos los elementos de la capa de personajes (npc, monstruos, elementos de escena y espíritu)
	partida.characters=[]
	for(var i=0;i<testLayers['character_layer'].numChildren;i++){
		var origin=testLayers['character_layer'].getChildAt(i)
		var item={}
		
		copiaAtributos(origin,item,["tipo","nombre","id","x","y","map_x","map_y","life","base_damage","next_attack","velocidad","caminando","direccion","imageName","max_escudo","escudo_actual","activo"])
		
		item.camino=false;
		if(origin.camino) item.camino={"ruta":origin.camino.ruta}
		partida.characters.push(item)
	}
	
	// Guardamos la party
	partida.party=[]
	for(var i in party)
		partida.party.push(party[i].nombre)
	
	// Guardamos la partida
	partidasGuardadas.unshift(partida)
	localStorage.setItem('partidasGuardadas', JSON.stringify(partidasGuardadas));

	if(name!="autosave") volverAIndice()
}

function cargarPartida(i){
	var partidasGuardadas = localStorage.getItem('partidasGuardadas');
	if(!partidasGuardadas) partidasGuardadas=[]
	else partidasGuardadas=JSON.parse(partidasGuardadas)
	
	var partida=partidasGuardadas[i];
	
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
	
	// Cargamos los datos
	guardar=partida.info
	perfil=guardar.perfil
	estado=guardar.estado
	dotes=guardar.dotes
	voces_cargadas=[]
	// Cargamos el aprendizaje
	preguntas=partida.preguntas
	// Cargamos el mapa de caminos
	mapa_caminos=partida.mapa_caminos
	
	// Cargamos los elementos de la capa de personajes (npc, monstruos, elementos de escena y espíritu)
	for(var i in partida.characters){
		var origin=partida.characters[i]
		var item={}
		
		// Creamos la base
		if(origin.tipo=="escena"){
			item=createElemento(origin.id,origin.nombre,origin.map_x,origin.map_y,origin.activo)
			// Escogemos imagen y pulsable
		}
		else if(origin.tipo=="monstruo")
			item=createMonster(origin.id,origin.nombre,origin.map_x,origin.map_y)
		else if(origin.tipo=="npc"){
			item=createCharacter(origin.id,origin.nombre,origin.map_x,origin.map_y)
			if(origin.escudo_actual){
				var escudo= new createjs.Bitmap(loadImage("escudo"))
				escudo.regX=26*pixelScale
				escudo.regY=26*pixelScale
				escudo.x=16*pixelScale
				escudo.y=24*pixelScale
				item.addChildAt(escudo,1)
				item.escudo=escudo
				
				var ancho=32*pixelScale*item.escudo_actual/item.max_escudo
				item.barra_escudo = new createjs.Shape();
				item.barra_escudo.graphics.beginFill("#0ff").drawRect(0,-16,ancho,4);
				item.barra_escudo.x=16*pixelScale-ancho/2
				item.addChild(item.barra_escudo)
			}
		}
		else if(origin.tipo=="espíritu"){
			item=createSpirit(origin.map_x,origin.map_y)
			item.image=loadImage(origin.imageName)
		}
		
		// Copiamos los atributos
		copiaAtributos(origin,item,["tipo","nombre","id","x","y","map_x","map_y","life","base_damage","next_attack","velocidad","caminando","direccion","imageName","max_escudo","escudo_actual","camino","activo","size"])
		
		partida.characters.push(item)
		
		// Añadimos la barra de vida
		if(item.life && item.life<item.max_life){
			var ancho_barra=Math.floor(32*pixelScale*item.life/item.max_life)
			if(item.size==2) ancho_barra=Math.floor(64*pixelScale*item.life/item.max_life)
			
			item.barra_vida = new createjs.Shape();
			item.barra_vida.graphics.beginFill("#f00").drawRect(0,-10,ancho_barra,4);
			item.addChild(item.barra_vida)
					
			item.barra_vida.x=16*pixelScale-ancho_barra/2;
			if(item.size==2) item.barra_vida.x=32*pixelScale-ancho_barra/2;
		}
		
		testLayers['character_layer'].addChild(item)
	}
	
	// Cargamos la party
	party=[]
	for(var i in partida.party){
		party.push(npcs[partida.party[i]])
	}
	
	// Actualizar barra de enrgia
	barra_energia.x=1780-perfil.aura;
	
	// Cargamos el screenshot
	screenShot = new createjs.Bitmap(partida.image)
}

function copiaAtributos(origen,destino,atributos){
	for(var i in atributos)
		destino[atributos[i]]=origen[atributos[i]]
}