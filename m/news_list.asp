<!--#include file="inc/header.asp"-->
<!--首页广告图-->
<div class="toppic"><img src="jll/img/tit3.jpg"><div class="pictit"><span class="h1">News</span><br>热点资讯</div></div>
<%dim cid
	  cid=request.QueryString("cid")
cid=request.QueryString("cid")
bid=request.QueryString("bid")
if bid="" then bid=0
	  set rs=Server.CreateObject("ADODB.Recordset")
	   sqlnew="select * from [prod] where classid="&cid
	  	if bid<>0 then
			sqlnew = sqlnew+" and bigclassid="&bid
		end if
	  sqlnew=sqlnew+" order by oid desc,prod_id desc"
rs.Open sqlnew,conn,1,1%>

                <!--<div class="tit mt50"><%=rs("classname")%></div><div class="toppic"><img src="jll/img/tit1.jpg"></div>-->
                		<div class="content-wrapper">

<!---->

 <ul class="gj"><li <%if bid=0 then%>class="on"<%end if%>><a href="?bid=0&cid=<%=cid%>">全部</a></li> <%
	set brs=server.createobject("adodb.recordset")
bsql = "select * from [Table_ProBigClass]"

bsql = bsql+" order by orderid desc,bigclassid desc"
brs.open bsql,conn,1,1
if brs.eof and brs.bof then
	response.write "请先添加栏目。"
else

	do while not brs.eof
%><li <%if bid=trim(brs("BigClassId")) then %>class="on"<%end if%>><a href="?bid=<%=trim(brs("BigClassId"))%>&cid=<%=cid%>"><%=trim(brs("BigClassName"))%></a></li>
          
            <%
			brs.movenext
		loop
end if
	brs.close
%></ul>
<div class="clear"></div>
<!---->
<ul class="list2">
            <!---->

<%i=1
do while not rs.eof%>
<li onClick="javascript:location.href='newsdetail.asp?prod_id=<%=rs("prod_id")%>'"><img src="../<%=rs("prod_pic")%>" class="pic"/><span class="lname"><%=rs("prod_name")%></span></li>

  <%rs.movenext
	i=i+1
	if i=4 then i=1
    loop
	rs.close
	set rs=nothing%>
    <!---->


</ul>
</div>
		</div> <!-- .content-wrapper -->
<!--#include file="inc/footer.asp"-->