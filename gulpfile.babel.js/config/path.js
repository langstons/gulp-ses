const pathSrc = "./src";
const pathDest = "./public";

export default {
  
  root: pathDest,

  html: {
    src: pathSrc + "/views/**/*.html",
    watch: [pathSrc + "/views/**/*.html", pathSrc + "/components/**/*.html"],
    dest: pathDest
  },

  css: {
    src: [pathSrc + "/styles/css/**/*.css", pathSrc + "/components/**/*.css"],
    libs: pathSrc + "/styles/libs/**/*.{css,min.css}",
    watch: [pathSrc + "/styles/css/**/*.css", pathSrc + "/components/**/*.css"],
    dest: pathDest + "/css"
  },

  scss: {
    src: pathSrc + "/styles/scss/main.{scss,sass}",
    watch: [pathSrc + "/styles/scss/**/*.{scss,sass}", pathSrc + "/components/**/*.{scss,sass}"],
    dest: pathDest + "/css"
  },

  javascript: {
    src: pathSrc + "/js/main.js",
    libs: pathSrc + "/js/libs/**/*.js",
    watch: [pathSrc + "/js/**/*.js", pathSrc + "/components/**/*.js"],
    dest: pathDest + "/js"
  },

  img: {
    src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,ico}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,ico}",
    dest: pathDest + "/img"
  },

  sprite: {
    src: pathSrc + "/img/icons/**/*.svg",
    watch: pathSrc + "/img/icons/**/*.svg",
    dest: pathDest + "/img"
  },

  fonts: {
    src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    dest: pathDest + "/fonts"
  },
}