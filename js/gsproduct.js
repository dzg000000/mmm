/**
 * Created by lenovo on 2017/6/19.
 */
$(function () {
    //封装ajax
   function ajax(obj,callback){
       $.ajax({
           url:obj.url,
           json:"jsonp",
           data:{"shopid":obj.shopid,"areaid":obj.areaid},
           success: function (data) {
               callback(data);
           }
       })
   }
    var shopid =0,areaid=0;
    //根据商店的id 发送ajax获取商品信息渲染到页面到页面上
    function profer(){
        ajax({url:"http://182.254.146.100:3000/api/getgsproduct",areaid:areaid,shopid:shopid}, function (data) {
            var html = template("product",data);
            $("#container>.content").html(html);
        })

    }
    profer();
    //获取商店信息
    ajax({
        url:"http://182.254.146.100:3000/api/getgsshop",
    }, function (data) {
        var html = template("shop",data);
        $("#container>.top>.one>ul").html(html);
        //让ul里面的内容反应到标题框中
        $("#container>.top>.one>button").html($("#container>.top>.one>ul>li:eq(0)>.text").html()+'<span class="caret"></span>');
        $("#container>.top>.one>ul>li:eq(0)>span").css("display","block");
        //获取刚开始加载页面时店铺的id
        //给Li添加点击事件
        $("#container>.top>.one>ul>li").each(function (i,e) {
            $(e).click(function () {
                $(e).siblings().children("span").css("display","none");
                $(e).children("span").css("display","block");
                $("#container>.top>.one>button").html($(e).children(".text").html()+'<span class="caret"></span>');
                //获取点击之后li的id 发送ajax渲染页面
                shopid = $(e).attr("id");
                //根据商店的id 发送ajax获取商品信息渲染到页面到页面上
                profer()
            })
        });
    })


    //获取位置信息
    ajax({
        url:"http://182.254.146.100:3000/api/getgsshoparea",
    }, function (data) {
        var html = template("area",data);
        $("#container>.top>.two>ul").html(html);
        //让ul里面的内容反应到标题框中
        var arr = $("#container>.top>.two>ul>li:eq(0)>.text").html().split("（");
        $("#container>.top>.two>button").html(arr[0]+'<span class="caret"></span>');
        $("#container>.top>.two>ul>li:eq(0)>span").css("display","block");
        //获取刚开始加载页面时地区的id
        //给Li添加点击事件
        $("#container>.top>.two>ul>li").each(function (i,e) {
            $(e).click(function () {
                arr = $(e).children(".text").html().split("（");
                $(e).siblings().children("span").css("display","none");
                $(e).children("span").css("display","block");
                $("#container>.top>.two>button").html(arr[0]+'<span class="caret"></span>');

                //获取点击之后li的id 发送ajax渲染页面
                areaid = $(e).attr("id");
                //根据商店的id 发送ajax获取商品信息渲染到页面到页面上
                profer();
            })
        });

    })





})

