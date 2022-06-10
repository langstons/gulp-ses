import gulp from "gulp"

// Config
import path from "../config/path"
import app from "../config/app"

// Plugins
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import newer from "gulp-newer"
import fonter from "gulp-fonter"
import ttf2woff2 from "gulp-ttf2woff2"

// Fonts processing
export default () => {
  return gulp.src(path.fonts.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "Fonts",
        message: error.message
      }))
    }))
    .pipe(newer(path.fonts.dest))
    .pipe(fonter(app.fonter))
  .pipe(gulp.dest(path.fonts.dest))
    .pipe(ttf2woff2())
  .pipe(gulp.dest(path.fonts.dest))
}