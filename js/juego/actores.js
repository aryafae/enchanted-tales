function gelatinaGrandeFollow(actor){{
		for(var i in party) if(Math.abs(actor.map_x-party[i].map_x)<6 && Math.abs(actor.map_y-party[i].map_y)<6){
			if(Math.abs(actor.map_x-party[i].map_x)>Math.abs(actor.map_y-party[i].map_y)){
				if(actor.map_x>party[i].map_x){
					if(mapa_caminos[actor.map_x-1][actor.map_y]==1 && mapa_caminos[actor.map_x-1][actor.map_y+1]==1){
						actor.camino={}
						actor.camino.ruta=[]
						actor.camino.ruta[0]={'x':actor.map_x-1,'y':actor.map_y}
						break;
					}
				}
				else if(mapa_caminos[actor.map_x+2][actor.map_y]==1 && mapa_caminos[actor.map_x+2][actor.map_y+1]==1){
					actor.camino={}
					actor.camino.ruta=[]
					actor.camino.ruta[0]={'x':actor.map_x+1,'y':actor.map_y}
					break;
				}
			}
			
			if(actor.map_y>party[i].map_y){
				if(mapa_caminos[actor.map_x][actor.map_y-1]==1 && mapa_caminos[actor.map_x+1][actor.map_y-1]==1){
					actor.camino={}
					actor.camino.ruta=[]
					actor.camino.ruta[0]={'x':actor.map_x,'y':actor.map_y-1}
					break;
				}
			}
			else if(mapa_caminos[actor.map_x][actor.map_y+2]==1 && mapa_caminos[actor.map_x+1][actor.map_y+2]==1){
				actor.camino={}
				actor.camino.ruta=[]
				actor.camino.ruta[0]={'x':actor.map_x,'y':actor.map_y+1}
				break;
			}
			
			if(actor.map_x>party[i].map_x){
				if(mapa_caminos[actor.map_x-1][actor.map_y]==1 && mapa_caminos[actor.map_x-1][actor.map_y+1]==1){
					actor.camino={}
					actor.camino.ruta=[]
					actor.camino.ruta[0]={'x':actor.map_x-1,'y':actor.map_y}
					break;
				}
			}
			else if(mapa_caminos[actor.map_x+2][actor.map_y]==1 && mapa_caminos[actor.map_x+2][actor.map_y+1]==1){
				actor.camino={}
				actor.camino.ruta=[]
				actor.camino.ruta[0]={'x':actor.map_x+1,'y':actor.map_y}
				break;
			}
			break;
		}
	}
}

// Acciones personalizadas de diálogos
function muestraLimo(){
	var monster=new createjs.Container();
	monster.sprite=createBlob("monster9")
	monster.sprite.parent=monster
	monster.addChild(monster.sprite)
	
	monster.nombre="Gelatina azul"
	monster.map_x=53;
	monster.map_y=48;
	monster.y=32*pixelScale*monster.map_y
	monster.x=32*pixelScale*monster.map_x
	monster.velocidad=15;
	monster.move="randomBlob"
	monster.y_desp=0 // Indica cuanto moveremos el sprite hacia arriba
	mapa_caminos[monster.map_x][monster.map_y]=2;
	monster.sprite.gotoAndPlay("move")
	testLayers['character_layer'].addChild(monster);
	npcs["monster_nuevo"]=monster;
	actores.push(monster);
	
	monster.max_life=50;
	
	monster.next_attack=0; // Cuanto queda hasta el próximo ataque
	monster.attack_delay=1000; // Tiempo a esperar entre ataques
	monster.attack_type='poison' // Tipo de ataque
	monster.attack_damage=5 // Daño que hace el ataque
	
	monster.life=monster.max_life;
	
	if(!game_options.controlTeclado)
		monster.addEventListener("click", disparaMonstruo)
	monster_list.push(monster)
}

function give_energy(accion){
	actualizaEnergia(accion.energy)
}