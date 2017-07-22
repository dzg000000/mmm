/**
 * Created by lenovo on 2017/6/19.
 */
$(function () {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
    var couponId=getQueryString("couponId");
    var couponTitle=getQueryString("couponTitle");
    var tagTitle = couponTitle+"优惠券";
    $("#header>h3").html(tagTitle);
    var tag = template("couponTitle",couponTitle);
    $("#container>.top>ul>li:eq(2)>a").html(tag);
   function getProductList(){
       $.ajax({
           url:"http://182.254.146.100:3000/api/getcouponproduct",
           json:"jsonp",
           data:{"couponid":couponId},
           success: function (data) {
               console.log(data);
               //渲染页面
               var html = template("productList",data);
               $("#container>.center>ul").html(html);
               //渲染遮罩
               var html =template("maskList",data);
               $("#mask>.list>.img>ul").html(html);
               //给每个产品添加点击事件出现遮罩
               var x;
               $("#container>.center>ul>li").each(function (i,e) {
                   $(e).click(function () {
                       x = -i;
                       $("#mask").css("display","block");
                       $("#mask>.list>.img>ul").css("transform","translateX("+(x*width)+"px)");
                       console.log(x);
                   })
               });
               //点击其他部分 让遮罩消失
               $("#mask").click(function () {
                   $("#mask").css("display","none");
               });
               //
              /* $("#mask>.list>.img>ul").css("width",ulWidth);*/






               var width = $("#mask>.list>.img>ul>li").width();
               var j =$("#mask>.list>.img>ul>li").length;
               //设置遮罩中图片的宽度
               var ulWidth = j*width;
               $("#mask>.list>.img>ul").css("width",ulWidth);
               //点击箭头切换图片
               $("#mask>.list>.jian>span:eq(0)").click(function (e) {
                   if(x>=0){
                        x = -j;
                   }
                   x++;
                   e.stopPropagation();
                   $("#mask>.list>.img>ul").css("transform","translateX("+x*width+"px)");

               })
               $("#mask>.list>.jian>span:eq(1)").click(function (e) {
                   if(x<= -j+1){
                       x=1;
                   }
                   x--;
                   e.stopPropagation();
                   $("#mask>.list>.img>ul").css("transform","translateX("+x*width+"px)");
               })
               //自动轮播
               setInterval(function () {

               },30)
           }
       })
   }
    getProductList();

})