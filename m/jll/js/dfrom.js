$(".wrbtn").click(function(){
	$(".mfzxpop").css("bottom","-350px");
$('.mfzxok').fadeIn();
//$(".mask").fadeOut();
console.log("F_F");
setTimeout("$('.mfzxok').fadeOut()",1000);

//结束
});


/////////////////////////////////////
//          验证管理员表单           //
////////////////////////////////////
//输入时验证表单
function getLength(str){
    // \x00-xff代表单字节字符。
    return str.replace(/[^\x00-\xff]/g, "xx").length;
  }
  
  
      var reg1 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/; // 验证邮箱正则    
      var reg2 = /^1\d{10}$/;     //验证手机号正则
  //wrint1 名称 
  
  $("#wrint1").blur(function(){
  checkwrint1("#wrint1");
  });
  $("#wrint2").blur(function(){
  checkwrint2("#wrint2");
      });
  $("#wrint3").blur(function(){
  checkwrint3("#wrint3");
      });
  $("#wrint7").blur(function(){
  checkwrint4("#wrint7");
      });
  //房源页固定表单
  $("#wrint4").blur(function(){
  checkwrint1("#wrint4");
  });
  $("#wrint5").blur(function(){
  checkwrint2("#wrint5");
      });
  $("#wrint6").blur(function(){
  checkwrint3("#wrint6");
      });
  $("#wrint8").blur(function(){
  checkwrint4("#wrint8");
      });
  //房源页提交
  $("#wrbtn2").click(function(){
      checkwrint1("#wrint4");
  checkwrint2("#wrint5");
  checkwrint3("#wrint6");
  checkwrint4("#wrint8");
  if ($("#wrint4").hasClass("no")||$("#wrint5").hasClass("no")||$("#wrint6").hasClass("no")){
  console.log("over");
      }else{
          dname=$("#wrint4").val();
          dtel=$("#wrint5").val();
          dmail=$("#wrint6").val();
          dcity=$("#wrint8").val();
          dtit=$("#urltit").val();
               $.post("jll/js/dfrom.asp",{dname:dname,dtel:dtel,dmail:dmail,dcity:dcity,dtit:dtit},
        function(data,status){
        if(status=="success"){
          //var jsObjstr =JSON.parse(data);
          alert("提交成功！我们将尽快和您联系。");
          }
          });
      
      $("#wrint4").val("");
  $("#wrint5").val("");
  $("#wrint6").val("");
      }
  });
  //弹窗提交时验证表单
  $("#wrbtn1").click(function(){
  checkwrint1("#wrint1");
  checkwrint2("#wrint2");
  checkwrint3("#wrint3");
  checkwrint4("#wrint7");
  
  if ($("#wrint1").hasClass("no")||$("#wrint2").hasClass("no")||$("#wrint3").hasClass("no")||$("#wrint7").hasClass("no")){
  console.log("over");
      }else{
  
  dname=$("#wrint1").val();
          dtel=$("#wrint2").val();
          dmail=$("#wrint3").val();
          dcity=$("#wrint7").val();
               $.post("jll/js/dfrom.asp",{dname:dname,dtel:dtel,dmail:dmail,dcity:dcity},
        function(data,status){
        if(status=="success"){
          //var jsObjstr =JSON.parse(data);
          //alert("提交成功！我们将尽快和您联系。");
          }
          });
  
  export_raw($("#downurl").val());//下载文件
  $(".intpop").fadeOut();
  $(".mask").fadeOut();
  $("#wrint1").val("");
  $("#wrint2").val("");
  $("#wrint3").val("");
  $("#downurl").val("");
  $.cookie('downcheck','-_-||',{expires: 1});
      }
  });
  
  //验证表单
  function checkwrint1(v){
          var reg = /[^\w\u4e00-\u9fa5]/g;    // 验证用户名正则 
          if ($(v).val()==""||$(v).val()=="您的姓名"){ 
          $(v).addClass("no");
      //    $(v).next(".errinfo").html("名称不能为空");

  
      }else {
          $(v).removeClass("no");
          $(v).next(".errinfo").html("");
  }
      }
      
  function checkwrint2(v){
          if ($(v).val()==""||$(v).val()=="手机号码"){ 
          $(v).addClass("no");

  
      }else{
          $(v).removeClass("no");
      $(v).next(".errinfo").html("");
      }
  }
  function checkwrint3(v){
          if ($(v).val()==""||$(v).val()=="邮箱地址"){ 
          $(v).addClass("no");

  
      }else{
          $(v).removeClass("no");
          $(v).next(".errinfo").html("");
      }
  }
  function checkwrint4(v){
          if ($(v).val()=="0"||$(v).val()==""){ 
          $(v).addClass("no");
      //    $(v).next(".errinfo").html("请选择您的所在城市");
  
      }else{
          $(v).removeClass("no");
          $(v).next(".errinfo").html("");
      }
  }