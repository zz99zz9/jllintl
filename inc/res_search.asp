

<div class="w">
  <div class="position"><a href="index.asp">JLL</a> &gt; <a href="resources.asp">海外房源</a><%if bc<>0 then%> &gt; <a href="#"><%call showName("Table_ProBigClass",bc,"bigclassid","bigclassname")%></a><%end if%></div>
  <div class="serbor">
  <!--国家-->

  <%set rs=Server.CreateObject("ADODB.Recordset")
rs.Open "select * from [Table_ProBigClass] order by OrderId desc",conn,1,1%>
  <div class="serline TAB_CLICK"> <span class="sertit" >国家：</span><a href="?<%call seaurl(0,0,fj,lx,lb,order,1)%>" <%call ison(bc,0)%>>不限</a>
  <%do while not rs.eof%>
  <a href="?<%call seaurl(rs("BigClassId"),0,fj,lx,lb,order,1)%>" <%call ison(bc,rs("BigClassId"))%>><%=rs("BigClassName")%></a>
  <%rs.movenext
	
    loop
	rs.close
	set rs=nothing%></div>
  <!--城市-->
  <%if bc<>"" and bc<>0 then%>
  <%set rs=Server.CreateObject("ADODB.Recordset")
  rs.Open "select * from [Table_ProSmallClass] where BigClassID="&bc&" order by OrderId desc",conn,1,1%>
    <div class="serline TAB_CLICK"> <span class="sertit">城市：</span><a href="?<%call seaurl(bc,0,fj,lx,lb,order,1)%>" <%call ison(sc,0)%>>不限</a>
    <%do while not rs.eof%>
  <a href="?<%call seaurl(bc,rs("SmallClassId"),fj,lx,lb,order,1)%>" <%call ison(sc,rs("SmallClassId"))%>><%=rs("SmallClassName")%></a>
  <%rs.movenext
	
    loop
	rs.close
	set rs=nothing%>
      </div>
    <%end if%>
    <!--房价-->
    <%set rs=Server.CreateObject("ADODB.Recordset")
  rs.Open "select * from [Class_fj] order by oId desc,cid desc",conn,1,1%>
       <div class="serline TAB_CLICK"> <span class="sertit">房价：</span><a href="?<%call seaurl(bc,sc,0,lx,lb,order,1)%>" <%call ison(fj,0)%>>不限</a>
     <%do while not rs.eof%>
     <a href="?<%call seaurl(bc,sc,rs("cid"),lx,lb,order,1)%>" <%call ison(fj,rs("cid"))%>><%=rs("cname")%></a>
       <%rs.movenext
	
    loop
	rs.close
	set rs=nothing%>
     </div>
     <!--类型-->
    <%set rs=Server.CreateObject("ADODB.Recordset")
  rs.Open "select * from [Class_lx] order by oId desc,cid desc",conn,1,1%>
       <div class="serline TAB_CLICK"> <span class="sertit">类型：</span><a href="?<%call seaurl(bc,sc,fj,0,lb,order,1)%>" <%call ison(lx,0)%>>不限</a>
     <%do while not rs.eof%>
     <a href="?<%call seaurl(bc,sc,fj,rs("cid"),lb,order,1)%>" <%call ison(lx,rs("cid"))%>><%=rs("cname")%></a>
       <%rs.movenext
	
    loop
	rs.close
	set rs=nothing%>
     </div>
 <!--类别-->
    <%set rs=Server.CreateObject("ADODB.Recordset")
  rs.Open "select * from [Class_lb] order by oId desc,cid desc",conn,1,1%>
       <div class="serline TAB_CLICK"> <span class="sertit">类别：</span><a href="?<%call seaurl(bc,sc,fj,lx,0,order,1)%>" <%call ison(lb,0)%>>不限</a>
     <%do while not rs.eof%>
     <a href="?<%call seaurl(bc,sc,fj,lx,rs("cid"),order,1)%>" <%call ison(lb,rs("cid"))%>><%=rs("cname")%></a>
       <%rs.movenext
	
    loop
	rs.close
	set rs=nothing%>
     </div>
  </div>
   <!--已选-->
   <%if bc<>0 or sc<>0 or fj<>0 or lx<>0 or lb<>0 then%>
  <div class="sed">
    <span class="sertit">您已经选择</span>
	<%if bc<>0 then%><a href="?<%call seaurl(0,0,fj,lx,lb,order,page)%>" class="b_h"><span class="txt"><%call showName("Table_ProBigClass",bc,"Bigclassid","BigclassName")%></span><img src="jll/img/close1.gif" class="close"/></a><%end if%>
    <%if sc<>0 then%><a href="?<%call seaurl(bc,0,fj,lx,lb,order,page)%>" class="b_h"><span class="txt"><%call showName("Table_ProSmallClass",sc,"Smallclassid","SmallclassName")%></span><img src="jll/img/close1.gif" class="close"/></a><%end if%>
    <%if fj<>0 then%><a href="?<%call seaurl(bc,sc,0,lx,lb,order,page)%>" class="b_h"><span class="txt"><%call showName("Class_fj",fj,"cid","cName")%></span><img src="jll/img/close1.gif" class="close"/></a><%end if%>
    <%if lx<>0 then%><a href="?<%call seaurl(bc,sc,fj,0,lb,order,page)%>" class="b_h"><span class="txt"><%call showName("Class_lx",lx,"cid","cName")%></span><img src="jll/img/close1.gif" class="close"/></a><%end if%>
    <%if lb<>0 then%><a href="?<%call seaurl(bc,sc,fj,lx,0,order,page)%>" class="b_h"><span class="txt"><%call showName("Class_lb",lb,"cid","cName")%></span><img src="jll/img/close1.gif" class="close"/></a><%end if%>
    <a href="?<%call seaurl(0,0,0,0,0,order,0)%>" class="c-all"><span class="txt">全部清除</span></a>
  </div><%end if%>
  
  <div class="o-bor">
  <a href="?<%call seaurl(bc,sc,fj,lx,lb,0,1)%>" <%call ison(order,0)%>>热门推荐</a><a href="?<%
  if order=1 then
  call seaurl(bc,sc,fj,lx,lb,4,1)
  else
  call seaurl(bc,sc,fj,lx,lb,1,1)
  end if
  %>" <%call ison(order,1)%> <%call ison(order,4)%> >房屋总价<span class="<%if order=4 then%>dot-top<%elseif order=1 then%>dot-bottom<%end if%> "></span></a><a href="?<%
  if order=2 then
  call seaurl(bc,sc,fj,lx,lb,5,1)
  else
   call seaurl(bc,sc,fj,lx,lb,2,1)
   end if
  %>" <%call ison(order,2)%> <%call ison(order,5)%> >物业均价<span class="<%if order=5 then%>dot-top<%elseif order=2 then%>dot-bottom<%end if%>"></span></a><a href="?<%
  if order=3 then
  call seaurl(bc,sc,fj,lx,lb,6,1)
  else
   call seaurl(bc,sc,fj,lx,lb,3,1)
   end if
  %>" <%call ison(order,3)%> <%call ison(order,6)%>>发布时间<span class="<%if order=6 then%>dot-top<%elseif order=3 then%>dot-bottom<%end if%>"></span></a><span class="showpages"></span>
  </div>
</div>
<%set rs=Server.CreateObject("ADODB.Recordset")
sql="select * from [Table_Product] where Passed=true"
if bc<>0 and bc<>"" then sql=sql+" and bigclassid="&bc
if sc<>0 and sc<>"" then sql=sql+" and smallclassid="&sc
if fj<>0 and fj<>"" then sql=sql+" and cfjid='"&fj&"'"
if lx<>0 and lx<>"" then sql=sql+" and clxid='"&lx&"'"
if lb<>0 and lb<>"" then sql=sql+" and clbid='"&lb&"'"
sql=sql+" order by "
select case order
	case 0
	sql=sql+"Elite,"
	case 1
	sql=sql+"jgzj desc,"
	case 2
	sql=sql+"jgjj desc,"
	case 3
	sql=sql+"updatetime desc,"
	case 4
	sql=sql+"jgzj,"
	case 5
	sql=sql+"jgjj,"
	case 6
	sql=sql+"updatetime,"
end select
sql=sql+"OrderId desc,articleid desc"
'response.write sql
rs.Open sql,conn,1,1%>

