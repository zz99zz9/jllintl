	</main>
	<div class="footer">
    <div class="fleft">
    	<div class="qr"><img src="jll/img/se2hover.png"></div>
        <div class="txt">扫描关注微信号 JLL-IP</div>
        </div>
        <div class="fright mt70"><a href="tel:4008183399"><img src="jll/img/tel.svg" /></a></div><div class="clear"></div>
        <div class="copyright c">沪ICP备15009917号-10 © 版权 2016 Jones Lang LaSalle,IP,Inc</div><!---->
    </div>
 <div class="footertel"><a href="tel:4008183399"></a></div>
    <div class="footerbook "><a href="#"></a></div>
        <div class="mfzxbtn">免费咨询</div>
    <div class="mfzxpop tra">
    <i class="close">X</i>
      <form>
      <div style="text-align:center;margin-bottom:15px;" class="poptit">请填写表格，获取资料</div>
      <input type="text" class="wrint" id="wrint4" placeholder="您的姓名"/><span class="errinfo"></span>
      <input type="text" class="wrint" placeholder="手机号码" id="wrint5"/><span class="errinfo"></span>
      <input type="text" class="wrint" placeholder="邮箱地址" id="wrint6"/><span class="errinfo"></span>
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
      <input type="hidden" value="<%=ename%>" id="urltit">
      <input type="button" class="wrbtn wrbtn2 b_h" value="提交" id="wrbtn2"/>
    </form>
    </div>
    <div class="mfzxok">提交成功！</div>
    <script type="text/javascript" src="../jll/js/TouchSlide.1.1.js"></script>
	<script src="http://www.jq22.com/jquery/2.1.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="menu/js/jquery-2.1.1.min.js"><\/script>')</script>
	<script src="menu/js/jquery.menu-aim.js"></script>
	<script src="menu/js/main.js"></script> <!-- Resource jQuery -->
        <!-- Swiper JS -->
    <script src="jll/js/swiper.jquery.min.js"></script>
<script src="jll/js/xgwl.js"></script>
<script src="jll/js/dfrom.js"></script>
    <!-- Initialize Swiper -->
    <script>
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
	$(".footerbook").click(function(){
	$(".mfzxpop").css("bottom","0");
$(".mask").fadeIn();
});
$(".gfznbtn").click(function(){

	$(".mfzxpop").css("bottom","0");
$(".mask").fadeIn();
});

$(".mfzxpop .close").click(function(){
	$(".mfzxpop").css("bottom","-300px");
	$(".mask").fadeOut();
});

$(".close").click(function(){
	$(".mfzxpop").css("bottom","-300px");
	$(".mask").fadeOut();
	$(".hlpop").fadeOut();
});
$(".hlbtn").click(function(){
	$(".hlpop").fadeIn();
	});
    </script>

</body>
</html>
