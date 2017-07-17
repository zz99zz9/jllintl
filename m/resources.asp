
<!--#include file="inc/header.asp"-->
<!--首页广告图-->

<%
dim bc
order=request.QueryString("order")
if order="" then order=0
bc=request.QueryString("bc")
if bc="" then bc=0
set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [Table_Product] where Passed=true "
sql=sql+"and (bigclassname like '%"&skey&"%' or smallclassname like '%"&skey&"%' or Title like '%"&skey&"%')"
if bc<>0 then sql=sql+" and bigclassid="&bc
sql=sql+" order by "
select case order
	case 1
	sql=sql+"Elite,"
	case 2
	sql=sql+"jgzj,"
	case 3
	sql=sql+"jgjj,"
	case 4
	sql=sql+"updatetime desc,"
	case 5
	sql=sql+"jgzj desc,"
	case 6
	sql=sql+"jgjj desc,"
end select
sql=sql+"OrderId desc,articleid desc"

rs.Open sql,conn,1,1%>
<%dim bigclassname
if bc<>0 then
bigclassname=rs("bigclassname")
else
bigclassname="不限"
end if
%>

                <!--<div class="tit mt80"><%=rs("bigclassname")%></div>-->
                <ul class="l-order mt70 TAB_CLICK" id=".arealist">
                <li class="li1 area <%if order=0 then%>on<%end if%>"><%=bigclassname%><b class="caret"></b></li>
                <li class="<%if order=1 then%>on<%end if%>"><a href="?order=1&bc=<%=bc%>">热门推荐</a></li>
                <li class="<%if order=2 or order=5 then%>on<%end if%>"><a href="?order=<%if order=2 then%>5<%else%>2<%end if%>&bc=<%=bc%>">房屋总价<%if order=2 or order=5 then%><b class="caret <%if order=2 then%>rotate180<%end if%>"></b><%end if%></a></li>
              	<li class="<%if order=3 or order=6 then%>on<%end if%>"><a href="?order=<%if order=3 then%>6<%else%>3<%end if%>&bc=<%=bc%>">物业均价<%if order=3 or order=6 then%><b class="caret <%if order=3 then%>rotate180<%end if%>"></b><%end if%></a></li>
                <!--<li class="<%if order=3 then%>on<%end if%>"><a href="?order=3&bc=<%=bc%>">发布时间</a></li>-->
                </ul>
                <div class="arealist">
                <ul><li class="<%if bc=0 then%>on<%end if%>"><a href="resources.asp">不限</a></li><li class="<%if bc=34 then%>on<%end if%>"><a href="resources.asp?bc=34">英国</a></li><li class="<%if bc=20 then%>on<%end if%>"><a href="resources.asp?bc=20">美国</a></li><li class="<%if bc=35 then%>on<%end if%>"><a href="resources.asp?bc=35">澳大利亚</a></li><li class="<%if bc=26 then%>on<%end if%>"><a href="resources.asp?bc=26">其他城市</a></li></ul>
                </div>
                <div class="mask"></div>
                		<div class="content-wrapper">
<!---->


<ul class="list2">
            <!---->


<% 
if rs.bof and rs.eof then 
response.write("暂无内容") 
else 
rs.PageSize=100 '设置页码 
pagecount=rs.PageCount '获取总页码 
page=int(page) '接收页码 
if page<=0 then page=1 '判断 
if request("page")="" then page=1 
rs.AbsolutePage=page '设置本页页码
i=0
do while not rs.eof and i<rs.PageSize
%>

    <li class="ftr"><a href="recommend.asp?articleid=<%=rs("articleid")%>"><img src="../<%=rs("defaultpicurl")%>" class="pic" alt="<%=rs("picalt")%>"/><%if rs("Elite")="True" then%><i class="hot"></i><%end if%></a>
      <div class="text">
      <span><%=rs("entitle")%>&nbsp;<%=rs("title")%></span><br>
      <span>(<%=rs("bigclassname")%>，<%=rs("smallclassname")%>)</span><br /><span class="fc-red">￥<%=rs("jgzj")%>万起</span></p>
        </div>
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
<script>
$(".area").click(function(){
$(".arealist").fadeToggle();
$(".mask").fadeToggle();
})
</script>