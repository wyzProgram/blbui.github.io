/**
*UI框架 百联百

*作者:Allen wangyongzhi

*联系方式:858272689@qq.com

*创作日期:2015-11-15 10:00

**/

function BLBUI() { };

//立即加载函数
BLBUI.action = function (actionFun) {
    window.onload = function () {
        if (actionFun && actionFun instanceof Function) {
            BLBUI.tool.isSysJs()?actionFun():alert("非法使用!");
        }
    };
};

//颜色值
BLBUI.color = {
    gray01: "#F5F5F5",
    gray02: "#DCDCDC",
    gray03: "#D3D3D3",
    gray04: "#808080",
    gray05: "#696969",
    blue00: "#4682B4",
    purple00: "#4B0082",
    blue00: "#6A5ACD",
    yellow00: "#D2691E",
    red00: "#FF6347",
    green00: "#006400",
    blue: "#6699cc",
    purple: "#663366",
    yellow: "#cccc99",
    red: "#990033",
    green: "#ccff66",
    yellow: "#ff9900",
    white: "#FFFFFF",
    black:"#000000"
};

//创建对象
BLBUI.createElement = function (id, width, height, color,fontColor,backimg, padding, edit, radius) {
    var cdiv = document.createElement("div");
    cdiv.id=id;
    cdiv.style.width=width;
    cdiv.style.height = height;
    cdiv.style.backgroundColor = color;
    cdiv.style.color = fontColor;
    cdiv.style.position = "relative";
    cdiv.style.backgroundImage = "url(" + backimg + ")";
    cdiv.style.backgroundSize = "cover";
    cdiv.style.padding = padding;
    cdiv.contentEditable = edit;
    cdiv.style.opacity = "0.98";
    cdiv.style.borderRadius = radius;
    cdiv.style.overflow = "auto";
    return cdiv;
};

//设置窗口
BLBUI.setWindow = function (id) {
    document.body.appendChild(id);
};

//删除窗口
BLBUI.delWindow = function (id) {
    document.body.removeChild(id);
};

//添加元件
BLBUI.add = function (id, child) {
    document.getElementById(id).appendChild(child);
};

//删除元件
BLBUI.del = function (id,child) {
    document.getElementById(id).removeChild(child);
};

//对象事件
BLBUI.click = function (id, openUrl) {
    
    document.getElementById(id).addEventListener('click', function () {
        if (openUrl && openUrl instanceof Function) {
            openUrl();
        }
        else {
            location.href = openUrl;
            }
        }, false);
};

//ajax事件
BLBUI.wAjax = function (url, data, callback) {
   // document.getElementById(id).onclick = function () { };
        var httpRequest = false;

        if (window.XMLHttpRequest) {
            httpRequest = new XMLHttpRequest();
            if (httpRequest.overrideMimeType) {
                httpRequest.overrideMimeType("text/xml");
            }
        }
        else if (window.ActiveXObject) {
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) {
                }
            }
        }

        if (!httpRequest) {
            alert('XMLHTTP instance error!');
            return false;
        }

        // 立即执行数据回收
        httpRequest.onreadystatechange = function ()
        {
            if (httpRequest.readyState == 4) {
                if (httpRequest.status == 200) {
                    // 去http的返回值, 也就是post.php中echo出的值
                    if(callback&&callback instanceof Function)
                    {
                        callback(httpRequest.responseText);
                    }
                   // return httpRequest.responseText;
                  //  alert(httpRequest.responseText);
                }
                else {
                    alert('Page  url error');
                }
            }
        };

        httpRequest.open("POST", url, true);
        // POST 方法必须有的函数1 => 传输数据需要用setRequestHeader() 来添加 HTTP 头
        httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // post 方法必须有的函数2 => 传值的方法 .send( 'name=value' );
        httpRequest.send('data=' + data);
}

//工具 setCenter设置为居中 getTagValue获取标签值
BLBUI.tool = {
    setCenter: function (tagId,isTop,isLeft)
    {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var m = document.getElementById(tagId);
        var hv = h / 2 - parseInt(m.style.height.replace("px", "")) / 2;
        var istopvalue = isTop == true ? 0 :hv;
        m.style.top = istopvalue + "px";
        var isLeftvalue = isLeft == true ? 0 : (w / 2 - parseInt(m.style.width.replace("px", "")) / 2);
        m.style.left = isLeftvalue + "px";
    },
    getTagValue: function (tagId)
    {
        return BLBUI.tool.toTagString(document.getElementById(tagId).innerHTML);
    },
    setTagValue: function (tagId, value)
    {
        document.getElementById(tagId).innerHTML = value;
    },
    setFixed:function(tagId,isTop,isLeft,isBottom,zindex)
    {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var m = document.getElementById(tagId);
        var hv = h / 2 - parseInt(m.style.height.replace("px", "")) / 2;
        var istopvalue = isTop == true ? 0 : hv;
        istopvalue=isBottom?h-parseInt(m.style.height.replace("px", "")):istopvalue;
        m.style.top = istopvalue + "px";
        var isLeftvalue = isLeft == true ? 0 : (w / 2 - parseInt(m.style.width.replace("px", "")) / 2);
        m.style.left = isLeftvalue + "px";

        document.getElementById(tagId).style.bottom = "0px";
        document.getElementById(tagId).style.position = "fixed";
        document.getElementById(tagId).style.zIndex = zindex;
    },
    setTagCent:function(tagId,toTagId)
    {
        var k = document.getElementById(tagId);
        var tk = document.getElementById(toTagId);
        k.style.margin = "0 auto";
        var h=(parseInt(tk.style.height.replace("px",""))/2-parseInt(k.style.height.replace("px",""))/2);
        k.style.marginTop = h+"px";
        k.style.marginBottom= h + "px";
  },
    getExplorerVersion: function ()
    {
            var explorer = window.navigator.userAgent;
            //ie 
            if (explorer.indexOf("MSIE") >= 0) {
                return "IE";
            }
                //firefox 
            else if (explorer.indexOf("Firefox") >= 0) {
                return "Firefox";
            }
                //Chrome
            else if (explorer.indexOf("Chrome") >= 0) {
                return "Chrome";
            }
                //Opera
            else if (explorer.indexOf("Opera") >= 0) {
                return "Opera";
            }
                //Safari
            else if (explorer.indexOf("Safari") >= 0) {
                return "Safari";
            }
    },
    saveCss:function()
    {
        //一段css代码
        //HEIGHT:500px;WIDTH:550px;PADDING-RIGHT:10px;OVERFLOW-Y:auto;PADDING-LEFT:10px;
        //SCROLLBAR-FACE-COLOR:#CC9999;PADDING-BOTTOM:0px;
        //SCROLLBAR-HIGHLIGHT-COLOR:#CCFFFF;OVERFLOW:auto;
        //SCROLLBAR-TRACK-COLOR:#ffffff;SCROLLBAR-ARROW-COLOR:#919192;
        //SCROLLBAR-DARKSHADOW-COLOR:#ffffff;
        //SCROLLBAR-SHADOW-COLOR:#919192;SCROLLBAR-3DLIGHT-COLOR:#ffffff;
        //LINE-HEIGHT:100%;PADDING-TOP:0px;
        //FONT-SIZE:11pt;FONT-FAMILY:宋体;COLOR:black;LETTER-SPACING:1pt;
        //TEXT-ALIGN:left;border:1px black solid;
    },
    toTagString:function(str)
    {
        while (str.indexOf("&lt;")>0)
        {
            str = str.replace("&lt;", "<");
        }
        while (str.indexOf("&gt;")>0) {
            str = str.replace("&gt;", ">");
        }
        return str;
    },
    getWH:function()
    {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        return w + "|" + h;
    },
    isPc:function()
    {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    },
    isSysJs: function ()
    {
        var g = document.getElementsByTagName("script")
        for (var i = 0; i < g.length; i++) {
            //alert(g.length);
            var geturl = g[i].src;
            geturl = geturl.substring(0, geturl.indexOf("/", 8));
            if((geturl.indexOf(".bailianbai.com") > 0) || (geturl.indexOf("localhost") > 0))
            {
                return true;
            }
        }
        return false;
    }
};

//设置布局
BLBUI.setLayout = function (type, id, list) {

        for (var k = 0; k < list.length;k++)
        {
            var floatvalue = type == 1 ? "left" : type==3?"center":"";
            list[k].style.cssFloat = floatvalue;
            document.getElementById(id).appendChild(list[k]);
        }
};

