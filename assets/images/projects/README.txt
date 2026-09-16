CÓMO SUBIR TUS IMÁGENES
========================

Cada proyecto tiene su propia carpeta aquí dentro:

  assets/images/projects/denodo/
  assets/images/projects/goodtings/
  assets/images/projects/content/

Dentro de cada carpeta hay:
  - cover.jpg      → imagen principal (la que se ve en las tarjetas y arriba del todo)
  - gallery-1.jpg   → imagen de la galería, dentro de la página del proyecto
  - gallery-2.jpg   → otra imagen de galería

Para poner tus propias imágenes, simplemente sustituye esos archivos por
los tuyos CON EL MISMO NOMBRE (cover.jpg, gallery-1.jpg, gallery-2.jpg).
No hace falta tocar ningún código — la web las coge automáticamente.

¿Quieres más de 2 imágenes en la galería de un proyecto? Añade
gallery-3.jpg, gallery-4.jpg... y edita assets/data.js: dentro del
proyecto correspondiente, añade la ruta nueva al array "gallery".

¿Quieres añadir un proyecto nuevo entero?
  1. Crea una carpeta nueva aquí, p. ej. assets/images/projects/mi-proyecto/
  2. Añade tus imágenes (cover.jpg + gallery-N.jpg)
  3. Abre assets/data.js y copia uno de los bloques { ... } existentes,
     cambia el "slug", el título, las descripciones EN/ES y las rutas
     de imagen. Aparecerá automáticamente en la home y en /projects.html.

Formato recomendado: .jpg, orientación horizontal para cover.jpg
(aprox. 1600×1100px), peso moderado (idealmente bajo 400KB) para que
la web cargue rápido.
