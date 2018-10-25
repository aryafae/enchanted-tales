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
	
	// Nombres dotes
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

/*

	"Ataque rápido":"Ataque rápido",  // Azul
	"Ataque potenciado":"Ataque potenciado",
	"Bala acelerada":"Bala acelerada",
	"Balas seguidoras":"Balas seguidoras",

	"Movimiento ágil":"Movimiento ágil", // Morada
	
	"Aura ampliada":"Aura ampliada", // Amarilla
	"Recoger energía ambiente":"Recoger energía ambiente",
	"Atraer energía residual":"Atraer energía residual",
	
	"Curación potenciada":"Curación potenciada", // Roja
	"Curar en grupo":"Curar en grupo",
	"Hechizo de curar":"Hechizo de curar",
	
	"Escudo en grupo":"Escudo en grupo", // Verde
	"Escudo potenciado":"Escudo potenciado",
	"Hechizo de escudo":"Hechizo de escudo"
*/

var preguntas=[
	{"p":"do","s":"silabario hiragana","r":"ど","o":["で","こ"],"snd":"do","teoria":"teoria_hiragana"}, // 1
	{"p":"de","s":"silabario hiragana","r":"で","o":["ど","く"],"snd":"de"},
	{"p":"su","s":"silabario hiragana","r":"す","o":["そ","で"],"snd":"su"},
	{"p":"so","s":"silabario hiragana","r":"そ","o":["す","こ"],"snd":"so"},
	
	{"p":"ku","s":"silabario hiragana","r":"く","o":["こ","か"],"snd":"ku"}, // 2
	{"p":"ko","s":"silabario hiragana","r":"こ","o":["に","く"],"snd":"ko"},
	{"p":"ka","s":"indica interrogación","r":"か","o":["こ","く"],"snd":"ka","teoria":"teoria_ka_y_ni"},
	{"p":"ni","s":"indica dirección","r":"に","o":["こ","そ"],"snd":"ni"},
	
	{"p":"doko","s":"dónde","r":"どこ","o":["です","そこ"],"snd":"doko","teoria":"teoria_palabras_hiragana_kanji_verbos"}, // 3
	{"p":"soko","s":"ahí","r":"そこ","o":["です","どこ"],"snd":"soko"},
	{"p":"desu","s":"ser, estar","r":"です","o":["そこ","どこ"],"snd":"desu"},
	{"p":"iku","s":"ir","r":"行く","o":["徂く","早く"],"snd":"iku"},
	
	
	{"p":"kuchi","s":"boca","r":"口","o":["十","日"],"snd":"kuchi","teoria":"teoria_radicales"}, // 4
	{"p":"hi","s":"día, sol","r":"日","o":["目","口"],"snd":"hi"},
	{"p":"me","s":"ojo","r":"目","o":["耳","月"],"snd":"me"},
	{"p":"tsuki","s":"mes, luna","r":"月","o":["目","耳"],"snd":"tsuki"},
	
	{"p":"juu","s":"diez","r":"十","o":["口","日"],"snd":"juu"}, // 5
	{"p":"hayaku","s":"rápido","r":"早く","o":["行く","古く"],"snd":"hayaku"}, // Faltan dos de gramática dokodesuka y sokoniku
	{"p":"doko desu ka","s":"¿Dónde está?","r":"どこですか","o":["Va por allí."],"t":"trad","snd":"doko desu ka","teoria":"teoria_estructura_frase"},
	{"p":"soko ni iku","s":"Va por allí.","r":"そこに行く","o":["¿Dónde está?"],"t":"trad","snd":"soko ni iku"},
	
	/*
		どこですか？
		そこに行く！
		早く！
	*/
	
	{"p":"a","s":"silabario hiragana","r":"あ","o":["お","な"],"snd":"a"}, // 6
	{"p":"na","s":"silabario hiragana","r":"な","o":["た","す"],"snd":"na","teoria":"teoria_diferencias_na_ta"},
	{"p":"ta","s":"silabario hiragana","r":"た","o":["な","に"],"snd":"ta"},
	{"p":"ha","s":"silabario hiragana","r":"は","o":["な","ほ"],"snd":"ha"},
	
	{"p":"anata","s":"tú","r":"あなた","o":["おなた","あたな"],"snd":"anata"}, // 7
	{"p":"wa","s":"indica tema","r":"は","o":["な","ほ"],"snd":"wa","teoria":"teoria_particula_wa"},
	{"p":"anata wa","s":"sobre ti","r":"あなたは","o":["おなたは","あなたほ"],"snd":"anata_wa"},
	{"p":"no","s":"de, indica relación","r":"の","o":["お","は"],"snd":"no"},
	
	{"p":"hito","s":"persona","r":"人","o":["大","夫"],"snd":"hito"}, //8
	{"p":"otto","s":"marido","r":"夫","o":["大","本"],"snd":"otto"},
	{"p":"dai","s":"grande (prefijo)","r":"大","o":["犬","夫"],"snd":"dai","teoria":"teoria_sufijos"},
	{"p":"inu","s":"perro","r":"犬","o":["大","夫"],"snd":"inu"},
	
	{"p":"i","s":"silabario hiragana","r":"い","o":["の","は"],"snd":"i"}, //9
	{"p":"u","s":"silabario hiragana","r":"う","o":["つ","て"],"snd":"u"},
	{"p":"ya","s":"silabario hiragana","r":"や","o":["つ","う"],"snd":"ya"},
	{"p":"te","s":"silabario hiragana","r":"て","o":["で","と"],"snd":"te","teoria":"teoria_variación_te_de"},
	
	{"p":"hai","s":"sí","r":"はい","o":["はの","ほい"],"snd":"hai"},  //10
	{"p":"daijoubu","s":"estar bien","r":"大丈夫","o":["丈大夫","夫丈大"],"snd":"daijoubu"},
	{"p":"namae","s":"nombre","r":"名前","o":["夘前","名苅"],"snd":"namae","teoria":"teoria_palabras_complejas_y_radicales"},
	{"p":"isshoni","s":"juntos, junto con","r":"一緒に","o":["一紙に","一偖に"],"snd":"isshoni"},
	
	{"p":"ru","s":"silabario hiragana","r":"る","o":["う","ろ"],"snd":"ru"}, //11
	{"p":"shi","s":"silabario hiragana","r":"し","o":["て","と"],"snd":"shi"},
	{"p":"ra","s":"silabario hiragana","r":"ら","o":["ち","ろ"],"snd":"ra","teoria":"diferencias_ra_chi"},
	{"p":"chi","s":"silabario hiragana","r":"ち","o":["ら","ろ"],"snd":"chi"},
	
	{"p":"ya","s":"flecha","r":"矢","o":["本","来"],"snd":"ya"}, //12
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
	
	{"p":"kite kudasai","s":"Ven, por favor.","r":"来てください","o":["とうやって","とうやっで"],"snd":"kite kudasai","teoria":"teoria_forma_te_kudasai_e_isshoni"}, //17
	{"p":"nan desu ka?","s":"¿Qué es?","r":"何ですか","o":["¿Cómo es?","¿Estás bien?"],"snd":"nan desu ka","t":"trad"}, 
	{"p":"koko ni kimashita ka?","s":"¿Viniste aquí?","r":"ここに来ましたか","o":["¿Vuelves aquí?","¿Estás aquí?"],"snd":"koko ni kimashita ka","t":"trad"}, 
	{"p":"watashi tachi to issho ni","s":"Junto con nosotros.","r":"私たちと一緒に","o":["Ir contigo","Ven con nosotros"],"snd":"watashi tachi to issho ni","t":"trad"}, 
	
	{"p":"wo","s":"indica el objeto","r":"を","o":["て","む"],"snd":"wo","teoria":"teoria_wo"}, //18
	{"p":"re","s":"silabario hiragana","r":"れ","o":["わ","ね"],"snd":"re"},
	{"p":"iru","s":"ser, estar","r":"いる","o":["とる","いろ"],"snd":"iru","snd":"iru"},
	{"p":"da","s":"ser","r":"だ","o":["た","な"],"snd":"da"},
	
	/*
	
	あなたは大丈夫？
	はい
	あなたの名前は何ですか？
	花
	どうやってここに来ましたか？
	私は知らない。
	私たちと一緒に 来てください 。
	はい
	
	*/
	
	{"p":"kokoro","s":"corazón","r":"心","o":["方","化"],"snd":"kokoro"},
	{"p":"kore","s":"esto","r":"これ","o":["こわ","こね"],"snd":"kore"}, //19
	{"p":"imasu","s":"ser, estar (formal)","r":"います","o":["こます","いすま"],"snd":"imasu","teoria":"teoria_da_masu"},
	{"p":"shitte","s":"saber (forma -te)","r":"知って","o":["知て","利って"],"snd":"shitte"},
	
	{"p":"kata","s":"persona (respetuoso)","r":"方","o":["心","力"],"snd":"kata"}, //20
	{"p":"ta","s":"campo de arroz","r":"田","o":["日","皿"],"snd":"ka"},
	{"p":"yama","s":"móntala","r":"山","o":["出","心"],"snd":"yama"},
	{"p":"hon wo shitte imasu ka","s":"¿Conoces el libro?","r":"本を知っていますか？","o":["¿Dónde está el libro?","¿Sabías el libro?"],"t":"trad","snd":"hon wo shitte imasu ka", "teoria":"teoria_te_imasu"}, 
	
	/*
	知って
	います
	iru
	花、本を知っていますか？
	
	*/
	
	
	{"p":"hanasu","s":"liberar","r":"放す","o":["知す","改す"],"snd":"hanasu","teoria":"teoria_otros_verbos"}, //21
	{"p":"omou","s":"pensar","r":"思う","o":["見う","出う"],"snd":"omou"},
	{"p":"deru","s":"salir","r":"出る","o":["心る","思る"],"snd":"deru"},
	{"p":"miru","s":"mirar","r":"見る","o":["目る","思る"],"snd":"miru"},
	
	
	
	{"p":"omoide","s":"recuerdo","r":"思い出","o":["見い出","思い心"],"snd":"omoide"}, //22
	{"p":"miseru","s":"mostrar","r":"見せる","o":["見せて","思せる"],"snd":"miseru"},
	{"p":"misete","s":"muestra (imperativo)","r":"見せて","o":["見せる","思せて"],"snd":"misete","teoria":"teoria_imperativo"},
	{"p":"modoru","s":"volver, regresar","r":"戻る","o":["戸る","涙る"],"snd":"modoru"},
	
	/*
	放す
	
	思い出を見せて
	*/
	
	{"p":"be","s":"silabario hiragana","r":"べ","o":["へ","づ"],"snd":"be"}, //23
	{"p":"ki","s":"silabario hiragana","r":"き","o":["ぎ","さ"],"snd":"ki"},
	{"p":"e","s":"silabario hiragana","r":"え","o":["う","そ"],"snd":"e"},
	{"p":"yo","s":"enfatiza una orden","r":"よ","o":["な","ま"],"snd":"yo","teoria":"teoria_yo"},
	
	
	{"p":"kiken","s":"peligro","r":"危険	","o":["厄険","危倹"],"snd":"kiken"}, //24
	{"p":"beki","s":"deberías","r":"べき","o":["へき","べさ"],"snd":"beki"},
	{"p":"iie","s":"no","r":"いいえ","o":["いええ","ここえ"],"snd":"iie"},
	{"p":"itai","s":"querer estar","r":"いたい","o":["いだい","こたこ"],"snd":"itai","teoria":"teoria_tai"},
	
	{"p":"omoide wo misete","s":"Muestra los recuerdos.","r":"思い出を見せて。","o":["Mira los recurdos.","Muestra el pasado."],"snd":"omoide wo misete","t":"trad","teoria":"teoria_wo_beki_yo"}, 
	{"p":"kiken desu.","s":"Es peligroso.","r":"危険です。","o":["Es difícil.","Es extraño."],"snd":"kiken desu","t":"trad"}, 
	{"p":"modoru beki da yo.","s":"Deberías volver.","r":"戻るべきだよ。","o":["Deberías esperar.","Puedes volver."],"p":"modoru beki da yo","t":"trad"}, 
	{"p":"anata to isshoni itai desu.","s":"Quiero estar a contigo.","r":"あなたと一緒にいたいです。","o":["Estoy contigo.","Quiero ir contigo."],"snd":"anata to isshoni itai desu","t":"trad"}, 
	
	/*
戸
	
これは危険です。
戻るべきだよ。
いいえ
私はあなたと一緒にいたいです。
	*/
	
]

var dialogos={
	"preset":[
		{"anim":"rect", "name":"black_background", "color":"black","width":1920,"height":1080},
	],
	"inicio":[
		{music:"13inicio",},
		{anim:"text", wait:200, y:800, x:960, text:"Viajas a un nuevo mundo.", time:2000},
		{anim:"text", wait:5200, y:800, x:960, text:"Hacia una luz que te atrae.", time:2000},
		{"anim":"image", wait:1000, "name":"luz", "x":960, "y":540, "scale":0.01, "time":1000,waitEnd:1},
		{"anim":"change", wait:1000, "name":"luz", "scale":1.7, "time":20000},
		{anim:"text", wait:8200, y:800, x:960, text:"Hacia una voz que te llama...", time:2000},
		{anim:"text", wait:13200, y:800, x:960, text:"Y sabes que empieza la aventura..", time:2000},
		{"anim":"image", wait:16000, "name":"c_nami", "x":960, "y":560, "scale":1, "time":4000},
		{"anim":"change", wait:16000, "name":"c_nami", "scale":1.3, "time":4000},
		{"anim":"hide", wait:20000, "name":"black_background", "time":100,waitEnd:1},
		{"t":"¡Funcionó!"},
		{"t":"Gracias por venir. Supongo que te debo una explicación: te he invocado porque necesito tu ayuda."},
		{"t":"Me llamo Nami Kitsune y soy la bibliotecaria de la escuela de criaturas mágicas."},
		{"t":"Estos son los subterráneos de la escuela. Por aquí se ha perdido un libro que puede cambiarlo todo, llamado \"Mahou no kotoba\"."},
		{"t":"Y también creo que hay estudiantes persiguiéndolo, que temo que se metan en líos."},
		{"anim":"hide", "name":"luz", "time":1000},
		{"anim":"hide", "name":"c_nami", "time":1000,waitEnd:1},
		{music:"3exploracion",},
		{"t":"Luego te daré más detalles pero es importante que nos demos prisa.", "pj":"c_nami"},
		{"t":"Necesito que me guíes por estos pasillos y me ayudes si surge algún peligro."},
		{"t":"Pero antes de nada registremos los muebles de esta sala. Siento que hay magia cerca."},
		//{"anim":"hide", wait:10, "name":"black_background", "time":100,waitEnd:1},
	],
	"Escaleras arriba":[
		{"t":"Esas escaleras llevan de vuelta a la escuela.", "pj":"c_nami"},
		{"t":"Puedo enseñarte la escuela más tarde si quieres, pero ahora no tenemos tiempo."},
	],
	"Armario roto":[
		{"find":"page", "feat":"Movimiento ágil"},
		{"t":"¡Una hoja del libro! Esto era lo que sentía.", "pj":"c_nami"},
		{"t":"Pero ¿por qué está el libro perdiendo hojas? Algo extraño ocurre."},
		{"t":"Lo bueno es que pueden ayudarte a aprender magia."},
		{"t":"Esta por ejemplo te puede enseñar a volar más rápido. Te aconsejo aprenderla cuanto antes."}
	],
	"primeraSubida":[
		{"t":"¡Enhorabuena! Acabas de subir de nivel.", "pj":"c_nami"},
		{"t":"Al subir de nivel puedes escoger una nueva habilidad. Escoge correctamente"},
		{"t":"Busca una habilidad que te interese de la página de la derecha, pulsa en ella y después dale al botón de mejorar."},
	],
	"Habla del libro":[
		{"find":"page", "feat":"Absorber energía ambiental"},
		{"t":"¡Otra hoja! En este caso habla sobre como recoger energía del ambiente.", "pj":"c_nami"},
		{"t":"Este conocimiento te será muy útil. Este lugar rebosa de energía, y la necesitarás para lanzar hechizos."},
		{"t":"En cualquier caso me preocupa ver que el libro está perdiendo hojas, me pregunto por qué será."},
		{"t":"Quizás las deje por alguna razón, o esté creando otras nuevas y necesite espacio."},
	],
	"Nami lejos":[
		{"t":"No puedes examinar los objetos sin la ayuda de Nami, espera a que se acerque."},
	],
	"mensajeEsperame":[
		{"t":"¡Eh, espérame, por favor! No puedo ir tan rápido como tú.", "pj":"c_nami"},
		{"t":"Y si te pierdo de vista no podré seguirte."},
	],
	"sinEnergía":[
		{"t":"Te falta energía para hacer magia ¿no? Yo podría prestarte algo de la mía.", "pj":"c_nami"},
		{"t":"Acércate a mi si la quieres y te la transfiero."},
		{"opciones":[
			{"t":"Aceptarla (acercarte)","a":[
				{"t":"Está bien, déjame concentrarme.", "pj":"c_nami"},
				{"t":"Mmmmmm."},
				{"custom":give_energy,"energy":"2000"},
				{"t":"Sientes como la energía te inunda, y recobras todo tu potencial.","pj":"none"},
				{"t":"Pero Nami cae de rodillas, mostrando síntomas de cansancio."},
				{"t":"No te preocupes, estoy bien. Pero no creo que pueda ayudarte mucho más con esto.", "pj":"c_nami"},
			]},
			{"t":"Rechazarla (alejarte)","a":[
				{"t":"Está bien. Puedes recuperar energía del ambiente simplemente esperando.", "pj":"c_nami"},
			]},
		]},
		{"t":"En cualquier caso hay técnicas que te pueden ayudar a recuperar energía más rápido. Te aconsejo estudiarlas lo antes posible."},
	],
	"vesPrimerEnemigo":[
		{"t":"¡Cuidado! Esa masa azul que se mueve es un limo tóxico.", "pj":"c_nami"},
		{"t":"No puedo acercarme o me intoxicará, pero puedes eliminarlo usando tu magia."},
		{"t":"Simplemente pulsa sobre el limo para lanzarle una bola de energía."},
	],
	"eliminasPrimerEnemigo":[
		{"t":"¡Buen trabajo! Has acabado con el limo.", "pj":"c_nami"},
		{"t":"Debería haber soltado la energía espiritual que lo mantenía en pie."},
		{"t":"Yo no puedo verla, pero si puedes, recógela. La necesitarás."},
		{"t":"Habrás gastado energía al lanzar hechizos, así que te vendrá bien reponerla."},
	],
	"Frasco inicial":[
		{"t":"Estos frascos debían de contener productos alquímicos.", "pj":"c_nami"},
		{"t":"Deben de ser el origen de los limos que hemos visto."},
		{"t":"El poder del libro puede haberles insuflado energía espiritual, dándoles la vida."},
	],
	"Armario laboratorio":[
		{"find":"page", "feat":"Ataque frecuente"},
		{"t":"Hmmm... Aquí habla sobre cómo lanzar tus ataques de energía más rápidamente.", "pj":"c_nami"},
		{"t":"Puede ser interesante para acabar antes con los monstruos, pero ten cuidado."},
		{"t":"Asegúrate de tener suficiente energía, o no te servirá de nada disparar rápidamente."},
	],
	"Mesa experimentos":[
		{"t":"Vaya, esto parece que fué algún tipo de equipo alquímico.", "pj":"c_nami"},
		{"t":"Este piso debe de ser algún tipo de laboratorio."},
		{"t":"Por si te interesa, estos subterráneos pertenecieron a una civilización ya desaparecida."},
		{"t":"Por supuesto a nosotros no nos gusta vivir bajo tierra, así que lo dejamos abandonado."}
	],
	"Estantería laboratorio":[
		{"find":"page", "feat":"Aura ampliada"},
		{"t":"Un trabajo sobre el aura... te vendrá bien.", "pj":"c_nami"},
		{"t":"El aura se puede definir como la forma mágica de nuestro cuerpo."},
		{"t":"De hecho para ti es tu cuerpo en sí, porque no tienes cuerpo físico."},
		{"t":"Ampliar tu aura te puede ayudar a retener más magia para cuando la necesites."},
	],
	"Agradecer espíritu":[
		{"if":["not",["var","agradecimientoEspiritu"]],"then":[
			{"t":"Ahora que parece que no hay peligro, quería agradecerte lo que estás haciendo.", "pj":"c_nami"},
			{"t":"Sé que en estas circunstancias es difícil que pueda conocerte, ya que no podemos ni hablar. Pero creo que tienes que ser una gran persona."},
			{"t":"Cuando invocamos espíritus de otros planos, habitualmente nos piden algo a cambio. Vosotros en cambio ayudáis sin más."},
			{"t":"Quiero que sepas que cuando esto termine buscaré la manera de ayudaros yo también."},
			{"set":"agradecimientoEspiritu","expresion":["val",true]},
		]}
	],
	"Emboscada":[
		{"if":["not",["var","emboscada"]],"then":[
			{"t":"Eh... parece que algo se mueve ahí.", "pj":"c_nami"},
			{"t":"¡Oh, no! ¡Es otro de esos limos!"},
			{"custom":muestraLimo},
			{"set":"emboscada","expresion":["val",true]},
		]}
	],
	"Almacén":[
		{"if":["not",["var","vistoLaboratorio"]],"then":[
			{"t":"Parece que esto era un almacén. Está todo lleno de productos alquímicos.", "pj":"c_nami"},
			{"t":"Me temo que nos encontraremos más limos tóxicos en este piso."},
			{"set":"vistoLaboratorio","expresion":["val",true]},
		],"else":[
			{"t":"Más productos alquímicos. Me pregunto para qué los usarían.", "pj":"c_nami"},
		]}
	],
	"Mesa almacén":[
		{"find":"page", "feat":"Ataque potenciado"},
		{"t":"Aquí habla sobre cómo potenciar los ataques mágicos.", "pj":"c_nami"},
		{"t":"Ten cuidado con esto también, porque potenciar los ataques hará que gasten más energía."},
		{"t":"Vete aprendiendo también hechizos que te ayuden a recuperar energía."},
	],
	"Nada":[
		{"t":"No parece haber nada interesante aquí.", "pj":"c_nami"},
	],
	"Estatua":[
		{"if":["not",["var","estatuaVista"]],"then":[
			{"t":"Estos debieron de ser los Antiguos que crearon este subterráneo.", "pj":"c_nami"},
			{"t":"En estas estatuas no es fácil reconocer cómo eran, pero he visto ilustraciones suyas."},
			{"t":"Lo que no se sabe muy bien es cómo era su sociedad."},
			{"t":"Se supone que dominaban una magia muy poderosa. Me da un poco de miedo, la verdad."},
			{"t":"Pero lo más misterioso de esa raza es su desaparición, no se sabe la causa."},
			{"set":"estatuaVista","expresion":["val",true]},
		],"else":[
			{"t":"Otra estatua igual a la anterior. O eran muy similares, o debió de ser alguien importante.", "pj":"c_nami"},
		]}
	],
	"Biblioteca":[
		{"if":["not",["var","bibliotecaVista"]],"then":[
			{"t":"Esto parece haber sido una biblioteca, aunque no queda ningún libro.", "pj":"c_nami"},
			{"t":"Probablemente fuesen libros de alquimia para los laboratorios."},
			{"t":"Se habrán estropeado con el tiempo, al fin y al cabo han pasado siglos desde la desaparición de los antiguos."},
			{"t":"Tenían capacidad para hacer libros mejores con su magia, pero la mayoría eran libros normales."},
			{"t":"Por cierto, el libro que buscamos es uno de esos libros mágicos que crearon los antiguos."},
			{"set":"bibliotecaVista","expresion":["val",true]},
		],"else":[
			{"t":"Me da pena ver una biblioteca sin libros.", "pj":"c_nami"},
		]}
	],
	"Estantería biblioteca":[
		{"find":"page", "feat":"Movimiento ágil"},
		{"t":"Otra página sobre cómo mejorar los movimientos en vuelo...", "pj":"c_nami"},
		{"t":"¿Qué estará pasando? Son demasiadas páginas las que estamos encontrando."},
		{"t":"No creas que el libro está defectuoso. Al contrario, lo está haciendo a propósito."},
		{"t":"Ese libro perteneció a grandes hechiceras del pasado, y acabó por adquirir conciencia propia."},
		{"t":"Apostaría a que tiene un objetivo."},
	],
	"Mesa biblioteca":[
		{"find":"page", "feat":"Bala acelerada"},
		{"t":"Ah, ya veo. Una hoja sobre como acelerar los proyectiles mágicos.", "pj":"c_nami"},
		{"t":"Muy útil, sobre todo cuando combates a largas distancias."},
		{"t":"Recuerdo cuando aprendí esta técnica. No es fácil de dominar."},
		{"t":"Aunque la verdad es que tú lo estás haciendo bastante bien. La magia parece ser natural en ti."},
	],
	"Mesa animales":[
		{"find":"page", "feat":"Atraer partículas"},
		{"t":"Déjame ver... Este capítulo habla de cómo atraer partículas de energía.", "pj":"c_nami"},
		{"t":"Como esas que salen de los limos cuando son eliminados."},
		{"t":"La energía se mantiene concentrada durante tan solo unos segundos, luego se dispersa y no se puede recuperar."},
		{"t":"Por eso esta clase de técnicas puede ser muy útil."},
		{"t":"Obviamente sólo sirve para espíritus. Los seres corpóreos no tenemos la posibilidad de usarlo."},
		{"t":"Nunca lo había pensado, pero este libro tiene un montón de información que los magos no podemos usar."},
	],
	"Jaula":[
		{"if":["var","primeraJaula"],"then":[
			{"t":"¡Vaya! Esto parecen jaulas.", "pj":"c_nami"},
			{"t":"Me acaba de entrar un escalofrío. Probablemente fuesen para animales usados en experimentos."},
			{"t":"Según parece, los Antiguos podían ser bastante crueles. Incluso sádicos."},
			{"t":"No creo que todos fuesen así, de todas maneras."},
			{"t":"Realmente sabemos muy poco sobre su cultura."},
			{"set":"primeraJaula","expresion":["val",false]},
		],"else":[
			{"t":"No quiero ni pensar en lo que pasaría con los animales que metieron aquí.", "pj":"c_nami"},
		]}
	],
	"Objeto inesperado":[
		{"findObject":"gema"},
		{"t":"¡Aquí hay algo! Parece una gema.", "pj":"c_nami"},
		{"t":"Usamos las gemas para almacenar energía espiritual, así que quizás sea de una de las estudiantes que bajaron."},
		{"t":"De hecho me suena que la he visto antes, pero no recuerdo de quién era."},
		{"t":"Pobres, probablemente crean que tienen la culpa de lo que haya pasado con el libro."},
		{"t":"La verdad es que el libro tiene voluntad propia, y lo que esté haciendo debe tener otro motivo."},
		{"t":"En cualquier caso cogeré la gema, quizás la necesite más adelante."},
	],
	"Relieve":[
		{"t":"Esto parecen inscripciones en lenguaje de los Antiguos.", "pj":"c_nami"},
		{"t":"No se leerlo muy bien, pero si que puedo descifrar algunas de sus palabras."},
		{"t":"Parece como si celebrase una victoria, aunque no se contra quienes."},
		{"t":"¿Contra otros Antiguos quizás? A las criaturas mágicas ni nos conocían."},
		{"t":"Sobre todo a partir del momento en que tuvieron que refugiarse bajo tierra."},
		{"t":"Gracias sean dadas que a nosotras no nos afectó su magia aniquiladora."},
	],
	"Mesa operaciones":[
		{"t":"Esto parece una enfermería. O algo así...", "pj":"c_nami"},
		{"t":"Y aquí hay otra página que... parece interesante."},
		{"find":"page", "feat":"Hechizo de curar"},
		{"t":"¡Contiene el hechizo de curación! Te aconsejo aprender este rápidamente.", "pj":"c_nami"},
		{"t":"Es curioso que el libro haya dejado esta página justo aquí. Supongo que entra dentro de su lógica."},
		{"t":"Él no entiende las cosas como una persona, pero intenta copiar nuestra lógica."},
	],
	"Curame":[
		{"t":"Ahora que ya conoces el hechizo de curación, ¿podrías curarme?", "pj":"c_nami"},
		{"t":"Estando herida hago peor las cosas y camino más despacio."},
		{"t":"Y no quiero gastar mi propia energía porque no la puedo recuperar tan fácilmente como tú."},
		{"t":"Se supone que arriba puedes ver una estrella en azul."},
		{"t":"Si la tocas aparecerá un corazón en rojo."},
		{"t":"Toca en ese corazón y después a mí para lanzar el hechizo."},
		{"t":"Así me han dicho que funciona para vosotros hacer la magia, aunque no entienda por qué."},
	],
	"Cama":[
		{"if":["var","primeraCama"],"then":[
			{"t":"Me pregunto qué clase de personas ocuparon estas camas.", "pj":"c_nami"},
			{"t":"Quiero creer que serían magos que sufrieron accidentes haciendo experimentos, pero..."},
			{"t":"He leído demasiadas cosas raras sobre los Antiguos..."},
			{"t":"Aunque supongo que no puedes juzgar a otras culturas con nuestros ojos."},
			{"set":"primeraCama","expresion":["val",false]},
		],"else":[
			{"t":"Si esto eran camas, no parece que fuesen muy cómodas.", "pj":"c_nami"},
			{"t":"Nuestras camas están todas mejoradas mágicamente para ser ideales."},
			{"t":"Claro que quizás los Antiguos no tuviesen esa posibilidad."},
			{"t":"Aunque sabían más de magia que nosotros, no eran criaturas mágicas en sí."},
		]}
	],
	"Aura2":[
		{"find":"page", "feat":"Aura ampliada"},
		{"t":"Otra página sobre el aura.", "pj":"c_nami"},
		{"t":"El aura es algo curioso. Al no poder verla es difícil de controlar."},
		{"t":"Tengo entendido que en vuestro mundo el aura no es conocida ¿no?"},
		{"t":"Me pregunto quien la descubriría en el nuestro."},
	],
	"Alquimia avanzada":[
		{"t":"Siempre he tenido la sensación de que los Antiguos tenían una alquimia enormemente avanzada.", "pj":"c_nami"},
		{"t":"Las criaturas mágicas usamos más nuestra propia magia."},
		{"t":"Muchas veces me pregunto si es que el origen de la magia de los Antiguos es distinto al nuestro."},
	],
	"Armario curación potenciada":[
		{"find":"page", "feat":"Curación potenciada"},
		{"t":"¡Eh! Aquí te explica como mejorar tu curación.", "pj":"c_nami"},
		{"t":"Esta técnica es muy interesante por que no aumenta el gasto de energía del hechizo."},
		{"t":"Es decir, podrás curarnos más con el mismo esfuerzo."},
	],
	"Más sobre recoger":[
		{"find":"page", "feat":"Absorber energía ambiental"},
		{"t":"Más información sobre captar energía ambiental. Te será útil.", "pj":"c_nami"},
		{"t":"Pero no dejo de preguntarme por qué el libro estará perdiendo tantas hojas."},
		{"t":"La directora de la escuela lo ha estado usando todos estos días sin problema, justamente intentando conectar con tu mundo."},
		{"t":"¿Puede que lo haya causado ella de alguna manera?"},
		{"t":"Me cuesta creerlo, sabiendo sus habilidades. Pero con estos libros antiguos nunca se sabe."},
		{"t":"Incluso para los Antiguos sería uno de sus libros más viejos."},
	],
	"Scriptorium":[
		{"if":["var","primerEscritorio"],"then":[
			{"t":"Esta mesa parece un escritorio, está llena de manchas de tinta.", "pj":"c_nami"},
			{"t":"Quizás almacenaban aquí los resultados de sus experimentos. O puede que fuese un aula de enseñanza."},
			{"t":"Que pena que a penas nos quede información sobre sus investigaciones."},
			{"t":"Aunque por lo que sabemos en algunos casos no sería de nuestro agrado."},
			{"set":"primerEscritorio","expresion":["val",false]},
		],"else":[
			{"t":"Aquí hay algo escrito. Creo que pone: \"Tonto el que lo lea\".", "pj":"c_nami"},
			{"t":"¡Vaya! Siempre imagino a los Antiguos como gente tan seria y majestuosa que se me olvida que eran personas como nosotros."},
			{"t":"No debió ser fácil para ellos tener que venir a refugiarse aquí, debajo de la superficie."},
			{"t":"Aunque claro, también es cierto que fueron ellos quienes hicieron que la superficie no fuese habitable."},
		]}
	],
	"Estantería scriptorium":[
		{"t":"Nada de sus documentos se ha salvado. Ahora son solo polvos.", "pj":"c_nami"},
		{"t":"Me pregunto que habrá sido de los Antiguos. A donde irían."},
		{"t":"Las criaturas mágicas y los Antiguos coexistimos en el pasado, pero nos escondíamos de ellos."},
		{"t":"No se el motivo, la verdad. Fue hace muchos años, y no nos ha llegado el origen del problema."},
	],
	"Ataque seguidor":[
		{"find":"page", "feat":"Ataque seguidor"},
		{"t":"Ah... una página sobre como hacer que los ataques sigan al blanco.", "pj":"c_nami"},
		{"t":"Es una magia excepcionalmente compleja, aunque garantiza que nunca falles."},
		{"t":"Requiere introducir en la bola de energía la capacidad de percibir su destino."},
	],
	"Armario de pasillo":[
		{"find":"page", "feat":"Ataque potenciado"},
		{"t":"Más información sobre como aumentar la energía de tus ataques. Es un tema interminable.", "pj":"c_nami"},
		{"t":"Conozco hechiceras capaces de destruir una montaña entera con una sola bola de energía."},
		{"t":"Naturalmente, eso no es demasiado útil en realidad."},
	],
	"Trata de comunicar":[
	
		{"if":["not",["var","intentoHablar"]],"then":[
			{"t":"Antes de seguir... quería preguntarte algo.", "pj":"c_nami"},
			{"t":"Puedo intentar usar la telepatía para comunicarme contigo, pero no quiero hacerlo sin tu permiso."},
			{"t":"Hagamos una cosa, si estás de acuerdo, acércate a mí, y si no, aléjate de mí. ¿Te parece?."},
			{"opciones":[
				{"t":"Sí (acercarte)","a":[
					{"t":"Está bien, déjame concentrarme.", "pj":"c_nami"},
					{"t":"Mmmmmm."},
					{"t":"Nada, lo siento, capto pensamientos inconexos, pero no puedo entenderlos del todo."},
					{"t":"A veces pasa, las mentes espirituales son difíciles de leer."},
				]},
				{"t":"No (alejarte)","a":[
					{"t":"Está bien, respeto tu decisión.", "pj":"c_nami"},
				]}
			]},
			{"t":"Al menos hemos encontrado una manera de que me puedas decir sí o no."},
			{"t":"Aprovechando eso, quería preguntarte algo. ¿Te gustaría venir a la escuela en el futuro?"},
			{"t":"Sé que en tu mundo no eres una criatura mágica, pero aquí sí, así que podrías estudiar en nuestra escuela."},
			{"opciones":[
				{"t":"Sí (acercarte)","a":[
					{"t":"¡Genial! Me gustaría conocerte en persona.", "pj":"c_nami"},
					{"t":"Nuestra directora está trabajando en ello, junto con la reina de las hadas de tu mundo."},
					{"t":"Si finalmente vienes aquí te aseguro que será muy divertido."},
				]},
				{"t":"No (alejarte)","a":[
					{"t":"Oh, vaya. Pues espero poder buscar otra forma de agradecértelo.", "pj":"c_nami"},
					{"t":"De verdad que me estás ayudando mucho."},
				]}
			]},
			{"set":"intentoHablar","expresion":["val",true]},
		]}
	],
	"Cristal":[
		{"t":"¡Mira! Esto es un cristal del alma. Un cristal vivo.", "pj":"c_nami"},
		{"t":"Estos cristales son lo que da vida a la escuela."},
		{"t":"En cualquier caso al estar vivo puede almacenar recuerdos."},
		{"t":"Quizás con un hechizo pueda ver lo que ocurrió aqui."},
		{"t":"思い出を見せて。"},
		{"t":"¡Ha funcionado! ¡Mira!", "pj":"c_nami"},
		{"t":"どこですか？", "pj":"c_hikari","r":1,"opacity":0.5},
		{"t":"そこに行く！", "pj":"c_mei","opacity":0.5},
		{"t":"早く！", "pj":"c_hikari","r":1,"opacity":0.5},
		{"t":"¡Son Hikari y Mei!", "pj":"c_nami"},
		{"t":"Parece que están buscando el libro."},
		{"t":"Me alegro de que esté Mei, Hikari es de primer año y podría estar en peligro, pero Mei... es especial."},
		{"t":"Lo importante es que vamos por buen camino."},
	],
	"Escaleras2":[
		{"t":"No detecto la energía del libro por aquí.", "pj":"c_nami"},
		{"t":"No creo que hayan tomado este camino, debemos seguir buscando."},
	],
	"Mesa escudo":[
		{"find":"page", "feat":"Hechizo de escudo"},
		{"t":"¡Vaya! ¡Un hechizo de escudo!.", "pj":"c_nami"},
		{"t":"Con esto podrás protegernos de daño, pero ten cuidado, consume bastante energía."},
	],
	"Acelerar en cama":[
		{"find":"page", "feat":"Movimiento ágil"},
		{"t":"No conocía estas técnicas para mejorar el vuelo.", "pj":"c_nami"},
		{"t":"También es cierto que no tengo demasiado entrenada esa clase de magia."},
		{"t":"En tu mundo tenéis máquinas para hacer estas cosas ¿no?"},
		{"opciones":[
			{"t":"Sí (acercarte)","a":[
				{"t":"Eso me parecía. La verdad es que no conozco demasiado de tu mundo, pero la directora ha recopilado bastante información.", "pj":"c_nami"},
				{"t":"Me pregunto cómo será volar en una máquina. Nosotras tan solo podemos hacerlo con animales o magia."},
				{"t":"Quitando quienes tienen alas, como las hadas, claro está."},
				{"t":"Aunque ninguna de estas son formas demasiado seguras de volar, la verdad."},
			]},
			{"t":"No (alejarte)","a":[
				{"t":"Ah, debí entender algo mal. Tenemos poco conocimiento sobre vuestro mundo, la verdad.", "pj":"c_nami"},
				{"t":"Hace tan solo unos meses que la directora consiguió contactar con él."},
			]}
		]},
	],
	"Jaula guardian":[
		{"t":"Qué raro es esto, allí hay una cama y aquí hay una jaula.", "pj":"c_nami"},
		{"t":"Si aquí dormía alguien ¿por qué hay también un lugar para encerrar un animal?"},
		{"t":"Podría ser para una mascota, pero si es así ¿por qué encerrarla?"},
	],
	"Curar en grupo":[
		{"find":"page", "feat":"Curación en grupo"},
		{"t":"Uff, gracias a dios que la hoja no se ha manchado con los productos alqúimicos. Es muy interesante.", "pj":"c_nami"},
		{"t":"Habla de como hacer una ola de energía curativa que cure a todo tu grupo."},
		{"t":"Lo mejor es que no necesita energía extra, y permite curar rápidamente a todo el mundo."},
	],
	"Tarros laboratorio":[
		{"t":"No tengo claro que estos tarros e instrumentos sean de cristal.", "pj":"c_nami"},
		{"t":"Apostaría a que se trata de algún material desconocido, creado por los Antiguos."},
		{"t":"Es una civilización que al mismo tiempo me asombra y me da algo de miedo."},
	],
	"Mesa laboratorio arriba":[
		{"t":"Si supiese algo más de alquimia quizás pudiese adivinar lo que hacían aquí.", "pj":"c_nami"},
		{"t":"Quizás me encierro demasiado en la biblioteca con mis libros. Debería practicar más magia de vez en cuando."},
		{"t":"Creo que el último mes he pasado más tiempo en la biblioteca que fuera de ella."},
		{"t":"Aunque claro, gran parte de ese tiempo ha sido para aprender vuestro idioma."},
		{"t":"Hubiese sido imposible sin la magia de la reina de las hadas de vuestro mundo."},
	],
	"Gran puerta":[
		{"t":"Vaya, está cerrada. Y eso son protecciones de los Antiguos.", "pj":"c_nami"},
		{"t":"Quizá sea una medida de protección ante la presencia de monstruos."},
		{"t":"Es magia olvidada, y demasiado poderosa. No sabría deshacerla."},
		{"t":"Ha de haber otra manera de abrir la puerta, o desactivar las protecciones."},
		{"set":"puertaVista","expresion":["val",true]},
	],
	"Primer dormitorio":[
		{"if":["not",["var","primerDormitorio"]],"then":[
			{"t":"Esto parece un dormitorio.", "pj":"c_nami"},
			{"t":"Es probable que muchos de los alquimistas viviesen aquí mismo."},
			{"t":"O quizás fuese una especie de escuela de alquimistas, y aquí vivirían los estudiantes."},
			{"set":"primerDormitorio","expresion":["val",true]},
		],"else":[
			{"t":"Sigo sin dejar de pensar lo duro que debió ser tener que venir a vivir aquí dentro.", "pj":"c_nami"},
			{"t":"Millones de seres teniendo que abandonar la superficie para siempre. Sin poder ver de nuevo la luz del sol."},
			{"t":"¿Qué les llevaría a causar una destrucción así sobre si mismos?."},
		]}
	],
	"Encuentra escudo potenciado":[
		{"find":"page", "feat":"Escudo potenciado"},
		{"t":"Aquí hay otra. Esta habla de como hacer escudos que duren más.", "pj":"c_nami"},
		{"t":"Al alargar la vida del escudo su coste aumenta un poco más, pero sinceramente creo que merece la pena."},
	],
	"Segundo dormitorio":[
		{"t":"Es curioso que estos muebles se hayan conservado aquí abajo durante tanto tiempo.", "pj":"c_nami"},
		{"t":"Parece madera, pero no podían conseguirla de la superficie. Quizás haya plantas subterráneas."},
		{"t":"O quizás sea algún otro material que inventaron."},
	],
	"Oración":[
		{"t":"Aquí habla de los valores de los Antiguos. Es una especie de rezo.", "pj":"c_nami"},
		{"t":"Es curioso, parece que los Antiguos eran muy similares, a diferencia de las criaturas mágica."},
		{"t":"Por lo que se en vuestro mundo también sois muy diversas, aunque no siempre os consideréis criaturas mágicas."},
		{"t":"¿Tú eres una criatura mágica?"},
		{"opciones":[
			{"t":"Sí (acercarte)","a":[
				{"t":"Siento que no podamos comunicar más, me gustaría saber que tipo de criatura eres.", "pj":"c_nami"},
			]},
			{"t":"No (alejarte)","a":[
				{"t":"Si, tengo entendido que hay personas que no se reconocen como criaturas mágicas en tu mundo.", "pj":"c_nami"},
				{"t":"Incluso mucha gente desconoce su existencia."},
			]},
			{"t":"(titubeas)","a":[
				{"t":"Ah... puede que simplemente no lo sepas. En tu mundo no es algo que se enseñe normalmente, por lo que se.", "pj":"c_nami"},
				{"t":"Pero, sinceramente, si dudas es posible que lo seas. Si no lo fueses no dudarías."},
				{"t":"Pero cuando te han educado para no creer en ello, es difícil aceptar quien eres."},
			]}
		]},
		{"t":"En cualquier caso se que tenéis muchos tipos de personas y muchas formas de ser."},
		{"t":"Adoro esa clase de diversidad, aunque no sea siempre comprendida."},
	],
	"Armario bala":[
		{"find":"page", "feat":"Bala acelerada"},
		{"t":"Más sobre como acelerar los proyectiles.", "pj":"c_nami"},
		{"t":"Después de combates como el de esta sala, no niego que lo veo interesante."},
	],
	"Escudo en grupo":[
		{"find":"page", "feat":"Escudo en grupo"},
		{"t":"¡Oh! Esto nos puede ayudar.", "pj":"c_nami"},
		{"t":"Hace que los escudos nos afecten a todo el grupo, en lugar de a una sóla persona."},
		{"t":"Con estas técnicas los limos serán una molestia menor."},
	],
	"Niña":[
		{"if":["not",["var","encontradoHana"]],"then":[
			{"t":"Hablaré con esa persona. No me suena haberla visto.", "pj":"c_nami"},
			{"t":"あなたは大丈夫ですか？", "pj":"c_nami"},
			{"t":"はい。", "pj":"c_nina","r":1},
			{"t":"あなたの名前は何ですか？", "pj":"c_nami"},
			{"t":"花です。", "pj":"c_nina","r":1},
			{"t":"Dice que se llama Hana, pero no la conozco.", "pj":"c_nami"},
			{"t":"Tampoco lleva el uniforme de la escuela."},
			{"t":"どうやってここに来ましたか？", "pj":"c_nami"},
			{"t":"私は知らない。", "pj":"c_nina","r":1},
			{"t":"私たちと一緒に来てください。", "pj":"c_nami"},
			{"t":"はい。", "pj":"c_nina","r":1},
			{"t":"No parece muy habladora, quizás esté asustada.", "pj":"c_nami"},
			{"t":"Le he dicho que nos acompañe. Por favor, cuida de que no le pase nada."},
			{"add_party":"Niña"},
			{"set":"encontradoHana","expresion":["val",true]}
		]}
	],
	"Hana encuentra una hoja":[
		{"t":"本です！", "pj":"c_nina","r":1},
		{"find":"page", "feat":"Aura ampliada"},
		{"t":"花、本を知っていますか？", "pj":"c_nami"},
		{"t":"はい。", "pj":"c_nina","r":1},
		{"t":"Qué extraño, Hana ha encontrado una hoja y parece haberla reconocido...", "pj":"c_nami"},
		{"t":"Incluso dice conocer el libro."},
		{"t":"¿Cómo es eso posible? Casi nadie tiene acceso a ese libro, y ella no parece alumna de esta escuela."},
		{"t":"Quizás entrase en el ala reservada con Hikari y Mei, pero ¿Cómo pudo entrar en la escuela en primer lugar?"},
	],
	"Curación potenciada 2":[
		{"find":"page", "feat":"Curación potenciada"},
		{"t":"Más información sobre técnicas de curación.", "pj":"c_nami"},
		{"t":"De nuevo, estas técnicas no aumentan la energía necesaria para lanzar el hechizo, así que son bastante útiles."},
	],
	"Suposiciones Hana":[
		{"t":"Al ver estos productos químicos se me ha ocurrido una locura.", "pj":"c_nami"},
		{"t":"No me tomes en serio, pero ¿y si Hana es producto de este laboratorio?"},
		{"t":"También podría ser heredera de los Antiguos. No queda nada de ellos, pero si se han encontrado vivas algunas de sus creaciones."},
		{"t":"Es que no la reconozco como ninguna clase de criatura mágica. Aunque no se si quieres que te siga liando con esto..."},
		{"opciones":[
			{"t":"Sí (acercarte)","a":[
				{"t":"Está bien, obviamente no es un hada, ni una chica lobo, ni una vampiro."},
				{"t":"Si fuese una dragona, ángel o similar, podría alcanzar la capacidad de pasar desapercibida, pero no parece tener tanto nivel."},
				{"t":"Y a las brujas se las distingue fácilmente por su olor. Al menos para mi, que tengo buen olfato."},
				{"t":"También es cierto que hay un sinfin de criaturas mágicas, y que no puedo conocerlas todas, pero..."},
				{"t":"No se, son demasiadas cosas inusuales las que tiene esta chica."},
			]},
			{"t":"No (alejarte)","a":[
				{"t":"La verdad es que a veces me excedo pensando en voz alta."},
			]},
		]},
	],
	"Último ataque potente":[
		{"find":"page", "feat":"Ataque potenciado"},
		{"t":"Otra hoja sobre como mejorar tu ataque.", "pj":"c_nami"},
		{"t":"Ya me parece excesivo ¿Es que la fuerza es la única manera de solucionar las cosas?."},
	],
	"Escudo potenciado 2":[
		{"find":"page", "feat":"Escudo potenciado"},
		{"t":"Esto podría ser útil. Es cierto que acabar con los limos viene bien, pero esquivarlos sería una opción también.", "pj":"c_nami"},
		{"t":"Con el escudo al máximo quizás pudiésemos pasar entre ellos sin problemas."},
		{"t":"Aunque por otro lado es necesario registrarlo todo bien, no convendría dejarse ninguna página olvidada."},
	],
	"Estatua fundador":[
		{"t":"Esta estatua tiene una inscripción.", "pj":"c_nami"},
		{"t":"No la entiendo bien, pero creo que se trata del fundador de estos laboratorios,... o algo así."},
		{"t":"Pone la fecha en la que fueron fundados. Aunque no estoy segura, creo que es pocas décadas antes de la desaparición de los Antiguos."},
		{"t":"Nunca llegamos a saber qué ocurrió. Ellos no se aventuraban por la superficie, y nosotras no bajábamos a sus subterráneos."},
		{"t":"Nos enteramos muchos años después, cuando los aparatos que tenían cerca de la superficie comenzaron a fallar y nadie los arreglaba."},
		{"t":"Entonces se comenzaron a explorar los subterráneos, para encontrar que estaban completamente vacíos."},
		{"t":"Hay quienes dicen que realizaron un viaje, pero ¿a dónde?"},
	],
	"colector":[
		{"t":"¡Vaya! Esto parece un acumulador de energía espiritual de los Antiguos.", "pj":"c_nami","r":1},
		{"t":"Es extraño, debería estar completamente agotado..."},
		{"t":"Quizás la presencia de hojas del libro esté generando energía. Por eso debemos recuperarlas todas."},
		{"t":"De hecho sería bueno también vaciar este acumulador."},
		{"if":["var","puertaVista"],"then":[
			{"t":"Puede que sea lo que ha bloqueado la puerta. Si lo vaciamos podremos pasar."},
		],"else":[
			{"t":"Puede estar activando artefactos desconocidos de este nivel. Creo que sería mejor vaciarlo."},
		]},
		{"t":"No entiendo del todo esta tecnología, pero creo saber cómo hacerlo."},
		{"t":"Lo que contiene es energía espiritual. Podrías absorberla si te metes en la esfera."},
		{"opciones":[
			{"t":"Meterte en la esfera","a":[
				{"set":"energiaAbsorvida","expresion":["val",true]}
			]},
			{"t":"Alejarte de la esfera","a":[
				{"t":"Oh, no te preocupes, no debería hacerte nada.", "pj":"c_nami","r":1},
				{"t":"En el peor de los casos volverías a tu plano y te podría volver a invocar."},
				{"opciones":[
					{"t":"Meterte en la esfera","a":[
						{"set":"energiaAbsorvida","expresion":["val",true]}
					]},
					{"t":"Alejarte de la esfera aún más","a":[
						{"t":"Está bien, probaré simplemente a liberar la energía.", "pj":"c_nami","r":1},
						{"t":"放す。"},
						{"changeFrame":"colector","frame":"inactivo"},
						{"custom":"give_energy","energy":"2000"},
						{"t":"Sientes como si una onda de energía atravesase toda la sala.","pj":"none"},
						{"t":"¡Vaya! Esperaba que se hubiese disipado, pero parece que la energía continua aquí.", "pj":"c_nami","r":1},
						{"t":"Si es así temo que pueda haber afectado a otras criaturas."},
					]}
				]},
			]}
		]},
		{"if":["var","energiaAbsorvida"],"then":[
			{"t":"Tan pronto como te introduces en la esfera sientes que una gran energía te inunda.","pj":"none"},
			{"t":"Pero hay algo extraño..."},
			{"changeFrame":"colector","frame":"inactivo"},
			{"changeSpirit":"spirit2"},
			{"t":"¡Oh! ¡Has cambiado!", "pj":"c_nami","r":1},
			{"t":"No contaba con que la energía en el colector procediera del libro."},
			{"t":"En principio no debería haber problema, pero estaré atenta por si algo pasa."},
		]},
		{"changeFrame":"Gran puerta","frame":"abierta"},
		{"unblock":"Gran puerta"},
	],
	"Cristal2":[
		{"t":"¡Otro cristal! Lanzaré el hechizo de nuevo.", "pj":"c_nami"},
		{"t":"思い出を見せて。", "pj":"c_nami"},
		{"t":"これは危険です。", "pj":"c_mei","opacity":0.5},
		{"t":"戻るべきだよ。", "opacity":0.5},
		{"t":"いいえ。", "pj":"c_hikari","r":1,"opacity":0.5},
		{"t":"私はあなたと一緒にいたいです。","opacity":0.5, "pj":"c_hikari"},
		{"t":"Parece que Mei es consciente del peligro, pero Hikari no quiere dejarla.", "pj":"c_nami"},
		{"t":"Hikari es demasiado inexperta, estaría más segura si volviese."},
		{"t":"De todas maneras confío en que Mei pueda protegerla."},
	],
	"Escaleras salida":[
		{"t":"¡Noto la energía del libro por aquí!", "pj":"c_nami"},
		{"t":"Es evidente que han bajado a otro nivel."},
		{"t":"Espero que no hayan llegado muy lejos."},
		{"t":"LA DEMO TERMINA AQUÍ."},
		{"t":"Espero que os guste y poder terminar el juego para que lo disfrutéis por completo."},
	],
	
	/*************************************
	
		TEORIA
	
	 *************************************/
	
	"teoria_hiragana":[
		{"t":"Aquí vas a aprender a usar tus poderes.", "pj":"c_nami"},
		{"t":"Aprenderás a usar hechizos a medida que aprendas el lenguaje de la magia."},
		{"t":"Estos símbolos son hiragana, y representan sonidos. Por ejemplo \"do\" en nuestro idioma se escribe ど."},
		{"t":"Intenta memorizarlos bien antes de continuar, porque el libro te hará preguntas. Cuantas más aciertes, más mejorará tu magia."},
	],
	"teoria_ka_y_ni":[
		{"t":"Fíjate en か (ka) y に (ni). No son simples sonidos, sino \"partículas\" que tienen un uso especial en nuestro idioma.", "pj":"c_nami"},
		{"t":"か (ka) se pone al final de las frases para indicar que la frase es una pregunta. Más tarde veremos ejemplos."},
		{"t":"に (ni) se pone detrás de una palabra para indicar una dirección entre otras cosas."},
		{"t":"En muchos casos las partículas son similares a vuestras preposiciones."},
	],
	"teoria_palabras_hiragana_kanji_verbos":[
		{"t":"Juntando los sonidos que hemos visto podemos formar palabras. Por ejemplo: どこ (doko), que significa \"dónde\".", "pj":"c_nami"},
		{"t":"Pero no todas las palabras se escriben en hiragana. Algunas usan kanjis, como 行く (iku) que es el verbo \"ir\"."},
		{"t":"行く termina en く (ku), que es un hiragana que ya hemos visto. Pero empieza por un símbolo que no conocemos: 行, que en este caso se lee como \"i\"."},
		{"t":"Si te fijas en la diferencia de los símbolos en kanji y en hiragana, los kanjis son más complicados y están hechos sobre todo con líneas rectas."},
	],
	"teoria_radicales":[
		{"t":"Aquí tenemos varios kanjis más, que son parecidos.", "pj":"c_nami"},
		{"t":"Empezamos por los más sencillos porque además estos se usan en otros más complejos."},
		{"t":"Estos se llaman radicales, y conocer estos ayuda a aprender los otros."},
		{"t":"Fíjate por ejemplo en el kanji de luna 月 (tsuki), que te enseñaré más adelante como parte de otro kanji más complejo."},
	],
	"teoria_estructura_frase":[
		{"t":"Ahora que sabemos unas cuantas palabras podemos empezar a formar frases.", "pj":"c_nami"},
		{"t":"Fíjate en どこですか. Que acabe en か nos indica que es una pregunta."},
		{"t":"どこ (doko) y です (desu) significan \"dónde\" y \"ser/estar\", así que esta frase pregunta \"¿Dónde esta?\"."},
		{"t":"En japonés los verbos se ponen al final de la frase, tanto です (desu) como 行く (iku), que significa \"ir\"."},
		{"t":"También las partículas se ponen después de la palabra o frase a la que acompañan, tanto か (ka) como に (ni)."},
		{"t":"En el caso de に (ni), acompaña a そこ (soko) que significa allí. Literalmente dice \"Allí ir\", o traducido correctamente: \"Va por allí\". "},
	],
	"teoria_diferencias_na_ta":[
		{"t":"Aquí tenemos más sílabas en hiragana.", "pj":"c_nami"},
		{"t":"Te aconsejo que te fijes sobre todo en la diferencia de な (na) y .た (ta), que se parecen bastante."},
		{"t":"Otro símbolo interesante es は (ha), que más adelante veremos que no siempre se pronuncia así."},
	],
	"teoria_particula_wa":[
		{"t":"Otra partícula importante es la partícula は (wa).", "pj":"c_nami"},
		{"t":"Como verás se escribe como el hiragana は (ha), pero se pronuncia \"wa\". Esto nos indica que es la partícula de tema."},
		{"t":"Esta partícula se coloca detrás de una palabra para indicar que esta es el tema principal de la frase."},
		{"t":"Por ejemplo あなたは (anata wa) es como decir: \"hablando de ti\" o \"Respecto a ti\"."},
	],
	"teoria_sufijos":[
		{"t":"Algunos kanjis son una palabra por si solas como 人 (hito - persona), 夫 (otto - marido) y 犬 (inu - perro).", "pj":"c_nami"},
		{"t":"Otros como 大 (dai - grande) solo se usan como parte de otras palabras. Pronto veremos algún ejemplo."},
	],
	"teoria_variación_te_de":[
		{"t":"Fíjate en el nuevo hiragana て (te) ¿No te suena? Es casi como で (de).", "pj":"c_nami"},
		{"t":"Esas dos pequeñas líneas que tiene で y no tiene て se llaman dakuten, y sirve para formar consonantes sonoras."},
		{"t":"Iremos viendo más ejemplos en el futuro. Espero que saber esto te ayude a recordar y distinguir estas dos sílabas."},
	],
	"teoria_palabras_complejas_y_radicales":[
		{"t":"¿Recuerdas el kanji 大 (dai - grande)? Pues aquí lo tenemos como parte de la palabra 大丈夫 (daijoubu), que significa \"estar bien\".", "pj":"c_nami"},
		{"t":"Otra palabra más complicada es 名前 (namae - nombre). Los kanjis que lo forman pueden parecer difíciles de recordar, pero no es así."},
		{"t":"Para hacerlo tenemos que fijarnos en los radicales que lo forman. Por ejemplo, la parte de abajo tiene el radical de \"boca\": 口 (kuchi)."},
		{"t":"El segundo tiene a la izquierda el radical de luna ¿Te acuerdas de él? Es 月 (tsuki), que te enseñé antes."},
	],
	"diferencias_ra_chi":[
		{"t":"En estos hiragana te aconsejo fijarte en la diferencia entre ら (ra) y ち (chi).", "pj":"c_nami"},
		{"t":"Aunque se parecen, en ち (cha) la línea de arriba es completamente horizontal y corta el otro trazo."},
	],
	"teoria_hon_ki":[
		{"t":"Aquí tenemos otra serie de kanjis bastante parecidos. Fíjate bien en las diferencias.", "pj":"c_nami"},
		{"t":"Por ejemplo, el kanji de libro (本) es como el de árbol (木) pero con una línea más en la parte de abajo."},
	],
	"teoria_watashi_tachi_to":[
		{"t":"Aquí tenemos dos nuevos verbos, ambos acabados en る (ru), que es la terminación más habitual para verbos.", "pj":"c_nami"},
		{"t":"Otra cosa interesante es la palabra 私たち (watashi tachi) que significa \"nosotros\"."},
		{"t":"En realidad たち (tachi) se usa para convertir en plural muchas palabras, como veremos más adelante."},
		{"t":"También tenemos la partícula と (to) que se pone detrás de un nombre para indicar con quíen realizamos la acción."},
	],
	"teoria_forma_te":[
		{"t":"Los verbos que hemos visto hasta ahora estaban en la llamada \"forma de diccionario\", terminada en \"u\", como 来る (kuru).", "pj":"c_nami"},
		{"t":"Pero si te fijas aquí nos encontramos el mismo kanji seguido de otro hiragana: 来て (kite).", "pj":"c_nami"},
		{"t":"Es una conjugación de 来る (kuru), que se conoce como forma -て (te), y tiene muchos usos que pronto empezaremos a ver."},
		{"t":"Observa que la pronunciación del kanji cambia al conjugarlo: de \"ku\" pasa a \"ki\"."},
		{"t":"Este cambio de pronunciación no es lo habitual: este es un verbo irregular."},
	],
	"teoria_wo":[
		{"t":"を (wo) es otra partícula habitual. La ponemos detrás del objeto de la frase sobre la que actúa el verbo", "pj":"c_nami"},
		{"t":"Fíjate también que en esta partícula la uve doble casi no suena. El sonido es casi como una simple \"o\"."},
		{"t":"Luego veremos un ejemplo de su uso."},
	],
	"teoria_pasado_formal_y_nai":[
		{"t":"Aquí tenemos otros dos verbos conjugados: 来ました (kimashita) y 知らない (shiranai).", "pj":"c_nami"},
		{"t":"-ました (mashita) es la conjugación que indica pasado formal. Se sustituye el る (ru) del final por esta conjugación."},
		{"t":"Mientras que 来る (kuru) significa \"vengo\", 来ました (kimashita) significa \"vine\"."},
		{"t":"Por otro lado 知らない (shiranai) está en forma -ない (nai), que es la forma negativa del verbo."},
		{"t":" 知る (shiru) significa \"saber\", mientras que 知らない significa \"no saber\"."},
		{"t":"En este caso se forma normalmente cambiando la última sílaba a la versión con \"a\" y añadiendo -ない (nai)."},
		{"t":"Es decir, en este caso る (ru) se convierte en ら (ra), y añadimos -ない: 知らない (shiranai)."},
	],
	"teoria_forma_te_kudasai_y_doble_consonante":[
		{"t":"Aquí tenemos un primer ejemplo de uso de la forma -て (te).", "pj":"c_nami"},
		{"t":"Para pedir algo por favor ponemos ください (kudasai) detrás del verbo en forma -て (te).", "pj":"c_nami"},
		{"t":"Por ejemplo, para pedir que alguien venga decimos 来てください (kite kudasai)."},
		{"t":"Fíjate también en la expresión どうやって (douyatte). ¿Ves que tiene una pequeña つ (tsu) entre や (ya) y て (te)?"},
		{"t":"Esta pequeña つ (tsu) se llama soukuon, y hace que la siguiente consonante tenga un sonido doble. En este caso やって (yat-te)."},
	],
	"teoria_isshoni":[
		{"t":"Aquí tenemos un grupo de frases y expresiones, pero quería señalar algo concreto.", "pj":"c_nami"},
		{"t":"La última 私たちと一緒に (watashi tachi to isshoni) significa \"Junto con nosotros\"."},
		{"t":"En realidad hubiese bastado con la partícula と (to), que signfica \"con\"."},
		{"t":"Añadir 緒に (isshoni) al final es una forma de enfatizar la idea: lo hacemos \"juntos\"."},
		{"t":"緒に (isshoni), en este caso, da una mayor sensación de cercanía."},
	],
	"teoria_da_masu":[
		{"t":"Fíjate en la palabra だ (da), que es la versión con dakuten de la sílaba た (ta).", "pj":"c_nami"},
		{"t":"Esta paabra es la forma informal de です (desu), y tiene el mismo significado."},
		{"t":"También tenemos el verbo います (imasu), que es la conjugación formal de いる."},
		{"t":"Esta es llamada la forma -ます (masu), y normalmente basta con sustituir la última sílaba del verbo por  -ます (masu)."},
		{"t":"Así que en forma formal tenemos -ます (masu) para el presente cy -ました (mashita) para el pasado."},
	],
	"teoria_te_imasu":[
		{"t":"Otro uso de la forma て (-te) es la-expresión -て+います (te imasu), que indica tiempo continuo.", "pj":"c_nami"},
		{"t":"Indica que la acción no ha terminado, que aún lo estás haciendo."},
		{"t":"Por ejemplo, en este caso 知っています (shite imasu) significa \"estar conociendo\"."},
	],
	"teoria_otros_verbos":[
		{"t":"Aquí tenemos nuevos verbos.", "pj":"c_nami"},
		{"t":"Como ya he dicho esta es la forma de diccionario, que termina en \"u\"."},
		{"t":"Fíjate sobre todo en los kanjis. Algunos los puedes recordar en base a sus radicales."},
		{"t":"思う (omou) tiene los radicales 田 (ta) y  心 (kokoro), mientras que 見る miru tiene el radical 目 (me), por ejemplo."},
	],
	"teoria_imperativo":[
		{"t":"Otro uso de la forma -て (te) es el imperativo.", "pj":"c_nami"},
		{"t":"Si usamos la forma -て (te) sin poner ください (kudasai) detrás, deja de ser una petición y se convierte más en una orden, en imperativo."},
		{"t":"Por ejemplo, 見せて (misete), la forma -て (te) del verbo 見せる (miseru), que significa \"mostrar\", se convierte en \"muestrame\"."},
	],
	"teoria_yo":[
		{"t":"Aquí tenemos la partícula よ (yo), que se coloca al final de la frase para dar expresividad.", "pj":"c_nami"},
		{"t":"Tiene varios usos, como dar enfatizar una petición, o la certeza de tu afirmación."},
		{"t":"Más adelante veremos ejemplos de su uso en donde podré explicarlo mejor"},
	],
	"teoria_tai":[
		{"t":"Otra conjugación importante es la conjugación たい (tai), que significa querer.", "pj":"c_nami"},
		{"t":"Si いる (iru) significa \"estar\", cuando sustiruimos る (ru) por  たい (tai), significa \"querer estar\"."}
	],
	"teoria_wo_beki_yo":[
		{"t":"En estas expresiones tenemos varios ejemplos de lo que hemos explicado antes.", "pj":"c_nami"},
		{"t":"La partícula を (wo) se usa después de 思い出 (omoide) \"recuerdos\", para indicar que eso es lo que queremos que se muestre."},
		{"t":"La palabra べき (beki), usada detrás de 戻る (modoru), significa \"deberías regresar\"."},
		{"t":"Y en esa misma frase se usa la partícula よ (yo) al final para expresar que eso es algo en lo que realmente creo."},
		{"t":"Porm último tenemos también la palabra 一緒に (isshoni) y y la conjugación いたい (itai) para expresar \"quiero estar contigo\"."},
	],
}