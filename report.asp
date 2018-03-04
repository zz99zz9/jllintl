
<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%mm=3%>
<!--#include file="inc/header.asp"--> 
<!--row2:搜索条件-->
<div class="winpop"></div>
<div class="reported">
<div class="w piced">

  <div class="position"><a href="index.asp">JLL</a> &gt; <a href="report.asp">市场报告</a> </div>
</div>
</div>

<!--row2:页面内容区-->
<div class="w">
  <ul class="list4" id="l">
        <%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select * from [prod] where classid=8 order by oid desc,prod_id desc",conn,1,1%>
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
    <span class="time"><%=replace(formatdatetime(rs("prod_date"),2),"/","-")%></span>
    <span class="tit"><a href="javascript:openfrom('<%=rs("prod_pic")%>');" target="_blank"><%=left(rs("prod_name"),30)%></a></span>
    <i class="ico_down b_h" onclick="openfrom('<%=rs("prod_pic")%>');"></i>
    </li>
<%
rs.movenext 
i=i+1
loop
end if 
	rs.close
	set rs=nothing%>
  
  </ul>

</div>
<div class="tcdPageCode w pages mt40"></div>
<!------>

<!--#include file="inc/footer.asp"-->

<script src="jll/js/dfrom.js" type="text/javascript"></script>
<script type="text/javascript">
//export_raw('filename.png', "helloworld!");
$("#nav5").attr("class","on");
</script>
<script src="http://www.lanrenzhijia.com/ajaxjs/jquery.min.js"></script>
<script type="text/javascript" src="jll/js/jquery.cookies.js"></script>
<script src="http://www.lanrenzhijia.com/ajaxjs/jquery.page.js"></script>
<script>
    $(".tcdPageCode").createPage({
        pageCount:<%=pagecount%>,
        current:<%=page%>,//
        backFn:function(p){
         //   console.log(p);
			location.href='report.asp?page='+p;
        }
    });
</script>