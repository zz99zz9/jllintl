<!--#include file="inc/header.asp"-->

<%dim articleid
articleid=request.QueryString("articleid")

sql="select * From [Table_Product] where ArticleID="&articleid
Set rs= Server.CreateObject("ADODB.Recordset")
rs.open sql,conn,1,1
if rs.eof then
Set rs= Server.CreateObject("ADODB.Recordset")
sql="select * From [Table_Product] order by ArticleID desc"
rs.open sql,conn,1,1
end if
%>
               
<!--首页广告图-->
 <div class="swiper-container">
        <div class="swiper-wrapper">
                    <%Set prs= Server.CreateObject("ADODB.Recordset")
psql="select * From [Table_pic] where pro_id="&rs("ArticleID")&" order by oid desc,ID desc"
prs.open psql,conn,1,1%>
<%do while not prs.eof%>

            <div class="swiper-slide recommend"><img src='../<%=prs("pic_url")%>' /></div>
 <%
	i=i+1
	  
	     prs.movenext
	loop
%>

        </div>
         <div class="swiper-pagination"></div>
    </div>



                		<div class="content-wrapper xq">
                         <div class="tit3"><%=rs("entitle")%>&nbsp;<%=rs("title")%></div>
                         </div>
                         <div class="line2"></div>
<!--房屋特色-->
                         <div class="content-wrapper xq bline">
                         <div class="ltit2"><i class="titred"></i>房屋信息</div>
                         </div>
                         
                         <div class="content-wrapper xq fz13">
                         房屋总价:约￥<%=rs("jgzj")%>万起<br>户型:<%=rs("hx")%><br>面积均价:￥<%=rs("jgjj")%>万起（每平米）<br>开发商:<%=rs("ckfsname")%><br><br>
                         <!--<div class="cleft"></div>
                         <div class="cright"><br></div>-->
                         <div class="cbottom"><i class="cl1 ">教育资源</i><i class="cl2 ">滨水景观</i><i class="cl3 ">绿化自然</i><br><i class="cl1 ">交通便捷</i><i class="cl2 ">商务资源</i></div>
                         </div>
                 
                         <div class="line2"></div>
                         <div class="content-wrapper xq bline">
                         <span class="btnn hlbtn"><img src="jll/img/mm1.png"><br>汇率计算</span>
                         <span class="btnn gfznbtn"><img src="jll/img/mm2.png"><br>购房指南</span>
                         <span class="btnn" onClick="javascript:location.href='report.asp'"><img src="jll/img/mm3.png"><br>市场报告</span>
                         <a class="btnn"  href="#ltit2" style="color:#000"><!--<%=rs("DefaultPicUrl2")%>--><img src="jll/img/mm4.png"><br>项目介绍</a>
                         <div class="clear"></div>
                         </div>
                 
                         <div class="line2"></div>
 <!---->                 
                         <div class="content-wrapper xq bline">
            
           <div class="ltit2"><i class="titred"></i>项目特色</div>
                         </div>
                          <div class="content-wrapper xq">
    <div class="ltxt"><%=rs("content1")%>
    </div>
    </div>
     <div class="line2"></div>
    <div class="content-wrapper xq bline" style="position:relative">
            <div  id="ltit2" name="ltit2" style="position:absolute;top:-80px;left:0;"></div>
           <div class="ltit2"><i class="titred"></i>项目简介</div>
                         </div>
                         <div class="content-wrapper xq">
    <div class="ltxt"><%=rs("content")%></div><br>
    </div>
    <div class="line2"></div>
    <div class="content-wrapper xq bline">
       <div class="ltit2"><i class="titred"></i>地理位置</div>
                         </div>
      <div class="content-wrapper xq">
    <div class="ltxt" >
    <%if rs("bigclassid")=20 then%><a href="http://www.jllresidential.cn/intl/m/news_view.asp?prod_id=249" class="smh">&gt;&gt;&gt;美国置业说明会 三月中国巡回 详情请点击</a><%end if%>
   


			<div id='map' style="padding-bottom:20px;"><img src="../<%=rs("defaultpicurl2")%>" ><div class="clear"></div></div>
            

            </div>
            
            
    <!---->

</div>
		</div> <!-- .content-wrapper -->
          <div class="line2"></div> 
<div class="hlpop" ><i class="close">X</i>
<div class="hltable">
<table class=" table table-striped"><tbody><tr>
								<th>货币</th>
								<th>现钞买入</th>
								<th>现钞卖出</th>
								<th>中行折算价</th>
							</tr><tr><td>美元</td><td>682.0000</td><td>690.2700</td><td>687.9600</td></tr><tr><td>欧元</td><td>704.4700</td><td>732.0000</td><td>731.0200</td></tr><tr><td>港币</td><td>87.9200</td><td>88.9700</td><td>88.6900</td></tr><tr><td>日元</td><td>5.9968</td><td>6.2312</td><td>6.2519</td></tr><tr><td>英镑</td><td>821.4300</td><td>853.5400</td><td>855.1400</td></tr><tr><td>澳大利亚元</td><td>489.0000</td><td>508.1000</td><td>510.2000</td></tr><tr><td>加拿大元</td><td>492.6600</td><td>512.4200</td><td>509.3100</td></tr><tr><td>泰国铢</td><td>18.7000</td><td>20.0400</td><td>19.3400</td></tr><tr><td>新加坡元</td><td>466.7500</td><td>484.9800</td><td>483.9900</td></tr><tr><td>瑞典克朗</td><td>71.7700</td><td>74.6500</td><td>74.3200</td></tr><tr><td>瑞士法郎</td><td>658.6900</td><td>684.4400</td><td>683.8400</td></tr><tr><td>丹麦克朗</td><td>94.6700</td><td>98.4700</td><td>98.0100</td></tr><tr><td>挪威克朗</td><td>77.3700</td><td>80.4800</td><td>80.3300</td></tr><tr><td>林吉特</td><td></td><td></td><td>157.1300</td></tr><tr><td>菲律宾比索</td><td>13.3800</td><td>14.5600</td><td>13.8300</td></tr><tr><td>新西兰元</td><td>466.9700</td><td>491.1600</td><td>484.1400</td></tr><tr><td>卢布</td><td>9.9500</td><td>11.0900</td><td>10.6100</td></tr><tr><td>澳门元</td><td>83.2900</td><td>89.2900</td><td>86.1700</td></tr><tr><td>新台币</td><td>20.7500</td><td>22.3800</td><td>21.4700</td></tr><tr><td>韩国元</td><td>0.5605</td><td>0.6068</td><td>0.5837</td></tr><tr><td>南非兰特</td><td>43.7800</td><td>51.3800</td><td>47.7300</td></tr></tbody></table>
                            </div>
</div>
<!--#include file="inc/footer.asp"-->