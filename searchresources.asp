<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%mm=0
skey=request.QueryString("skey")
order=request.QueryString("order")%>
<!--#include file="inc/header.asp"--> 
<!--row2:搜索条件及排序-->
<%
if order="" then order=0%>
<!--row2:页面内容区-->
<div class="w">  
<div class="position"><span style="color:#333;">您搜索的关键词是：</span><%=skey%> </div>
<div class="o-bor">
  <a href="?skey=<%=skey%>&order=0" <%call ison(order,0)%>>热门推荐</a><a href="?skey=<%=skey%>&order=1" <%call ison(order,1)%> >房屋总价</a><a href="?skey=<%=skey%>&order=2" <%call ison(order,3)%>>发布时间</a><span class="showpages"></span>
  <%set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [Table_Product] where Passed=true and (title like '%"&skey&"%' or entitle like '%"&skey&"%' or bigclassname like '%"&skey&"%' or smallclassname like '%"&skey&"%' or clbname like '%"&skey&"%' or clxname like '%"&skey&"%' or ctdname like '%"&skey&"%')"
sql=sql+" order by "
select case order
	case 0
	sql=sql+"Elite,"
	case 1
	sql=sql+"jgzj,"
	case 2
	sql=sql+"updatetime desc,"
end select
sql=sql+"OrderId desc,articleid desc"
'response.write sql
rs.Open sql,conn,1,1%>
  </div>
  <ul class="list3" id="l">
  <!---->

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

    <li class="ftr"><a href="recommend.asp?articleid=<%=rs("articleid")%>"><img src="<%=rs("defaultpicurl")%>" class="pic"/></a>
      <div class="text"><span><%=rs("bigclassname")%>，<%=rs("smallclassname")%></span><p class="lpsm">物业类别<span><%=rs("clbname")%></span><br />物业类型<span><%=rs("clxname")%></span><br />面积均价<span>￥<%=rs("jgjj")%>万起（每平米）</span><div class="logo"><img src="<%call kfsid2url(rs("ckfsid"))%>" /></div></p>
        <i><em class="fz24 ccd2927 va-b">￥<%=rs("jgzj")%></em><em class="fz18 ccd2927 va-b">万起</em><em class="fz14 c333 va-b"></em></i><button class="sbtn b_h" onClick="javascript:location.href='recommend.asp?articleid=<%=rs("articleid")%>'">查看更多</button>
        </div>
      <span class="lname"><a href="recommend.asp?articleid=<%=rs("articleid")%>" class="b_h"><%=rs("entitle")%>&nbsp;<%=rs("title")%></a></span><span class="laddr"></span>
      <div class="lcl"><i class="cl1 ">学区房</i><i class="cl2 ">滨水景观</i><i class="cl3 ">绿化自然</i></div></li>
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
<div class="tcdPageCode w pages mt40"></div>
<!--#include file="inc/footer.asp"-->
<script type="text/javascript">
$("#nav2").attr("class","on");
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

			location.href='searchresources.asp?skey=<%=skey%>&order=<%=order%>&page='+p;
        }
    });
	$(".showpages").html('<%=page%>/<%=pagecount%>');
</script>