
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
<%dim SiteTitle,siteKey,SiteCont
if skey<>"" then
skeys=skey&"-"
end if
if mm=0 then
SiteTitle=skeys&"海外房产置业，海外购房买房，海外房产投资-JLL 仲量联行"
siteKey=skeys&"海外房产，海外买房，海外置业，海外购房，海外房产投资，海外房产置业"
SiteCont=skeys&"仲量联行(住宅）专注于国内和海外房产的投资和管理服务，为您的海外置业投资提供专业的决策。如果您有英国买房， 美国，澳洲买房的需求，欢迎联系仲量联行海外置业部。"
elseif mm=1 then

	if yhtitle="" then
		SiteTitle="海外房源房价，海外豪宅房产投资-JLL 仲量联行"
		siteKey="海外房源，海外房源房价，海外房源房产，海外豪宅房产，海外豪宅投资，海外豪宅房产投资，海外公寓，海外别墅，海外房产网"
		SiteCont="最新最全的海外房源信息，尽在仲量联行海外房产网，JLL 是您海外房产投资的第一选择。"
	else
		SiteTitle=yhtitle
	end if
elseif mm=2 then
SiteTitle="海外房地产资讯，海外房产新闻-JLL 仲量联行"
siteKey="最新房产资讯，海外房产新闻，全球房产新闻，房地产资讯"
SiteCont="仲量联行是专注于房地产领域的专业服务和投资管理公司，每天发布房地产行业新闻、房价走势,楼盘成交数据分析,购房政策等房地产资讯，为投资者提供海外楼市相关的最新房产新闻。"
elseif mm=3 then
SiteTitle="海外房产市场报告，国际住宅报告-JLL 仲量联行"
siteKey="房产市场报告，海外房产市场报告，国际住宅报告，房产市场研究报告"
SiteCont="仲量联行是专注于房地产领域的专业服务和投资管理公司，为海外投资买房者提供最专业的国际住宅研究报告，最大限度的保证投资者的利益。"
elseif mm=4 then
SiteTitle="关于仲量联行，仲量联行公司简介-JLL 仲量联行"
siteKey="仲量联行，仲量联行海外房产，仲量联行官网，仲量联行公司，JLL，JLL 海外房产"
SiteCont="仲量联行(纽约证交所交易代码：JLL)是专注于房地产领域的专业服务和投资管理公司，致力于为客户持有、租用和投资房地产的决策实现增值。仲量联行是《财富》500 强上榜企业，业务遍及全球 80 个国家，拥有逾 280 个分公司。"
elseif mm=5 then
SiteTitle="最新展会，海外房地产资讯-JLL 仲量联行"
siteKey="最新展会资讯，海外房产资讯"
SiteCont="仲量联行是专注于房地产领域的专业服务和投资管理公司，每天发布房地产行业新闻，最新展会情况，房价走势，购房政策等房地产资讯,为投资者提供海外楼市相关的最新房产新闻。"
	select case bid
		case 34
			SiteTitle="英国买房置业，英国房产投资-JLL仲量联行"
			siteKey="英国买房，英国置业，英国房产，英国豪宅投资"
			SiteCont="仲量联行(住宅）专注于英国房产信息，尽在仲量联行英国买房置业网，JLL 是您英国房产投资的第一选择。"
		case 20
			SiteTitle="美国买房置业，美国房产投资 -JLL仲量联行"
			siteKey="美国房产，美国买房，美国置业，美国购房，美国房产投资"
			SiteCont="仲量联行(住宅）专注于美国房产信息，尽在仲量联行美国买房置业网，JLL 是您美国房产投资的第一选择。"
		case 35
			SiteTitle="澳洲买房置业，澳洲房产投资 -JLL仲量联行"
			siteKey="澳洲房产，澳洲买房，澳洲置业，澳洲购房，澳洲房产投资"
			SiteCont="仲量联行(住宅）专注于澳洲房产信息，尽在仲量联行澳洲买房置业网，JLL 是您澳洲房产投资的第一选择。"
		case 26
			SiteTitle="德国买房置业，德国房产投资 -JLL仲量联行"
			siteKey="德国房产，德国房价，德国买房，德国置业，德国购房，德国房产投资"
			SiteCont="仲量联行(住宅）专注于德国房产信息，尽在仲量联行德国买房置业网，JLL 是您德国房产投资的第一选择。"
	end select 

elseif mm=6 then
SiteTitle="行业洞察，海外房地产资讯-JLL 仲量联行"
siteKey="行业洞察，最新房产资讯，海外房产新闻，全球房产新闻"
SiteCont="仲量联行是专注于房地产领域的专业服务和投资管理公司，每天发布房地产行业新闻，最新展会情况，房价走势，购房政策等房地产资讯,为投资者提供海外楼市相关的最新房产新闻。"
	select case bid
		case 34
		SiteTitle="英国房产投资，英国移民买房，英国留学买房-JLL仲量联行"
		siteKey="行业洞察，最新房产资讯，海外房产新闻，全球房产新闻"
		SiteCont="仲量联行是专注于房地产领域的专业服务和投资管理公司，每天发布最新英国买房移民资讯,英国买房留学资讯，为投资者提供英国房产相关的最新房产新闻"
		case 20
		SiteTitle="美国房产投资，美国移民买房，美国留学买房-JLL仲量联行"
		siteKey="美国房产投资，美国移民买房，美国留学买房"
		SiteCont="仲量联行是专注于房地产领域的专业服务和投资管理公司，每天发布最新美国买房移民资讯,英国买房留学资讯，为投资者提供美国房产相关的最新房产新闻"
		case 35
		SiteTitle="澳洲房产投资，澳洲移民买房，澳洲留学买房-JLL仲量联行"
		siteKey="澳洲房产投资，澳洲移民买房，澳洲留学买房"
		SiteCont="仲量联行是专注于房地产领域的专业服务和投资管理公司，每天发布最新澳洲买房移民资讯,澳洲买房留学资讯，为投资者提供澳洲房产相关的最新房产新闻"
		case 26
		SiteTitle="日本房产房价，日本买房置业，日本购房投资 -JLL仲量联行"
		siteKey="日本房产，日本房价，日本买房，日本置业，日本购房，日本房产投资"
		SiteCont="仲量联行(住宅）专注于日本房产信息，尽在仲量联行日本买房置业网，JLL 是您日本房产投资的第一选择。"
		end select
end if
%>
<title><%=SiteTitle%></title>
<meta name="Keywords" content="<%=siteKey%>" />
<meta name="Description" content="<%=SiteCont%>" />
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
	<div class="logo b_h" onclick="javascript:location.href='index.asp'" ></div><ul class="nav" id=".navlist"><li id="nav1"><a href="index.asp" class="submenu_link" target="_blank">首页</a></li><li id="nav2"><a href="resources.asp" class="submenu_link" target="_blank">海外房源</a></li><!--<li id="nav3"><a href="recommend.asp">海外生活</a></li>--><li id="nav4"><a href="news.asp" class="submenu_link" target="_blank">热点资讯</a></li><li id="nav5"><a href="report.asp" class="submenu_link" target="_blank">市场报告</a></li><li id="nav6"><a href="aboutus.asp" class="submenu_link" target="_blank">关于我们</a></li></ul><div class="tel"><!--400-818-3399<span>周一至周日：9:00-18:00--></span></div><div class="search b_h"></div>

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