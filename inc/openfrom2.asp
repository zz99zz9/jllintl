<!--弹窗-->
<div class="intpop"><div class="close b_h">X</div>    <form>
      <span class="wrtit">请填写表格</span>
      <input type="text" class="wrint" value="您的姓名" id="wrint1"/><span class="errinfo"></span>
      <input type="text" class="wrint" value="手机号码" id="wrint2" onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')" max="11"/><span class="errinfo"></span>
      <input type="text" class="wrint" value="邮箱地址" id="wrint3"/><span class="errinfo"></span>
      <select id="wrint7" class="wrint">
        <option value="0">所在城市</option>
        <option value="北京">北京</option>
        <option value="天津">天津</option>
        <option value="上海">上海</option>
        <option value="杭州">杭州</option>
        <option value="深圳">深圳</option>
        <option value="广东">广东</option>
      </select>
      <span class="errinfo"></span>
      <input type="button" class="wrbtn b_h" value="提交" id="wrbtn1"/>
      <input type="hidden" id="downurl" />
    </form></div>
<div class="mask"></div>