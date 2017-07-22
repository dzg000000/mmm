var gulp =  require('gulp')
var uglify = require('gulp-uglify')
var concat = require("gulp-concat")
var cssnano = require("gulp-cssnano")
var htmlmin = require("gulp-htmlmin")
// ����app.js�ļ�
/*gulp.task('script', function(){
    // 1.Ҫƥ�䵽Ҫ������ļ�
    // ָ��ָ�����ļ�:������ƥ��Ĺ���
    // ����Ҳ���������飬�����е�Ԫ�ؾ���ƥ��Ĺ���
    gulp.src(['./app.js','./product.js'])
        // concat �Ĳ����Ǻϲ�֮����ļ�����
        .pipe(concat('index.js'))
        .pipe(uglify())
        // dest����������ָ������ļ���·��
        .pipe(gulp.dest('./dist'))
})*/
// ����js�ļ�
gulp.task("script", function () {
    //ƥ��Ҫ������ļ�
    gulp.src(["./js/baicaijia.js","./js/bijia.js","./js/brandproduct.js","./js/brandpTitle.js","./js/category.js","./js/coupon.js","./js/couponproduct.js","./js/gsproduct.js","./js/index.js","./js/inlanddiscount.js","./js/moneyctrl.js","./js/moneyproduct.js","./js/producttlist.js","./js/sitenav.js"])
        //�ϲ��ļ�
        .pipe(concat("index.js"))
        //ѹ���ļ�
        .pipe(uglify())
        //����ļ�
        .pipe(gulp.dest("./js/"))
})
gulp.task("style", function () {
    //ƥ��Ҫ������ļ�
    gulp.src(["./index.css","./haohao.css"])
        //�ϲ��ļ�
        .pipe(concat("index1.css"))
        //ѹ���ļ�
        .pipe(cssnano())
        //����ļ�
        .pipe(gulp.dest("./dist"))
})
gulp.task("html", function () {
    //ƥ��Ҫ������ļ�
    gulp.src("./index.html")
        //ѹ���ļ�
        .pipe(htmlmin({collapseWhitespace:true}))
        //����ļ�
        .pipe(gulp.dest("./dist"))
})
gulp.task("mywatch",function(){
    gulp.run("style")
    gulp.watch(["./index.css","./haohao.css"],["style"])
})