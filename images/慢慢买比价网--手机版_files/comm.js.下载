function onselecta(pagename, s) {
    //                alert(pagename);
    //                alert(s);
    window.location.href = pagename + "?PageID=" + $('#selectPage').val() + s;
}
function delfav(spid) {
    if (!confirm('你确定要删除该记录吗？')) {
        return;
    }
    $.ajax({
        url: "Process.aspx?DA=" + new Date(),
        type: 'post', //数据发送方式 
        dataType: 'html', //接受数据格式 
        data:
                                {
                                    type: 'delfav',
                                    username: escape($('#hidU').val()),
                                    spid: spid
                                },
        success: delfav_refresh //回传函数(这里是函数名)   error转向错误页面
    });
}
function delfav_refresh(obj) { //ajax提交后返回
    if (obj == "true") {
        alert('删除收藏成功！');
        window.location.href = window.location.href;
    }
    else {
        alert('删除收藏失败，请稍后再试！');
    }
}
function setfav(spid) {
    if ($('#hidU').val() == '') { //用户未登陆 提示登陆
        if (!confirm('你当前还未登陆，是否去登陆？')) {
            return;
        }
        window.location.href = "login.aspx?tourl=" + escape(window.location.href);
        return;
    }
    if (!confirm('你确定要收藏此商品么？')) {
        return;
    }
    ServerSetFav(escape($('#hidU').val()), spid);
}

function ServerSetFav(username, spid) {
    $.ajax({
        url: "Process.aspx?DA=" + new Date(),
        type: 'post', //数据发送方式 
        dataType: 'html', //接受数据格式 
        data:
                                {
                                    type: 'SetFav',
                                    username: username,
                                    spid: spid
                                },
        success: Fav_refresh //回传函数(这里是函数名)   error转向错误页面
    });
    return true;

}
function Fav_refresh(obj) { //ajax提交后返回

    if (obj == "true1") {//初始收藏成功
        alert('加入收藏成功！');
    }
    else {
        alert('加入收藏失败！');
    }
}