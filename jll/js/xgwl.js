// JavaScript Document
  $(".TAB_CLICK a").click(function(){
    var tab=$(this).parent(".TAB_CLICK");
    var con=tab.attr("id");
//	console.log(tab);
    var on=tab.find("a").index(this);
    $(this).addClass('on').siblings(tab.find("a")).removeClass('on');
    $(con).eq(on).show().siblings(con).hide();
  });
  //// 导航二级菜单
  $(".nav li").mousemove(function(){
    var tab=$(this).parent(".nav");
    var con=tab.attr("id");
    var on=tab.find("li").index(this);

 //   $(this).addClass('on').siblings(tab.find("ul")).removeClass('on');
	if(on!=0&&on!=3){
    $(con).eq(on).fadeIn().siblings(con).fadeOut();
	}
	if (on==0||on==3){
		$(con).fadeOut();
		}
  });
  			$(document).click(function(){
				$(".navlist").fadeOut();
			});
			$(".navlist").mouseleave(function(){
				$(".navlist").fadeOut();
			});

//强行下载文件
function fake_click(obj) {
        var ev = document.createEvent("MouseEvents");
        ev.initMouseEvent(
                "click", true, false, window, 0, 0, 0, 0, 0
                , false, false, false, false, 0, null
        );
        obj.dispatchEvent(ev);
    }

    function export_raw(name, data) {
        var urlObject = window.URL || window.webkitURL || window;

   //     var export_blob = new Blob([data]);

        var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
        save_link.href = name;//urlObject.createObjectURL(export_blob);
        save_link.download = name;
        fake_click(save_link);
    }
///////////////////
 $(".hlpop").mouseover(function(){
	 document.onmousewheel = function() {return false;};
});
	$(".hlpop").mouseout(function(){
	 document.onmousewheel = function() {return true;};
});