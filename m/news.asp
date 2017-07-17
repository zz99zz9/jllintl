<!--#include file="inc/header.asp"-->
<!--首页广告图-->
<div class="toppic"><img src="jll/img/tit3.jpg"><div class="pictit"><span class="h1">News</span><br>热点资讯</div></div>
<%dim cid
	  cid=request.QueryString("cid")

	  set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select top 12 * from [prod] where classid="&cid&" order by oid desc,prod_id desc",conn,1,1%>

                <!--<div class="tit mt50"><%=rs("classname")%></div><div class="toppic"><img src="jll/img/tit1.jpg"></div>-->
                		<div class="content-wrapper">

<!---->


<ul class="list2">
            <!---->

<%i=1
do while not rs.eof%>
<li onClick="javascript:location.href='news_view.asp?prod_id=<%=rs("prod_id")%>'"><img src="../<%=rs("prod_pic")%>" class="pic"/><span class="lname"><%=rs("prod_name")%></span></li>

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