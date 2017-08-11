<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%mm=1%>
<!--#include file="inc/conn.asp"-->
<!--#include file="inc/Config.Asp"-->
<!--#include file="inc/Function.asp"-->
<!--#include file="inc/Inc.Asp"-->
<%dim articleid
articleid=request.QueryString("articleid")
call SafeRequest(articleid)
sql="select * From [Table_Product] where ArticleID="&articleid
Set rrs= Server.CreateObject("ADODB.Recordset")
rrs.open sql,conn,1,1
if rrs.eof then
Set rrs= Server.CreateObject("ADODB.Recordset")
sql="select * From [Table_Product] order by ArticleID desc"
rrs.open sql,conn,1,1
end if
title=rrs("wz")
siteKey=rrs("Keywords")
SiteCont=rrs("Description")

%>
<!--#include file="inc/header2.asp"-->
<link rel="stylesheet" type="text/css" href="jll/css/fyed.css"/>
<!--row2:搜索条件-->

<div class="w">
  <div class="position"><a href="index.asp">JLL</a> &gt; <a href="resources.asp">海外房源</a> &gt; <a href="resources.asp?bc=<%=rrs("bigclassid")%>"><%=rrs("bigclassname")%></a> &gt; <a href="#"><%=rrs("entitle")%></a></div>
</div>
<!--弹窗-->

<!--#include file="inc/hl.asp"--> 
<!--row2:页面内容区-->
<div class="w">
  <div class="wl"> 
    <!--轮播开始-->
    <div id="sildes">
      <div class="control">
        <ul class="change">
        </ul>
      </div>
      <div class="thumbWrap">
        <div class="thumbCont">
          <ul>
            <!-- img属性, url=url, text=描述, bigimg=大图, alt=标题   url="http://www.sucaijiayuan.com"-->
            <%Set prs= Server.CreateObject("ADODB.Recordset")
psql="select * From [Table_pic] where pro_id="&rrs("ArticleID")&" order by oid desc,ID desc"
prs.open psql,conn,1,1%>
<%do while not prs.eof%>
            <li>
              <div><img src="<%=prs("pic_url")%>" bigImg="<%=prs("pic_url")%>" ></div>
            </li>
 <%
	i=i+1
	  
	     prs.movenext
	loop
%>
          </ul>
        </div>
      </div>
    </div>
    <!--轮播结束-->
        <div class="ltit">项目特色</div>
    <div class="ltxt"><%=rrs("content1")%>
    </div>
    <div class="ltit">项目简介</div>
    <div class="ltxt"><%=rrs("content")%></div>

    <div class="ltit">地理位置</div>
    <div class="ltxt" >
			<div id='map' style="height:500px;"><img src="<%=rrs("DefaultPicUrl2")%>" style="width:100%;"/></div>

            </div>
    <div class="ltxt"><div style="margin:80px 0 80px 260px;width:110px;text-align:center;"><img src="jll/img/temp/wm.gif" style="margin-bottom:10px;"/><br />扫一扫 关注JLL资讯</div></div>
    <div class="stitline" > <span class="stit">对此房源感兴趣？<a class="red" href="mailto:slevin.wang@ap.jll.com">联系我们！</a></span>
    
      <div class="leftbtn b_h"><i></i><span>400-818-3399</span></div>
      <div class="rightbtn b_h" onClick="openfrom('20165new.pdf');"><i></i><span>留言咨询</span></div>
    </div>
  </div>

  <div class="wr">
    <h1><%=rrs("entitle")%> <%=rrs("title")%></h1>
    <span class="stit">房屋总价:</span><span class="sjg">约￥<%=rrs("jgzj")%>万起</span>
     <span class="stit">面积均价:</span><span class="stxt">￥<%=rrs("jgjj")%>万起（每平米）</span> <span class="stit">户型:</span><span class="stxt"><%=rrs("hx")%>&nbsp;</span> <span class="stit">开发商:</span><span class="stxt"><%=rrs("ckfsname")%>&nbsp;</span><span class="stit">特点:</span><span class="stxt"><i class="cl1 ">教育资源</i><i class="cl2 ">滨水景观</i><br /><br /><i class="cl3 ">绿化自然</i><i class="cl1 ">交通便捷</i><br /><br /><i class="cl2 ">商务资源</i></span><!-- <span class="stit">竣工时间:</span><span class="stxt"><%=rrs("jgsj")%></span> <span class="stit">所有权:</span><span class="stxt"><%=rrs("syq")%></span><% if rrs("qt")<>"" then%> <span class="stit">其他:</span><span class="stxt"><%=rrs("qt")%></span><%end if%>-->
    <div class="c"></div>
    <div class="tel">400-818-3399</div>
    <a class="sbtn ico_js b_h" href="report.asp" >市场报告</a>
    <a class="sbtn ico_jsq b_h" href="javascript:openhl();">即时汇率</a>
    <a class="sbtn ico_down b_h" href="javascript:openfrom2('20165new.pdf');">购房指南</a>
    <a class="sbtn ico_xm b_h" href="javascript:openfrom2('<%=rrs("defaultpicurl3")%>');"><!--javascript:openfd();-->项目介绍</a>
    <div class="c"></div>
    <form>
      <span class="wrtit">免费咨询</span>
      <input type="text" class="wrint" value="您的姓名" id="wrint4"/><span class="errinfo"></span>
      <input type="text" class="wrint" value="手机号码" id="wrint5"/><span class="errinfo"></span>
      <input type="text" class="wrint" value="邮箱地址" id="wrint6"/><span class="errinfo"></span>
      <select id="wrint8" class="wrint">
        <option value="0">所在城市</option>
        <option value="北京">北京</option>
        <option value="天津">天津</option>
        <option value="上海">上海</option>
        <option value="杭州">杭州</option>
        <option value="深圳">深圳</option>
        <option value="广东">广东</option>
      </select>
      <span class="errinfo"></span>
      <input type="button" class="wrbtn b_h" value="提交" id="wrbtn2"/>
    </form>
     <span class="wrtit"><%=rrs("bigclassname")%>政策解读</span>
        <%set ors=Server.CreateObject("ADODB.Recordset")
osql="select top 5 * from [prod] where bigclassid="&rrs("bigclassid")&" and classid=12 order by oid desc,prod_id desc"

ors.Open osql,conn,1,1
i=0
do while not ors.eof%>

    <div class="fz12 over280">
      <a href="newsdetail.asp?prod_id=<%=ors("prod_id")%>" class=" c666" target="blank"><%=ors("prod_name")%></a></div>
      <div class="bline"></div>
    <%
ors.movenext 
i=i+1
loop
	ors.close
	set ors=nothing%>
    <!---->
    <span class="wrtit"><%=rrs("bigclassname")%>相关房源</span>
        <%set ors=Server.CreateObject("ADODB.Recordset")
osql="select top 5 * from [Table_Product] where Passed=true and bigclassid="&rrs("bigclassid")&" order by Elite,OrderId desc,articleid desc"'and Elite=true 

ors.Open osql,conn,1,1
i=0
do while not ors.eof%>
<a href="recommend.asp?articleid=<%=ors("articleid")%>" target="_blank" style="color:#C00;line-height:35px;"><%=ors("entitle")%></a><br />
<a href="recommend.asp?articleid=<%=ors("articleid")%>" target="_blank"><img src="<%=ors("defaultpicurl")%>" class="wgw b_h" /></a>
    <div class="wgwtxt fz12"><span class="b fz14"><%=ors("bigclassname")%>&nbsp;<%=ors("smallclassname")%></span>
      <div class="c"></div>
      约人民币 <span class="red"><%=ors("jgzj")%></span> 万+<br />
      <span class="more"><a href="recommend.asp?articleid=<%=ors("articleid")%>" target="blank">查看更多</a></span></div>
      <div class="bline"></div>
    <%
ors.movenext 
i=i+1
loop
	ors.close
	set ors=nothing%>
    <a style="display:block;float:left;padding:5px 10px;background:#C00;color:#fff;font-size:12px;margin-left:240px;" href="resources.asp?bc=<%=rrs("bigclassid")%>" target="_blank">更多</a><br /><br />
     <!---->
    <span class="wrtit">其他国家房源</span>
        <%set ors=Server.CreateObject("ADODB.Recordset")
osql="select top 5 * from [Table_Product] where Passed=true and bigclassid<>"&rrs("bigclassid")&" order by Elite,OrderId desc,articleid desc"

ors.Open osql,conn,1,1
i=0
do while not ors.eof%>
<a href="recommend.asp?articleid=<%=ors("articleid")%>" target="_blank" style="color:#C00;line-height:35px;"><%=ors("entitle")%></a><br />
<a href="recommend.asp?articleid=<%=ors("articleid")%>" target="_blank"><img src="<%=ors("defaultpicurl")%>" class="wgw b_h" /></a>
    <div class="wgwtxt fz12"><span class="b fz14"><%=ors("bigclassname")%>&nbsp;<%=ors("smallclassname")%></span>
      <div class="c"></div>
      约人民币 <span class="red"><%=ors("jgzj")%></span> 万+<br />
      <span class="more"><a href="recommend.asp?articleid=<%=ors("articleid")%>" target="blank">查看更多</a></span></div>
      <div class="bline"></div>
    <%
ors.movenext 
i=i+1
loop
	ors.close
	set ors=nothing%>
  <a style="display:block;float:left;padding:5px 10px;background:#C00;color:#fff;font-size:12px;margin-left:240px;" href="resources.asp" target="_blank">更多</a><br /><br />
  <!---->
    
  </div>
</div>
<!----> 
  <%rrs.close
set rrs=nothing%>
<!--#include file="inc/footer.asp"-->


<script type="text/javascript">
$(function(){
	$('#sildes').olvSlides(
		{
			thumb:true,
			thumbPage:true,
			thumbDirection:"Y",
			effect:'fade'

		}
	);
})
</script>
<script type="text/javascript">

$("#nav3").attr("class","on");
</script>