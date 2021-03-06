var textos={
	"Abrir":"Abrir",
	"Jugar":"Jugar",
	"Capítulo 1":"Capítulo 1: El despertar",
	"Menú":"Menú",
	"Diccionario":"Diccionario",
	"Entrenamiento":"Entrenamiento",
	"Guardar":"Guardar",
	"Cargar":"Cargar",
	"Créditos":"Créditos",
	"Cancelar":"Cancelar",
	"Palabra":"Palabra",
	"Romaji":"Romaji",
	"Significado":"Significado",
	"Practicar":"Practicar",
	"Nivel":"Nivel",
	"Entrenar":"Entrenar",
	"Habilidades":"Habilidades",
	"Mejora":"Mejora",
	"Salir":"Salir",
	"Volar":"Volar",
	"Atacar":"Atacar",
	"Curar":"Curar",
	"Energía espiritual":"Energía espiritual",
	"Avance habilidad":"Avance habilidad",
	"¡Nivel alcanzado!":"¡Nivel alcanzado!",
	"Mejoras disponibles":"Mejoras disponibles",
	"Mejorar habilidad":"Mejorar habilidad",
	"Comunes":"Comunes",
	"Energía":"Energía",
	"Ataque":"Ataque",
	"Curación":"Curación",
	"Protección":"Protección",
	"Encuentras":"Encuentras",
	"Oro":"Oro",
	"Páginas":"Páginas",
	"Gema":"Gema",
	"Cerrar":"Cerrar",
	"Aprender":"Aprender",
	"Movimiento ágil":"Movimiento ágil",
	"Ataque potenciado":"Ataque potenciado",
	"Bala acelerada":"Proyectil acelerado",
	"Aura ampliada":"Aura ampliada",
	"Ataque frecuente":"Ataque frecuente",
	"Absorber energía ambiental":"Energía ambiental",
	"Atraer partículas":"Atraer partículas",
	"Ataque seguidor":"Ataque seguidor",
	"Curación potenciada":"Curación potenciada",
	"Curación en grupo":"Curar en grupo",
	"Escudo en grupo":"Escudo en grupo",
	"Escudo potenciado":"Escudo potenciado",
	"Hechizo de curar":"Hechizo de curar",
	"Hechizo de escudo":"Hechizo de escudo"
}

var preguntas=[
	{"p":"do","s":"silabario hiragana","r":"ど","o":["で","こ"],"snd":"do","teoria":"teoria_hiragana"},
	{"p":"de","s":"silabario hiragana","r":"で","o":["ど","く"],"snd":"de"},
	{"p":"su","s":"silabario hiragana","r":"す","o":["そ","で"],"snd":"su"},
	{"p":"so","s":"silabario hiragana","r":"そ","o":["す","こ"],"snd":"so"},
	{"p":"ku","s":"silabario hiragana","r":"く","o":["こ","か"],"snd":"ku"},
	{"p":"ko","s":"silabario hiragana","r":"こ","o":["に","く"],"snd":"ko"},
	{"p":"ka","s":"indica interrogación","r":"か","o":["こ","く"],"snd":"ka","teoria":"teoria_ka_y_ni"},
	{"p":"ni","s":"indica dirección","r":"に","o":["こ","そ"],"snd":"ni"},
	{"p":"doko","s":"dónde","r":"どこ","o":["です","そこ"],"snd":"doko","teoria":"teoria_palabras_hiragana_kanji_verbos"},
	{"p":"soko","s":"ahí","r":"そこ","o":["です","どこ"],"snd":"soko"},
	{"p":"desu","s":"ser, estar","r":"です","o":["そこ","どこ"],"snd":"desu"},
	{"p":"iku","s":"ir","r":"行く","o":["徂く","早く"],"snd":"iku"},
	{"p":"kuchi","s":"boca","r":"口","o":["十","日"],"snd":"kuchi","teoria":"teoria_radicales"},
	{"p":"hi","s":"día, sol","r":"日","o":["目","口"],"snd":"hi"},
	{"p":"me","s":"ojo","r":"目","o":["耳","月"],"snd":"me"},
	{"p":"tsuki","s":"mes, luna","r":"月","o":["目","耳"],"snd":"tsuki"},
	{"p":"juu","s":"diez","r":"十","o":["口","日"],"snd":"juu"},
	{"p":"hayaku","s":"rápido","r":"早く","o":["行く","古く"],"snd":"hayaku"},
	{"p":"doko desu ka","s":"¿Dónde está?","r":"どこですか","o":["Va por allí."],"t":"trad","snd":"doko desu ka","teoria":"teoria_estructura_frase"},
	{"p":"soko ni iku","s":"Va por allí.","r":"そこに行く","o":["¿Dónde está?"],"t":"trad","snd":"soko ni iku"},
	{"p":"a","s":"silabario hiragana","r":"あ","o":["お","な"],"snd":"a"},
	{"p":"na","s":"silabario hiragana","r":"な","o":["た","す"],"snd":"na","teoria":"teoria_diferencias_na_ta"},
	{"p":"ta","s":"silabario hiragana","r":"た","o":["な","に"],"snd":"ta"},
	{"p":"ha","s":"silabario hiragana","r":"は","o":["な","ほ"],"snd":"ha"},
	{"p":"anata","s":"tú","r":"あなた","o":["おなた","あたな"],"snd":"anata"},
	{"p":"wa","s":"indica tema","r":"は","o":["な","ほ"],"snd":"wa","teoria":"teoria_particula_wa"},
	{"p":"anata wa","s":"sobre ti","r":"あなたは","o":["おなたは","あなたほ"],"snd":"anata_wa"},
	{"p":"no","s":"de, indica relación","r":"の","o":["お","は"],"snd":"no"},
	{"p":"hito","s":"persona","r":"人","o":["大","夫"],"snd":"hito"},
	{"p":"otto","s":"marido","r":"夫","o":["大","本"],"snd":"otto"},
	{"p":"dai","s":"grande (prefijo)","r":"大","o":["犬","夫"],"snd":"dai","teoria":"teoria_sufijos"},
	{"p":"inu","s":"perro","r":"犬","o":["大","夫"],"snd":"inu"},
	{"p":"i","s":"silabario hiragana","r":"い","o":["の","は"],"snd":"i"},
	{"p":"u","s":"silabario hiragana","r":"う","o":["つ","て"],"snd":"u"},
	{"p":"ya","s":"silabario hiragana","r":"や","o":["つ","う"],"snd":"ya"},
	{"p":"te","s":"silabario hiragana","r":"て","o":["で","と"],"snd":"te","teoria":"teoria_variación_te_de"},
	{"p":"hai","s":"sí","r":"はい","o":["はの","ほい"],"snd":"hai"},
	{"p":"daijoubu","s":"estar bien","r":"大丈夫","o":["丈大夫","夫丈大"],"snd":"daijoubu"},
	{"p":"namae","s":"nombre","r":"名前","o":["夘前","名苅"],"snd":"namae","teoria":"teoria_palabras_complejas_y_radicales"},
	{"p":"isshoni","s":"juntos, junto con","r":"一緒に","o":["一紙に","一偖に"],"snd":"isshoni"},
	{"p":"ru","s":"silabario hiragana","r":"る","o":["う","ろ"],"snd":"ru"},
	{"p":"shi","s":"silabario hiragana","r":"し","o":["て","と"],"snd":"shi"},
	{"p":"ra","s":"silabario hiragana","r":"ら","o":["ち","ろ"],"snd":"ra","teoria":"diferencias_ra_chi"},
	{"p":"chi","s":"silabario hiragana","r":"ち","o":["ら","ろ"],"snd":"chi"},
	{"p":"ya","s":"flecha","r":"矢","o":["本","来"],"snd":"ya"},
	{"p":"rai","s":"siguiente (prefijo)","r":"来","o":["本","矢"],"snd":"rai"},
	{"p":"ki","s":"árbol","r":"木","o":["本","夫"],"snd":"ki"},
	{"p":"hon","s":"libro","r":"本","o":["来","矢"],"snd":"hon","teoria":"teoria_hon_ki"},
	
	{"p":"shiru","s":"saber","r":"知る","o":["利る","如る"],"snd":"shiru"}, //13
	{"p":"kuru","s":"venir","r":"来る","o":["本る","矢る"],"snd":"kuru"},
	{"p":"watashi tachi","s":"nosotros","r":"私たち","o":["利たち","私たら"],"snd":"watashi_tachi","teoria":"teoria_watashi_tachi"},
	{"p":"hana","s":"flor","r":"花","o":["化","苻"],"snd":"hana"},
	
	{"p":"sa","s":"silabario hiragana","r":"さ","o":["て","と"],"snd":"sa"}, // 14
	{"p":"tsu","s":"silabario hiragana","r":"つ","o":["う","て"],"snd":"tsu"},
	{"p":"to","s":"con","r":"と","o":["て","ど"],"snd":"to","teoria":"teoria_to"},
	{"p":"koko","s":"aquí","r":"ここ","o":["たた","にに"],"snd":"koko"},
	
	{"p":"nani","s":"qué","r":"何","o":["化","同"],"snd":"nani"}, // 15
	{"p":"kite","s":"venir","r":"来て","o":["利る","如る"],"snd":"kite","teoria":"teoria_forma_te_y_nai"},
	{"p":"kudasai","s":"por favor","r":"ください","o":["くだとい","くたさい"],"snd":"kudasai"},
	{"p":"shiranai","s":"no saber","r":"知らない","o":["利る","如る"],"snd":"shiranai"},
	
	{"p":"kimashita","s":"vino (venir)","r":"来ました","o":["矢ました","木ました"],"snd":"kimashita","teoria":"teoria_pasado_formal_y_doble_consonante"}, //16
	{"p":"douyatte","s":"de qué manera","r":"どうやって","o":["とうやって","とうやっで"],"snd":"douyatte"},
	{"p":"watashi wa shiranai","s":"No lo sé.","r":"私は知らない","o":["利らない","如らない"],"snd":"watashi wa shiranai"},
	{"p":"anata wa daijoubu?","s":"¿Estás bien?","r":"あなたは大丈夫？","o":["¿Cómo estás?","¿Estás cansado?"],"snd":"anata wa daijoubu?","t":"trad"},
	
	{"p":"kite kudasai","s":"Ven, por favor.","r":"来てください","o":["とうやって","とうやっで"],"snd":"kite kudasai","teoria":"teoria_forma_te_kudasai"}, //17
	{"p":"nan desu ka?","s":"¿Qué es?","r":"何ですか","o":["¿Cómo es?","¿Estás bien?"],"snd":"nan desu ka","t":"trad"}, 
	{"p":"koko ni kimashita ka?","s":"¿Viniste aquí?","r":"ここに来ましたか","o":["¿Vuelves aquí?","¿Estás aquí?"],"snd":"koko ni kimashita ka","t":"trad"}, 
	{"p":"watashi tachi to issho ni","s":"Junto con nosotros.","r":"私たちと一緒に","o":["Ir contigo.","Ven con nosotros."],"snd":"watashi tachi to issho ni","t":"trad"}, 
	
	{"p":"wo","s":"indica el objeto","r":"を","o":["て","む"],"snd":"wo","teoria":"teoria_wo_da"}, //18
	{"p":"re","s":"silabario hiragana","r":"れ","o":["わ","ね"],"snd":"re"},
	{"p":"iru","s":"ser, estar","r":"いる","o":["とる","いろ"],"snd":"iru","snd":"iru"},
	{"p":"da","s":"ser","r":"だ","o":["た","な"],"snd":"da"},
	
	{"p":"kokoro","s":"corazón","r":"心","o":["方","化"],"snd":"kokoro"}, //19
	{"p":"kore","s":"esto","r":"これ","o":["こわ","こね"],"snd":"kore"},
	{"p":"imasu","s":"ser, estar (formal)","r":"います","o":["こます","いすま"],"snd":"imasu","teoria":"teoria_masu"},
	{"p":"shitte","s":"saber (forma -te)","r":"知って","o":["知て","利って"],"snd":"shitte"},
	
	{"p":"kata","s":"persona (respetuoso)","r":"方","o":["心","力"],"snd":"kata"},
	{"p":"ta","s":"campo de arroz","r":"田","o":["日","皿"],"snd":"ka"},
	{"p":"yama","s":"móntala","r":"山","o":["出","心"],"snd":"yama"},
	{"p":"hon wo shitte imasu ka","s":"¿Conoces el libro?","r":"本を知っていますか？","o":["¿Dónde está el libro?","¿Te sabes el libro?"],"t":"trad","snd":"hon wo shitte imasu ka","teoria":"teoria_te_imasu"},
	{"p":"hanasu","s":"liberar","r":"放す","o":["知す","改す"],"snd":"hanasu","teoria":"teoria_otros_verbos"},
	{"p":"omou","s":"pensar","r":"思う","o":["見う","出う"],"snd":"omou"},
	{"p":"deru","s":"salir","r":"出る","o":["心る","思る"],"snd":"deru"},
	{"p":"miru","s":"mirar","r":"見る","o":["目る","思る"],"snd":"miru"},
	{"p":"omoide","s":"recuerdo","r":"思い出","o":["見い出","思い心"],"snd":"omoide"},
	{"p":"miseru","s":"mostrar","r":"見せる","o":["見せて","思せる"],"snd":"miseru"},
	{"p":"misete","s":"muestra (imperativo)","r":"見せて","o":["見せる","思せて"],"snd":"misete","teoria":"teoria_imperativo"},
	{"p":"modoru","s":"volver, regresar","r":"戻る","o":["戸る","涙る"],"snd":"modoru"},
	{"p":"be","s":"silabario hiragana","r":"べ","o":["へ","づ"],"snd":"be"},
	{"p":"ki","s":"silabario hiragana","r":"き","o":["ぎ","さ"],"snd":"ki"},
	{"p":"e","s":"silabario hiragana","r":"え","o":["う","そ"],"snd":"e"},
	{"p":"yo","s":"enfatiza una orden","r":"よ","o":["な","ま"],"snd":"yo","teoria":"teoria_yo"},
	{"p":"kiken","s":"peligro","r":"危険\t","o":["厄険","危倹"],"snd":"kiken"},
	{"p":"beki","s":"deberías","r":"べき","o":["へき","べさ"],"snd":"beki"},
	{"p":"iie","s":"no","r":"いいえ","o":["いええ","ここえ"],"snd":"iie"},
	{"p":"itai","s":"querer estar","r":"いたい","o":["いだい","こたこ"],"snd":"itai","teoria":"teoria_tai"},
	{"p":"omoide wo misete","s":"Muestra los recuerdos.","r":"思い出を見せて。","o":["Mira los recurdos.","Muestra el pasado."],"snd":"omoide wo misete","t":"trad","teoria":"teoria_wo_beki_yo"},
	{"p":"kiken desu.","s":"Es peligroso.","r":"危険です。","o":["Es difícil.","Es extraño."],"snd":"kiken desu","t":"trad"},
	{"p":"modoru beki da yo","s":"Deberías volver.","r":"戻るべきだよ。","o":["Deberías esperar.","Puedes volver."],"t":"trad"},
	{"p":"anata to isshoni itai desu.","s":"Quiero estar a contigo.","r":"あなたと一緒にいたいです。","o":["Estoy contigo.","Quiero ir contigo."],"snd":"anata to isshoni itai desu","t":"trad"}
]

var dialogos={
"preset":[
	//{"anim":"rect","name":"black_background","color":"black","width":1920,"height":1080}
],
"inicio":[
	{"music":"13inicio"},
	{"anim":"text","wait":200,"y":800,"x":960,"text":"Viajas a un nuevo mundo.","time":2000},
	{"anim":"text","wait":5200,"y":800,"x":960,"text":"Hacia una luz que te atrae...","time":2000},
	{"anim":"image","wait":1000,"name":"luz","x":960,"y":540,"scale":0.01,"time":1000,"waitEnd":1},
	{"anim":"change","wait":1000,"name":"luz","scale":1.7,"time":20000},
	{"anim":"text","wait":8200,"y":800,"x":960,"text":"Hacia una voz que te llama...","time":2000},
	{"anim":"text","wait":13200,"y":800,"x":960,"text":"Y sabes que empieza la aventura.","time":2000},
	{"anim":"image","wait":16000,"name":"c_nami","x":960,"y":560,"scale":1,"time":4000},
	{"anim":"change","wait":16000,"name":"c_nami","scale":1.3,"time":4000},
	{"anim":"hide","wait":20000,"name":"black_background","time":100,"waitEnd":1},
	{"t":"¡Ha funcionado!"},
	{"t":"Gracias por venir. Supongo que te debo una explicación: te he invocado porque necesito tu ayuda."},
	{"t":"Me llamo Nami Kitsune y soy la bibliotecaria de la escuela de criaturas mágicas."},
	{"t":"Estos son los subterráneos de la escuela. Por aquí se ha perdido un libro que puede cambiarlo todo, llamado \"Mahou no kotoba\"."},
	{"t":"Y también creo que hay estudiantes persiguiéndolo, temo que se metan en líos."},
	{"anim":"hide","name":"luz","time":1000},
	{"anim":"hide","name":"c_nami","time":1000,"waitEnd":1},
	{"music":"3exploracion"},
	{"t":"Luego te daré más detalles pero es importante que nos demos prisa.","pj":"c_nami"},
	{"t":"Necesito que me guíes por estos pasillos y me ayudes si surge algún peligro."},
	{"t":"Antes de nada registremos los muebles de esta sala. Siento que hay magia cerca."}
],
"Escaleras arriba":[
	{"t":"Esas escaleras llevan de vuelta a la escuela.","pj":"c_nami"},
	{"t":"Puedo enseñarte la escuela más tarde si quieres, pero ahora no tenemos tiempo."}
],
"Armario roto":[
	{"find":"page","feat":"Movimiento ágil"},
	{"t":"¡Una hoja del libro! Esto era lo que sentía.","pj":"c_nami"},
	{"t":"Pero ¿por qué está el libro perdiendo hojas? Algo extraño ocurre."},
	{"t":"Lo bueno es que pueden ayudarte a aprender magia."},
	{"t":"Esta por ejemplo te puede enseñar a volar más rápido. Te aconsejo aprenderla cuanto antes."}
],
"primeraSubida":[
	{"t":"¡Enhorabuena! Acabas de subir de nivel.","pj":"c_nami"},
	{"t":"Al subir de nivel puedes escoger una nueva habilidad. Escoge correctamente."},
	{"t":"Busca una habilidad que te interese de la página de la derecha, pulsa en ella y después dale al botón de mejorar."}
],
"Habla del libro":[
	{"find":"page","feat":"Absorber energía ambiental"},
	{"t":"¡Otra hoja! Esta habla sobre cómo recoger energía del ambiente.","pj":"c_nami"},
	{"t":"Este conocimiento te será muy útil. Este lugar rebosa de energía, y la necesitarás para lanzar hechizos."},
	{"t":"En cualquier caso me preocupa ver que el libro está perdiendo hojas, me pregunto por qué será."},
	{"t":"Quizás las deje por alguna razón, o esté creando otras nuevas y necesite espacio."}
],
"Nami lejos":[
	{"t":"No puedes examinar los objetos sin la ayuda de Nami, espera a que se acerque."}
],
"mensajeEsperame":[
	{"t":"¡Eh, espérame, por favor! No puedo ir tan rápido como tú.","pj":"c_nami"},
	{"t":"Y si te pierdo de vista no podré seguirte."}
],
"sinEnergía":[
	{"t":"Te falta energía para hacer magia ¿no? Yo podría prestarte algo de la mía.","pj":"c_nami"},
	{"t":"Acércate a mí si la quieres y te la transfiero."},
	{"opciones":[
	{"t":"Aceptarla (acercarte).","a":[
	{"t":"Está bien, déjame concentrarme.","pj":"c_nami"},
	{"t":"Mmmmmm."},
	{"energy":"2000"},
	{"t":"Sientes como la energía te inunda, y recobras todo tu potencial.","pj":"none"},
	{"t":"Pero Nami cae de rodillas, mostrando síntomas de cansancio."},
	{"t":"No te preocupes, estoy bien. Pero no creo que pueda ayudarte mucho más con esto.","pj":"c_nami"}
]},
	{"t":"Rechazarla (alejarte).","a":[
	{"t":"Está bien. Puedes recuperar energía del ambiente simplemente esperando.","pj":"c_nami"}
]}
]},
	{"t":"En cualquier caso hay técnicas que te pueden ayudar a recuperar energía más rápido. Te aconsejo estudiarlas lo antes posible."}
],
"vesPrimerEnemigo":[
	{"t":"¡Cuidado! Esa masa azul que se mueve es un limo tóxico.","pj":"c_nami"},
	{"t":"No puedo acercarme o me intoxicará, pero puedes eliminarlo usando tu magia."},
	{"t":"Simplemente pulsa sobre el limo para lanzarle una bola de energía."}
],
"eliminasPrimerEnemigo":[
	{"t":"¡Buen trabajo! Has acabado con el limo.","pj":"c_nami"},
	{"t":"Debería haber soltado la energía espiritual que lo mantenía en pie."},
	{"t":"Yo no puedo verla, pero si puedes, recógela. La necesitarás."},
	{"t":"Habrás gastado energía al lanzar hechizos, así que te vendrá bien reponerla."}
],
"Frasco inicial":[
	{"t":"Estos frascos debían de contener productos alquímicos.","pj":"c_nami"},
	{"t":"Podrían ser el origen de los limos que hemos visto."},
	{"t":"El poder del libro les debe de haber insuflado energía espiritual, dándoles la vida."}
],
"Armario laboratorio":[
	{"find":"page","feat":"Ataque frecuente"},
	{"t":"Hmmm... Aquí habla sobre cómo lanzar tus ataques de energía más rápidamente.","pj":"c_nami"},
	{"t":"Puede ser interesante para acabar antes con los monstruos, pero ten cuidado."},
	{"t":"Asegúrate de tener suficiente energía, o no te servirá de nada disparar rápidamente."}
],
"Mesa experimentos":[
	{"t":"Vaya, esto parece que fue algún tipo de equipo alquímico.","pj":"c_nami"},
	{"t":"Este piso debe de ser algún tipo de laboratorio."},
	{"t":"Por si te interesa, estos subterráneos pertenecieron a una civilización ya desaparecida."},
	{"t":"Por supuesto a nosotros no nos gusta vivir bajo tierra, así que no los utilizamos."}
],
"Estantería laboratorio":[
	{"find":"page","feat":"Aura ampliada"},
	{"t":"Un trabajo sobre el aura... Te vendrá bien.","pj":"c_nami"},
	{"t":"El aura se puede definir como la forma mágica de nuestro cuerpo."},
	{"t":"De hecho para ti el aura es todo tu cuerpo, porque no tienes la parte física."},
	{"t":"Ampliar tu aura te puede ayudar a retener más magia para cuando la necesites."}
],
"Agradecer espíritu":[
	{"if":["not",["var","agradecimientoEspiritu"]],
"then":[
	{"t":"Ahora que parece que no hay peligro, quería agradecerte lo que estás haciendo.","pj":"c_nami"},
	{"t":"Sé que en estas circunstancias es difícil que pueda conocerte, ya que no podemos ni hablar. Pero creo que tienes que ser una gran persona."},
	{"t":"Cuando invocamos espíritus de otros planos, habitualmente nos piden algo a cambio. Vosotros en cambio ayudáis sin más."},
	{"t":"Quiero que sepas que cuando esto termine buscaré la manera de ayudaros yo también."},
	{"set":"agradecimientoEspiritu","expresion":["val",true]}
]}
],
"Emboscada":[
	{"if":["not",["var","emboscada"]],
"then":[
	{"t":"Eh... Parece que algo se mueve ahí.","pj":"c_nami"},
	{"t":"¡Oh, no! ¡Es otro de esos limos!"},
	{"custom":muestraLimo},
	{"set":"emboscada","expresion":["val",true]}
]}
],
"Almacén":[
	{"if":["not",["var","vistoLaboratorio"]],
"then":[
	{"t":"Parece que esto era un almacén. Está todo lleno de productos alquímicos.","pj":"c_nami"},
	{"t":"Me temo que nos encontraremos más limos tóxicos en este piso."},
	{"set":"vistoLaboratorio","expresion":["val",true]}
],
"else":[
	{"t":"Más productos alquímicos. Me pregunto para qué los usarían.","pj":"c_nami"}
]}
],
"Mesa almacén":[
	{"find":"page","feat":"Ataque potenciado"},
	{"t":"Aquí habla sobre cómo potenciar los ataques mágicos.","pj":"c_nami"},
	{"t":"Ten cuidado con esto también, porque potenciar los ataques hará que gasten más energía."},
	{"t":"Vete aprendiendo también hechizos que te ayuden a recuperar energía."}
],
"Nada":[
	{"t":"No parece haber nada interesante aquí.","pj":"c_nami"}
],
"Estatua":[
	{"if":["not",["var","estatuaVista"]],
"then":[
	{"t":"Estos debieron de ser los Antiguos que crearon este subterráneo.","pj":"c_nami"},
	{"t":"En estas estatuas no es fácil reconocer cómo eran, pero he visto ilustraciones suyas."},
	{"t":"Lo que no se sabe muy bien es cómo era su sociedad."},
	{"t":"Se supone que dominaban una magia muy poderosa. Me da un poco de miedo, la verdad."},
	{"t":"Pero lo más misterioso de esa raza es su desaparición, no se sabe la causa."},
	{"set":"estatuaVista","expresion":["val",true]}
],
"else":[
	{"t":"Otra estatua igual a la anterior. O eran muy similares, o debió de ser alguien importante.","pj":"c_nami"}
]}
],
"Biblioteca":[
	{"if":["not",["var","bibliotecaVista"]],
"then":[
	{"t":"Esto parece haber sido una biblioteca, aunque no queda ningún libro.","pj":"c_nami"},
	{"t":"Probablemente fuesen libros de alquimia para los laboratorios."},
	{"t":"Se habrán estropeado con el tiempo, al fin y al cabo han pasado siglos desde la desaparición de los Antiguos."},
	{"t":"Tenían capacidad para hacer libros mejores con su magia, pero la mayoría eran libros normales."},
	{"t":"Por cierto, el libro que buscamos es uno de esos libros mágicos que crearon los Antiguos."},
	{"set":"bibliotecaVista","expresion":["val",true]}
],
"else":[
	{"t":"Me da pena ver una biblioteca sin libros.","pj":"c_nami"}
]}
],
"Estantería biblioteca":[
	{"find":"page","feat":"Movimiento ágil"},
	{"t":"Otra página sobre cómo mejorar los movimientos en vuelo...","pj":"c_nami"},
	{"t":"¿Qué estará pasando? Son demasiadas páginas las que estamos encontrando."},
	{"t":"No creas que el libro está defectuoso. Al contrario, lo está haciendo a propósito."},
	{"t":"Ese libro perteneció a grandes hechiceras del pasado, y acabó por adquirir conciencia propia."},
	{"t":"Apostaría a que tiene un objetivo."}
],
"Mesa biblioteca":[
	{"find":"page","feat":"Bala acelerada"},
	{"t":"Ah, ya veo. Una hoja sobre cómo acelerar los proyectiles mágicos.","pj":"c_nami"},
	{"t":"Muy útil, sobre todo cuando combates a largas distancias."},
	{"t":"Recuerdo cuando aprendí esta técnica. No es fácil de dominar."},
	{"t":"Aunque la verdad es que tú lo estás haciendo bastante bien. La magia parece ser algo natural para ti."}
],
"Mesa animales":[
	{"find":"page","feat":"Atraer partículas"},
	{"t":"Déjame ver... Este capítulo habla de cómo atraer partículas de energía.","pj":"c_nami"},
	{"t":"Como esas que salen de los limos cuando son eliminados."},
	{"t":"La energía se mantiene concentrada durante tan solo unos segundos, luego se dispersa y no se puede recuperar."},
	{"t":"Por eso esta clase de técnicas puede ser muy útil."},
	{"t":"Pero solo sirven para espíritus. Los seres corpóreos no tenemos la posibilidad de usarlas."},
	{"t":"Nunca lo había pensado, pero este libro tiene un montón de información que los magos no podemos usar."}
],
"Jaula":[
	{"if":["var","primeraJaula"],
"then":[
	{"t":"¡Vaya! Esto parecen jaulas.","pj":"c_nami"},
	{"t":"Me acaba de entrar un escalofrío. Probablemente fuesen para animales usados en experimentos."},
	{"t":"Según parece, los Antiguos podían ser bastante crueles. Incluso sádicos."},
	{"t":"No creo que todos fuesen así, de todas maneras."},
	{"t":"La verdad es que sabemos muy poco sobre su cultura."},
	{"set":"primeraJaula","expresion":["val",false]}
],
"else":[
	{"t":"No quiero ni pensar en lo que pasaría con los animales que estaban aquí.","pj":"c_nami"}
]}
],
"Objeto inesperado":[
	{"findObject":"gema"},
	{"t":"¡Aquí hay algo! Parece una gema.","pj":"c_nami"},
	{"t":"Usamos las gemas para almacenar energía espiritual, así que quizás esta sea de una de las estudiantes que bajaron."},
	{"t":"De hecho me suena que la he visto antes, pero no recuerdo de quién era."},
	{"t":"Pobres, probablemente crean que tienen la culpa de lo que está pasando con el libro."},
	{"t":"La verdad es que el libro tiene voluntad propia, y lo que esté haciendo debe tener otro motivo."},
	{"t":"En cualquier caso cogeré la gema, quizás la necesite más adelante."}
],
"Relieve":[
	{"t":"Esto parecen inscripciones en el lenguaje de los Antiguos.","pj":"c_nami"},
	{"t":"No sé leerlo muy bien, pero sí que puedo descifrar algunas de sus palabras."},
	{"t":"Parece como si celebrasen una victoria, aunque no sé contra quienes."},
	{"t":"¿Contra otros Antiguos quizás? En teoría, a las criaturas mágicas ni nos conocían."},
	{"t":"Y al refugiarse bajo tierra se alejaron aún más de nosotras."},
	{"t":"Gracias sean dadas que a nosotras no nos afectó su magia aniquiladora."}
],
"Mesa operaciones":[
	{"t":"Esto parece una enfermería... o algo así.","pj":"c_nami"},
	{"t":"Y aquí hay otra página que... parece interesante."},
	{"find":"page","feat":"Hechizo de curar"},
	{"t":"¡Contiene el hechizo de curación! Te aconsejo aprender este rápidamente.","pj":"c_nami"},
	{"t":"Es curioso que el libro haya dejado esta página justo aquí. Supongo que encaja con su forma de pensar."},
	{"t":"Él no entiende las cosas como una persona, pero intenta copiar nuestra lógica."}
],
"Curame":[
	{"t":"Ahora que ya conoces el hechizo de curación, ¿podrías curarme?","pj":"c_nami"},
	{"t":"Estando herida hago peor las cosas y camino más despacio."},
	{"t":"Y no quiero gastar mi propia energía porque no la puedo recuperar tan fácilmente como tú."},
	{"t":"Se supone que arriba puedes ver una estrella azul."},
	{"t":"Si la tocas aparecerá un corazón rojo."},
	{"t":"Toca ese corazón y después a mí para lanzar el hechizo."},
	{"t":"Así me han dicho que funciona para vosotros la magia, aunque no entiendo por qué."}
],
"Cama":[
	{"if":["var","primeraCama"],
"then":[
	{"t":"Me pregunto qué clase de personas ocuparon estas camas.","pj":"c_nami"},
	{"t":"Quiero creer que serían magos que sufrieron accidentes haciendo experimentos, pero..."},
	{"t":"He leído demasiadas cosas raras sobre los Antiguos..."},
	{"t":"Aunque supongo que no puedes juzgar a otras culturas con nuestros ojos."},
	{"set":"primeraCama","expresion":["val",false]}
],
"else":[
	{"t":"Si esto eran camas, no parece que fuesen muy cómodas.","pj":"c_nami"},
	{"t":"Nuestras camas están todas mejoradas mágicamente para ser ideales."},
	{"t":"Claro que quizás los Antiguos no tuviesen esa posibilidad."},
	{"t":"Aunque sabían más de magia que nosotros, no eran criaturas mágicas en sí."}
]}
],
"Aura2":[
	{"find":"page","feat":"Aura ampliada"},
	{"t":"Otra página sobre el aura.","pj":"c_nami"},
	{"t":"El aura es algo curioso. Al no poder verla es difícil de controlar."},
	{"t":"Tengo entendido que en vuestro mundo el aura no es conocida, ¿no?"},
	{"t":"Me pregunto quién la descubriría en el nuestro."}
],
"Alquimia avanzada":[
	{"t":"Siempre he tenido la sensación de que los Antiguos tenían una alquimia enormemente avanzada.","pj":"c_nami"},
	{"t":"Las criaturas mágicas usamos más nuestra propia magia."},
	{"t":"Muchas veces me pregunto si es que el origen de la magia de los Antiguos es distinto al nuestro."}
],
"Armario curación potenciada":[
	{"find":"page","feat":"Curación potenciada"},
	{"t":"¡Eh! Aquí te explica cómo mejorar tu curación.","pj":"c_nami"},
	{"t":"Esta técnica es muy útil por que no aumenta el gasto de energía del hechizo."},
	{"t":"Es decir, podrás curarnos más con el mismo esfuerzo."}
],
"Más sobre recoger":[
	{"find":"page","feat":"Absorber energía ambiental"},
	{"t":"Más información sobre captar energía ambiental. Te será útil.","pj":"c_nami"},
	{"t":"Pero no dejo de preguntarme por qué el libro está perdiendo tantas hojas."},
	{"t":"La directora de la escuela lo ha estado usando todos estos días sin problema, precisamente intentando conectar con tu mundo."},
	{"t":"¿Lo habrá causado ella de alguna manera?"},
	{"t":"Me cuesta creerlo, conociendo sus habilidades. Pero con estos libros antiguos nunca se sabe."},
	{"t":"Incluso para los Antiguos tenía que ser uno de sus libros más viejos."}
],
"Scriptorium":[
	{"if":["var","primerEscritorio"],
"then":[
	{"t":"Esta mesa parece un escritorio, está llena de manchas de tinta.","pj":"c_nami"},
	{"t":"Quizás almacenaban aquí los resultados de sus experimentos. O puede que fuese un aula de enseñanza."},
	{"t":"Qué lástima que apenas nos quede información sobre sus investigaciones."},
	{"t":"Aunque por lo que sabemos, algunas de ellas no serían de nuestro agrado."},
	{"set":"primerEscritorio","expresion":["val",false]}
],
"else":[
	{"t":"Aquí hay algo escrito. Creo que pone... Eh... Mejor no lo leo. Es solo una broma de mal gusto.","pj":"c_nami"},
	{"t":"¡Vaya! Siempre imagino a los Antiguos como gente tan seria y majestuosa que se me olvida que eran personas como nosotros."},
	{"t":"No pudo ser fácil para ellos tener que venir a refugiarse aquí, bajo tierra."},
	{"t":"Aunque claro, también es cierto que fueron ellos quienes volvieron inhabitable la superficie."}
]}
],
"Estantería scriptorium":[
	{"t":"Nada se ha salvado de sus documentos. Ahora son solo polvo.","pj":"c_nami"},
	{"t":"Me pregunto qué habrá sido de los Antiguos. Adónde irían."},
	{"t":"Las criaturas mágicas y los Antiguos coexistíamos en el pasado, pero nos escondíamos de ellos."},
	{"t":"No sé el motivo, la verdad. Fue hace muchos años, y no nos ha llegado el origen del problema."}
],
"Ataque seguidor":[
	{"find":"page","feat":"Ataque seguidor"},
	{"t":"Ah... Una página sobre cómo hacer que los ataques sigan al blanco.","pj":"c_nami"},
	{"t":"Es una magia excepcionalmente compleja, pero garantiza que nunca falles."},
	{"t":"Requiere introducir en la esfera de energía la capacidad de percibir su destino."}
],
"Armario de pasillo":[
	{"find":"page","feat":"Ataque potenciado"},
	{"t":"Más información sobre cómo aumentar el poder de tus ataques. Es un tema interminable.","pj":"c_nami"},
	{"t":"Conozco hechiceras capaces de destruir una montaña entera con una sola bola de energía."},
	{"t":"Claro que eso no es demasiado útil en realidad."}
],
"Trata de comunicar":[
	{"if":["not",["var","intentoHablar"]],
"then":[
	{"t":"Antes de seguir... quería preguntarte algo.","pj":"c_nami"},
	{"t":"Puedo intentar usar la telepatía para comunicarme contigo, pero no quiero hacerlo sin tu permiso."},
	{"t":"Hagamos una cosa, si estás de acuerdo, acércate a mí, y si no, aléjate de mí. ¿Te parece?"},
	{"opciones":[
	{"t":"Sí (acercarte).","a":[
	{"t":"Está bien, déjame concentrarme.","pj":"c_nami"},
	{"t":"Mmmmmm."},
	{"t":"Nada, lo siento, solo capto pensamientos inconexos, y no puedo entenderlos del todo."},
	{"t":"A veces pasa, las mentes espirituales son difíciles de leer."}
]},
	{"t":"No (alejarte).","a":[
	{"t":"Está bien, respeto tu decisión.","pj":"c_nami"}
]}
]},
	{"t":"Al menos hemos encontrado una manera de que me puedas decir sí o no."},
	{"t":"Aprovechando eso, quería preguntarte algo. ¿Te gustaría venir a la escuela en el futuro?"},
	{"t":"Sé que en tu mundo no eres una criatura mágica, pero aquí sí, así que podrías estudiar en nuestra escuela."},
	{"opciones":[
	{"t":"Sí (acercarte).","a":[
	{"t":"¡Genial! Me gustaría conocerte en persona.","pj":"c_nami"},
	{"t":"Nuestra directora está trabajando en ello, junto con la reina de las hadas de tu mundo."},
	{"t":"Si finalmente vienes aquí te aseguro que será muy divertido."}
]},
	{"t":"No (alejarte).","a":[
	{"t":"Oh, vaya. Pues espero poder buscar otra forma de agradecértelo.","pj":"c_nami"},
	{"t":"De verdad que me estás ayudando mucho."}
]}
]},
	{"set":"intentoHablar","expresion":["val",true]}
]}
],
"Cristal":[
	{"t":"¡Mira! Esto es un cristal del alma. Un cristal vivo.","pj":"c_nami"},
	{"t":"Estos cristales son lo que da vida a la escuela."},
	{"t":"Al estar vivo puede almacenar recuerdos."},
	{"t":"Quizás con un hechizo pueda ver lo que ocurrió aqui."},
	{"t":"思い出を見せて。"},
	{"t":"¡Ha funcionado! ¡Mira!","pj":"c_nami"},
	{"t":"どこですか？","pj":"c_hikari","r":1,"opacity":0.5},
	{"t":"そこに行く！","pj":"c_mei","opacity":0.5},
	{"t":"早く！","pj":"c_hikari","r":1,"opacity":0.5},
	{"t":"¡Son Hikari y Mei!","pj":"c_nami"},
	{"t":"Parece que están buscando el libro."},
	{"t":"Me alegro de que esté Mei, Hikari es de primer año y puede que corra peligro, pero Mei... es especial."},
	{"t":"Lo importante es que vamos por buen camino."}
],
"Escaleras2":[
	{"t":"No detecto la energía del libro por aquí.","pj":"c_nami"},
	{"t":"No creo que hayan tomado este camino, debemos seguir buscando."}
],
"Mesa escudo":[
	{"find":"page","feat":"Hechizo de escudo"},
	{"t":"¡Vaya! ¡Un hechizo de escudo!","pj":"c_nami"},
	{"t":"Con esto podrás protegernos del daño, pero ten cuidado, consume bastante energía."}
],
"Acelerar en cama":[
	{"find":"page","feat":"Movimiento ágil"},
	{"t":"No conocía estas técnicas para mejorar el vuelo.","pj":"c_nami"},
	{"t":"También es cierto que no tengo demasiado entrenada esa clase de magia."},
	{"t":"En tu mundo tenéis máquinas para hacer estas cosas ¿no?"},
	{"opciones":[
	{"t":"Sí (acercarte).","a":[
	{"t":"Eso me parecía. La verdad es que no sé mucho de tu mundo, pero la directora ha recopilado bastante información.","pj":"c_nami"},
	{"t":"Me pregunto cómo será volar en una máquina. Nosotras tan solo podemos hacerlo con animales o magia."},
	{"t":"Excepto quienes tienen alas, como las hadas, claro está."},
	{"t":"Aunque ninguna de estas formas de volar es demasiado segura, la verdad."}
]},
	{"t":"No (alejarte).","a":[
	{"t":"Ah, debí de entender algo mal. Tenemos poco conocimiento sobre vuestro mundo, la verdad.","pj":"c_nami"},
	{"t":"Hace tan solo unos meses que la directora consiguió contactar con él."}
]}
]}
],
"Jaula guardian":[
	{"t":"Qué raro es esto, allí hay una cama y aquí hay una jaula.","pj":"c_nami"},
	{"t":"Si aquí dormía alguien, ¿por qué hay también un lugar para encerrar un animal?"},
	{"t":"Podría ser para una mascota, pero si es así ¿por qué encerrarla?"}
],
"Curar en grupo":[
	{"find":"page","feat":"Curación en grupo"},
	{"t":"Uff, gracias a Inari que la hoja no se ha manchado con los productos alquímicos. Es muy interesante.","pj":"c_nami"},
	{"t":"Habla de cómo emitir una ola de energía curativa que sane a todo un grupo de personas."},
	{"t":"Lo mejor es que no necesita energía extra, y permite curar rápidamente a todo el mundo."}
],
"Tarros laboratorio":[
	{"t":"No tengo claro que estos tarros e instrumentos sean de cristal.","pj":"c_nami"},
	{"t":"Apostaría a que se trata de algún material desconocido, creado por los Antiguos."},
	{"t":"Es una civilización que al mismo tiempo me asombra y me da algo de miedo."}
],
"Mesa laboratorio arriba":[
	{"t":"Si supiese algo más de alquimia quizás pudiese adivinar lo que hacían aquí.","pj":"c_nami"},
	{"t":"Creo que me encierro demasiado en la biblioteca con mis libros. Debería practicar magia más a menudo."},
	{"t":"Me parece que el último mes he pasado más tiempo en la biblioteca que fuera de ella."},
	{"t":"Aunque claro, gran parte de ese tiempo ha sido para aprender vuestro idioma."},
	{"t":"Habría sido imposible sin la magia de la reina de las hadas de vuestro mundo."}
],
"Gran puerta":[
	{"t":"Vaya, está cerrada. Y esto son protecciones de los Antiguos.","pj":"c_nami"},
	{"t":"Quizá sea una medida de protección ante la presencia de monstruos."},
	{"t":"Es magia olvidada, y demasiado poderosa. No sabría deshacerla."},
	{"t":"Ha de haber otra manera de abrir la puerta, o desactivar las protecciones."},
	{"set":"puertaVista","expresion":["val",true]}
],
"Primer dormitorio":[
	{"if":["not",["var","primerDormitorio"]],
"then":[
	{"t":"Esto parece un dormitorio.","pj":"c_nami"},
	{"t":"Es probable que muchos de los alquimistas viviesen aquí mismo."},
	{"t":"O quizás fuese una especie de escuela de alquimistas, y aquí vivirían los estudiantes."},
	{"set":"primerDormitorio","expresion":["val",true]}
],
"else":[
	{"t":"Sigo sin dejar de pensar lo duro que tuvo que ser tener que venir a vivir aquí dentro.","pj":"c_nami"},
	{"t":"Millones de seres teniendo que abandonar la superficie para siempre. Sin poder ver de nuevo la luz del Sol."},
	{"t":"¿Qué les llevaría a causar una destrucción así, y que los perjudicaba tanto?"}
]}
],
"Encuentra escudo potenciado":[
	{"find":"page","feat":"Escudo potenciado"},
	{"t":"Aquí hay otra. Esta habla de cómo hacer escudos que duren más.","pj":"c_nami"},
	{"t":"Al alargar la vida del escudo su coste aumenta un poco, pero sinceramente creo que merece la pena."}
],
"Segundo dormitorio":[
	{"t":"Es curioso que estos muebles se hayan conservado aquí abajo durante tanto tiempo.","pj":"c_nami"},
	{"t":"Parece madera, pero no podían conseguirla de la superficie. Puede que de algún tipo de planta subterránea."},
	{"t":"O quizá sea algún otro material que inventaron."}
],
"Oración":[
	{"t":"Aquí habla de los valores de los Antiguos. Es una especie de rezo.","pj":"c_nami"},
	{"t":"Es curioso, parece que los Antiguos eran muy similares entre sí, a diferencia de las criaturas mágicas."},
	{"t":"Por lo que sé, en vuestro mundo también sois muy diversas, aunque no siempre os consideréis criaturas mágicas."},
	{"t":"¿Tú eres una criatura mágica?"},
	{"opciones":[
	{"t":"Sí (acercarte).","a":[
	{"t":"Siento que no podamos comunicarnos mejor, me gustaría saber qué tipo de criatura eres.","pj":"c_nami"}
]},
	{"t":"No (alejarte).","a":[
	{"t":"Sí, tengo entendido que hay personas que no se reconocen como criaturas mágicas en tu mundo.","pj":"c_nami"},
	{"t":"Incluso mucha gente desconoce su existencia."}
]},
	{"t":"(Titubeas).","a":[
	{"t":"Ah... puede que en realidad no lo sepas. En tu mundo no es algo que se enseñe normalmente, por lo que sé.","pj":"c_nami"},
	{"t":"Pero, siéndote sincera, si dudas es posible que lo seas. Si no lo fueses no dudarías."},
	{"t":"Cuando te han educado para no creer en la existencia de lo que eres, es difícil aceptar la realidad."}
]}
]},
	{"t":"En cualquier caso sé que en tu mundo coexisten muchos tipos de personas y muchas formas de ser."},
	{"t":"Adoro esa clase de diversidad, aunque no sea siempre comprendida."}
],
"Armario bala":[
	{"find":"page","feat":"Bala acelerada"},
	{"t":"Otra técnica para acelerar los proyectiles.","pj":"c_nami"},
	{"t":"Después de combates como el de esta sala, me parece aún más interesante."}
],
"Escudo en grupo":[
	{"find":"page","feat":"Escudo en grupo"},
	{"t":"¡Oh! Esto nos puede ayudar.","pj":"c_nami"},
	{"t":"Hace que los escudos protejan a todo el grupo, en lugar de a una sola persona."},
	{"t":"Con estas técnicas los limos serán una molestia menor."}
],
"Niña":[
	{"if":["not",["var","encontradoHana"]],
"then":[
	{"t":"Voy a hablar con esta persona. Creo que nunca la había visto antes.","pj":"c_nami"},
	{"t":"あなたは大丈夫ですか？","pj":"c_nami"},
	{"t":"はい。","pj":"c_nina","r":1},
	{"t":"あなたの名前は何ですか？","pj":"c_nami"},
	{"t":"花です。","pj":"c_nina","r":1},
	{"t":"Dice que se llama Hana, pero no la conozco.","pj":"c_nami"},
	{"t":"Tampoco lleva el uniforme de la escuela."},
	{"t":"どうやってここに来ましたか？","pj":"c_nami"},
	{"t":"私は知らない。","pj":"c_nina","r":1},
	{"t":"私たちと一緒に来てください。","pj":"c_nami"},
	{"t":"はい。","pj":"c_nina","r":1},
	{"t":"No parece muy habladora, quizás esté asustada.","pj":"c_nami"},
	{"t":"Le he dicho que nos acompañe. Por favor, cuida de que no le pase nada."},
	{"add_party":"Niña"},
	{"set":"encontradoHana","expresion":["val",true]}
]}
],
"Hana encuentra una hoja":[
	{"t":"本です！","pj":"c_nina","r":1},
	{"find":"page","feat":"Aura ampliada"},
	{"t":"花、本を知っていますか？","pj":"c_nami"},
	{"t":"はい。","pj":"c_nina","r":1},
	{"t":"Qué extraño, Hana ha encontrado una hoja y se ve que la ha reconocido...","pj":"c_nami"},
	{"t":"Incluso dice conocer el libro."},
	{"t":"¿Cómo es eso posible? Casi nadie tiene acceso a ese libro, y ella no parece alumna de esta escuela."},
	{"t":"Quizás entrase en el ala reservada con Hikari y Mei, pero ¿cómo pudo entrar en la escuela en primer lugar?"}
],
"Curación potenciada 2":[
	{"find":"page","feat":"Curación potenciada"},
	{"t":"Más información sobre técnicas de curación.","pj":"c_nami"},
	{"t":"De nuevo, estas técnicas no aumentan la energía necesaria para lanzar el hechizo, así que son bastante útiles."}
],
"Suposiciones Hana":[
	{"t":"Al ver estos productos químicos se me ha ocurrido un disparate.","pj":"c_nami"},
	{"t":"No me tomes muy en serio, pero... ¿y si Hana es producto de este laboratorio?"},
	{"t":"También podría ser heredera de los Antiguos. No queda nada de ellos, pero sí se han encontrado vivas algunas de sus creaciones."},
	{"t":"Es que no la reconozco como ninguna clase de criatura mágica. No sé si quieres que te siga mareando con mis hipótesis..."},
	{"opciones":[
	{"t":"Sí (acercarte).","a":[
	{"t":"Está bien. Obviamente no es un hada, ni una chica-lobo, ni una vampira.","pj":"c_nami"},
	{"t":"Si fuese una dragona, ángel o similar, podría alcanzar la capacidad de ocultar sus características, pero no parece tener tanto poder."},
	{"t":"Y a las brujas se las distingue fácilmente por su olor. Al menos lo hago yo, que tengo buen olfato."},
	{"t":"También es cierto que hay un sinfín de criaturas mágicas, y que no puedo conocerlas todas, pero..."},
	{"t":"No sé, son demasiadas circunstancias inusuales las que rodean a esta chica."}
]},
	{"t":"No (alejarte).","a":[
	{"t":"La verdad es que a veces me excedo pensando en voz alta.","pj":"c_nami"}
]}
]}
],
"Último ataque potente":[
	{"find":"page","feat":"Ataque potenciado"},
	{"t":"Otra página sobre cómo mejorar tu ataque.","pj":"c_nami"},
	{"t":"Esto ya me parece excesivo. ¿Es que la fuerza es la única manera de solucionar las cosas?."}
],
"Escudo potenciado 2":[
	{"find":"page","feat":"Escudo potenciado"},
	{"t":"Esto podría sernos útil. Es cierto que acabar con los limos viene bien, pero esquivarlos es una opción también.","pj":"c_nami"},
	{"t":"Con el escudo al máximo quizás podríamos correr entre ellos sin problemas."},
	{"t":"Aunque por otro lado es necesario registrarlo todo bien, no conviene dejarse ninguna página olvidada."}
],
"Estatua fundador":[
	{"t":"Esta estatua tiene una inscripción.","pj":"c_nami"},
	{"t":"No la entiendo bien, pero creo que se trata del fundador de estos laboratorios, o algo así."},
	{"t":"Pone la fecha en la que fueron fundados. Aunque no estoy segura, creo que es pocas décadas antes de la desaparición de los Antiguos."},
	{"t":"Nunca llegamos a saber qué ocurrió. Ellos no se aventuraban a salir a la superficie, y nosotras no bajábamos a sus subterráneos."},
	{"t":"Creímos durante años que aún seguían aquí abajo, hasta que sus aparatos en la superficie comenzaron a fallar. Nadie los arreglaba."},
	{"t":"Entonces empezamos a explorar los subterráneos, y descubrimos que estaban completamente vacíos."},
	{"t":"Hay quienes dicen que hicieron un viaje, pero ¿adónde?"}
],
"colector":[
	{"t":"¡Vaya! Esto parece un acumulador de energía espiritual de los Antiguos.","pj":"c_nami","r":1},
	{"t":"Es extraño, debería estar completamente agotado..."},
	{"t":"Quizás la presencia de las hojas del libro esté generando energía. Por eso debemos recuperarlas todas."},
	{"t":"De hecho sería bueno también vaciar este acumulador."},
	{"if":["var","puertaVista"],
"then":[
	{"t":"Puede que sea lo que ha bloqueado la puerta. Si lo vaciamos podremos pasar."}
],
"else":[
	{"t":"Puede estar activando artefactos desconocidos de este nivel. Creo que sería mejor vaciarlo."}
]},
	{"t":"No entiendo del todo esta tecnología, pero creo que sé cómo hacerlo."},
	{"t":"Lo que contiene es energía espiritual. Tú puedes absorberla si te metes en la esfera."},
	{"opciones":[
	{"t":"Meterte en la esfera.","a":[
	{"set":"energiaAbsorvida","expresion":["val",true]}
]},
	{"t":"Alejarte de la esfera.","a":[
	{"t":"Oh, no te preocupes, no debería hacerte daño.","pj":"c_nami","r":1},
	{"t":"En el peor de los casos volverías a tu plano y te podría volver a invocar."},
	{"opciones":[
	{"t":"Meterte en la esfera.","a":[
	{"set":"energiaAbsorvida","expresion":["val",true]}
]},
	{"t":"Alejarte de la esfera aún más.","a":[
	{"t":"Está bien, probaré simplemente a liberar la energía.","pj":"c_nami","r":1},
	{"t":"放す。"},
	{"changeFrame":"colector","frame":"inactivo"},
	{"custom":"give_energy","energy":"2000"},
	{"t":"Sientes como si una onda de energía atravesase toda la sala.","pj":"none"},
	{"t":"¡Vaya! Esperaba que se hubiese disipado, pero parece que la energía continua aquí.","pj":"c_nami","r":1},
	{"t":"Si es así temo que pueda haber afectado a otras criaturas."}
]}
]}
]}
]},
	{"if":["var","energiaAbsorvida"],
"then":[
	{"t":"Tan pronto como te introduces en la esfera sientes que una poderosa energía te inunda.","pj":"none"},
	{"t":"Notas algo extraño..."},
	{"changeFrame":"colector","frame":"inactivo"},
	{"changeSpirit":"spirit2"},
	{"t":"¡Oh! ¡Has cambiado!","pj":"c_nami","r":1},
	{"t":"La influencia del libro es mayor de lo que esperaba. La energía que has absorbido no era neutra."},
	{"t":"En principio no debería suponerte un problema, pero estaré atenta por si algo pasa."}
]},
	{"changeFrame":"Gran puerta","frame":"abierta"},
	{"unblock":"Gran puerta"}
],
"Cristal2":[
	{"t":"¡Otro cristal! Lanzaré el hechizo de nuevo.","pj":"c_nami"},
	{"t":"思い出を見せて。","pj":"c_nami"},
	{"t":"これは危険です。","pj":"c_mei","opacity":0.5},
	{"t":"戻るべきだよ。","opacity":0.5},
	{"t":"いいえ。","pj":"c_hikari","r":1,"opacity":0.5},
	{"t":"私はあなたと一緒にいたいです。","opacity":0.5,"pj":"c_hikari"},
	{"t":"Parece que Mei es consciente del peligro, pero Hikari no quiere dejarla sola.","pj":"c_nami"},
	{"t":"Hikari es demasiado inexperta, estaría más segura si volviese."},
	{"t":"De todas maneras confío en que Mei pueda protegerla."}
],
"Escaleras salida":[
	{"t":"¡Siento la energía del libro por aquí!","pj":"c_nami"},
	{"t":"Es evidente que han bajado a otro nivel."},
	{"t":"Espero que no hayan llegado muy lejos."},
	{"t":"LA DEMO TERMINA AQUÍ."},
	{"t":"Espero que os guste y poder terminar el juego para que lo disfrutéis por completo."}
],
"teoria_hiragana":[
	{"t":"Aquí vas a aprender a usar tus poderes.","pj":"c_nami"},
	{"t":"Aprenderás a usar hechizos a medida que aprendas el lenguaje de la magia."},
	{"t":"Estos símbolos son hiragana, y representan sonidos. Por ejemplo \"do\" en nuestro idioma se escribe ど."},
	{"t":"Intenta memorizarlos bien antes de continuar, porque el libro te hará preguntas. Cuantas más aciertes, más mejorará tu magia."}
],
"teoria_ka_y_ni":[
	{"t":"Fíjate en か (ka) y に (ni). No son simples sonidos, sino partículas, que tienen un uso especial en nuestro idioma.","pj":"c_nami"},
	{"t":"か (ka) se pone al final de las frases para indicar que la frase es una pregunta. Más tarde veremos ejemplos."},
	{"t":"に (ni) se pone detrás de una palabra para indicar una dirección, entre otras cosas."},
	{"t":"En muchos casos las partículas son similares a vuestras preposiciones."}
],
"teoria_palabras_hiragana_kanji_verbos":[
	{"t":"Juntando los sonidos que hemos visto podemos formar palabras. Por ejemplo: どこ (doko), que significa \"dónde\".","pj":"c_nami"},
	{"t":"Pero no todas las palabras se escriben en hiragana. Algunas usan kanjis, como 行く (iku) que es el verbo \"ir\"."},
	{"t":"行く termina en く (ku), que es un hiragana que ya hemos visto. Pero empieza por un símbolo que no conocemos: 行, que en este caso se lee como \"i\"."},
	{"t":"Si te fijas en la diferencia de los símbolos en kanji y en hiragana, los kanjis son más complicados y están hechos sobre todo con líneas rectas."}
],
"teoria_radicales":[
	{"t":"Aquí tenemos varios kanjis más, que son parecidos.","pj":"c_nami"},
	{"t":"Empezamos por los más sencillos porque además estos se usan en otros más complejos."},
	{"t":"Estos se llaman radicales, y conocerlos ayuda a aprender los otros."},
	{"t":"Fíjate por ejemplo en el kanji de \"luna\" 月 (tsuki), que te enseñaré más adelante como parte de otro kanji más complejo."}
],
"teoria_estructura_frase":[
	{"t":"Ahora que sabemos unas cuantas palabras podemos empezar a formar frases.","pj":"c_nami"},
	{"t":"Fíjate en どこですか. Que acabe en か nos indica que es una pregunta."},
	{"t":"どこ (doko) y です (desu) significan \"dónde\" y \"ser/estar\", así que esta frase pregunta \"¿dónde esta?\"."},
	{"t":"En japonés los verbos se ponen al final de la frase, tanto です (desu) como 行く (iku), que significa \"ir\"."},
	{"t":"También las partículas se ponen después de la palabra o frase a la que acompañan, tanto か (ka) como に (ni)."},
	{"t":"En el caso de に (ni), acompaña a そこ (soko) que significa allí. Literalmente dice \"allí ir\", o traducido correctamente: \"Va por allí\". "}
],
"teoria_diferencias_na_ta":[
	{"t":"Aquí tenemos más sílabas en hiragana.","pj":"c_nami"},
	{"t":"Te aconsejo que te fijes sobre todo en la diferencia entre な (na) y .た (ta), que se parecen bastante."},
	{"t":"Otro símbolo interesante es は (ha), que más adelante veremos que no siempre se pronuncia así."}
],
"teoria_particula_wa":[
	{"t":"Otra partícula importante es la partícula は (wa).","pj":"c_nami"},
	{"t":"Como verás se escribe como el hiragana は (ha), pero se pronuncia \"wa\". Esto nos indica que es la partícula de tema."},
	{"t":"Esta partícula se coloca detrás de una palabra para indicar que esta es el tema principal de la frase."},
	{"t":"Por ejemplo あなたは (anata wa) es como decir: \"hablando de ti\" o \"respecto a ti\"."}
],
"teoria_sufijos":[
	{"t":"Algunos kanjis son una palabra por sí solos, como 人 (hito - persona), 夫 (otto - marido) y 犬 (inu - perro).","pj":"c_nami"},
	{"t":"Otros como 大 (dai - grande) solo se usan como parte de otras palabras. Pronto veremos algún ejemplo."}
],
"teoria_variación_te_de":[
	{"t":"Fíjate en el nuevo hiragana て (te). ¿No te suena? Es casi como で (de).","pj":"c_nami"},
	{"t":"Esas dos pequeñas líneas que tiene で y no tiene て se llaman dakuten, y sirven para formar consonantes sonoras."},
	{"t":"Iremos viendo más ejemplos en el futuro. Espero que saber esto te ayude a recordar y distinguir estas dos sílabas."}
],
"teoria_palabras_complejas_y_radicales":[
	{"t":"¿Recuerdas el kanji 大 (dai - grande)? Pues aquí lo tenemos como parte de la palabra 大丈夫 (daijoubu), que significa \"estar bien\".","pj":"c_nami"},
	{"t":"Otra palabra más complicada es 名前 (namae - nombre). Los kanjis que la forman pueden parecer difíciles de recordar, pero no lo es tanto."},
	{"t":"Para lograrlo, fíjate en los radicales que los componen. Por ejemplo, la parte de abajo del primero tiene el radical de \"boca\": 口 (kuchi)."},
	{"t":"El segundo tiene a la izquierda el radical de \"luna\". ¿Te acuerdas de él? Es 月 (tsuki), que te enseñé antes."}
],
"diferencias_ra_chi":[
	{"t":"En estos hiragana te aconsejo fijarte en la diferencia entre ら (ra) y ち (chi).","pj":"c_nami"},
	{"t":"Aunque se parecen, en ち (chi) la línea de arriba es completamente horizontal y corta el otro trazo."}
],
"teoria_hon_ki":[
	{"t":"Aquí tenemos otra serie de kanjis bastante parecidos. Fíjate bien en las diferencias.","pj":"c_nami"},
	{"t":"Por ejemplo, el kanji de libro (本) es como el de árbol (木) pero con una línea más en la parte de abajo."}
],
"teoria_watashi_tachi":[
	{"t":"Aquí tenemos dos nuevos verbos, ambos acabados en る (ru), que es la terminación más habitual para verbos.","pj":"c_nami"},
	{"t":"Otra cosa interesante es la palabra 私たち (watashi tachi) que significa \"nosotros\"."},
	{"t":"En realidad たち (tachi) se usa para convertir en plural muchas palabras, como veremos más adelante."}
],
"teoria_to":[
	{"t":"Otra partícula habitual es と (to) que se pone detrás de un nombre para indicar con quién realizamos la acción.","pj":"c_nami"},
	{"t":"Es parecida a nuestra preposición \"con\"."}
],
"teoria_forma_te_y_nai":[
	{"t":"Los verbos que hemos visto hasta ahora estaban en la llamada \"forma de diccionario\", terminada en \"u\", como 来る (kuru).","pj":"c_nami"},
	{"t":"Pero si te fijas aquí nos encontramos el mismo kanji seguido de otro hiragana: 来て (kite).","pj":"c_nami"},
	{"t":"Es una conjugación de 来る (kuru), que se conoce como forma -て (te), y tiene muchos usos que pronto empezaremos a ver."},
	{"t":"Observa que la pronunciación del kanji cambia al conjugarlo: de \"ku\" pasa a \"ki\"."},
	{"t":"Este cambio de pronunciación no es lo habitual: este es un verbo irregular."},
	{"t":"Por otro lado 知らない (shiranai) está en forma -ない (nai), que es la forma negativa del verbo."},
	{"t":" 知る (shiru) significa \"saber\", mientras que 知らない significa \"no saber\"."},
	{"t":"En este caso se forma normalmente cambiando la última sílaba a la versión con \"a\" y añadiendo -ない (nai)."},
	{"t":"Es decir, en este caso る (ru) se convierte en ら (ra), y añadimos -ない: 知らない (shiranai)."}
],
"teoria_pasado_formal_y_doble_consonante":[
	{"t":"Aquí tenemos otro verbo conjugado: 来ました (kimashita).","pj":"c_nami"},
	{"t":"En japonés se puede hablar de manera más formal o menos formal. Este es uno de los casos formales."},
	{"t":"-ました (mashita) es la conjugación que indica pasado formal. Se sustituye el る (ru) del final por esta conjugación."},
	{"t":"Mientras que 来る (kuru) significa \"vengo\", 来ました (kimashita) significa \"vine\"."},
	{"t":"Fíjate también en la expresión どうやって (douyatte). ¿Ves que tiene una pequeña つ (tsu) entre や (ya) y て (te)?"},
	{"t":"Esta pequeña つ (tsu) se llama soukuon, y hace que la siguiente consonante tenga un sonido doble. En este caso やって (yat-te)."}
],
"teoria_forma_te_kudasai":[
	{"t":"Aquí tenemos un primer ejemplo de uso de la forma -て (te).","pj":"c_nami"},
	{"t":"Para pedir algo por favor ponemos ください (kudasai) detrás del verbo en forma -て (te)."},
	{"t":"Por ejemplo, para pedir que alguien venga decimos 来てください (kite kudasai)."},
],
"teoria_wo_da":[
	{"t":"を (wo) es otra partícula habitual. La ponemos detrás del objeto de la frase sobre el que actúa el verbo.","pj":"c_nami"},
	{"t":"Fíjate también que en esta partícula la uve doble casi no suena. El sonido es casi como una simple \"o\"."},
	{"t":"Luego veremos un ejemplo de su uso."},
	{"t":"Fíjate también en la palabra だ (da), que es la versión con dakuten de la sílaba た (ta)."},
	{"t":"Esta palabra es la forma informal de です (desu), y tiene el mismo significado."},
],
"teoria_masu":[
	{"t":"Aquí tenemos el verbo います (imasu), que es la conjugación formal de いる.","pj":"c_nami"},
	{"t":"Esta es llamada la forma -ます (masu), y normalmente basta con sustituir la última sílaba del verbo por  -ます (masu)."},
	{"t":"Así que en modo formal tenemos -ます (masu) para el presente cy -ました (mashita) para el pasado."}
],
"teoria_te_imasu":[
	{"t":"Otro uso de la forma て (-te) es la expresión -て+います (te imasu), que indica tiempo continuo.","pj":"c_nami"},
	{"t":"Indica que la acción no ha terminado, que aún lo estás haciendo."},
	{"t":"Por ejemplo, en este caso 知っています (shite imasu) significa \"estar conociendo\"."}
],
"teoria_otros_verbos":[
	{"t":"Aquí tenemos nuevos verbos.","pj":"c_nami"},
	{"t":"Como ya he dicho esta es la forma de diccionario, que termina en \"u\"."},
	{"t":"Fíjate sobre todo en los kanjis. Algunos los puedes recordar en base a sus radicales."},
	{"t":"思う (omou) tiene los radicales 田 (ta) y  心 (kokoro), mientras que 見る miru tiene el radical 目 (me), por ejemplo."}
],
"teoria_imperativo":[
	{"t":"Otro uso de la forma -て (te) es el imperativo.","pj":"c_nami"},
	{"t":"Si usamos la forma -て (te) sin poner ください (kudasai) detrás, deja de ser una petición y se convierte más en una orden, en imperativo."},
	{"t":"Por ejemplo, 見せて (misete), la forma -て (te) del verbo 見せる (miseru), que significa \"mostrar\", se convierte en \"muéstrame\"."}
],
"teoria_yo":[
	{"t":"Aquí tenemos la partícula よ (yo), que se coloca al final de la frase para dar expresividad.","pj":"c_nami"},
	{"t":"Tiene varios usos, como enfatizar una petición, o la certeza de tu afirmación."},
	{"t":"Más adelante veremos ejemplos de su uso con los que podré explicarlo mejor"}
],
"teoria_tai":[
	{"t":"Otra conjugación importante es la conjugación たい (tai), que significa querer.","pj":"c_nami"},
	{"t":"Si いる (iru) significa \"estar\", cuando sustiruimos る (ru) por  たい (tai), significa \"querer estar\"."}
],
"teoria_wo_beki_yo":[
	{"t":"En estas expresiones tenemos varios ejemplos de lo que hemos explicado antes.","pj":"c_nami"},
	{"t":"La partícula を (wo) se usa después de 思い出 (omoide) \"recuerdos\", para indicar que eso es lo que queremos que se muestre."},
	{"t":"La palabra べき (beki), usada detrás de 戻る (modoru), significa \"deberías regresar\"."},
	{"t":"Y en esa misma frase se usa la partícula よ (yo) al final para expresar que eso es algo en lo que realmente crees."},
	{"t":"Por último tenemos también la palabra 一緒に (isshoni) y y la conjugación いたい (itai) para expresar \"quiero estar contigo\"."}
]}