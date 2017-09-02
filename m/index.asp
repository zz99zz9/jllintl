<!--#include file="inc/header.asp"-->
<!--首页广告图-->

<!-- -->   <div class="swiper-container">
        <div class="swiper-wrapper">
        				 <%Set prs= Server.CreateObject("ADODB.Recordset")
                                        psql="select top 5 * From [links] where wid=2 order by oid desc,ID desc"
                                        prs.open psql,conn,1,1
                                        i=0%>
                                        <%do while not prs.eof%>
      <div class="swiper-slide index" style="background-image:url('../<%=prs("file")%>');" onclick="javascript:window.open('<%=prs("url")%>');"></div>
                                 <%
                                	i=i+1
                                	     prs.movenext
                                	loop
                                prs.close
                                set prs=nothing
                                %>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <div class="menu2"><div class="bmm"><a href="resources.asp"><img src="jll/img/m1.png"><br>海外房源</a></div><div class="bmm"><a href="news_list.asp?cid=11"><img src="jll/img/m2.png"><br>热点资讯</a></div><div class="bmm"><a href="report.asp"><img src="jll/img/m3.png"><br>市场报告</a></div><div class="bmm"><a href="international.asp"><img src="jll/img/m4.png"><br>关于我们</a></div></div>
		<div class="content-wrapper">
        <div class="tit mt10">RECOMMENDED<br>本月热推</div>
<!---->

<ul class="list1">
      <%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select top 6 * from [Table_Product] order by OrderId desc,articleid desc",conn,1,1%>
<%i=1
do while not rs.eof%>
<li onClick="javascript:location.href='recommend.asp?articleid=<%=rs("articleid")%>'"><img src="../<%=rs("defaultpicurl")%>" class="pic" alt="<%=rs("picalt")%>"/><%if rs("Elite")="True" then%><i class="hot"></i><%end if%><span class="lname"><%=rs("entitle")%>&nbsp;<%=rs("title")%></span><br><span class="laddr">(<%=rs("bigclassname")%>,<%=rs("smallclassname")%>)</span>
<br /><span class="fc-red">￥<%=rs("jgzj")%>万起</span></li>

  <%rs.movenext
	i=i+1
	if i=4 then i=1
    loop
	rs.close
	set rs=nothing%>
    </ul>
    <!---->

            </div>
                
                		<div class="content-wrapper">
<!---->
<div class="tit mt10">NEWS<br>热点资讯</div>

<ul class="list2">
            <!---->
      <%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select top 6 * from [prod] where classid=11 or classid=12 order by oid desc,prod_id desc",conn,1,1%>
<%i=1
do while not rs.eof%>
<li onClick="javascript:location.href='news_view.asp?prod_id=<%=rs("prod_id")%>'"><img src="../<%=rs("prod_pic")%>" class="pic"/><span class="lname"><%=rs("prod_name")%></span></li>

  <%rs.movenext
	i=i+1
	if i=4 then i=1
    loop
	rs.close
	set rs=nothing%>
    <!---->


</ul>
</div>
		</div> <!-- .content-wrapper -->
<!--#include file="inc/footer.asp"-->