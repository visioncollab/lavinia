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
    rangoFechas: "Semana del martes 21 al sábado 25 de julio",

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
            diaSemana: "Martes 21 de julio",
            imagenes: ["img/21.jpg"],
            copy: `🚨 ¿Tu edificio está listo para una emergencia?

En una crisis, los primeros minutos definen todo. No esperes a que ocurra para actuar.
✅ Organiza brigadas.
✅ Capacita a tus vecinos en primeros auxilios.
✅ Ten un plan de evacuación claro.

Tu seguridad y la de tu familia dependen de la preparación. ¡Hagamos de nuestro condominio un lugar seguro! 👇`
        },

        {
            tipo: "imagen",
            diaSemana: "Jueves 23 de julio",
            imagenes: ["img/23.jpg"],
            copy: `¡Saludos en el día de la FAP! 🛫 Honramos la memoria del Capitán Quiñones, símbolo de coraje. Inspirados en esa misma visión, trabajamos con firmeza para que cada paso que des en tus inversiones sea seguro y exitoso. ✨`
        },

        {
            tipo: "video",
            diaSemana: "Viernes 24 de julio",
            imagenes: ["img/24.jpg"],
            copy: `🏠 Comprar bien no es cuestión de suerte, es cuestión de estrategia.

Antes de elegir, asegúrate de conocer los números reales, la plusvalía y el potencial de tu inversión. Que tu próxima compra sea una decisión inteligente, no un gasto extra.

📲 ¿Quieres comprar con seguridad? Escríbeme y analicemos juntos las mejores opciones.`
        },

        {
            tipo: "video",
            diaSemana: "Sábado 25 de julio",
            imagenes: ["img/25.jpg"],
            copy: `¡Tu nuevo hogar en Surco te espera! 🏢

Disfruta de 115 m² diseñados para tu comodidad: 3 amplios dormitorios, terraza privada y la tranquilidad de un edificio exclusivo (solo 14 departamentos). Incluye estacionamiento.

¡Agenda tu visita hoy mismo! Escríbeme y coordinemos.`
        }
    ]
};
