
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="icon" href="icon.ico" type="image/x-icon"/>
<!--#include file="../inc/conn.asp"-->
<!--#include file="../inc/Config.Asp"-->
<!--#include file="../inc/Function.asp"-->
<!--#include file="../inc/Inc.Asp"-->
	<script type="text/javascript">
if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|ios)/i)){
		var url=location.href.split("/intl/")
	url2=url[0]+"/intl/m/"+url[1]
	location.href=url2; //可以换成http地址
}

</script>
<%dim bc,sc,fj,lx,lb,order,page
bc=request.QueryString("bc")
sc=request.QueryString("sc")
fj=request.QueryString("fj")
lx=request.QueryString("lx")
lb=request.QueryString("lb")
order=request.QueryString("order")
page=request.QueryString("page")
if bc="" then bc=0
if sc="" then sc=0
if fj="" then fj=0
if lx="" then lx=0
if lb="" then lb=0
if page="" then page=1
if order="" then order=0

%>
<%dim SiteTitle,siteKey,SiteCont
if lx=0 and lb=0 and sc=0 and fj=0 and bc=0 then%>

<title>海外房源房价，海外豪宅房产投资，海外别墅房产购买-JLL仲量联行</title>
<meta name="Keywords" content="海外房源房价，海外豪宅房产投资，海外别墅房产购买-JLL仲量联行" />
<meta name="Description" content="仲量联行(住宅）专注于国内和海外房产的投资和管理服务，为您的海外置业投资提供专业的决策。如果您有英国买房， 美国，澳洲买房的需求，欢迎联系仲量联行海外置业部。" />

<%elseif lx=0 and lb=0 and sc=0 and fj=0 and bc<>0 then
%>
<title><%if bc<>0 then%><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%><%end if%>房产置业,<%if bc<>0 then%><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%><%end if%>购房买房,<%if bc<>0 then%><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%><%end if%>房产投资-JLL 仲量联行</title>
<meta name="Keywords" content="<%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%>房产置业,<%if bc<>0 then%><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%><%end if%>购房买房,<%if bc<>0 then%><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%><%end if%>房产投资-JLL 仲量联行" />
<meta name="Description" content="仲量联行(住宅）专注于<%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%>房源信息，尽在仲量联行海外房产网，JLL 是您海外房产投资的第一选择。" />

<%else%>
<title><%if bc<>0 then%><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%><%end if%> <%if sc<>0 then%><%call showName("Table_ProSmallClass",sc,"Smallclassid","SmallclassName")%><%end if%><%if fj<>0 then%><%call showName("Class_fj",fj,"cid","cName")%><%end if%>
    <%if lx<>0 then%><%call showName("Class_lx",lx,"cid","cName")%><%end if%>
    <%if lb<>0 then%><%call showName("Class_lb",lb,"cid","cName")%><%end if%>房价,<%if bc<>0 then%><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%><%end if%> <%if sc<>0 then%><%call showName("Table_ProSmallClass",sc,"Smallclassid","SmallclassName")%><%end if%><%if fj<>0 then%><%call showName("Class_fj",fj,"cid","cName")%><%end if%>
    <%if lx<>0 then%><%call showName("Class_lx",lx,"cid","cName")%><%end if%>
    <%if lb<>0 then%><%call showName("Class_lb",lb,"cid","cName")%><%end if%>房地产-JLL仲量联行</title>
    
<meta name="Keywords" content="<%if bc<>0 then%><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%><%end if%> <%if sc<>0 then%><%call showName("Table_ProSmallClass",sc,"Smallclassid","SmallclassName")%><%end if%><%if fj<>0 then%><%call showName("Class_fj",fj,"cid","cName")%><%end if%><%if lx<>0 then%><%call showName("Class_lx",lx,"cid","cName")%><%end if%><%if lb<>0 then%><%call showName("Class_lb",lb,"cid","cName")%><%end if%>房产,<%if bc<>0 then%><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%><%end if%> <%if sc<>0 then%><%call showName("Table_ProSmallClass",sc,"Smallclassid","SmallclassName")%><%end if%><%if fj<>0 then%><%call showName("Class_fj",fj,"cid","cName")%><%end if%><%if lx<>0 then%><%call showName("Class_lx",lx,"cid","cName")%><%end if%><%if lb<>0 then%><%call showName("Class_lb",lb,"cid","cName")%><%end if%>房价,<%if bc<>0 then%><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%><%end if%> <%if sc<>0 then%><%call showName("Table_ProSmallClass",sc,"Smallclassid","SmallclassName")%><%end if%><%if fj<>0 then%><%call showName("Class_fj",fj,"cid","cName")%><%end if%><%if lx<>0 then%><%call showName("Class_lx",lx,"cid","cName")%><%end if%><%if lb<>0 then%><%call showName("Class_lb",lb,"cid","cName")%><%end if%>房地产">
<meta name="Description" content="最新最全的<%if bc<>0 then%><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%><%end if%> <%if sc<>0 then%><%call showName("Table_ProSmallClass",sc,"Smallclassid","SmallclassName")%><%end if%><%if fj<>0 then%><%call showName("Class_fj",fj,"cid","cName")%><%end if%><%if lx<>0 then%><%call showName("Class_lx",lx,"cid","cName")%><%end if%><%if lb<>0 then%><%call showName("Class_lb",lb,"cid","cName")%><%end if%>房源信息，尽在仲量联行海外房产网，JLL 是您海外房产投资的第一选择。" />

<%end if
%>



<link rel="stylesheet" type="text/css" href="jll/css/xgwl.css"/>
<link rel="stylesheet" type="text/css" href="jll/css/animation.css"/>
<!--<link rel="stylesheet" type="text/css" href="jll/css/bootstrap-table.css">-->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?df779c9e74137a3d362245eb585f224d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
</head>

<body>
<!--row1:页顶-->
<div class="topline">
<div class="header w ">
	<!--<div class="lplocal">国内楼盘资源</div>-->
	<div class="logo b_h" onclick="javascript:location.href='index.asp'" ></div><ul class="nav" id=".navlist"><li id="nav1"><a href="index.asp" class="submenu_link" target="_blank">首页</a></li><li id="nav2"><a href="resources.asp" class="submenu_link" target="_blank">海外房源</a></li><!--<li id="nav3"><a href="recommend.asp">海外生活</a></li>--><li id="nav4"><a href="news.asp" class="submenu_link" target="_blank">热点资讯</a></li><li id="nav5"><a href="report.asp" class="submenu_link" target="_blank">市场报告</a></li><li id="nav6"><a href="aboutus.asp" class="submenu_link" target="_blank">关于我们</a></li></ul><div class="tel"><!--400-818-3399<span>周一至周四：9:00-18:00--></span></div><div class="search b_h"></div>

</div></div>
<div class="navlist hide">
</div>
<div class="navlist">
<div class="w690">
<ul class="l1">
<li class="li1 ">海外房源<br /><span class="fz15">Properties</span></li>
  <%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select * from [Table_ProBigClass] order by OrderId desc",conn,1,1%>
<%do while not rs.eof%>
<li><a href="resources.asp?<%call seaurl(rs("BigClassId"),0,fj,lx,lb,order,page)%>" class="submenu_link2" target="_blank"><%=rs("BigClassName")%></a></li>
  <%rs.movenext
	
    loop
	rs.close
	set rs=nothing%>
</ul>
</div>
</div>
<!--<div class="navlist">
<div class="w690">

<li class="li1"><span class="fz15">HOUSING</span><br />海外生活</li>
<li><a href="#">待提供</a></li>

</div></div>-->
<div class="navlist">
<div class="w690">

<li class="li1">热点资讯<br /><span class="fz15">News</span></li>
<%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select * from [class_prod] where cid<>8 order by oid desc,cid desc",conn,1,1
if rs.bof and rs.eof then 
else 

i=0
do while not rs.eof

%>
<li><a href="news_list.asp?cid=<%=rs("cid")%>" class="submenu_link2" target="_blank"><%=rs("cname")%></a></li>

<%
rs.movenext
	i=i+1
    loop
end if
rs.close
	set rs=nothing%>
<!--<li><a href="news_exhibition.asp" class="submenu_link2">最新展会</a></li>
<li><a href="news_industry.asp" class="submenu_link2">行业洞察</a></li>-->


</div>
</div>
<div class="navlist">
<div class="w690">

<li class="li1">市场报告<br /><span class="fz15">Housing</span></li>
<li><a href="#">待提供</a></li>


</div>
</div>
<div class="navlist">
<div class="w690">

<li class="li1">关于我们<br /><span class="fz15">About us</span></li>
<li style="margin-right:35px;"><a href="aboutus.asp" class="submenu_link2" target="_blank">仲量联行（中国）</a></li>
<li><a href="team.asp" class="submenu_link2" target="_blank">仲量联行国际住宅</a></li>


</div>
</div>
<div class="serv_borout">
<div class="serv_borin">
<ul class="serv tra">
<li class="se1 b_h" onclick="window.open('http://weibo.com/p/1006063053812775');"></li>
<li class="se2 b_h"><div class="se2hover"></div></li>
<li class="se3 b_h"><div class="se3hover"></div></li>
</ul>
</div></div>
<!--#include file="openfrom.asp"--> 