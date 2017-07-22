/**
 * Created by lenovo on 2017/6/19.
 */
$(function () {
    $.ajax({
        url:"http://182.254.146.100:3000/api/getcoupon",
        json:"jsonp",
        success: function (data) {
            console.log(data);
            var html = template("pic",data);
            $("#container>.pic").html(html);
        }
    })
})