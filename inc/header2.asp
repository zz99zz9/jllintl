
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="icon" href="icon.ico" type="image/x-icon"/>
<%if title="" then title=SiteTitle%>
<title><%=title%></title>
<%Response.Redirect("http://ir.joneslanglasalle.com.cn/")%>
<meta name="Keywords" content="<%=siteKey%>" />
<meta name="Description" content="<%=SiteCont%>" /><link rel="stylesheet" type="text/css" href="jll/css/xgwl.css"/>
<link rel="stylesheet" type="text/css" href="jll/css/animation.css"/>
<!--<link rel="stylesheet" type="text/css" href="jll/css/bootstrap-table.css">-->
	<script type="text/javascript">
if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|ios)/i)){
		var url=location.href.split("/intl/")
	url2=url[0]+"/intl/m/"+url[1]
	location.href=url2; //可以换成http地址
}

</script>
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
<li class="se1 b_h"></li>
<li class="se2 b_h"><div class="se2hover"></div></li>
<li class="se3 b_h"><div class="se3hover"></div></li>
</ul>
</div></div>
<!--#include file="openfrom.asp"--> 