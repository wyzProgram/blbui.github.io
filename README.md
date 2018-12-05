# BLBUI
UI Frame

UI框架_百联百
1.概述
可以快速制作UI js下载 :BLBUI.min.js 

2.详解
BLBUI对象

2.1 BLBUI.action 立即加载函数 
BLBUI.action(function () 
{
//你的代码
});

2.2 BLBUI.color 颜色值
BLBUI.color.red; 
//你的颜色 gray01|gray02|gray03|gray04|gray05|blue00|purple|blue00|yellow00|red00|green00|blue|purple|yellow|red|green|yellow|white|black|也可以用色值替代 

2.3 BLBUI.createElemen(tagId, width, height, color,fontColor,backimg, padding, edit, radius) 创建元件
var k1 = BLBUI.createElement('v01', '100px', '35px', BLBUI.color.green00, BLBUI.color.red, '', '10px', false,'5px'); 
//edit是否可输入，radius圆角px,为px单位的可%,backimg背景图片URL 

2.4 BLBUI.setWindow(tagIdObj) 设置显示窗口
BLBUI.setWindow(k); 
//k为2.3创建的元件 

2.5 BLBUI.add(tagId, child) 添加元件
BLBUI.add('v00',k1); 
//v00为tagId的名称类型字符串，k1为元件如k 

2.6 BLBUI.setLayout(type,tagId, list) 设置布局
BLBUI.setLayout(1, 'v01', list); 
//type为1是横向2为纵向布局，v01为tagId的名称类型字符串，list为元件数组array类型的k 

2.7 BLBUI.click(tagId, openUrl) 点击事件
BLBUI.click('v12', 'http://www.baidu.com'); //v12为tagId的名称类型字符串，openUrl为点击打开url网页/openUrl为一个Function 

2.8 BLBUI.wAjax(url, data, callback) ajax事件
BLBUI.wAjax( '/BLBUI/Default.aspx', '["name":"w"]', function (get) {
//你的代码
alert(get);
});
//url为请求ajax处理的后台url地址,data为传值数据可为json，callback为回调函数 

2.9 BLBUI.tool.setCenter(tagid,isTop,isLeft) 居中布局
BLBUI.tool.setCenter('v30',false,false);
//v30为tagId的名称类型字符串,isTop是否置顶,isLeft是否靠左 

2.10 BLBUI.tool.setTagValue(tagid,value) 元件赋值
BLBUI.tool.setTagValue(tagid,value)
//v30为tagId的名称类型字符串，value 

2.11 BLBUI.tool.getTagValue(tagid) 元件取值
BLBUI.tool.getTagValue(tagid);
//v30为tagId的名称类型字符串返回值 

2.12 BLBUI.tool.setFixed(tagId,isTop,isLeft,isBottom,zindex) 元件固定悬浮
BLBUI.tool.setFixed('v30', false,true,true,'100012');
//v30为tagId的名称类型字符串返回值，isBottom是否置底,zindex层数 

2.13 BLBUI.tool.setTagCent(tagId,toTagId) 元件嵌套居中
BLBUI.tool.setTagCent('v301', 'v30');
//v301为tagId的名称类型字符串返回值，v30所放在的元件 

2.14 BLBUI.delWindow(tagIdObj) 删除窗口,应用在关闭窗口不可见
BLBUI.delWindow(k10);
//k10为元件对象 

2.15 BLBUI.del(tagId,tagIdObj) 删除元件,应用在关闭元件不可见
BLBUI.del('v00', k001);
//v00为tagId的名称类型字符串返回值，k001要删除的元件 

3.实例
点击链接下载查看代码效果：testUI
BLBUI.action(function () 
{ 
    //你的代码 
        var k00 = BLBUI.createElement('v00', '1000px', '700px', BLBUI.color.gray01, 'black', '', '10px', false, '5px'); 
        BLBUI.setWindow(k00); //1.设置窗口 
        BLBUI.tool.setCenter('v00', true, false); 
        //2二级视图 
        var k01 = BLBUI.createElement('v01', '95%', '30px', BLBUI.color.purple,'white', '', '30px', false, '5px'); 
        BLBUI.add('v00',k01); 
        var k02 = BLBUI.createElement('v02', '95%', '300px', BLBUI.color.yellow, 'white', '', '30px',true, '5px'); 
        BLBUI.add('v00', k02); 
        BLBUI.tool.setTagValue('v02','input...'); 
        var k03 = BLBUI.createElement('v03', '95%', '30px', BLBUI.color.purple, 'white', '', '30px', false, '5px'); 
        BLBUI.add('v00',k03); 
        //3三级视图 
        var arr = new Array(); arr[0] = BLBUI.createElement('v001', '16%', '25px', BLBUI.color.blue, 'white', '', '10px', false, '5px'); 
        arr[1] = BLBUI.createElement('v002', '26%', '25px', BLBUI.color.gray02, 'black', '', '10px', true, '5px'); 
        arr[2] = BLBUI.createElement('v003', '2%', '25px', BLBUI.color.purple, 'white', '', '0px', false, '0px'); 
        arr[3] = BLBUI.createElement('v004', '16%', '25px', BLBUI.color.blue, 'white', '', '10px', false, '5px'); 
        arr[4] = BLBUI.createElement('v005', '26%', '25px', BLBUI.color.gray02, 'black', '', '10px', true, '5px'); 
        BLBUI.setLayout(1, 'v01', arr); 
        BLBUI.tool.setTagValue('v001', 'title'); 
        BLBUI.tool.setTagValue('v004', 'text'); 
        BLBUI.tool.setTagValue('v002', 'input...'); 
        BLBUI.tool.setTagValue('v005', 'input...'); 
        var k100 = BLBUI.createElement('v100', '60px', '25px', BLBUI.color.red, 'white', '', '5px', false, '5px'); 
        BLBUI.add('v03', k100); 
        BLBUI.tool.setTagValue('v100', 'Send'); 
        BLBUI.click('v100', function () { 
        alert("title value:" + BLBUI.tool.getTagValue('v002') + " |text value:" + BLBUI.tool.getTagValue('v005')); 
    }); 
}); 


