<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%mm=1%>
<!--#include file="inc/header3.asp"--> 
<!--row2:搜索条件及排序-->
<!--#include file="inc/res_search.asp"--> 

<!--row2:页面内容区-->
<div class="w">

  <ul class="list3" id="l">
  <!---->

<% 
if rs.bof and rs.eof then 
response.write("暂无内容") 
else 
rs.PageSize=10 '设置页码 
pagecount=rs.PageCount '获取总页码 
page=int(page) '接收页码 
if page<=0 then page=1 '判断 
if request("page")="" then page=1 
rs.AbsolutePage=page '设置本页页码
i=0
do while not rs.eof and i<rs.PageSize
%>
<% if rs("clxid")=7 then
 clxid="期房" 
elseif rs("clxid")=11 then 
clxid="现房"
else clxid="现房 期房"
 end if%>
    <li class="ftr"><a href="recommend.asp?articleid=<%=rs("articleid")%>"><img src="<%=rs("defaultpicurl")%>" class="pic" alt="<%=rs("picalt")%>"/><%if rs("Elite")="True" then%><i class="hot"></i><%end if%></a>
      <div class="text"><span><%=rs("bigclassname")%>，<%=rs("smallclassname")%></span><p class="lpsm">物业类别<span><%=rs("clbname")%></span><br />物业类型<span><%=clxid%></span><br />面积均价<span>￥<%=rs("jgjj")%>万起（每平米）</span><div class="logo"><img src="<%call kfsid2url(rs("ckfsid"))%>" /></div></p>
        <i><em class="fz24 ccd2927 va-b">￥<%=rs("jgzj")%></em><em class="fz18 ccd2927 va-b">万起</em><em class="fz14 c333 va-b"></em></i><button class="sbtn b_h" onClick="javascript:location.href='recommend.asp?articleid=<%=rs("articleid")%>'">查看更多</button>
        </div>
      <span class="lname"><a href="recommend.asp?articleid=<%=rs("articleid")%>" class="b_h"><%=rs("entitle")%>&nbsp;<%=rs("title")%></a></span><span class="laddr"></span>
      <div class="lcl"><i class="cl1 ">教育资源</i><i class="cl2 ">滨水景观</i><i class="cl3 ">绿化自然</i><i class="cl1 ">交通便捷</i><i class="cl2 ">商务资源</i></div></li>
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
<script src="jll/js/jquery-1.7.1.min.js"></script>
<script src="jll/js/jquery.page.js"></script>
<script type="text/javascript" src="jll/js/jquery.cookies.js"></script>

<script>
    $(".tcdPageCode").createPage({
        pageCount:<%=pagecount%>,
        current:<%=page%>,//
        backFn:function(p){
         //   console.log(p);

			location.href='resources.asp?bc=<%=bc%>&sc=<%=sc%>&fj=<%=fj%>&lx=<%=lx%>&lb=<%=lb%>&order=<%=order%>&page='+p;
        }
    });
	$(".showpages").html('<%=page%>/<%=pagecount%>');
</script>