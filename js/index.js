$(function () {
     function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
    var back= getQueryString("back");
    if(back){
         $("#menu").css({height:"290px"});
         flag = 0;
    }else{
       var flag = 1;  
    }
    function get(obj,callback){
        $.ajax({
            url:obj.url,
            dataType:'jsonp',
            data:obj,
            success: function (data) {
                callback(data);
            }
        })
    }
    //获取菜单栏信息
    get({url:"http://182.254.146.100:3000/api/getindexmenu"}, function (data) {
        var data = data.result;
        var tag = "";
        $.each(data, function (i,v) {
            tag +=  '<a href="'+v.titlehref+'">'+
                '<div class="pic">'+ v.img+
                '</div>'+
                '<span class="name">'+ v.name+'</span>'+
                '</a>';

        })
        $("#menubox").html(tag);
       
        $("#menubox").find("a:eq(7)").click(function () {
            if(flag==1){
                $("#menu").css({height:"290px"});
                flag = 0;
            }else{
                $("#menu").css({height:"200px"});
                flag=1;
            }
        });
    });
   //促销获取信息
    get({url:"http://182.254.146.100:3000/api/getmoneyctrl"},function(data){
        var data = data.result;
        var tag = "";
        $.each(data,function(i,v){
            var num1 = v.productComCount.replace("人评论","").replace("有","");
            tag +=   '<a href="#" class="info" >'+
                     '<div class="left">'+ v.productImgLg+
                     '</div>'+
                     '<div class="right">'+
                     '<div class="top">'+ v.productName+
                     '<span class="red">'+ v.productPinkage+'</span>'+
                     '</div>'+
                     '<div class="bottom">'+
                     '<span>'+ v.productFrom+'|'+ v.productTime+'</span>'+
                     '<span class="icon iconfont icon-pinglun">'+ num1+'</span>'+
                     '</div>'+
                     '</div>'+
                     '</a>';

        })
        $("#product").html(tag);
    })

})