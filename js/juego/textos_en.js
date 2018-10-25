var textos={
	"Abrir":"Open",
	"Jugar":"Play",
	
	"Menú":"Menu",
	"Diccionario":"Dictionary",
	"Entrenamiento":"Training",
	"Créditos":"Credits",
	
	"Palabra":"Word",
	"Romaji":"Romaji",
	"Significado":"Meaning",
	"Practicar":"Practice",
	"Nivel":"Level",
	
	"Entrenar":"Train",
	"Habilidades":"Skills",
	"Mejora":"Improve",
	
	"Salir":"Exit",
	
	"Volar":"Fly",
	"Atacar":"Attack",
	"Curar":"Heal",
	"Energía espiritual":"Spiritual energy",
	
	"Avance habilidad":"Skill improved",
	"¡Nivel alcanzado!":"¡Level up!",
	
	"Avaliable improvements":"Avaliable improvements",
	"Mejorar habilidad":"Improve skill",
	
	"Comunes":"Common",
	"Energía":"Energy",
	"Ataque":"Attack",
	"Curación":"Heal",
	"Protección":"Protection",
	
	"Encuentras":"You find",
	"Oro":"Gold",
	"Páginas":"Pages",
	"Gema":"Gem",
	"Cerrar":"Close",
	"Aprender":"Learn",
	
	// Nombres dotes
	"Movimiento ágil":"Agile movement",
	"Ataque potenciado":"Attack enhanced",
	"Bala acelerada":"Accelerated bullet",
	"Aura ampliada":"Extended aura",
	"Ataque frecuente":"Frequent attack",
	"Absorver energía ambiental":"Environmental energy",
	"Atraer partículas":"Attract particles",
	"Balas seguidoras":"Tracking bullets",
	"Curación potenciada":"Enhanced healing",
	"Curar en grupo":"Heal in group",
	"Escudo en grupo":"Shield in group",
	"Escudo potenciado":"Enhanced shield",
	"Hechizo de curar":"Heal spell",
	"Hechizo de escudo":"Shield spell"
}

var preguntas=[
	{"p":"do","s":"hiragana syllabary","r":"ど","o":["で","こ"],"snd":"do","teoria":"teoria_hiragana"}, // 1
	{"p":"de","s":"hiragana syllabary","r":"で","o":["ど","く"],"snd":"de"},
	{"p":"su","s":"hiragana syllabary","r":"す","o":["そ","で"],"snd":"su"},
	{"p":"so","s":"hiragana syllabary","r":"そ","o":["す","こ"],"snd":"so"},
	
	{"p":"ku","s":"hiragana syllabary","r":"く","o":["こ","か"],"snd":"ku"}, // 2
	{"p":"ko","s":"hiragana syllabary","r":"こ","o":["に","く"],"snd":"ko"},
	{"p":"ka","s":"indicates question","r":"か","o":["こ","く"],"snd":"ka","teoria":"teoria_ka_y_ni"},
	{"p":"ni","s":"indicates direction","r":"に","o":["こ","そ"],"snd":"ni"},
	
	{"p":"doko","s":"where","r":"どこ","o":["です","そこ"],"snd":"doko","teoria":"teoria_palabras_hiragana_kanji_verbos"}, // 3
	{"p":"soko","s":"there","r":"そこ","o":["です","どこ"],"snd":"soko"},
	{"p":"desu","s":"to be","r":"です","o":["そこ","どこ"],"snd":"desu"},
	{"p":"iku","s":"go","r":"行く","o":["徂く","早く"],"snd":"iku"},
	
	
	{"p":"kuchi","s":"mouth","r":"口","o":["十","日"],"snd":"kuchi","teoria":"teoria_radicales"}, // 4
	{"p":"hi","s":"day, sun","r":"日","o":["目","口"],"snd":"hi"},
	{"p":"me","s":"eye","r":"目","o":["耳","月"],"snd":"me"},
	{"p":"tsuki","s":"month, moon","r":"月","o":["目","耳"],"snd":"tsuki"},
	
	{"p":"juu","s":"ten","r":"十","o":["口","日"],"snd":"juu"}, // 5
	{"p":"hayaku","s":"quickly","r":"早く","o":["行く","古く"],"snd":"hayaku"}, // Faltan dos de gramática dokodesuka y sokoniku
	{"p":"doko desu ka","s":"Where it is?","r":"どこですか","o":["Va por allí."],"t":"trad","snd":"doko_desu_ka","teoria":"teoria_estructura_frase"},
	{"p":"soko ni iku","s":"There it goes.","r":"そこに行く","o":["¿Dónde está?"],"t":"trad","snd":"soko_ni_iku"},
	
	/*
		どこですか？
		そこに行く！
		早く！
	*/
	
	{"p":"a","s":"hiragana syllabary","r":"あ","o":["お","な"],"snd":"a"}, // 6
	{"p":"na","s":"hiragana syllabary","r":"な","o":["た","す"],"snd":"na","teoria":"teoria_diferencias_na_ta"},
	{"p":"ta","s":"hiragana syllabary","r":"た","o":["な","に"],"snd":"ta"},
	{"p":"ha","s":"hiragana syllabary","r":"は","o":["な","ほ"],"snd":"ha"},
	
	{"p":"anata","s":"you","r":"あなた","o":["おなた","あたな"],"snd":"anata"}, // 7
	{"p":"wa","s":"indicates main topic","r":"は","o":["な","ほ"],"snd":"wa","teoria":"teoria_particula_wa"},
	{"p":"anata wa","s":"about you","r":"あなたは","o":["おなたは","あなたほ"],"snd":"anata_wa"},
	{"p":"no","s":"de, indicates relationship","r":"の","o":["お","は"],"snd":"no"},
	
	{"p":"hito","s":"person","r":"人","o":["大","夫"],"snd":"hito"}, //8
	{"p":"otto","s":"husband","r":"夫","o":["大","本"],"snd":"otto"},
	{"p":"dai","s":"big (prefix)","r":"大","o":["犬","夫"],"snd":"dai","teoria":"teoria_sufijos"},
	{"p":"inu","s":"dog","r":"犬","o":["大","夫"],"snd":"inu"},
	
	{"p":"i","s":"hiragana syllabary","r":"い","o":["の","は"],"snd":"i"}, //9
	{"p":"hai","s":"yes","r":"はい","o":["はの","ほい"],"snd":"hai"},
	{"p":"daijoubu","s":"all right","r":"大丈夫","o":["丈大夫","夫丈大"],"snd":"daijoubu"},
	{"p":"namae","s":"name","r":"名前","o":["夘前","名苅"],"snd":"namae","teoria":"teoria_palabras_complejas_y_radicales"},
	
	{"p":"u","s":"hiragana syllabary","r":"う","o":["つ","て"],"snd":"u"}, //10
	{"p":"ya","s":"hiragana syllabary","r":"や","o":["つ","う"],"snd":"ya"},
	{"p":"te","s":"hiragana syllabary","r":"て","o":["で","と"],"snd":"te","teoria":"teoria_variación_te_de"},
	{"p":"ru","s":"hiragana syllabary","r":"る","o":["う","ろ"],"snd":"ru"},
	
	{"p":"ya","s":"arrow","r":"矢","o":["本","来"],"snd":"ya"}, //11
	{"p":"rai","s":"next (prefix)","r":"来","o":["本","矢"],"snd":"rai"},
	{"p":"ki","s":"tree","r":"木","o":["本","夫"],"snd":"ki"},
	{"p":"hon","s":"book","r":"本","o":["来","矢"],"snd":"hon","teoria":"teoria_hon_ki"},
	
	{"p":"shi","s":"hiragana syllabary","r":"し","o":["て","と"],"snd":"shi"}, //12
	{"p":"ra","s":"hiragana syllabary","r":"ら","o":["ち","ろ"],"snd":"ra"},
	{"p":"chi","s":"hiragana syllabary","r":"ち","o":["ら","ろ"],"snd":"chi"},
	{"p":"to","s":"with","r":"と","o":["て","ど"],"snd":"to","snd":"to","teoria":"teoria_to_do"},
	
	{"p":"shiru","s":"to know","r":"知る","o":["利る","如る"],"snd":"shiru"}, //13
	{"p":"kuru","s":"come","r":"来る","o":["本る","矢る"],"snd":"kuru"},
	{"p":"issho","s":"together","r":"一緒","o":["一紙","一偖"],"snd":"issho"},
	{"p":"watashi tachi","s":"we","r":"私たち","o":["利たち","私たら"],"snd":"watashi_tachi","teoria":"teoria_watashi_tachi"},
	
	{"p":"hana","s":"flower","r":"花","o":["化","苻"],"snd":"hana"}, //14
	{"p":"nani","s":"what","r":"何","o":["化","同"],"snd":"nani"},
	{"p":"koko","s":"here","r":"ここ","o":["たた","にに"],"snd":"koko"},
	{"p":"kimashita","s":"came (to come)","r":"来ました","o":["矢ました","木ました"],"snd":"kimashita","teoria":"teoria_pasado_formal"},
	
	{"p":"douyatte","s":"in which way","r":"どうやって","o":["とうやって","とうやっで"]}, //15
	{"p":"kudasai","s":"please","r":"ください","o":["くだとい","くたさい"],"snd":"kudasai"},
	{"p":"kite kudasai","s":"come, please","r":"来てください","o":["とうやって","とうやっで"],"teoria":"teoria_forma_te_kudasai_y_nai"},
	{"p":"watashi wa shiranai","s":"I don't know","r":"私は知らない","o":["利らない","如らない"]},
	
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
	
	{"p":"re","s":"hiragana syllabary","r":"れ","o":["わ","ね"]}, //20
	{"p":"be","s":"hiragana syllabary","r":"べ","o":["へ","づ"],"teoria":"teoria_he_be"},
	{"p":"ki","s":"hiragana syllabary","r":"き","o":["ぎ","さ"]},
	{"p":"e","s":"hiragana syllabary","r":"え","o":["う","そ"]},
	
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
	{"p":"watashi tachi to issho ni","s":"Junto con nosotros","r":"ここに来ましたか","o":["Ir contigo","Ven con nosotros"],"t":"trad"},  // Corregir, faltan frases finales
	
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
		{"t":"It worked!", "pj":"c_nami"},
		{"t":"Thanks for coming. I suppose I owe you an explanation: I have summoned you because I need your help."},
		{"t":"My name is Nami Kitsune and I'm the librarian of the school for magical creatures."},
		{"t":"These are the undergrounds of the school. An important book called \"Mahou no kotoba\" is lost here."},
		{"t":"And I think there are students chasing it, that I'm afraid they might get into troubles."},
		{"t":"I will give you more details later, but it is important that we hurry up."},
		{"t":"I need you to guide me through these corridors and help me if there is any danger."},
		{"t":"But first of all let's take a look at the furniture in this room. I feel there is magic nearby."}
	],
	"Escaleras arriba":[
		{"t":"Those stairs take you back to school.", "pj":"c_nami"},
		{"t":"I can show you the school later if you want, but now we don't have time."},
	],
	"Armario roto":[
		{"find":"page", "feat":"Movimiento ágil"},
		{"t":"A page of the book! This is what I sensed.", "pj":"c_nami"},
		{"t":"But, why is the book losing pages? Something weird happens there."},
		{"t":"The good thing is that this can help you learn magic."},
		{"t":"This one can teach you to fly faster. I suggest you to learn it as soon as possible."}
	],
	"primeraSubida":[
		{"t":"Congratulations! You just level up.", "pj":"c_nami"},
		{"t":"Just by leveling up your aura, spells and speed have improved, but you can also choose a new skill."},
		{"t":"Search for a skill that interests you from the right page, click on it and then click on the improve button."},
	],
	"Habla del libro":[
		{"t":"¡Otra hoja!.", "pj":"c_nami"},
		{"t":"No creas que el libro está defectuoso. Al contrario, lo está haciendo a propósito."},
		{"t":"Ese libro perteneció a grandes hechiceras del pasado, y acabó por adquirir conciencia propia."},
		{"t":"Apostaría a que tiene un objetivo."},
		{"search":"normal"},
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
		{"t":"Pierdes energía poco a poco, y la gastas al atacar o lanzar hechizos, así que te vendrá bien reponerla."},
	],
	"Mesa experimentos":[
		{"t":"Vaya, esto parece que fué algún tipo de equipo alquímico.", "pj":"c_nami"},
		{"t":"Este piso debe ser algún tipo de laboratorio."},
		{"t":"Por si te interesa, estos subterráneos pertenecieron a una civilización ya desaparecida."},
		{"t":"Por supuesto a nosotros no nos gusta vivir bajo tierra, así que lo dejamos abandonado."},
		{"search":"normal"},
	],
	"Frasco inicial":[
		{"t":"Estos frascos debían de contener productos alquímicos.", "pj":"c_nami"},
		{"t":"Deben ser el origen de los limos que hemos visto."},
		{"t":"El poder del libro puede haberles insuflado energía espiritual, dándoles la vida."},
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
	"Mueble":[
		{"search":"normal"},
	],
	"Nada":[
		{"t":"No parece haber nada interesante aquí.", "pj":"c_nami"},
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
		{"t":"¡Aquí hay algo! Parece una gema.", "pj":"c_nami"},
		{"t":"Usamos las gemas para almacenar energía espiritual, así que quizás sea de una de los estudiantes que bajó."},
		{"t":"De hecho me suena que la he visto antes, aunque no recuerdo de quién era."},
		{"t":"Pobres, probablemente crean que tienen la culpa de lo que haya pasado con el libro."},
		{"t":"La verdad es que el libro tiene voluntad propia, y lo que esté haciendo debe tener otro motivo."},
		{"t":"En cualquier caso cogeré la gema, Quizás la necesite más adelante."},
		{"search":"gema"},
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
		{"t":"Look! This is a soul crystal. A living crystal", "pj":"c_nami"},
		{"t":"They are what gives life to the school."},
		{"t":"In any case, being alive can store memories."},
		{"t":"Maybe with a spell I can see what happened here."},
		{"t":"思い出を見せて。"},
		{"t":"It worked! Look!"},
		{"t":"どこですか？", "pj":"c_hikari","r":1,"opacity":0.5},
		{"t":"そこに行く！", "pj":"c_mei","opacity":0.5},
		{"t":"早く！", "pj":"c_hikari","r":1,"opacity":0.5},
		{"t":"They are Hikari and Mei!", "pj":"c_nami"},
		{"t":"It seems that they are looking for the book."},
		{"t":"I'm glad Mei is here, Hikari is new in the school and could be in danger, but Mei ... is special."},
		{"t":"The important thing is that we are on the right track."},
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
		{"t":"Here you will learn to use your powers.", "pj":"c_nami"},
		{"t":"You will learn to use spells as you learn the language of magic."},
		{"t":"These symbols are hiragana, and represent sounds. For example \"do\" in our language is written ど."},
		{"t":"Try to memorize them before continuing, because the book will ask you questions. The more you answer right, the more your magic will improve."},
	],
	"teoria_ka_y_ni":[
		{"t":"Look at か (ka) and に (ni). They are not simple sounds, but \"particles\" that have a special use in our language.", "pj":"c_nami"},
		{"t":"か (ka) is placed at the end of the sentences to indicate that the sentence is a question. Later we will see examples."},
		{"t":"に (ni) is put behind a word to indicate an direction among other things."},
		{"t":"In many cases the particles are similar to your prepositions."},
	],
	"teoria_palabras_hiragana_kanji_verbos":[
		{"t":"By joining the sounds we have seen we can form words. For example: ど こ (doko), which means \"where\".", "pj":"c_nami"},
		{"t":"But not all words are written in hiragana. Some use kanjis, like 行く (iku) which is the verb \"go\"."},
		{"t":"行く ends in く (ku), which is a hiragana that we have already seen. But it starts with a symbol that we do not know: 行, which in this case is read as \"i\"."},
		{"t":"If you look at the difference of the symbols in kanji and hiragana, the kanjis are more complicated and are mostly made with straight lines."},
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