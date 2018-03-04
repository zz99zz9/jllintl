<!--#include file="inc/header.asp"--> 
<!--row2:搜索条件-->

<div class="w ">

  <div class="position"><a href="index.asp">JLL</a> &gt; <a href="news.asp">热点资讯 &gt; <a href="news_list.asp?cid=11">最新展会
  </a> </div>
</div>



<!--row2:页面内容区-->
<div class="w">
 <ul class="list5">
                    <!---->
      <%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select * from [prod] where classid=11 order by oid desc,prod_id desc",conn,1,1%>
<% 
if rs.bof and rs.eof then 
response.write("暂无内容") 
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

<li class="<%if i=1 then%>ftr<%end if%>"><a href="newsdetail.asp?prod_id=<%=rs("prod_id")%>"><img src="<%=rs("prod_pic")%>" class="pic b_h"/></a><div class="text"><a href="newsdetail.asp?prod_id=<%=rs("prod_id")%>"><%=left(rs("prod_name"),30)%></a><i><%=rs("classname")%> - <%=replace(formatdatetime(rs("prod_date"),2),"/","-")%></i></div>
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
<!---->
<div class="tcdPageCode w pages mt40"></div>
<!--#include file="inc/footer.asp"-->
<script type="text/javascript">

$("#nav4").attr("class","on");
</script>
<script src="jll/js/jquery-1.7.1.min.js"></script>
<script src="jll/js/jquery.page.js"></script>
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