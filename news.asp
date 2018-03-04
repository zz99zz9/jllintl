
<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>

<%mm=2
cid=request.QueryString("cid")
bid=request.QueryString("bid")
if bid="" then bid=0
if cid=11 then mm=5
if cid=12 then mm=6
page=int(request("page")) '接收页码 
%>
<!--#include file="inc/header.asp"--> 
<!--row2:搜索条件-->
<div class="news">
<div class="w piced">

  <div class="position"><a href="index.asp">JLL</a> &gt; <a href="#">热点资讯
  </a> </div>
</div>
</div>


<!--row2:页面内容区-->
<div class="w">
<div style="height:50px;"></div>
	<div class="wl2 rbor">
    <ul class="gj"><li <%if bid=0 then%>class="on"<%end if%>><a href="?bid=">全部</a></li> <%
	set brs=server.createobject("adodb.recordset")
bsql = "select * from [Table_ProBigClass]"

bsql = bsql+" order by orderid desc,bigclassid desc"
brs.open bsql,conn,1,1
if brs.eof and brs.bof then
	response.write "请先添加栏目。"
else

	do while not brs.eof
%><li <%if bid=trim(brs("BigClassId")) then %>class="on"<%end if%>><a href="?bid=<%=trim(brs("BigClassId"))%>"><%=trim(brs("BigClassName"))%></a></li>
          
            <%
			brs.movenext
		loop
end if
	brs.close
%></ul>
 <ul class="list5">
             <!---->
      <%set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [prod] where (classid=11 or classid=12)"
if bid<>0 then
sql = sql+" and bigclassid="&bid
end if
sql = sql+" order by oid desc,prod_id desc"

rs.Open sql,conn,1,1%>
<% 
if rs.bof and rs.eof then 
response.write("暂无内容") 
else 
rs.PageSize=10 '设置页码 
pagecount=rs.PageCount '获取总页码 

if page<=0 then page=1 '判断 
if request("page")="" then page=1 
rs.AbsolutePage=page '设置本页页码
i=0
do while not rs.eof and i<rs.PageSize
%>

<li class="<%if i=1 then%>ftr<%end if%>"><a href="newsdetail.asp?prod_id=<%=rs("prod_id")%>"><img src="<%=rs("prod_pic")%>" class="pic b_h"/></a><div class="text"><a href="newsdetail.asp?prod_id=<%=rs("prod_id")%>"><%=rs("prod_name")%></a><i><%=rs("classname")%> - <%=replace(formatdatetime(rs("prod_date"),2),"/","-")%></i></div>
    <span class="lname"><%=left(RemoveHTML(rs("prod_detail")),135)%>……</span><a class="laddr b_h" href="newsdetail.asp?prod_id=<%=rs("prod_id")%>">查看更多</a></li>

  <%rs.movenext
	i=i+1
    loop
	end if
	rs.close
	set rs=nothing%>
    <!---->
    

    </ul>
</div>
<div class="wr2">

    <form>
      <span class="wrtit">免费咨询</span>
      <input type="text" class="wrint" value="您的姓名" id="wrint4"/><span class="errinfo"></span>
      <input type="text" class="wrint" value="手机号码" id="wrint5"/><span class="errinfo"></span>
      <input type="text" class="wrint" value="邮箱地址" id="wrint6"/><span class="errinfo"></span>
      <input type="button" class="wrbtn b_h" value="提交" id="wrbtn2"/>
    </form>
    <span class="wrtit">更多房源</span>
	<%set ors=Server.CreateObject("ADODB.Recordset")
osql="select top 5 * from [Table_Product] where Passed=true and Elite=true order by Elite,OrderId desc,articleid desc"

ors.Open osql,conn,1,1
i=0
do while not ors.eof%>
<a href="recommend.asp?articleid=<%=ors("articleid")%>" target="_blank" style="color:#C00;line-height:35px;"><%=ors("entitle")%></a><br />
<a href="recommend.asp?articleid=<%=ors("articleid")%>" target="_blank" ><img src="<%=ors("defaultpicurl")%>" class="wgw b_h" /></a>
    <div class="wgwtxt fz12"><span class="b fz14"><%=ors("bigclassname")%>&nbsp;<%=ors("smallclassname")%></span>
      <div class="c"></div>
      约人民币 <span class="red"><%=ors("jgzj")%></span> 万+<br />
      <span class="more"><a href="recommend.asp?articleid=<%=ors("articleid")%>">查看更多</a></span></div>
      <div class="bline"></div>
    <%
ors.movenext 
i=i+1
loop
	ors.close
	set ors=nothing%>
</div>
</div>
<!---->
<div class="tcdPageCode w pages mt40"></div>
<!--#include file="inc/footer.asp"-->
<script type="text/javascript">

$("#nav4").attr("class","on");
</script>
<script src="jll/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="jll/js/jquery.cookies.js"></script>
<script src="jll/js/jquery.page.js"></script>
<script type="text/javascript" src="jll/js/dfrom.js"></script>
<script>
    $(".tcdPageCode").createPage({
        pageCount:<%=pagecount%>,
        current:<%=page%>,//
        backFn:function(p){
         //   console.log(p);

			location.href='news.asp?page='+p+'&bid=<%=bid%>';
        }
    });

</script>