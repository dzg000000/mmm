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
                //��ȡ��ҳ��
                pageidTitle = Math.ceil(data.totalCount/data.pagesize);
                //��Ⱦ��ʼ��һҳ
                var tag = template("categoryPage",data);
                $("#product").html(tag);
                //���ѡ����
                var html = "";
                for (var i = 1; i <= pageidTitle; i++) {
                    html += "<option>"+i+"</option>";
                }
                $("#recommen>.bottom>select").html(html);
                //ѡ�����������ҳ�ı�
                $("#recommen>.bottom>select>option:eq("+(pageid-1)+")").prop("selected",true);
            }
        })
    }
    getProductList();
    //�ı�ѡ������ط����µ�ajax
    //select��һ��changes�ı��¼���
    $("#recommen>.bottom>select").change(function () {
        pageid = $(this).val();
        console.log(pageid);
        getProductList();
    });
    //�����һҳ
    $("#recommen>.bottom>.next").click(function () {
        pageid++;
        if(pageid>pageidTitle){
            pageid = pageidTitle;
            return;
        }
        getProductList();
    })
    //�����һҳ
    $("#recommen>.bottom>.prev").click(function () {
        pageid--;
        if(pageid==0){
            pageid =1;
            return;
        }
        getProductList();
    })
})