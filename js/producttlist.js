/**
 * Created by lenovo on 2017/6/19.
 */
$(function () {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
    var categoryId=getQueryString("categoryId");
    console.log(categoryId);
    function getProductListTitle(){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getcategorybyid",
            json:"jsonp",
            data:{"categoryid":categoryId},
            success: function (data) {

                var name = data.result[0].category;
                var tag = template("category",data);
                $("#container>.top>ul>li:eq(2)").html(tag);
            }
        })

    }
    getProductListTitle();
    var pageid = 1;
    var pageidTitle = 1;
   function getProductList(){
       $.ajax({
           url:"http://182.254.146.100:3000/api/getproductlist",
           json:"jsonp",
           data:{"categoryid":categoryId,"pageid":pageid},
           success: function (data) {
               console.log(data);
               //获取总页数
               pageidTitle = Math.ceil(data.totalCount/data.pagesize);
               //渲染开始第一页
               var tag = template("categoryPage",data);
               $("#container>.center>ul").html(tag);
               //添加选择项
               var html = "";
               for (var i = 1; i <= pageidTitle; i++) {
                   html += "<option>"+i+"</option>";
               }
               $("#container>.bottom>select").html(html);
               //选择项根据上下页改变
               $("#container>.bottom>select>option:eq("+(pageid-1)+")").prop("selected",true);

           }
       })
   }
    getProductList();
    //改变选择项加载发送新的ajax
    //select有一个changes改变事件。
    $("#container>.bottom>select").change(function () {
        pageid = $(this).val();
        console.log(pageid);
        getProductList();
    });
    //点击下一页
    $("#container>.bottom>.next").click(function () {
        pageid++;
        if(pageid>pageidTitle){
            pageid = pageidTitle;
            return;
        }
        getProductList();
    })
    //点击上一页
    $("#container>.bottom>.prev").click(function () {
        pageid--;
        if(pageid==0){
            pageid =1;
            return;
        }
        getProductList();
    })
})