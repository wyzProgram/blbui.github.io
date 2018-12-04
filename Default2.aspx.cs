using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Default2 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Write("C:\\Users\\user\\Desktop\\MyUI\\js2\\test2.js");
    }

    public string Read(string path)
    {
        StreamReader sr = new StreamReader(path, Encoding.Default);
        String line;
        while ((line = sr.ReadLine()) != null)
        {
            Console.WriteLine(line.ToString());
        }
        return line.ToString();
    }

    public void Write(string path)
    {
        FileStream fs = new FileStream(path, FileMode.Create);
        StreamWriter sw = new StreamWriter(fs);

        string get = Read("C:\\Users\\user\\Desktop\\MyUI\\js2\\test.js");
        //开始写入
        sw.Write(get);
        //清空缓冲区
        sw.Flush();
        //关闭流
        sw.Close();
        fs.Close();
    }
}