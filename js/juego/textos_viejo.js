var textos={
	"Abrir":"Abrir",
	"Jugar":"Jugar",
	
	"Menú":"Menú",
	"Diccionario":"Diccionario",
	"Entrenamiento":"Entrenamiento",
	"Créditos":"Créditos",
	
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
	"Absorver energía ambiental":"Energía ambiental",
	"Atraer partículas":"Atraer partículas",
	"Balas seguidoras":"Balas seguidoras",
	"Curación potenciada":"Curación potenciada",
	"Curar en grupo":"Curar en grupo",
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
	{"p":"doko desu ka","s":"¿Dónde está?","r":"どこですか","o":["Va por allí."],"t":"trad","snd":"doko_desu_ka","teoria":"teoria_estructura_frase"},
	{"p":"soko ni iku","s":"Va por allí.","r":"そこに行く","o":["¿Dónde está?"],"t":"trad","snd":"soko_ni_iku"},
	
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
	{"p":"hai","s":"si","r":"はい","o":["はの","ほい"],"snd":"hai"},
	{"p":"daijoubu","s":"estar bien","r":"大丈夫","o":["丈大夫","夫丈大"],"snd":"daijoubu"},
	{"p":"namae","s":"nombre","r":"名前","o":["夘前","名苅"],"snd":"namae","teoria":"teoria_palabras_complejas_y_radicales"},
	
	{"p":"u","s":"silabario hiragana","r":"う","o":["つ","て"],"snd":"u"}, //10
	{"p":"ya","s":"silabario hiragana","r":"や","o":["つ","う"],"snd":"ya"},
	{"p":"te","s":"silabario hiragana","r":"て","o":["で","と"],"snd":"te","teoria":"teoria_variación_te_de"},
	{"p":"ru","s":"silabario hiragana","r":"る","o":["う","ろ"],"snd":"ru"},
	
	{"p":"ya","s":"flecha","r":"矢","o":["本","来"],"snd":"ya"}, //11
	{"p":"rai","s":"siguiente (prefijo)","r":"来","o":["本","矢"],"snd":"rai"},
	{"p":"ki","s":"árbol","r":"木","o":["本","夫"],"snd":"ki"},
	{"p":"hon","s":"libro","r":"本","o":["来","矢"],"snd":"hon","teoria":"teoria_hon_ki"},
	
	{"p":"shi","s":"silabario hiragana","r":"し","o":["て","と"],"snd":"shi"}, //12
	{"p":"ra","s":"silabario hiragana","r":"ら","o":["ち","ろ"],"snd":"ra"},
	{"p":"chi","s":"silabario hiragana","r":"ち","o":["ら","ろ"],"snd":"chi"},
	{"p":"to","s":"con","r":"と","o":["て","ど"],"snd":"to","snd":"to","teoria":"teoria_to_do"},
	
	{"p":"shiru","s":"saber","r":"知る","o":["利る","如る"],"snd":"shiru"}, //13
	{"p":"kuru","s":"venir","r":"来る","o":["本る","矢る"],"snd":"kuru"},
	{"p":"issho","s":"juntos, junto con","r":"一緒","o":["一紙","一偖"],"snd":"issho"},
	{"p":"watashi tachi","s":"nosotros","r":"私たち","o":["利たち","私たら"],"snd":"watashi_tachi","teoria":"teoria_watashi_tachi"},
	
	{"p":"hana","s":"flor","r":"花","o":["化","苻"],"snd":"hana"}, //14
	{"p":"nani","s":"qué","r":"何","o":["化","同"],"snd":"nani"},
	{"p":"koko","s":"aquí","r":"ここ","o":["たた","にに"],"snd":"koko"},
	{"p":"kimashita","s":"vino (venir)","r":"来ました","o":["矢ました","木ました"],"snd":"kimashita","teoria":"teoria_pasado_formal"},
	
	{"p":"douyatte","s":"de que manera","r":"どうやって","o":["とうやって","とうやっで"]}, //15
	{"p":"kudasai","s":"por favor","r":"ください","o":["くだとい","くたさい"],"snd":"kudasai"},
	{"p":"kite kudasai","s":"ven, por favor","r":"来てください","o":["とうやって","とうやっで"],"teoria":"teoria_forma_te_kudasai_y_nai"},
	{"p":"watashi wa shiranai","s":"no lo se","r":"私は知らない","o":["利らない","如らない"]},
	
	{"p":"anata wa daijoubu?","s":"¿Estás bien?.","r":"あなたは大丈夫？","o":["¿Cómo estás?","¿Estás cansado?"],"t":"trad","teoria":"teoria_uso_particulas"}, //16
	{"p":"nani desu ka?","s":"¿Qué es?.","r":"何ですか","o":["¿Cómo es?","¿Estás bien?"],"t":"trad"}, 
	{"p":"koko ni kimashita ka?","s":"¿Viniste aquí?","r":"ここに来ましたか","o":["¿Vuelves aquí?","¿Estás aquí?"],"t":"trad"}, 
	{"p":"watashi tachi to issho ni","s":"Junto con nosotros","r":"私たちと一緒に","o":["Ir contigo","Ven con nosotros"],"t":"trad"}, 
	
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
	
	{"p":"kata","s":"persona (respetuoso)","r":"方","o":["心","力"],"teoria":"teoria_persona_respetuoso"}, //17
	{"p":"kokoro","s":"corazón","r":"心","o":["方","光"]},
	{"p":"ta","s":"campo de arroz","r":"田","o":["日","皿"]},
	{"p":"yama","s":"montala","r":"山","o":["出","心"]},
	
	{"p":"hanasu","s":"liberar","r":"放す","o":["知す","改す"],"teoria":"teoria_otros_verbos"}, //18
	{"p":"omou","s":"pensar","r":"思う","o":["見う","出う"]},
	{"p":"deru","s":"salir","r":"出る","o":["心る","思る"]},
	{"p":"miru","s":"mirar","r":"見る","o":["目る","思る"]},
	
	{"p":"wo","s":"indica el objeto","r":"を","o":["て","む"],"teoria":"teoria_particula_wo_e_imperativo"}, //19
	{"p":"omoide","s":"recuerdo","r":"思い出","o":["見い出","思い心"]},
	{"p":"miseru","s":"mostrar","r":"見せる","o":["見せて","思せる"]},
	{"p":"misete","s":"muestra (imperativo)","r":"見せて","o":["見せる","思せて"]},
	
	/*
	放す
	
	思い出を見せて
	*/
	
	{"p":"re","s":"silabario hiragana","r":"れ","o":["わ","ね"]}, //20
	{"p":"be","s":"silabario hiragana","r":"べ","o":["へ","づ"],"teoria":"teoria_he_be"},
	{"p":"ki","s":"silabario hiragana","r":"き","o":["ぎ","さ"]},
	{"p":"e","s":"silabario hiragana","r":"え","o":["う","そ"]},
	
	{"p":"kore","s":"esto","r":"これ","o":["こわ","こね"]}, //21
	{"p":"beki","s":"deberías","r":"べき","o":["へき","べさ"],"teoria":"teoria_beki_da_yo"},
	{"p":"da","s":"ser","r":"だ","o":["た","な"]},
	{"p":"yo","s":"enfatiza una orden","r":"よ","o":["な","ま"]},
	
	{"p":"kiken","s":"peligro","r":"危険	","o":["厄険","危倹"]}, //22
	{"p":"modoru","s":"volver, regresar","r":"戻る","o":["戸る","涙る"]},
	{"p":"iie","s":"no","r":"いいえ","o":["いええ","ここえ"]},
	{"p":"itai","s":"querer estar","r":"いたい","o":["いだい","こたこ"],"teoria":"teoria_tai"},
	
	{"p":"anata wa daijoubu?","s":"¿Estás bien?.","r":"あなたは大丈夫？","o":["¿Cómo estás?","¿Estás cansado?"],"t":"trad"}, //23
	{"p":"nani desu ka?","s":"¿Qué es?.","r":"何ですか","o":["¿Cómo es?","¿Estás bien?"],"t":"trad"}, 
	{"p":"koko ni kimashita ka?","s":"¿Viniste aquí?","r":"ここに来ましたか","o":["¿Vuelves aquí?","¿Estás aquí?"],"t":"trad"}, 
	{"p":"watashi tachi to issho ni","s":"Junto con nosotros","r":"私はあなたと一緒に","o":["Ir contigo","Ven con nosotros"],"t":"trad"},  // Corregir, faltan frases finales
	
	/*
戸
	
これは危険です。
戻るべきだよ。
いいえ
私はあなたと一緒にいたいです。
	*/
	
	{"p":"mimi","s":"oreja","r":"耳","o":["目","月"]},
	
	{"p":"ou","s":"rey","r":"王","o":["玉","国"]}, // 24
	{"p":"tama","s":"bola, esfera","r":"玉","o":["国","宝"]},
	{"p":"kuni","s":"pais, estado","r":"国","o":["玉","全"]},
	{"p":"takara","s":"tesoro","r":"宝","o":["玉","国"],"change":{"Tesoro":"宝"}},
	
	{"p":"zen","s":"todo, por completo","r":"全","o":["金","今"]}, // 25
	{"p":"kin","s":"oro","r":"金","o":["全","今"],"change":{"Oro":"金"}},
	{"p":"ima","s":"ahora","r":"今","o":["会","金"]},
	{"p":"kai","s":"reunión","r":"会","o":["全","今"]},
	
	{"p":"bun","s":"frase","r":"文","o":["又","夂"]}, // 26
	{"p":"mata","s":"además","r":"又","o":["文","夂"]},
	{"p":"ru","s":"sílaba, hiragana","r":"る","o":["ろ","ら"]},
	{"p":"ro","s":"sílaba, hiragana","r":"ろ","o":["る","ら"]},
	
	{"p":"toru","s":"coger","r":"取る","o":["双る","耶る"],"change":{"Oro":"取る"}}, // 27
	{"p":"katana","s":"espada","r":"刀","o":["力","か"]},
	{"p":"chicara","s":"fuerza, vigor","r":"力","o":["刀","か"]},
	{"p":"ka","s":"sílaba, hiragana","r":"か","o":["刀","力"]},
	
	{"p":"bun","s":"minuto, parte","r":"分","o":["か","力"]}, // 28
	{"p":"wakaru","s":"saber, entender","r":"分かる","o":["力かる","刀かる"]},
]

var dialogos={
	"inicio":[
		{"t":"¡Funcionó!", "pj":"c_nami"},
		{"t":"Gracias por venir. Supongo que te debo una explicación: Te he invocado por que necesito tu ayuda."},
		{"t":"Me llamo Nami Kitsune y soy la bibliotecaria de la escuela de criaturas mágicas."},
		{"t":"Estos son los subterráneos de la escuela. Un importante libro llamado \"Mahou no kotoba\" se han perdido por aquí."},
		{"t":"Y creo que hay estudiantes persiguiéndolo, que temo que se metan en líos."},
		{"t":"Luego te daré más detalles pero es importante que nos demos prisa."},
		{"t":"Necesito que me guies por estos pasillos y me ayudes si surge algún peligro."},
		{"t":"Pero antes de nada registremos los muebles de esta sala. Siento que hay magia cerca."}
	],
	"Escaleras arriba":[
		{"t":"Esas escaleras llevan de vuelta a la escuela.", "pj":"c_nami"},
		{"t":"Puedo enseñarte la escuela más tarde si quieres, pero ahora no tenemos tiempo."},
	],
	"Armario roto":[
		{"find":"page", "feat":"Movimiento ágil"},
		{"t":"¡Una hoja del libro! Esto era lo que sentía.", "pj":"c_nami"},
		{"t":"Pero ¿Por qué está el libro perdiendo hojas? Algo extraño ocurre."},
		{"t":"Lo bueno es que pueden ayudarte a aprender magia."},
		{"t":"Esta por ejemplo te puede enseñar a volar más rápido. Te aconsejo aprenderla cuanto antes."}
	],
	"primeraSubida":[
		{"t":"¡Enhorabuena! Acabas de subir de nivel.", "pj":"c_nami"},
		{"t":"Sólo por subir de nivel tu aura, hechizos y velocidad han mejorado, pero además puedes escoger una nueva habilidad."},
		{"t":"Busca una habilidad que te interese de la página de la derecha, pulsa en ella y después dale al botón de mejorar."},
	],
	"Habla del libro":[
		{"find":"page", "feat":"Absorver energía ambiental"},
		{"t":"¡Otra hoja! En este caso habla sobre como recoger energía del ambiente.", "pj":"c_nami"},
		{"t":"Este conocimiento te será muy útil. Este lugar rebosa energía, y la necesitarás para lanzar hechizos."},
		{"t":"En cualquier caso me preocupa ver que el libro está perdiendo hojas, me pregunto por qué será."},
		{"t":"Quizás las deje por alguna razón, o esté creando otras nuevas y necesite espacio."},
	],
	"vesPrimerEneimgo":[
		{"t":"¡Cuidado! Esa masa azul que se mueve es un limo tóxico.", "pj":"c_nami"},
		{"t":"No puedo acercarme a eso o me intoxicará, pero puedes eliminarlo usando tu magia."},
		{"t":"Simplemente pulsa sobre eso para lanzarle una bola de energía."},
	],
	"eliminasPrimerEnemigo":[
		{"t":"¡Buen trabajo! Has acabado con el limo.", "pj":"c_nami"},
		{"t":"Debería haber soltado la energía espiritual que lo mantenía en pie."},
		{"t":"Yo no puedo verla, pero si puedes recógela. La necesitarás."},
		{"t":"Habrás gastado energía al lanzar hechizos, así que te vendrá bien reponerla."},
	],
	"Frasco inicial":[
		{"t":"Estos frascos debían de contener productos alquímicos.", "pj":"c_nami"},
		{"t":"Deben ser el origen de los limos que hemos visto."},
		{"t":"El poder del libro puede haberles insuflado energía espiritual, dándoles la vida."},
	],
	"Armario laboratorio":[
		{"find":"page", "feat":"Ataque frecuente"},
		{"t":"Hmmm... aquí habla sobre cómo lanzar tus ataques de energía más rápidamente.", "pj":"c_nami"},
		{"t":"Puede ser interesante para acabar antes con los monstruos, pero ten cuidado."},
		{"t":"Asegúrate de tener suficiente energía, o no te servirá de nada disparar rápidamente."},
	],
	"Mesa experimentos":[
		{"t":"Vaya, esto parece que fué algún tipo de equipo alquímico.", "pj":"c_nami"},
		{"t":"Este piso debe ser algún tipo de laboratorio."},
		{"t":"Por si te interesa, estos subterráneos pertenecieron a una civilización ya desaparecida."},
		{"t":"Por supuesto a nosotros no nos gusta vivir bajo tierra, así que lo dejamos abandonado."}
	],
	"Estantería laboratorio":[
		{"find":"page", "feat":"Aura ampliada"},
		{"t":"Un trabajo sobre el aura... te vendrá bien.", "pj":"c_nami"},
		{"t":"El aura se puede definir como la forma mágica de nuestro cuerpo."},
		{"t":"De hecho para ti es tu cuerpo en si, por que no tienes cuerpo físico."},
		{"t":"Ampliar tu aura te puede ayudar a retener mas magia para cuando la necesites."},
	],
	"Agradecer espíritu":[
		{"if":["not",["var","agradecimientoEspiritu"]],"then":[
			{"t":"Ahora que parece que no hay peligro, quería agradecerte lo que estás haciendo.", "pj":"c_nami"},
			{"t":"Se que en estas circunstancias es difícil que pueda conocerte, ya que no podemos ni hablar. Pero creo que debes ser una gran persona."},
			{"t":"Cuando invocamos espíritus de otros planos, habitualmente nos piden algo a cambio. Vosotros en cambio ayudáis sin más."},
			{"t":"Quiero que sepas que cuando esto termine buscaré la manera de ayudaros yo también."},
			{"set":"agradecimientoEspiritu","expresion":["val",true]},
		]}
	],
	"Emboscada":[
		{"if":["not",["var","emboscada"]],"then":[
			{"t":"Eh... parece que algo se mueve ahí.", "pj":"c_nami"},
			{"t":"¡Oh no! ¡Es otro de esos limos!"},
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
			{"t":"Más productos alquímicos. Me pregunto para que los usarían.", "pj":"c_nami"},
		]}
	],
	"Mesa almacén":[
		{"find":"page", "feat":"Ataque potenciado"},
		{"t":"Aquí habla sobre como potenciar los ataques mágicos.", "pj":"c_nami"},
		{"t":"Ten cuidado con esto también, por que potenciar los ataques hará que gasten más energía."},
		{"t":"Vete aprendiendo también hechizos que te ayuden a recuperar energía."},
	],
	"Nada":[
		{"t":"No parece haber nada interesante aquí.", "pj":"c_nami"},
	],
	"Estatua":[
		{"if":["not",["var","estatuaVista"]],"then":[
			{"t":"Estos debieron ser los antiguos que crearon este subterráneo.", "pj":"c_nami"},
			{"t":"En estas estatuas no es fácil reconocer como eran, aunque he visto ilustraciones suyas."},
			{"t":"Lo que no se sabe mucho es como era su sociedad."},
			{"t":"Se supone que dominaban una magia muy poderosa. Me da un poco de miedo, la verdad."},
			{"t":"Pero lo más extreño de esa raza es por qué desaparecieron."},
			{"set":"estatuaVista","expresion":["val",true]},
		],"else":[
			{"t":"Otra estatua igual a lo anterior. O eran muy similares, o debió ser alguien importante.", "pj":"c_nami"},
		]}
	],
	"Biblioteca":[
		{"if":["not",["var","estatuaVista"]],"then":[
			{"t":"Esto parece haber sido una biblioteca, aunque no queda ningún libro.", "pj":"c_nami"},
			{"t":"Probablemente fuesen libros de alquimia para los laboratorios."},
			{"t":"Se habrán estropeado con el tiempo, al fin y al cabo han pasado siglos desde la desaparición de los antiguos."},
			{"t":"Tenían capacidad para hacer libros mejores con su magia, pero la mayoría eran libros normales."},
			{"t":"Por cierto, el libro que buscamos es uno de esos libros mágicos que crearon los antiguos."},
			{"set":"estatuaVista","expresion":["val",true]},
		],"else":[
			{"t":"Me da pena ver una biblioteca sin libros.", "pj":"c_nami"},
		]}
	],
	"Estantería biblioteca":[
		{"find":"page", "feat":"Movimiento ágil"},
		{"t":"Otra página sobre como mejorar los movimientos en vuelo...", "pj":"c_nami"},
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
		{"t":"Apostaría a que tiene un objetivo."},
	],
	"Mesa animales":[
		{"find":"page", "feat":"Atraer partículas"},
		{"t":"Dejame ver... Este capítulo habla de como atraer partículas de energía.", "pj":"c_nami"},
		{"t":"Como esas que salen de los limos cuando son eliminados."},
		{"t":"La energía se mantiene concentrada durante tan solo unos segundos, luego se dispersa y no se puede recuperar."},
		{"t":"Por eso esta clase de técnicas puede ser muy útil."},
		{"t":"Obviamente sólo sirve para espíritus. Los seres corpóreos no tenemos la posibilidad de usarlo."},
		{"t":"Nunca lo había pensado, pero este ligro tiene un montón de invormación que los magos no podemos usar."},
	],
	"Jaula":[
		{"if":["var","primeraJaula"],"then":[
			{"t":"¡Vaya! Esto parecen jaulas.", "pj":"c_nami"},
			{"t":"Me acaba de entrar un escalofrío. Probablemente fuesen para animales usados en experimentos."},
			{"t":"Según parece los Antiguos podían ser bastante crueles. Incluso sádicos."},
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
		{"t":"Usamos las gemas para almacenar energía espiritual, así que quizás sea de una de los estudiantes que bajó."},
		{"t":"De hecho me suena que la he visto antes, aunque no recuerdo de quién era."},
		{"t":"Pobres, probablemente crean que tienen la culpa de lo que haya pasado con el libro."},
		{"t":"La verdad es que el libro tiene voluntad propia, y lo que esté haciendo debe tener otro motivo."},
		{"t":"En cualquier caso cogeré la gema, Quizás la necesite más adelante."},
	],
	"Mesa operaciones":[
		{"t":"Esto parece una enfermería. O algo así...", "pj":"c_nami"},
		{"t":"Y aquí hay otra página que... parece interesante."},
		{"t":"¡Contiene el hechizo de curación! Te aconsejo aprender este rápidamente."},
		{"t":"Es irónico que el libro haya dejado esta página justo aquí. Supongo que entra dentro de su lógica."},
		{"t":"El no entiende las cosas como una persona, pero intenta copiar nuestra lógica."},
		{"addSpell":"Curar"},
		{"search":"normal"},
	],
	"Curame":[
		{"t":"Ahora que ya conoces el hechizo de curación ¿podrías curarme?", "pj":"c_nami"},
		{"t":"Estando herida hago peor las cosas y camino más despacio."},
		{"t":"Y no quiero gastar mi propia energía por que no la puedo recuperar tan facilmente como tú."},
		{"t":"Se supone que arriba debes ver una estrella en azul."},
		{"t":"Si la tocas aparecerá un corazón en rojo."},
		{"t":"Toca en ese corazón y después a mi para lanzar el hechizo."},
		{"t":"Así me han dicho que funciona para vosotros hacer la magia, aunque no entienda por qué."},
	],
	"Cama":[
		{"if":["var","primeraCama"],"then":[
			{"t":"Me pregunto que clase de personas ocuparon estas camas.", "pj":"c_nami"},
			{"t":"Quiero creer que serían magos que sufrieron accidentes haciendo experimentos, pero..."},
			{"t":"He leído demasiadas cosas raras sobre los Antiguos..."},
			{"t":"Aunque supongo que no puedes juzgar a otras culturas con nuestros ojos."},
			{"set":"primeraCama","expresion":["val",false]},
		],"else":[
			{"t":"Si esto eran camas, no parece que fuesen muy cómodas.", "pj":"c_nami"},
			{"t":"Nuestras camas están todas mejoradas mágicamente para ser ideales."},
			{"t":"Claro que quizás los Antiguos no tuviesen esa posibilidad."},
			{"t":"Aunque sabían más de magia que nosotros, no eran criaturas mágicas en si."},
		]}
	],
	"Trata de comunicar":[
		{"t":"Antes de seguir... quería preguntarte algo.", "pj":"c_nami"},
		{"t":"Puedo intentar usar la telepatía para comunicarme contigo, pero no quiero hacerlo sin tu permiso."},
		{"t":"Hagamos una cosa, si estás deacuerdo, acércate a mi, y si no, aléjate de mi ¿Te parece?."},
		{"opciones":[
			{"t":"Si (acercarte)","a":[
				{"t":"Está bien, déjame concentrarme.", "pj":"c_nami"},
				{"t":"Mmmmmm."},
				{"t":"Nada, lo siento, capto pensamientos inconexos, pero no puedo entenderlos del todo."},
				{"t":"A veces pasa, las mentes espirituales son difíciles de leer."},
			]},
			{"t":"No (alejarte)","a":[
				{"t":"Está bien, respeto tu decisión.", "pj":"c_nami"},
			]}
		]},
		{"t":"Al menos hemos encontrado una manera de que me puedas decir si o no."},
		{"t":"Aprovechando eso, quería preguntarte algo ¿Te gustaría venir a la escuela en el futuro?"},
		{"t":"Se que en tu mundo no eres una criatura mágica, pero aquí si, así que podrías estudiar en nuestra escuela."},
		{"opciones":[
			{"t":"Si (acercarte)","a":[
				{"t":"¡Genial! Me gustaría conocerte en persona.", "pj":"c_nami"},
				{"t":"Nuestra directora está trabajando en ello, junto con la reina de las hadas de tu mundo."},
				{"t":"Si finalmente vienes aquí te aseguro que será muy divertido."},
			]},
			{"t":"No (alejarte)","a":[
				{"t":"Oh, vaya. Pues espero poder buscar otra forma de agradecértelo.", "pj":"c_nami"},
				{"t":"De verdad que me estás ayudando mucho."},
			]}
		]},
	],
	"Cristal":[
		{"t":"¡Mira! Esto es un cristal del alma. Un cristal vivo.", "pj":"c_nami"},
		{"t":"Son lo que da vida a la escuela."},
		{"t":"En cualquier caso al estar vivo puede almacenar recuerdos."},
		{"t":"Quizás con un hechizo pueda ver lo que ocurrió aqui."},
		{"t":"思い出を見せて。"},
		{"t":"¡Funcionó! ¡Mira!"},
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
		{"t":"No creo que hayan tomado este camino, debemos seguir buscando.", "pj":"c_nami"},
	],
	"Niña":[
		{"t":"Hablaré con esa persona. No me suena haberla visto.", "pj":"c_nami"},
		{"t":"あなたは大丈夫ですか？"},
		{"t":"はい。", "pj":"c_nina","r":1},
		{"t":"あなたの名前は何ですか？", "pj":"c_nami"},
		{"t":"花です。", "pj":"c_nina","r":1},
		{"t":"Dice que se llama Hana, pero no la conozco.", "pj":"c_nami"},
		{"t":"Tampoco lleva el uniforme de la escuela."},
		{"t":"どうやってここに来ましたか？"},
		{"t":"私は知らない。", "pj":"c_nina","r":1},
		{"t":"私たちと一緒に来てください。", "pj":"c_nami"},
		{"t":"はい。", "pj":"c_nina","r":1},
		{"t":"No parece muy habladora, quizás esté asustada.", "pj":"c_nami"},
		{"t":"Le he dicho que nos acompañe, por favor, cuida de que no le pase nada."},
		{"add_party":"Niña"},
	],
	"Gran puerta":[
		{"t":"Vaya, está cerrada. Y eso son protecciones de los antiguos.", "pj":"c_nami"},
		{"t":"Quizás sea una medida de protección ante la presencia de monstruos."},
		{"t":"Es magia olvidada, y demasiado poderosa. No sabría deshacerla."},
		{"t":"Debe haber otra manera de abrir la puerta, o desactivar las protecciones."},
		{"set":"puertaVista","expresion":["val",true]},
	],
	"colector":[
		{"t":"¡Vaya! Esto parece un acumulador de energía espiritual de los antiguos.", "pj":"c_nami","r":1},
		{"t":"Es extraño, debería estar completamente agotado..."},
		{"t":"Quizás la presencia de hojas del libro esté generando energía. Por eso debemos recuperarlas todas."},
		{"t":"De hecho sería bueno también vaciar este acumulador."},
		{"if":["var","puertaVista"],"then":[
			{"t":"Puede ser lo que ha bloqueado la puerta. Si lo vaciamos podremos pasar."},
		],"else":[
			{"t":"Puede estar activando artefactos desconocidos de este nivel."},
		]},
		{"t":"No entiendo del todo esta tecnología, pero creo saber como hacerlo."},
		{"t":"Lo que contiene es energía espiritual. Podrías absorverla si te metes en la esfera."},
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
						{"t":"Sientes como si una onda de energía atravesase toda la sala.","pj":"none"},
						{"t":"¡Vaya! Esperaba que se hubiese disipado, pero parece que la energía continua aquí.", "pj":"c_nami","r":1},
						{"t":"Si es así temo que pueda haber afectado a otras criaturas."},
					]}
				]},
			]}
		]},
		{"if":["var","energiaAbsorvida"],"then":[
			{"t":"Tan pronto como te introduces en la esfera sientes como una gran energía te inunda.","pj":"none"},
			{"t":"Pero hay algo extraño..."},
			{"changeFrame":"colector","frame":"inactivo"},
			{"changeSpirit":"spirit2"},
			{"t":"¡Oh! ¡Has cambiado!", "pj":"c_nami","r":1},
			{"t":"No contaba con que la energía en el colector procedía del libro."},
			{"t":"En principio no debería de haber problema, pero estaré atenta por si algo pasa."},
		]},
		{"changeFrame":"Gran puerta","frame":"abierta"},
		{"unblock":"Gran puerta"},
	],
	"Cristal2":[
		{"t":"Otro cristal! Lanzaré el hechizo de nuevo.", "pj":"c_nami"},
		{"t":"思い出を見せて。"},
		{"t":"これは危険です。", "pj":"c_mei","opacity":0.5},
		{"t":"戻るべきだよ。", "opacity":0.5},
		{"t":"いいえ。", "pj":"c_hikari","r":1,"opacity":0.5},
		{"t":"私はあなたと一緒にいたいです。","opacity":0.5},
		{"t":"Parece que Mei es consciente del peligro, pero Hikari no quiere dejarla.", "pj":"c_nami"},
		{"t":"Hikari es demasiado inexperta, estaría más segura si volviese."},
		{"t":"De todas maneras confío en que Mei pueda protegerla."},
	],
	"Escaleras salida":[
		{"t":"¡Noto la energía del libro por aquí!", "pj":"c_nami"},
		{"t":"Es evidente que han bajado a otro nivel."},
		{"t":"Espero que no haya llegado muy lejos."},
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
		{"t":"Intenta memorizarlos bien antes de continuar, por que el libro te hará preguntas. Cuantas más aciertes, más mejorará tu magia."},
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
		{"t":"Empezamos por los más sencillos por que además estos se usan en otros más complejos."},
		{"t":"Estos se llaman radicales, y conocer estos ayuda a aprender los otros."},
		{"t":"Fíjate por ejemplo en el kanji de luna 月 (tsuki), que te enseñaré más adelante en otro kanji más complejo."},
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
		{"t":"Otro símbolo interesante es は (ha), que más adelante veremos que no simepre se pronuncia así."},
	],
	"teoria_particula_wa":[
		{"t":"Otra partícula importante es la partícula は (wa).", "pj":"c_nami"},
		{"t":"Como verás se escribe como el hiragana は (ha), pero se pronuncia \"wa\". Esto nos indica que es la partícula de tema."},
		{"t":"Esta partícula se coloca detrás de una palabra para indicar que esta es el tema principal de la frase."},
		{"t":"Por ejemplo あなたは (anata wa) es como decir: \"hablando de ti\" o \"Respecto a ti\"."},
	],
}

/*
思い出を見せて

これ
危険
戻る
べき
だ (verbo ser)
よ (exclamación)
いたい / iru
いいえ

べ
き
れ
え

これは危険です。
戻るべきだよ。
いいえ
私はあなたと一緒にいたいです。


Mei Yumeko

どこですかそにく
どこですか にく

あなたは大丈夫？
はい
あなたの名前は何ですか？
花
どうやってここに来ましたか？
私は知らない。
私たちと一緒に来てください。
はい


あなた
は
大
夫
大丈夫
はい
の
名前
何
どうやって
ここ
来る
来ました
私
しらちとださ



radicales: 配私緒知名前(7)
¿60? (/4 > 15)
Cuestiones iniciales ¿Qué es este lugar?

50
大
夫
私
来
一
知
8

あなた
大丈夫
です
はい
名前
何
花
どうやって
来た
知りません
しないで
私たちと
一緒に
来て
ください
16


あなたはですかはいのどうやってりませんしくださちとに
26

矢 ya flecha
知 chi, sabiduría
知る shiru, saber
来ました

分かる

力 chicara fuerza. vigor

取る toru coger


取耳又
目月日
文 bun frase
又 mata además


宝 Takara / tesoro

金全今


	本
	閉
	じ
	る
	閉じる
	く
	開く
	取る
	"Libros":"Libros", 本 hon
	"Cerrar libro":"Cerrar libro",本を閉じる。  hon wo tojiru
	"Oro":"Oro", 金 kin
	"Coger":"Coger", 取る toru
	"Tesoro":"Tesoro", 宝箱 takarabako

	"Abrir":"Abrir", 開く hikaru
	
	"Menú":"Menú", メニュー (index) 索引
	"Diccionario":"Diccionario", 辞書 jisho
	"Entrenamiento":"Entrenamiento", 
	
	"Entrenar":"Entrenar", 訓練する
	"Habilidades":"Habilidades",
	"Ataque":"Ataque", 攻撃 kougeki
	"Curación":"Curación", 治す (naosu)
	
	
	"¡Monstruos!":"¡Monstruos!", 化け物 bakemono
	"¡Victoria!":"¡Victoria!", 勝利 shoury
	"Selecciona personaje":"Selecciona personaje",
	"Escoge acción":"Escoge acción",
	"Atacar":"Atacar", 攻撃する kougeki suru
	"Escoge un monstruo":"Escoge un monstruo", モンスターを選ぶ monsta- wo erabu
	"Los monstruos atacan":"Los monstruos atacan" モンスターが攻撃する - mosta- ga kougeki suru
	
	

*/