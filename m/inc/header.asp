<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%dim skey
skey=request.QueryString("skey")%>
<!--#include file="conn.asp"-->
<!doctype html>
<html lang="zh" class="no-js">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>仲量联行海外房产</title>
	<link rel="stylesheet" href="menu/css/reset.css"> <!-- CSS reset -->
	<link rel="stylesheet" type="text/css" href="menu/css/default.css">
	<link rel="stylesheet" href="menu/css/style.css"> <!-- Resource style -->
	<script src="menu/js/modernizr.js"></script> <!-- Modernizr -->
	<script type="text/javascript">
if(!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|ios)/i)){
		var url=location.href.split("/intl/m/")
	url2=url[0]+"/intl/"+url[1]
//	location.href=url2; //可以换成http地
}

</script>
	<!--[if IE]>
		<script src="http://libs.baidu.com/html5shiv/3.7/html5shiv.min.js"></script>
	<![endif]-->
   
    <link rel="stylesheet" href="jll/css/swiper.min.css">
     <link rel="stylesheet" href="jll/css/base.css">
</head>
<body>
	<header class="cd-main-header">
		<a href="index.asp" class="cd-logo"><img src="jll/img/logo.svg" alt="Logo"></a>

<div class="searchborder">
            <i class="searchbuttom"></i>
                <input type="text" class="searchint" placeholder="美国、英国" value='<%=skey%>'>
                </div>
		<a href="#0" class="cd-nav-trigger"><span></span></a>


	</header> <!-- .cd-main-header -->

	<main class="cd-main-content">
		<nav class="cd-side-nav">
			<ul>
<li class="bookmarks overview">
					<a href="index.asp">首页</a>
                    </li>
				<li class="has-children bookmarks overview">
					<a href="#0">海外房源</a>
					
					<ul>
						<li><a href="resources.asp?bc=34">英国</a></li>
						<li><a href="resources.asp?bc=20">美国</a></li>
						<li><a href="resources.asp?bc=35">澳大利亚</a></li>
                        <li><a href="resources.asp?bc=26">其他城市</a></li>
					</ul>
				</li>
				<li class="has-children bookmarks active">
					<a href="#0">热点资讯</a>
					<ul>
						<li><a href="news_list.asp?cid=11">最新展会</a></li>
						<li><a href="news_list.asp?cid=12">行业洞察</a></li>
					</ul>
				</li>

				<li class="bookmarks">
					<a href="report.asp">市场报告</a>
				</li>
                <li class="has-children bookmarks">
					<a href="#0">关于我们</a>
					
					<ul>
						<li><a href="aboutus.asp">仲量联行（中国）</a></li>
						<li><a href="international.asp">仲量联行国际住宅</a></li>
					</ul>
				</li>
			</ul>
            
		</nav>
