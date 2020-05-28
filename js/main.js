/* I18N */
var lang = "CA";
var i18n = window.domI18n({
  selector: '[data-translatable]',
  separator: ' // ',
  languages: ['ca', 'en', 'es'],
  defaultLanguage: 'ca'
});

i18n.changeLanguage('ca');

function changeCatalan(){
  i18n.changeLanguage('ca');
  document.getElementById("cat").classList.add('not-active');
  document.getElementById("esp").classList.remove('not-active');
  document.getElementById("eng").classList.remove('not-active');
  lang = "CA";
  objectTypes = objectTypesCat;
  var element = getElementName(objectTypes);
  changeElementText(element);
}

function changeSpanish(){
  i18n.changeLanguage('es');
  document.getElementById("esp").classList.add('not-active');
  document.getElementById("cat").classList.remove('not-active');
  document.getElementById("eng").classList.remove('not-active');
  lang = "ES";
  objectTypes = objectTypesEsp;
  var element = getElementName(objectTypes);
  changeElementText(element);
}

function changeEnglish(){
  i18n.changeLanguage('en');
  document.getElementById("eng").classList.add('not-active');
  document.getElementById("esp").classList.remove('not-active');
  document.getElementById("cat").classList.remove('not-active');
  lang = "EN";
  objectTypes = objectTypesEng;
  var element = getElementName(objectTypes);
  changeElementText(element);
}

/* MAIN CODE */
var solutionsTxt = '{"0": 1849, "1": 85, "2": 990, "3": 173, "4": 3787, "5": 2838, "6": 87, "7": 947, "8": 132, "9": 85, "10": 87, "11": 1936, "12": 946, "13": 259, "14": 130, "15": 1849, "16": 130, "17": 129, "18": 1937, "19": 3741, "20": 3700, "21": 946, "22": 79594, "23": 89, "24": 89, "25": 89, "26": 1892, "27": 5419, "29": 3739, "30": 257, "31": 1892, "32": 1891, "33": 1892, "34": 173, "35": 177, "36": 216, "37": 2838, "38": 40678, "39": 164561, "40": 3, "41": 174, "42": 136, "43": 174, "44": 3827, "45": 211, "46": 4, "47": 127, "48": 4, "49": 11094, "50": 130, "51": 3828, "52": 132, "53": 133, "54": 134, "55": 87, "56": 130, "57": 173, "58": 1849, "59": 1892, "60": 4, "61": 1, "62": 172, "63": 220, "64": 946, "65": 174, "66": 1893, "67": 1849, "68": 1600, "70": 14965, "71": 17, "72": 87, "73": 172, "74": 1079, "75": 2020, "76": 307, "77": 1, "78": 1891, "79": 80, "80": 87, "81": 129, "82": 85, "83": 3784, "84": 2197, "87": 3954, "88": 894916, "89": 1853, "90": 1848, "91": 2116, "92": 4056, "93": 5547, "94": 1934, "95": 176, "96": 1937, "97": 129, "98": 88, "99": 90, "100": 170, "101": 946, "102": 133, "103": 301, "104": 343, "105": 1935, "106": 103823, "107": 1935, "108": 7748, "109": 7736, "111": 3784, "112": 218, "113": 129, "114": 1976, "115": 1979, "116": 169, "117": 173, "118": 130, "120": 945, "121": 1, "122": 3784, "123": 7310, "124": 5590, "125": 3613, "126": 344, "127": 7568, "128": 260, "129": 3872, "130": 3700, "131": 128, "132": 3785, "133": 89, "134": 946, "135": 1979, "136": 3785, "137": 2027, "138": 4, "139": 159, "140": 253, "141": 130, "142": 3698, "143": 81, "144": 26, "145": 3, "146": 1836311903, "147": 1, "148": 1, "149": 64, "150": 89, "151": 1, "152": 26, "153": 215, "154": 1936, "155": 131, "156": 1, "157": 1, "158": 1, "159": 3, "160": 129, "161": 3, "162": 1850, "163": 83, "164": 1976, "165": 1128, "166": 946, "167": 8, "168": 129, "169": 904, "170": 1937, "171": 1937, "172": 1937, "173": 1937, "174": 1980, "175": 1935, "176": 304, "177": 2, "178": 1, "179": 980, "180": 89, "181": 1936, "182": 3784, "183": 17, "184": 1981, "185": 1937, "186": 3655, "187": 133, "191": 127, "192": 88, "193": 7396, "194": 1850, "195": 3698, "196": 176, "197": 1979, "198": 946, "199": 1852, "200": 2070, "202": 86, "203": 510, "204": 252, "205": 169, "206": 1934, "207": 1978, "208": 132, "209": 45, "210": 1936, "211": 2025, "212": 990, "213": 172, "214": 1807, "215": 7740, "216": 1850, "217": 8, "218": 704, "219": 88, "220": 1118, "221": 1849, "222": 1849, "223": 1849, "224": 130, "225": 3784, "226": 134, "227": 89, "228": 89, "229": 6340, "230": 49460, "231": 6380, "232": 1892, "233": 3872, "234": 9245, "235": 4, "236": 946, "237": 263, "238": 79, "239": 1, "240": 173, "241": 259, "242": 1, "243": 267, "244": 174, "245": 215, "246": 1849, "247": 219, "248": 87, "249": 127, "252": 92, "253": 45, "254": 1978, "257": 990, "258": 171, "259": 45, "260": 86, "261": 1850, "262": 130, "263": 130, "264": 988, "265": 45, "266": 1894, "267": 128, "268": 1849, "269": 88, "270": 215, "271": 128, "272": 127, "273": 132, "274": 1978, "275": 87, "276": 8, "277": 4, "278": 5419, "279": 1808, "280": 171, "281": 176, "282": 90, "283": 991, "284": 2, "285": 3785, "286": 130, "287": 1893, "288": 4, "289": 87, "290": 128, "291": 87, "292": 130, "293": 174, "294": 1980, "295": 3, "296": 1895, "297": 131, "298": 126, "299": 949, "300": 87, "301": 1892, "302": 4, "303": 176, "304": 1978, "305": 3, "306": 88, "307": 5548, "308": 1851, "309": 130, "310": 1934, "311": 344, "312": 991, "313": 131, "314": 172, "315": 1894, "316": 1937, "317": 183, "318": 1, "319": 47, "320": 88, "321": 1894, "322": 948, "323": 87, "324": 1981, "325": 1, "326": 130, "327": 1936, "328": 87, "329": 215, "330": 1891, "331": 1, "332": 176, "333": 89, "334": 3, "335": 171, "336": 1894, "337": 128, "338": 132, "339": 1978, "340": 1034, "341": 172, "342": 1935, "343": 8, "344": 130, "345": 1851, "346": 92, "347": 7396, "348": 1892, "349": 87}'

var objectTypesTxtCat = `{"0": "Quadrats", "1": "Blocs", "2": "Quadrats", "3": "Quadrats", "4": "Cercles", "5": "Toothpicks", " 6 ":" Arbres "," 7 ":" Pingüins "," 8 ":" Flocs de neu "," 9 ":" Cadells "," 10 ":" Estrelles "," 11 ":" Diamants "," 12 " : "Futbolistes", "13": "Quadrats", "14": "Cercles", "15": "Triangles", "16": "Quadrats", "17": "de Justin Lanier, Squares", " 18 ":" Quadrats "," 19 ":" Cascs "," 20 ":" Flors "," 21 ":" Quadrats "," 22 ":" Quadrats "," 23 ":" Quadrats "," 24 " : "Quadrats", "25": "Quadrats", "26": "Quadrats", "27": "Quadrats", "29": "Quadrats", "30": "Rectangles", "31": " Rectangles "," 32 ":" Rectangles "," 33 ":" Rectangles "," 34 ":" Bars "," 35 ":" Bars "," 36 ":" de John Golden, Segments "," 37 " : "de John Golden, Segments", "38": "Cubs", "39": "Cubes", "40": "Triangles ombrejats al pas 43 = 3.2825697e + 20, Triangles no ombrejats", "41" : "Perímetre", "42": "Quadrats", "43": "hexàgons", "44": "Àrea", "45": "Àrea", "46": "Àrea", "47": " Àrea "," 48 ":" grans "," 49 ":" de Simon Gregg, quadrats grocs "," 50 ":" Hexàgons "," 51 ":" Cubs "," 52 " : "Segments", "53": "Segments", "54": "Segments", "55": "Segments", "56": "Segments", "57": "Segments", "58": " Rajoles negres "," 59 ":" Rombes "," 60 ":" Monedes "," 61 ":" Monedes "," 62 ":" Monedes "," 63 ":" Monedes "," 64 ":" Copes "," 65 ":" daus "," 66 ":" rombes "," 67 ":" d'Agustin Otero Rodriguez, hexàgons grocs "," 68 ":" d'Agustin Otero Rodriguez, quadrats taronja "," 70 ": "de Robert Kaplinsky, quadrats taronja", "71": "monedes", "72": "Monedes", "73": "Punts", "74": "Punts", "75": "Toothpicks", " 76 ":" Pinces dentades "," 77 ":" Triangles grocs "," 78 ":" de Simon Gregg, quadrats taronja "," 79 ":" Cercles "," 80 ":" Legos "," 81 ":" Legos "," 82 ":" Legos "," 83 ":" Cercles "," 84 ":" Cercles "," 87 ":" fons) "," 88 ":" Cubs "," 89 ":" Quadrats "," 91 ":" Quadrats "," 92 ":" Quadrats "," 93 ":" Quadrats "," 94 ":" Quadrats "," 95 ":" Quadrats "," 96 ":" Quadrats ", "97": "Cercles", "98": "Cercles", "100": "d'Andrew Busch, blocs totals (mides diferents)", "101": "Rombes", "102": "Quadrats", " 103 ":" Quadrats "," 104 ":" Cercles "," 105 ":" Quadrats res "," 106 ":" cubs "," 107 ":" Discos "," 108 ":" de Megan Schmidt, Inside pink nubs "," 109 ":" Nubs "," 111 ":" Dots "," 112 ":" Punts "," 113 ":" Cercles "," 114 ":" varetes "," 115 ":" Cors "," 116 ":" Quadrats "," 117 ":" Quadrats "," 118 " : "Punts", "120": "diagonals", "121": "triangles", "122": "quadrats", "123": "quadrats", "124": "quadrats", "125": " quadrats "," 126 ":" quadrats "," 127 ":" quadrats "," 128 ":" quadrats "," 129 ":" Quadrats "," 130 ":" Cubs "," 131 ":" triangles " , "132": "triangle", "133": "Cilindres", "134": "corns", "135": "Ànecs", "136": "Cercles", "137": "Cubs / Quadrats" , "138": "Hexàgons", "139": "Cubes", "140": "Cubes", "141": "Cubes", "142": "(verd)", "143": "Cubes" , "144": "només)", "145": "Cubes", "146": "Cubes", "147": "Bactèries", "148": "Conills", "149": "Cercles", "150": "Quadrats", "151": "Cubs", "152": "Cercles", "153": "Flors", "154": "Hexàgons", "155": "Fulles", "156 ":" Quadrats "," 157 ":" Quadrats "," 158 ":" Quadrats "," 159 ":" Quadrats "," 160 ":" Estrelles "," 161 ":" Suns "," 162 ": "Triangles", "16 3 ":" Cubs "," 164 ":" unitats "," 165 ":" blocs "," 166 ":" de Melvin Peralta, Cubs de la part blanca "," 167 ":" Regions "," 168 ": "Dimes", "169": "línies)", "170": "quadrats", "171": "quadrats", "172": "quadrats", "173": "quadrats", "174": " quadrats "," 175 ":" quadrats "," 176 ":" quadrats "," 177 ":" Cercles "," 178 ":" triangles "," 179 ":" rectangles "," 180 ":" nau espacial " , "181": "nau espacial", "182": "símbols", "183": "Blocs", "184": "Quadrats", "185": "Quadrats", "186": "Quadrats", " 187 ":" Quadrats "," 191 ":" Triangles "," 192 ":" tropes "," 193 ":" Estrelles "," 194 ":" Cilindres "," 195 ":" Cercles "," 196 " : "Loops", "197": "Cubes", "198": "Pumpkins", "199": "Cubes", "200": "Xs", "202": "Circles", "203": " Segments "," 204 ":" Triangles "," 205 ":" Triangles "," 206 ":" Units "," 207 ":" Unitats "," 208 ":" Cercles "," 209 ":" Toothpicks " , "210": "Quadrats", "211": "Quadrats", "212": "Coixins", "213": "Quadrats", "214": "OVNIS", "215": "Somriures", " 216 ":" Cercles "," 217 ":" d'Eric Appleton, Baies "," 218 ":" àrea ","219": "blocs", "220": "valor", "221": "d'Eric Appleton, Quadrats al pas 43 = 1849, Línies", "222": "d'Eric Appleton, Quadrats al pas 43 = 1849 , Línies "," 223 ":" d'Eric Appleton, Quadrats al pas 43 = 1849, Línies "," 224 ":" d'Eric Appleton, Línies "," 225 ":" d'Eric Appleton, Línies "," 226 " : "Cubes", "227": "Sandies", "228": "Carbasses", "229": "unitats", "230": "unitats", "231": "unitats", "232": " Quadrats "," 233 ":" de Lachlan Campió, Estrelles "," 234 ":" Quadrats "," 235 ":" de George Theall, Perímetre "," 236 ":" Tortugues "," 237 ":" Quadrats " , "238": "Quadrats", "239": "Quadrats", "240": "Cercles", "241": "Quadrats", "242": "Cors", "243": "Bolts", " 244 ":" Banderes "," 245 ":" Signes "," 246 ":" Cors "," 247 ":" Estrelles "," 248 ":" Quadrats "," 249 ":" Cors "," 252 " : "Cacti", "253": "d'Andrew Uyeno, Fracció de quadrats ombrejats", "254": "Punts", "257": "Clons", "258": "Smileys", "259": "Prismes "," 260 ":" Prismes "," 261 ":" Prismes "," 262 ":" Cilindres "," 263 ":" Cilindres "," 264 ":" Cilindres "," 265 ":" Penta gons "," 266 ":" Núvols "," 267 ":" Núvols "," 268 ":" Donuts "," 269 ":" Cubes "," 270 ":" Cubes "," 271 ":" Fantasmes " , "272": "Pies", "273": "Cors", "274": "Cors", "275": "Frames", "276": "Frames", "277": "Suns", " 278 ":" Cubes "," 279 ":" Fletxes "," 280 ":" Bolts "," 281 ":" Rostres "," 282 ":" Cares "," 283 ":" Estrelles "," 284 " : "Cilindres", "285": "Balls", "286": "Cubes", "287": "Cubes", "288": "Gatines", "289": "Boles", "290": " Macaronis "," 291 ":" Triangles "," 292 ":" Cercles "," 293 ":" Explosions "," 294 ":" Cilindres "," 295 ":" Cilindres "," 296 ":" Bevels " , "297": "Bevels", "298": "Pavos", "299": "Tornos en U", "300": "Cartells", "301": "Hexàgons", "302": "Boles" , "303": "Creus", "304": "Futbolistes", "305": "Cercles", "306": "Pinyes", "307": "Rectangles", "308": "Triangles", " 309 ":" Cubes "," 310 ":" Cascos "," 311 ":" Os "," 312 ":" Uniformes "," 313 ":" Cilindres "," 314 ":" Bevels "," 315 " : "Fletxes", "316": "Fletxes", "317": "Cors", "318": "Cors", "319": "Cercles", "320": "Rectangles", "321": " Dent de lleó "," 322 ": "Tulipes", "323": "Peonies", "324": "Cofetades", "325": "Roses", "326": "Orquídies", "327": "Margarides", "328": "Magnòlies "," 329 ":" Girasols "," 330 ":" Irises "," 331 ":" Plumerias "," 332 ":" Hortènsies "," 333 ":" Fúsquies "," 334 ":" Margarides ", "335": "Flors", "336": "Vaixells", "337": "Coopers", "338": "Pomes", "339": "Taronges", "340": "Maduixes", "341 ":" Alvocat "," 342 ":" Gerds "," 343 ":" Mango "," 344 ":" Préssecs "," 345 ":" Plàtans "," 346 ":" Quadrats "," 347 ": "de Ryan i Silas, grau 6, quadrats taronja", "348": "Quadrats", "349": "Squares"}`

var objectTypesTxtEsp = `{"0": "Cuadrados", "1": "Bloques", "2": "Cuadrados", "3": "Cuadrados", "4": "Círculos", "5": "Palillos de dientes", " 6 ":" Árboles "," 7 ":" Pingüinos "," 8 ":" Copos de nieve "," 9 ":" Cachorros "," 10 ":" Estrellas "," 11 ":" Diamantes "," 12 " : "Balones de fútbol", "13": "Cuadrados", "14": "Círculos", "15": "Triángulos", "16": "Cuadrados", "17": "de Justin Lanier, Cuadrados", " 18 ":" Cuadrados "," 19 ":" Cascos "," 20 ":" Flores "," 21 ":" Cuadrados "," 22 ":" Cuadrados "," 23 ":" Cuadrados "," 24 " : "Cuadrados", "25": "Cuadrados", "26": "Cuadrados", "27": "Cuadrados", "29": "Cuadrados", "30": "Rectángulos", "31": " Rectángulos "," 32 ":" Rectángulos "," 33 ":" Rectángulos "," 34 ":" Barras "," 35 ":" Barras "," 36 ":" de John Golden, Segmentos "," 37 " : "de John Golden, Segments", "38": "Cubes", "39": "Cubes", "40": "Triángulos sombreados en el paso 43 = 3.2825697e + 20, Triángulos no sombreados", "41" : "Perímetro", "42": "Cuadrados", "43": "hexágonos", "44": "Área", "45": "Área", "46": "Área", "47": " Área "," 48 ":" granos "," 49 ":" de Simon Gregg, Cuadrados amarillos "," 50 ":" Hexágonos "," 51 ":" Cubos "," 52 " : "Segmentos", "53": "Segmentos", "54": "Segmentos", "55": "Segmentos", "56": "Segmentos", "57": "Segmentos", "58": " Azulejos negros "," 59 ":" Rombos "," 60 ":" Monedas "," 61 ":" Monedas "," 62 ":" Monedas "," 63 ":" Monedas "," 64 ":" Copas "," 65 ":" Dados "," 66 ":" rombos "," 67 ":" de Agustín Otero Rodríguez, hexágonos amarillos "," 68 ":" de Agustín Otero Rodríguez, cuadrados naranjas "," 70 ": "de Robert Kaplinsky, cuadrados naranjas", "71": "monedas", "72": "Monedas", "73": "Puntos", "74": "Puntos", "75": "Palillos de dientes", " 76 ":" Palillos de dientes "," 77 ":" Triángulos amarillos "," 78 ":" de Simon Gregg, cuadrados naranjas "," 79 ":" Círculos "," 80 ":" Legos "," 81 ":" Legos "," 82 ":" Legos "," 83 ":" Círculos "," 84 ":" Círculos "," 87 ":" abajo "," 88 ":" Cubos "," 89 ":" Cuadrados "," 91 ":" Cuadrados "," 92 ":" Cuadrados "," 93 ":" Cuadrados "," 94 ":" Cuadrados "," 95 ":" Cuadrados "," 96 ":" Cuadrados ", "97": "Círculos", "98": "Círculos", "100": "de Andrew Busch, Bloques totales (diferentes tamaños)", "101": "Rombos", "102": "Cuadrados", " 103 ":" Cuadrados "," 104 ":" Círculos "," 105 ":" Cuadrado res "," 106 ":" cubos "," 107 ":" Discos "," 108 ":" de Megan Schmidt, Nubes rosadas interiores "," 109 ":" Nubes "," 111 ":" Puntos "," 112 ":" Puntos "," 113 ":" Círculos "," 114 ":" varillas "," 115 ":" Corazones "," 116 ":" Cuadrados "," 117 ":" Cuadrados "," 118 " : "Puntos", "120": "diagonales", "121": "triángulos", "122": "cuadrados", "123": "cuadrados", "124": "cuadrados", "125": " cuadrados "," 126 ":" cuadrados "," 127 ":" cuadrados "," 128 ":" cuadrados "," 129 ":" Cuadrados "," 130 ":" Cubos "," 131 ":" triángulos " , "132": "triángulo", "133": "Cilindros", "134": "callos", "135": "Patos", "136": "Círculos", "137": "Cubos / Cuadrados" , "138": "Hexágonos", "139": "Cubos", "140": "Cubos", "141": "Cubos", "142": "(verde)", "143": "Cubos" , "144": "solo)", "145": "Cubos", "146": "Cubos", "147": "Bacterias", "148": "Conejitos", "149": "Círculos", "150": "Cuadrados", "151": "Cubos", "152": "Círculos", "153": "Flores", "154": "Hexágonos", "155": "Hojas", "156 ":" Cuadrados "," 157 ":" Cuadrados "," 158 ":" Cuadrados "," 159 ":" Cuadrados "," 160 ":" Estrellas "," 161 ":" Soles "," 162 ": "Triángulos", "16 3 ":" Cubos "," 164 ":" unidades "," 165 ":" bloques "," 166 ":" de Melvin Peralta, cubos de tapa blanca "," 167 ":" Regiones "," 168 ": "Dimes", "169": "líneas", "170": "cuadrados", "171": "cuadrados", "172": "cuadrados", "173": "cuadrados", "174": " cuadrados "," 175 ":" cuadrados "," 176 ":" cuadrados "," 177 ":" Círculos "," 178 ":" triángulos "," 179 ":" rectángulos "," 180 ":" nave espacial " , "181": "nave espacial", "182": "símbolos", "183": "Bloques", "184": "Cuadrados", "185": "Cuadrados", "186": "Cuadrados", " 187 ":" Cuadrados "," 191 ":" Triángulos "," 192 ":" soldados "," 193 ":" Estrellas "," 194 ":" Cilindros "," 195 ":" Círculos "," 196 " : "Bucles", "197": "Cubos", "198": "Calabazas", "199": "Cubos", "200": "Xs", "202": "Círculos", "203": " Segmentos "," 204 ":" Triángulos "," 205 ":" Triángulos "," 206 ":" Unidades "," 207 ":" Unidades "," 208 ":" Círculos "," 209 ":" Palillos de dientes " , "210": "Cuadrados", "211": "Cuadrados", "212": "Almohadas", "213": "Cuadrados", "214": "Ovnis", "215": "Sonrisas", " 216 ":" Círculos "," 217 ":" de Eric Appleton, Berries "," 218 ":" área "," 219 ":" bloques "," 220 ":" v alue "," 221 ":" de Eric Appleton, Cuadrados en el paso 43 = 1849, Líneas "," 222 ":" de Eric Appleton, Cuadrados en el paso 43 = 1849, Líneas "," 223 ":" de Eric Appleton, Cuadrados en el paso 43 = 1849, Líneas "," 224 ":" de Eric Appleton, Líneas "," 225 ":" de Eric Appleton, Líneas "," 226 ":" Cubos "," 227 ":" Sandías ", "228": "Calabazas", "229": "unidades", "230": "unidades", "231": "unidades", "232": "Cuadrados", "233": "del Campeón Lachlan, Estrellas "," 234 ":" Cuadrados "," 235 ":" de George Theall, perímetro ","236": "Tortugas", "237": "Cuadrados", "238": "Cuadrados", "239": "Cuadrados", "240": "Círculos", "241": "Cuadrados", "242 ":" Corazones "," 243 ":" Pernos "," 244 ":" Banderas "," 245 ":" Señales "," 246 ":" Corazones "," 247 ":" Estrellas "," 248 ": "Cuadrados", "249": "Corazones", "252": "Cactus", "253": "de Andrew Uyeno, Fracción de sombreado cuadrado", "254": "Puntos", "257": "Clones" , "258": "Smileys", "259": "Prismas", "260": "Prismas", "261": "Prismas", "262": "Cilindros", "263": "Cilindros", " 264 ":" Cilindros "," 265 ":" Pentágonos "," 266 ":" Nubes "," 267 ":" Nubes "," 268 ":" Rosquillas "," 269 ":" Cubos "," 270 " : "Cubos", "271": "Fantasmas", "272": "Empanadas", "273": "Corazones", "274": "Corazones", "275": "Marcos", "276": " Marcos "," 277 ":" Soles "," 278 ":" Cubos "," 279 ":" Flechas "," 280 ":" Pernos "," 281 ":" Caras "," 282 ":" Caras " , "283": "Estrellas", "284": "Cilindros", "285": "Bolas", "286": "Cubos", "287": "Cubos", "288": "Gatitos", " 289 ":" Bolas "," 290 ":" Macarrones "," 291 ":" Triángulos "," 292 ":" Círculos "," 293 ":" Explosiones "," 294 ":" Cilindros "," 295 " : "Cyl inders "," 296 ":" Biseles "," 297 ":" Biseles "," 298 ":" Pavos "," 299 ":" Giros en U "," 300 ":" Señales "," 301 ":" Hexágonos "," 302 ":" Bolas "," 303 ":" Cruces "," 304 ":" Balones de fútbol "," 305 ":" Círculos "," 306 ":" Piñas "," 307 ":" Rectángulos " , "308": "Triángulos", "309": "Cubos", "310": "Cascos", "311": "Os", "312": "Uniformes", "313": "Cilindros", " 314 ":" Biseles "," 315 ":" Flechas "," 316 ":" Flechas "," 317 ":" Corazones "," 318 ":" Corazones "," 319 ":" Círculos "," 320 " : "Rectángulos", "321": "Dientes de león", "322": "Tulipanes", "323": "Peonías", "324": "Pensamientos", "325": "Rosas", "326": " Orquídeas "," 327 ":" Margaritas "," 328 ":" Magnolias "," 329 ":" Girasoles "," 330 ":" Iris "," 331 ":" Plumerias "," 332 ":" Hortensias " , "333": "Fuschias", "334": "Margaritas", "335": "Flores", "336": "Barcos", "337": "Coopers", "338": "Manzanas", " 339 ":" Naranjas "," 340 ":" Fresas "," 341 ":" Aguacates "," 342 ":" Frambuesas "," 343 ":" Mangos "," 344 ":" Melocotones "," 345 " : "Bananas", "346": "Cuadrados", "347": "de Ryan y Silas, grado 6, cuadrados naranjas", "3 48 ":" Cuadrados "," 349 ":" Cuadrados "}`

var objectTypesTxtEng = `{"0": "Squares", "1": "Blocks", "2": "Squares", "3": "Squares", "4": "Circles", "5": "Toothpicks", "6": "Trees", "7": "Penguins", "8": "Snowflakes", "9": "Puppies", "10": "Stars", "11": "Diamonds", "12": "Footballs", "13": "Squares", "14": "Circles", "15": "Triangles", "16": "Squares", "17": "from Justin Lanier, Squares", "18": "Squares", "19": "Helmets", "20": "Flowers", "21": "Squares", "22": "Squares", "23": "Squares", "24": "Squares", "25": "Squares", "26": "Squares", "27": "Squares", "29": "Squares", "30": "Rectangles", "31": "Rectangles", "32": "Rectangles", "33": "Rectangles", "34": "Bars", "35": "Bars", "36": "from John Golden, Segments", "37": "from John Golden, Segments", "38": "Cubes", "39": "Cubes", "40": "Shaded triangles in step 43 = 3.2825697e+20, Un-shaded triangles", "41": "Perimeter", "42": "Squares", "43": "hexagons", "44": "Area", "45": "Area", "46": "Area", "47": "Area", "48": "grains", "49": "from Simon Gregg, Yellow squares", "50": "Hexagons", "51": "Cubes", "52": "Segments", "53": "Segments", "54": "Segments", "55": "Segments", "56": "Segments", "57": "Segments", "58": "Black tiles", "59": "Rhombuses", "60": "Coins", "61": "Coins", "62": "Coins", "63": "Coins", "64": "Cups", "65": "Dice", "66": "rhombuses", "67": "from Agustin Otero Rodriguez, Yellow hexagons", "68": "from Agustin Otero Rodriguez, Orange squares", "70": "from Robert Kaplinsky, Orange squares", "71": "coins", "72": "Coins", "73": "Dots", "74": "Dots", "75": "Toothpicks", "76": "Toothpicks", "77": "Yellow triangles", "78": "from Simon Gregg, Orange squares", "79": "Circles", "80": "Legos", "81": "Legos", "82": "Legos", "83": "Circles", "84": "Circles", "87": "bottom)", "88": "Cubes", "89": "Squares", "91": "Squares", "92": "Squares", "93": "Squares", "94": "Squares", "95": "Squares", "96": "Squares", "97": "Circles", "98": "Circles", "100": "from Andrew Busch, Total blocks (different sizes)", "101": "Rhombuses", "102": "Squares", "103": "Squares", "104": "Circles", "105": "Squares", "106": "cubes", "107": "Discs", "108": "from Megan Schmidt, Inside pink nubs", "109": "Nubs", "111": "Dots", "112": "Dots", "113": "Circles", "114": "rods", "115": "Hearts", "116": "Squares", "117": "Squares", "118": "Dots", "120": "diagonals", "121": "triangles", "122": "squares", "123": "squares", "124": "squares", "125": "squares", "126": "squares", "127": "squares", "128": "squares", "129": "Squares", "130": "Cubes", "131": "triangles", "132": "triangle", "133": "Cylinders", "134": "corns", "135": "Ducks", "136": "Circles", "137": "Cubes/Squares", "138": "Hexagons", "139": "Cubes", "140": "Cubes", "141": "Cubes", "142": "(green)", "143": "Cubes", "144": "only)", "145": "Cubes", "146": "Cubes", "147": "Bacteria", "148": "Bunnies", "149": "Circles", "150": "Squares", "151": "Cubes", "152": "Circles", "153": "Flowers", "154": "Hexagons", "155": "Leaves", "156": "Squares", "157": "Squares", "158": "Squares", "159": "Squares", "160": "Stars", "161": "Suns", "162": "Triangles", "163": "Cubes", "164": "units", "165": "blocks", "166": "from Melvin Peralta, White-top cubes", "167": "Regions", "168": "Dimes", "169": "lines)", "170": "squares", "171": "squares", "172": "squares", "173": "squares", "174": "squares", "175": "squares", "176": "squares", "177": "Circles", "178": "triangles", "179": "rectangles", "180": "spacecraft", "181": "spacecraft", "182": "symbols", "183": "Blocks", "184": "Squares", "185": "Squares", "186": "Squares", "187": "Squares", "191": "Triangles", "192": "troopers", "193": "Stars", "194": "Cylinders", "195": "Circles", "196": "Loops", "197": "Cubes", "198": "Pumpkins", "199": "Cubes", "200": "Xs", "202": "Circles", "203": "Segments", "204": "Triangles", "205": "Triangles", "206": "Units", "207": "Units", "208": "Circles", "209": "Toothpicks", "210": "Squares", "211": "Squares", "212": "Pillows", "213": "Squares", "214": "UFOs", "215": "Smiles", "216": "Circles", "217": "from Eric Appleton, Berries", "218": "area", "219": "blocks", "220": "value", "221": "from Eric Appleton, Squares in step 43 = 1849, Lines", "222": "from Eric Appleton, Squares in step 43 = 1849, Lines", "223": "from Eric Appleton, Squares in step 43 = 1849, Lines", "224": "from Eric Appleton, Lines", "225": "from Eric Appleton, Lines", "226": "Cubes", "227": "Watermelons", "228": "Pumpkins", "229": "units", "230": "units", "231": "units", "232": "Squares", "233": "from Lachlan Champion, Stars", "234": "Squares", "235": "from George Theall, Perimeter", "236": "Turtles", "237": "Squares", "238": "Squares", "239": "Squares", "240": "Circles", "241": "Squares", "242": "Hearts", "243": "Bolts", "244": "Flags", "245": "Signs", "246": "Hearts", "247": "Stars", "248": "Squares", "249": "Hearts", "252": "Cacti", "253": "from Andrew Uyeno, Fraction of square shaded", "254": "Dots", "257": "Clones", "258": "Smileys", "259": "Prisms", "260": "Prisms", "261": "Prisms", "262": "Cylinders", "263": "Cylinders", "264": "Cylinders", "265": "Pentagons", "266": "Clouds", "267": "Clouds", "268": "Donuts", "269": "Cubes", "270": "Cubes", "271": "Ghosts", "272": "Pies", "273": "Hearts", "274": "Hearts", "275": "Frames", "276": "Frames", "277": "Suns", "278": "Cubes", "279": "Arrows", "280": "Bolts", "281": "Faces", "282": "Faces", "283": "Stars", "284": "Cylinders", "285": "Balls", "286": "Cubes", "287": "Cubes", "288": "Kittens", "289": "Balls", "290": "Macaronis", "291": "Triangles", "292": "Circles", "293": "Explosions", "294": "Cylinders", "295": "Cylinders", "296": "Bevels", "297": "Bevels", "298": "Turkeys", "299": "U-Turns", "300": "Signs", "301": "Hexagons", "302": "Balls", "303": "Crosses", "304": "Footballs", "305": "Circles", "306": "Pineapples", "307": "Rectangles", "308": "Triangles", "309": "Cubes", "310": "Helmets", "311": "Os", "312": "Uniforms", "313": "Cylinders", "314": "Bevels", "315": "Arrows", "316": "Arrows", "317": "Hearts", "318": "Hearts", "319": "Circles", "320": "Rectangles", "321": "Dandelions", "322": "Tulips", "323": "Peonies", "324": "Pansies", "325": "Roses", "326": "Orchids", "327": "Daisies", "328": "Magnolias", "329": "Sunflowers", "330": "Irises", "331": "Plumerias", "332": "Hydrangeas", "333": "Fuschias", "334": "Daisies", "335": "Flowers", "336": "Boats", "337": "Coopers", "338": "Apples", "339": "Oranges", "340": "Strawberries", "341": "Avocados", "342": "Raspberries", "343": "Mangoes", "344": "Peaches", "345": "Bananas", "346": "Squares", "347": "from Ryan and Silas, grade 6, Orange squares", "348": "Squares", "349": "Squares"}`

var objectTypesCat = JSON.parse(objectTypesTxtCat);
var objectTypesEsp = JSON.parse(objectTypesTxtEsp);
var objectTypesEng = JSON.parse(objectTypesTxtEng);
var intents = 1;
var solutions = JSON.parse(solutionsTxt);
var imageNumber;

main();

function main(){
  imageNumber = Math.floor(Math.random() * 350);
  document.getElementById("pattern").src = "./img/" + imageNumber + ".jpg";
  intents = 1;

  var objectTypes = getObjectTypes();
  var element = getElementName(objectTypes);
  changeElementText(element);
}

function checkResult(){
  if(document.getElementById("response").value == solutions[imageNumber]){
    correctFeedback();
    main();
  }else{
    if(parseInt(document.getElementById("response").value) > parseInt(solutions[imageNumber])){
      badLowerFeedback();
    }else{
      badHigherFeedback();
    }
    intents++;
  }
  document.getElementById("response").value = "";
}

function pretty(string){
    var tmp = string.charAt(0).toUpperCase() + string.slice(1);
    return tmp.trim();
}

function getObjectTypes(){
  if(lang == "CA"){
    return objectTypesCat;
  }
  if(lang == "ES"){
    return objectTypesEsp;
  }
  if(lang == "EN"){
    return objectTypesEng;
  }
}

function getElementName(oT){
  var element = oT[imageNumber];

  if (typeof element === 'undefined') {
    element = oT[" " + imageNumber + " "]
  }
  return element;
}

function changeElementText(element){
  if(lang == "CA"){
    document.getElementById("text").innerHTML = "Nombre d'elements (" + pretty(element) + ") al pas 43";
  }
  if(lang == "ES"){
    document.getElementById("text").innerHTML = "Numero de elementos (" + pretty(element) + ") en el paso 43";
  }
  if(lang == "EN"){
    document.getElementById("text").innerHTML = "Elements (" + pretty(element) + ") number in 43th step";
  }
}

function correctFeedback(){
  if(lang == "CA"){
    window.alert("Molt bé! Ho has encertat a l'intent número " + intents);
  }
  if(lang == "ES"){
    window.alert("¡Muy bien! Lo has acertado en el intento numero " + intents);
  }
  if(lang == "EN"){
    window.alert("Very good! You got it right in attempt number " + intents);
  }
}

function badLowerFeedback(){
  if(lang == "CA"){
    window.alert("Llàstima, el número és més petit. Número d'intents: " + intents);
  }
  if(lang == "ES"){
    window.alert("Lástima, el número es más pequeño. Número de intentos: " + intents);
  }
  if(lang == "EN"){
    window.alert("Incorrect, the number is smaller. Number of attempts: " + intents);
  }
}

function badHigherFeedback(){
  if(lang == "CA"){
    window.alert("Llàstima, el número és més gran. Número d'intents: " + intents);
  }
  if(lang == "ES"){
    window.alert("Lástima, el número es más grande. Número de intentos: " + intents);
  }
  if(lang == "EN"){
    window.alert("Incorrect, the number is higher. Number of attempts: " + intents);
  }
}
