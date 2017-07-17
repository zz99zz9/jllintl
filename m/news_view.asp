<!--#include file="inc/header.asp"-->
<!--首页广告图-->

<%pro_id=request.QueryString("prod_id")

set rsnew=Server.CreateObject("ADODB.Recordset")
sql="select * from [prod] where prod_id="&pro_id

rsnew.Open sql,conn,1,1
title=rsnew("prod_name")%>

                
                		<div class="content-wrapper" style="margin-top:85px;">
                       
                        <b class="fz17"><%=rsnew("prod_name")%></b>
                        <img src="../<%=rsnew("prod_pic")%>" width="100%" style="margin-top:10px;"/><%=rsnew("prod_detail")%>
<!---->



</div>
		</div> <!-- .content-wrapper -->
<!--#include file="inc/footer.asp"-->
<script>
$(document).ready(function(e) {
    $(".content-wrapper img").removeAttr("height");
});

</script>