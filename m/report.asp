<!--#include file="inc/header.asp"-->
<!--首页广告图-->
   <div class="toppic"><img src="jll/img/tit4.jpg"><div class="pictit"><span class="h1">Report</span><br>市场报告</div></div>
 <%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select * from [prod] where classid=8 order by oid desc,prod_id desc",conn,1,1%>

                		<div class="content-wrapper">
                     
<!---->


<ul class="list2">
            <!---->


<% 
rs.PageSize=10 '设置页码 
pagecount=rs.PageCount '获取总页码 
page=int(request("page")) '接收页码 
if page<=0 then page=1 '判断 
if request("page")="" then page=1 
rs.AbsolutePage=page '设置本页页码 
%> 
<% 
if rs.bof and rs.eof then 
response.write("暂无内容") 
else 
i=0
do while not rs.eof and i<rs.PageSize
%>
    <li class="ftr hand">

    <span class="titlist"><a href="<%=rs("prod_pic")%>" target="_blank"><%=left(rs("prod_name"),30)%></a> [<%=replace(formatdatetime(rs("prod_date"),2),"/","-")%>]</span>
    <i class="ico_down b_h" onclick="openfrom('<%=rs("prod_pic")%>');"></i>
    </li>
<%
rs.movenext 
i=i+1
loop
end if 
	rs.close
	set rs=nothing%>
    <!---->


</ul>
</div>
		</div> <!-- .content-wrapper -->
<!--#include file="inc/footer.asp"-->