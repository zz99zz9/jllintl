<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%Response.Redirect("http://ir.joneslanglasalle.com.cn/")%>
<%mm=0%>
<!--#include file="inc/header.asp"-->

<!--row2:广告-->

		<div id="slideBox" class="slideBox ">

			<div class="hd">
				<ul><li></li><li></li><li></li></ul>
			</div>
			<div class="bd">
				<ul>
                 <div class="swiper-slide index" style="background-image:url('http://www.jllresidential.cn/intl/jll/img/pic07.jpg');" onclick="javascript:window.open('http://www.jllresidential.cn/intl/newsdetail.asp?prod_id=259');"></div>
        <div class="swiper-slide index" style="background-image:url('http://www.jllresidential.cn/intl/jll/img/pic005.jpg');" onclick="javascript:window.open('http://www.jllresidential.cn/intl/newsdetail.asp?prod_id=256');"></div>
        <div class="swiper-slide index" style="background-image:url('http://www.jllresidential.cn/intl/jll/img/pic08.jpg');" onclick="javascript:window.open('http://www.jllresidential.cn/intl/news_view.asp?prod_id=247');"></div>
					
					<!--<li style="background:url(jll/img/pic001.jpg) center top;" onclick="javascript:window.open('http://www.jllresidential.cn/intl/newsdetail.asp?prod_id=236');" class="hand"></li>
				<li style="background:url(jll/img/pic004.jpg) center top;" onclick="javascript:window.open('http://www.jllresidential.cn/intl/newsdetail.asp?prod_id=249');" class="hand"></li>-->
				</ul>
			</div>

			<!-- 下面是前/后按钮代码，如果不需要删除即可 -->
			<a class="prev" href="javascript:void(0)"></a>
			<a class="next" href="javascript:void(0)"></a>

<div class="w580 sear"><span class="sclass"><span class="sclass1">房源</span><i class="arr_down "></i><span class="sclass2">资讯</span></span><input class="sint" type="text" id="skey1"  style="display:block;" placeholder="美国、英国、澳大利亚"/><input type="text" class="sint" style="display:none;" id="skey2" placeholder="美国房产、英国房产 、伦敦买房"/><input type="hidden" id="searchklass" value="1"/><button class="sbtn b_h" id="searchbtn">搜索</button></div>
		</div>
         
<!--row2:页面内容区-->
<div class="w pt1">
	<div class=" ltit">本月热推<br /><em>RECOMMENDED</em>
	<a href="resources.asp" class="more b_h">更多</a></div>

    <ul class="list1">
        <!---->
      <%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select top 6 * from [Table_Product] where Elite=True order by OrderId desc,articleid desc",conn,1,1%>
<%i=1
do while not rs.eof%>
<li class="<%if i=1 then%>ftr<%end if%> hand" onClick="javascript:location.href='recommend.asp?articleid=<%=rs("articleid")%>'"><img src="<%=rs("defaultpicurl")%>" class="pic" alt="<%=rs("picalt")%>"/><%if rs("Elite")="True" then%><i class="hot"></i><%end if%><div class="text"><%=rs("entitle")%><i>￥<%=rs("jgzj")%>万+</i></div><span class="lname"><%=rs("entitle")%>&nbsp;<%=rs("title")%></span><span class="laddr"><%=rs("bigclassname")%>，<%=rs("smallclassname")%></span></li>

  <%rs.movenext
	i=i+1
	if i=4 then i=1
    loop
	rs.close
	set rs=nothing%>
    <!---->

    </ul>
    <div class="c"></div>
    <div class="ltit">最新展会<br /><em>EXHIBITION</em>
    <a href="news_list.asp?cid=11" class="more b_h">更多</a></div>
    <ul class="list2">
            <!---->
      <%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select top 6 * from [prod] where classid=11 order by oid desc,prod_id desc",conn,1,1%>
<%i=1
do while not rs.eof%>
<li class="<%if i=1 then%>ftr<%end if%> b_w" onClick="javascript:location.href='newsdetail.asp?prod_id=<%=rs("prod_id")%>'"><img src="<%=rs("prod_pic")%>" class="pic" alt="<%=rs("picalt")%>" title="<%=rs("picalt")%>"/><span class="lname"><%=rs("prod_name")%></span><span class="laddr"><%=left(RemoveHTML(rs("prod_detail")),70)%>……</span></li>

  <%rs.movenext
	i=i+1
	if i=4 then i=1
    loop
	rs.close
	set rs=nothing%>
    <!---->

    </ul>

 <div class="c"></div>
    <div class="ltit">行业洞察<br /><em>INSIGHT</em>
    <a href="news_list.asp?cid=12" class="more b_h">更多</a></div>
    <ul class="list2">
            <!---->
      <%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select top 6 * from [prod] where classid=12 order by oid desc,prod_id desc",conn,1,1%>
<%i=1
do while not rs.eof%>
<li class="<%if i=1 then%>ftr<%end if%> b_w" onClick="javascript:location.href='newsdetail.asp?prod_id=<%=rs("prod_id")%>'"><img src="<%=rs("prod_pic")%>" class="pic" alt="<%=rs("picalt")%>" title="<%=rs("picalt")%>"/><span class="lname"><%=rs("prod_name")%></span><span class="laddr"><%=left(RemoveHTML(rs("prod_detail")),70)%>……</span></li>

  <%rs.movenext
	i=i+1
	if i=4 then i=1
    loop
	rs.close
	set rs=nothing%>
    <!---->

    </ul>
</div>

<!--#include file="inc/footer.asp"-->
<script type="text/javascript">
//首页加动画
$(document).ready(function(){
	$(".topline").addClass("topani");
});
</script>
