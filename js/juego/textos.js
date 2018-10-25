var textos={
	"Abrir":"Abrir",
	"Jugar":"Jugar",
	
	"Menú":"Menú",
	"Diccionario":"Diccionario",
	"Entrenamiento":"Entrenamiento",
	"Cerrar libro":"Cerrar libro",
	
	"Palabra":"Palabra",
	"Romaji":"Romaji",
	"Significado":"Significado",
	"Practicar":"Practicar",
	"Nivel":"Nivel",
	
	"Entrenar":"Entrenar",
	"Libros":"Libros",
	"Habilidades":"Habilidades",
	"Mejora":"Mejora",
	
	"Atacar":"Atacar",
	"Curar":"Curar",
	
	"Tesoro":"Tesoro",
	"Oro":"Oro",
	"Coger":"Coger",
	
	"¡Monstruos!":"¡Monstruos!",
	"¡Victoria!":"¡Victoria!",
	"Selecciona personaje":"Selecciona personaje",
	"Escoge acción":"Escoge acción",
	"Atacar":"Atacar",
	"Escoge un monstruo":"Escoge un monstruo",
	"Los monstruos atacan":"Los monstruos atacan"
}

var preguntas=[
	{"p":"hito","s":"persona","r":"人","o":["大","夫"]},
	{"p":"inu","s":"perro","r":"犬","o":["大","夫"]},
	{"p":"ki","s":"árbol","r":"木","o":["本","夫"]},
	{"p":"hon","s":"libro","r":"本","o":["木","夫"],"change":{"Libros":"本"}},
	{"p":"dai","s":"grande (prefijo)","r":"大","o":["犬","夫"]},
	{"p":"otto","s":"marido","r":"夫","o":["大","本"]},
	
	{"p":"ou","s":"rey","r":"王","o":["玉","国"]},
	{"p":"tama","s":"bola, esfera","r":"玉","o":["国","宝"]},
	{"p":"kuni","s":"pais, estado","r":"国","o":["玉","全"]},
	{"p":"takara","s":"tesoro","r":"宝","o":["玉","国"],"change":{"Tesoro":"宝"}},
// 10	
	{"p":"zen","s":"todo, por completo","r":"全","o":["金","今"]},
	{"p":"kin","s":"oro","r":"金","o":["全","今"],"change":{"Oro":"金"}},

	{"p":"ima","s":"ahora","r":"今","o":["会","金"]},
	{"p":"kai","s":"reunión","r":"会","o":["全","今"]},
	
	{"p":"hi","s":"día, sol","r":"日","o":["目","月"]},
	{"p":"tsuki","s":"mes, luna","r":"月","o":["目","耳"]},
	
	{"p":"me","s":"ojo","r":"目","o":["耳","月"]},
	{"p":"mimi","s":"oreja","r":"耳","o":["目","月"]},
	
	{"p":"bun","s":"frase","r":"文","o":["又","夂"]},
	{"p":"mata","s":"además","r":"又","o":["文","夂"]},
// 20	
	{"p":"ru","s":"sílaba, hiragana","r":"る","o":["ろ","ら"]},
	{"p":"ro","s":"sílaba, hiragana","r":"ろ","o":["る","ら"]},
	
	{"p":"toru","s":"coger","r":"取る","o":["双る","耶る"],"coger":{"Oro":"取る"}},
	
	{"p":"katana","s":"espada","r":"刀","o":["力","か"]},
	{"p":"chicara","s":"fuerza, vigor","r":"力","o":["刀","か"]},
	
	{"p":"ka","s":"sílaba, hiragana","r":"か","o":["刀","力"]},
	{"p":"bun","s":"minuto, parte","r":"分","o":["か","力"]},
	
	{"p":"wakaru","s":"saber, entender","r":"分かる","o":["力かる","刀かる"]},
]

var dialogos={
	"inicio":[
		{"t":"¡Funcionó!", "pj":"c_nami"},
		{"t":"Gracias por venir. Sumpongo que te debo una explicación."},
		{"t":"Te he invocado por que necesito tu ayuda."},
		{"t":"Me llamo Nami Kitsune, y soy la bibliotecaria de la escuela de magia."},
		{"t":"Estos son los subterráneos de la escuela. Unos alumnos y un importante libro de magia se han perdido por aquí."},
		{"t":"Luego te daré más detalles, pero es importante que nos demos prisa."},
		{"t":"Necesito que me guies por estos pasillos y me ayudes si surge algún peligro."},
		{"t":"Aquí cerca hay un cofre rojo. Si ves más así, guíame hasta ellos."}
	],
	"primer_tesoro":[
		{"t":"Lo que me temía, el libro está perdiendo hojas.", "pj":"c_nami"},
		{"t":"Es muy importante encontrarlas todas, pues pueden ser necesarias para controlarlo."},
		{"t":"Además puedes utilizarlas para aprender hechizos que nos ayuden."},
		{"t":"Pulsa en la esquina izquierda para volver al libro."}
	]
}

/*
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
心配
しないで
私たちと
一緒に
来て
ください


あなたはですかはいのどうやってりませんしくださちとに

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