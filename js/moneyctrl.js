/**
 * Created by lenovo on 2017/6/22.
 */
$(function () {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
    var categoryId=getQueryString("categoryId");
    var pageid = 1;
    var pageidTitle = 1;
    function getProductList(){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getmoneyctrl",
            json:"jsonp",
            data:{"pageid":pageid},
            success: function (data) {
                console.log(data);
                //获取总页数
                pageidTitle = Math.ceil(data.totalCount/data.pagesize);
                //渲染开始第一页
                var tag = template("categoryPage",data);
                $("#product").html(tag);
                //添加选择项
                var html = "";
                for (var i = 1; i <= pageidTitle; i++) {
                    html += "<option>"+i+"</option>";
                }
                $("#recommen>.bottom>select").html(html);
                //选择项根据上下页改变
                $("#recommen>.bottom>select>option:eq("+(pageid-1)+")").prop("selected",true);
            }
        })
    }
    getProductList();
    //改变选择项加载发送新的ajax
    //select有一个changes改变事件。
    $("#recommen>.bottom>select").change(function () {
        pageid = $(this).val();
        console.log(pageid);
        getProductList();
    });
    //点击下一页
    $("#recommen>.bottom>.next").click(function () {
        pageid++;
        if(pageid>pageidTitle){
            pageid = pageidTitle;
            return;
        }
        getProductList();
    })
    //点击上一页
    $("#recommen>.bottom>.prev").click(function () {
        pageid--;
        if(pageid==0){
            pageid =1;
            return;
        }
        getProductList();
    })
})