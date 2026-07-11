/* ============================================================================
   EDITA SOLO ESTE ARCHIVO PARA CADA CLIENTE O SEMANA
   ============================================================================

   CAMBIO RÁPIDO:
   1. Edita la sección DATOS DEL CLIENTE.
   2. Edita la sección DATOS DE LA SEMANA.
   3. Cambia el texto, fecha e imágenes de las publicaciones.
   4. Guarda las imágenes dentro de la carpeta "img".

   NO es necesario editar index.html, config.js ni style.css.
============================================================================ */

const CONFIG_SEMANAL = {

    /* ------------------------------------------------------------------------
       1. DATOS DEL CLIENTE
       Estos datos se escriben UNA SOLA VEZ.
    ------------------------------------------------------------------------ */
    cliente: "Lavinia Flores",
    usuarioInstagram: "lflores.bienesraices",

    // Firma que se agregará automáticamente al final de todas las publicaciones.
    firmaPublicaciones: "Lavinia Flores | MVCS PN-7714",
    whatsappPublicaciones: "51997937414",

    // Número al que llegará la aprobación. Solo números y con código de país.
    // Déjalo vacío para que el cliente elija el chat de WhatsApp.
    whatsappDestino: "",

    /* ------------------------------------------------------------------------
       2. DATOS DE LA SEMANA
    ------------------------------------------------------------------------ */
    titulo: "Calendario Julio 2026",
    rangoFechas: "Semana del martes 07 al sábado 11 de julio",

    /* ------------------------------------------------------------------------
       3. PUBLICACIONES

       tipo: puede ser "imagen", "video" o "carrusel".
       diaSemana: fecha que verá el cliente.
       imagenes: nombre y ubicación de las imágenes.
       copy: escribe solamente el contenido principal. La firma se añade sola.

       PARA UN CARRUSEL:
       imagenes: ["img/1.jpg", "img/2.jpg", "img/3.jpg"]
    ------------------------------------------------------------------------ */
    publicaciones: [
        {
            tipo: "imagen",
            diaSemana: "Martes 07 de julio",
            imagenes: ["img/7.jpg"],
            copy: `¿Espacio o Calidad de Vida? 🏠

Ya no buscamos casas gigantes. Buscamos tiempo.
La tendencia hoy es clara: mejor distribución, menos mantenimiento y una ubicación que te devuelva horas al día.

Un metro cuadrado bien diseñado vale más que diez vacíos.

¿Qué pesa más en tu decisión: el tamaño o la ubicación?`
        },

        {
            tipo: "imagen",
            diaSemana: "Jueves 09 de julio",
            imagenes: ["img/9.jpg"],
            copy: `¿Estás pensando en solicitar un crédito hipotecario? 🏠

Estas son las 5 entidades bancarias con menores tasas hipotecarias para vivienda en moneda nacional, según información de la SBS.

Comparar tasas antes de elegir un banco puede marcar una gran diferencia en tu cuota mensual y en el monto total que terminarás pagando.

📌 Fuente: SBS
📅 Fecha de consulta: 01/07/2026
⚠️ Tasas referenciales sujetas a evaluación crediticia de cada entidad.`
        },

        {
            tipo: "video",
            diaSemana: "Viernes 10 de julio",
            imagenes: ["img/10.jpg"],
            copy: `📍 La ubicación no lo es todo, la conectividad sí.

Antes de comprar, ignora los metros cuadrados y mira afuera:

📌 ¿Qué tienes a 5 minutos caminando?
📌 ¿Qué proyectos vienen a la zona?
📌 ¿Tu día a día será más fácil o más difícil?

La plusvalía está en la infraestructura que te rodea.

¿Analizas el entorno antes de cerrar el trato o te dejas llevar por la fachada?`
        },

        {
            tipo: "video",
            diaSemana: "Sábado 11 de julio",
            imagenes: ["img/11.jpg"],
            copy: `¡Disponible en el corazón de San Isidro/Aramburú! 🏢

Este departamento tiene todo lo que buscas:
✅ 2 dormitorios + 2 baños.
✅ Balcón con vista exterior.
✅ Iluminación natural impecable.

Ubicación inmejorable en calle Las Garzas Sur.

¿Te interesa? Mándame un mensaje y coordinamos. 💬`
        }
    ]
};
