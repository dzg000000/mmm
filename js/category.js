/**
 * Created by lenovo on 2017/6/19.
 */
/**
 * Created by lenovo on 2017/6/18.
 */
$(function () {
    $.ajax({
        url:"http://182.254.146.100:3000/api/getcategorytitle",
        json:"jsonp",
        success: function (data) {
            var html = template("groupTitle",data);
            $("#accordion").html(html);
            $("#accordion>.panel>.panel-heading>h4>a").click(function(){
                var gId =  $(this).attr("data-titleId") ;
                $.ajax({
                    url:"http://182.254.146.100:3000/api/getcategory",
                    json:"jsonp",
                    data:{"titleid":gId},
                    success: function (data) {
                        console.log(data);
                        var html = template("smallTitle",data);
                        $("#"+gId+">.panel-body>.row").html(html);
                    }
                })
            });
        }
    })
})