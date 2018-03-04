<!--#include file="inc/header.asp"-->
<!--首页广告图-->

<%pro_id=request.QueryString("prod_id")

set rsnew=Server.CreateObject("ADODB.Recordset")
sql="select * from [prod] where prod_id="&pro_id

rsnew.Open sql,conn,1,1
title=rsnew("prod_name")
ename=title%>

                
                		<div class="content-wrapper" style="margin-top:85px;">
                       
                        <b class="fz17"><%=rsnew("prod_name")%></b>
                        <img src="../<%=rsnew("prod_pic")%>" width="100%" style="margin-top:10px;"/><%=rsnew("prod_detail")%>
                        <br>
                        <%
if rsnew("tips")<>"" then
response.write"标签："
mystr=rsnew("tips")
mystr=replace(mystr,"，",",")
mystr=split(mystr,",") 
for i=0 to ubound(mystr)
if i>0 then response.write" \ " 
response.write "<a href='searchnews.asp?skey="&mystr(i)&"' style='color:#000;' target='_blank'>"&mystr(i)&"</a>"
next
end if  %>
<!---->



</div>
		</div> <!-- .content-wrapper -->
<!--#include file="inc/footer.asp"-->
<script>
$(document).ready(function(e) {
    $(".content-wrapper img").removeAttr("height");
    $("p").css("text-indent","0");
});

</script>