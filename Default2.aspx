<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script type="text/javascript" src="js/My.js"></script>
    <title></title>
    <script type="text/javascript">
        window.onload = function () {
            
            alert(getAndFormValue("list"));
            alert(getJsonFormValue("list"));
            alert(wAjax("POST", "Default.aspx"));
        };
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <input type="text" name="list" id="id1" value="value1"/>
        <input type="text" name="list" id="id2" value="value2"/> 
        <select name="list" id="se1">
            <option value="o1">o1</option>
            <option value="o2">o2</option>
        </select>
        <textarea name="list" id="texta">ABH</textarea>
    </form>
</body>
</html>
