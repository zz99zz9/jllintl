<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%skey=request.QueryString("skey")%>
<%mm=0%><!--#include file="inc/header.asp"--> 
<!--row2:搜索条件-->

<div class="w ">

  <div class="position"><span style="color:#333;">您搜索的关键词是：</span><%=request.QueryString("skey")%> </div>
</div>



<!--row2:页面内容区-->
<div class="w">
 <ul class="list5">
                    <!---->
      <%set rs=Server.CreateObject("ADODB.Recordset")
	  sql="select * from [prod] where (classid=11 or classid=12) and (prod_name like '%"&skey&"%' or prod_detail like '%"&skey&"%' or tips like '%"&skey&"%') order by oid desc,prod_id desc"
	'  response.write sql
rs.Open sql,conn,1,1%>
<% 
if rs.bof and rs.eof then 
response.write("未搜索到任何结果，请 <a href='/'>返回重试</a>") 
else 
rs.PageSize=10 '设置页码 
pagecount=rs.PageCount '获取总页码 
page=int(request("page")) '接收页码 
if page<=0 then page=1 '判断 
if request("page")="" then page=1 
rs.AbsolutePage=page '设置本页页码
i=0
do while not rs.eof and i<rs.PageSize
%>

<li class="<%if i=1 then%>ftr<%end if%>"><a href="newsdetail.asp?prod_id=<%=rs("prod_id")%>"><img src="<%=rs("prod_pic")%>" class="pic b_h"/></a><div class=" w600 text"><a href="newsdetail.asp?prod_id=<%=rs("prod_id")%>"><%=left(rs("prod_name"),30)%></a><i><%=rs("classname")%> - <%=replace(formatdatetime(rs("prod_date"),2),"/","-")%></i></div>
    <span class="lname w600"><%=left(RemoveHTML(rs("prod_detail")),135)%>……</span><a class="laddr b_h" href="newsdetail.asp?prod_id=<%=rs("prod_id")%>">查看更多</a></li>

  <%rs.movenext
	i=i+1
    loop
	end if
	rs.close
	set rs=nothing%>
    <!---->
    

    </ul>

</div>
<!---->
<div class="tcdPageCode w pages mt40"></div>
<!--#include file="inc/footer.asp"-->
<script type="text/javascript">

$("#nav4").attr("class","on");
</script>
<script src="http://www.lanrenzhijia.com/ajaxjs/jquery.min.js"></script>
<script src="http://www.lanrenzhijia.com/ajaxjs/jquery.page.js"></script>
<script>
    $(".tcdPageCode").createPage({
        pageCount:<%=pagecount%>,
        current:<%=page%>,//
        backFn:function(p){
         //   console.log(p);

			location.href='news.asp?page='+p;
        }
    });

</script>