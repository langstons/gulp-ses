import gulp from "gulp"

// Config
import path from "../config/path"

// Plugins
import fileInclude from "gulp-file-include"
import plumber from "gulp-plumber"
import notify from "gulp-notify"

// HTML processing
export default () => {
  return gulp.src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "HTML",
        message: error.message
      }))
    }))
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
  .pipe(gulp.dest(path.html.dest))
}