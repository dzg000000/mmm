var gulp =  require('gulp')
var uglify = require('gulp-uglify')
var concat = require("gulp-concat")
var cssnano = require("gulp-cssnano")
var htmlmin = require("gulp-htmlmin")
// 处理app.js文件
/*gulp.task('script', function(){
    // 1.要匹配到要处理的文件
    // 指定指定的文件:参数是匹配的规则
    // 参数也可以是数组，数组中的元素就是匹配的规则
    gulp.src(['./app.js','./product.js'])
        // concat 的参数是合并之后的文件名字
        .pipe(concat('index.js'))
        .pipe(uglify())
        // dest方法参数，指定输出文件的路径
        .pipe(gulp.dest('./dist'))
})*/
// 引入js文件
gulp.task("script", function () {
    //匹配要处理的文件
    gulp.src(["./js/baicaijia.js","./js/bijia.js","./js/brandproduct.js","./js/brandpTitle.js","./js/category.js","./js/coupon.js","./js/couponproduct.js","./js/gsproduct.js","./js/index.js","./js/inlanddiscount.js","./js/moneyctrl.js","./js/moneyproduct.js","./js/producttlist.js","./js/sitenav.js"])
        //合并文件
        .pipe(concat("index.js"))
        //压缩文件
        .pipe(uglify())
        //输出文件
        .pipe(gulp.dest("./js/"))
})
gulp.task("style", function () {
    //匹配要处理的文件
    gulp.src(["./index.css","./haohao.css"])
        //合并文件
        .pipe(concat("index1.css"))
        //压缩文件
        .pipe(cssnano())
        //输出文件
        .pipe(gulp.dest("./dist"))
})
gulp.task("html", function () {
    //匹配要处理的文件
    gulp.src("./index.html")
        //压缩文件
        .pipe(htmlmin({collapseWhitespace:true}))
        //输出文件
        .pipe(gulp.dest("./dist"))
})
gulp.task("mywatch",function(){
    gulp.run("style")
    gulp.watch(["./index.css","./haohao.css"],["style"])
})