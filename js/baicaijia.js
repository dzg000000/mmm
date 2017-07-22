/**
 * Created by lenovo on 2017/6/23.
 */
$(function () {
    var width=0 ;
    var ul = $("#nav>ul");
    $.ajax({
       url:"http://182.254.146.100:3000/api/getbaicaijiatitle",
        dataType:'json',
        success: function (data) {
            var html = template("navList",data);
            ul.html(html);
            $("#nav>ul>li").each(function (i,v) {
                width +=v.offsetWidth;
                if(i==0){
                    $(this).children("a").addClass("active");
                }
                $(v).children("a").click(function () {
                    $(this).parent().siblings("li").children("a").removeClass("active");
                    $(this).addClass("active");
                    var titleid = data.result[i].titleId;
                    ajax(titleid);
                })
            });
           ul.css("width",width);
            console.log($("#nav").css("width"));
            huaDong();
          /*  var startX,moveX,distanceX;
            //获取手指的起始位置
            ul.get(0).addEventListener("touchstart", function (e) {
              startX= e.targetTouches[0].clientX;

          });
            //获取手指的移动距离
            ul.get(0).addEventListener("touchmove", function (e) {
                moveX= e.targetTouches[0].clientX;
                distanceX = moveX-startX;
                console.log("移动："+distanceX);
            });
            //移动结束后ul的移动距离
            ul.get(0).addEventListener("touchend", function (e) {
                ul.css("transition","left 5");
                ul.css("left",distanceX);
            });*/
  }
    })
    function huaDong(){
        var ct_cLeft=document.querySelector(".ct_cLeft");
        /*获取nav栏的高度 width*/
        /*获取用来滑动的列表 ul*/
        /*获取所有li元素 ul.children("li")*/
        /*设置静止状态下的最大top值*/
        var maxLeft=0;
        /*设置静止状态下的最小的top值*/
        var minLeft=parseInt($("#nav").css("width"))-parseInt(width);
        /*设置滑动状态下的最大的top值*/
        var maxBounceLeft=maxLeft+100;
        /*设置滑动状态下的最小top值*/
        var minBounceLeft=minLeft-100;
        /*实现滑动*/
        var startY=0;
        var moveY=0;
        var distanceY=0;
        /*记录当前元素滑动到的距离*/
        var currentY=0;
        /*添加滑动事件*/
        ul.get(0).addEventListener("touchstart",function(e){
            /*获取手指的起始坐标*/
            startY= e.targetTouches[0].clientX;
        });
        ul.get(0).addEventListener("touchmove",function(e){
            moveY= e.targetTouches[0].clientX;
            /*计算距离的差异*/
            distanceY=moveY-startY;
            /*判断滑动的时候是否超出当前指定的滑动区间*/
            if(currentY+distanceY > maxBounceLeft || currentY+distanceY < minBounceLeft){
                console.log("超出范围啦");
                return;
            }
            /*先将之前可能添加的过渡效果清除*/
            ul.get(0).style.transition="none";
            /*实现偏移操作:应该在之前的滑动距离的基础之上再进行滑动*/
            ul.get(0).style.left=(currentY+distanceY)+"px";
        });
        ul.get(0).addEventListener("touchend",function(e){
            /*判断当前滑动的距离是否在静止状态和滑动状态下的最小top值之间*/
            if(currentY+distanceY < minLeft){
                currentY=minLeft;
                /*回到minTop位置*/
                ul.get(0).style.transition="left 0.5s";
                ul.get(0).style.left=minLeft+"px";
            }
            else if(currentY+distanceY > maxLeft){
                currentY=maxLeft;
                /*回到maxTop位置*/
                ul.get(0).style.transition="left 0.5s";
                ul.get(0).style.left=maxLeft+"px";
            }
            else{
                /*记录当前滑动的距离*/
                currentY+=distanceY;
            }
        });

        /*为每一个li元素设置添加一个索引值*/
       /* for(var i=0;i<lis.length;i++){
            /!*lis[i].setAttribute("index",i);*!/
            lis[i].index=i;
        }*/

    }
    function ajax(titleid){
        console.log(titleid);
        $.ajax({
            url:"http://182.254.146.100:3000/api/getbaicaijiaproduct",
            dataType:"json",
            data:{"titleid":titleid},
            success: function (data) {
                console.log(data);
                var html  = template("product",data);
                $("#recommen>ul").html(html);
            }
        })

    }
    ajax(0)

})