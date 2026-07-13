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
    rangoFechas: "Semana del martes 14 al sábado 18 de julio",

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
            diaSemana: "Martes 14 de julio",
            imagenes: ["img/14.jpg"],
            copy: `🏠 ¡Tener tu propiedad propia es más fácil de lo que parece! 

Hoy existen excelentes opciones y facilidades de financiamiento para lograrlo. Solo necesitas una guía cercana que te ayude a elegir la mejor alternativa para ti.

¿Te gustaría que conversemos sobre tus metas?

📲 Escríbeme`
        },

        {
            tipo: "video",
            diaSemana: "Jueves 16 de julio",
            imagenes: ["img/16.jpg"],
            copy: `¡Este exclusivo flat en Surco es el hogar que estabas buscando! 🏢

Vive con la tranquilidad y conexión que mereces en este espacio de 115.22 m²:

✅ 3 amplios dormitorios.
✅ Terraza privada para disfrutar.
✅ Edificio exclusivo de solo 14 departamentos.
✅ Estacionamiento incluido.

Tu nuevo hogar te espera en la mejor zona residencial.

💬 ¿Quieres conocer más detalles o agendar una visita? Envíame un mensaje y conversemos.`
        },

        {
            tipo: "imagen",
            diaSemana: "Viernes 17 de julio",
            imagenes: ["img/17.jpg"],
            copy: `¡El departamento en Surquillo ya fue alquilado! 🥂

Muchas gracias a todos por su interés y confianza.

📲 ¿Buscas algo similar en la zona? Escríbeme y te avisaré antes que nadie cuando tenga una nueva propiedad disponible.`
        },

        {
            tipo: "video",
            diaSemana: "Sábado 18 de julio",
            imagenes: ["img/18.jpg"],
            copy: `¡Elegir la ubicación perfecta es el secreto de una gran inversión! 🏡

Comprar en el lugar correcto marca toda la diferencia para que tu propiedad gane valor y sea siempre una excelente decisión.

📩 ¿Te gustaría que busquemos juntos la mejor ubicación para ti? Escríbeme y conversemos.`
        }
    ]
};
