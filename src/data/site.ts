// Centralized site content for Instituto de Defensoría Pública de Nuevo León (IDPNL).
// PDFs and legacy pages are served through the Wayback Machine snapshot so links keep working.

const WB = "https://web.archive.org/web/20240223064434/http://idpnl.gob.mx/";

/** Build a working URL to an archived asset on the original site. */
export const doc = (path: string) => WB + path.split("/").map(encodeURIComponent).join("/");

export const CITAS_URL = "https://web.archive.org/web/20240223064434/http://www.idpnl.gob.mx/citas/AgendaCita.aspx";
export const CONSULTA_CITA_URL = "https://web.archive.org/web/20240223064434/http://www.idpnl.gob.mx/citas/Consulta.aspx";

export const site = {
  name: "Instituto de Defensoría Pública de Nuevo León",
  shortName: "IDPNL",
  tagline: "¡Sin defensa no hay justicia!",
  intro:
    "El Instituto de Defensoría Pública es un organismo creado por el Gobierno del Estado para brindar asesoría y representación jurídica especializada y gratuita a la sociedad, particularmente en el Nuevo Sistema de Justicia Penal. Cuenta con defensores altamente capacitados y certificados por la Secretaría de Gobernación para proteger los derechos constitucionales y legales de los nuevoleoneses.",
};

export const mision =
  "Organismo Público que brinda gratuitamente en todo el Estado, servicios jurídicos en materia Penal orientados a una defensa adecuada, ininterrumpida, oportuna, técnica, eficiente y competente; igualmente en materias Familiar, Civil, Mercantil, Métodos Alternos y de Justicia Administrativa provee servicios de orientación, asesoría y representación legal, integral y exhaustiva, poniendo especial énfasis en la protección y defensa de los derechos de las personas de escasos recursos económicos y de grupos vulnerables.";

export const vision =
  "Integrar una institución con abogados comprometidos con la excelencia académica y desempeño profesional, dotados de una indeclinable vocación de servicio, conduciéndose dentro de los principios de honestidad y eficiencia, generando confianza en la sociedad en la atención de los asuntos que les sean conferidos.";

export const atribuciones = [
  "Las atribuciones se encuentran en el artículo 4 de la Ley del Instituto de Defensoría Pública de Nuevo León. Los servicios jurídicos se proporcionan de manera obligatoria y gratuita en la defensa en materia penal a los acusados, así como asesoría y patrocinio legal en asuntos de orden Civil, Familiar, Mercantil y Administrativo a personas de escasos recursos económicos.",
  "Artículo 4.- El Instituto prestará sus servicios profesionales en materia penal a que tiene derecho todo ciudadano en los términos de los artículos 20 de la Constitución Política de los Estados Unidos Mexicanos y 19 de la Constitución del Estado, consistente en una defensa integral, ininterrumpida, oportuna, técnica, eficiente y competente.",
  "En las materias Familiar, Civil, Mercantil y de justicia administrativa se prestan los servicios de orientación, asesoría y patrocinio de casos, poniendo especial énfasis en la protección y defensa de los derechos de las personas de escasos recursos económicos y de grupos vulnerables.",
  "A través del programa estatal de fianzas de interés social se apoya a infractores de delitos menores para obtener su libertad caucional, siempre que sean reos primarios, de escasos o nulos recursos económicos y de mínima peligrosidad.",
];

export const antecedentes = [
  "La Defensoría de Oficio tiene su origen en el Constituyente de 1856, consagrándose por primera vez el derecho que toda persona tiene a la defensa y el deber correlativo del Estado a proporcionarla.",
  "En la Constitución Federal de 1857 se establecía, a cargo del Estado, disponer de una lista de Defensores en el ramo penal, conocidos como Defensores de Oficio. El 7 de diciembre de 1881, mediante el decreto número 14 de la XXI Legislatura del Estado de Nuevo León, se crea la figura del “Defensor de los Pobres”.",
  "La primera Ley de la Defensoría de Oficio fue publicada el 1 de febrero de 1936, para regular el servicio de Defensa por parte del Estado en materia penal.",
  "El 28 de diciembre de 1992, mediante el decreto 118, se crea la Ley del Instituto de Defensoría Pública, formándose la Defensoría de Oficio del Estado de Nuevo León. El 18 de junio de 1997 se decreta una nueva ley, mucho más completa.",
  "El 10 de septiembre de 2006 la Defensoría de Oficio se convirtió en un órgano administrativo desconcentrado de la Secretaría General de Gobierno con autonomía técnica.",
  "Finalmente, el 6 de febrero de 2009 fue publicado el Decreto No. 330, expidiendo la Ley de Defensoría Pública para el Estado de Nuevo León, que entró en vigor el 7 de abril del mismo año.",
];

export type Tramite = { nombre: string; file: string; categoria: "Familiar" | "Civil" | "Registro Civil" };

export const tramites: Tramite[] = [
  { nombre: "Adopción", file: "tramites/ADOPCION.pdf", categoria: "Familiar" },
  { nombre: "Autorización judicial para salir del país", file: "tramites/AUTORIZACION JUDICIAL.pdf", categoria: "Familiar" },
  { nombre: "Cambio de régimen matrimonial", file: "tramites/CAMBIO DE REGIMEN MATRIMONIAL.pdf", categoria: "Familiar" },
  { nombre: "Convivencia y posesión interina de menores", file: "tramites/CONVIVENCIA Y POSESION INTERINA DE MENORES.pdf", categoria: "Familiar" },
  { nombre: "Dependencia económica", file: "tramites/DEPENDENCIA ECONOMICA.pdf", categoria: "Familiar" },
  { nombre: "Divorcio incausado", file: "tramites/DIVORCIO INCAUSADO.pdf", categoria: "Familiar" },
  { nombre: "Divorcio voluntario (acudir ambos)", file: "tramites/DIVORCIO VOLUNTARIO.pdf", categoria: "Familiar" },
  { nombre: "Enajenación de bienes", file: "tramites/ENAJENACION DE BIENES.pdf", categoria: "Civil" },
  { nombre: "Extinción del patrimonio familiar", file: "tramites/EXTINCION PATRIMONIO FAMILIAR.pdf", categoria: "Familiar" },
  { nombre: "Identidad de fecha de nacimiento", file: "tramites/IDENTIDAD DE FECHA DE NACIMIENTO.pdf", categoria: "Registro Civil" },
  { nombre: "Identidad de nombre", file: "tramites/IDENTIDAD DE NOMBRE.pdf", categoria: "Registro Civil" },
  { nombre: "Juicio sucesorio de transmisión hereditaria", file: "tramites/JUICIO DE TRANSMISION HEREDITARIA.pdf", categoria: "Civil" },
  { nombre: "Juicio ordinario civil sobre nulidad de matrimonio", file: "tramites/JUICIO ORD CIVIL SOBRE NULIDAD MATRIMONIO.pdf", categoria: "Familiar" },
  { nombre: "Juicio sucesorio de intestado", file: "tramites/JUICIO SUCESORIO DE INTESTADO.pdf", categoria: "Civil" },
  { nombre: "Juicio sucesorio testamentario", file: "tramites/JUICIO SUCESORIO TESTAMENTARIO.pdf", categoria: "Civil" },
  { nombre: "Jurisdicción voluntaria sobre concubinato", file: "tramites/JURISDICCION VOLUNTARIA DE CONCUBINATO.pdf", categoria: "Familiar" },
  { nombre: "Jurisdicción voluntaria sobre autorización para contraer matrimonio", file: "tramites/JURISDICCION VOLUNTARIA SOBRE AUTORIZACION PARA CONTRAER MATRIMONIO (3).pdf", categoria: "Familiar" },
  { nombre: "Medidas provisionales sobre declaración de ausencia", file: "tramites/MEDIDAS PROVISIONALES DE DECLARACION DE AUSENCIA.pdf", categoria: "Civil" },
  { nombre: "Medidas de apoyo y salvaguardia para personas con discapacidad funcional", file: "tramites/MEDIDAS DE APOYO Y SALVAGUARDIA PARA PERSONAS CON DISCAPACIDAD FUNCIONAL.pdf", categoria: "Familiar" },
  { nombre: "Nombramiento de tutor o estado de interdicción", file: "tramites/NOMBRAMIENTO DE TUTOR O ESTADO DE INTERDICCION.pdf", categoria: "Familiar" },
  { nombre: "Nulidad de acta de nacimiento", file: "tramites/NULIDAD DE ACTA DE NACIMIENTO.pdf", categoria: "Registro Civil" },
  { nombre: "Oral de alimentos", file: "tramites/ORAL DE ALIMENTOS.pdf", categoria: "Familiar" },
  { nombre: "Pérdida de la patria potestad", file: "tramites/PERDIDA DE LA PATRIA POTESTAD.pdf", categoria: "Familiar" },
  { nombre: "Reconocimiento, desconocimiento y contradicción de paternidad", file: "tramites/RECONCIMIENTO, DESCONOCIMIENTO Y CONTRADICCION DE PATERNIDAD.pdf", categoria: "Familiar" },
  { nombre: "Rectificación de acta de defunción", file: "tramites/RECTIFICACION ACTA DE DEFUNCION.pdf", categoria: "Registro Civil" },
  { nombre: "Rectificación de acta de matrimonio", file: "tramites/RECTIFICACION ACTA DE MATRIMONIO.pdf", categoria: "Registro Civil" },
  { nombre: "Rectificación de acta de nacimiento", file: "tramites/RECTIFICACION ACTA DE NACIMIENTO.pdf", categoria: "Registro Civil" },
  { nombre: "Registro extemporáneo de defunción", file: "tramites/REGISTRO EXTEMPORANEO DE DEFUNCION.pdf", categoria: "Registro Civil" },
  { nombre: "Registro extemporáneo de nacimiento", file: "tramites/REGISTRO EXTEMPORANEO.pdf", categoria: "Registro Civil" },
  { nombre: "Restitución de guarda y custodia", file: "tramites/RESTITUCION DE GUARDA Y CUSTODIA.pdf", categoria: "Familiar" },
  { nombre: "Separación cautelar de menores", file: "tramites/SEPARACION CAUTELAR DE MENORES.pdf", categoria: "Familiar" },
  { nombre: "Separación cautelar de personas", file: "tramites/SEPARACION CAUTELAR DE PERSONAS.pdf", categoria: "Familiar" },
  { nombre: "Separación provisional de cónyuges", file: "tramites/SEPARACION PROVISIONAL DE CONYUGES.pdf", categoria: "Familiar" },
];

export const materias = [
  { titulo: "Materia Penal", desc: "Defensa adecuada, ininterrumpida, oportuna, técnica y competente para acusados en el Nuevo Sistema de Justicia Penal." },
  { titulo: "Materia Familiar", desc: "Orientación, asesoría y representación en divorcios, alimentos, guarda y custodia, patria potestad y más." },
  { titulo: "Materia Civil", desc: "Asesoría y patrocinio en sucesiones, enajenación de bienes y juicios civiles." },
  { titulo: "Justicia para Adolescentes", desc: "Defensa especializada para adolescentes en el sistema de justicia." },
  { titulo: "Ejecución de Sanciones", desc: "Defensa especializada en ejecución de sanciones penales." },
  { titulo: "Segunda Instancia y Amparo", desc: "Defensa en recursos de apelación y juicios de amparo." },
  { titulo: "Métodos Alternos", desc: "Mediación y solución de controversias para resolver conflictos sin litigio." },
  { titulo: "Justicia Administrativa", desc: "Orientación y asesoría en asuntos administrativos." },
];

export const legislacion = [
  { titulo: "Ley de Defensoría Pública para el Estado de Nuevo León", file: "leyes/ley_ deIDPNL.pdf" },
  { titulo: "Reglamento del Instituto de Defensoría Pública (2015)", file: "leyes/Reglamento del IDP_2015.pdf" },
];

export type DocItem = { titulo: string; file: string };
export type DocGroup = { grupo: string; items: DocItem[] };

export const transparencia: DocGroup[] = [
  {
    grupo: "Manuales y Protocolos",
    items: [
      { titulo: "Manual para garantizar el derecho a la defensa de la población indígena y extranjera", file: "MANUALES TRANSPARENCIAS/MANUAL PARA GARANTIZAR EL DERECHO A LA DEFENSA DE LA POBLACION INDIGENA Y EXTRANJERA EN EL ESTADO.pdf" },
      { titulo: "Manual para garantizar el derecho a la defensa de personas con discapacidad y problemas de salud mental", file: "MANUALES TRANSPARENCIAS/MANUAL PARA GARANTIZAR EL DERECHO A LA DEFENSA DE LAS PERSONAS CON DISCAPACIDAD Y PERSONAS CON PROBLEMAS DE SALUD MENTAL EN EL ESTADO.pdf" },
      { titulo: "Protocolo de actuación: población indígena y extranjera", file: "MANUALES TRANSPARENCIAS/PROTOCOLO DE ACTUACION PARA GARANTIZAR EL DERECHO A LA DEFENSA DE LA POBLACION INDIGENA Y EXTRANJERA EN EL ESTADO.pdf" },
      { titulo: "Protocolo de actuación: personas con discapacidad y salud mental", file: "MANUALES TRANSPARENCIAS/PROTOCOLO DE ACTUACION PARA GARANTIZAR EL DERECHO A LA DEFENSA DE LAS PERSONAS CON DISCAPACIDAD Y PERSONAS CON PROBLEMAS DE SALUD MENTAL EN EL ESTADO.pdf" },
      { titulo: "Protocolo de la Unidad de Igualdad de Género", file: "MANUALES TRANSPARENCIAS/protocolo de la unidad de igualdad de genero.pdf" },
      { titulo: "Orientación y asesoría de Infomatel", file: "MANUALES TRANSPARENCIAS/orientacion y asesoria de informatel.pdf" },
      { titulo: "Recepción, control y seguimiento de oficios", file: "MANUALES TRANSPARENCIAS/recepcion control y seguimiento de oficios.pdf" },
    ],
  },
  {
    grupo: "Avisos de Privacidad",
    items: [
      { titulo: "Aviso de Privacidad Integral Usuarios IDPNL", file: "documentos/AVISO DE PRIVACIDAD INTEGRAL USUARIOS IDP.pdf" },
      { titulo: "Aviso de Privacidad Simplificado de Usuarios", file: "documentos/AVISO_PRIVACIDAD_SIMPLIFICADO_USUARIOS.PDF" },
    ],
  },
  {
    grupo: "Adquisiciones y Servicios",
    items: [
      { titulo: "Programa de adquisiciones 2022", file: "documentos/Programa adquisiciones 2022.pdf" },
      { titulo: "Plan anual de adquisiciones 2021", file: "documentos/plan anual adquisiciones 2021.pdf" },
      { titulo: "Plan anual de adquisiciones 2020", file: "documentos/plan anual adquisiciones 2020.pdf" },
      { titulo: "Plan anual de adquisiciones 2019", file: "documentos/plan anual adquisiciones 2019.pdf" },
      { titulo: "Directrices para perfiles de puestos", file: "documentos/Directrices perfil de puesto.pdf" },
      { titulo: "Directrices para capacitación del personal", file: "documentos/Directrices capacitacion personal.pdf" },
    ],
  },
  {
    grupo: "Contabilidad y Cuenta Pública",
    items: [
      { titulo: "Formato de Cuenta Pública — 2do Trimestre 2020", file: "documentos/Formato Segundo Trimestre 2020.pdf" },
      { titulo: "Formato de Cuenta Pública — 1er Trimestre 2020", file: "documentos/Formato de Cuenta Pública 1er Trimestre 2020.pdf" },
      { titulo: "Formato de Cuenta Pública 2019", file: "documentos/Formato de Cuenta Pública 2019.pdf" },
      { titulo: "Cuenta Pública 2018 IDPNL", file: "documentos/cTA publica 2018 idpnl.pdf" },
      { titulo: "Formato de Cuenta Pública definitiva 2017", file: "documentos/Formato de Cuenta Pública definitiva 2017 (Recuperado).pdf" },
      { titulo: "Formato de Cuenta Pública definitiva 2016", file: "documentos/Formato de Cuenta Pública definitiva 2016.pdf" },
      { titulo: "Guía de Cumplimiento LDF IDPNL 2017", file: "documentos/ANEXO 3 Guia Cumplimiento LDF IDPNL 2017.pdf" },
      { titulo: "Guía de Cumplimiento LDF IDPNL 2016", file: "documentos/ANEXO 3 Guia Cumplimiento LDF IDPNL 2016.pdf" },
    ],
  },
];

export type Oficina = { nombre: string; telefono: string; direccion: string };

export const oficinasMetro: Oficina[] = [
  { nombre: "Edificio Central", telefono: "81 2020-5600", direccion: "Matamoros 311 Ote., Centro, Monterrey, N.L." },
  { nombre: "Apoyo Técnico", telefono: "81 1970-4050", direccion: "Matamoros 409 Ote., Centro, Monterrey" },
  { nombre: "Edificio Latino", telefono: "81 8340-1235", direccion: "Juan I. Ramón #506, 4° piso, Centro, Monterrey" },
  { nombre: "Defensa Especializada en Ejecución de Sanciones", telefono: "81 2033-1564", direccion: "Matamoros 311 Ote., piso 5, Centro, Monterrey" },
  { nombre: "Unidad de Métodos Alternos", telefono: "81 2020-5685", direccion: "Allende #302, Centro, Monterrey" },
  { nombre: "Defensa en Segunda Instancia y Amparo", telefono: "81 2020-5686", direccion: "Allende #322, Centro, Monterrey" },
  { nombre: "Defensa en Proceso Penal", telefono: "81 2033-1161 al 1163", direccion: "Zacatepec No. 103, locales 2, 3 y 4, Col. Valle Morelos" },
  { nombre: "IDP San Pedro", telefono: "81 2315-0747 / 81 2020-8735", direccion: "Corregidora #507, Centro de San Pedro Garza García (Palacio de Justicia)" },
  { nombre: "IDP San Nicolás — Penal", telefono: "81 2033-1156", direccion: "Jorge González Camarena #107, Col. Residencial El Roble" },
  { nombre: "IDP San Nicolás", telefono: "81 2033-3363 / 81 1969-0537", direccion: "Jorge González Camarena #501, Col. Valle Dorado" },
  { nombre: "IDP Guadalupe — Familiar y Proceso Penal", telefono: "81 2033-3360 al 3362", direccion: "Av. Lázaro Cárdenas No. 809, int. 4-7, 2° piso, Col. Ignacio Zaragoza, Guadalupe" },
  { nombre: "Robo de Vehículo (Monterrey)", telefono: "81 2033-1178", direccion: "Aarón Sáenz e Insurgentes #1357, Monterrey" },
  { nombre: "Agencia Especializada en Justicia para Adolescentes (Guadalupe)", telefono: "81 2020-6387", direccion: "Constituyentes de N.L. #200, local 1, Col. Parque Industrial Regiomontano, Guadalupe" },
  { nombre: "Centro de Justicia Familiar", telefono: "81 2020-5923", direccion: "Alejandro de Humboldt #800, Col. Mirador Centro" },
  { nombre: "IDP Escobedo", telefono: "81 2033-1183 al 1185", direccion: "Av. Las Industrias No. 300, Parque Industrial, General Escobedo" },
  { nombre: "San Jerónimo (Investigaciones Penales)", telefono: "81 2139-0071 al 0073", direccion: "San Jerónimo No. 300, Col. San Jerónimo, Monterrey" },
  { nombre: "IDP García", telefono: "81 2033-1180 al 1182", direccion: "Calle General Treviño 408, Centro, Villa de García, N.L." },
  { nombre: "IDP Apodaca", telefono: "81 2033-8753 al 8755", direccion: "Futuro Apodaca 411A, Col. Futuro Apodaca, Apodaca, N.L." },
  { nombre: "IDP Santa Catarina", telefono: "81 2091-3041 / 81 2033-4250", direccion: "Zaragoza 112-6, Infonavit La Huasteca, 5° sector, Santa Catarina" },
];

export const oficinasForaneas: Oficina[] = [
  { nombre: "Juárez", telefono: "81 8233-2718", direccion: "Tapia #308, Centro, Municipio de Juárez" },
  { nombre: "Cadereyta No. 1", telefono: "82 8284-6420", direccion: "Edificio Poder Judicial, Libramiento Cadereyta-Reynosa Km. 30, Col. El Calvario" },
  { nombre: "Cadereyta No. 2", telefono: "82 8111-0149", direccion: "Edificio Poder Judicial, Cadereyta" },
  { nombre: "Linares", telefono: "82 1212-8455", direccion: "Palacio de Justicia, Av. Prolongación Hidalgo, Col. Parque Industrial" },
  { nombre: "Dr. Arroyo", telefono: "48 8888-0977", direccion: "Francisco Merla y Lerdo de Tejada s/n (Palacio de Justicia)" },
  { nombre: "Cerralvo", telefono: "89 2975-0712", direccion: "Jiménez #103, Centro" },
  { nombre: "Villaldama", telefono: "82 9245-0375", direccion: "Zaragoza s/n, entre Allende y Rayón, oficinas del Poder Judicial, 2° piso" },
  { nombre: "Sabinas Hidalgo", telefono: "82 4242-2124", direccion: "Porfirio Díaz #505 Sur, entre Hidalgo y Niños Héroes" },
  { nombre: "Montemorelos", telefono: "82 6107-0030", direccion: "Palacio de Justicia, Carretera Nacional Km. 3, Demarcación Las Lilas" },
  { nombre: "Galeana", telefono: "82 6213-0535", direccion: "Calle Cuauhtémoc s/n, Centro, entre 5 de Mayo y Constitución" },
  { nombre: "China", telefono: "82 3232-0662", direccion: "Carretera Monterrey-Reynosa Km. 112" },
];

// Useful external links for citizens (CURP, actas, etc.) — referenced by the assistant.
export const enlacesUtiles = [
  { titulo: "Consulta e impresión de tu CURP", url: "https://www.gob.mx/curp/", desc: "Obtén tu CURP en línea de forma gratuita (RENAPO)." },
  { titulo: "Actas de nacimiento, matrimonio y defunción en línea", url: "https://www.gob.mx/ActasInteractivas", desc: "Solicita copias certificadas de actas del Registro Civil de cualquier estado." },
  { titulo: "Registro Civil de Nuevo León", url: "https://www.nl.gob.mx/servicios/actas-del-registro-civil", desc: "Trámites del Registro Civil del Estado de Nuevo León." },
  { titulo: "Poder Judicial del Estado de Nuevo León", url: "https://www.pjenl.gob.mx/", desc: "Información de juzgados y expedientes del Poder Judicial de N.L." },
];
