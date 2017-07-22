/**
 * Created by lenovo on 2017/6/22.
 */
$(function () {
    var productid,flag,tag;
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
    productid=getQueryString("productid");
    console.log(productid);
    flag=getQueryString("flag");
    console.log(flag);
    function select(obj){
        $.ajax({
            url:obj.url,
            dataType:"json",
            data:{productid:obj.productid},
            success: function (data) {
                console.log(data);
                var html = template("categoryPage",data);
                $("#container").html(html);
            }
        })
    }
    if(flag=="true"){

        select({url:"http://182.254.146.100:3000/api/getmoneyctrlproduct",productid:productid})
        tag = '<a href="moneyctrl.html" class="mm_logo">'+
                '<span class="iconfont icon-jiantou-copy"></span>'+
                '</a>';
    }
    if(flag=="false"){

        select({url:"http://182.254.146.100:3000/api/getdiscountproduct",productid:productid})
         tag = '<a href="inlanddiscount.html" class="mm_logo">'+
            '<span class="iconfont icon-jiantou-copy"></span>'+
            '</a>';
    }
    var h3 = $("#header>h3");
    $("#header").prepend(h3,tag);
})