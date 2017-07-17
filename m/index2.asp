<!--#include file="inc/header.asp"-->
		<div class="content-wrapper">
<!--首页广告图-->
	<div id="focus" class="focus">
				<div class="hd">
					<ul></ul>
				</div>
				<div class="bd">
					<ul>
							<li><a href="#"><img _src="images/m1.jpg" src="images/blank.png" /></a></li>
							<li><a href="#"><img _src="images/m2.jpg" src="images/blank.png"/></a></li>
							<li><a href="#"><img _src="images/m3.jpg" src="images/blank.png"/></a></li>
					</ul>
				</div>
			</div>
			<script type="text/javascript">
				TouchSlide({ 
					slideCell:"#focus",
					titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
					mainCell:".bd ul", 
					effect:"left", 
					autoPlay:true,//自动播放
					autoPage:true, //自动分页
					switchLoad:"_src" //切换加载，真实图片路径为"_src" 
				});
			</script>
<!---->
			<div >fff
            </div>
		</div> <!-- .content-wrapper -->
<!--#include file="inc/footer.asp"-->