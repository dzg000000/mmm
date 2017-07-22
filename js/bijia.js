$(function () {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }

    var productId = getQueryString("productId");
    $.ajax({
        url:"http://182.254.146.100:3000/api/getproduct",
        dataType:"json",
        data:{productid :productId},
        success: function (data) {
            console.log(data);
            var title = data.result[0].productName;
            //让得到的字符串以空格截取分成数组
            var arr = title.split(" ");
            var index = arr[0].indexOf("(",0);
            //字符串的截取
            arr[0] = arr[0].slice(0,index);
            //数组的截取
            var arr1 = arr.slice(0,2);
           var titleNew = arr1.join("");
            var tag = '<a href="#">'+titleNew +'></a>'
            $("#productInfo>.top>ul>li:eq(2)").html(tag);

            var categoryId = data.result[0].categoryId
            var html = template("productNew",data);
            $("#productInfo>.productNew").html(html);
            getProductListTitle(categoryId)
        }
    });
    function getProductListTitle(categoryId){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getcategorybyid",
            json:"jsonp",
            data:{"categoryid":categoryId},
            success: function (data) {
                var name = data.result[0].category;
                console.log(name);
                var tag = template("category",data);
                $("#productInfo>.top>ul>li:eq(1)").html(tag);
            }
        })

    }
//加载评论
    $.ajax({
        url:"http://182.254.146.100:3000/api/getproductcom",
        json:"json",
        data:{productid:productId},
        success: function (data) {
            console.log(data);
            var html = template("talk",data);
            $("#productInfo>.talk>.content").html(html);

        }
    })
} )