/**
 * Created by lenovo on 2017/6/27.
 */
$(function () {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
    var brandtitleid = getQueryString("brandtitleid");
    var brandTitle = getQueryString("brandTitle");
    var arr = brandTitle.split("十");
    var title = arr[0]+"哪个牌子好";
    var product = arr[0]+"产品销量排行";
    var talk = arr[0]+"最新评论";
    $("#container>.top>ul>li:eq(2)>a").html(title);
    $("#container>.center>.top").html(title);
    $("#container>.center>.middle").html(product);
    $("#container>.center>.bottom").html(talk);
    //封装 发送ajax
    function ajax(obj, callback){
      $.ajax({
          url:obj.url,
          dataType:"json",
          data:obj.data,
          success: function (data) {
             callback(data);
          }
      });
    }
    //调用ajax 渲染十大产品信息
    var productid =
    ajax({url:"http://127.0.0.1:3000/api/getbrand",data:{brandtitleid:brandtitleid}}, function (data) {
        var colors = ["#f10e0e","#ff9314","#8adf5b"];
        data.colors = colors;
        var html = template("productlist",data);
        $("#container>.center>ul").html(html);
        var nums = $("#container>.center>ul>li>a>.num");
        for (var i = 0; i < 3; i++) {
            nums[i].style.backgroundColor = colors[i];
        }
    })
    //调用ajax 渲染产品
    ajax({url:"http://127.0.0.1:3000/api/getbrandproductlist",data:{brandtitleid:brandtitleid,pagesize:4}}, function (data) {
        var html = template("productinfo",data);
        productid = data.result[0].productId;
        $("#container>.center>.product>ul").html(html);
        //调用ajax 渲染评论
        ajax({url:"http://127.0.0.1:3000/api/getproductcom",data:{productid :productid }}, function (data) {
            console.log(data);
            var html = template("talk",data);
            $("#container>.center>.talk>ul").html(html);
        })
    })

} )