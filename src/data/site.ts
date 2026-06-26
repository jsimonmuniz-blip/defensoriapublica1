// Centralized site content for Instituto de Defensoría Pública de Nuevo León (IDPNL).
// PDFs are downloaded from the original site (www.idpnl.gob.mx) and hosted on Lovable's
// CDN, so every link opens the exact document directly and never breaks.

import docMap from "./doc-map.json";

const LIVE = "https://www.idpnl.gob.mx/";

/**
 * Build a working URL to a document.
 * Prefers the CDN-hosted copy; falls back to the live site if not mapped.
 */
export const doc = (path: string): string => {
  const url = (docMap as Record<string, string>)[path];
  if (url) return url;
  return LIVE + path.split("/").map(encodeURIComponent).join("/");
};

/**
 * Build a public-facing URL to a document using the official IDPNL site only,
 * never the internal CDN. Used for links the chatbot shares with users.
 */
export const docPublic = (path: string): string =>
  LIVE + path.split("/").map(encodeURIComponent).join("/");


export const CITAS_URL = "https://citas.idpnl.gob.mx";
export const CONSULTA_CITA_URL = "https://www.idpnl.gob.mx/citas/Consulta.aspx";

export const site = {
  name: "Instituto de Defensoría Pública de Nuevo León",
  shortName: "IDPNL",
  tagline: "¡Sin defensa no hay justicia!",
  intro:
    "El Instituto de Defensoría Pública es un organismo creado por el Gobierno del Estado para brindar asesoría y representación jurídica especializada y gratuita a la sociedad, particularmente en el Nuevo Sistema de Justicia Penal. Cuenta con defensores altamente capacitados y certificados por la Secretaría de Gobernación para proteger los derechos constitucionales y legales de los nuevoleoneses.",
};

export const mision =
  "Brindar gratuitamente servicios de orientación, asesoría, representación y defensa jurídica en las materias de su competencia, garantizando en materia penal una defensa adecuada, técnica, continua, oportuna y eficiente, y en las materias Familiar, Civil, Mercantil, Métodos Alternos de Solución de Controversias y Justicia Administrativa una representación legal integral, con enfoque de derechos humanos.";

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

export type Tramite = { nombre: string; file: string; categoria: "Familiar" | "Civil" };

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
  { nombre: "Identidad de fecha de nacimiento", file: "tramites/IDENTIDAD DE FECHA DE NACIMIENTO.pdf", categoria: "Civil" },
  { nombre: "Identidad de nombre", file: "tramites/IDENTIDAD DE NOMBRE.pdf", categoria: "Civil" },
  { nombre: "Juicio sucesorio de transmisión hereditaria", file: "tramites/JUICIO DE TRANSMISION HEREDITARIA.pdf", categoria: "Civil" },
  { nombre: "Juicio ordinario civil sobre nulidad de matrimonio", file: "tramites/JUICIO ORD CIVIL SOBRE NULIDAD MATRIMONIO.pdf", categoria: "Familiar" },
  { nombre: "Juicio sucesorio de intestado", file: "tramites/JUICIO SUCESORIO DE INTESTADO.pdf", categoria: "Civil" },
  { nombre: "Juicio sucesorio testamentario", file: "tramites/JUICIO SUCESORIO TESTAMENTARIO.pdf", categoria: "Civil" },
  { nombre: "Jurisdicción voluntaria sobre concubinato", file: "tramites/JURISDICCION VOLUNTARIA DE CONCUBINATO.pdf", categoria: "Familiar" },
  { nombre: "Jurisdicción voluntaria sobre autorización para contraer matrimonio", file: "tramites/JURISDICCION VOLUNTARIA SOBRE AUTORIZACION PARA CONTRAER MATRIMONIO (3).pdf", categoria: "Familiar" },
  { nombre: "Medidas provisionales sobre declaración de ausencia", file: "tramites/MEDIDAS PROVISIONALES DE DECLARACION DE AUSENCIA.pdf", categoria: "Civil" },
  { nombre: "Medidas de apoyo y salvaguardia para personas con discapacidad funcional", file: "tramites/MEDIDAS DE APOYO Y SALVAGUARDIA PARA PERSONAS CON DISCAPACIDAD FUNCIONAL.pdf", categoria: "Familiar" },
  { nombre: "Nombramiento de tutor o estado de interdicción", file: "tramites/NOMBRAMIENTO DE TUTOR O ESTADO DE INTERDICCION.pdf", categoria: "Familiar" },
  { nombre: "Nulidad de acta de nacimiento", file: "tramites/NULIDAD DE ACTA DE NACIMIENTO.pdf", categoria: "Civil" },
  { nombre: "Oral de alimentos", file: "tramites/ORAL DE ALIMENTOS.pdf", categoria: "Familiar" },
  { nombre: "Pérdida de la patria potestad", file: "tramites/PERDIDA DE LA PATRIA POTESTAD.pdf", categoria: "Familiar" },
  { nombre: "Reconocimiento, desconocimiento y contradicción de paternidad", file: "tramites/RECONCIMIENTO, DESCONOCIMIENTO Y CONTRADICCION DE PATERNIDAD.pdf", categoria: "Familiar" },
  { nombre: "Rectificación de acta de defunción", file: "tramites/RECTIFICACION ACTA DE DEFUNCION.pdf", categoria: "Civil" },
  { nombre: "Rectificación de acta de matrimonio", file: "tramites/RECTIFICACION ACTA DE MATRIMONIO.pdf", categoria: "Civil" },
  { nombre: "Rectificación de acta de nacimiento", file: "tramites/RECTIFICACION ACTA DE NACIMIENTO.pdf", categoria: "Civil" },
  { nombre: "Registro extemporáneo de defunción", file: "tramites/REGISTRO EXTEMPORANEO DE DEFUNCION.pdf", categoria: "Civil" },
  { nombre: "Registro extemporáneo de nacimiento", file: "tramites/REGISTRO EXTEMPORANEO.pdf", categoria: "Civil" },
  { nombre: "Restitución de guarda y custodia", file: "tramites/RESTITUCION DE GUARDA Y CUSTODIA.pdf", categoria: "Familiar" },
  { nombre: "Separación cautelar de menores", file: "tramites/SEPARACION CAUTELAR DE MENORES.pdf", categoria: "Familiar" },
  { nombre: "Separación cautelar de personas", file: "tramites/SEPARACION CAUTELAR DE PERSONAS.pdf", categoria: "Familiar" },
  { nombre: "Separación provisional de cónyuges", file: "tramites/SEPARACION PROVISIONAL DE CONYUGES.pdf", categoria: "Familiar" },
];

export const materias = [
  { titulo: "Defensa Penal", desc: "Defensa adecuada, técnica, continua, oportuna y eficiente para acusados en el Nuevo Sistema de Justicia Penal." },
  { titulo: "Defensa Inicial", desc: "Asistencia jurídica desde la etapa inicial de investigación penal." },
  { titulo: "Justicia para Adolescentes", desc: "Defensa especializada para adolescentes en el sistema de justicia." },
  { titulo: "Ejecución de Sanciones", desc: "Defensa especializada en la etapa de ejecución de sanciones penales." },
  { titulo: "Segunda Instancia y Amparo", desc: "Defensa en recursos de apelación y juicios de amparo." },
  { titulo: "Materia Familiar", desc: "Orientación, asesoría y representación en divorcios, alimentos, guarda y custodia, patria potestad y más." },
  { titulo: "Materia Civil", desc: "Asesoría y patrocinio en sucesiones, enajenación de bienes y juicios civiles." },
  { titulo: "Materia Mercantil", desc: "Asesoría y representación legal en asuntos y controversias mercantiles." },
  { titulo: "Justicia Administrativa", desc: "Orientación, asesoría y representación en asuntos administrativos." },
  { titulo: "Métodos Alternos de Solución de Controversias", desc: "Mediación y conciliación para resolver conflictos sin litigio." },
];

export const legislacion = [
  { titulo: "Ley de Defensoría Pública para el Estado de Nuevo León", file: "leyes/ley_ deIDPNL.pdf" },
  { titulo: "Reglamento del Instituto de Defensoría Pública (2015)", file: "leyes/Reglamento del IDP_2015.pdf" },
  { titulo: "Nuevo Código de Ética para las personas servidoras públicas del Estado de Nuevo León", file: "leyes/Nuevo_CÓDIGO_DE_ÉTICA.pdf" },
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

export type Oficina = { nombre: string; telefono: string; direccion?: string; piso?: string };
export type DirectorioGrupo = { titulo: string; sede?: string; oficinas: Oficina[] };

// Directorio oficial 2026 — Instituto de Defensoría Pública de Nuevo León
export const directorio: DirectorioGrupo[] = [
  {
    titulo: "Edificio Central IDPNL",
    sede: "Matamoros 311 Ote., Centro de Monterrey, Nuevo León",
    oficinas: [
      { nombre: "Dirección General", telefono: "81 2020-5604", piso: "Piso 6" },
      { nombre: "Subdirección General", telefono: "81 2020-5613", piso: "Piso 6" },
      { nombre: "Dirección Administrativa", telefono: "81 2033-1579", piso: "Piso 6" },
      { nombre: "Unidad Jurídica", telefono: "81 2020-5676", piso: "Piso 1" },
      { nombre: "Asesoría Jurídica Telefónica", telefono: "81 1306-1135", piso: "Planta baja" },
      { nombre: "Conmutador", telefono: "81 2020-5600", piso: "Sótano" },
    ],
  },
  {
    titulo: "Centro de Integración y Defensa Familiar",
    oficinas: [
      { nombre: "Métodos Alternos", telefono: "81 1306-1203 / 81 1306-1204", direccion: "Allende 302, Centro, Monterrey, N.L.", piso: "Planta baja" },
      { nombre: "Unidad de Elaboración de Demandas", telefono: "81 1306-1214", direccion: "Planta baja" },
      { nombre: "Unidad de Atención Ciudadana", telefono: "81 1339-9602", direccion: "Planta baja" },
    ],
  },
  {
    titulo: "Defensa en Investigaciones Penales",
    oficinas: [
      { nombre: "Apodaca", telefono: "81 2033-8753, 8754, 8755", direccion: "Futuro Apodaca 411A, Col. Futuro Apodaca, Apodaca, N.L." },
      { nombre: "Escobedo", telefono: "81 4666-0190 / 81 2033-1183 al 1185", direccion: "Av. Las Industrias No. 300, Col. Parque Industrial, General Escobedo, N.L." },
      { nombre: "Guadalupe", telefono: "81 2020-3382 / 4705", direccion: "Av. Lázaro Cárdenas No. 809, 2° piso, Col. Ignacio Zaragoza, Guadalupe, N.L." },
      { nombre: "Monterrey (Edificio Central)", telefono: "81 2033-1557", direccion: "Matamoros 311, Piso 4, Centro de Monterrey, N.L." },
      { nombre: "Monterrey (Unidad de Defensa de la Mujer)", telefono: "81 2020-5685", direccion: "Allende 302, Centro, Monterrey, N.L." },
      { nombre: "Monterrey (Zacatepec)", telefono: "81 2033-1161, 1162 y 1163", direccion: "Zacatepec No. 103, Col. Valle Morelos, Monterrey, N.L." },
      { nombre: "San Nicolás de los Garza", telefono: "81 2556-1053, 1054, 1055", direccion: "Francisco Goitia 502, Col. Valle Dorado, San Nicolás de los Garza, N.L." },
      { nombre: "Santa Catarina", telefono: "81 2033-4250 / 4251 / 81 1357-6212", direccion: "Av. Manuel Ordóñez 319-S, Villa de las Huertas (dentro del Distrito DIF Santa Catarina), N.L." },
    ],
  },
  {
    titulo: "Defensa en Proceso Penal",
    oficinas: [
      { nombre: "Escobedo", telefono: "81 4666-0190 / 81 2033-1183 al 1185", direccion: "Av. Las Industrias No. 300, Col. Parque Industrial, General Escobedo, N.L." },
      { nombre: "Guadalupe", telefono: "81 2020-3382 / 4705", direccion: "Av. Lázaro Cárdenas No. 809, 2° piso, Col. Ignacio Zaragoza, Guadalupe, N.L." },
      { nombre: "Monterrey (Centro)", telefono: "81 2020-5630", direccion: "Matamoros 311, Piso 2, Centro de Monterrey, N.L." },
      { nombre: "Monterrey (Zacatepec)", telefono: "81 2033-1161, 1162 y 1163", direccion: "Zacatepec No. 103, Col. Valle Morelos, Monterrey, N.L." },
      { nombre: "San Pedro Garza García", telefono: "81 2020-8735", direccion: "Corregidora #507, piso 1, Centro, San Pedro Garza García, N.L." },
      { nombre: "San Nicolás de los Garza", telefono: "81 2556-1053, 1054, 1055", direccion: "Francisco Goitia 502, Col. Valle Dorado, San Nicolás de los Garza, N.L." },
      { nombre: "Santa Catarina", telefono: "81 2033-4250 / 4251 / 81 1357-6212", direccion: "Av. Manuel Ordóñez 319-S, Villa de las Huertas (dentro del Distrito DIF Santa Catarina), N.L." },
    ],
  },
  {
    titulo: "Defensa en Segunda Instancia y Amparo",
    oficinas: [
      { nombre: "Monterrey", telefono: "81 2020-5681", direccion: "Allende 322, Centro de Monterrey, N.L." },
    ],
  },
  {
    titulo: "Civil, Mercantil y Justicia Administrativa",
    oficinas: [
      { nombre: "Monterrey", telefono: "81 2020-5631", direccion: "Matamoros 311 Ote., Piso 7, Centro de Monterrey, N.L." },
    ],
  },
  {
    titulo: "Defensa Especializada en Justicia para Adolescentes",
    oficinas: [
      { nombre: "Monterrey", telefono: "81 2556-9207 / 81 2556-9206", direccion: "Constituyentes de N.L. #200, Local 1, Col. Parque Industrial Regiomontano, Monterrey, N.L." },
      { nombre: "Monterrey (ALAMEY)", telefono: "—", direccion: "Ladrón de Guevara y Arista s/n, Col. del Norte, Monterrey, N.L." },
    ],
  },
  {
    titulo: "Dirección de lo Familiar",
    oficinas: [
      { nombre: "Monterrey", telefono: "81 2020-5662", direccion: "Matamoros 311 Ote., Piso 3, Centro de Monterrey, N.L." },
      { nombre: "San Nicolás de los Garza", telefono: "81 1969-0537 / 81 2033-3363, 3364", direccion: "Jorge González Camarena #501, Col. Valle Dorado, San Nicolás de los Garza, N.L." },
      { nombre: "Guadalupe", telefono: "81 2033-3360, 3361, 3362", direccion: "Av. Lázaro Cárdenas No. 809, 2° piso, Col. Ignacio Zaragoza, Guadalupe, N.L." },
      { nombre: "García", telefono: "81 2033-1180, 1181, 1182", direccion: "Calle General Treviño 408, Centro, Villa de García, N.L." },
      { nombre: "San Pedro", telefono: "81 2020-3375 / 81 2315-0747", direccion: "Corregidora #507, planta baja, Centro, San Pedro Garza García (dentro del Palacio de Justicia), N.L." },
    ],
  },
  {
    titulo: "Dirección Foránea",
    oficinas: [
      { nombre: "Monterrey", telefono: "81 2020-5678", direccion: "Matamoros 311 Ote., Piso 4, Centro de Monterrey, N.L." },
      { nombre: "Linares", telefono: "82 1212-8455", direccion: "Palacio de Justicia (PGJ), Av. Prol. Hidalgo cruz con Av. Industria Alimenticia s/n, Col. Parque Industrial, Linares, N.L." },
      { nombre: "Dr. Arroyo", telefono: "48 8888-0977", direccion: "Francisco Merla y Lerdo de Tejada s/n (Palacio de Justicia), Dr. Arroyo, N.L." },
      { nombre: "Cerralvo", telefono: "89 2975-0712", direccion: "Jiménez #103, Centro, Cerralvo, N.L." },
      { nombre: "Sabinas Hidalgo", telefono: "82 4242-2124", direccion: "Hidalgo #100, Barrio El Aguacate, Sabinas Hidalgo, N.L." },
      { nombre: "Villaldama", telefono: "82 9245-0375", direccion: "Zaragoza s/n, entre Allende y Rayón, dentro de las oficinas del Poder Judicial, 2° piso, Villaldama, N.L." },
      { nombre: "Montemorelos", telefono: "82 6107-0030", direccion: "Capitán Alonso de León Km. 3, Demarcación Las Lilas, dentro del Palacio de Justicia, Montemorelos, N.L." },
      { nombre: "Galeana", telefono: "82 6213-0535", direccion: "Cuauhtémoc s/n, Centro, entre 5 de Mayo y Constitución, Galeana, N.L." },
      { nombre: "China", telefono: "82 3232-0662", direccion: "Carretera Monterrey-Reynosa Km. 112, China, N.L." },
    ],
  },
];

// Useful external links for citizens (CURP, actas, etc.) — referenced by the assistant.
export const enlacesUtiles = [
  { titulo: "Consulta e impresión de tu CURP", url: "https://www.gob.mx/curp/", desc: "Obtén tu CURP en línea de forma gratuita (RENAPO)." },
  { titulo: "Actas de nacimiento, matrimonio y defunción en línea", url: "https://www.gob.mx/ActasInteractivas", desc: "Solicita copias certificadas de actas del Registro Civil de cualquier estado." },
  { titulo: "Registro Civil de Nuevo León", url: "https://www.nl.gob.mx/servicios/actas-del-registro-civil", desc: "Trámites del Registro Civil del Estado de Nuevo León." },
  { titulo: "Poder Judicial del Estado de Nuevo León", url: "https://www.pjenl.gob.mx/", desc: "Información de juzgados y expedientes del Poder Judicial de N.L." },
];
