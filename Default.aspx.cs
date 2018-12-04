using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string json = Request["data"];
        Response.Write(json);
        if (Request["type"] == "2")
        {
            Response.Write("false");
        }
        else
        {
            Response.Write("true");
        }
    }
}