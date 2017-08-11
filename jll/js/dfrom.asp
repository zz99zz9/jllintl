<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>


<%
db="../../%#Data$%Ba#se%%/%#Data$%Ba#se%%.mdb"
connstr="Provider=Microsoft.Jet.OLEDB.4.0;data source="&Server.MapPath(db)
Set Conn=Server.CreateObject("ADODB.Connection")
Conn.Open connstr
'类修改
dname=request("dname")
dtel=request("dtel")
dmail=request("dmail")
dcity=request("dcity")
if dtel<>"" then
  conn.execute"INSERT INTO [lyb] (lyname,lyTel,lydate,lyemail,lytext) VALUES ('"&dname&"','"&dtel&"','"&now()&"','"&dmail&"','"&dcity&"')"
  end if

%>
