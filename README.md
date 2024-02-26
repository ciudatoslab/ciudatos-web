# Web de Ciudatos Bolivia
## Frameworks usados en este proyecto
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)

👉 Para instalar las dependencias y trabajar localmente, abrir el proyecto en VS Code y escribir en la terminal:
```text
npm install
```

## 📂 Estructura del repo
Trabajaremos, más que todo, con la carpeta `src` y `public`.

```text
/
├── public/
│   └── img/ (aquí almacenamos las imágenes de vista previa para las tarjetas y la vista de los datasets)
│   └── data/ (json con los datos de los datasets de Ciudatos, actualmente sigue en construcción)
├── src/
│   └── components/
│   └── layouts/
│   └── pages/
│       └── index.astro
│   └── styles/
```

## 🎨 Diseño web e identidad organizacional
- Puedes acceder al diseño web [aquí](https://www.figma.com/file/XTWHTAEaMuHzgp3gDSGvWG/ciudatos?type=design&node-id=0%3A1&mode=design&t=pVIE4PvEJjwI5lRs-1) (El archivo de Figma tiene dos pestañas: moodboard y web. El diseño se encuentra en `web`)
- Puedes acceder a información sobre el proyecto [aquí](https://docs.google.com/presentation/d/1U-YvVbXL1yq171ZreV41ZZQZWh7ZzTNo97yBEekGKT0/edit?usp=drive_web&ouid=105689299042921048294)

## ⚠️ Advertencia
- Fíjate en el GitHub si alguien ha hecho comits antes de hacer `git pull`.
- Cuando estés construyendo los componentes con tailwind, recuerda que debes utilizar las pseudo-clases de con la fuente y los colores del proyecto, que son:

```text
**Colores**
'azul-ciudatos'
'verde-ciudatos'
'verde-suave-ciudatos'
'gris'

**Fuente**
'text-rubik'
```