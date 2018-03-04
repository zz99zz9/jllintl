// JavaScript Document
  $(".TAB_CLICK li").click(function(){
    var tab=$(this).parent(".TAB_CLICK");

//	console.log(tab);
    var on=tab.find("li").index(this);
    $(this).addClass('on').siblings(tab.find("li")).removeClass('on');

  });
  
  //
  $(".searchbuttom").click(function(){
	  var skey=$(".searchint").val();
	 location.href='resources.asp?skey='+skey; 
  });
  $(".searchint").focus(function(){


	  $(".cd-side-nav ul").attr("style","margin-top:-230px;");
	  })
	    $(".searchint").blur(function(){
	  $(".cd-side-nav ul").attr("style","margin-top:0px;");

	  
	  })
