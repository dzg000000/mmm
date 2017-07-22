/**
 * Created by lenovo on 2017/6/22.
 */
$(function () {
    var html = ""
    function jiaZai(){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getinlanddiscount",
            json:"jsonp",
            success: function (data) {
                console.log(data);
                html += template("product",data);
                $("#container>ul").html(html);
            }
        })
    }
    jiaZai();
    //异步加载
    var i = 0;
    $(document).scroll(function () {
        //求取文档卷去的高度
        var scrollHeight = $(document.body).scrollTop();

        //求取页面的高度
        var height = $(document.body).height();

        //求取屏幕的高度
        var screen = window.screen.height;

        if( $(document.body).scrollTop()>=$(document.body).height()-window.screen.height){
           i++
            if(i>3){
                return
            }
            jiaZai();
        }

    })
})