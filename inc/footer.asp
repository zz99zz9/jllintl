<!--row_last:页底-->
<div class="footer">
<div class="w1020">
<div class="lie"><!-- ico-->
<span class="btit">网站链接</span>
<span><a href="http://www.joneslanglasalle.com.cn/" target="_blank" rel="nofollow">仲量联行（中国）</a></span>
<span><a href="http://www.jll.com" target="_blank" rel="nofollow">仲量联行（全球）</a></span>
<span><a href="http://www.jllresidential.cn/guonei" target="_blank" rel="nofollow">仲量联行国内住宅</a></span>
</div>

<div class="lie">
<span class="btit">了解更多</span>
<span><a href="aboutus.asp">企业介绍</a></span>
<span><a href="team.asp">国际住宅</a></span>
<span><a href="m/index.asp">移动端网站</a></span>

</div>
<div class="lie">
<span class="btit">研究及见解</span>
<span><a href="report.asp">近期研究报告</a></span>
</div>
<div class="lied">
	<a href="javascript:openfrom('20165new.pdf');" class="bbtn b_h">联系我们</a><br />
    <span class="btit">关注我们</span>
    <img src="jll/img/ico_1.gif" class="b_h"/><img src="jll/img/ico_2.gif" class="ml10 b_h"/> <img src="jll/img/ico_3.gif" class="ml10 b_h"/> <img src="jll/img/ico_4.gif" class="ml10 b_h"/> <img src="jll/img/ico_5.gif" class="b_h"/>
</div>

<div class="bottom">
<%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select * from [class_links] order by oid desc,cid desc",conn,1,1
if rs.bof and rs.eof then 
else 
'response.write("友情链接：")
i=0
do while not rs.eof
'if i>0 then response.write (" | ")
%>

<!--<a href="<%=rs("CFile")%>"><%=rs("cname")%></a>-->
<%
rs.movenext
	i=i+1
    loop
end if
rs.close
	set rs=nothing%>
<!--<a href="#">隐私声明</a> | <a href="#">使用条款</a> | <a href="#">网站地图</a>-->
<span class="tr"><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602000984"><img src="jll/img/beian.png" style="float:left;margin-right:5px;margin-top:18px;"/>沪公网安备 31010602000984号</a>	沪ICP备15009917号-10	仲量联行测量师事务所（上海）有限公司&nbsp;&nbsp;&copy; 版权 2016 Jones Lang LaSalle,IP,Inc.</span>
</div>
</div>
</div>

<!--<script type="text/javascript" src="jll/js/jquery1.42.min.js"></script>
-->        <script src="jll/js/jquery-1.7.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="jll/js/jquery.SuperSlide.2.1.1.js"></script>

<script type="text/javascript" src="jll/js/xgwl.js"></script>
<script src="jll/js/jquery.cookies.js" type="text/javascript"></script>
<script src="jll/js/dfrom.js" type="text/javascript"></script>

<script src="jll/js/slides-1.1.1-min.js" type="text/javascript"></script>
		<script type="text/javascript">
		jQuery(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});
		

//首页搜索切换
		$(".sclass2").click(function(){
			var cname1=$(".sclass1").html();
			var cname2=$(".sclass2").html();
			var ch1=$("#skey1").attr("style");
			var ch2=$("#skey2").attr("style");
			$(".sclass1").html(cname2);
			$(".sclass2").html(cname1);
			$("#skey1").attr("style",ch2);
			$("#skey2").attr("style",ch1);
		});
		$("#searchbtn").click(function(){
			var cname=$(".sclass1").html();
			var ckeyfy=$("#skey1").val();
			var ckeyzx=$("#skey2").val();
			if(cname=="房源"){
				location.href='searchresources.asp?skey='+ckeyfy;
				}
			if(cname=="资讯"){
				location.href='searchnews.asp?skey='+ckeyzx;
				}
			});
			//
			$("#skey1").keypress(function(e){
  if (event.keyCode == 13) {

    $("#searchbtn").click();
  }
})
$("#skey2").keypress(function(e){
  if (event.keyCode == 13) {

    $("#searchbtn").click();
  }
})
			
		//搜索时input鼠标按下抬起效果
		input("#wrint1");
		input("#wrint2");
		input("#wrint3");
		input("#wrint4");
		input("#wrint5");
		input("#wrint6");
		input("#skey1");//搜索关键词一
		input("#skey2");//搜索关键词二
		function input(v){
    var n = $(v);
    var val=n.val();
    n.focus(function(){
		if(n.val()==val){
    $(this).val('');
	$(this).css("color","#000");
		}
    }).blur(function(){
		if (n.val()==""){
    $(this).val(val);
	$(this).css("color","#4d4d4d");
		}
    })
};
	
		</script>

        <!--百度统计-->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-88191327-1', 'auto');
  ga('send', 'pageview');
</script>

</body>
</html>
