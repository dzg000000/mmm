$(function () {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
    var productId = getQueryString("productId");
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbrandtitle",
        dataType:"json",
        success: function (data) {
            console.log(data);
            var html = template("brandProduct",data);
            $("#container>.center>.brandTitle>ul").html(html);
        }

    });

} )