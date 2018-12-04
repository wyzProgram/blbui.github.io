(function (w) {
    
    //以&形式返回表单值
    w.getAndFormValue = function (name) {
        var json = "";
        var getinput = document.getElementsByName("list");
        for (var i = 0; i < getinput.length; i++) {
            json += getinput[i].id + "=" + getinput[i].value + "&";
        }
        json = json.substring(0, json.lastIndexOf('&'));
        return json;
    };

    //以json形式返回表单值
    w.getJsonFormValue = function (name) {
        var json = "{";
        var getinput = document.getElementsByName("list");
        for (var i = 0; i < getinput.length; i++) {
            json += "'" + getinput[i].id + "':'" + getinput[i].value + "',";
        }
        json = json.substring(0, json.lastIndexOf(',')) + "}";
        return json;
    };

    w.wAjax = function (type,url,suc)
    {
        var res = "";
        try
        {
            xmlhr = new XMLHttpRequest();
        } catch (ex1)
        {
            try
            {
                xmlhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (ex2)
            {
                alert("你的浏览器不支持Ajax...");
            }
        }

        xmlhr.open(type, url, true);
        xmlhr.send();
        xmlhr.onreadystatechange = function () {
            if (xmlhr.readyState == 4 && xmlhr.status == 200)
            {
                return xmlhr.responseText.toString();
            }
        };
    };

})(window);