<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!--#include file="inc/conn.asp"-->
<!--#include file="inc/Config.Asp"-->
<!--#include file="inc/Function.asp"-->
<!--#include file="inc/Inc.Asp"-->
<%pro_id=request.QueryString("prod_id")
call SafeRequest(pro_id)
set rsnew=Server.CreateObject("ADODB.Recordset")
sql="select * from [prod] where prod_id="&pro_id

rsnew.Open sql,conn,1,1
title=rsnew("prod_name")
if rsnew("title2")<>"" then title=rsnew("title2")
if rsnew("keywords")<>"" then siteKey=rsnew("keywords")
if rsnew("description")<>"" then SiteCont=rsnew("description")%>
<!--#include file="inc/header2.asp"--> 
<!--row2:搜索条件-->

<div class="w">

  <div class="position"><a href="index.asp">JLL</a> &gt; <a href="news.asp">热点资讯  &gt; <a href="#"><%=rsnew("classname")%> 
  </a> </div>
</div>


<style>
.news-content a{color:#E30613;}
</style>
<!--row2:页面内容区-->
<div class="w">
<div class="wl2" style="padding-left:10px;"><h1><%=rsnew("prod_name")%></h1><span class="news-date"><%=formatdatetime(rsnew("prod_date"),2)%></span></div>
<div class="wl2 rbor"><div class="w727"><div class="news-content"><!--<img src="<%=rsnew("prod_pic")%>" width="100%" title="<%=rsnew("picalt")%>" alt="<%=rsnew("picalt")%>"/>--><%prod_detail=Replace(rsnew("prod_detail"),"/jlladmin/kindeditor","/intl/jlladmin/kindeditor")%>
<%prod_detail=Replace(rsnew("prod_detail"),"/intl/intl/jlladmin/kindeditor","/intl/jlladmin/kindeditor")%>
<%=prod_detail%>

<div class="tips" style="font-size:14px;">

<%
if rsnew("tips")<>"" then
response.write"标签："
mystr=rsnew("tips")
mystr=replace(mystr,"，",",")
mystr=split(mystr,",") 
for i=0 to ubound(mystr)
if i>0 then response.write" \ " 
response.write "<a href='searchnews.asp?skey="&mystr(i)&"' style='color:#f00;font-size:14px;text-decoration:underline' target='_blank'>"&mystr(i)&"</a>"
next
end if  %>
</div>
</div>
<div class="news-qr"><img src="jll/img/qr.gif" />扫一扫 关注JLL资讯</div>
<div class="news-more"><%call sHowDxNewsPN(Rsnew("classid"),Rsnew("prod_id"))%></div>
<div class="clear"></div>
</div><div class="clear"></div>
</div>
<div class="wr2">
   <span class="wrtit">近期热点推广会</span>
        <%set ors=Server.CreateObject("ADODB.Recordset")
osql="select top 5 * from [prod] where bigclassid="&rsnew("bigclassid")&" and classid=11 order by oid desc,prod_id desc"

ors.Open osql,conn,1,1
i=0
do while not ors.eof%>

    <div class="fz12 over280">
      <a href="newsdetail.asp?prod_id=<%=ors("prod_id")%>" class=" c666" target="blank"><%=ors("prod_name")%></a></div>
      <div class="bline"></div>
    <%
ors.movenext 
i=i+1
loop
	ors.close
	set ors=nothing%>
    <!---->
    <form>
      <span class="wrtit">免费咨询</span>
      <input type="text" class="wrint" value="您的姓名" id="wrint4"/><span class="errinfo"></span>
      <input type="text" class="wrint" value="手机号码" id="wrint5"/><span class="errinfo"></span>
      <input type="text" class="wrint" value="邮箱地址" id="wrint6"/><span class="errinfo"></span>
      <input type="button" class="wrbtn b_h" value="提交" id="wrbtn2"/>
    </form>
     <span class="wrtit"><%=rsnew("bigclass")%>政策解读</span>
        <%set ors=Server.CreateObject("ADODB.Recordset")
osql="select top 5 * from [prod] where bigclassid="&rsnew("bigclassid")&" and classid=12 order by oid desc,prod_id desc"

ors.Open osql,conn,1,1
i=0
do while not ors.eof%>

    <div class="fz12 over280">
      <a href="newsdetail.asp?prod_id=<%=ors("prod_id")%>" class=" c666" target="blank"><%=ors("prod_name")%></a></div>
      <div class="bline"></div>
    <%
ors.movenext 
i=i+1
loop
	ors.close
	set ors=nothing%>
    <span class="wrtit"><%=rsnew("bigclass")%>热点项目</span>
	<%set ors=Server.CreateObject("ADODB.Recordset")
osql="select top 5 * from [Table_Product] where Passed=true and bigclassid="&rsnew("bigclassid")&" order by Elite,OrderId desc,articleid desc"

ors.Open osql,conn,1,1
i=0
do while not ors.eof%>
<a href="recommend.asp?articleid=<%=ors("articleid")%>" target="_blank" style="color:#C00;line-height:35px;"><%=ors("entitle")%></a><br />
<a href="recommend.asp?articleid=<%=ors("articleid")%>" target="_blank"><img src="<%=ors("defaultpicurl")%>" class="wgw b_h" /></a>
    <div class="wgwtxt fz12"><span class="b fz14"><%=ors("bigclassname")%>&nbsp;<%=ors("smallclassname")%></span>
      <div class="c"></div>
      约人民币 <span class="red"><%=ors("jgzj")%></span> 万+<br />
      <span class="more"><a href="recommend.asp?articleid=<%=ors("articleid")%>">查看更多</a></span></div>
      <div class="bline"></div>
    <%
ors.movenext 
i=i+1
loop
%>
    <a style="display:block;float:right;padding:5px 10px;background:#C00;color:#fff;font-size:12px;margin-right:15px;" href="resources.asp?bc=<%=rsnew("bigclassid")%>" target="_blank">更多</a><br /><br />
    <%	ors.close
	set ors=nothing
		rsnew.close
	set rsnew=nothing%>
         <span class="wrtit">热门搜索</span>
         <style>
         .tags:hover{color:#E30613;font-weight:bold;}
         </style>
             <div class="fz14 " style='line-height:200%;'>
        <%set ors=Server.CreateObject("ADODB.Recordset")
osql="select * from [links] where wid=3 order by oid desc"

ors.Open osql,conn,1,1
i=0
do while not ors.eof%>
      <a href="<%=ors("url")%>" class="tags c666" target="blank"><%=ors("tit")%></a>&nbsp;&nbsp;
    <%
ors.movenext 
i=i+1
loop
	ors.close
	set ors=nothing%>
    </div>
</div>
</div>
<!---->

<!--#include file="inc/footer.asp"-->
<script type="text/javascript" src="jll/js/jquery.cookies.js"></script>
<script type="text/javascript" src="jll/js/dfrom.js"></script>
<script type="text/javascript">

$("#nav4").attr("class","on");
</script>