/*! no_rails_asset_compression */

webpackJsonp([4,46],{317:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t,n){var i=function(i){function r(){o(this,r)
var e=s(this,(r.__proto__||Object.getPrototypeOf(r)).call(this))
e.state=n(t)
e.handleStoresChanged=e.handleStoresChanged.bind(e)
return e}a(r,i)
c(r,[{key:"componentDidMount",value:function(){var e=this
this._listenerIds=[]
t.forEach(function(t){var n=t.addListener(e.handleStoresChanged)
e._listenerIds.push(n)})}},{key:"componentWillUnmount",value:function(){var e=this
t.forEach(function(t,n){t.removeListener(e._listenerIds[n])})}},{key:"handleStoresChanged",value:function(){this.setState(n(t))}},{key:"render",value:function(){return d.default.createElement(e,l({},this.props,this.state))}}])
return r}(d.default.Component)
return i}Object.defineProperty(t,"__esModule",{value:!0})
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
t.default=r
var u=n(1),d=i(u)
e.exports=t.default},502:function(e){/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
"use strict"
function t(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(e)}function n(){try{if(!Object.assign)return!1
var e=new String("abc")
e[5]="de"
if("5"===Object.getOwnPropertyNames(e)[0])return!1
for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n
var i=Object.getOwnPropertyNames(t).map(function(e){return t[e]})
if("0123456789"!==i.join(""))return!1
var o={}
"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e})
return"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable
e.exports=n()?Object.assign:function(e){for(var n,a,r=t(e),l=1;l<arguments.length;l++){n=Object(arguments[l])
for(var c in n)o.call(n,c)&&(r[c]=n[c])
if(i){a=i(n)
for(var u=0;u<a.length;u++)s.call(n,a[u])&&(r[a[u]]=n[a[u]])}}return r}},838:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(1),a=i(s),r=n(13),l=i(r),c=n(1947),u=n(502),d=i(u),p={serverInitialize:function(e){var t=a.default.Children.count(e.children),n=e.rtl?t-1-e.initialSlide:e.initialSlide
this.setState({slideCount:t,currentSlide:n})},initialize:function(e){var t,n=l.default.findDOMNode(this.list),i=a.default.Children.count(e.children),o=this.getWidth(n),s=this.getWidth(l.default.findDOMNode(this.track))
if(e.vertical)t=this.getWidth(l.default.findDOMNode(this))
else{var r=e.centerMode&&2*parseInt(e.centerPadding)
t=(this.getWidth(l.default.findDOMNode(this))-r)/e.slidesToShow}var u=this.getHeight(n.querySelector('[data-index="0"]')),p=u*e.slidesToShow,m=e.rtl?i-1-e.initialSlide:e.initialSlide
this.setState({slideCount:i,slideWidth:t,listWidth:o,trackWidth:s,currentSlide:m,slideHeight:u,listHeight:p},function(){var t=(0,c.getTrackLeft)((0,d.default)({slideIndex:this.state.currentSlide,trackRef:this.track},e,this.state)),n=(0,c.getTrackCSS)((0,d.default)({left:t},e,this.state))
this.setState({trackStyle:n})
this.autoPlay()})},update:function(e){var t,n=l.default.findDOMNode(this.list),i=a.default.Children.count(e.children),o=this.getWidth(n),s=this.getWidth(l.default.findDOMNode(this.track))
if(e.vertical)t=this.getWidth(l.default.findDOMNode(this))
else{var r=e.centerMode&&2*parseInt(e.centerPadding)
t=(this.getWidth(l.default.findDOMNode(this))-r)/e.slidesToShow}var u=this.getHeight(n.querySelector('[data-index="0"]')),p=u*e.slidesToShow
e.autoplay||this.pause()
this.setState({slideCount:i,slideWidth:t,listWidth:o,trackWidth:s,slideHeight:u,listHeight:p},function(){var t=(0,c.getTrackLeft)((0,d.default)({slideIndex:this.state.currentSlide,trackRef:this.track},e,this.state)),n=(0,c.getTrackCSS)((0,d.default)({left:t},e,this.state))
this.setState({trackStyle:n})})},getWidth:function(e){return e.getBoundingClientRect().width||e.offsetWidth},getHeight:function(e){return e.getBoundingClientRect().height||e.offsetHeight},adaptHeight:function(){if(this.props.adaptiveHeight){var e='[data-index="'+this.state.currentSlide+'"]'
if(this.list){var t=l.default.findDOMNode(this.list)
t.style.height=t.querySelector(e).offsetHeight+"px"}}},canGoNext:function(e){var t=!0
e.infinite||(e.centerMode?e.currentSlide>=e.slideCount-1&&(t=!1):(e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1))
return t},slideHandler:function(e){var t,n,i,o,s,a=this
if(!this.props.waitForAnimate||!this.state.animating)if(this.props.fade){n=this.state.currentSlide
if(this.props.infinite===!1&&(e<0||e>=this.state.slideCount))return
t=e<0?e+this.state.slideCount:e>=this.state.slideCount?e-this.state.slideCount:e
this.props.lazyLoad&&this.state.lazyLoadedList.indexOf(t)<0&&this.setState({lazyLoadedList:this.state.lazyLoadedList.concat(t)})
s=function(){a.setState({animating:!1})
a.props.afterChange&&a.props.afterChange(t)
delete a.animationEndCallback}
this.setState({animating:!0,currentSlide:t},function(){this.animationEndCallback=setTimeout(s,this.props.speed)})
this.props.beforeChange&&this.props.beforeChange(this.state.currentSlide,t)
this.autoPlay()}else{t=e
n=t<0?this.props.infinite===!1?0:this.state.slideCount%this.props.slidesToScroll!==0?this.state.slideCount-this.state.slideCount%this.props.slidesToScroll:this.state.slideCount+t:t>=this.state.slideCount?this.props.infinite===!1?this.state.slideCount-this.props.slidesToShow:this.state.slideCount%this.props.slidesToScroll!==0?0:t-this.state.slideCount:t
i=(0,c.getTrackLeft)((0,d.default)({slideIndex:t,trackRef:this.track},this.props,this.state))
o=(0,c.getTrackLeft)((0,d.default)({slideIndex:n,trackRef:this.track},this.props,this.state))
this.props.infinite===!1&&(i=o)
this.props.beforeChange&&this.props.beforeChange(this.state.currentSlide,n)
if(this.props.lazyLoad){for(var r=!0,l=[],u=t;u<t+this.props.slidesToShow;u++){r=r&&this.state.lazyLoadedList.indexOf(u)>=0
r||l.push(u)}r||this.setState({lazyLoadedList:this.state.lazyLoadedList.concat(l)})}if(this.props.useCSS===!1)this.setState({currentSlide:n,trackStyle:(0,c.getTrackCSS)((0,d.default)({left:o},this.props,this.state))},function(){this.props.afterChange&&this.props.afterChange(n)})
else{var p={animating:!1,currentSlide:n,trackStyle:(0,c.getTrackCSS)((0,d.default)({left:o},this.props,this.state)),swipeLeft:null}
s=function(){a.setState(p)
a.props.afterChange&&a.props.afterChange(n)
delete a.animationEndCallback}
this.setState({animating:!0,currentSlide:n,trackStyle:(0,c.getTrackAnimateCSS)((0,d.default)({left:i},this.props,this.state))},function(){this.animationEndCallback=setTimeout(s,this.props.speed)})}this.autoPlay()}},swipeDirection:function(e){var t,n,i,o
t=e.startX-e.curX
n=e.startY-e.curY
i=Math.atan2(n,t)
o=Math.round(180*i/Math.PI)
o<0&&(o=360-Math.abs(o))
return o<=45&&o>=0||o<=360&&o>=315?this.props.rtl===!1?"left":"right":o>=135&&o<=225?this.props.rtl===!1?"right":"left":this.props.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},play:function(){var e
if(!this.state.mounted)return!1
if(this.props.rtl)e=this.state.currentSlide-this.props.slidesToScroll
else{if(!this.canGoNext(o({},this.props,this.state)))return!1
e=this.state.currentSlide+this.props.slidesToScroll}this.slideHandler(e)},autoPlay:function(){this.state.autoPlayTimer||this.props.autoplay&&this.setState({autoPlayTimer:setInterval(this.play,this.props.autoplaySpeed)})},pause:function(){if(this.state.autoPlayTimer){clearInterval(this.state.autoPlayTimer)
this.setState({autoPlayTimer:null})}}}
t.default=p},839:function(e,t,n){(function(t){"use strict"
var i,o,s,a,r,l,c,u,d,p,m,h,f,g,v,y,b,_,w,E,C,x,k,N
v=n(1)
y=n(13)
m=n(26)
i=n(6)
E=n(3)
N=n(307)
x=n(14)
a=n(84)
f=n(56)
r=n(87)
l=n(224)
u=n(53)
h=n(233)
w=n(519)
_=n(167)
k=n(30)
s=n(29)
d=n(1975)
b=n(1946)
p=n(521)
C=n(317)
o=n(11)
g=n(5)
c=v.createClass({displayName:"EcommerceProduct",mixins:[w.enableAfterMount(),_],contextTypes:{fromStorePage:v.PropTypes.bool},getInitialState:function(){return{variationId:"",quantity:1,price:0,name:"",currentImageIndex:0,showSelectPanel:!1,showSelectVariationMsg:!1}},componentDidMount:function(){if(this.props.product.variations.length<=1)return this._chooseVariation(this._getFirstAvailableVariation().id)},componentDidUpdate:function(){var e,t
e=i(y.findDOMNode(this.refs.imageWrapper))
t=e.find("img")
e.height(t.height())
return t.load(function(){return e.height(t.height())})},componentWillReceiveProps:function(e){if(this.props.product.id!==e.product.id){if(e.product.variations.length<=1){this._chooseVariation(this._getFirstAvailableVariation(e.product.variations).id,e.product.variations)
return this.setState({currentImageIndex:0})}return this.setState(this.getInitialState())}},_setClickPosition:function(e,t){return this._clickPosition={x:e,y:t}},_shoppingCartAnimation:function(e,t){var n,o,a,r,l,c,u,d,p,m,h
n=i("<div class='s-ecommerce-animation-item'><i class='entypo-bag'></i></div>")
o=i(s.isSmallScreen()?"#s-mobile-shopping-cart-new":"#s-ecommerce-shopping-cart")
if(!o.length)return"function"==typeof t?t():void 0
r=o.find(".fa").offset()
l={x:r.left-5,y:r.top-i(window).scrollTop()}
e={x:e.x-15,y:e.y-15}
n.css({top:e.y,left:e.x})
h=l.x-e.x
i("#s-content").append(n)
if(l.y<=e.y){a=(e.y-l.y)/Math.pow(e.x-l.x,2)
p=function(e){return a*Math.pow(e-l.x,2)+l.y}}else{a=(l.y-e.y)/Math.pow(l.x-e.x,2)
p=function(t){return a*Math.pow(t-e.x,2)+e.y}}d=Math.sqrt(Math.pow(l.y-e.y,2)+Math.pow(l.x-e.x,2))
u=(l.x-e.x)/(60*d/1e3)
c=e.x+u
m=function(e){return function(){return e.setTimeout(function(){if(!((l.x-c)*h<0)){n.css({left:c,top:p(c)})
c+=u
return m()}n.css({left:l.x,top:l.y})
"function"==typeof t&&t()
n.remove()
o.addClass("add-item-animation")
e.setTimeout(function(){return o.removeClass("add-item-animation")},700)},1e3/60)}}(this)
m()
return o.removeClass("add-item-animation")},_getRestNum:function(){var e,t
t=this._getVariationData()
e=E.find(this.props.cartData.items,function(e){return+e.orderItem.id===+t.id})
return e?t.quantity-e.orderItem.quantity:t.quantity},_getOriginalRestNum:function(){var e
e=this._getVariationData()
return e.quantity},_allOutOfStock:function(){return E.all(this.props.product.variations,function(e){return 0===+e.quantity})},_hasPayment:function(){return l.isPaymentAccountSet()},_canBuy:function(){var e,t,n,i
i=this._getVariationData()
if(i){n=this._getRestNum()
t=this._getOriginalRestNum()
e=+this.state.quantity||1
return e<=n||t===-1}},_canMinusQuantity:function(){var e
e=+this.state.quantity
return!isNaN(e)&&e>=2},_getFirstAvailableVariation:function(e){var t
null==e&&(e=this.props.product.variations)
t=e.find(function(e){return function(t){var n,i
n=e.props.cartData.items.find(function(e){return+e.orderItem.id===+t.id})
i=n?t.quantity-n.orderItem.quantity:t.quantity
return i>0||t.quantity===-1}}(this))
return t?t:e[0]},_getVariationData:function(){var e,t
t=E.find(null!=(e=this.props.product)?e.variations:void 0,function(e){return function(t){return+t.id===+e.state.variationId}}(this))
return t||(t={})},_getErrorText:function(){var e
if(this._canBuy())return""
if(!this.state.variationId&&this.state.showSelectVariationMsg)return t("Ecommerce|Select an option")
e=this._getOriginalRestNum()
return"undefined"==typeof e?"":0===e?t("Ecommerce|This option is out of stock"):t("Ecommerce|Only %{quantity} in stock",{quantity:e})},_getProductImage:function(){var e
return(null!=(e=this.props.product.picture[this.state.currentImageIndex])?e.thumbnailUrl:void 0)||k.cdnAssetPath(r.DEFAULT_PRODUCT_IMAGE)},_getEstimatedDelivery:function(){var e,t,n
n=this.props.settings.estimatedDelivery
t=this.props.locale
e="zh-CN"===t?"YYYY年M月":"MMMM YYYY"
return N(n).locale(t).format(e)},_openBuyPanel:function(e){h.openDialog("ecommerceBuyPanel",{strong:!0})
a.updateBuyDialogOpenState(!0)
return a.gotoEcommerceBuyDialog(e,!0)},_addItemDataToCart:function(){var e,t,i,o,s
i=this.props.product
t=this.props.cartData
o=+this.state.quantity||1
s=t.items.some(function(e){return function(t){if(+t.orderItem.id===+e.state.variationId){e.props.hasMultipleProducts?t.orderItem.quantity+=o:t.orderItem.quantity=o
t.orderItem.price=+e.state.price
t.orderItem.name=e.state.name
t.productId=i.id
t.product=i
return!0}return!1}}(this))
s||t.items.push({productId:i.id,product:i,orderItem:{id:+this.state.variationId,quantity:o,price:+this.state.price,name:this.state.name}})
a.updateShoppingCart(t)
e=n(171)
return e.trackPageEventOnFB("AddToCart",{value:+this.state.price*+o,currency:u.getSettings().currencyData.code,content_name:i.name,content_type:"product",content_ids:i.id})},_addItem:function(){var e,t,i,o,s,r
e=n(171)
e.trackEcommerceBuyerEvent(this.props.keenIoEcommerceBuyerAddedItemToCart)
t=function(t){return function(){if(t.props.hasMultipleProducts)return t._shoppingCartAnimation({x:t._clickPosition.x,y:t._clickPosition.y},function(){return t._addItemDataToCart()})
t._addItemDataToCart()
t._openBuyPanel("singleProductPanel")
e=n(171)
return e.trackEcommerceBuyerEvent(t.props.keenIoEcommerceBuyerViewedCheckoutDialog,{entrance:"direct"})}}(this)
i=this.props.cartData
o=!!(null!=(r=i.orderData)?r.orderToken:void 0)
s=function(){var e,t
t=+i.orderData.startTime
e=(new Date).getTime()
return(e-t)/6e4>=10}
o||t()
if(o&&s()){a.clearShoppingCart()
t()}o&&!s()&&this._openBuyPanel("orderPreview")
return this._onClickHideVariationSelectPanel()},_chooseVariation:function(e,t){var n
null==t&&(t=this.props.product.variations)
n=E.find(t,function(t){return+t.id===+e})
if(n)return this.setState({variationId:e,price:n.price,name:n.name,showSelectVariationMsg:!1})},_showImageGallery:function(){return n.e(0,function(e){return function(){var t
n(1950)
t=e.props.product.picture.map(function(e){return{src:e.url}})
return i.fancybox.open(t,Object.assign({},d.onlyCloseBtnOpts,{baseTpl:d.getCustomArrowTpl(),beforeMove:d.indicatorBeforeMove,onInit:d.indicatorOnInit}))}}(this))},_getUnSupportedPaymentMessage:function(){var e,t,n,i,o,s,a,r,c,u,d,p
p=l.availableDevicesToPayment()
o=l.hasAvailablePaymentWithCurrentDevice()
d={wechat:"微信",mobile:"手机",desktop:"电脑"}
t=p.length
n=""
if(!o&&t>0){u=1===t&&"wechat"===p[0]?"":"浏览器"
for(a=s=0,r=p.length;s<r;a=++s){e=p[a]
c=0!==a?"或":""
n+=""+c+d[e]}}return i="请用"+n+u+"进行支付"},_onChangeQuantity:function(e){var t
t=e.target.value
if(/^(\d+)?$/.test(t))return this.setState({quantity:t})},_onChangeChooseVariation:function(e){var t
t=e.target.value
return this._chooseVariation(t)},_onClickAddQuantity:function(e){var t
t=+this.state.quantity
t=isNaN(t)?0:t
return this.setState({quantity:t+e})},_onClickShowImageGallery:function(){return this._showImageGallery()},_onClickBuy:function(e){if(this.state.variationId){this._setClickPosition(e.clientX,e.clientY)
return this._addItem()}return this.setState({showSelectVariationMsg:!0})},_onClickOpenBuyPanel:function(){var e,t,n,i
e=this.props.cartData
t=!!(null!=(i=e.orderData)?i.orderToken:void 0)
n=function(){var t,n
n=+e.orderData.startTime
t=(new Date).getTime()
return(t-n)/6e4>=10}
t&&n()&&a.clearShoppingCart()
if(t&&!n())return this._openBuyPanel("orderPreview")},_onClickNextImage:function(){return this.setState({currentImageIndex:this.state.currentImageIndex+1})},_onClickPrevImage:function(){return this.setState({currentImageIndex:this.state.currentImageIndex-1})},_setCurrentImage:function(e){return this.setState({currentImageIndex:e})},_onClickShowProductPage:function(){var e
e=this.props.product
return f.gotoProductPage(e.id,this.context.fromStorePage)},_onClickShowVariationSelectPanel:function(){return this.setState({showSelectPanel:!0})},_onClickHideVariationSelectPanel:function(){return this.setState({showSelectPanel:!1})},_getSlickSettings:function(){return{infinite:1!==this.props.product.picture.length,slidesToShow:1,autoplay:!1,afterChange:function(e){return function(t){return e.setState({currentImageIndex:t})}}(this)}},_renderThumbnailList:function(){var e,t,n
n=this.props.product.picture.length
e=this.state.currentImageIndex+1
t=n>=7?e<=4?0:n-e<=3?14.5*-(n-7)+"%":14.5*-(e-4)+"%":0
return v.createElement("div",{className:"s-ecommerce-row-view-product-thumbnail-list"},v.createElement("ul",{style:{left:t}},this.props.product.picture.map(function(e){return function(t,n){return v.createElement("li",{key:n,className:n===e.state.currentImageIndex?"current":"",onClick:function(){return e._setCurrentImage(n)}},v.createElement("img",{src:t.thumbnailUrl}))}}(this))))},render:function(){var e,n,i,s,a,r,c,u,d,m,h,f,g,y,_,w,E
n=this._canBuy()
r=this._hasPayment()
a=l.hasAvailablePaymentWithCurrentDevice()
c=this.props.settings.estimatedDelivery
u=this.props.isSxl
w=this._getVariationData()
_=this.state.showSelectPanel
s=this.props.fromProductPage
y=!s&&this.props.product.detailEnabled&&o.getProductPage()
g=this.state.price?l.addCurrencySymbol(Number(this.state.price)):l.getPriceScope(this.props.product)
i=this._allOutOfStock()?t("Ecommerce|All options are out of stock"):this._getErrorText()
e=t(r?"card"===this.props.layout?"Ecommerce|Add to cart":c?this.props.hasMultipleProducts?"Ecommerce|Pre-Order: Add to cart":"Ecommerce|Pre-Order":this.props.hasMultipleProducts?"Ecommerce|Add to cart":"Ecommerce|Buy now":"Ecommerce|Coming soon")
d="entypo-minus minus-icon "+(this._canMinusQuantity()?"":"disable")
h="entypo-plus plus-icon "+(n?"":"disable")
m=this._canMinusQuantity()?this._onClickAddQuantity.bind(this,-1):null
f=n?this._onClickAddQuantity.bind(this,1):null
E=this.state.variationId
return v.createElement("div",{className:x("s-ecommerce-row-view-product",{"from-product-page":s})},v.createElement("div",{className:""+this.props.imgColumnClassName,style:{minHeight:"50px"}},v.createElement("div",{className:"half-offset-right"},v.createElement("div",{className:"s-ecommerce-row-view-product-image-wrapper",ref:"imageWrapper",onClick:this._onClickShowImageGallery},this.props.product.picture.length>=1&&v.createElement("div",{className:"slider-wrapper"},v.createElement(b,Object.assign({},this._getSlickSettings()),this.props.product.picture.map(function(){return function(e){return v.createElement("div",{className:"slide-thumb",style:{backgroundImage:"url("+e.thumbnailUrl+")"}})}}(this))),this.props.product.picture.length>=2&&v.createElement("ul",{className:"slider-dot-wrapper"},this.props.product.picture.map(function(e){return function(t,n){return v.createElement("li",{className:x("slider-dot",{selected:e.state.currentImageIndex===n})})}}(this)))),v.createElement("div",{className:"image-wrapper"},v.createElement(p,{src:this._getProductImage(),width:"100%"}),this.props.product.picture.length>=2?"card"===this.props.layout||s?v.createElement("div",{className:"s-ecommerce-row-view-product-image-overlay-wrapper"},v.createElement("div",{className:"s-ecommerce-row-view-product-image-overlay"}),v.createElement("div",{className:"s-ecommerce-row-view-product-image-overlay-icon"},v.createElement("div",{className:"fa fa-search-plus",title:t("Ecommerce|Click to view more images")}))):"row"===this.props.layout?v.createElement("div",{className:"s-ecommerce-row-view-product-image-gallery-button"},v.createElement("div",{className:"fa fa-search-plus",title:t("Ecommerce|Click to view more images")})):void 0:void 0)),(s||"card"===this.props.layout)&&this.props.product.picture.length>=2?this._renderThumbnailList():void 0)),v.createElement("div",{className:"s-ecommerce-row-view-product-detail-panel s-font-body "+this.props.infoColumnClassName},v.createElement("div",{className:"s-ecommerce-row-view-product-name"},this.props.product.name),v.createElement("div",{className:"s-ecommerce-row-view-product-pricing"},g),v.createElement("div",{className:"s-ecommerce-row-view-product-desc"},v.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.product.description}}),c?v.createElement("div",{style:{fontWeight:"600"}},t("Ecommerce|Ships %{delivery}.",{delivery:this._getEstimatedDelivery()})):void 0,y?v.createElement("div",{className:"view-detail-btn",onClick:this._onClickShowProductPage},t("Ecommerce|View more details...")):void 0),v.createElement("div",{className:"s-ecommerce-row-view-product-select"},this.props.product.variations.length>=2?v.createElement("div",{className:"select-variation"},v.createElement("div",{className:"select-label"},v.createElement("span",null,w.name||t("Ecommerce|Select an option")),v.createElement("span",{className:"select-arrow"})),v.createElement("select",{onChange:this._onChangeChooseVariation,value:E||0},v.createElement("option",{disabled:!0,key:-1,value:0},t("Ecommerce|Select an option")),this.props.product.variations.map(function(e,t){return v.createElement("option",{key:t,value:e.id},e.name)}))):void 0,v.createElement("div",{className:"select-number"},v.createElement("div",{className:"select-label"},t("Ecommerce|Quantity")),v.createElement("div",{className:"number-input-wrapper"},v.createElement("div",{className:d,onClick:m}),v.createElement("input",{type:"text",maxLength:"3",value:this.state.quantity,onChange:this._onChangeQuantity}),v.createElement("div",{className:h,onClick:f})))),n?void 0:v.createElement("div",{className:"s-ecommerce-row-view-product-error-text"},i),!n&&this.state.variationId||!r?v.createElement("div",{className:"s-ecommerce-row-view-product-order-btn s-common-button disable",onClick:this._onClickOpenBuyPanel},e):u&&!a?v.createElement("div",null,v.createElement("div",{className:"s-ecommerce-row-view-product-order-btn s-common-button disable"},"无可用的支付方式"),v.createElement("div",{className:"s-ecommerce-buy-prompt"},v.createElement("i",{className:"fa fa-exclamation-circle","aria-hidden":"true"}),this._getUnSupportedPaymentMessage())):v.createElement("a",{className:"s-ecommerce-row-view-product-order-btn s-common-button",onClick:this._onClickBuy},e)),s&&!(u&&!a)&&v.createElement("div",null,v.createElement("div",{className:x("select-overlay",{show:_}),onClick:this._onClickHideVariationSelectPanel}),v.createElement("div",{className:"mobile-select"},v.createElement("div",{className:x("select-panel",{show:_})},!n&&v.createElement("div",{className:"error-text"},v.createElement("div",{className:"container"},v.createElement("div",{className:"sixteen columns"},i))),v.createElement("div",{className:"price"},v.createElement("div",{className:"container"},v.createElement("div",{className:"sixteen columns"},v.createElement("div",{className:"select-label"},t("Ecommerce|Price")),v.createElement("div",{className:"price-label"},g)))),this.props.product.variations.length>=2&&v.createElement("div",{className:"variations"},v.createElement("div",{className:"container"},v.createElement("div",{className:"sixteen columns"},v.createElement("div",{className:"select-label"},t("Ecommerce|Product Options")),v.createElement("div",null,this.props.product.variations.map(function(e){return function(t){return v.createElement("div",{className:x("variation-item",{selected:E===t.id}),onClick:function(){return e._chooseVariation(t.id)}},t.name)}}(this)))))),v.createElement("div",{className:"quantity"},v.createElement("div",{className:"container"},v.createElement("div",{className:"sixteen columns"},v.createElement("div",{className:"select-label"},t("Ecommerce|Quantity")),v.createElement("div",{className:"quantity-changer"},v.createElement("div",{className:d,onClick:m}),v.createElement("div",{className:"quantity-number"},this.state.quantity),v.createElement("div",{className:h,onClick:f})))))),v.createElement("div",{onClick:r?_?this._onClickBuy:this._onClickShowVariationSelectPanel:null,className:"add-btn "+(r?"":"disabled")},t(r?"Ecommerce|Add to cart":"Ecommerce|Coming soon")))))}})
e.exports=C(c,[],function(){return{locale:o.getLocale(),isSxl:o.getIsSxl(),isNewMobileActions:g.getIsNewMobileActions(),keenIoEcommerceBuyerAddedItemToCart:o.getKeenIoEcommerceBuyerAddedItemToCart(),keenIoEcommerceBuyerViewedCheckoutDialog:o.getKeenIoEcommerceBuyerViewedCheckoutDialog()}})}).call(t,n(9))},840:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(3),s=i(o),a=n(12),r=(i(a),n(19)),l=n(38),c=i(l),u=n(503),d=(i(u),n(231)),p=(i(d),void 0),m=void 0,h=s.default.assign({},r.EventEmitter.prototype,{init:function(e){p=new c.default(e)
m=p.binding
return m},getBinding:function(){return p.binding},getSideMenuOpenState:function(){return this.getBinding().get("sideMenuOpenState").toJS()}})
window.DEBUG.PageBridgeStore=h
t.default=h
e.exports=t.default},841:function(e,t,n){"use strict"
var i,o,s,a,r,l,c,u,d,p,m,h,f,g,v,y,b,_,w,E,C,x,k,N,S,P
d=n(3)
i=n(6)
s=n(19).EventEmitter
o=n(38)
E=n(129)
u=n(17)
p=void 0
m=void 0
b=!1
w=function(e,t){e=e.toSlug();(0===e.length||e.match(/^[0-9]+$/g))&&(e="_"+(t+1))
return e}
f=function(){var e,t,i,o,s,a,r,l,c,u,p,h,f,g,v
i=n(132)
e=n(16)
t=n(5)
s=e.getCurrentPageType()
f=t.getId()
if(!i.isEditMode()&&m)return m
v=e.getSectionNames()
p=[]
for(r=l=0,c=v.length;l<c;r=++l){g=v[r]
g||(g="")
a="preview"===t.getSiteMode()?"/s/sites/"+f+"/preview?mode=iframe&v4=1#":"/#"
u=h=("productPage"===s?a:"#")+w(g,r)
o=1
for(;~d.indexOf(p,u);)u=h+"-"+o++
p.push(u)}i.isEditMode()||(m=p)
return p}
h=function(e){return f()[e]}
g=function(e){var t,o,s,a,r
if(""===e)return 0
if(e.match(/^#\d+$/g)){t=n(16)
r=t.getSections()
s=parseInt(e.substring(1),10)-1;(s<0||s>=r.length)&&(s=0)
return s}if(~(s=d.indexOf(f(),e)))return s
if(d.startsWith(e,"#blog")||d.startsWith(e,"#_blog")){t=n(16)
o=i.url(location.href).param("categoryId")
o=o?o:"all"
a=d.findIndex(t.getSections(),function(e){return!(!d.isObject(e.components.blog1)||!d.isObject(e.components.blog1.category))&&(d.isUndefined(e.components.blog1.category.id)?"all"===o:o===e.components.blog1.category.id.toString())})
return a}if("#store"===e||"#_store"===e){t=n(16)
a=d.findIndex(t.getSections(),function(e){return d.isObject(e.components.ecommerce1)})
return a}}
C=function(e){var t
t=g(e)
return x(t)}
N=function(e){var t,i
t=n(16)
i=d.findIndex(t.getSections(),function(t){return t.id===e})
return x(i)}
x=function(e){return v(e)}
k=function(e){p.setData("navigating",!0)
return p.setData("navToPosition",e)}
v=function(e){if(e>=0){p.setData("navigating",!0)
p.setData("navToIndex",e)
return p.setData("selected",e)}}
_=function(){var e,t
e=window.location.hash
if(""!==e&&"#"!==e&&0!==e.indexOf("#!"))return null!=(t=window.history)&&"function"==typeof t.replaceState?t.replaceState("",document.title,window.location.pathname+window.location.search):void 0}
y=d.debounce(function(){return window.Waypoint.refreshAll()},1e3)
S=function(e){if(!p.getData("navigating")){_()
return p.setData("selected",e)}}
P=function(e){return p.setData("selectedPageIndex",e)}
a="navigator_store"
r=d.assign({},s.prototype,{getDefault:function(){return{selected:0,navToIndex:null,navigating:!1}},emitChange:function(){return this.emit(a)},addListener:function(e){return this.on(a,e)},rmListener:function(e){return this.removeListener(a,e)},init:function(e){p=new o(e)
return p.binding},getStates:function(){return p.binding.toJS()},getData:function(e){return p.binding.get(e)},getBinding:function(){return p.binding},getSelectedIndex:function(){return p.getData("selected")},getSelectedPageIndex:function(){return p.getData("selectedPageIndex")},getNavToIndex:function(){return p.getData("navToIndex")},getNavToPosition:function(){return p.getData("navToPosition")},isNavigating:function(){return p.getData("navigating")},getSectionHashByIndex:function(e){return h(e)}})
c=n(228)
l=n(227)
r.dispatchToken=c.register(function(e){var t,i,o
switch(e.actionType){case l.ActionTypes.SET_SECTION_INDEX:if(!b)return
S(e.index)
break
case l.ActionTypes.NAVIGATE_TO_HASH:C(e.hash)
break
case l.ActionTypes.NAVIGATE_TO_PREVIOUS_SECTION:i=r.getSelectedIndex()
x(i>0?i-1:0)
break
case l.ActionTypes.NAVIGATE_TO_NEXT_SECTION:t=n(16)
i=r.getSelectedIndex()
o=t.getSections().length
x(i+1<o?i+1:o-1)
break
case l.ActionTypes.DID_NAVIGATE_TO_SECTION:p.setData("navigating",!1)
p.setData("navToIndex",null)
break
case l.ActionTypes.PAGE_CONTENT_UPDATED:y()
break
case l.ActionTypes.PAGE_MOUNTED:window.setTimeout(function(){return function(){return b=!0}}(this),1500)
break
case l.ActionTypes.REPEATABLE_ITEM_MOVED:k(e.position)
break
case l.ActionTypes.SWITCH_PAGE:m=void 0}return r.emitChange()})
window.DEBUG||(window.DEBUG={})
window.DEBUG.NavigatorStore=r
e.exports=r},1941:function(e,t,n){"use strict"
var i=n(2018),o=n(2019),s=n(1948),a=o([i])
e.exports=a
e.exports.touchStyles=s
e.exports.Mixin=i},1942:function(e,t,n){"use strict"
var i,o,s,a,r,l,c,u
l=n(3)
a=n(19).EventEmitter
s=n(58)
o=n(57)
i="pages_list_store_event_id"
c=function(e){switch(e.state){case"published":return 2
case"unpublished":return 1
case"new":return 0}}
u=[]
r=l.assign({},a.prototype,{emitChange:function(){return this.emit(i,this.getPagesList())},getPagesList:function(){return u},addChangeListener:function(e){return this.on(i,e)},removeChangeListener:function(e){return this.removeListener(i,e)},init:function(){var e
e=n(5)
u=e.getConnectedSites()
return this.emitChange()}})
e.exports=r},1943:function(e){function t(e,t){var n,i=0,o=e.length
for(i;i<o;i++){n=t(e[i],i)
if(n===!1)break}}function n(e){return"[object Array]"===Object.prototype.toString.apply(e)}function i(e){return"function"==typeof e}e.exports={isFunction:i,isArray:n,each:t}},1944:function(e,t,n){var i=n(2023),o=function(e){var t=/[height|width]$/
return t.test(e)},s=function(e){var t="",n=Object.keys(e)
n.forEach(function(s,a){var r=e[s]
s=i(s)
o(s)&&"number"==typeof r&&(r+="px")
t+=r===!0?s:r===!1?"not "+s:"("+s+": "+r+")"
a<n.length-1&&(t+=" and ")})
return t},a=function(e){var t=""
if("string"==typeof e)return e
if(e instanceof Array){e.forEach(function(n,i){t+=s(n)
i<e.length-1&&(t+=", ")})
return t}return s(e)}
e.exports=a},1945:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}var o=n(1),s=i(o),a={className:"",accessibility:!0,adaptiveHeight:!1,arrows:!0,autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e){return s.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:!1,pauseOnHover:!0,responsive:null,rtl:!1,slide:"div",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,afterChange:null,beforeChange:null,edgeEvent:null,init:null,swipeEvent:null,nextArrow:null,prevArrow:null}
e.exports=a},1946:function(e,t,n){"use strict"
e.exports=n(2016)},1947:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.getTrackLeft=t.getTrackAnimateCSS=t.getTrackCSS=void 0
var o=n(13),s=i(o),a=n(502),r=i(a),l=function(e,t){return t.reduce(function(t,n){return t&&e.hasOwnProperty(n)},!0)?null:console.error("Keys Missing",e)},c=t.getTrackCSS=function(e){l(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"])
var t,n,i=e.slideCount+2*e.slidesToShow
e.vertical?n=i*e.slideHeight:t=e.variableWidth?(e.slideCount+2*e.slidesToShow)*e.slideWidth:e.centerMode?(e.slideCount+2*(e.slidesToShow+1))*e.slideWidth:(e.slideCount+2*e.slidesToShow)*e.slideWidth
var o={opacity:1,WebkitTransform:e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",transform:e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",transition:"",WebkitTransition:"",msTransform:e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)"}
t&&(0,r.default)(o,{width:t})
n&&(0,r.default)(o,{height:n})
window&&!window.addEventListener&&window.attachEvent&&(e.vertical?o.marginTop=e.left+"px":o.marginLeft=e.left+"px")
return o}
t.getTrackAnimateCSS=function(e){l(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"])
var t=c(e)
t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase
t.transition="transform "+e.speed+"ms "+e.cssEase
return t},t.getTrackLeft=function(e){l(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"])
var t,n,i=0,o=0
if(e.fade)return 0
if(e.infinite){if(e.slideCount>=e.slidesToShow){i=e.slideWidth*e.slidesToShow*-1
o=e.slideHeight*e.slidesToShow*-1}if(e.slideCount%e.slidesToScroll!==0&&e.slideIndex+e.slidesToScroll>e.slideCount&&e.slideCount>e.slidesToShow)if(e.slideIndex>e.slideCount){i=(e.slidesToShow-(e.slideIndex-e.slideCount))*e.slideWidth*-1
o=(e.slidesToShow-(e.slideIndex-e.slideCount))*e.slideHeight*-1}else{i=e.slideCount%e.slidesToScroll*e.slideWidth*-1
o=e.slideCount%e.slidesToScroll*e.slideHeight*-1}}else if(e.slideCount%e.slidesToScroll!==0&&e.slideIndex+e.slidesToScroll>e.slideCount&&e.slideCount>e.slidesToShow){var a=e.slidesToShow-e.slideCount%e.slidesToScroll
i=a*e.slideWidth}e.centerMode&&(e.infinite?i+=e.slideWidth*Math.floor(e.slidesToShow/2):i=e.slideWidth*Math.floor(e.slidesToShow/2))
t=e.vertical?e.slideIndex*e.slideHeight*-1+o:e.slideIndex*e.slideWidth*-1+i
if(e.variableWidth===!0){var r
if(e.slideCount<=e.slidesToShow||e.infinite===!1)n=s.default.findDOMNode(e.trackRef).childNodes[e.slideIndex]
else{r=e.slideIndex+e.slidesToShow
n=s.default.findDOMNode(e.trackRef).childNodes[r]}t=n?n.offsetLeft*-1:0
if(e.centerMode===!0){n=e.infinite===!1?s.default.findDOMNode(e.trackRef).children[e.slideIndex]:s.default.findDOMNode(e.trackRef).children[e.slideIndex+e.slidesToShow+1]
t=n?n.offsetLeft*-1:0
t+=(e.listWidth-n.offsetWidth)/2}}return t}},1948:function(e){"use strict"
var t={WebkitTapHighlightColor:"rgba(0,0,0,0)",WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none",cursor:"pointer"}
e.exports=t},1949:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(1),d=i(u),p=n(6),m=i(p),h=n(53),f=(i(h),n(5)),g=i(f),v=n(839),y=i(v),b=n(1991),_=i(b),w=function(e){function t(e){o(this,t)
return s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}a(t,e)
c(t,[{key:"_getColumnClassNames",value:function(){var e=g.default.getTheme().get("name"),t=(0,m.default)("#s-content").hasClass("side-menu-opened")?(0,m.default)(window).width()-220:(0,m.default)(window).width(),n=void 0,i=void 0
switch(e){case"persona":if(t>727&&t<=875){n="columns five alpha"
i="columns seven omega"}else{n="columns six alpha"
i="columns six omega"}break
case"onyx_new":if(t>875){n="columns seven"
i="columns six"}else{n="columns eight"
i="columns eight"}break
case"ion":case"sleek":if(t>1400){n="columns eight"
i="columns six"}else if(t>1100){n="columns eight"
i="columns seven"}else{n="columns eight"
i="columns eight"}break
case"minimal":n="columns eight"
i="columns eight"
break
default:if(t>875){n="columns seven offset-one"
i="columns seven"}else{n="columns eight"
i="columns eight"}}return{imgColumnClassName:n,infoColumnClassName:i}}},{key:"_renderProductsAsRow",value:function(){var e=this._getColumnClassNames(),t=this.props,n=(t.products,t.pageId),i=t.hasMultipleProducts,o=t.settings,s=t.cartData,a=t.layout,c=t.fromProductPage,u=this.props.products.map(function(t,r){var u={product:t,pageId:n,hasMultipleProducts:i,fromProductPage:c,settings:o,cartData:s,imgColumnClassName:e.imgColumnClassName,infoColumnClassName:e.infoColumnClassName,layout:a}
return d.default.createElement(y.default,l({},u,{key:r}))})
return r("div",{className:"s-ecommerce-row-view-wrapper"},void 0,u)}},{key:"_renderProductsAsCard",value:function(){var e=this._getColumnClassNames(),t=this.props,n=t.products,i=t.pageId,o=t.hasMultipleProducts,s=t.settings,a=t.cartData,r=t.layout,l=t.changeToDetailMode,c=t.changeToNormalMode,u=t.fromProductPage,p={products:n,pageId:i,hasMultipleProducts:o,settings:s,cartData:a,imgColumnClassName:e.imgColumnClassName,infoColumnClassName:e.infoColumnClassName,layout:r,changeToDetailMode:l,changeToNormalMode:c,fromProductPage:u}
return d.default.createElement(_.default,p)}},{key:"render",value:function(){var e=void 0
"row"===this.props.layout?e=this._renderProductsAsRow():"card"===this.props.layout&&(e=this._renderProductsAsCard())
return r("div",{},void 0,r("div",{className:"s-ecommerce-products-wrapper "+(this.props.isLoading?"loading":"")},void 0,!1,e))}}])
return t}(d.default.Component)
t.default=w
e.exports=t.default},1951:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l,c,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),p=n(1),m=o(p),h=n(6),f=o(h),g=n(3),v=o(g),y=n(14),b=o(y),_=n(66),w=o(_),E=n(167),C=o(E),x=n(53),k=(o(x),n(317)),N=(o(k),n(29)),S=o(N),P=function(e){var t=e.category,n=e.currentCategory,i=e.mobile,o=e.index,s=e.onClickFn
return d("div",{className:"category-link-item-wrapper",onClick:s},void 0,d("a",{className:(0,b.default)("category-link-item",{selected:n===t.id||n===t.name,"no-hover":i})},o,t.name))},T=(l=w.default.decorate(C.default),l(c=function(e){function t(e){s(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.state={showMore:!1,changePosition:!1,mobile:!1}
n._onClickShowMore=n._onClickShowMore.bind(n)
n._onClickShowLess=n._onClickShowLess.bind(n)
n._changePosition=n._changePosition.bind(n)
return n}r(t,e)
u(t,[{key:"componentWillMount",value:function(){this._shrinkIndex=999
this._updateBar=v.default.debounce(this._updateBar.bind(this),50)}},{key:"componentDidMount",value:function(){this._updateBar()
this._changePosition();(0,f.default)(window).on("resize",this._updateBar)
this.setState({mobile:S.default.isMobile()})}},{key:"componentDidUpdate",value:function(e,t){var n=this
e.categories.length!==this.props.categories.length&&this._updateBar()
!t.changePosition&&this.state.changePosition&&this.setTimeout(function(){var e=(0,f.default)(n.refs.list).find(".top-list"),t=e.find(".selected")
t.length&&e.scrollLeft(e.scrollLeft()+t.offset().left-e.offset().left-10)
n.setState({changePosition:!1})},10)}},{key:"componentWillUnmount",value:function(){(0,f.default)(window).off("resize",this._updateBar)}},{key:"_changePosition",value:function(){this.setState({changePosition:!0,showMore:!1})}},{key:"_onClickShowMore",value:function(){this.setState({showMore:!0})}},{key:"_onClickShowLess",value:function(){this.setState({showMore:!1})}},{key:"_updateBar",value:function(){var e=this,t=0
this._shrinkIndex=999
this.forceUpdate()
var n=(0,f.default)(this.refs.list).width()
this.setTimeout(function(){(0,f.default)(e.refs.list).find(".check-list .category-link-item").each(function(i,o){t+=(0,f.default)(o).outerWidth(!0)
if(n<=t+50){e._shrinkIndex=i
return!1}})
e.forceUpdate()},100)}},{key:"render",value:function(){var e=this,t=this.props,n=t.changeCategory,o=t.sbClass,s=t.isCategoryIdExist,a=t.categoryType,r=this.props.currentCategory,l=this.state,c=l.showMore,u=l.mobile,p=v.default.cloneDeep("blog"===a?this.props.categories:this.props.categories.filter(function(e){return e.products_count>0}))
p.unshift({name:i("Ecommerce|All"),id:"all"})
s(r)||(r="all")
return m.default.createElement("div",{className:(0,b.default)("s-category-bar s-font-body clearfix "+(o||""),{shrinked:this._shrinkIndex<p.length}),ref:"list"},!1,u&&d("div",{className:"category-list"},void 0,d("div",{className:"top-bar check-list "+(c?"hide-top-bar":"")},void 0,d("div",{className:"top-list"},void 0,p.map(function(e,t){return d(P,{currentCategory:r,category:e,index:t,mobile:u,onClickFn:function(){return n(e.id)}})}))),this._shrinkIndex<p.length&&!c&&d("a",{className:"show-more-link mobile-link",onClick:this._onClickShowMore},void 0,d("i",{className:"fa fa-angle-down"})),c&&p.map(function(t,i){return d(P,{currentCategory:r,category:t,index:i,mobile:u,onClickFn:function(){n(t.id)
e._changePosition()}})}),this._shrinkIndex<p.length&&c&&d("a",{className:"show-more-link",onClick:this._onClickShowLess},void 0,d("i",{className:"fa fa-angle-up"}))),!u&&d("div",{className:"category-list check-list"},void 0,p.map(function(t,i){return i<e._shrinkIndex&&d(P,{currentCategory:r,category:t,index:i,mobile:u,onClickFn:function(){n(t.id)}})}),this._shrinkIndex<p.length&&!c&&d("a",{className:"show-more-link",onClick:this._onClickShowMore},void 0,d("i",{className:"fa fa-angle-down"})),c&&p.slice(this._shrinkIndex,p.length).map(function(e,t){return d(P,{currentCategory:r,category:e,index:t,mobile:u,onClickFn:function(){n(e.id)}})}),this._shrinkIndex<p.length&&c&&d("a",{className:"show-more-link",onClick:this._onClickShowLess},void 0,d("i",{className:"fa fa-angle-up"}))))}}])
return t}(m.default.Component))||c)
t.default=T
e.exports=t.default}).call(t,n(9))},1952:function(e,t,n){e.exports=n(4)(476)},1968:function(e,t,n){"use strict"
var i,o,s,a,r,l,c,u,d,p,m,h=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t
return-1}
r=n(1)
l=n(13)
i=n(6)
u=n(3)
o=n(15)
a=n(29)
d=n(36)
m=n(303)
s=n(131)
p=n(2022)
c=o.createPageComponent({displayName:"VideoBgContent",bobcatPropTypes:{data:{videoHtml:r.PropTypes.string,videoUrl:r.PropTypes.string,className:r.PropTypes.string,style:r.PropTypes.object}},observedProps:["videoHtml"],getBobcatDefaultProps:function(){return{data:{videoHtml:""}}},_removeIframe:function(){var e
e=i(l.findDOMNode(this))
return e.find("iframe").remove()},_isSliderCloneComponent:function(){var e,t,n
e=i(l.findDOMNode(this))
t=e.closest(".slick-track").find(".slick-slide").length-2
n=e.closest(".slick-slide")
return n.length>0&&("-1"===n.attr("data-index")||n.attr("data-index")===t+"")},componentDidMount:function(){return this._isSliderCloneComponent()?this._removeIframe():this._setupBgVideo()},componentDidUpdate:function(e){if(e.videoHtml!==this.dtProps.videoHtml&&!this._isSliderCloneComponent())return this._setupBgVideo()},componentWillUnmount:function(){var e,t,n
if(!this._isSliderCloneComponent()&&null!=(null!=(n=this._video.frame)?n.youTubePlayer:void 0)){"function"==typeof(e=this._video.frame.youTubePlayer).stopVideo&&e.stopVideo()
"function"==typeof(t=this._video.frame.youTubePlayer).clearVideo&&t.clearVideo()
this._video.frame.isRemoved=!0
return u.remove(window.youTubeVideoBgList,function(e){return function(t){return t===e._video.frame}}(this))}},afterLayoutChange:function(){return this._setupBgVideo()},_setupBgVideo:function(){var e,t,n,o,r,c,p,m
d.Event.unsubscribe(this._token)
this._video||(this._video={})
e=i(l.findDOMNode(this))
if(e.length)if(a.isMobile())i(".s-bg-video").removeClass("s-bg-video video-bg").addClass("s-bg-image")
else{window.clearInterval(null!=(c=this._video.frame)?c.loopTimer:void 0)
m=function(t){return function(){var n,o,s,a,r
r=(t.dtProps.videoHtml||"").replace("&origin=","&origin="+i.url().attr("base")).replace(/^(https?):/,"")
e.html(r)
if(""!==r){n=e.find("iframe")
n.length||(n=e.find("video"))
t._video.frame=n
t._video.type=r.indexOf("youtube.com")!==-1?"youtube":r.indexOf("vimeo.com")?"vimeo":"mp4"
if(n.length){"youtube"===t._video.type&&n.addClass("youtube-video")
a=e.closest(".slide, #s-header, .s-blog-header")
o=e.closest(".video-bg")
"static"!==(s=o.css("position"))&&"initial"!==s||o.css("position","relative")
o.children().each(function(){var e,t,n
e=i(this)
window.edit_page.v4?"static"!==(t=e.css("position"))&&"initial"!==t||e.hasClass("s-section-editor-wrapper")||e.css("position","relative"):"static"!==(n=e.css("position"))&&"initial"!==n||e.css("position","relative")
if((parseInt(e.css("z-index"),10)||1)<3)return e.css("z-index",3)})
o.find(".video-bg-wrap").css("z-index",1)
t._resizeFn&&i(window).off("resize",t._resizeFn)
return t._resizeFn=u.debounce(function(){var e,i,s,r
i=Math.max(a.outerHeight(),o.height())
r=Math.max(a.outerWidth(),o.width())
s=(r/i).toFixed(2)
e=function(){var e,t,o,a,l,c,u
n.css({position:"absolute",top:0,left:0})
e=parseInt(n.attr("height"),10)
u=parseInt(n.attr("width"),10)
c=(u/e).toFixed(2)
if(c>s){t=i+100
l=(i+100)*c}else{t=(r+100)/c
l=r+100}a=(i-t)/2
o=(r-l)/2
return n.css({height:t+"px",width:l+"px",top:a+"px",left:o+"px"})}
e()
return window.setTimeout(function(){if(i!==Math.max(a.height(),o.height()))return t._resizeFn()},50)},100)}}}}(this)
r=function(e){return function(){var t,n,o,a,l,c
switch(e._video.type){case"youtube":c=e._video.frame
window.youTubeVideoBgList||(window.youTubeVideoBgList=[])
h.call(window.youTubeVideoBgList,c)>=0||window.youTubeVideoBgList.push(c)
window.onYouTubeIframeAPIReady=function(){var e,t,n,i,o
if(null!=(null!=(i=window.YT)?i.Player:void 0)){o=window.youTubeVideoBgList
e=function(e){var t
t=new window.YT.Player(e.attr("id"),{videoId:e.attr("id").split("_")[0],height:e.attr("height"),width:e.attr("width"),events:{onReady:function(t){var n
e.player=n=t.target
s.get("enableSoundForVideoBg")||n.setVolume(0)
n.setLoop(!0)
e.duration=n.getDuration()
e.loopTimer=null
e.startLoop=function(){window.clearInterval(this.loopTimer)
return this.loopTimer=window.setInterval(function(e){return function(){return e.isRemoved?window.clearInterval(e.loopTimer):e.player.seekTo(0)}}(this),1e3*(this.duration-1))}
return e.startLoop()},onStateChange:function(t){var n,i
try{if(t.data===window.YT.PlayerState.PLAYING){e.css("opacity",1)
e.closest(".video-bg-wrap").addClass("no-bg")}if((i=t.data)===window.YT.PlayerState.ENDED||i===window.YT.PlayerState.PAUSED){t.target.playVideo()
return e.startLoop()}}catch(e){n=e}}}})
return e.youTubePlayer=t}
for(t=0,n=o.length;t<n;t++){c=o[t]
e(c)}return window.youTubeVideoBgList=[]}}
if(null==window.YT)return i("body").append(i("<script src='https://www.youtube.com/iframe_api'></script>"))
break
case"vimeo":o={method:"setVolume",value:"0"}
t={method:"addEventListener",value:"pause"}
a={method:"play"}
n=function(e,n){var i,s
null==n&&(n=!0)
s=e.attr("src").split("?")[0]
s="https:"+s.replace(/^https?:/,"")
try{e[0].contentWindow.postMessage(JSON.stringify(t),s)
if(n)return e[0].contentWindow.postMessage(JSON.stringify(o),s)}catch(e){i=e}}
l=function(e){var t,n
e.css("opacity",1)
n=e.attr("src").split("?")[0]
n="https:"+n.replace(/^https?:/,"")
try{return e[0].contentWindow.postMessage(JSON.stringify(a),n)}catch(e){t=e}}
return i(window).bind("message",function(t){var i
if(t.originalEvent.origin.match(/player\.vimeo\.com/)){i=JSON.parse(t.originalEvent.data)
switch(i.event){case"ready":r=!s.get("enableSoundForVideoBg")
n(e._video.frame,r)
l(e._video.frame)
return[1e3,2e3,5e3,1e4].forEach(function(t){return setTimeout(function(){return l(e._video.frame)},t)})
case"pause":return l(e._video.frame)}}})}}}(this)
m()
r()
null!=window.YT&&window.onYouTubeIframeAPIReady()
if(this._resizeFn){p=[100,500,1e3,2e3,5e3]
for(t=0,o=p.length;t<o;t++){n=p[t]
window.setTimeout(this._resizeFn,n)}i(window).on("resize",this._resizeFn)
return this._token=d.Event.subscribe("Section.changed",function(e){return function(){return e._resizeFn()}}(this))}}},render:function(){return p.apply(this)}})
c.WaypointLazy=m(c,{noWrapper:!0})
e.exports=c.WaypointLazy},1969:function(e,t,n){(function(t){"use strict"
function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}var o,s,a,r,l,c
a=n(1)
s=n(15)
l=n(1941)
c=n(30)
r=s.createPageComponent({displayName:"RepeatableItem",bobcatPropTypes:(o={data:{children:a.PropTypes.oneOfType([a.PropTypes.object,a.PropTypes.array]),binding:a.PropTypes.object.isRequired,components:a.PropTypes.object},designer:{index:a.PropTypes.number.isRequired,vertical:a.PropTypes.bool,outerView:a.PropTypes.bool,hasEditorOpened:a.PropTypes.bool.isRequired,parentSize:a.PropTypes.number.isRequired,className:a.PropTypes.string}},i(o,"data",{isArranging:a.PropTypes.bool,parentId:a.PropTypes.string}),i(o,"callback",{onMoveUp:a.PropTypes.func,onMoveDown:a.PropTypes.func,onDeleteItem:a.PropTypes.func}),o),getBobcatDefaultProps:function(){return{designer:{vertical:!1,outerView:!1,className:""},data:{isArranging:!1}}},_clickDeleteButton:function(e){return this.props.onDeleteItem(e)},componentDidMount:function(){this.showMoveOverlay=!1
return this.showDeleteOverlay=!1},onMouseEnterMoveButton:function(){this.showMoveOverlay=!0
return this.forceUpdate()},onMouseLeaveMoveButton:function(){this.showMoveOverlay=!1
return this.forceUpdate()},onMouseEnterDeleteButton:function(){this.showDeleteOverlay=!0
return this.forceUpdate()},onMouseLeaveDeleteButton:function(){this.showDeleteOverlay=!1
return this.forceUpdate()},_renderNativeEditorButtons:function(){return a.createElement("div",{className:"native-controls"},this.dsProps.parentSize>1?a.createElement("div",{className:"f-s-repeatable-item-order-indicator"},this.props.index+1):void 0,a.createElement("div",{className:"native-buttons"},a.createElement("div",{className:"s-repeatable-delete-button f-s-repeatable-delete-button main-button",title:t("Remove this item"),onClick:this._clickDeleteButton.bind(null,this.dsProps.index),onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},a.createElement("span",null),a.createElement("img",{src:c.cdnAssetPath("/images/icons/native/ic_delete_nog@3x.png")})),this.props.index>0&&a.createElement(l,{onTap:this.props.onMoveUp.bind(this,this.props.index),className:"f-s-repeatable-move-button f-s-repeatable-move-button--up main-button"},a.createElement("span",null),a.createElement("img",{src:c.cdnAssetPath("/images/icons/native/ic_down_arrow_white@3x.png")})),this.props.index+1<this.props.parentSize&&a.createElement(l,{onTap:this.props.onMoveDown.bind(this,this.props.index),className:"f-s-repeatable-move-button f-s-repeatable-move-button--down main-button"},a.createElement("span",null),a.createElement("img",{src:c.cdnAssetPath("/images/icons/native/ic_down_arrow_white@3x.png")}))))},_renderEditorButtons:function(){return this.dsProps.hasEditorOpened?void 0:a.createElement("div",{className:"buttons"},this.dsProps.parentSize>1?a.createElement("div",{className:"s-repeatable-move-button",title:t("Drag to reorder"),onMouseEnter:this.onMouseEnterMoveButton,onMouseLeave:this.onMouseLeaveMoveButton}):void 0,a.createElement("div",{className:"s-repeatable-delete-button",title:t("Remove this item"),onClick:this._clickDeleteButton.bind(null,this.dsProps.index),onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},a.createElement("div",{className:"delete-button-wrap"},a.createElement("div",{className:"delete-button-confirm"},t("Sure?")))))},render:function(){var e
e=function(e){return function(t){null==t&&(t="")
return a.createElement("div",{className:"s-component-editor-wrapper"+t},e._renderEditorButtons(),e.showMoveOverlay||e.showDeleteOverlay||e.props.isArranging?a.createElement("div",{className:"s-component-overlay s-repeatable-overlay"+(e.showMoveOverlay||e.showDeleteOverlay||e.props.isArranging?" visible":"")+(e.showDeleteOverlay?" warning":"")}):void 0)}}(this)
return a.createElement("div",{"data-sorting-index":this.props.index,className:this.props.className+" s-repeatable-item"},void 0,this.props.children,void 0)}})
e.exports=r}).call(t,n(9))},1970:function(e,t,n){"use strict"
var i,o,s,a,r,l,c,u,d,p,m,h,f,g
l=n(1)
c=n(13)
f=n(3)
o=n(12)
s=n(1952)
i=n(15)
g=n(30)
m=n(320)
h=n(2003)
p=n(1969)
r=n(67)
a=n(56)
d={displayName:"Repeatable",bobcatPropTypes:{data:{children:l.PropTypes.oneOfType([l.PropTypes.object,l.PropTypes.array]),binding:l.PropTypes.object.isRequired,components:l.PropTypes.object,list:s.list.isRequired},designer:{className:l.PropTypes.string,sortableContainment:l.PropTypes.string,sortableContainmentSelector:l.PropTypes.string}},statics:{hasContent:function(e){var t
t=e.get("list").size
return t>0}},getBobcatDefaultProps:function(){return{designer:{className:"",sortableContainment:"parent"}}},hasContent:function(){return u.hasContent(this.getDefaultBinding())},componentDidUpdate:function(e){},_onClickSave:function(){this.updateState("normal")
return this.savePage()},_isFirst:function(e){return 0===e},_isLast:function(e){return this.props.list.size===e+1},_navigateToItem:function(e){var t,n,i,o
t=$(this.refs.repeatable)
n=t.find(".s-repeatable-item").eq(e)
o=(window.innerHeight-n.height())/2
o<0&&(o=20)
i=n.offset().top-o
return a.navigateToPosition(i)},_renderChildren:function(){return l.Children.map(this.props.children,function(e){return function(t){var n
if((null!=t?t.type:void 0)===p){n=Object.assign({},{onMoveUp:function(t){var n,i,o,s
n=e.props.list
if(0!==n.size&&!e._isFirst(t)){i=function(){s=[]
for(var e=0,t=n.size;0<=t?e<t:e>t;0<=t?e++:e--)s.push(e)
return s}.apply(this)
o=[i[t],i[t-1]],i[t-1]=o[0],i[t]=o[1]
r.reorderRepeatable(i,e.getDefaultBinding().sub("list"))
e.savePage()
return e._navigateToItem(t-1)}},onMoveDown:function(t){var n,i,o,s
n=e.props.list
if(!e._isLast(t)&&0!==n.size){i=function(){s=[]
for(var e=0,t=n.size;0<=t?e<t:e>t;0<=t?e++:e--)s.push(e)
return s}.apply(this)
o=[i[t+1],i[t]],i[t]=o[0],i[t+1]=o[1]
r.reorderRepeatable(i,e.getDefaultBinding().sub("list"))
e.savePage()
return e._navigateToItem(t+1)}},onDeleteItem:function(t){e._deleteItem(t)
return e.savePage()},isArranging:e.isState("editor")})
return l.cloneElement(t,n)}return t}}(this))},render:function(){var e,t,n
e=this.getDefaultBinding()
t=function(t){return function(){var n,i
i=e.get("list").size
n=t.isState("editor")}}(this)
n=function(e){return function(){return l.createElement("div",null,e.props.children)}}(this)
return l.createElement("div",{className:this.props.className+" s-repeatable",ref:"repeatable"},!1,n())}}
u=i.createPageComponent(d)
e.exports=u},1971:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(3)
t.imageDataForSaving=function(e){var t={},n=e.getMeta(),o=n.backgroundSizing,s=n.backgroundClassName
if(o||s){if(s){var a=i.trim(s)
switch(a){case"strikingly-light-text strikingly-text-overlay":case"strikingly-text-overlay strikingly-light-text":case"overlay":t.textColor="overlay"
break
case"strikingly-light-text":case"light":t.textColor="light"
break
case"strikingly-dark-text":case"dark":t.textColor="dark"
break
default:t.textColor="light"}}t.sizing="cover"
i.indexOf(["cover","contain","tile","center"],o)!==-1&&(t.sizing=o)}return Object.assign({},e.dataToSave("background"),{videoHtml:""},t)}
t.dataForEmptyBackground=function(){return{w:null,h:null,storage:null,storageKey:null,format:null,url:"",textColor:"light",videoUrl:"",videoHtml:""}}},1972:function(e,t,n){(function(t){"use strict"
var i,o,s,a,r,l,c,u,d,p,m,h,f,g,v,y,b,_,w,E,C,x,k,N,S
w=n(1)
S=n(303)
a=n(11)
N=n(14)
E=n(13)
x=n(3)
i=n(6)
s=n(15)
g=n(18)
c=n(84)
b=n(16)
_=n(5)
u=n(172)
f=n(53)
y=n(44)
r=n(29)
m=n(232)
p=n(87)
h=n(1949)
d=n(1979)
C=n(167)
v=n(169).Link
o=n(65)
k=!1
l=s.createPageComponent({displayName:"Ecommerce",mixins:[y("editor"),C],bobcatPropTypes:{data:{text:w.PropTypes.string,category:w.PropTypes.oneOfType([w.PropTypes.string,w.PropTypes.number]),binding:w.PropTypes.object}},getBobcatDefaultProps:function(){return{data:{category:"all"}}},componentWillMount:function(){this._changeCategory=this._changeCategory.bind(this)
this._onCategoryChange=this._onCategoryChange.bind(this)
return this.initMeta({currentCategory:this.dtProps.category,nextCategory:this.dtProps.category,currentPage:1,detailMode:!1})},componentDidMount:function(){this._loadProductsFromServer()
f.getFistLoadingState("settings")&&c.getEcommerceSettings({pageId:_.getId()})
f.getFistLoadingState("categories")&&c.getEcommerceCategories({pageId:_.getId()})
this._token=m.register(function(e){return function(t){var i
switch(t.actionType){case p.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS:e.setMeta("currentCategory",e.getMeta("nextCategory"))
if(!k){k=!0
i=n(171)
i.init()
return i.trackEcommerceBuyerEvent(a.getKeenIoEcommerceBuyerLanding())}}}}(this))
this._onCategoryChangeListenId=f.getCategoiresBinding().addListener("",this._onCategoryChange)
return i(window).on("resize.ecommerce",o.debounce(function(e){return function(){return e.forceUpdate()}}(this),300))},componentDidUpdate:function(e){if(this._getRenderCategory(this.dtProps.category)!==this._getRenderCategory(e.category)||e.category!==this.dtProps.category){if("all"===this._getRenderCategory(this.dtProps.category)||"all"===this.dtProps.category){this.setMeta("nextCategory","all")
this.setMeta("currentCategory","all")
this.setMeta("currentPage",1)}return this._loadProductsFromServer()}},componentWillUnmount:function(){m.unregister(this._token)
f.getCategoiresBinding().removeListener(this._onCategoryChangeListenId)
return i(window).off("resize.ecommerce")},_onCategoryChange:function(){return this.setTimeout(function(e){return function(){return e._loadProductsFromServer()}}(this),10)},_getProductsData:function(){return f.getProducts(this._getRenderCategory(this.dtProps.category),this.getMeta("currentPage"))},_getEditBtnText:function(){var e
e=this._getProductsData().length
return t(0===e?"Ecommerce|Add Product":1===e?"Ecommerce|Manage Product":"Ecommerce|Manage Products")},_getRenderCategory:function(e){var t
t="all"===e?this.getMeta("currentCategory"):e
f.isCategoryIdExist(t)||(t="all")
return t},_loadProductsFromServer:function(e,t){null==e&&(e=1)
this.setMeta("currentPage",e)
return c.getEcommerceProducts({pageId:_.getId(),category:t||this._getRenderCategory(this.dtProps.category),page:e})},_getCurrentPageNum:function(){return this.getMeta("currentPage")},_loadNextPage:function(){var e
e=this._getCurrentPageNum()
this.setMeta("currentPage",e+1)
return this._loadProductsFromServer(e+1)},_onClickEditor:function(e){return g.openEcommerceManagerDialog(e)},_changeCategory:function(e){this.setMeta("nextCategory",e)
return this._loadProductsFromServer(1,e)},_changeToDetailMode:function(){return this.setMeta("detailMode",!0)},_changeToNormalMode:function(){return this.setMeta("detailMode",!1)},_getCategoryBarProps:function(){return{currentCategory:this.getMeta("nextCategory"),changeCategory:this._changeCategory,categories:f.getCategories()}},_getWrapperProps:function(){return{products:this._getProductsData(),pageId:_.getId(),hasMultipleProducts:f.getProducts().length>=2,settings:f.getSettings(),cartData:u.getCart(),layout:this.props.layout||"row",category:this.props.category||"all",changeToDetailMode:this._changeToDetailMode,changeToNormalMode:this._changeToNormalMode}},render:function(){var e,n,i,o,s,r
this.observeBinding(f.getBinding())
this.observeBinding(u.getCartBinding())
s=f.getPagination(this.getMeta("currentCategory"))
e=this.getMeta("detailMode")
n=this._getEditBtnText()
o=f.getLoadingState("product")||f.getLoadingState("settings")||f.getLoadingState("category")
r="persona"===_.getTheme().get("name")?"":"sixteen columns"
i=a.getFromSiteToApp()
return w.createElement("div",{className:"s-component s-ecommerce",ref:"root"},w.createElement("div",{className:"s-ecommerce-content"},f.getCategories().length>0&&("all"===this.dtProps.category||!f.isCategoryIdExist(this.dtProps.category))&&w.createElement("div",{className:"persona"===_.getTheme().get("name")?"":"sixteen columns",style:{display:e?"none":"block"}},w.createElement(d,Object.assign({sbClass:this.props.sbClass},this._getCategoryBarProps()),w.createElement("div",{className:"s-component-editor-wrapper"},w.createElement("div",{className:N("s-component-overlay",{visible:a.getInWeChat()}),onClick:function(e){return function(){return e._onClickEditor({tab:"category"})}}(this)},w.createElement("div",{className:"overlay"},w.createElement("div",{className:"center"},w.createElement("span",null,t("Ecommerce|Manage Categories")))))))),o&&w.createElement("div",{className:N("s-loading-wrapper",{"relative-wrapper":!this._getProductsData().length})},w.createElement("div",{className:"s-loading"})),w.createElement(h,Object.assign({},this._getWrapperProps(),{isLoading:o}),w.createElement("div",{className:"s-component-editor-wrapper"},w.createElement("div",{className:"s-component-overlay"+(a.getInWeChat()?" visible":""),onClick:function(e){return function(){return e._onClickEditor({category:e.dtProps.category,tab:"product"})}}(this)},w.createElement("div",{className:"overlay"},w.createElement("div",{className:"center"},w.createElement("span",null,n)))))),s&&s.totalPages>=2&&(i?w.createElement("div",{className:"s-ecommerce-pagination"},w.createElement(v,{className:"s-ecommerce-pagination-item s-font-body",to:"/store/page?category="+this.dtProps.category},t("Ecommerce|View more"))):w.createElement("div",{className:"s-ecommerce-pagination"},s.totalPages>this._getCurrentPageNum()&&w.createElement("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:this._loadNextPage},t("Ecommerce|Show more")),this._getCurrentPageNum()>1&&w.createElement("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:function(e){return function(){return e.setMeta("currentPage",1)}}(this)},t("Ecommerce|Show less")))),void 0))}})
l.WaypointLazy=S(l)
e.exports=l}).call(t,n(9))},1973:function(e,t,n){"use strict"
var i,o,s,a,r
s=n(1)
a=n(13)
r=n(3)
i=n(6)
o=s.createClass({displayName:"JQSlide",componentWillAppear:function(e){return this.componentWillEnter(e)},componentWillEnter:function(e){var t
t=i(a.findDOMNode(this))
return t.slideDown(300,"easeInOutQuart",e)},componentWillLeave:function(e){var t
t=i(a.findDOMNode(this))
return t.slideUp(200,"easeInOutQuart",e)},render:function(){return this.props.component(Object.assign({},this.props,{style:{display:"none"}}))}})
e.exports=o},1974:function(e,t,n){"use strict"
var i,o,s,a,r,l,c,u,d,p,m,h,f
i=n(6)
p=n(3)
o=n(65)
u=n(5)
f=n(36)
d=n(17)
l=n(2002)
s=n(799)
c=n(18)
r=n(1983)
o=n(65)
h=function(e){return c.addImageAsset({img:e})}
m=function(e,t){return s.saveFileRecord({file:e,success:function(n){var i,o
e.url=null!=(i=n.data.uploadedFile)?i.url:void 0
e.id=null!=(o=n.data.uploadedFile)?o.id:void 0
f.Event.publish("FileLibrary.addToFileLibrary",e)
return t.itemUploaded(e)},error:function(){var e
e=I18n.t("js.pages.edit.errors.upload_fail")
return o.customAlert?o.customAlert(e):window.alert(e)}})}
a={pick:function(e){var t,n,s,a,u
null==e&&(e={})
s=p.extend({itemSelected:function(){},itemUploaded:function(){},error:function(){}},e.handlers)
n=e.dialogType||"image"
t=function(){switch(n){case"image":return l.IMAGE_ASSET_DIALOG.DEFAULT_OPTIONS
case"file":return l.FILE_ASSET_DIALOG.DEFAULT_OPTIONS
case"video":return{}}}()
e=p.extend(p.cloneDeep(t),e)
a=!0
switch(n){case"image":u={success:function(e,t){a&&h(e.dataForBackend)
s.itemUploaded(t)
c.closeDialog("imageAssetDialog")
return o.ui.closeModal(i("#asset-lib-dialog"))},error:function(e,t){return s.error(e,t)}}
r.setType(e.iconLibComponents)
break
case"file":u={success:function(e){a&&m(e,s)
c.closeDialog("fileAssetDialog")
return o.ui.closeModal(i("#file-lib-dialog"))},error:function(){return function(e,t){var n
s.error(e,t)
n=I18n.t("js.pages.edit.errors.upload_fail")
return o.customAlert?o.customAlert(n):window.alert(n)}}(this)}
break
case"video":u={}
r.setType("video")}return c.openAssetDialog({assetDialogOptions:e,requestedObject:u,dialogType:n})}}
f.Event.subscribe("Editor.OpenFileUploaderV4",function(e,t){return a.pick(t)})
f.Event.subscribe("Editor.OpenImageUploaderV4",function(e,t){return a.pick(t)})
e.exports=a},1975:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=n(6),a=o(s),r=n(305),l=o(r),c={onlyCloseBtnOpts:{infobar:!1,fullScreen:!1,thumbs:!1,slideShow:!1,closeBtn:!0},getCustomArrowTpl:function(){return'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="s-fancybox-btn s-fancybox-btn--left" data-fancybox-previous><button class="s-fancybox-arrow s-fancybox-arrow--left" title="Previous"></button></div><div class="s-fancybox-btn s-fancybox-btn--right" data-fancybox-next><button class="s-fancybox-arrow s-fancybox-arrow--right" title="Next"></button></div><div class="fancybox-controls"><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="'+i("Close")+'"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div><div class="fancybox-dot-nav-wrap"><ul class="fancybox-dot-nav"></ul><div class="fancybox-num-nav"></div></div></div>'},indicatorOnInit:function(e){c.clearRefs(e)
var t=e.group.length
t>20?c.numNavOnInit(e):c.dotNavOnInit(e)},clearRefs:function(e){e.$refs.dotNav=void 0
e.$refs.numNav=void 0},dotNavOnInit:function(e){e.$refs.dotNav=(0,a.default)(".fancybox-dot-nav")
for(var t=e.group.length,n=0;n<t;n++)e.$refs.dotNav.append("<li></li>")},numNavOnInit:function(e){e.$refs.numNav=(0,a.default)(".fancybox-num-nav")
var t=e.group.length,n=e.currIndex+1
e.$refs.numNav.html("<div>"+n+" / "+t+"</div>")},indicatorBeforeMove:function(e){e.$refs.dotNav&&c.dotNavBeforeMove(e)
e.$refs.numNav&&c.numNavBeforeMove(e)},dotNavBeforeMove:function(e){var t=e.$refs.dotNav.find("li")
t.removeClass("dot-nav__current")
t.eq(e.currIndex).addClass("dot-nav__current")},numNavBeforeMove:function(e){var t=e.$refs.numNav,n=e.group.length,i=e.currIndex+1
t.html("<div>"+i+" / "+n+"</div>")},getCaption:function(e,t){var n=t.type.toLowerCase(),i=(0,a.default)(this)
switch(n){case"image":i.title=l.default.IMAGE_TITLE(i)
i.desc=l.default.IMAGE_DESCRIPTION(i)
i.title.length&&i.desc.length?i.title+=" - "+i.desc:i.desc.length&&(i.title=i.desc)
break
case"video":i.title=i.data("description")}return i.title},transformVideoSrc:function(e){e.parent().find('a.item[data-type="video"]').each(function(){var e=(0,a.default)(this)
if(e.data("html")){var t=e.data("html").replace(/(src="[^"]*)"/,function(e,t){return t+'&autoplay=1"'}),n=(0,a.default)(t),i=n.attr("src")
e.data("src",i)
e.attr("href","javascript:;")
e.attr("data-type","")}})}}
t.default=c
e.exports=t.default}).call(t,n(9))},1976:function(e,t,n){"use strict"
var i,o,s,a,r,l,c
s=n(1)
a=n(3)
i=n(6)
o=n(15)
c=n(1994)
r=n(11)
l=n(2020)
e.exports=o.createPageComponent({displayName:"AsyncComponentWrapper",observedProps:["immediate"],bobcatPropTypes:{data:{binding:s.PropTypes.object},designer:{componentName:s.PropTypes.string.isRequired,componentProps:s.PropTypes.object,immediate:s.PropTypes.bool,preRender:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.func])},callbacks:{beforeLoadCb:s.PropTypes.func,loadedCb:s.PropTypes.func}},getBobcatDefaultProps:function(){return{designer:{immediate:!0}}},componentDidMount:function(){var e
if(r.getMobileViewEditor())switch(this.props.componentName){case"socialFeedManager":c.loadAsyncStore("socialFeedManager")}"function"==typeof(e=this.props).beforeLoadCb&&e.beforeLoadCb()
if(this.dsProps.immediate)return this._requestComponent()},componentDidUpdate:function(e){if(!this.requested&&!e.immediate&&this.dsProps.immediate)return this._requestComponent()},_requestComponent:function(){switch(this.props.componentName){case"ecommerce":n.e(46,function(e){return function(){var t
t=n(1972)
e._innerComponent=t.WaypointLazy
o.register("EcommerceComponent",t)
return e._startLoad()}}(this))
break
case"ecommerceBuy":n.e(28,function(e){return function(){e._innerComponent=n(1980)
return e._startLoad()}}(this))
break
case"socialFeedManager":n.e(45,function(e){return function(){e._innerComponent=n(1982)
return e._startLoad()}}(this))
break
case"socialFeedComponent":n.e(44,function(e){return function(){var t
t=n(1981)
e._innerComponent=t.WaypointLazy
o.register("SocialFeedComponent",t)
return e._startLoad()}}(this))}return this.requested=!0},_startLoad:function(){var e
this.forceUpdate()
return"function"==typeof(e=this.props).loadedCb?e.loadedCb():void 0},_preLoad:function(){var e
e=this.props.preRender?"function"==typeof this.props.preRender?this.props.preRender.apply(this):this.props.preRender:l.apply(this)
return e},_loadInnerComponent:function(){var e,t
e=this._innerComponent
t={}
null!=this.props.componentProps&&(t=this.props.componentProps)
return s.createElement(e,Object.assign({},t))},render:function(){return this._innerComponent?this._loadInnerComponent():this._preLoad()}})},1977:function(e,t,n){"use strict"
var i,o,s,a,r,l,c,u,d,p,m,h,f,g,v,y
u=n(3)
a=n(19).EventEmitter
s=n(58)
o=n(57)
l=n(1978)
i="social_feed_connection_event_id"
r="social_feed_feeds_event_id"
m=[]
d=[]
c=u.assign({},a.prototype,{emitConnections:function(){return this.emit(i,this.getAccounts())},addConnectionListener:function(e){return this.on(i,e)},removeConnectionListener:function(e){return this.removeListener(i,e)},emitFeeds:function(){return this.emit(r,this.getFeeds())},addFeedsListener:function(e){return this.on(r,e)},removeFeedsListener:function(e){return this.removeListener(r,e)},getAccounts:function(){return d},getFeeds:function(){return m}})
g=function(e){d=e
return c.emitConnections()}
y=function(e){var t,n,i
for(n=0,i=e.length;n<i;n++){t=e[n]
switch(t.provider){case"facebook":case"twitter":t.feeds=u.filter(t.feeds,function(e){return!!e.text}).slice(0,3)
break
case"instagram":t.feeds=t.feeds.slice(0,12)}}m=e
return c.emitFeeds()}
h=function(e){return l.getAccounts({pageId:e.pageId,success:function(t){"function"==typeof e.success&&e.success(t)
return g(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
p=function(e){return l.deleteAccount({pageId:e.pageId,accountId:e.accountId,success:function(t){"function"==typeof e.success&&e.success(t)
return g(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
v=function(e){return l.updateFacebookPage({pageId:e.pageId,accountId:e.accountId,data:e.data,success:function(t){return"function"==typeof e.success?e.success(t):void 0},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
f=function(e){return l.getFeeds({pageId:e.pageId,success:function(t){"function"==typeof e.success&&e.success()
return y(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
c.editorDispatchToken=s.register(function(e){switch(e.actionType){case o.ActionTypes.UPDATE_SOCIAL_FEED_ACCOUNTS:return g(e.data)
case o.ActionTypes.UPDATE_SOCIAL_FEEDS:return y(e.data)
case o.ActionTypes.GET_SOCIAL_FEED_ACCOUNTS:return h(e.options)
case o.ActionTypes.DELETE_SOCIAL_FEED_ACCOUNT:return p(e.options)
case o.ActionTypes.GET_SOCIAL_FEEDS:return f(e.options)
case o.ActionTypes.UPDATE_SOCIAL_FEED_FACEBOOK_PAGE:return v(e.options)}})
e.exports=c},1978:function(e,t,n){"use strict"
var i,o,s,a,r,l
i=n(6)
a=n(17)
o=n(18)
r=a.SOCIAL_FEED.ACCOUNTS
l=a.SOCIAL_FEED.FEEDS
s=function(){function e(){}e.prototype.getAccounts=function(e){return i.ajax({url:r(e.pageId),type:"GET",success:function(t){return"function"==typeof e.success?e.success(t):void 0},error:function(t){return"function"==typeof e.fail?e.fail(t):void 0}})}
e.prototype.deleteAccount=function(e){return i.ajax({url:r(e.pageId,e.accountId),type:"DELETE",success:function(t){return"function"==typeof e.success?e.success(t):void 0},error:function(t){return"function"==typeof e.fail?e.fail(t):void 0}})}
e.prototype.updateFacebookPage=function(e){return i.ajax({url:a.SOCIAL_FEED.updateFacebookPage(e),type:"POST",data:e.data,success:function(t){return"function"==typeof e.success?e.success(t):void 0},error:function(t){return"function"==typeof e.fail?e.fail(t):void 0}})}
e.prototype.getFeeds=function(e){return i.ajax({url:l(e.pageId),type:"GET",success:function(t){return"function"==typeof e.success?e.success(t):void 0},error:function(t){return"function"==typeof e.fail?e.fail(t):void 0}})}
return e}()
e.exports=new s},1979:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(1),c=i(l),u=n(1951),d=i(u),p=n(53),m=i(p),h=n(317),f=i(h),g=function(e){function t(){o(this,t)
return s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,e)
r(t,[{key:"render",value:function(){return c.default.createElement(d.default,this.props)}}])
return t}(c.default.Component)
t.default=(0,f.default)(g,[],function(){return{isCategoryIdExist:function(e){return m.default.isCategoryIdExist(e)}}})
e.exports=t.default},1983:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(1996),s=i(o),a=n(1995)
t.default={setInitialType:function(e){s.default.dispatch({actionType:a.ActionTypes.SET_INITIAL_TYPE,type:e})},setType:function(e){s.default.dispatch({actionType:a.ActionTypes.SET_TYPE,type:e})},setCurrentCategoryIndex:function(e){s.default.dispatch({actionType:a.ActionTypes.SET_CURRENT_CATEGORY_INDEX,categoryIndex:e})},manualSearchUnsplash:function(e){s.default.dispatch({actionType:a.ActionTypes.MANUAL_SEARCH_UNSPLASH,query:e})},fetchMoreUnsplashAssets:function(){s.default.dispatch({actionType:a.ActionTypes.FETCH_MORE_UNSPLASH_ASSETS})}}
e.exports=t.default},1984:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(54),s=n(1999),a=i(s),r=n(5),l=i(r),c=function(){var e={},t={mobileActions:l.default.getMobileActions(),defaultEmail:l.default.getUser().get("email")}
return Object.assign({},e,t)},u=function(){var e={}
return e}
a.default.sharedProps=(0,o.sharedPropsBuilder)(function(){return[l.default.getBinding()]},c,u)
t.default=a.default
e.exports=t.default},1985:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(1),r=(o(a),n(226)),l=o(r)
t.default=function(e){var t=l.default.escapedValue(e.address).replace(/\n/g,"<br/>"),n=l.default.escapedValue(e.hours).replace(/\n/g,"<br/>"),i=l.default.applyWordBreaks(l.default.escapedValue(e.email))
return s("div",{className:"s-contact-info-list"},void 0,e.address&&s("div",{className:"s-contact-info-item s-font-body"},void 0,s("div",{className:"s-contact-info-icon"},void 0,s("div",{className:"fa fa-map-marker"})),s("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:t}})),!1,e.hours&&s("div",{className:"s-contact-info-item s-font-body"},void 0,s("div",{className:"s-contact-info-icon"},void 0,s("div",{className:"fa fa-clock-o"})),s("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:n}})),e.phone&&s("div",{className:"s-contact-info-item s-font-body s-show-in-small-screen"},void 0,s("a",{href:"tel:"+e.phone},void 0,s("div",{className:"s-contact-info-icon"},void 0,s("div",{className:"entypo-mobile"})),s("div",{className:"s-contact-info-text"},void 0,e.phone))),e.phone&&s("div",{className:"s-contact-info-item s-font-body s-show-in-large-screen"},void 0,s("div",{className:"s-contact-info-icon"},void 0,s("div",{className:"entypo-mobile"})),s("div",{className:"s-contact-info-text"},void 0,e.phone)),!1,e.email&&s("div",{className:"s-contact-info-item s-font-body"},void 0,s("a",{href:"mailto:"+e.email},void 0,s("div",{className:"s-contact-info-icon"},void 0,s("div",{className:"entypo-mail"})),s("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:i}}))),!1)}
e.exports=t.default}).call(t,n(9))},1986:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(1),r=o(a),l=n(26),c=o(l),u=n(15),d=o(u),p=n(44),m=o(p)
t.default=d.default.createPageComponent({displayName:"ContactInfoEditor",mixins:[(0,m.default)("editor")],bobcatPropTypes:{data:{address:r.default.PropTypes.string,binding:r.default.PropTypes.object}},_getOnChangeFn:function(e){var t=this
return function(n){t.setData(e,n.target.value.trim())}},render:function(){var e=c.default.DOM.textarea,t=c.default.DOM.input
return s("div",{className:"form"},void 0,s("div",{className:"title"},void 0,i("Editor|Contact Info")),s("div",{className:"fields"},void 0,s("div",{className:"link-input"},void 0,s("div",{className:"label-wrap"},void 0,s("div",{className:"fa fa-map-marker icon"}),i("Editor|Address")),s(e,{rows:"2",maxLength:"120",className:"url",type:"text",name:"share_url",value:this.dtProps.address,onChange:this._getOnChangeFn("address")})),s("div",{className:"link-input"},void 0,s("div",{className:"label-wrap"},void 0,s("div",{className:"fa fa-clock-o icon"}),i("Editor|Hours")),s(e,{rows:"2",maxLength:"200",className:"url",type:"text",name:"share_url",placeholder:i("Editor|e.g. Mon-Fri 10am-5pm, Sat 1pm-5pm"),value:this.dtProps.hours,onChange:this._getOnChangeFn("hours")})),s("div",{className:"link-input"},void 0,s("div",{className:"label-wrap"},void 0,s("div",{className:"entypo-mobile icon"}),i("Editor|Phone")),s(t,{className:"url",type:"text",name:"share_url",value:this.dtProps.phone,onChange:this._getOnChangeFn("phone")})),s("div",{className:"link-input"},void 0,s("div",{className:"label-wrap"},void 0,s("div",{className:"entypo-mail icon"}),i("Editor|Email")),s(t,{className:"url",type:"text",name:"share_url",value:this.dtProps.email,onChange:this._getOnChangeFn("email")}))))}})
e.exports=t.default}).call(t,n(9))},1987:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(54),s=n(2e3),a=i(s),r=n(5),l=i(r),c=n(11),u=i(c),d=function(){var e={isSxl:u.default.getIsSxl()},t={defaultLocation:l.default.getMobileActions().get("location")}
return Object.assign({},e,t)},p=function(){var e={}
return e}
a.default.sharedProps=(0,o.sharedPropsBuilder)(function(){return[l.default.getBinding()]},d,p)
t.default=a.default
e.exports=t.default},1988:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(6),c=i(l),u=n(3),d=i(u),p=n(1),m=i(p),h=n(65),f=i(h),g=function(e){function t(){o(this,t)
return s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,e)
r(t,[{key:"componentDidMount",value:function(){var e=this
setTimeout(function(){e.props.fixHeight(e.refs.map)},100);(0,c.default)(window).on("resize.googleMaps",d.default.debounce(function(){e.props.fixHeight(e.refs.map)},100))
f.default.TH.Fixer.preventAppScrolling(this.refs.map)}},{key:"componentWillUnmount",value:function(){(0,c.default)(window).off("resize.googleMaps")}},{key:"render",value:function(){var e=this.props,t=e.address,n=e.isSxl,i=t,o="/c/apps",s=n?"baidu":"google",a=n?"/":"?loc="
!i&&n&&(i="上海")
i=window.encodeURIComponent(i)
var r=o+"/"+s+"_map"+a+i
return m.default.createElement("iframe",{ref:"map",id:"s-map",height:"250",scrolling:"no",src:r})}}])
return t}(m.default.Component)
t.default=g
e.exports=t.default},1989:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(1),r=o(a),l=n(26),c=(o(l),n(15)),u=o(c),d=n(44),p=o(d)
t.default=u.default.createPageComponent({displayName:"GoogleMapsEditor",mixins:[(0,p.default)("editor")],bobcatPropTypes:{data:{address:r.default.PropTypes.string}},componentWillUnmount:function(){this.setData("address",this.refs.mapTextarea.value)},render:function(){var e=this.props.isSxl?"百度地图":i("Editor|Google Maps")
return s("div",{className:"form"},void 0,s("div",{className:"title"},void 0,e),s("div",{className:"fields"},void 0,s("div",{className:"link-input"},void 0,s("div",{className:"label-wrap"},void 0,s("div",{className:"fa fa-map-marker"}),i("Editor|Address")),r.default.createElement("textarea",{ref:"mapTextarea",className:"url",type:"text",name:"share_url",defaultValue:this.dtProps.address}))))}})
e.exports=t.default}).call(t,n(9))},1990:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(3),s=(i(o),n(54)),a=n(2001),r=i(a)
r.default.sharedProps=(0,s.sharedPropsBuilder)(function(){return[]})
t.default=r.default
e.exports=t.default},1991:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=n(1),p=o(d),m=n(13),h=o(m),f=n(5),g=o(f),v=n(84),y=(o(v),n(839)),b=o(y),_=n(1992),w=o(_),E=n(29),C=o(E),x=n(86),k=o(x),N=999,S="third",P="sixteen",T=function(e){function t(e){s(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._bind("_onClickBackToCards","_onClickNextProduct","_onClickPrevProduct","_onClickShowDetail")
n.state={currentPageIndex:1,currentProductIndex:0,showDetail:!1}
return n}r(t,e)
u(t,[{key:"componentWillMount",value:function(){var e=this.props.themeName
switch(e){case"persona":P="twelve alpha"
S="six"}}},{key:"componentDidUpdate",value:function(e,t){this.state.showDetail&&t.showDetail!==this.state.showDetail&&this._adjustSectionPosition()}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_adjustSectionPosition",value:function(){if(C.default.isSmallScreen()){var e=$(h.default.findDOMNode(this)).closest(".s-ecommerce-container, .s-persp-container, .s-persona-content")
e.length&&$(document).scrollTop(e.offset().top-40)}else{var t=$(h.default.findDOMNode(this)).closest("li.slide").find(".section-anchor")
0===t.length&&(t=$(h.default.findDOMNode(this)).closest(".s-section"))
t.length&&$(document).scrollTop(t.offset().top)}}},{key:"_createCurrentProductProps",value:function(){var e=this.props,t=e.products,n=e.hasMultipleProducts,i=e.layout,o=e.settings,s=e.cartData,a=e.imgColumnClassName,r=e.infoColumnClassName
return{product:t[this.state.currentProductIndex],hasMultipleProducts:n,layout:i,settings:o,cartData:s,imgColumnClassName:a,infoColumnClassName:r}}},{key:"_onClickShowDetail",value:function(e){this.setState({showDetail:!0,currentProductIndex:e})
this.props.changeToDetailMode()}},{key:"_onClickBackToCards",value:function(){this.setState({showDetail:!1})
this.props.changeToNormalMode()}},{key:"_onClickNextProduct",value:function(){var e=this.state.currentProductIndex+1,t=Math.ceil((e+1)/N)
this.setState({currentProductIndex:e,currentPageIndex:t})}},{key:"_onClickPrevProduct",value:function(){var e=this.state.currentProductIndex-1,t=Math.ceil((e+1)/N)
this.setState({currentProductIndex:e,currentPageIndex:t})}},{key:"_onClickGoToIndex",value:function(e){this.setState({currentPageIndex:e})}},{key:"_renderNavigator",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=null,n=null
this.state.currentProductIndex>0&&(t=c("a",{className:"prev-product-btn s-font-body",onClick:this._onClickPrevProduct},void 0,c("i",{className:"fa fa-angle-left",style:{marginRight:"5px"}}),i("Ecommerce|Previous")))
this.state.currentProductIndex<this.props.products.length-1&&(n=c("a",{className:"next-product-btn s-font-body",onClick:this._onClickNextProduct},void 0,i("Ecommerce|Next"),c("i",{className:"fa fa-angle-right",style:{marginLeft:"5px"}})))
return c("div",{className:"s-ecommerce-card-view-detail-header columns "+P+" "+e},void 0,c("a",{className:"s-common-link back-btn left s-font-body",onClick:this._onClickBackToCards},void 0,c("i",{className:"fa fa-long-arrow-left",style:{marginRight:"5px"}}),i("Ecommerce|View all products")),c("div",{className:"right"},void 0,t,n))}},{key:"render",value:function(){var e=this,t=N*(this.state.currentPageIndex-1),n=this.props.products.slice(t,t+N)
n=n.map(function(i,o){var s=S,a=e.props.themeName
switch(a){case"persona":s=s+" "+(o%2===0?"alpha":"omega")
break
default:s=4===n.length||2===n.length?"eight":"third"}var r={product:i,layout:e.props.layout,hasMultipleProducts:e.props.products.length>=2,columnClass:s,settings:e.props.settings,onClickBuy:e._onClickShowDetail,pageId:e.props.pageId}
return p.default.createElement(w.default,l({},r,{key:o,index:o+t}))})
var i=Math.ceil(this.props.products.length/N),o={left:this.state.showDetail?"-100%":"0"},s={margin:1===i?"0":"30px 0",height:this.state.showDetail?"1px":"auto"},a={height:this.state.showDetail?"auto":"1px"}
return c("div",{className:"s-ecommerce-card-view-wrapper",style:o},void 0,c("div",{className:"s-ecommerce-card-view-cards-wrapper"},void 0,c("div",{className:"s-ecommerce-card-view-cards",style:s},void 0,n)),p.default.createElement("div",{className:"s-ecommerce-card-view-detail",style:a,ref:"productDetail"},this._renderNavigator(),this.state.showDetail?p.default.createElement(b.default,this._createCurrentProductProps()):null,this._renderNavigator("bottom")))}}])
return t}(p.default.Component)
t.default=(0,k.default)(T,[],function(){return{themeName:g.default.getThemeName()}})
e.exports=t.default}).call(t,n(9))},1992:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l,c,u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),p=n(1),m=o(p),h=n(13),f=o(h),g=n(6),v=o(g),y=n(30),b=n(87),_=o(b),w=n(224),E=o(w),C=n(53),x=(o(C),n(11)),k=o(x),N=n(56),S=o(N),P=n(84),T=(o(P),n(65)),M=o(T),O=n(521),I=o(O),L=n(129),D=(o(L),c=l=function(e){function t(){s(this,t)
var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
e._bind("_onClickShowProductPage")
return e}r(t,e)
d(t,[{key:"componentDidMount",value:function(){var e=this,t=(0,v.default)(f.default.findDOMNode(this.refs.imageWrapper)),n=t.find("img")
this._adjustImageSize(t,n)
n.load(function(){return e._adjustImageSize(t,n)});(0,v.default)(window).resize(M.default.debounce(function(){return e._adjustImageSize(t,n)},300))}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_adjustImageSize",value:function(e,t){var n=e.outerWidth(),i=e.outerHeight(),o=n/i,s=t.prop("naturalWidth"),a=t.prop("naturalHeight"),r=s/a
if(o>r){var l=n+10,c=l/r
t.width(l)
t.height(c)
t.css({top:(i-c)/2+"px",left:(n-l)/2+"px"})}else{var u=i+10,d=u*r
t.height(u)
t.width(d)
t.css({top:(i-u)/2+"px",left:(n-d)/2+"px"})}}},{key:"_getOutOfStock",value:function(){return this.props.product.variations.every(function(e){return 0===+e.quantity})}},{key:"_getProductImage",value:function(){var e=this.props.product.picture[0]
return("undefined"!=typeof e?e.thumbnailUrl:void 0)||(0,y.cdnAssetPath)(_.default.DEFAULT_PRODUCT_IMAGE)}},{key:"_onClickShowProductPage",value:function(){var e=this.props,t=e.product,n=(e.pageId,e.onClickBuy),i=e.index
k.default.getProductPage()?S.default.gotoProductPage(t.id,this.context.fromStorePage):n(i)}},{key:"render",value:function(){var e=this.props,t=e.product,n=e.settings,o=this._getOutOfStock(),s=n.estimatedDelivery,a=E.default.getPriceScope(t),r=void 0
r=i(s?"Ecommerce|Pre-Order":"Ecommerce|Buy now")
return u("div",{className:"s-ecommerce-card-view-card "+this.props.columnClass+" columns"},void 0,u("div",{className:"s-ecommerce-card-view-card-container"},void 0,u("div",{onClick:this._onClickShowProductPage},void 0,m.default.createElement("div",{className:"s-ecommerce-card-view-card-image "+(o?"out-of-stock":"in-stock"),ref:"imageWrapper"},u(I.default,{src:this._getProductImage()}),o&&u("div",{className:"s-ecommerce-card-view-card-stock-warning s-font-body"},void 0,i("Ecommerce|Out of Stock")),u("div",{className:"s-ecommerce-card-view-card-image-overlay"}),u("div",{className:"s-ecommerce-card-view-card-image-button"},void 0,u("a",{className:"s-common-button s-font-body"},void 0,r))),u("div",{className:"s-ecommerce-card-view-card-name s-font-body"},void 0,u("div",{dangerouslySetInnerHTML:{__html:this.props.product.name}})),u("div",{className:"s-ecommerce-card-view-card-price s-font-body"},void 0,a))))}}])
return t}(m.default.Component),l.contextTypes={fromStorePage:m.default.PropTypes.bool},c)
t.default=D
e.exports=t.default}).call(t,n(9))},1993:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,c,u,d,p,m,h,f,g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),b=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),_=n(6),w=o(_),E=n(3),C=o(E),x=n(1),k=o(x),N=n(66),S=o(N),P=n(167),T=o(P),M=n(26),O=o(M),I=n(1946),L=o(I),D=n(318),B=o(D),A=n(29),j=o(A),H=n(1998),R=o(H),U=n(33),F=i(U),V=n(44),W=o(V),z=n(504),K=o(z),$=n(800),G=o($),q=n(56),Y=o(q),X=n(791),J=(o(X),n(36)),Q=o(J),Z=n(2021),ee=o(Z),te=440,ne=(l=S.default.decorate(G.default.Mixin),c=S.default.decorate(K.default),u=S.default.decorate(O.default.Mixin),d=S.default.decorate((0,W.default)("editor")),p=S.default.decorate(T.default),l(m=c(m=u(m=d(m=p(m=(f=h=function(e){function t(e){s(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.getCurrentSlide=function(){return n.getData("_current")}
n._addListenerToBinding=function(){if(n._listenerId){n._clearTimer()
n.getDefaultBinding().removeListener(n._listenerId)}n._listenerId=n.getDefaultBinding().addListener("_current",function(e){var t=e.getCurrentValue();("undefined"==typeof t?"undefined":v(t))||(t=n._currentIndex)
n.refs.slick&&(n.mTimeoutId=n.setTimeout(function(){if(n.isInPrevious){n.refs.slick.slickPrev()
n.isInPrevious=!1}else if(n.isInNext){n.refs.slick.slickNext()
n.isInNext=!1}else n.refs.slick.slickGoTo(t)},100))})}
n._stopAutoplayWhenPlayMedia=function(){if(!n._stopAutoPlayInitialized){var e=n._getSliderEl(),t=e.find(".s-video-content iframe")
if(t&&t.length>0){(0,R.default)(e,n.handleChangeAutoPlay)
n._stopAutoPlayInitialized=!0}}}
n._unsubscribeEvent=function(){n.tokenArr.every(function(e){Q.default.Event.unsubscribe(e)})}
n._respondTo=function(e){var t=Q.default.Event.subscribe(e,function(){n.forceUpdate()})
n.tokenArr.push(t)}
n._registSliderEvent=function(){n.tokenArr=[]
n._respondTo("Editor.SideMenu.Opened")
n._respondTo("Editor.SideMenu.Closed")
n._respondTo("Slider.ContentChanged");(0,w.default)(window).resize(n._renderSliderHeight)
n._bindWindowScroll();(0,w.default)(window).bind("repaint-slider",function(){})}
n._getSliderEl=function(){return(0,w.default)(n.refs.iosslider)}
n._checkIsInAnimation=function(){return n.isInAnimation}
n._previous=function(){if(!n._checkIsInAnimation()){n.isInAnimation=!0
var e=n._modCurrentSlide(-1)
n.setData("_current",e)
n.isInPrevious=!0}}
n._next=function(){if(!n._checkIsInAnimation()){n.isInAnimation=!0
var e=n._modCurrentSlide(1)
n.setData("_current",e)
n.isInNext=!0}}
n._modCurrentSlide=function(e){var t=n.getData("_current"),i=n.props.children,o=t+e,s=n._mod(o,i.length)
return s}
n._mod=function(e,t){var n=e%t
return n<0?n+t:n}
n._getEditorProps=function(){return C.default.extend({},n.props,{binding:n.getDefaultBinding()})}
n._showNavButtons=function(){return n.getMeta("showNavButtons")}
n._renderEditor=function(){return null}
n._goToSpecifySlide=function(e){n.isInAnimation=!0
n.setData("_current",e)}
n._autoScrollPage=function(e){if(!j.default.isSmallScreen()){var t=n._getSliderEl().offset().top-(0,w.default)(window).scrollTop()<0
t&&n._shouldScroll(e)&&Y.default.navigateToHash("#"+(n._getSliderSection()+1))}}
n._shouldScroll=function(e){var t=(0,w.default)(n._getSliderEl().find(".slick-slide[data-index="+e+"]")).find(".inner").outerHeight(!0)
return t>(0,w.default)(window).height()}
n._getSliderSection=function(){return n.props.index}
n.handleChangeAutoPlay=function(e){n.setMeta("autoplay",e)}
n._getChildren=function(){var e=n.props.children,t=n.props.auto_play,i=e.length
if(i<=0)return null
var o={accessibility:!1,infinite:1!==i,slidesToShow:1,draggable:!1,speed:j.default.isMobile()?500:750,slidesToScroll:1,arrows:!1,pauseOnHover:!1,dots:!1,autoplay:!0,autoplaySpeed:t,lazyLoad:!1,beforeChange:function(e,t){n._transitionBannerSize(e,t)},afterChange:function(e){n.isInAnimation=!1
n.setData("_current",e)
n._adaptiveCurrentSlide()
n._currentIndex=e}},s=e.map(function(e){return b("div",{},e.key,e)})
return k.default.createElement(L.default,g({ref:"slick"},o),s)}
n._shouldSliderFullScreen=function(){var e=n.props.fullscreen
return e}
n._shouldFullscreenSliderOnlyFirstSection=function(){var e=n.props.fullscreenSliderOnlyFirstSection
return!(!e||!n._checkSliderIsFirstSection())}
n._checkSliderIsFirstSection=function(){var e=n._getSliderSection()
return!(!n.getMeta("ready")||0!==e)}
n._useDarkOverlays=function(){var e=!0,t=n.getData("list")
if(t.size>0){var i=n.getCurrentSlide(),o=t.get(i)
if(!o)return
var s=o.getIn(["components","background1"]),a=B.default.hasContent(s),r="dark"!==s.get("textColor")
a&&r&&(e=!1)}return e}
n._getMaxForegroundHeightInList=function(){var e=n._getSliderEl(),t=0,i=0
e.find(".item").each(function(e,n){var o=(0,w.default)(n).find(".inner").first()
t=o.outerHeight(!0)
i=Math.max(t,i)})
t=null
return i}
n._getLimitedMaxHeight=function(){return(0,w.default)(window).width()<772?2*(0,w.default)(window).height():1.5*(0,w.default)(window).height()}
n._getSliderHeightByContent=function(){var e=te,t=n._getLimitedMaxHeight(),i=(0,w.default)(window).height()-(0,w.default)("#header-container").outerHeight()-130,o=n._getMaxForegroundHeightInList()
if(n._shouldFullscreenSliderOnlyFirstSection())return Math.max(i,o)
if(n.props.fullscreen)return Math.max(o,(0,w.default)(window).height())
if(o<e)return e
if(o>t){console.info("[Slide] your content of slider is bigger than the max limited height (",t,")")
return t}return o}
n._getSlideHeightByImageRatio=function(e){var t=n.getData("list").get(e).getIn(["components","background1"]).toObject(),i=!1
if(!t||!t.w||!t.h){var o=n.asyncImageLoadedShapeArr[e]
if(o)t=o
else{t={w:16,h:9}
i=!0}}return{height:n._getFullViewImageHeight(t),isHardCode:i}}
n._getFullViewImageHeight=function(e){if(e&&e.w&&e.h){var t=n._getSliderEl().width(),i=e.h*t/e.w
return Math.ceil(i)}return 440}
n._transitionBannerSize=function(e){var t=n.slideHeightArr[e],i=n._getSliderEl().find(".slick-list")
i.css({height:t-1+"px"})
i.find(".slick-slide").each(function(e,n){(0,w.default)(n).find(".item").css({height:t+"px",minHeight:t+"px"})})}
n._resizeSliderInEditor=function(){var e=n.getCurrentSlide(),t=n.slideHeightArr[e],i=n._getSliderEl().find(".slider")
if(t<240)if("editor"===n.props.imgEditorState){n._adaptiveSlideByIndex(240)
i.addClass("img-editor-open")}else{n._adaptiveSlideByIndex(t)
n.setTimeout(function(){i.removeClass("img-editor-open")},200)}}
n._adaptiveSlideByIndex=function(e){var t=n._getSliderEl().find(".slick-list")
t.css({height:e-1+"px"})
t.find(".slick-slide.slick-active").each(function(t,n){(0,w.default)(n).find(".item").css({height:e+"px",minHeight:e+"px"})})}
n._getImageShapByLoad=function(e){var t=n.getData("list")
e%=t.size
var i=t.get(e).getIn(["components","background1"]),o=F.addProtocol(i.get("url"))
return new Promise(function(t,i){var s=new Image
s.src=o;(0,w.default)(s).one("load",function(){if(s.width&&s.height){n.asyncImageLoadedShapeArr[e]={w:s.width,h:s.height}
var o=n._getFullViewImageHeight({w:s.width,h:s.height})
t(o)}else i("Miss the size of image")})})}
n._asyncSetSlideHeight=function(e){n._getImageShapByLoad(e).then(function(t){n.slideHeightArr[e]=t
n._adaptiveCurrentSlide()}).catch(function(e){console.info("[Banner] func/asyncSetSlideHeight: ",e)})}
n._getCurrentLayout=function(){var e=n.getCurrentSlide(),t=n.props.getSliderLayouts()
return t[e]}
n._resetSlideHeight=function(e){var t="noForeground",i=n.props.getSliderLayouts(),o=0
if(i[e]===t){var s=n._getSlideHeightByImageRatio(e)
o=s.height
s.isHardCode&&n._asyncSetSlideHeight(e)}else o=n._getSliderHeightByContent()
return Math.floor(o)}
n._adaptiveCurrentSlide=function(){var e=n.getCurrentSlide(),t=n._resetSlideHeight(e)
n._adaptiveSlideByIndex(t)
n.slideHeightArr[e]=t}
n._renderSliderHeight=function(){var e=n._getSliderEl().find(".slick-list"),t=n.getData("list").size,i=n.getCurrentSlide()
n.slideHeightArr=Array.from(new Array(t),function(){return 0})
e.find(".slick-slide").each(function(o,s){var a=parseInt((0,w.default)(s).attr("data-index"),10)
a===-1&&(a=t-1)
a===t&&(a=0)
var r=n._resetSlideHeight(a);(0,w.default)(s).find(".item").css({height:r+"px",minHeight:r+"px"})
i===a&&e.css({height:r-1+"px"})
n.slideHeightArr[a]=r})}
n._onScroll=n._onScroll.bind(n)
return n}r(t,e)
y(t,[{key:"componentWillMount",value:function(){this.initMeta({ready:!1,autoplay:!1,showNavButtons:!0,isScrolling:!1})
this.setData("_current",0)
this.isInAnimation=!1
this.isInPrevious=!1
this.isInNext=!1
this.slideHeightArr=[]
this.asyncImageLoadedShapeArr=[]
this.tokenArr=[]
this._currentIndex=0}},{key:"componentDidMount",value:function(){this.updateMeta({ready:!0,showNavButtons:!j.default.isMobile()})
this._addListenerToBinding()
this._registSliderEvent()
this._renderSliderHeight()}},{key:"componentDidUpdate",value:function(e){this.isInAnimation||this._renderSliderHeight()
this._stopAutoplayWhenPlayMedia()
this.props.index!==e.index&&this._addListenerToBinding()}},{key:"componentWillUnmount",value:function(){this._unbindWindowScroll()
this._listenerId&&this.getDefaultBinding().removeListener(this._listenerId);(0,w.default)(window).off("resize",this._renderSliderHeight)
this._clearTimer()
this._unsubscribeEvent()}},{key:"_clearTimer",value:function(){if(this.mTimeoutId){clearTimeout(this.mTimeoutId)
this.mTimeoutId=void 0}}},{key:"_bindWindowScroll",value:function(){(0,w.default)(document).on("scroll",this._onScroll)}},{key:"_unbindWindowScroll",value:function(){(0,w.default)(document).off("scroll",this._onScroll)}},{key:"_onScroll",value:function(){var e=this
if(this.refs.slick&&!this.getMeta("isScrolling")){this.updateMeta({isScrolling:!0})
var t=function(e){return e.stopPropagation()},n=function n(){e.updateMeta({isScrolling:!1});(0,w.default)("body").off("touchend touchcancel touchleave",n)
e._getSliderEl().off("touchmove",t)}
this._getSliderEl().on("touchmove",t);(0,w.default)("body").on("touchend touchcancel touchleave",n)}}},{key:"render",value:function(){return ee.default.apply(this)}}])
return t}(k.default.Component),h.defaultProps={uiOutside:!1,fullscreen:!1,imgEditorState:""},f))||m)||m)||m)||m)||m)
e.exports=ne},1994:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i={},o={loadAsyncStore:function(e){switch(e){case"socialFeedManager":i[e]=n(1977)}}}
t.default=o
e.exports=t.default},1995:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
t.ActionTypes=void 0
var o=n(170),s=i(o)
t.ActionTypes=(0,s.default)({SET_INITIAL_TYPE:null,SET_TYPE:null,SET_CURRENT_CATEGORY_INDEX:null,MANUAL_SEARCH_UNSPLASH:null,FETCH_MORE_UNSPLASH_ASSETS:null})},1996:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(128),s=i(o)
t.default=new s.default("AssetsDispatcher")
e.exports=t.default},1997:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(19),s=n(3),a=i(s),r=n(12),l=(i(r),n(58)),c=i(l),u=n(57),d=i(u),p={settings:{goal:1e4,paid:0,currencyCode:"CNY",data:{buttonText:"",thanksMessage:"",showProgress:!0}},state:{isFetching:!1},currencyFormat:{code:"CNY",symbol:"¥",decimal:".",thousand:",",precision:2,name:"Chinese Yuan"}},m="store_change_event",h=a.default.assign({},o.EventEmitter.prototype,{getData:function(){return p},emitChange:function(){this.emit(m,p)},addChangeListener:function(e){this.on(m,e)},removeChangeListener:function(e){this.removeListener(m,e)}})
h.editorDispatchToken=c.default.register(function(e){switch(e.actionType){case d.default.ActionTypes.GET_DONATION_SETTINGS:p.state.isFetching=!0
h.emitChange()
break
case d.default.ActionTypes.GET_DONATION_SETTINGS_SUCCESS:p.state.isFetching=!1
p.settings=e.settings
p.settings.goal=(p.settings.goal||0)/100
p.settings.paid=(p.settings.paid||0)/100
h.emitChange()
break
case d.default.ActionTypes.GET_DONATION_SETTINGS_FAIL:p.state.isFetching=!1
h.emitChange()}})
t.default=h
e.exports=t.default},1998:function(e,t){"use strict"
function n(e,t){function n(e){return JSON.stringify({method:"addEventListener",value:e,listener:o,context:"player.js",version:"0.0.10"})}function i(e){var n=e.originalEvent.data
if("string"==typeof n){try{n=JSON.parse(n)}catch(e){console.error(e)}if(n.listener===o)switch(n.event){case"play":t(!1)
break
case"pause":case"ended":t(!0)}}}if(window.postMessage){var o="listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8
return n.toString(16)})
e.find(".s-video-content iframe").each(function(e,t){t.onload=function(){var e=t.src.match(/^(?:http:)?\/\/[^\/]+\//)[0]
if(/(embedly|embed\.ly)/.test(e)){t.contentWindow.postMessage(n("play"),e)
t.contentWindow.postMessage(n("pause"),e)
t.contentWindow.postMessage(n("ended"),e)}}})
$(window).on("message",function(e){i(e)})}}Object.defineProperty(t,"__esModule",{value:!0})
t.default=n
e.exports=t.default},1999:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(1),l=o(r),c=n(15),u=o(c),d=n(64),p=o(d),m=n(44),h=o(m),f=n(68),g=o(f),v=n(1986),y=o(v),b=n(1985),_=o(b),w=n(522),E=o(w)
t.default=u.default.createPageComponent({displayName:"ContactInfo",mixins:[(0,h.default)("editor")],bobcatPropTypes:{data:{address:l.default.PropTypes.string,phone:l.default.PropTypes.string,email:l.default.PropTypes.string,hours:l.default.PropTypes.string,binding:l.default.PropTypes.object},internal:{_state2:l.default.PropTypes.string}},_getSaveButtonProps:function(){var e=this,t=n(508),i=t.sendReturnToNormalMessage
return{onClickCancel:function(){e._restoreCancelValue()
e.setData("_state2","normal")
e._afterClickCancel&&e._afterClickCancel()
i(e)},onClickSave:function(){e.setData("_state2","normal")
e.savePage()
i(e)}}},getBobcatDefaultProps:function(){return{internal:{_state2:"normal"}}},componentDidMount:function(){this.initMeta({showDeleteOverlay2:!1})},onMouseEnterDeleteButton:function(){this.setMeta("showDeleteOverlay2",!0)},onMouseLeaveDeleteButton:function(){this.setMeta("showDeleteOverlay2",!1)},onClickDeleteButton:function(){this.setMeta("showDeleteOverlay2",!1)
this.props.onDelete()},_onClickEditor:function(){"normal"===this.props._state2&&this.setData("_state2","editor")
window.DEBUG&&(window.DEBUG.activeComponent=this)
this._storeCancelValue()
this.afterClickEditor&&this.afterClickEditor()},_isMobileViewEditing:function(){return this.props.displayName==this.constructor.displayName?this.addIframeEditingClass():""},_renderEditor:function(e){return a("div",{className:"s-component-editor-wrapper"},void 0,a("div",{className:"buttons"},void 0,a("div",{className:"s-repeatable-delete-button",title:i("Editor|Remove title"),onClick:this.onClickDeleteButton,onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,a("div",{className:"delete-button-wrap"},void 0,a("div",{className:"delete-button-confirm"},void 0,i("Sure?"))))),"normal"===this.props._state2&&a("div",{className:"s-component-overlay"+(this.getMeta("showDeleteOverlay2")?" s-repeatable-overlay warning visible":"")+this._isMobileViewEditing(),onClick:this._onClickEditor},void 0,a("div",{className:"center"},void 0,!this._isMobileViewEditing()&&a("span",{},void 0,i("Edit")))),a(p.default,{},void 0,"editor"===this.props._state2&&a(g.default,{className:"s-component-editor"},"editor",a("div",{className:"component-editor google-maps-editor"},void 0,l.default.createElement(y.default,e),l.default.createElement(E.default,s({ref:"saveButtons"},this._getSaveButtonProps()))))))},render:function(){var e=this.props,t=e.address,n=e.phone,i=e.email,o=e.hours,s=e.binding,r={address:t,phone:n,email:i,hours:o,binding:s}
return a("div",{className:"s-component s-form s-contact-info-form"},void 0,!1,"normal"===this.props._state2&&a(p.default,{},void 0,a(g.default,{className:"s-component-content"},"content",l.default.createElement(_.default,r))))}})
e.exports=t.default}).call(t,n(9))},2e3:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(1),l=o(r),c=n(15),u=o(c),d=n(64),p=o(d),m=n(44),h=o(m),f=n(68),g=o(f),v=n(1989),y=o(v),b=n(1988),_=o(b),w=n(522),E=o(w)
t.default=u.default.createPageComponent({displayName:"GoogleMaps",mixins:[(0,h.default)("editor")],bobcatPropTypes:{data:{address:l.default.PropTypes.string},callbacks:{fixHeight:l.default.PropTypes.func}},_getSaveButtonProps:function(){var e=this
return{onClickCancel:function(){e.onClickCancel()},onClickSave:function(){e.updateState("normal")
var t=e.constructor.sharedProps().defaultLocation
e.props.address===t&&e.setData("address",null)
e.savePage()}}},componentDidMount:function(){this.initMeta({showDeleteOverlay:!1})},onMouseEnterDeleteButton:function(){this.setMeta("showDeleteOverlay",!0)},onMouseLeaveDeleteButton:function(){this.setMeta("showDeleteOverlay",!1)},onClickDeleteButton:function(){this.setMeta("showDeleteOverlay",!1)
this.props.onDelete()},_onClickEditor:function(){this.setData("displayName",this.constructor.displayName)
this.onClickEditor(this)},_isMobileViewEditing:function(){return this.props.displayName==this.constructor.displayName?this.addIframeEditingClass():""},_renderEditor:function(){var e=this.constructor.sharedProps()
return a("div",{className:"s-component-editor-wrapper"},void 0,a("div",{className:"buttons"},void 0,a("div",{className:"s-repeatable-delete-button",title:i("Editor|Remove title"),onClick:this.onClickDeleteButton,onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,a("div",{className:"delete-button-wrap"},void 0,a("div",{className:"delete-button-confirm"},void 0,i("Sure?"))))),!this.isState("editor")&&a("div",{className:"s-component-overlay"+(this.getMeta("showDeleteOverlay")?" s-repeatable-overlay warning visible":"")+this._isMobileViewEditing(),onClick:this._onClickEditor},void 0,a("div",{className:"center"},void 0,!this._isMobileViewEditing()&&a("span",{},void 0,i("Edit")))),a(p.default,{},void 0,this.isState("editor")&&a(g.default,{className:"s-component-editor"},"editor",a("div",{className:"component-editor google-maps-editor"},void 0,l.default.createElement(y.default,s({},this.props,e)),l.default.createElement(E.default,s({ref:"saveButtons"},this._getSaveButtonProps()))))))},render:function(){var e=this.constructor.sharedProps(),t=this.props.address
t=t||e.defaultLocation||""
return a("div",{className:"s-component s-form s-google-maps-form"},void 0,!1,!this.isState("editor")&&a(p.default,{},void 0,a(g.default,{className:"s-component-content"},"content",l.default.createElement(_.default,s({},this.props,e,{address:t})))))}})
e.exports=t.default}).call(t,n(9))},2001:function(e,t,n){(function(i){"use strict"
function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(1),l=s(r),c=n(26),u=s(c),d=n(64),p=s(d),m=n(1941),h=s(m),f=n(15),g=s(f),v=n(11),y=s(v),b=n(5),w=s(b),E=n(225),C=(s(E),n(44)),x=s(C),k=n(505),N=s(k),S=n(793),P=s(S),T=n(506),M=s(T),O=n(519),I=s(O),L=n(18),D=s(L),B=n(1973),A=s(B),j=n(1974),H=s(j),R=n(1971),U=n(792),F=s(U),V=n(55),W=o(V),z=n(231),K=(s(z),g.default.createPageComponent({displayName:"ImageLinkEditor",mixins:[(0,x.default)("editor"),P.default,N.default,I.default.enableAfterMount(),I.default.enableAfterUpdate()],bobcatPropTypes:{data:{url:M.default.url,textColor:l.default.PropTypes.oneOf(["dark","light","overlay"]),sizing:l.default.PropTypes.oneOf(["cover","contain","tile","center"]),backgroundVariation:l.default.PropTypes.string,videoUrl:l.default.PropTypes.string,videoHtml:l.default.PropTypes.string,stockKey:l.default.PropTypes.string,binding:l.default.PropTypes.object,h:l.default.PropTypes.number,w:l.default.PropTypes.number,s:l.default.PropTypes.number,storageKey:l.default.PropTypes.string,storage:l.default.PropTypes.oneOf(["ali","c","qn"]),linkUrl:l.default.PropTypes.string.isRequired,linkTarget:l.default.PropTypes.string.isRequired},designer:{warnningInfo:l.default.PropTypes.string,setStateFunc:l.default.PropTypes.func}},componentDidMount:function(){this.setData("displayName",this.constructor.displayName)},_onClickSave:function(){this.savePage()
this.updateState("normal")},getBobcatDefaultProps:function(){return{data:{linkUrl:"",linkTarget:"_blank",warnningInfo:""}}},_onChangeUrl:function(e){this.updateData({linkUrl:e.target.value})
this.savePage()},_onChangeTarget:function(e){this.updateData({linkTarget:e.target.checked?"_blank":"_self"})
this.savePage()},_isNewTab:function(){return"_blank"===this.dtProps.linkTarget},_renderWarnningInfoIcon:function(){return a("div",{className:"show-pub-alert pub-alert"},void 0,a("a",{className:"page publish-button"},void 0,a("div",{className:"pub-alert-icon"},void 0,a("div",{className:"fa fa-circle"},void 0,a("div",{id:"unpubed-count",className:"pub-count"},void 0,"!")))))},_onClickEditImage:function(){var e=this
F.default.launchMeitu(this._getUrlForImageEditor(),{beforeLaunch:function(){D.default.openDialog("imageEditor")},onUploadResponse:function(t){try{var n=JSON.parse(t),i=W.fromUploader(n,"qn")
e._imageUploaded(i)
D.default.addImageAsset({img:W.serializeForBackend(n,"qn")})
D.default.closeDialog("imageEditor")}catch(e){alert(I18n.t("js.pages.edit.errors.effects_network_error"))}},onClose:function(){D.default.closeDialog("imgeEditor")}})},_getUrlForImageEditor:function(){var e=_.assign({},this.props,{s:10})
return W.createImage(e).getUrl(this.props.size,!0)},_onClickUpload:function(){H.default.pick({initialTabIdx:0,iconLibComponents:"background",from:"banner",handlers:{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}})},_setImage:function(e){this.updateData((0,R.imageDataForSaving)(e))},_imageUploaded:function(e){/\.mp4$/.test(e.getUrl())?this.updateData(Object.assign((0,R.imageDataForSaving)(e),{videoHtml:VideoHelper.getVideoHtmlByUrl(e.getUrl(),1280,720),videoUrl:e.getUrl(),textColor:"light"})):this._setImage(e)
this.savePage()},_renderImgEditButoon:function(){if(!y.default.getIsSxl()||w.default.getIsImageEditorRollout())return a("div",{className:"clearfix mb"},void 0,a("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickEditImage},void 0,i("Edit Image")))},_afterClickEditor:function(){this.props.setStateFunc("editor")},_afterClickCancel:function(){this.props.setStateFunc("normal")},render:function(){var e=u.default.DOM.input,t=this.dtProps,n=t.linkUrl,o=t.warnningInfo,s=this.isIframeEditing()
return l.default.createElement("div",{ref:"componentDOM",className:"s-component s-linker"+this.addIframeEditingClass()},a("div",{className:"s-component-editor dark-bg",onClick:this.onToggleMobileViewEditorBox},void 0,o&&this._renderWarnningInfoIcon(),a(h.default,{className:"title small center clickable"+(s?" hidden":""),onTap:this.toggleEditor,rel:"tooltip-left","data-original-title":o?o:""},void 0,this.isState("editor")?a("div",{className:"minus"},void 0,a("i",{className:"entypo-down-open-mini"})):a("div",{className:"plus"},void 0,a("i",{className:"entypo-right-open-mini"})),i("Editor|Image & Link")),a(p.default,{},void 0,this.isState("editor")&&!0&&a(A.default,{component:l.default.DOM.div,className:"main-editor"},void 0,a("div",{className:"clearfix mb"},void 0,a("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickUpload},void 0,i("Upload Image"))),l.default.createElement("img",{style:{display:"none"},src:this._getUrlForImageEditor(),ref:"aviaryImage"}),this._renderImgEditButoon(),a("div",{className:"separator"},void 0,a("hr",{})),a("div",{className:"label-link"},void 0,i("Editor|Link Url"),a("br",{}),a("div",{},void 0,a(e,{type:"text",name:"url",value:n,onChange:this._onChangeUrl}))),a("div",{className:"label-target toggle-compression-checkbox"},void 0,a(e,{type:"checkbox",checked:this._isNewTab(),onChange:this._onChangeTarget}),i("Editor|Open in new tab")),a("div",{className:"separator"},void 0,a("hr",{})),a("div",{className:"clearfix"},void 0,a("div",{className:"s-btn green small done-button no-margin",onClick:this._onClickSave},void 0,i("Save")))))))}}))
t.default=K
e.exports=t.default}).call(t,n(9))},2002:function(e,t,n){(function(t){"use strict"
e.exports={IMAGE_ASSET_DIALOG:{FILE_PICKER:0,ASSET_LIB:1,ICON_LIB:2,DEFAULT_OPTIONS:{mode:"single",hideTabs:[],initialTabIdx:-1,iconLibComponents:"icon"}},FILE_ASSET_DIALOG:{FILE_PICKER:0,ASSET_LIB:1,DEFAULT_OPTIONS:{mode:"single",hideTabs:[],initialTabIdx:-1}},PAGE_SETTINGS_DIALOG:{COLLABORATOR:{ROLES_ARR:function(){return[{value:"administrator",text:t("EditorSettings|Administrator")},{value:"editor",text:t("EditorSettings|Editor")},{value:"blogger",text:t("EditorSettings|Blogger")}]}}}}}).call(t,n(9))},2003:function(e,t,n){"use strict"
var i,o,s,a,r,l,c,u,d
i=n(6)
d=!1
u=function(){}
a=n(1)
r=n(13)
s=n(26)
c=n(3)
o=n(29)
l=a.createClass({displayName:"SimpleSortable",getDefaultProps:function(){return{sortableConfig:{},onReorder:function(){},beforeReorder:function(){},afterReorder:function(){},containment:"parent",className:""}},setupJqSortable:function(){var e,t
u()
e=c.clone(this.props.sortableConfig)
e.activate=this._handleStart
e.stop=this._handleDrop
o.isAndroid()&&(e.scroll=!1)
t=r.findDOMNode(this)
switch(this.props.containment){case"self":e.containment=t
break
case"parent":e.containment=t.parentElement}null!=this.props.containmentSelector&&(e.containment=i(t).closest(this.props.containmentSelector).get(0))
this.$jq=i(t)
return this.$jq.sortable(e)},componentDidMount:function(){return this.setupJqSortable()},componentDidUpdate:function(){},_handleStart:function(){this.props.beforeReorder(this)
return!0},_handleDrop:function(e,t){var n,o
o=this.$jq.sortable("toArray",{attribute:"data-sorting-index"})
n=t.item.attr("data-sorting-index")
i(t.item).css("z-index","initial")
this.$jq.sortable("cancel")
this.props.onReorder(o,n)
this.props.afterReorder(this.props.children)
return!0},render:function(){var e,t,n
n=c.find(this.props.children,function(e){return c.isArray(e)})
e=c.flatten(n||[this.props.children])
t=this.props.className||""
return a.createElement("div",{className:t,"data-list-index":this.props.index},e)}})
e.exports=l},2004:function(e,t,n){(function(t){"use strict"
var i,o,s,a,r,l,c,u,d,p,m,h,f,g,v,y
d=n(1)
r=null
p=n(13)
m=n(3)
i=n(6)
o=n(15)
u=n(5)
a=n(18)
c=n(44)
s=n(506)
l=n(847)
v=n(39)
y=n(849)
g=["id","value","htmlValue","selected_app_name","page_id","render_as_iframe","app_list"]
f={data:{id:d.PropTypes.oneOfType([d.PropTypes.string,d.PropTypes.number]),value:s.html,render_as_iframe:d.PropTypes.bool,selected_app_name:d.PropTypes.string,app_list:d.PropTypes.string,binding:d.PropTypes.object}}
h=function(){return{data:{render_as_iframe:!1,app_list:"{}"}}}
r=o.createPageComponent({displayName:"HtmlComponent",mixins:[c("editor")],bobcatPropTypes:f,getBobcatDefaultProps:h,componentWillMount:function(){this.initMeta({iframeSrcQ:0,canceled:!1})},componentDidMount:function(){l.startTimer()
this._injectHtml()
return this._resizeIFrame()},componentDidUpdate:function(e){},_hasId:function(e){return"number"==typeof e},_getId:function(){this._setCanceled(!1)
return a.createComponent({data:{component:{}},success:function(e){return function(t){e.updateData({id:t.data.component.id})
return e.savePage()}}(this),error:function(e){return function(){return window.confirm(t("Uh oh! There's been an error creating this HTML component. Try again?"))?e._getId():e._setCanceled(!0)}}(this)})},_resizeIFrame:function(){var e
e=i(p.findDOMNode(this)).find("iframe")
if(e.length)return l.resizeIFrames(e)},_injectHtml:function(){var e
if(!this.dtProps.render_as_iframe)try{return i(p.findDOMNode(this.refs.htmlInject)).html(this._rawHtml())}catch(t){e=t
v.log("Html section script error: "+e)
return i(p.findDOMNode(this.refs.htmlInject)).append("Script error: "+e)}},_hasContent:function(){return this.dtProps.value.length>0},_renderAsIframe:function(){return this.dtProps.render_as_iframe},_rawHtml:function(){return m.unescape(this.dtProps.value||"")},_onClickEditor:function(){return a.openAppStoreDialog(m.extend({},this.dtProps,{htmlValue:this._rawHtml(),page_id:u.getId()}),function(e){return function(n){var i
if(n.id===e.dtProps.id){i=m.pick(n,g)
e.updateData(i)
return e.savePage()}return window.error(t("Uh oh! There's been an error saving this HTML component. Try again."))}}(this))},_saveComponent:function(e){return a.saveHTMLComponent(this.dtProps.id,e,this._reloadIframe)},_iframeSrcQ:function(){return this.getMeta("iframeSrcQ")},_reloadIframe:function(){return this.updateMeta({iframeSrcQ:this.getMeta("iframeSrcQ")+1})},_recreateComponent:function(){if(window.confirm("Recreating will delete any existing component! Make sure you understand what this does")){this.updateData(h().data)
return this._getId()}},render:function(){return this._getCanceled()?d.createElement("div",{className:"s-common-status",style:{cursor:"pointer"},onClick:this._getId},t("Click here to create HTML component again.")):this._hasId(this.props.id)?y.apply(this):null}})
e.exports=r}).call(t,n(9))},2005:function(e){var t=!("undefined"==typeof window||!window.document||!window.document.createElement)
e.exports=t},2006:function(e,t,n){function i(e,t){this.query=e
this.isUnconditional=t
this.handlers=[]
this.mql=window.matchMedia(e)
var n=this
this.listener=function(e){n.mql=e.currentTarget||e
n.assess()}
this.mql.addListener(this.listener)}var o=n(2008),s=n(1943).each
i.prototype={constuctor:i,addHandler:function(e){var t=new o(e)
this.handlers.push(t)
this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers
s(t,function(n,i){if(n.equals(e)){n.destroy()
return!t.splice(i,1)}})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){s(this.handlers,function(e){e.destroy()})
this.mql.removeListener(this.listener)
this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off"
s(this.handlers,function(t){t[e]()})}}
e.exports=i},2007:function(e,t,n){function i(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill")
this.queries={}
this.browserIsIncapable=!window.matchMedia("only all").matches}var o=n(2006),s=n(1943),a=s.each,r=s.isFunction,l=s.isArray
i.prototype={constructor:i,register:function(e,t,n){var i=this.queries,s=n&&this.browserIsIncapable
i[e]||(i[e]=new o(e,s))
r(t)&&(t={match:t})
l(t)||(t=[t])
a(t,function(t){r(t)&&(t={match:t})
i[e].addHandler(t)})
return this},unregister:function(e,t){var n=this.queries[e]
if(n)if(t)n.removeHandler(t)
else{n.clear()
delete this.queries[e]}return this}}
e.exports=i},2008:function(e){function t(e){this.options=e
!e.deferSetup&&this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup()
this.initialised=!0},on:function(){!this.initialised&&this.setup()
this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}}
e.exports=t},2009:function(e,t,n){var i=n(2007)
e.exports=new i},2010:function(e,t,n){var i=n(2005),o=i&&n(2009),s=n(1944),a={media:function(e,t){e=s(e)
"function"==typeof t&&(t={match:t})
i&&o.register(e,t)
this._responsiveMediaHandlers||(this._responsiveMediaHandlers=[])
this._responsiveMediaHandlers.push({query:e,handler:t})},componentWillUnmount:function(){this._responsiveMediaHandlers&&this._responsiveMediaHandlers.forEach(function(e){i&&o.unregister(e.query,e.handler)})}}
e.exports=a},2011:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.NextArrow=t.PrevArrow=void 0
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(1),a=i(s),r=n(14),l=i(r),c=n(838),u=i(c)
t.PrevArrow=a.default.createClass({displayName:"PrevArrow",clickHandler:function(e,t){t&&t.preventDefault()
this.props.clickHandler(e,t)},render:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"})
if(!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)){e["slick-disabled"]=!0
t=null}var n,i={key:"0","data-role":"none",className:(0,l.default)(e),style:{display:"block"},onClick:t}
n=this.props.prevArrow?a.default.cloneElement(this.props.prevArrow,i):a.default.createElement("button",o({key:"0",type:"button"},i)," Previous")
return n}}),t.NextArrow=a.default.createClass({displayName:"NextArrow",clickHandler:function(e,t){t&&t.preventDefault()
this.props.clickHandler(e,t)},render:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"})
if(!u.default.canGoNext(this.props)){e["slick-disabled"]=!0
t=null}var n,i={key:"1","data-role":"none",className:(0,l.default)(e),style:{display:"block"},onClick:t}
n=this.props.nextArrow?a.default.cloneElement(this.props.nextArrow,i):a.default.createElement("button",o({key:"1",type:"button"},i)," Next")
return n}})},2012:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.Dots=void 0
var o=n(1),s=i(o),a=n(14),r=i(a),l=function(e){var t
t=Math.ceil(e.slideCount/e.slidesToScroll)
return t}
t.Dots=s.default.createClass({displayName:"Dots",clickHandler:function(e,t){t.preventDefault()
this.props.clickHandler(e)},render:function(){var e=this,t=l({slideCount:this.props.slideCount,slidesToScroll:this.props.slidesToScroll}),n=Array.apply(null,Array(t+1).join("0").split("")).map(function(t,n){var i=n*e.props.slidesToScroll,o=n*e.props.slidesToScroll+(e.props.slidesToScroll-1),a=(0,r.default)({"slick-active":e.props.currentSlide>=i&&e.props.currentSlide<=o}),l={message:"dots",index:n,slidesToScroll:e.props.slidesToScroll,currentSlide:e.props.currentSlide},c=e.clickHandler.bind(e,l)
return s.default.createElement("li",{key:n,className:a},s.default.cloneElement(e.props.customPaging(n),{onClick:c}))})
return s.default.createElement("ul",{className:this.props.dotsClass,style:{display:"block"}},n)}})},2013:function(e){"use strict"
var t={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,listWidth:null,listHeight:null,slideCount:null,slideWidth:null,slideHeight:null,swipeLeft:null,touchObject:{startX:0,startY:0,curX:0,curY:0},lazyLoadedList:[],initialized:!1,edgeDragged:!1,swiped:!1,trackStyle:{},trackWidth:0}
e.exports=t},2014:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.InnerSlider=void 0
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(1),a=i(s),r=n(2015),l=i(r),c=n(838),u=i(c),d=n(2013),p=i(d),m=n(1945),h=i(m),f=n(14),g=i(f),v=n(502),y=i(v),b=n(2017),_=n(2012),w=n(2011)
t.InnerSlider=a.default.createClass({displayName:"InnerSlider",mixins:[u.default,l.default],list:null,track:null,listRefHandler:function(e){this.list=e},trackRefHandler:function(e){this.track=e},getInitialState:function(){return o({},p.default,{currentSlide:this.props.initialSlide})},getDefaultProps:function(){return h.default},componentWillMount:function(){this.props.init&&this.props.init()
this.setState({mounted:!0})
for(var e=[],t=0;t<a.default.Children.count(this.props.children);t++)t>=this.state.currentSlide&&t<this.state.currentSlide+this.props.slidesToShow&&e.push(t)
this.props.lazyLoad&&0===this.state.lazyLoadedList.length&&this.setState({lazyLoadedList:e})
this.setState({initialized:!0})},componentDidMount:function(){this.initialize(this.props)
this.adaptHeight()
window&&(window.addEventListener?window.addEventListener("resize",this.onWindowResized):window.attachEvent("onresize",this.onWindowResized))},componentWillUnmount:function(){this.animationEndCallback&&clearTimeout(this.animationEndCallback)
window.addEventListener?window.removeEventListener("resize",this.onWindowResized):window.detachEvent("onresize",this.onWindowResized)
this.state.autoPlayTimer&&clearInterval(this.state.autoPlayTimer)},componentWillReceiveProps:function(e){if(this.props.slickGoTo!=e.slickGoTo)this.changeSlide({message:"index",index:e.slickGoTo,currentSlide:this.state.currentSlide})
else if(this.state.currentSlide>=e.children.length){this.update(e)
this.changeSlide({message:"index",index:e.children.length-e.slidesToShow,currentSlide:this.state.currentSlide})}else this.update(e)},componentDidUpdate:function(){this.adaptHeight()},onWindowResized:function(){this.update(this.props)
this.setState({animating:!1})
clearTimeout(this.animationEndCallback)
delete this.animationEndCallback},slickPrev:function(){this.changeSlide({message:"previous"})},slickNext:function(){this.changeSlide({message:"next"})},slickGoTo:function(e){"number"==typeof e&&this.changeSlide({message:"index",index:e,currentSlide:this.state.currentSlide})},render:function(){var e,t=(0,g.default)("slick-slider",this.props.className,{"slick-vertical":this.props.vertical,"slick-initialized":this.state.initialized}),n={fade:this.props.fade,cssEase:this.props.cssEase,speed:this.props.speed,infinite:this.props.infinite,centerMode:this.props.centerMode,focusOnSelect:this.props.focusOnSelect?this.selectHandler:null,currentSlide:this.state.currentSlide,lazyLoad:this.props.lazyLoad,lazyLoadedList:this.state.lazyLoadedList,rtl:this.props.rtl,slideWidth:this.state.slideWidth,slidesToShow:this.props.slidesToShow,slidesToScroll:this.props.slidesToScroll,slideCount:this.state.slideCount,trackStyle:this.state.trackStyle,variableWidth:this.props.variableWidth}
if(this.props.dots===!0&&this.state.slideCount>=this.props.slidesToShow){var i={dotsClass:this.props.dotsClass,slideCount:this.state.slideCount,slidesToShow:this.props.slidesToShow,currentSlide:this.state.currentSlide,slidesToScroll:this.props.slidesToScroll,clickHandler:this.changeSlide,children:this.props.children,customPaging:this.props.customPaging}
e=a.default.createElement(_.Dots,i)}var s,r,l={infinite:this.props.infinite,centerMode:this.props.centerMode,currentSlide:this.state.currentSlide,slideCount:this.state.slideCount,slidesToShow:this.props.slidesToShow,prevArrow:this.props.prevArrow,nextArrow:this.props.nextArrow,clickHandler:this.changeSlide}
if(this.props.arrows){s=a.default.createElement(w.PrevArrow,l)
r=a.default.createElement(w.NextArrow,l)}var c=null
this.props.vertical&&(c={height:this.state.listHeight})
var u=null
this.props.vertical===!1?this.props.centerMode===!0&&(u={padding:"0px "+this.props.centerPadding}):this.props.centerMode===!0&&(u={padding:this.props.centerPadding+" 0px"})
var d=(0,y.default)({},c,u)
return a.default.createElement("div",{className:t,onMouseEnter:this.onInnerSliderEnter,onMouseLeave:this.onInnerSliderLeave},s,a.default.createElement("div",{ref:this.listRefHandler,className:"slick-list",style:d,onMouseDown:this.swipeStart,onMouseMove:this.state.dragging?this.swipeMove:null,onMouseUp:this.swipeEnd,onMouseLeave:this.state.dragging?this.swipeEnd:null,onTouchStart:this.swipeStart,onTouchMove:this.state.dragging?this.swipeMove:null,onTouchEnd:this.swipeEnd,onTouchCancel:this.state.dragging?this.swipeEnd:null,onKeyDown:this.props.accessibility?this.keyHandler:null},a.default.createElement(b.Track,o({ref:this.trackRefHandler},n),this.props.children)),r,e)}})},2015:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var o=n(1947),s=n(838),a=(i(s),n(502)),r=i(a),l=n(13),c=i(l),u={changeSlide:function(e){var t,n,i,o,s,a=this.props,r=a.slidesToScroll,l=a.slidesToShow,c=this.state,u=c.slideCount,d=c.currentSlide
o=u%r!==0
t=o?0:(u-d)%r
if("previous"===e.message){i=0===t?r:l-t
s=d-i
if(this.props.lazyLoad){n=d-i
s=n===-1?u-1:n}}else if("next"===e.message){i=0===t?r:t
s=d+i
this.props.lazyLoad&&(s=(d+r)%u+t)}else if("dots"===e.message||"children"===e.message){s=e.index*e.slidesToScroll
if(s===e.currentSlide)return}else if("index"===e.message){s=parseInt(e.index)
if(s===e.currentSlide)return}this.slideHandler(s)},keyHandler:function(e){e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&this.props.accessibility===!0?this.changeSlide({message:this.props.rtl===!0?"next":"previous"}):39===e.keyCode&&this.props.accessibility===!0&&this.changeSlide({message:this.props.rtl===!0?"previous":"next"}))},selectHandler:function(e){this.changeSlide(e)},swipeStart:function(e){var t,n
if(!(this.props.swipe===!1||"ontouchend"in document&&this.props.swipe===!1||this.props.draggable===!1&&e.type.indexOf("mouse")!==-1)){t=void 0!==e.touches?e.touches[0].pageX:e.clientX
n=void 0!==e.touches?e.touches[0].pageY:e.clientY
this.setState({dragging:!0,touchObject:{startX:t,startY:n,curX:t,curY:n}})}},swipeMove:function(e){if(this.state.dragging){if(!this.state.animating){this.props.vertical&&this.props.swipeToSlide&&this.props.verticalSwiping&&e.preventDefault()
var t,n,i,s=this.state.touchObject
n=(0,o.getTrackLeft)((0,r.default)({slideIndex:this.state.currentSlide,trackRef:this.track},this.props,this.state))
s.curX=e.touches?e.touches[0].pageX:e.clientX
s.curY=e.touches?e.touches[0].pageY:e.clientY
s.swipeLength=Math.round(Math.sqrt(Math.pow(s.curX-s.startX,2)))
this.props.verticalSwiping&&(s.swipeLength=Math.round(Math.sqrt(Math.pow(s.curY-s.startY,2))))
i=(this.props.rtl===!1?1:-1)*(s.curX>s.startX?1:-1)
this.props.verticalSwiping&&(i=s.curY>s.startY?1:-1)
var a=this.state.currentSlide,l=Math.ceil(this.state.slideCount/this.props.slidesToScroll),c=this.swipeDirection(this.state.touchObject),u=s.swipeLength
if(this.props.infinite===!1&&(0===a&&"right"===c||a+1>=l&&"left"===c)){u=s.swipeLength*this.props.edgeFriction
if(this.state.edgeDragged===!1&&this.props.edgeEvent){this.props.edgeEvent(c)
this.setState({edgeDragged:!0})}}if(this.state.swiped===!1&&this.props.swipeEvent){this.props.swipeEvent(c)
this.setState({swiped:!0})}t=this.props.vertical?n+u*(this.state.listHeight/this.state.listWidth)*i:n+u*i
this.props.verticalSwiping&&(t=n+u*i)
this.setState({touchObject:s,swipeLeft:t,trackStyle:(0,o.getTrackCSS)((0,r.default)({left:t},this.props,this.state))})
Math.abs(s.curX-s.startX)<.8*Math.abs(s.curY-s.startY)||s.swipeLength>4&&e.preventDefault()}}else e.preventDefault()},getNavigableIndexes:function(){var e=void 0,t=0,n=0,i=[]
if(this.props.infinite){t=this.props.slidesToShow*-1
n=this.props.slidesToShow*-1
e=2*this.state.slideCount}else e=this.state.slideCount
for(;t<e;){i.push(t)
t=n+this.props.slidesToScroll
n+=this.props.slidesToScroll<=this.props.slidesToShow?this.props.slidesToScroll:this.props.slidesToShow}return i},checkNavigable:function(e){var t=this.getNavigableIndexes(),n=0
if(e>t[t.length-1])e=t[t.length-1]
else for(var i in t){if(e<t[i]){e=n
break}n=t[i]}return e},getSlideCount:function(){var e=this,t=this.props.centerMode?this.state.slideWidth*Math.floor(this.props.slidesToShow/2):0
if(this.props.swipeToSlide){var n=void 0,i=c.default.findDOMNode(this.list),o=i.querySelectorAll(".slick-slide")
Array.from(o).every(function(i){if(e.props.vertical){if(i.offsetTop+e.getHeight(i)/2>e.state.swipeLeft*-1){n=i
return!1}}else if(i.offsetLeft-t+e.getWidth(i)/2>e.state.swipeLeft*-1){n=i
return!1}return!0})
var s=Math.abs(n.dataset.index-this.state.currentSlide)||1
return s}return this.props.slidesToScroll},swipeEnd:function(e){if(this.state.dragging){var t=this.state.touchObject,n=this.state.listWidth/this.props.touchThreshold,i=this.swipeDirection(t)
this.props.verticalSwiping&&(n=this.state.listHeight/this.props.touchThreshold)
this.setState({dragging:!1,edgeDragged:!1,swiped:!1,swipeLeft:null,touchObject:{}})
if(t.swipeLength)if(t.swipeLength>n){e.preventDefault()
var s=void 0,a=void 0
switch(i){case"left":case"down":a=this.state.currentSlide+this.getSlideCount()
s=this.props.swipeToSlide?this.checkNavigable(a):a
this.state.currentDirection=0
break
case"right":case"up":a=this.state.currentSlide-this.getSlideCount()
s=this.props.swipeToSlide?this.checkNavigable(a):a
this.state.currentDirection=1
break
default:s=this.state.currentSlide}this.slideHandler(s)}else{var l=(0,o.getTrackLeft)((0,r.default)({slideIndex:this.state.currentSlide,trackRef:this.track},this.props,this.state))
this.setState({trackStyle:(0,o.getTrackAnimateCSS)((0,r.default)({left:l},this.props,this.state))})}}else e.preventDefault()},onInnerSliderEnter:function(){this.props.autoplay&&this.props.pauseOnHover&&this.pause()},onInnerSliderLeave:function(){this.props.autoplay&&this.props.pauseOnHover&&this.autoPlay()}}
t.default=u},2016:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(1),a=i(s),r=n(2014),l=n(502),c=i(l),u=n(1944),d=i(u),p=n(2010),m=i(p),h=n(1945),f=i(h),g=a.default.createClass({displayName:"Slider",mixins:[m.default],innerSlider:null,innerSliderRefHandler:function(e){this.innerSlider=e},getInitialState:function(){return{breakpoint:null}},componentWillMount:function(){var e=this
if(this.props.responsive){var t=this.props.responsive.map(function(e){return e.breakpoint})
t.sort(function(e,t){return e-t})
t.forEach(function(n,i){var o
o=0===i?(0,d.default)({minWidth:0,maxWidth:n}):(0,d.default)({minWidth:t[i-1],maxWidth:n})
e.media(o,function(){e.setState({breakpoint:n})})})
var n=(0,d.default)({minWidth:t.slice(-1)[0]})
this.media(n,function(){e.setState({breakpoint:null})})}},slickPrev:function(){this.innerSlider.slickPrev()},slickNext:function(){this.innerSlider.slickNext()},slickGoTo:function(e){this.innerSlider.slickGoTo(e)},render:function(){var e,t,n=this
if(this.state.breakpoint){t=this.props.responsive.filter(function(e){return e.breakpoint===n.state.breakpoint})
e="unslick"===t[0].settings?"unslick":(0,c.default)({},this.props,t[0].settings)}else e=(0,c.default)({},f.default,this.props)
var i=this.props.children
Array.isArray(i)||(i=[i])
i=i.filter(function(e){return!!e})
return"unslick"===e?a.default.createElement("div",null,i):a.default.createElement(r.InnerSlider,o({ref:this.innerSliderRefHandler},e),i)}})
e.exports=g},2017:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.Track=void 0
var o=n(1),s=i(o),a=n(502),r=i(a),l=n(14),c=i(l),u=function(e){var t,n,i,o,s
s=e.rtl?e.slideCount-1-e.index:e.index
i=s<0||s>=e.slideCount
if(e.centerMode){o=Math.floor(e.slidesToShow/2)
n=(s-e.currentSlide)%e.slideCount===0
s>e.currentSlide-o-1&&s<=e.currentSlide+o&&(t=!0)}else t=e.currentSlide<=s&&s<e.currentSlide+e.slidesToShow
return(0,c.default)({"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":i})},d=function(e){var t={}
void 0!==e.variableWidth&&e.variableWidth!==!1||(t.width=e.slideWidth)
if(e.fade){t.position="relative"
t.left=-e.index*e.slideWidth
t.opacity=e.currentSlide===e.index?1:0
t.transition="opacity "+e.speed+"ms "+e.cssEase
t.WebkitTransition="opacity "+e.speed+"ms "+e.cssEase}return t},p=function(e,t){return null===e.key||void 0===e.key?t:e.key},m=function(e){var t,n=[],i=[],o=[],a=s.default.Children.count(e.children)
s.default.Children.forEach(e.children,function(l,m){var h=void 0,f={message:"children",index:m,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide}
h=!e.lazyLoad|(e.lazyLoad&&e.lazyLoadedList.indexOf(m)>=0)?l:s.default.createElement("div",null)
var g,v=d((0,r.default)({},e,{index:m})),y=u((0,r.default)({index:m},e))
g=h.props.className?(0,c.default)(y,h.props.className):y
var b=function(t){h.props&&h.props.onClick&&h.props.onClick(t)
e.focusOnSelect&&e.focusOnSelect(f)}
n.push(s.default.cloneElement(h,{key:"original"+p(h,m),"data-index":m,className:g,tabIndex:"-1",style:(0,r.default)({outline:"none"},h.props.style||{},v),onClick:b}))
if(e.infinite&&e.fade===!1){var _=e.variableWidth?e.slidesToShow+1:e.slidesToShow
if(m>=a-_){t=-(a-m)
i.push(s.default.cloneElement(h,{key:"precloned"+p(h,t),"data-index":t,className:g,style:(0,r.default)({},h.props.style||{},v),onClick:b}))}if(m<_){t=a+m
o.push(s.default.cloneElement(h,{key:"postcloned"+p(h,t),"data-index":t,className:g,style:(0,r.default)({},h.props.style||{},v),onClick:b}))}}})
return e.rtl?i.concat(n,o).reverse():i.concat(n,o)}
t.Track=s.default.createClass({displayName:"Track",render:function(){var e=m.call(this,this.props)
return s.default.createElement("div",{className:"slick-track",style:this.props.trackStyle},e)}})},2018:function(e,t,n){"use strict"
function i(e){return e?{pageX:e.pageX,pageY:e.pageY,clientX:e.clientX,clientY:e.clientY}:{}}var o=n(1),s=n(13),a=32,r=13,l={propTypes:{moveThreshold:o.PropTypes.number,activeDelay:o.PropTypes.number,pressDelay:o.PropTypes.number,pressMoveThreshold:o.PropTypes.number,preventDefault:o.PropTypes.bool,stopPropagation:o.PropTypes.bool,onTap:o.PropTypes.func,onPress:o.PropTypes.func,onTouchStart:o.PropTypes.func,onTouchMove:o.PropTypes.func,onTouchEnd:o.PropTypes.func,onMouseDown:o.PropTypes.func,onMouseUp:o.PropTypes.func,onMouseMove:o.PropTypes.func,onMouseOut:o.PropTypes.func,onKeyDown:o.PropTypes.func,onKeyUp:o.PropTypes.func},getDefaultProps:function(){return{activeDelay:0,moveThreshold:100,pressDelay:1e3,pressMoveThreshold:5}},getInitialState:function(){return{isActive:!1,touchActive:!1,pinchActive:!1}},componentWillUnmount:function(){this.cleanupScrollDetection()
this.cancelPressDetection()
this.clearActiveTimeout()},processEvent:function(e){this.props.preventDefault&&e.preventDefault()
this.props.stopPropagation&&e.stopPropagation()},onTouchStart:function(e){if(!this.props.onTouchStart||this.props.onTouchStart(e)!==!1){this.processEvent(e)
window._blockMouseEvents=!0
if(1===e.touches.length){this._initialTouch=this._lastTouch=i(e.touches[0])
this.initScrollDetection()
this.initPressDetection(e,this.endTouch)
this.initTouchmoveDetection()
this._activeTimeout=setTimeout(this.makeActive,this.props.activeDelay)}else this.onPinchStart&&(this.props.onPinchStart||this.props.onPinchMove||this.props.onPinchEnd)&&2===e.touches.length&&this.onPinchStart(e)}},makeActive:function(){if(this.isMounted()){this.clearActiveTimeout()
this.setState({isActive:!0})}},clearActiveTimeout:function(){clearTimeout(this._activeTimeout)
this._activeTimeout=!1},initScrollDetection:function(){this._scrollPos={top:0,left:0}
this._scrollParents=[]
this._scrollParentPos=[]
for(var e=s.findDOMNode(this);e;){if(e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth){this._scrollParents.push(e)
this._scrollParentPos.push(e.scrollTop+e.scrollLeft)
this._scrollPos.top+=e.scrollTop
this._scrollPos.left+=e.scrollLeft}e=e.parentNode}},initTouchmoveDetection:function(){this._touchmoveTriggeredTimes=0},cancelTouchmoveDetection:function(){if(this._touchmoveDetectionTimeout){clearTimeout(this._touchmoveDetectionTimeout)
this._touchmoveDetectionTimeout=null
this._touchmoveTriggeredTimes=0}},calculateMovement:function(e){return{x:Math.abs(e.clientX-this._initialTouch.clientX),y:Math.abs(e.clientY-this._initialTouch.clientY)}},detectScroll:function(){for(var e={top:0,left:0},t=0;t<this._scrollParents.length;t++){e.top+=this._scrollParents[t].scrollTop
e.left+=this._scrollParents[t].scrollLeft}return!(e.top===this._scrollPos.top&&e.left===this._scrollPos.left)},cleanupScrollDetection:function(){this._scrollParents=void 0
this._scrollPos=void 0},initPressDetection:function(e,t){this.props.onPress&&(this._pressTimeout=setTimeout(function(){this.props.onPress(e)
t()}.bind(this),this.props.pressDelay))},cancelPressDetection:function(){clearTimeout(this._pressTimeout)},onTouchMove:function(e){if(this._initialTouch){this.processEvent(e)
if(this.detectScroll())return this.endTouch(e)
0===this._touchmoveTriggeredTimes++&&(this._touchmoveDetectionTimeout=setTimeout(function(){1===this._touchmoveTriggeredTimes&&this.endTouch(e)}.bind(this),64))
this.props.onTouchMove&&this.props.onTouchMove(e)
this._lastTouch=i(e.touches[0])
var t=this.calculateMovement(this._lastTouch);(t.x>this.props.pressMoveThreshold||t.y>this.props.pressMoveThreshold)&&this.cancelPressDetection()
t.x>this.props.moveThreshold||t.y>this.props.moveThreshold?this.state.isActive?this.setState({isActive:!1}):this._activeTimeout&&this.clearActiveTimeout():this.state.isActive||this._activeTimeout||this.setState({isActive:!0})}else if(this._initialPinch&&2===e.touches.length&&this.onPinchMove){this.onPinchMove(e)
e.preventDefault()}},onTouchEnd:function(e){var t=this
if(this._initialTouch){this.processEvent(e)
var n,i=this.calculateMovement(this._lastTouch)
if(i.x<=this.props.moveThreshold&&i.y<=this.props.moveThreshold&&this.props.onTap){e.preventDefault()
n=function(){var n=t._scrollParents.map(function(e){return e.scrollTop+e.scrollLeft}),i=t._scrollParentPos.some(function(e,t){return e!==n[t]})
i||t.props.onTap(e)}}this.endTouch(e,n)}else if(this.onPinchEnd&&this._initialPinch&&e.touches.length+e.changedTouches.length===2){this.onPinchEnd(e)
e.preventDefault()}},endTouch:function(e,t){this.cancelTouchmoveDetection()
this.cancelPressDetection()
this.clearActiveTimeout()
e&&this.props.onTouchEnd&&this.props.onTouchEnd(e)
this._initialTouch=null
this._lastTouch=null
t&&t()
this.state.isActive&&this.setState({isActive:!1})},onMouseDown:function(e){if(window._blockMouseEvents)window._blockMouseEvents=!1
else if(!this.props.onMouseDown||this.props.onMouseDown(e)!==!1){this.processEvent(e)
this.initPressDetection(e,this.endMouseEvent)
this._mouseDown=!0
this.setState({isActive:!0})}},onMouseMove:function(e){if(!window._blockMouseEvents&&this._mouseDown){this.processEvent(e)
this.props.onMouseMove&&this.props.onMouseMove(e)}},onMouseUp:function(e){if(!window._blockMouseEvents&&this._mouseDown){this.processEvent(e)
this.props.onMouseUp&&this.props.onMouseUp(e)
this.props.onTap&&this.props.onTap(e)
this.endMouseEvent()}},onMouseOut:function(e){if(!window._blockMouseEvents&&this._mouseDown){this.processEvent(e)
this.props.onMouseOut&&this.props.onMouseOut(e)
this.endMouseEvent()}},endMouseEvent:function(){this.cancelPressDetection()
this._mouseDown=!1
this.setState({isActive:!1})},onKeyUp:function(e){if(this._keyDown){this.processEvent(e)
this.props.onKeyUp&&this.props.onKeyUp(e)
this.props.onTap&&this.props.onTap(e)
this._keyDown=!1
this.cancelPressDetection()
this.setState({isActive:!1})}},onKeyDown:function(e){if(!(this.props.onKeyDown&&this.props.onKeyDown(e)===!1||e.which!==a&&e.which!==r||this._keyDown)){this.initPressDetection(e,this.endKeyEvent)
this.processEvent(e)
this._keyDown=!0
this.setState({isActive:!0})}},endKeyEvent:function(){this.cancelPressDetection()
this._keyDown=!1
this.setState({isActive:!1})},cancelTap:function(){this.endTouch()
this._mouseDown=!1},handlers:function(){return{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp}}}
e.exports=l},2019:function(e,t,n){"use strict"
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=n(1),s=n(1948)
e.exports=function(e){return o.createClass({displayName:"Tappable",mixins:e,propTypes:{component:o.PropTypes.any,className:o.PropTypes.string,classBase:o.PropTypes.string,classes:o.PropTypes.object,style:o.PropTypes.object,disabled:o.PropTypes.bool},getDefaultProps:function(){return{component:"span",classBase:"Tappable"}},render:function(){var e=this.props,t=e.classBase+(this.state.isActive?"-active":"-inactive")
e.className&&(t+=" "+e.className)
e.classes&&(t+=" "+(this.state.isActive?e.classes.active:e.classes.inactive))
var n={}
i(n,s,e.style)
var a=i({},e,{style:n,className:t,disabled:e.disabled,handlers:this.handlers},this.handlers())
delete a.activeDelay
delete a.classBase
delete a.classes
delete a.handlers
delete a.onTap
delete a.onPress
delete a.onPinchStart
delete a.onPinchMove
delete a.onPinchEnd
delete a.moveThreshold
delete a.pressDelay
delete a.pressMoveThreshold
delete a.preventDefault
delete a.stopPropagation
delete a.component
return o.createElement(e.component,a,e.children)}})}},2020:function(e,t,n){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-async-wrapper s-component"},i.createElement("div",{className:"s-loading"}))}},2021:function(e,t,n){"use strict"
function i(e,t,n){this._goToSpecifySlide(n)}function o(e,t,n){return m.createElement("div",{className:"selector-wrapper",key:n},m.createElement("div",{className:h.keys(h.pick({selector:!0,selected:n==this.getCurrentSlide()},h.identity)).join(" "),key:n,onClick:i.bind(this,e,t,n)}))}function s(){this._previous()}function a(e){var t="noForeground"===this._getCurrentLayout()
return m.createElement("div",{},m.createElement("div",{className:"prev-button "+h.keys(h.pick({"has-upper-button":t},h.identity)).join(" "),onClick:s.bind(this,e,t)},m.createElement("div",{className:"arrow"})))}function r(){this._next()}function l(){this._previous()}function c(e,t,n){this._goToSpecifySlide(n)}function u(e,t,n){return m.createElement("div",{className:"selector-wrapper",key:n},m.createElement("div",{className:h.keys(h.pick({selector:!0,selected:n==this.getCurrentSlide()},h.identity)).join(" "),key:n,onClick:c.bind(this,e,t,n)}))}function d(){this._next()}function p(){var e=this.getDefaultBinding().sub("list")
return m.createElement("div",{className:h.keys(h.pick({"slider-container":!0,loading:!this.getMeta("ready")},h.identity)).join(" ")},e.get().size>0?m.createElement("div",{"data-auto-play":this.props.auto_play,ref:"iosslider",className:h.keys(h.pick({iosslider:!0,"dark-overlays":this._useDarkOverlays()},h.identity)).join(" ")},e.get().size>0?m.createElement("div",{className:"slider"},"\n          ",this._getChildren(),"\n        "):null,!this.props.uiOutside&&e.get().size>1?m.createElement("div",{className:"center slide-selectors"},m.createElement("div",{className:"slide-selectors-inner"},m.createElement.apply(this,["div",{className:"content repeatable-component"},h.map(e.get().toArray(),o.bind(this,e)),m.createElement("div",{className:"clearfix"})]))):null,!this.props.uiOutside&&e.get().size>1?a.apply(this,[e]):null,!this.props.uiOutside&&e.get().size>1?m.createElement("div",{className:h.keys(h.pick({"next-button":!0},h.identity)).join(" "),onClick:r.bind(this,e)},m.createElement("div",{className:"arrow"})):null):null,this._showNavButtons()&&this.props.uiOutside&&e.get().size>1?m.createElement("div",{className:"outside prev-button",onClick:l.bind(this,e)},m.createElement("div",{className:"arrow"},"←")):null,this.props.uiOutside&&e.get().size>1?m.createElement("div",{className:"center outside slide-selectors"},m.createElement("div",{className:"slide-selectors-inner"},m.createElement.apply(this,["div",{className:"content repeatable-component"},h.map(e.get().toArray(),u.bind(this,e))]))):null,this._showNavButtons()&&this.props.uiOutside&&e.get().size>1?m.createElement("div",{className:"next-button outside",onClick:d.bind(this,e)},m.createElement("div",{className:"arrow"},"→")):null,0==e.get().size?m.createElement("div",{className:"s-slider-placeholder"},null):null)}var m=n(1),h=n(3)
e.exports=function(){return m.createElement("div",{className:"s-component s-slider"+(this.props.className?" "+this.props.className:" ")},"\n  ",this._renderEditor(),"\n  ",m.createElement("div",{className:"s-component-content"},p.apply(this,[])))}},2022:function(e,t,n){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"video-bg-wrap","data-video-html":this.dtProps.videoHtml})}},2023:function(e){var t=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}
e.exports=t},2041:function(e,t,n){var i=n(2239)
n(3)
e.exports={internal:"minimal",displayName:"Minimal",description:"A small, simple template.",activated:!0,thumbnail:i.correctThumbnailPath(n(2497)),defaultFonts:{heading:"playfair display",title:"vollkorn",body:"open sans"},features:{verticalAlignRowsSection:!0,backgroundColorClassNames:["s-bg-white","s-bg-gray"],backgroundColorRotate:!0},variations:[{id:"default",displayName:"Variation|Olive",fonts:{heading:null,title:null,body:null}},{id:"blue",displayName:"Variation|Blue",fonts:{heading:null,title:null,body:null}},{id:"red",displayName:"Variation|Red",fonts:{heading:null,title:null,body:null}},{id:"purple",displayName:"Variation|Purple",fonts:{heading:null,title:null,body:null}},{id:"black",displayName:"Variation|Black",fonts:{heading:null,title:null,body:null}}],callbacks:{CustomColorsTemplate:n(2348),after_render:n(2367)},sections:{rows:{proFeature:!1,canEditInMobileApp:!0,component:n(2309),template:n(2302),thumbnail:{cover:i.correctThumbnailPath(n(2491)),template:n(2280)}},media:{proFeature:!1,canEditInMobileApp:!0,component:n(2285),template:n(2301),thumbnail:{cover:i.correctThumbnailPath(n(2490)),template:n(2279)}},slider:{proFeature:!0,canEditInMobileApp:!1,component:n(2251),template:n(2317),thumbnail:{cover:i.correctThumbnailPath(n(2493)),template:n(2265)}},title:{proFeature:!1,canEditInMobileApp:!0,component:n(2270),template:n(2306),thumbnail:{cover:i.correctThumbnailPath(n(2496)),template:n(2307)}},ecommerce:{proFeature:!1,canEditInMobileApp:!1,component:n(2245),template:n(2296),thumbnail:{cover:i.correctThumbnailPath(n(2485)),template:n(2262)}},columns:{proFeature:!1,canEditInMobileApp:!0,component:n(2308),template:n(2292),thumbnail:{cover:i.correctThumbnailPath(n(2482)),template:n(2273)}},social_feed:{proFeature:!1,canEditInMobileApp:!1,component:n(2269),template:n(2304),thumbnail:{cover:i.correctThumbnailPath(n(2494)),template:n(2266)}},contact_form:{proFeature:!1,canEditInMobileApp:!0,component:n(2268),template:n(2293),thumbnail:{cover:i.correctThumbnailPath(n(2483)),template:n(2274)}},navbar:{proFeature:!1,canEditInMobileApp:!1,component:n(2249),template:n(3594)},signup_form:{proFeature:!1,canEditInMobileApp:!0,component:n(2250),template:n(2303),thumbnail:{cover:i.correctThumbnailPath(n(2492)),template:n(2264)}},info:{proFeature:!1,canEditInMobileApp:!0,component:n(2284),template:n(2300),thumbnail:{cover:i.correctThumbnailPath(n(2489)),template:n(2278)}},icons:{proFeature:!1,canEditInMobileApp:!0,component:n(2248),template:n(2299),thumbnail:{cover:i.correctThumbnailPath(n(2488)),template:n(2277)}},cta:{proFeature:!1,canEditInMobileApp:!0,component:n(2243),template:n(2294),thumbnail:{cover:i.correctThumbnailPath(n(2484)),template:n(2260)}},html:{proFeature:!1,canEditInMobileApp:!1,component:n(2247),template:n(2298),thumbnail:{cover:i.correctThumbnailPath(n(2487)),template:n(2263)}},text:{proFeature:!1,canEditInMobileApp:!0,component:n(2286),template:n(2305),thumbnail:{cover:i.correctThumbnailPath(n(2495)),template:n(2281)}},blog:{proFeature:!1,canEditInMobileApp:!1,component:n(2242),template:n(2291),thumbnail:{cover:i.correctThumbnailPath(n(2481)),template:n(2259)}},gallery:{proFeature:!1,canEditInMobileApp:!0,component:n(2282),template:n(2321),thumbnail:{cover:i.correctThumbnailPath(n(2486)),template:n(2275)}},block:{proFeature:!0,canEditInMobileApp:!1,component:n(2241),template:n(2290),thumbnail:{template:n(2258)}},hero:{proFeature:!1,canEditInMobileApp:!0,component:n(2283),template:n(2297),thumbnail:{cover:i.correctThumbnailPath(n(2271)),template:n(2276)}},footer:{proFeature:!1,canEditInMobileApp:!1,component:n(2246),template:n(2316)},donation:{proFeature:!1,canEditInMobileApp:!1,component:n(2244),template:n(2295),thumbnail:{template:n(2261)}}}}},2197:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(3),s=(i(o),n(54)),a=n(2209),r=i(a)
r.default.sharedProps=(0,s.sharedPropsBuilder)(function(){return[]})
t.default=r.default
e.exports=t.default},2198:function(e,t,n){(function(t){"use strict"
var i,o,s
o=n(1)
i=n(15)
s=n(315)
e.exports=i.create({displayName:"TitleGroup",mixins:[],propTypes:{className:o.PropTypes.string,section:o.PropTypes.object.isRequired,parentBinding:o.PropTypes.object,subtitleOnTop:o.PropTypes.bool,canHide:o.PropTypes.bool,titleSize:o.PropTypes.oneOf(["large","normal"]),titleTag:o.PropTypes.oneOf(["h2","h3","h4","h5","h6"]),subtitleTag:o.PropTypes.string,contentCheck:o.PropTypes.string,binding:o.PropTypes.object.isRequired},getDefaultProps:function(){return{className:"",subtitleOnTop:!1,parentBinding:void 0,titleSize:"normal",titleTag:"h2",subtitleTag:"h4",canHide:!0}},componentWillMount:function(){this.showDeleteOverlay=!1
return this.hideInEditor=!this.props.section.sbAnyHasContent("text1 text2",{parentBinding:this.props.parentBinding,showOnly:!1})},componentWillUpdate:function(e){if(this.props.section.sbAnyHasContent("text1 text2",{parentBinding:e.parentBinding,showOnly:!1}))return this.hideInEditor=!1},onMouseEnterDeleteButton:function(){this.showDeleteOverlay=!0
return this.forceUpdate()},onMouseLeaveDeleteButton:function(){this.showDeleteOverlay=!1
return this.forceUpdate()},onClickDeleteButton:function(){this.hideInEditor=!0
this.showDeleteOverlay=!1
return this.forceUpdate()},onClickShowButton:function(){this.hideInEditor=!1
this.showDeleteOverlay=!1
return this.forceUpdate()},shouldComponentUpdateOverride:function(){return!0},render:function(){var e,n,i,a,r,l,c,u,d,p,m,h
r=this.props.section
a=this.props.parentBinding
n=""
e=r.sbUniformTextAlignment("text1",{parentBinding:a})
m=e?"sb-title-"+e:""
this.props.contentCheck&&(r.sbHasContent(this.props.contentCheck,{parentBinding:a,showOnly:!1})||(n="s-only-title-group"))
if(!r)throw new Error("TitleGroup is expecting a section prop!")
if(r.sbHasContent("text1",{parentBinding:a})){h=r.getComponentProps("text1",a)
d="first"===this.props.section.props.indexType?"h1":this.props.titleTag
u="large"===this.props.titleSize&&"h1"!==d?"s-title-large":""
p=o.createElement("div",{className:"s-title "+m},o.createElement(s,Object.assign({slideSettingsBinding:r.getBinding().sub("components.slideSettings"),tagName:d,tagClassName:u,textType:"title",emptyMessage:t("Editor|Add title.")},h)))}else p=null
if(r.sbHasContent("text2",{parentBinding:a})){c=r.getComponentProps("text2",a)
l=o.createElement("div",{className:"s-subtitle"},o.createElement(s,Object.assign({tagName:this.props.subtitleTag,textType:"heading",emptyMessage:t("Editor|Add subtitle.")},c)))}else l=null
i=function(e){return function(n){null==n&&(n="")
return o.createElement("div",{className:"s-component-editor-wrapper"+n},o.createElement("div",{className:"buttons"},o.createElement("div",{className:"s-repeatable-delete-button",title:t("Editor|Remove title"),onClick:e.onClickDeleteButton,onMouseEnter:e.onMouseEnterDeleteButton,onMouseLeave:e.onMouseLeaveDeleteButton},o.createElement("div",{className:"delete-button-wrap"},o.createElement("div",{className:"delete-button-confirm"},t("Sure?"))))),e.showDeleteOverlay?o.createElement("div",{className:"s-component-overlay s-repeatable-overlay warning visible"}):void 0)}}(this)
return r.sbAnyHasContent("text1 text2",{parentBinding:a})?o.createElement("div",{className:"s-title-group "+n+" "+this.props.className},void 0,this.props.subtitleOnTop?[l,p]:[p,l]):null}})}).call(t,n(9))},2199:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r,l,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),p=n(1),m=i(p),h=n(13),f=i(h),g=n(33),v=!("undefined"==typeof window||!window.document||!window.document.createElement)
if(v){n(850)
document.addEventListener("lazybeforeunveil",function(e){var t=void 0
if(!e.defaultPrevented){t=e.target.getAttribute("data-bg")
if(t){e.target.style.backgroundImage="url("+t+")"
lazySizes.fire(e.target,"_lazyloaded",{},!0,!0)}}})}var y=(l=r=function(e){function t(){o(this,t)
return s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,e)
d(t,[{key:"componentWillUpdate",value:function(e){for(var t=!1,n=["src","dataSrc"],i=0;i<n.length;i++){var o=n[i],s=this.props[o],a=e[o]
if(s!==a){t=!0
break}}if(t){var r=f.default.findDOMNode(this.refs.lazyElement)
r&&r.classList.contains("lazyloaded")&&r.classList.remove("lazyloaded")}}},{key:"componentDidUpdate",value:function(){var e=f.default.findDOMNode(this.refs.lazyElement)
!e||e.classList.contains("lazyloaded")||e.classList.contains("lazyload")||e.classList.add("lazyload")}},{key:"renderBackgroundImage",value:function(){var e=this.props,t=e.className,n=e.style,i=e.src,o=e.dataSrc,s=e.eagerLoad
this.props.parentBinding
if(s){n.backgroundImage="url("+o+")"
return u("div",{className:t,style:n},void 0,this.props.children)}var a={}
if(o){n.backgroundImage="url("+i+")"
a={"data-bg":o}}return m.default.createElement("div",c({className:"lazyload "+t,style:n},a,{ref:"lazyElement"}),this.props.children)}},{key:"render",value:function(){var e=this.props,t=e.linkTarget,n=e.linkUrl,i=this.renderBackgroundImage(),o=(0,g.addProtocol)(n)
return n&&t?u("a",{href:o,target:t},void 0,i):i}}])
return t}(m.default.Component),r.defaultProps={className:"",style:{},eagerLoad:!1,src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},l)
t.default=y
e.exports=t.default},2200:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e
Object.keys(i).forEach(function(e){var s=o+(o?"-"+e:e),a=i[e]
"object"!==("undefined"==typeof a?"undefined":m(a))?n[s]=a:t(s,a)})}var n={}
t("",e)
return n}function s(e){var t={}
Object.keys(e).forEach(function(n){return t[n]=o(e[n])})
return t}function a(){var e=n(5)
return e.getThemeName()}function r(e){var t=n(60),i=t.get(a())
return i&&i.features&&i.features[e]}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16,i=Math.floor((n-t)/2)
return v[e]+" columns "+(i?"offset-"+v[i]:"")}function c(e){return v[e]+" columns"}function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=16,i=a(),o=""
if("persona"===i)o=c(12/e)
else switch(e){case 1:o=r("narrowMedia")?t?c(14):l(14,14):c(n)
break
case 3:o="third columns"
break
case 5:o="fifth columns"
break
default:o=c(n/e)}return o+" no-float"}function d(e,t,n){for(var i=t.split("-"),o=e,s="",a="",r=0,l=i.length;r<l;r++){a=i[r]
if(!o[a]){if(r>=1){for(var c=r;c<n;c++){a=Object.keys(o)[0]
o=o[a]
s+=a+"-"}break}return""}o=o[a]
s+=a+"-"}if(Object.keys(o).length)for(var u=i.length;u<n;u++){a=Object.keys(o)[0]
o=o[a]
s+=a+"-"}return s.replace(/-$/,"")}function p(e){var t=n(2202),i=n(1971),o=a(),s=e,r=s.getDefaultBinding().get("template_name"),l=s._getLayoutBinding().get("layout_variation"),c=t.getLayoutMapping(o)
c[l]||"text"!==r||["persona","perspective"].includes(o)||s.getComponentBinding("background1").merge(g.default.fromJS(i.dataForEmptyBackground()))}Object.defineProperty(t,"__esModule",{value:!0})
var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
t.getLayoutMapping=s
t.getThemeName=a
t.getThemeFeature=r
t.generateColumnClassWithOffset=l
t.generateColumnClass=c
t.generateItemClassByColumnsNum=u
t.getClosestKey=d
t.removeOldBackgroundForText=p
var h=n(3),f=(i(h),n(12)),g=i(f),v={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16}
for(var y in v)v[v[y]]=y},2201:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default={_getLayoutVariation:function(){return this._getLayoutBinding().get("layout_variation")||""},_getFirstLayout:function(){return this._getLayoutVariation().split("-")[0]},_updateLayout:function(e){this._getLayoutBinding().sub("layout_variation").set(e)
this.savePage()},_getLayoutStatusName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[e]}}
e.exports=t.default},2202:function(e,t,n){"use strict"
function i(){return p}function o(e){return Object.assign({},p,e)}function s(e){var t=(0,d.generateItemClassByColumnsNum)(e.columnsNum,!0),n=e.box?m.box:m.text
return{text:function(){return o({repeatableClass:m.repeatable,itemClass:t,textClass:n})},button:function(){return o({repeatableClass:m.repeatable,itemClass:t,textClass:n,buttonClass:m.button})}}}function a(e,t){var n=e.getRepeatableBinding("repeatable1").get().size,i=""
i=n<=2?"":n%2&&0==t?"":"half"
if(2==n)0==t&&(i+=" border-bottom")
else{t<n-2&&(i+=" border-bottom")
t>0&&t%2&&n%2&&(i+=" border-right")
t%2||n%2||(i+=" border-right")}n<=4&&(i+=" large-info-box")
return"s-persp-column s-mhi "+i}function r(e,t){return"s-persp-container absolute "+["topRight","bottomLeft","bottomRight"][t]}function l(e){return function(t,n){var i=t,o=i.getRepeatableBinding("repeatable1").sub(n),s=""
i.sbAnyHasContent("text1 text2",{parentBinding:o,showOnly:!1})&&(s="s-persp-"+e)
return s}}function c(e){return{text:function(){return o({itemClass:r,textClass:l(e)})},button:function(){return o({itemClass:r,textClass:l(e),buttonClass:m.button})}}}function u(){return{text:function(){return o({repeatableClass:"s-mh",itemClass:a,textClass:"s-info-box"})},button:function(){return o({repeatableClass:"s-mh",itemClass:a,textClass:"s-info-box",buttonClass:"s-text-button"})}}}Object.defineProperty(t,"__esModule",{value:!0})
var d=n(2200),p={repeatableClass:"",itemClass:"",textClass:"",buttonClass:""},m={repeatable:"s-mh",text:"s-mhi",box:"s-mhi s-info-box",button:"s-text-button"},h={default:{text:{one:s({columnsNum:1}),two:s({columnsNum:2}),three:s({columnsNum:3}),four:s({columnsNum:4})},box:{one:s({columnsNum:1,box:!0}),two:s({columnsNum:2,box:!0}),three:s({columnsNum:3,box:!0}),four:s({columnsNum:4,box:!0})}},perspective:{text:{overlay:c("overlay"),card:c("card")},box:{center:u(),mediaLeft:u(),mediaRight:u()}}},f=(0,d.getLayoutMapping)(h),g={default:{"1col":"box-one-text","2col":"box-two-text","3col":"box-three-text","4col":"box-four-text"},perspective:{overlay:"text-overlay-text",card:"text-card-text",mediaLeft:"box-mediaLeft-text",mediaRight:"box-mediaRight-text",center:"box-center-text"}},v={default:{text:function(e){return"text-one-"+e},box:function(e){return"box-two-"+e}},perspective:{text:function(e){return"text-card-"+e},box:function(e){return"box-center-"+e}}}
t.default={getDefaultLayoutKey:function(e,t){t=t||""
var n=(g[e]||g.default)[t];(f[e]||f.default)[t]&&(n=t)
if(!n){var i=t.indexOf("button")!==-1?"button":"text",o=t.split("-")[0],s=v[e]||v.default
n=s[o]&&s[o](i)}n||(n=Object.keys(f[e]||f.default)[0])
return n},getLayout:function(e,t){return(f[e]||f.default)[t]||i},getLayoutOptions:function(e){return h[e]||h.default},getLayoutMapping:function(e){return f[e]||f.default}}
e.exports=t.default},2203:function(e,t,n){(function(t){"use strict"
var i,o,s,a,r,l,c,u,d
s=n(1)
a=n(13)
r=n(1941)
i=n(15)
c=n(223)
d=n(3)
o=n(18)
u=n(33)
l=n(519)
e.exports=i.createPageComponent({displayName:"LayoutSelector",mixins:[l.enableAfterMount()],bobcatPropTypes:{data:{layoutOptions:s.PropTypes.array,layoutVariation:s.PropTypes.string,binding:s.PropTypes.object.isRequired}},getBobcatDefaultProps:function(){var e
return e={layoutOptions:[],layoutVariation:null}},componentDidMount:function(){if(!this.props.layoutOptions.length)return console.warn("Section has no layout options defined!")},componentDidUpdate:function(e){if(e.layoutVariation!==this.props.layoutVariation)return window.edit_page.Event.publish("Layout.afterChange",{target:$(a.findDOMNode(this))})},_updateLayout:function(e){return this.updateData({layout_variation:e})},_getLayoutKeys:function(){return d.pluck(this.props.layoutOptions,"key")},_getLayoutIndex:function(){var e,t,n
t=this._getLayoutKeys()
n=this.props.layoutVariation
e=t.indexOf(n)
return n&&e!==-1?e:null},_clickLayout:function(){var e,t
t=this._getLayoutKeys()
e=this._getLayoutIndex()
null==e&&(e=0)
this._updateLayout(t[(e+1)%t.length])
c.track("Change Layout - Editor v2")
o.clickLayout()
return o.save()},_layoutStatus:function(){var e
e=this._getLayoutIndex()
return null!=e?"ABCDEFGHI"[this._getLayoutIndex()]:"A"},render:function(){return this.props.layoutOptions.length?s.createElement("div",{className:"s-component s-layout"},s.createElement("div",{className:"s-component-editor"},s.createElement(r,{className:"center clickable small title",onTap:this._clickLayout,rel:"tooltip-left",title:t("Editor|Switch layout for this section.")},s.createElement("span",null,t("Layout"),this._layoutStatus()?s.createElement("span",{className:"layout-status"},this._layoutStatus()):void 0)))):null}})}).call(t,n(9))},2204:function(e,t,n){(function(e){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t){return"object"!=("undefined"==typeof e?"undefined":h(e))?"":e[t]?t:Object.keys(e)[0]}function l(t){return{media:e("Editor|Big Media"),col:e("Editor|Columns"),row:e("Editor|Rows"),box:e("Editor|Text In Box"),one:1,two:2,three:3,four:4,small:m("i",{className:"small fa fa-photo"}),medium1:m("i",{className:"medium1 fa fa-photo"}),medium2:m("i",{className:"medium2 fa fa-photo"}),large:m("i",{className:"large fa fa-photo"}),mediaLeft:e("Editor|Left"),mediaRight:e("Editor|Right"),center:e("Editor|Center"),left:e("Editor|Media on Left"),right:e("Editor|Media on Right"),noImage:e("Editor|No Media"),alt:e("Editor|Alternating"),text:e("Editor|Text"),button:e("Editor|Button"),signup:e("Editor|Sign Up"),images:e("Editor|App Store"),overlay:e("Editor|Overlay"),card:e("Editor|Card")}[t]}function c(e){return(0,z.default)(e,[],function(){return{themeName:V.default.getThemeName()}})}Object.defineProperty(t,"__esModule",{value:!0})
t.BaseLayoutButton=void 0
var u,d,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),m=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
t.connectToStores=c
var f=n(1),g=i(f),v=n(13),y=i(v),b=n(6),_=i(b),w=n(64),E=i(w),C=n(1941),x=i(C),k=n(66),N=i(k),S=n(14),P=i(S),T=n(3),M=i(T),O=n(223),I=i(O),L=n(519),D=i(L),B=n(18),A=i(B),j=n(1973),H=i(j),R=n(504),U=i(R),F=n(5),V=i(F),W=n(86),z=i(W)
t.BaseLayoutButton=(u=N.default.decorate(D.default.enableAfterMount()),u(d=function(t){function n(e){o(this,n)
var t=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))
t.state={showLayoutOptions:!1}
t._bind("_updateLayout","_toggleLayoutOptions","_onClickSave","_clickRotateLayout","_getKeysByLevel")
t._getSetLevelFn=U.default.boundParamsMemoizer(t._setLevelKey,t)
t._createLevelKeys(t.props.layoutVariation)
t._keyCaches={}
t.cacheLevel=-1
return t}a(n,t)
p(n,[{key:"componentDidMount",value:function(){if(this.cacheLevel!==-1){var e=this.cacheLevel,t=this._levelKeys[e]
this._keyCaches[t]=M.default.clone(this._levelKeys)}this.props.layoutOptions||console.warn("Section has no layout options defined!")}},{key:"componentWillUpdate",value:function(e){e.layoutVariation!==this.props.layoutVariation&&this._createLevelKeys(e.layoutVariation)}},{key:"componentDidUpdate",value:function(e,t){e.layoutVariation!==this.props.layoutVariation&&window.edit_page.Event.publish("Layout.afterChange",{target:(0,_.default)(y.default.findDOMNode(this))})
!t.showLayoutOptions&&this.state.showLayoutOptions&&(0,_.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").addClass("background-editor-opened")
t.showLayoutOptions&&!this.state.showLayoutOptions&&(0,_.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").removeClass("background-editor-opened")}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_createLevelKeys",value:function(e){this._levelKeys=e.split("-")}},{key:"_updateLayout",value:function(e){this.props.updateLayout(M.default.remove(M.default.clone(e),function(e){return""!==e.trim()}).join("-"))}},{key:"_setLevelKey",value:function(e,t){var n=this.cacheLevel
if(e===n&&this._levelKeys[e]!==t)return this._keyCaches[t]?this.updateCachedKeys(M.default.clone(this._keyCaches[t])):this.updateToDefaultLayout(t)
for(var i=this._levelKeys,o=[],s=this.props.layoutOptions,a=0;a<e;a++)s=s[i[a]]
o[e]=t
s=s[t]
for(var l=i.length,c=e+1;c<l;c++){o[c]=r(s,i[c])
s=s[o[c]]}var u=M.default.merge([],i,o)
this._updateLayout(u)
e!==n&&n!==-1&&(this._keyCaches[i[n]]=u)}},{key:"_getKeysByLevel",value:function(e){for(var t=this.props.layoutOptions,n=0;n<e;n++){t=t[this._levelKeys[n]]
if(!t)return[]}return"object"===("undefined"==typeof t?"undefined":h(t))?Object.keys(t):[]}},{key:"_getSmallButtonClass",value:function(e){var t=this._getKeysByLevel(e).length
return 2===t?"small-buttons two":4===t?"small-buttons four":"small-buttons"}},{key:"_getLayoutIndex",value:function(){var e=this.props.layoutVariation,t=this.getRotationKeys().indexOf(e)
return e&&t!=-1?t:null}},{key:"_getLayoutStatus",value:function(){var e=this._getLayoutIndex()
return null!==e?"ABCDEFGHI"[this._getLayoutIndex()]:"A"}},{key:"_clickRotateLayout",value:function(){if(this.state.showLayoutOptions)return this._onClickSave()
var e=(this.props.layoutVariation,this.getRotationKeys()),t=this._getLayoutIndex()+1;(!t||t>=e.length)&&(t=0)
var n=e[t]||""
if(n){this.props.updateLayout(n)
I.default.track("Change Layout - Editor v2",{section:this.sectionName})
A.default.clickLayout()
A.default.save()}}},{key:"_onClickSave",value:function(){this.setState({showLayoutOptions:!1})
A.default.save()}},{key:"_toggleLayoutOptions",value:function(){this.setState({showLayoutOptions:!this.state.showLayoutOptions})
this.state.showLayoutOptions||I.default.track("Click Advanced Layout - Editor v1",{section:this.sectionName})}},{key:"_renderCheckBox",value:function(e){var t=e.levelNum,n=(e.text,e.checkedKey),i=e.unCheckedKey,o=this._levelKeys[t],s=this._getKeysByLevel(t)
if(o&&s.length>=2){var a=this._getSetLevelFn(t,o===n?i:n)
return m("div",{className:"layout-level-button layout-checkbox dark-bg",onClick:a},void 0,m("input",{type:"checkbox",checked:o===n,onChange:a}),m("span",{},void 0,e.text))}}},{key:"_renderLayoutButtons",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,i=this._levelKeys[e],o=this._getKeysByLevel(e)
if(i&&o.length>=2){var s=this.getButtonClassMapping()[e]
return m("div",{className:"layout-level-button dark-bg "+s},void 0,o.map(function(o){return m("div",{className:(0,P.default)("s-btn small dark-gray no-margin",{selected:i===o}),onClick:t._getSetLevelFn(e,o)},o,n(o))}))}}},{key:"render",value:function(){var t=this._getLayoutStatus(),n=this.hideAdvancedOptions||!1||!1,i=this.state.showLayoutOptions,o=m(x.default,{className:"center clickable small title layout-button",onTap:this._clickRotateLayout,rel:"tooltip-left",title:e("Editor|Click to change layouts.")},void 0,m("span",{},void 0,e("Layout"),t&&!i&&m("span",{className:"layout-status"},void 0,t)))
return this.props.layoutOptions?g.default.createElement("div",{ref:"componentDOM",className:(0,P.default)("s-component s-layout",{advanced:!n,opened:i,closed:!i})},m("div",{className:"s-component-editor dark-bg"},void 0,n?o:m("div",{className:"layout-button-wrapper"},void 0,o,m(x.default,{className:"advanced-options-button",rel:"tooltip-left",title:e("Editor|More layout options!"),onClick:this._toggleLayoutOptions},void 0,e("Editor|Advanced"),m("i",{className:"fa fa-angle-down",style:{marginLeft:"5px"}}))),!n&&m(E.default,{},void 0,i&&m(H.default,{component:g.default.DOM.div,className:"layout-panel"},void 0,this.renderLayoutOptions(),m("div",{className:"save-button green s-btn small",onClick:this._onClickSave},void 0,e("Editor|Save")))))):null}}])
return n}(g.default.Component))||d)}).call(t,n(9))},2205:function(e,t,n){"use strict"
function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function o(){return f}function s(e){return Object.assign({},f,e)}function a(e,t,n){var i=(0,h.getThemeFeature)("narrowMedia")&&11!==e,o=i?14:16,a=16,r=i?e-1:e,l=i?8:r,c=i?10:16
if(11===e)c=l=14
else if("onyx_new"===g&&"right"===t){o=15
c=15}if("persona"===g){o=12
a=12
c=12}var u=(0,h.generateColumnClassWithOffset)(r,o,a),d=(0,h.generateColumnClass)(o-r),p=(0,h.generateColumnClassWithOffset)(l,l,a),m=(0,h.generateColumnClassWithOffset)(c,c,a),f="half-offset-right",v="half-offset-left"
11!==r&&9!==r||(f=v="")
if("persona"===g)switch(t){case"right":return function(){return s({repeatableClass:"s-media-right s-layout-mediaRight",innerItemClass:(0,h.generateColumnClass)(12),mediaClass:u+" s-right-in-row right omega",singleMediaClass:p+" s-right-in-row right alpha omega",textClass:d+" s-left-in-row right alpha",singleTextClass:m+" s-left-in-row right alpha omega",textInnerClass:f,buttonClass:n?"s-text-button":""})}
case"alt":return function(){return s({repeatableClass:"s-media-alt s-layout-alt",innerItemClass:(0,h.generateColumnClass)(12),mediaClass:function(e,t){return u+" "+(t%2?"s-right-in-row right omega":"s-left-in-row alpha")},singleMediaClass:function(e,t){return p+" "+(t%2?"s-right-in-row right alpha omega":"s-left-in-row alpha omega")},textClass:function(e,t){return d+" "+(t%2?"s-left-in-row right alpha":"s-right-in-row omega")},singleTextClass:function(e,t){return m+" "+(t%2?"s-left-in-row right alpha omega":"s-right-in-row alpha omega")},textInnerClass:function(e,t){return t%2?f:v},buttonClass:n?"s-text-button":""})}}switch(t){case"left":return function(){return s({repeatableClass:"s-media-left s-layout-mediaLeft",mediaClass:u+" s-left-in-row",singleMediaClass:p+" s-left-in-row",textClass:d+" s-right-in-row",singleTextClass:m+" s-right-in-row",textInnerClass:v,buttonClass:n?"s-text-button":""})}
case"right":return function(){return s({repeatableClass:"s-media-right s-layout-mediaRight",mediaClass:u+" s-right-in-row right",singleMediaClass:p+" s-right-in-row right",textClass:d+" s-left-in-row right",singleTextClass:m+" s-left-in-row right",textInnerClass:f,buttonClass:n?"s-text-button":""})}
case"alt":return function(){return s({repeatableClass:"s-media-alt s-layout-alt",mediaClass:function(e,t){return u+" "+(t%2?"s-right-in-row right":"s-left-in-row")},singleMediaClass:function(e,t){return p+" "+(t%2?"s-right-in-row right":"s-left-in-row")},textClass:function(e,t){return d+" "+(t%2?"s-left-in-row right":"s-right-in-row")},singleTextClass:function(e,t){return m+" "+(t%2?"s-left-in-row right":"s-right-in-row")},textInnerClass:function(e,t){return t%2?f:v},buttonClass:n?"s-text-button":""})}}}function r(e){function t(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return{left:a(e.mediaColumns,"left",t),right:a(e.mediaColumns,"right",t),alt:a(e.mediaColumns,"alt",t)}}return{text:t(),button:t(!0)}}function l(e,t){var n=e,i=n.getRepeatableBinding("repeatable1").sub(t),o=""
o=(0,h.getThemeFeature)("leftAlignColumnsMedia")?"text1":"text1 text2 text3"
var s=n.sbUniformTextAlignment(o,{parentBinding:i})
return"s-mhi "+s}function c(e){return e<2?"s-mh":function(t){var n=t,i=n.getRepeatableBinding("repeatable1"),o=""
if((0,h.getThemeFeature)("leftAlign")){var s=i.get().size
s<e&&(o=n.sbUniformTextAlignment("text1 text2"))}return"s-mh "+o}}function u(e){return{text:function(){return s(e)},button:function(){return s(_.extend({},e,{buttonClass:"s-text-button"}))}}}function d(e){return u({repeatableClass:c(e.columnsNum),itemClass:(0,h.generateItemClassByColumnsNum)(e.columnsNum),mediaClass:l})}function p(){return u({repeatableClass:c(1)+" s-layout-normal",innerItemClass:(0,h.generateItemClassByColumnsNum)(1).replace("no-float","")+("persona"===g?"":" center"),mediaClass:l})}Object.defineProperty(t,"__esModule",{value:!0})
var m,h=n(2200),f={repeatableClass:"",itemClass:"",innerItemClass:"",mediaClass:"",singleMediaClass:"",textClass:"",singleTextClass:"",textInnerClass:"",buttonClass:""},g=(0,h.getThemeName)(),v={two:d({columnsNum:2}),three:d({columnsNum:3}),four:d({columnsNum:4})},y={default:{col:v,row:{small:r({mediaColumns:4}),medium1:r({mediaColumns:6}),medium2:r({mediaColumns:8}),large:r({mediaColumns:10})},media:{center:p(),left:{text:a(11,"left"),button:a(11,"left",!0)},right:{text:a(11,"right"),button:a(11,"right",!0)},alt:{text:a(11,"alt"),button:a(11,"alt",!0)}}},persona:{col:v,row:{small:r({mediaColumns:3}),medium1:r({mediaColumns:4}),medium2:r({mediaColumns:6}),large:r({mediaColumns:8})},media:{center:p(),left:{text:a(9,"left"),button:a(9,"left",!0)},right:{text:a(9,"right"),button:a(9,"right",!0)},alt:{text:a(9,"alt"),button:a(9,"alt",!0)}}},perspective:function(){var e={col:{three:{text:function(){return s({itemClass:"s-persp-column third"})},button:function(){return s({itemClass:"s-persp-column third",buttonClass:"s-text-button s-persp-column"})}}},row:{large:{text:function(){return s({mediaClass:"s-persp-column half",textClass:"s-persp-column half"})},button:function(){return s({mediaClass:"s-persp-column half",textClass:"s-persp-column half",buttonClass:"s-text-button"})}}},media:{center:p()}}
return{center:e,mediaLeft:e,mediaRight:e}}()},b=(0,h.getLayoutMapping)(y),w={default:(m={"columns-2col":"col-two-text","columns-3col":"col-three-text","columns-4col":"col-four-text","columns-":"col-three-text","media-normal":"media-center-text","media-mediaLeft":"media-left-text","media-mediaRight":"media-right-text","media-alt":"media-alt-text","media-":"media-center-text"},i(m,"media-alt","media-alt-text"),i(m,"rows-mediaLeft","row-medium1-text-left"),i(m,"rows-mediaRight","row-medium1-text-right"),i(m,"rows-alt","row-medium1-text-alt"),i(m,"rows-","row-medium1-text-left"),m),perspective:{"columns-mediaLeft":"mediaLeft-col-three-text","columns-mediaRight":"mediaRight-col-three-text","columns-center":"center-col-three-text","columns-":"mediaLeft-col-three-text","rows-mediaLeft":"mediaLeft-row-large-text","rows-mediaRight":"mediaRight-row-large-text","rows-center":"center-row-large-text","rows-":"mediaLeft-row-large-text","media-mediaLeft":"mediaLeft-media-center-text","media-mediaRight":"mediaRight-media-center-text","media-center":"center-media-center-text","media-":"mediaLeft-media-center-text"}},E={default:{col:function(e){return"col-three-"+e},row:function(e){return"row-medium1-"+e+"-left"},media:function(e){return"media-center-"+e}},perspective:{col:function(e,t){return e+"-col-three-"+t},row:function(e,t){return e+"-row-large-"+t},media:function(e,t){return e+"-media-center-"+t}}}
t.default={getDefaultLayoutKey:function(e,t,n){var i=void 0
t=t||""
if((b[e]||b.default)[t])return t
n&&(i=(w[e]||w.default)[n+"-"+t])
if(!i){var o=t.indexOf("button")!==-1?"button":"text",s="perspective"===e?1:0,a=t.split("-"),r=(E[e]||E.default)[a[s]]
i="perspective"===e?r?r(a[0],o):"":r?r(o):""}i||(i=Object.keys(b[e]||b.default)[0])
return i},getLayout:function(e,t){return(b[e]||b.default)[t]||f||o},getLayoutOptions:function(e){return y[e]||y.default}}
e.exports=t.default},2206:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(){return d}function s(e){return Object.assign({},d,e)}function a(e,t){return function(){var n="right"===e?"right":"",i="container s-rva s-layout-"+c.default.camelCase(t+"-"+e),o="noImage"!=e,a="",r="",l=""
if("noImage"===e)a="s-rva-text sixteen columns"
else{l="right"===e?"half-offset-left":"half-offset-right"
a="s-rva-text eight columns "+n
r="s-rva-media eight columns "+n}return s({layoutClass:i,textClass:a,textOffsetClass:l,mediaClass:r,type:t,showImage:o})}}function r(e){return{left:a("right",e),right:a("left",e),noImage:a("noImage",e)}}Object.defineProperty(t,"__esModule",{value:!0})
var l=n(3),c=i(l),u=n(2200),d={layoutClass:"",mediaClass:"",textClass:"",textOffsetClass:"",type:"",showImage:!0},p={button:{left:function(){return s({type:"button"})},right:function(){return s({type:"button"})},noImage:function(){return s({type:"button",showImage:!1})}},images:{left:function(){return s({type:"images"})},right:function(){return s({type:"images"})},noImage:function(){return s({type:"images",showImage:!1})}},signup:{left:function(){return s({type:"signup"})},right:function(){return s({type:"signup"})},noImage:function(){return s({type:"signup",showImage:!1})}}},m={default:{button:r("button"),images:r("images"),signup:r("signup")},persona:p,perspective:p},h=(0,u.getLayoutMapping)(m),f={default:{buttonRight:"button-left",signupRight:"signup-left",imagesRight:"images-left",buttonLeft:"button-right",signupLeft:"signup-right",imagesLeft:"images-right"}}
t.default={getDefaultLayoutKey:function(e,t,n){t=t||""
var i=(f[e]||f.default)[t];(h[e]||h.default)[t]&&(i=t)
i||(t.indexOf("button")!==-1?i="button-left":t.indexOf("signup")!==-1?i="signup-left":t.indexOf("images")!==-1&&(i="images-left"))
i||"signup_form"!==n||(i="signup-noImage")
i||(i=Object.keys(h[e]||h.default)[0])
return i},getLayout:function(e,t){return(h[e]||h.default)[t]||o},getLayoutOptions:function(e){return m[e]||m.default}}
e.exports=t.default},2207:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function o(){return p}function s(e){return Object.assign({},p,e)}function a(){var e="columns half-fixed no-float small-icons"
"perspective"===m&&(e="s-persp-column half-fixed no-float small-icons")
return s({itemClass:e,naturalImage:!0})}function r(e){var t=e.get().size,n=(0,d.getThemeFeature)("narrowMedia"),i=""
i=t<=1?n?"third":"sixteen":2==t?n?"third":"eight":3==t?"third":4==t?"four":"three"
"persona"===m&&(i="three")
"ion"===m&&(i="four")
i+=" columns half-fixed no-float"
return s({itemClass:i,naturalImage:!1})}function l(e,t){var n=t.get().size,i="half";(3===n&&"center"===e||n>4)&&(i="third")
i+=" half-fixed s-persp-column"
return s({itemClass:i,naturalImage:!1})}Object.defineProperty(t,"__esModule",{value:!0})
var c=n(3),u=i(c),d=n(2200),p={itemClass:"columns half-fixed no-float",naturalImage:!0},m=(0,d.getThemeName)(),h={default:{col:r,natural:a},perspective:function(){var e=function(e){return{col:u.curry(l)(e)}}
return{center:e("center"),mediaLeft:e("left"),mediaRight:e("right")}}()},f=(0,d.getLayoutMapping)(h),g={perspective:{mediaLeft:"mediaLeft-col",mediaRight:"mediaRight-col",center:"center-col"}}
t.default={getDefaultLayoutKey:function(e,t,n){var i=void 0
t=t||""
if((f[e]||f.default)[t])return t
n&&(i=(g[e]||g.default)[n+"-"+t])
i||(i=Object.keys(f[e]||f.default)[0])
return i},getLayout:function(e,t){return(f[e]||f.default)[t]||p||o},getLayoutOptions:function(e){return h[e]||h.default}}
e.exports=t.default},2208:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function o(){return m}function s(e){return Object.assign({},m,e)}function a(e){return{normal:e,full:e}}function r(e){function t(e){return{innerMediaClass:"media-wrapper "+e.sbUniformTextAlignment("text1 text2"),buttonClass:"s-button-group "+e.sbUniformTextAlignment("text1 text2")}}return{subTop:a(function(n){return s(d.extend({},e,t(n),{isSubtitleOnBottom:!1}))}),bottom:a(function(n){return s(d.extend({},e,t(n),{}))}),right:a(function(n){return s(d.extend({},e,t(n),{outerMediaClass:"sixteen columns media-outer",textClass:"ten columns no-float",buttonClass:"six columns no-float s-button-group",outerContainerClass:"container s-layout-skinny",innerContainerClass:""}))})}}function l(e){function t(e){return{innerMediaClass:"media-wrapper "+e.sbUniformTextAlignment("text1 text2"),outerContainerClass:"s-persp-container s-layout-center",buttonClass:"s-button-group "+e.sbUniformTextAlignment("text1 text2")}}return{subTop:a(function(n){return s(d.extend({},e,t(n),{isSubtitleOnBottom:!1}))}),bottom:a(function(n){return s(d.extend({},e,t(n),{}))})}}function c(e){return f[e]||f.default}Object.defineProperty(t,"__esModule",{value:!0})
var u=n(3),d=i(u),p=n(2200),m={outerContainerClass:"container",innerContainerClass:"sixteen columns",outerMediaClass:"",innerMediaClass:"",textClass:"",buttonClass:"",isSubtitleOnBottom:!0},h=(0,p.getThemeName)()
if("perspective"===h){m.outerContainerClass="s-persp-container"
m.innerContainerClass="s-persp-column"}var f={default:{center:r({})},perspective:{center:l({})}},g=(0,p.getLayoutMapping)(f),v={default:{normal:"center-subTop-full",subBottom:"center-bottom-full",withMedia:"center-bottom-full",center:"center-bottom-normal",skinny:"center-right-normal",mediaTop:"center-bottom-normal"}},y={default:"center-subTop-normal"}
t.default={getDefaultLayoutKey:function(e,t){t=t||""
var n=(v[e]||v.default)[t];(g[e]||g.default)[t]&&(n=t)
n||(n=(0,p.getClosestKey)(c(e),t,3))
if(!n){t.indexOf("button")!==-1
n=y.default}return n},getLayout:function(e,t){return(g[e]||g.default)[t]||o},getLayoutOptions:c}
e.exports=t.default},2209:function(e,t,n){(function(i){"use strict"
function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n(1)),l=s(r),c=n(64),u=s(c),d=n(1941),p=s(d),m=n(26),h=s(m),f=n(6),g=s(f),v=n(3),y=s(v),b=n(15),_=s(b),w=n(11),E=s(w),C=n(5),x=(s(C),n(318)),k=s(x),N=n(33),S=o(N),P=n(792),T=s(P),M=n(55),O=o(M),I=n(67),L=s(I),D=n(44),B=s(D),A=n(505),j=s(A),H=n(793),R=s(H),U=n(506),F=s(U),V=n(1973),W=s(V),z=n(523),K=s(z),$=n(844),G=s($),q=n(795),Y=(s(q),n(168)),X=s(Y),J=n(1971),Q=n(843),Z=(s(Q),n(36)),ee=s(Z),te=n(130),ne=s(te),ie={data:{url:F.default.url,textColor:l.default.PropTypes.oneOf(["dark","light","overlay"]),sizing:l.default.PropTypes.oneOf(["cover","contain","tile","center"]),backgroundVariation:l.default.PropTypes.string,videoUrl:l.default.PropTypes.string,videoHtml:l.default.PropTypes.string,stockKey:l.default.PropTypes.string,binding:l.default.PropTypes.object,h:l.default.PropTypes.number,w:l.default.PropTypes.number,s:l.default.PropTypes.number,storageKey:l.default.PropTypes.string,storage:l.default.PropTypes.oneOf(["ali","c","qn"]),format:l.default.PropTypes.oneOf(["jpg","jpeg","png","gif","bmp","ico"]),bgClassNames:l.default.PropTypes.array,userClassName:l.default.PropTypes.string},designer:{size:l.default.PropTypes.string,assetType:l.default.PropTypes.string,minimal:l.default.PropTypes.bool,allowColors:l.default.PropTypes.bool,footerSection:l.default.PropTypes.bool}},oe=function(){return{data:{url:"",textColor:"light",sizing:"cover",backgroundVariation:"",videoUrl:"",videoHtml:"",userClassName:"",bgClassNames:[]},designer:{size:"background",assetType:"background",minimal:!1,allowColors:!0,footerSection:!1}}},se=_.default.createPageComponent({displayName:"BackgroundEditor",mixins:[(0,B.default)("editor"),R.default,j.default],bobcatPropTypes:ie,getBobcatDefaultProps:oe,componentWillMount:function(){this.initMeta({currentType:E.default.getInChina()||!this._hasVideoBg()?"image":"video",showVideoPanel:!1})},componentDidMount:function(){this.getData("style")&&this.updateData({sizing:this.getData("style")})
if(this.getData("selectedClassName")){var e=this.getData("selectedClassName")
e.indexOf("strikingly-dark-text")!==-1?this.updateData({textColor:"dark"}):e.indexOf("strikingly-text-overlay")!==-1?this.updateData({textColor:"overlay"}):this.updateData({textColor:"light"})}T.default.loadImageEditor()},componentDidUpdate:function(e){"normal"===e._state&&"editor"===this.props._state&&(0,g.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").addClass("background-editor-opened")
if("editor"===e._state&&"normal"===this.props._state){(0,g.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").removeClass("background-editor-opened")
this._setShowVideoPanel(!1)}},componentWillUnmount:function(){},_hasImage:function(){var e=O.createImage(this.dtProps).getUrl(this.dsProps.size)
this._dataBeforePreview&&(e=O.createImage(this._dataBeforePreview).getUrl(this.dsProps.size))
return S.imageHasContent(e)},_hasVideoBg:function(){var e=this.dtProps.videoHtml
this._dataBeforePreview&&(e=this._dataBeforePreview.videoHtml)
return!!e},_hasOverlay:function(){return"overlay"===this.dtProps.textColor},_needToShowRemoveButton:function(){return this._hasImage()||this._hasVideoBg()},_changePositionOfAddVideoPanel:function(){var e=(0,g.default)(this.refs.componentDOM),t=e.find(".bg-video-panel"),n=e.find(".add-video-btn")
t.css({top:n.closest(".clearfix").position().top-31+"px"})},_storePreviewData:function(){ee.default.isBackgroundPreviewOn=!0
this.updateMeta({isPreview:!0})
this._dataBeforePreview=this.getDefaultBinding().toJS()},_clearPreviewData:function(){ee.default.isBackgroundPreviewOn=!1
this.updateMeta({isPreview:!1})
this._dataBeforePreview&&(this._dataBeforePreview=null)},_restorePreviewData:function(){ee.default.isBackgroundPreviewOn=!1
this.updateMeta({isPreview:!1})
if(this._dataBeforePreview){this.updateData(L.default.deleteMeta(this._dataBeforePreview))
this._dataBeforePreview=null}},_getImageProps:function(){return y.default.extend({},this.props,{storePreviewData:this._storePreviewData,clearPreviewData:this._clearPreviewData,restorePreviewData:this._restorePreviewData,showImageOptions:this._hasImage()&&!this._hasVideoBg(),showDefaultColor:this._isAllowUserClassName()})},_isAllowUserClassName:function(){var e=this.dtProps.bgClassNames.length
return!(!e||!this.dsProps.allowColors)},_getVideoProps:function(){return y.default.extend({},this.props,{storePreviewData:this._storePreviewData,clearPreviewData:this._clearPreviewData,restorePreviewData:this._restorePreviewData,hasVideo:this._hasVideoBg(),changePositionOfAddVideoPanel:this._changePositionOfAddVideoPanel})},_onChangeUrlByAdmin:function(e){this.updateData({url:e.target.value})},_onChangeOverlayByAdmin:function(e){this.updateData({textColor:e.target.checked?"light":"overlay"})
this.savePage()},_onClickSwitchType:function(e){this._setCurrentType(e)},_onClickRemove:function(){this.updateData((0,J.dataForEmptyBackground)())
this._clearPreviewData()
this.savePage()},_onClickSave:function(){this.savePage()
this.updateState("normal")},_notifyNative:function(e,t){return null},_rotateClassNames:function(e){var t=this.dtProps,n=t.bgClassNames,i=t.userClassName,o=""
if(i){var s=n.indexOf(i)
o=k.default.getSectionBackgroundByIndex(s+1,n)}else o=n[e]
this.updateData({userClassName:o})},_onClickChangeColor:function(){var e=(0,g.default)(this.refs.componentDOM).closest(".s-section"),t=e.css("backgroundColor"),n=""
this._rotateClassNames(0)
n=e.css("backgroundColor")
t===n&&this._rotateClassNames(1)
this.savePage()},_onToggleCompression:function(){this.updateData({noCompression:!this.props.noCompression})},renderNativeWeb:function(){var e=this,t=this._hasImage(),n=t?{position:"static"}:{}
return l.default.createElement("div",{className:"s-component s-background",ref:"componentDOM",style:n},t?a("div",{className:"s-background-editor-wrapper",onClick:function(t){return e._notifyNative(t,X.default.BACKGROUND_CLICK_MESSAGE)}},void 0):a("div",{className:"s-component-editor"},void 0,a("div",{className:"native-add-background-button",onClick:function(t){return e._notifyNative(t,X.default.CLICK_ADD_BACKGROUND_MESSAGE)}},void 0,i("Editor|Add Background"))))},renderMinimalEditor:function(){return l.default.createElement("div",{className:"s-component s-background",ref:"componentDOM"},a("div",{className:"s-component-editor minimal-size",title:i("Change background color"),onClick:this._onClickChangeColor},void 0,a("div",{className:"title clickable"},void 0,a("div",{className:"s-current-bg-thumbnail "+this.dtProps.userClassName},void 0))))},renderFullBackgroundEditor:function(){var e=this,t=u.default,o=h.default.DOM.input,s=n(2235),r=n(2236),c=E.default.getInChina(),d=E.default.getIsSxl(),m=this._getCurrentType(),f=ne.default.isAdmin(),g=ne.default.isSupport(),v=this.isIframeEditing()
return l.default.createElement("div",{ref:"componentDOM",className:"s-component s-background"+this.addIframeEditingClass()},a("div",{className:"s-component-editor dark-bg",onClick:this.onToggleMobileViewEditorBox},void 0,a(p.default,{className:"title small center clickable"+(v?" hidden":""),onTap:this.toggleEditor},void 0,this.isState("editor")?a("div",{className:"minus"},void 0,a("i",{className:"entypo-down-open-mini"})):a("div",{className:"plus"},void 0,a("i",{className:"entypo-right-open-mini"})),i("Background")),a(t,{},void 0,this.isState("editor")?a(W.default,{component:l.default.DOM.div,className:"main-editor"},void 0,c||d?null:a(K.default,{labelLeft:i("IMAGE"),labelRight:i("VIDEO"),checkedLeft:"image"===m,checkedRight:"video"===m,onClickLeft:function(){return e._onClickSwitchType("image")},onClickRight:function(){return e._onClickSwitchType("video")}}),"image"===m?l.default.createElement(s,this._getImageProps()):l.default.createElement(r,this._getVideoProps()),this._needToShowRemoveButton()?a("div",{className:"clearfix mb"},void 0,a("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickRemove},void 0,i("Remove"))):null,a("div",{className:"clearfix"},void 0,a("div",{className:"s-btn green small done-button no-margin",onClick:this._onClickSave},void 0,i("Save"))),f||g?a("div",{style:{overflow:"hidden"}},void 0,a("div",{className:"separator"},void 0,a("hr",{})),"ADMIN ONLY:",a("br",{}),a(o,{type:"text",name:"url",value:this.dtProps.url,onChange:this._onChangeUrlByAdmin}),this._hasVideoBg()?a("div",{},void 0,a(o,{type:"checkbox",checked:!this._hasOverlay(),onChange:this._onChangeOverlayByAdmin}),"Check to remove overlay"):"image"===m&&a("div",{style:{marginTop:"30px"},rel:"tooltip-left",title:i("Editor|Notice: No compression will make image slower to load!")},void 0,a(G.default,{label:"No compression",checked:this.props.noCompression,onToggle:this._onToggleCompression}))):null):null)))},render:function(){var e=E.default.getBackgroundForAllSections()
return this.dsProps.minimal?e&&!this.dsProps.footerSection?this.renderFullBackgroundEditor():this._isAllowUserClassName()?this.renderMinimalEditor():null:this.renderFullBackgroundEditor()}})
se.bobcatPropTypes=ie
se.getBobcatDefaultProps=oe
t.default=se
e.exports=t.default}).call(t,n(9))},2210:function(e,t,n){"use strict"
var i,o,s,a,r
o=n(1)
i=n(15)
s=n(315)
a=n(848)
r=!1
e.exports=i.create({displayName:"ItemTextGroup",propTypes:{section:o.PropTypes.object.isRequired,itemBinding:o.PropTypes.object.isRequired,className:o.PropTypes.string,binding:o.PropTypes.object.isRequired},shouldComponentUpdateOverride:function(){return!0},render:function(){var e,t,n,i,a,l,c,u,d,p,m,h
m=this.props.section
c=this.props.itemBinding
h=null==(d=this.props.showItemSubtitle)||d
a=this.props.deprecateItemSubtitle
n=null!=(p=this.props.className)?p:""
if(!m)throw new Error("ItemTextGroup is expecting a section prop!")
if(!c)throw new Error("ItemTextGroup is expecting an itemBinding prop!")
if(h){i=(l=m.getThemeFeature("itemSubtitleDefaultStyle"))?{defaultStyle:l}:i={}
u=o.createElement("div",{className:"s-item-subtitle"},o.createElement(s,Object.assign({tagName:"h6",textType:"body"},i,m.getComponentProps("text2",c))))
e="text3"
t="text1 text2 text3"}else{u=null
e="text2"
t="text1 text2"}return m.sbAnyHasContent(t,{parentBinding:c})||this.props.children?o.createElement("div",{className:"s-item-text-group "+n},m.sbHasContent("text1",{parentBinding:c})?o.createElement("div",{className:"s-item-title"},o.createElement(s,Object.assign({tagName:"h3",textType:"heading"},m.getComponentProps("text1",c)))):void 0,h?a?(!r&&m.sbHasContent("text2",{parentBinding:c,showOnly:!1})?r=!0:void 0,r?u:void 0):u:void 0,o.createElement("div",{className:"s-item-text"},o.createElement(s,Object.assign({tagName:"div",textType:"body"},m.getComponentProps(e,c)))),o.createElement("div",{className:m.sbUniformTextAlignment(t,{parentBinding:c})},this.props.children)):null}})},2211:function(e,t,n){"use strict"
var i,o,s,a,r,l,c,u,d
c=n(13)
i=n(6)
l=n(5)
r=n(790)
o=n(836)
u=n(1970)
d=n(1969)
s=n(2210)
a=n(2201)
e.exports={mixins:[a],displayName:"NewMediaSection",componentWillMount:function(){var e,t,i,o,s
o=l.getThemeName()
t=this._getLayoutVariation()
i=this.getDefaultBinding().get("template_name")
t.split("-").length>=2&&("perspective"===o?["mediaLeft","mediaRight","center"].includes(t.split("-")[0])||(t="center-"+t):["mediaLeft","mediaRight","center"].includes(t.split("-")[0])&&(t=t.split("-").slice(1).join("-")))
e=n(2205)
s="new_media"===i?"":i
return this._getLayoutBinding().sub("layout_variation").set(e.getDefaultLayoutKey(o,t,s))},componentDidUpdate:function(){var e
e=this._getLayoutVariation()
if(e.indexOf("col")===-1){i(c.findDOMNode(this)).find(".s-mh-nudge").css({"padding-top":0})
return i(c.findDOMNode(this)).find(".s-item-media-wrapper").css({"line-height":"","min-height":""})}},_getLayoutOptions:function(){var e,t
t=l.getThemeName()
e=n(2205)
return e.getLayoutOptions(t)},_getSectionType:function(){var e,t
e=l.getThemeName()
t=0
"perspective"===e&&(t=1)
switch(this._getLayoutVariation().split("-")[t]){case"col":return"s-columns-section"
case"row":return"s-rows-section"
case"media":return"s-media-section"}},_renderRepeatable:function(e){var t,i,a,c,p,m,h,f,g,v,y,b,_,w,E,C,x
t=n(2205)
E=l.getThemeName()
g=this._getLayoutVariation()
a=this.getComponentBinding(e)
v=this.getRepeatableBinding(e)
h=this._getLayoutBinding()
y=a.get("id")
f="function"==typeof(i=t.getLayout(E,g))?i(this):void 0
_=null!=(b="function"==typeof f.repeatableClass?f.repeatableClass(this):void 0)?b:f.repeatableClass
w=this.getComponentProps("repeatable1")
E=l.getThemeName()
C=0
"perspective"===E&&(C=1)
c="media"===this._getLayoutVariation().split("-")[C]
p="fresh"===E&&"s-columns-section"===this._getSectionType()
m="s-rows-section"===this._getSectionType()
x=m&&this.getThemeFeature("verticalAlignRowsSection")
return React.createElement(u,Object.assign({className:_+("editor"===a.get("_state")?" s-arranging":"")},w),a.get("list").map(function(e){return function(t,n){var i,a,l,u,m,g,b,_,w,E,C,k,N,S,P,T,M,O,I,L,D,B,A,j
u=v.sub(n)
M={default:u,layout:h}
b=e.sbHasContent("media1",{parentBinding:u})
A=e.sbAnyHasContent("text1 text2 text3",{parentBinding:u})
a=e.sbHasContent("button1",{parentBinding:u})
O="editor"!==e.getComponentBinding("button1",u).get("_state")&&!e.sbHasContent("button1",{parentBinding:u,showOnly:!1})
I=A||a&&f.buttonClass
m=null!=(w="function"==typeof f.itemClass?f.itemClass(e,n):void 0)?w:f.itemClass
l=null!=(E="function"==typeof f.innerItemClass?f.innerItemClass(e,n):void 0)?E:f.innerItemClass
l+=x?" s-rva":""
g=null!=(C="function"==typeof f.mediaClass?f.mediaClass(e,n):void 0)?C:f.mediaClass
L=(null!=(k="function"==typeof f.singleMediaClass?f.singleMediaClass(e,n):void 0)?k:f.singleMediaClass)||g
B=null!=(N="function"==typeof f.textClass?f.textClass(e,n):void 0)?N:f.textClass
D=(null!=(S="function"==typeof f.singleTextClass?f.singleTextClass(e,n):void 0)?S:f.singleTextClass)||B
i=null!=(P="function"==typeof f.buttonClass?f.buttonClass(e,n):void 0)?P:f.buttonClass
j=null!=(T="function"==typeof f.textInnerClass?f.textInnerClass(e,n):void 0)?T:f.textInnerClass
_="s-item-media-wrapper "
_+=I?g:L
_+=x?" s-rva-media":""
B=b?B:D
B+=x?" s-rva-text":""
return React.createElement(d,Object.assign({className:m,index:n,parentId:y,binding:M},e._getRepeatableItemProps(v,n)),React.createElement("div",{className:"clearfix"},React.createElement("div",{className:l},b&&React.createElement("div",{className:_},React.createElement("div",{className:"s-item-media-group"},React.createElement(r,Object.assign({size:p?"320x320#":c?"large":"medium"},e.getReduxComponentProps("media1",u))))),I&&React.createElement("div",{className:B},React.createElement(s,{deprecateItemSubtitle:c,section:e,itemBinding:u,binding:u,className:b?j:""},i&&a&&React.createElement("div",{className:i+(O?" s-placeholder-button":"")},React.createElement(o,Object.assign({},e.getComponentProps("button1",u),{smallButton:!0}))))))))}}(this)).toArray())},render:function(){return this.getTemplate().apply(this)}}},2212:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=(n(2231),n(2198))
n(2197)
e.exports=function(){return o.createElement("div",i({className:"s-new-media-section s-section "+this._getSectionType()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(a,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})),"\n    ",this._renderRepeatable("repeatable1"),"\n  "))}},2213:function(e,t,n){"use strict"
function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}var o,s,a,r,l,c,u,d,p,m,h,f,g,v,y,b,_,w,E,C,x,k,N,S,P,T,M,O,I,L,D,B,A,j
k=n(1)
s=n(6)
P=n(3)
r=n(15)
B=n(792)
N=n(223)
c=n(11)
E=n(840)
u=n(131)
h=n(58)
m=n(57)
p=n(18)
b=n(503)
w=n(231).default
S=n(168).default
_=n(795)
A=n(842)
l=n(234)
g=n(2217).default
I=n(30)
y=n(55)
f=n(1975)
d=n(305)
O=n(36)
C=n(67)
x=n(5)
D=n(44)
j=n(2257)
L=180
M=function(){return P.extend({type:"Video"},l.Video().toJS())}
T=function(){return P.extend({type:"Image"},l.Image().toJS())}
v=r.createPageComponent((o={displayName:"GalleryList",mixins:[D("editor")],bobcatPropTypes:{data:{binding:k.PropTypes.object,sources:k.PropTypes.array},designer:{layout:k.PropTypes.string,sortableContainment:k.PropTypes.string,eagerLoad:k.PropTypes.bool}},getBobcatDefaultProps:function(){return{designer:{sortableContainment:"parent"},data:{layout:"normal"},internal:{isArranging:!1}}},componentWillMount:function(){var e
this.initMeta({selectedKey:""})
this._columnsNum=1
this._baseItemNum=null!=(e=u.get("forceGalleryItemsNumPerPage"))?e:50
this._pagesNum=1
this._lastPagesNum=this._pagesNum
this._lastBaseItemNum=this._baseItemNum
return this._resizeFn=P.debounce(this._resizeFn,10)},componentDidMount:function(){this._enableFancyBox()
if(this.props.layout.indexOf("vertical")===-1){this._resizeFn()
s(window).on("resize",this._resizeFn)}},componentWillUnmount:function(){},componentDidUpdate:function(){if(this._lastPagesNum!==this._pagesNum||this._lastBaseItemNum!==this._baseItemNum){this._enableFancyBox()
this._lastPagesNum=this._pagesNum
return this._lastBaseItemNum=this._baseItemNum}}},i(o,"componentWillUnmount",function(){return s(window).off("resize",this._resizeFn)}),i(o,"nativeAddImage",function(e){return this._addImage(y.createImage(e.image),e.newItemDirection)}),i(o,"_onNativeClickManage",function(){var e
e=this.getData("isManagingFromNative")||!1
return this.setData("isManagingFromNative",!e)}),i(o,"_isGalleryEmpty",function(){return 0===this.getData("sources").size}),i(o,"_updateLayoutMeta",function(){var e,t,n,i,o
e=s(this.refs.galleryListDOM)
t=Math.min(6,Math.max(2,Math.floor(e.width()/L)))
n=this._columnsNum
i={2:20,3:30,4:40,5:50,6:60}
if(t!==n){this._columnsNum=t
this._baseItemNum=null!=(o=u.get("forceGalleryItemsNumPerPage"))?o:i[this._columnsNum]}return t!==n}),i(o,"_resizeFn",function(){if(this._updateLayoutMeta())return this.forceUpdate()}),i(o,"_needToShowPagination",function(){return this.getData("sources").size>this._pagesNum*this._baseItemNum||1!==this._pagesNum}),i(o,"_onSelectItem",function(e){return this.updateMeta(e,"selectedKey")}),i(o,"_onDeleteItem",function(e){return null!=this._visualDelete?this._visualDelete(e):this._deleteItem(e)}),i(o,"_isInNativeWeb",function(){return!1}),i(o,"_onClickNativeAddImage",function(e){var t
null==e&&(e="bottom")
t=n(54)
_.setTarget(this)
return _.sendMessageToNative({type:S.GALLERY_ADD_IMAGE_MESSAGE,payload:A.convertToCamel(this.dtProps.type,t.dtPropsBuilder(this)),meta:Object.assign(t.buildMetaFromComponent(this),{direction:e})})}),i(o,"_getGalleryItemProps",function(e){var t,n
t=e.get("id")
n=this.getMeta("selectedKey")
return{binding:{default:e},_isAddInIframe:e.get("_isAddInIframe"),path:e._path,dataProps:l[e.get("type")](e.get()),onSelectItem:this._onSelectItem,deleteItem:this._onDeleteItem,key:t,selected:t===n,layout:this.props.layout,eagerLoad:this.props.eagerLoad,sideMenuOpened:E.getSideMenuOpenState().opened}}),i(o,"_getGalleryClassName",function(){var e,t
e=[]
this.props.layout.indexOf("fullWidth")!==-1&&e.push("full-width")
t=Math.min(this._pagesNum*this._baseItemNum,this.getData("sources").size)
e.push("s-gallery-columns-"+this._columnsNum)
return e.join(" ")}),i(o,"_deleteItem",function(e){C.deleteRepeatItem({binding:this.getDefaultBinding().sub("sources"),index:e})
return this.savePage()}),i(o,"_onReorder",function(e){var t
t=this.getDefaultBinding().sub("sources")
C.reorderRepeatable(e,t)
return this.savePage()}),i(o,"_getNewImageProps",function(e){return e.dataToSave()}),i(o,"_addVideo",function(){var e,t
e=this.getData("sources")
t=M()
e=C.addRepeatItem({binding:this.getDefaultBinding().sub("sources"),newItem:t})
this.savePage()
return e.last().toJS()}),i(o,"_addImage",function(e,t){var n,i
null==t&&(t="bottom")
n=this.getData("sources")
i=T()
P.extend(i,e.dataToSave())
n=C.addRepeatItem({binding:this.getDefaultBinding().sub("sources"),newItem:i,position:"top"===t?0:null})
this.savePage()
return N.track("Editor - Upload Image Gallery")}),i(o,"_onClickAddImage",function(){this.updateMeta("","selectedKey")
this._pendingTimestamp=null
return a.pick({mode:"multi",initialTabIdx:0,hideTabs:[2],handlers:{itemUploaded:function(e){return function(t){return e._addImage(t)}}(this),itemSelected:function(e){return function(t){var n,i,o,s
s=[]
for(n=0,o=t.length;n<o;n++){i=t[n]
s.push(e._addImage(i))}return s}}(this)},pendingTimestamp:this._pendingTimestamp})}),i(o,"_onClickAddVideo",function(){var e
e=this._addVideo()
return this.updateMeta(e.id,"selectedKey")}),i(o,"_onClickShowMore",function(){this._pagesNum+=1
return this.forceUpdate()}),i(o,"_onClickShowLess",function(){this._pagesNum=1
this.forceUpdate()
s("body").animate({scrollTop:s(this.refs.galleryListDOM).closest(".s-gallery-section").offset().top},1e3)
if("perspective"===x.getTheme().get("name"))return s(window).resize()}),i(o,"_enableFancyBox",function(){return n.e(0,function(e){return function(){var t
n(1950)
if(!e.isEditMode()){t=d.GALLERY(s(e.refs.galleryListDOM))
f.transformVideoSrc(s(e.refs.galleryListDOM))
return t.fancybox(Object.assign({},f.onlyCloseBtnOpts,{baseTpl:f.getCustomArrowTpl(),caption:f.getCaption,beforeMove:f.indicatorBeforeMove,onInit:f.indicatorOnInit}))}}}(this))}),i(o,"_renderForEditor",function(){}),i(o,"_renderForShow",function(){var e,t
t=this._baseItemNum*this._pagesNum
e=this.getDefaultBinding().sub("sources")
return e.get().map(function(n){return function(i,o){var s
if(o<t){s=e.sub(o)
return k.createElement(g,Object.assign({index:o},n._getGalleryItemProps(e.sub(o)),{key:i.get("id")}))}}}(this))}),i(o,"render",function(){return j.apply(this)}),o))
e.exports=v},2214:function(e,t,n){(function(t){"use strict"
var i,o,s,a,r,l,c,u
u=n(3)
c=n(2198)
s=n(319)
r=n(790)
i=n(836)
o=n(794)
l=n(5)
a=n(2201)
e.exports={mixins:[a],displayName:"NewHeroSection",propTypes:{eagerLoad:React.PropTypes.bool.isRequired,binding:React.PropTypes.object.isRequired},componentWillMount:function(){var e,t,i,o
o=l.getThemeName()
t=this._getLayoutVariation()
i=this.getDefaultBinding().get("template_name")
e=n(2206)
return this._getLayoutBinding().sub("layout_variation").set(e.getDefaultLayoutKey(o,t,i))},_getLayoutOptions:function(){var e,t
t=l.getThemeName()
e=n(2206)
return e.getLayoutOptions(t)},_getSectionType:function(){return this._showImage()?"s-hero-section":"s-signup-section"},_getLayout:function(){return u.camelCase(this._getLayoutVariation())},_getLayoutObj:function(){var e,t,i,o,s
e=n(2206)
o=this._getLayoutVariation()
s=l.getThemeName()
i="function"==typeof(t=e.getLayout(s,o))?t(this):void 0
return i},_getType:function(){return this._getLayoutObj().type},_showImage:function(){return this._getLayoutObj().showImage},_renderContent:function(){var e,t,n,a,l,u,d,p,m,h,f
u=this._getLayoutObj()
l=u.layoutClass,d=u.mediaClass,m=u.textClass,h=u.textOffsetClass,f=u.type,p=u.showImage
e="button"===f&&this.sbHasContent("button1")
t="button"===f&&this.sbHasContent("button1",{showOnly:!1})
n="images"===f&&this.sbAnyHasContent("image1 image2")
a=this.sbAnyHasContent("media1")
return React.createElement("div",{className:l},React.createElement("div",{className:d+(a?"":" empty-media")},p&&React.createElement(r,Object.assign({},this.getReduxComponentProps("media1")))),React.createElement("div",{className:m},React.createElement("div",{className:h},React.createElement(c,{section:this,binding:this.getDefaultBinding()}),(e||n||"signup"===f)&&React.createElement("div",{className:(t?"":"empty-button")+" "+this.sbUniformTextAlignment("text1 text2",{parentBinding:this.getDefaultBinding()})},"button"===f&&React.createElement("div",{className:"s-button-group ib"},React.createElement(i,Object.assign({},this.getComponentProps("button1")))),"signup"===f&&React.createElement("div",{className:"s-email-form-container"},React.createElement(o,Object.assign({signup:!0},this.getComponentProps("email1")))),"images"===f&&React.createElement("div",{className:"s-image-wrapper"},React.createElement("div",{className:"s-image-item"},React.createElement(s,Object.assign({},this.getReduxComponentProps("image1"),{eagerLoad:!0}))),React.createElement("div",{className:"s-image-item"},React.createElement(s,Object.assign({},this.getReduxComponentProps("image2"),{eagerLoad:!0}))))))))},render:function(){t("Editor|Hero")
t("Editor|Great for the top of a page. Add images, a button, or even a sign-up form.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2215:function(e,t,n){"use strict"
var i,o,s,a,r,l,c,u
r=n(1)
a=n(5)
l=n(1970)
c=n(1969)
o=n(2210)
i=n(836)
u=n(315)
s=n(2201)
e.exports={mixins:[s],displayName:"NewTextSection",componentWillMount:function(){var e,t,i
e=n(2200)
e.removeOldBackgroundForText(this)
i=a.getThemeName()
t=n(2202)
return this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(i,this._getLayoutVariation()))},_getLayoutOptions:function(){var e,t
t=a.getThemeName()
e=n(2202)
return e.getLayoutOptions(t)},_getPositionLayout:function(){return this._getLayoutVariation().split("-")[1]},_getTitleOverlayClass:function(){var e
e=this._getLayoutVariation()
return this.sbAnyHasContent("text1 text2",{showOnly:!1})?e.indexOf("overlay")!==-1?"s-persp-overlay":e.indexOf("card")!==-1?"s-persp-card":void 0:""},_getSectionType:function(){var e
e=a.getThemeName()
switch(this._getLayoutVariation().split("-")[0]){case"text":return"s-text-section"
case"box":return"s-info-section"}},_renderPerspectiveText:function(e){var t,n,i,o,s,a
t=this.getComponentBinding("repeatable1")
n=this._getLayoutBinding()
i=this.getRepeatableBinding("repeatable1")
o=i.get().size
s=function(o){return function(s,a){var l,d,p,m,h,f
if(a>=3)return null
p=t.get("id")
l=i.sub(a)
d=null!=(m="function"==typeof e.itemClass?e.itemClass(o,a):void 0)?m:e.itemClass
f=null!=(h="function"==typeof e.textClass?e.textClass(o,a):void 0)?h:e.textClass
return r.createElement(c,Object.assign({className:d,binding:{default:l,layout:n},parentId:p,index:a},o._getRepeatableItemProps(i,a)),r.createElement("div",{className:"s-persp-column"},r.createElement("div",{className:f},r.createElement("div",{className:"s-title-group"},o.sbHasContent("text1",{parentBinding:l})?r.createElement("div",{className:"s-title"},r.createElement(u,Object.assign({tagName:"h2",textType:"title"},o.getComponentProps("text1",l)))):void 0,r.createElement("div",{className:"s-item-text"},r.createElement(u,Object.assign({tagName:"div",textType:"body"},o.getComponentProps("text2",l))))))))}}(this)
a=this.getComponentProps("repeatable1")
return r.createElement(l,Object.assign({className:(o>=3?"s-hide-add-button":"")+("editor"===t.get("_state")?" s-arranging":"")},a),t.get("list").map(s.bind(this)).toArray())},_renderRepeatable:function(e){var t,s,u,d,p,m,h,f,g,v
t=n(2202)
v=a.getThemeName()
u=this.getComponentBinding(e)
d=this._getLayoutBinding()
m=this.getRepeatableBinding(e)
p="function"==typeof(s=t.getLayout(v,this._getLayoutVariation()))?s(this):void 0
f=p.repeatableClass
if("s-text-section"===this._getSectionType()&&"perspective"===v)return this._renderPerspectiveText(p)
h=function(e){return function(t,n){var s,a,l,h,f,g,v,y,b,_,w
f=u.get("id")
l=m.sub(n)
b={default:l,layout:d}
h=null!=(g="function"==typeof p.itemClass?p.itemClass(e,n):void 0)?g:p.itemClass
w=null!=(v="function"==typeof p.textClass?p.textClass(e,n):void 0)?v:p.textClass
s=null!=(y="function"==typeof p.buttonClass?p.buttonClass(e,n):void 0)?y:p.buttonClass
a=e.sbHasContent("button1",{parentBinding:l})
_="editor"!==e.getComponentBinding("button1",l).get("_state")&&!e.sbHasContent("button1",{parentBinding:l,showOnly:!1})
return r.createElement(c,Object.assign({index:n,className:h,parentId:f,binding:b},e._getRepeatableItemProps(m,n)),r.createElement("div",{className:w},r.createElement(o,{section:e,itemBinding:l,binding:l,showItemSubtitle:!1},s&&a&&r.createElement("div",{className:s+(_?" s-placeholder-button":"")},r.createElement(i,Object.assign({},e.getComponentProps("button1",l),{smallButton:!0}))))))}}(this)
g=this.getComponentProps("repeatable1")
return r.createElement(l,Object.assign({className:f+("editor"===u.get("_state")?" s-arranging":"")},g),m.get().map(h.bind(this)).toArray())},render:function(){return this.getTemplate().apply(this)}}},2216:function(e,t,n){"use strict"
var i,o,s,a,r,l,c,u,d,p,m
c=n(1)
o=n(12)
l=n(5)
u=n(1970)
d=n(1969)
s=n(2210)
i=n(836)
p=n(315)
r=n(790)
m=n(2198)
a=n(2201)
e.exports={mixins:[a],displayName:"NewTitleSection",componentWillMount:function(){var e,t,i
i=l.getThemeName()
"normal"!==(t=this._getLayoutVariation())&&"subBottom"!==t&&"center"!==t&&"skinny"!==t||"perspective"===i||this.getComponentBinding("media1").sub("image").merge(o.fromJS({url:"",thumbnail_url:"",s:null,storage:null,storageKey:null,format:null}))
e=n(2208)
return this._getLayoutBinding().sub("layout_variation").set(e.getDefaultLayoutKey(i,this._getLayoutVariation()))},_getLayoutOptions:function(){var e,t
t=l.getThemeName()
e=n(2208)
return e.getLayoutOptions(t)},_getSectionType:function(){var e,t
t=l.getThemeName()
e=""
this._getLayoutVariation().indexOf("full")!==-1&&(e+="s-section-full ")
"persona"===t&&(e+="cta"===this.getDefaultBinding().get("template_name")?"s-cta-section":"s-title-section")
return e},_renderContent:function(){var e,t,o,s,a,u,d,p,h,f,g,v,y,b,_,w
w=l.getThemeName()
e=n(2208)
f="function"==typeof(t=e.getLayout(w,this._getLayoutVariation()))?t(this):void 0
g=f.outerContainerClass,d=f.innerContainerClass,v=f.outerMediaClass,p=f.innerMediaClass,_=f.textClass,o=f.buttonClass,h=f.isSubtitleOnBottom
s=this.sbHasContent("button1")
a=this.sbHasContent("button1",{showOnly:!1})
u=this.sbHasContent("media1")
y="editor"!==this.getComponentBinding("button1").get("_state")&&!this.sbHasContent("button1",{showOnly:!1})
b="editor"!==this.getComponentBinding("media1").get("_state")&&!this.sbHasContent("media1",{showOnly:!1})
return c.createElement("div",{className:g},c.createElement("div",{className:d},u&&v&&c.createElement("div",{className:v},c.createElement("div",{className:p},c.createElement(r,Object.assign({},this.getReduxComponentProps("media1"),{showBlackButton:!0})))),u&&!v&&c.createElement("div",{className:p+(b?" s-placeholder-button":"")},c.createElement(r,Object.assign({},this.getReduxComponentProps("media1"),{showBlackButton:!0}))),c.createElement(m,{className:_,contentCheck:"button1",subtitleOnTop:!h,section:this,binding:this.getDefaultBinding()}),s&&c.createElement("div",{className:o+(y?" s-placeholder-button":"")},c.createElement(i,Object.assign({},this.getComponentProps("button1"))))))},render:function(){return this.getTemplate().apply(this)}}},2217:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i
if("object"===("undefined"==typeof Reflect?"undefined":r(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i)
else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a)
return s>3&&a&&Object.defineProperty(t,n,a),a}
Object.defineProperty(t,"__esModule",{value:!0})
var c=n(1),u=n(13),d=n(3),p=n(6),m=n(66),h=n(167),f=n(505),g=n(55),v=(n(30),n(64)),y=n(68),b=(n(842),n(843),n(168),n(173)),_=n(524),w=n(525),E=(n(321),{designer:{type:c.PropTypes.string,selected:c.PropTypes.bool,isArranging:c.PropTypes.bool,index:c.PropTypes.number,showType:c.PropTypes.string,layout:c.PropTypes.string,eagerLoad:c.PropTypes.bool,sideMenuOpened:c.PropTypes.bool,_isAddInIframe:c.PropTypes.bool},callbacks:{updateItemHeight:c.PropTypes.func,onSelectItem:c.PropTypes.func.isRequired,deleteItem:c.PropTypes.func.isRequired}}),C=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._afterClickCancel=function(){n._isEmptyItem()&&n._onClickDeleteButton(n.props.index)}
n._deselect=function(){n._isEmptyItem()?n._onClickDeleteButton(n.props.index):n.updateState("normal")}
n._isEmptyItem=function(){switch(n.getData("type")){case"Image":return d.isEmpty(n.getData("url"))
case"Video":return d.isEmpty(n.getData("url"))||""===n.getData("html")
default:return!1}}
n._onImageLoaded=function(e){var t=e.h&&e.w?e.h/e.w:0
if("Image"===n.getData("type")&&"verticalGallery"!==n.props.showType){var i=p(u.findDOMNode(n.refs.imageContent)),o=i.find("img"),s=void 0
if(t<1){s=100/t
o.css({position:"absolute",width:s+"%",top:0,left:-(s-100)/2+"%"})}else if(t>1){newHeight=100*t
o.css({position:"absolute",width:"100%",top:-(newHeight-100)/2+"%",left:0})}}}
n._getPureDataProps=function(){var e=n.props,t=e.dataProps,i=e.updateItemHeight,o=e.eagerLoad,s=e.path
return{dataProps:t,path:s,updateItemHeight:i,onImageLoaded:n._onImageLoaded,eagerLoad:o}}
n._getImageProps=function(){return Object.assign({afterUploaded:n._deselect,afterSelected:n._deselect,afterRemove:function(){return n._onClickDeleteButton(n.props.index)},afterSave:function(){n._deselect()
n.savePage()}},n._getPureDataProps())}
n._getVideoProps=function(){return Object.assign({afterRemove:function(){return n._onClickDeleteButton(n.props.index)},beforeUpload:function(){return n.setState({isLoading:!0})},uploadFailed:function(){return n.setState({isLoading:!1})},uploadSucceed:function(){n.setState({isLoading:!1})
n.setTimeout(function(){n._deselect()
n.savePage()},100)}},n._getPureDataProps())}
n._getThumbSize=function(){var e=n.props.layout
return e.indexOf("fullWidth")!==-1?"300x300#":e.indexOf("vertical")!==-1?"250x1000>":"200x200#"}
n._getDOMData=function(){var e={"data-type":n.getData("type").toLowerCase()}
switch(n.getData("type")){case"Image":e=Object.assign({href:g.createImage(n.getData()).getUrl("1920x9000>")},e)
case"Video":e=Object.assign({"data-html":n.getData("html"),"data-description":n.getData("description")},e)}return e}
n._getSaveButtonProps=function(){return{onClickCancel:function(){n.onClickCancel()
n._afterClickCancel()},onClickSave:function(){n.setState({saveClicked:!0})}}}
n._restoreSaveClickedState=function(){n.setState({saveClicked:!1})}
n._getSaveButtonClickedProps=function(){return{saveClicked:n.state.saveClicked,restoreSaveClickedState:n._restoreSaveClickedState,fromType:"gallery"}}
n._onMouseEnterDeleteButton=function(){n.setState({showDeleteOverlay:!0})}
n._onMouseLeaveDeleteButton=function(){n.setState({showDeleteOverlay:!1})}
n._onClickDeleteButton=function(e){n.props.deleteItem(e)}
n._onClickEditItem=function(e){if(!n.state.showDeleteOverlay){n.props.onSelectItem(n.getData("id"))
n.onClickEditor()}}
n._adjustEditorPosition=function(){if("verticalGallery"!==n.props.showType){var e=p(n.refs.itemEditor).find(".s-component-editor")
if(e.length){var t=n.props.sideMenuOpened?200:0,i=p(window).width()-e.width(),o=e.offset().left
o<t&&e.css("left","0")
o>i&&e.css({marginLeft:i-o+"px"})}}}
n.state={showDeleteOverlay:!1,isLoading:!1,saveClicked:!1}
return n}s(t,e)
a(t,[{key:"componentWillMount",value:function(){this.props.selected&&this.updateState("editor")}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){e.selected&&!this.props.selected&&this.isState("editor")&&this._deselect()}},{key:"_renderEditor",value:function(){return null}},{key:"render",value:function(){var e=this.isState("editor"),t=this.props,n=t.showType,i=t.style,o=t.index,s=this.getData("type")
return c.createElement("div",{style:i,className:"s-component s-gallery-item "+("verticalGallery"===n?"vertical-item":""),"data-sorting-index":o},!1,c.createElement(v,null,!e&&c.createElement(y,{className:"s-component-content",key:this.getData("id")+"content"},c.createElement("div",{className:"image-wrapper"},c.createElement("a",Object.assign({className:"item"},this._getDOMData()),"Image"===s?c.createElement(_.default,Object.assign({ref:"imageContent",showType:n||"galleryItem",thumbSize:this._getThumbSize()},this._getPureDataProps())):c.createElement(w.default.WaypointLazy,Object.assign({ref:"videoContent",showType:n||"galleryItem"},this._getPureDataProps())))))))}}])
return t}(b.default)
C.displayName="GalleryItem"
C.originalProps=E
C=l([m.decorate(f),m.decorate(h)],C)
t.default=C},2218:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(1),u=i(c),d=n(13),p=i(d),m=n(14),h=i(m),f="Select...",g=function(e){function t(e){s(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.state={selected:e.value||{label:e.placeholder||f,value:""},isOpen:!1}
n.mounted=!0
n.handleDocumentClick=n.handleDocumentClick.bind(n)
n.fireChangeEvent=n.fireChangeEvent.bind(n)
return n}r(t,e)
l(t,[{key:"componentWillReceiveProps",value:function(e){e.value&&e.value!==this.state.selected?this.setState({selected:e.value}):e.value||this.setState({selected:{label:e.placeholder||f,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1)
document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1
document.removeEventListener("click",this.handleDocumentClick,!1)
document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){if("mousedown"!==e.type||0===e.button){e.stopPropagation()
e.preventDefault()
this.props.disabled||this.setState({isOpen:!this.state.isOpen})}}},{key:"setValue",value:function(e,t){var n={selected:{value:e,label:t},isOpen:!1}
this.fireChangeEvent(n)
this.setState(n)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,n=(0,h.default)((t={},o(t,this.props.baseClassName+"-option",!0),o(t,"is-selected",e===this.state.selected),t)),i=e.value||e.label||e,s=e.label||e.value||e
return u.default.createElement("div",{key:i,className:n,onMouseDown:this.setValue.bind(this,i,s),onClick:this.setValue.bind(this,i,s)},s)}},{key:"buildMenu",value:function(){var e=this,t=this.props,n=t.options,i=t.baseClassName,o=n.map(function(t){if("group"===t.type){var n=u.default.createElement("div",{className:i+"-title"},t.name),o=t.items.map(function(t){return e.renderOption(t)})
return u.default.createElement("div",{className:i+"-group",key:t.name},n,o)}return e.renderOption(t)})
return o.length?o:u.default.createElement("div",{className:i+"-noresults"},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(p.default.findDOMNode(this).contains(e.target)||this.setState({isOpen:!1}))}},{key:"render",value:function(){var e,t=this.props.baseClassName,n=this.props.disabled?"Dropdown-disabled":"",i="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,s=u.default.createElement("div",{className:t+"-placeholder"},i),a=this.state.isOpen?u.default.createElement("div",{className:t+"-menu"},this.buildMenu()):null,r=(0,h.default)((e={},o(e,t+"-root",!0),o(e,"is-open",this.state.isOpen),e))
return u.default.createElement("div",{className:r},u.default.createElement("div",{className:t+"-control "+n,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this)},s,u.default.createElement("span",{className:t+"-arrow"})),a)}}])
return t}(c.Component)
g.defaultProps={baseClassName:"Dropdown"}
t.default=g},2219:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=(n(315),n(836),n(2197)),r=n(1968),l=n(2267),c=(n(2198),n(2199))
e.exports=function(){return o.createElement(c,i({className:"s-new-title-section s-section "+this._getSectionType()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(a,this.getComponentProps("background1")),o.createElement(l,s.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(r,s.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,"\n  ",this._renderContent(),"\n")}},2220:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=n(2197),r=n(1968),l=n(2229),c=n(2199)
e.exports=function(){return o.createElement(c,i({className:"s-new-hero-section s-section "+this._getSectionType()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(a,s.assign({},{bgClassNames:this.getThemeFeature("backgroundColorClassNames")},this.getComponentProps("background1"))),o.createElement(l,s.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(r,s.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,"\n  ",this._renderContent(),"\n")}},2221:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=(n(315),n(2197)),r=n(1968),l=n(2232),c=n(2198),u=n(2199)
e.exports=function(){return o.createElement(u,i({className:"s-new-text-section s-section "+this._getSectionType()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(a,this.getComponentProps("background1")),o.createElement(l,s.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(r,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"clearfix"},o.createElement("div",{className:"columns sixteen"},o.createElement(c,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()}))),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n      ",this._renderRepeatable("repeatable1"),"\n    ")))}},2222:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(1),d=o(u),p=n(6),m=o(p),h=n(18),f=o(h),g=function(e){function t(e){s(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._onClickLink=n._onClickLink.bind(n)
return n}r(t,e)
c(t,[{key:"componentDidMount",value:function(){"terms-and-conditions"===m.default.url().param("open")&&f.default.openDialog("termsDialog")}},{key:"_onClickLink",value:function(){this.props.onClickLink?this.props.onClickLink():f.default.openDialog("termsDialog")}},{key:"_onClickOpenSettings",value:function(){f.default.openPageSettings({tabName:"legal"})}},{key:"render",value:function(){var e="s-terms-link "+(this.props.className||"")
return l("div",{className:e,style:{position:"relative"}},void 0,!1,l("a",{className:"s-common-link",onClick:this._onClickLink,target:"_blank"},void 0,i("EditorSettings|Terms & Conditions")))}}])
return t}(d.default.Component)
t.default=g
e.exports=t.default}).call(t,n(9))},2225:function(e,t,n){(function(i){"use strict"
function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),p=function e(t,n,i){null===t&&(t=Function.prototype)
var o=Object.getOwnPropertyDescriptor(t,n)
if(void 0===o){var s=Object.getPrototypeOf(t)
return null===s?void 0:e(s,n,i)}if("value"in o)return o.value
var a=o.get
return void 0!==a?a.call(i):void 0},m=n(1),h=s(m),f=n(3),g=s(f),v=n(504),y=s(v),b=n(67),_=s(b),w=n(2213),E=s(w),C=n(2217),x=s(C),k=n(30),N=(o(k),null),S=10,P=function(e){function t(){a(this,t)
var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
e._canRenderLayout=void 0
e._currentIndex=void 0
e._isDragging=!1
e._itemWidth=0
e._columnsNum=3
e._renderList=void 0
e._heightList=void 0
e._itemsList=void 0
e._resizeFn=g.default.debounce(function(){var t=e._updateLayoutMeta()
e._updateSize()
e._canRenderLayout&&(t?e._renderLayout():e.forceUpdate())},100)
e._onDrag=g.default.debounce(function(t,n){if(e._isDragging){var i=e._itemsList[e._currentIndex].listIndex,o=-1
Math.abs(n.position.left)>e._itemWidth/2+S&&(n.position.left>=0?i+=Math.ceil((n.position.left-e._itemWidth/2-S)/(e._itemWidth+S),10):i-=Math.ceil((-n.position.left-e._itemWidth/2-S)/(e._itemWidth+S),10))
i<0&&(i=0)
i>=e._renderList.length&&(i=e._renderList.length-1)
for(var s=e._renderList[i].itemList,a=e._itemsList[e._currentIndex].top+e._heightList[e._currentIndex]*e._itemWidth/2+n.position.top,r=0;r<s.length;r++)if(s[r].top<a&&s[r].bottom>a){o=r
break}var l=e._itemsList[e._currentIndex].listIndex===i
l&&a>s[s.length-1].bottom&&(o=s.length)
l&&o===s.length&&(o=s.length-1)
var c=e._itemsList[e._currentIndex].indexInList===o
o===-1||l&&c||e._doVisualReorder({oldListIndex:e._itemsList[e._currentIndex].listIndex,oldIndexInList:e._itemsList[e._currentIndex].indexInList,newListIndex:i,newIndexInList:o})}},50)
e._getUpdateHeightFn=y.default.boundParamsMemoizer(e._updateHeight,e)
return e}l(t,e)
d(t,[{key:"componentWillMount",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentWillMount",this).call(this)
this._updateList("reset")}},{key:"componentWillReceiveProps",value:function(e){var t=e.binding.default.sub("sources").get().size
if(t>this._heightList.length){this._updateList("add")
this._renderLayout()}else if(t<this._heightList.length){this._updateList("delete")
this._renderLayout()}}},{key:"componentDidMount",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this)
$(window).on("resize",this._resizeFn)
this._resizeFn()}},{key:"componentWillUnmount",value:function(){$(window).off("resize",this._resizeFn)}},{key:"_updateHeight",value:function(e,t){if(!isNaN(t)&&this._heightList[e]!==t){this._heightList[e]=t
if(this._heightList.every(function(e){return!isNaN(e)})&&this._heightList.join("")!==this._lastHeightList.join("")){this._lastHeightList=g.default.clone(this._heightList)
this._renderLayout()}}}},{key:"_visualDelete",value:function(e){this._heightList[e]=0
var t=this._itemsList[e],n=t.listIndex,i=t.indexInList,o=this._renderList[n].itemList
o.splice(i,1)
this._adjustListItemPosition(n)
this._adjustHeight()
this._reorderGallery()}},{key:"_doVisualReorder",value:function(e){var t=this._itemsList[this._currentIndex].top,n=this._itemsList[this._currentIndex].listIndex,i=this._renderList[e.oldListIndex].itemList,o=this._renderList[e.newListIndex].itemList,s=i[e.oldIndexInList]
if(i===o){i[e.oldIndexInList]=i[e.newIndexInList]
i[e.newIndexInList]=s
this._adjustListItemPosition(e.oldListIndex)}else{var a={index:s.index,listIndex:e.newListIndex}
i.splice(e.oldIndexInList,1)
o.splice(e.newIndexInList,0,a)
this._adjustListItemPosition(e.oldListIndex)
this._adjustListItemPosition(e.newListIndex)}var r=this._itemsList[this._currentIndex].top,l=this._itemsList[this._currentIndex].listIndex,c=(l-n)*(this._itemWidth+S),u=r-t
this._adjustHeight()
this._resetCurrentPosition(c,u)
this.forceUpdate()}},{key:"_reorderGallery",value:function(){function e(e){var t=-1,i=999999
n.forEach(function(n,o){if(!e.some(function(e){return e===o})&&n.currentHeight<i){t=o
i=n.currentHeight}})
return t}var t=this,n=[],i=[]
this._renderList.forEach(function(){n.push({currentHeight:0,itemList:[]})})
var o=0
this._renderList.forEach(function(e){o+=e.itemList.length})
for(var s=0;s<o;s++){for(var a=null,r=null,l=[];!r;){a=e(l)
r=this._renderList[a].itemList[n[a].itemList.length]
l.push(a)}i.push(r.index)
n[a].currentHeight+=this._heightList[r.index]
n[a].itemList.push(r.index)}i.length<this.getDefaultBinding().sub("sources").get().size?this._onReorderAfterDelete(i):this._onReorder(i)
this._heightList=i.map(function(e){return t._heightList[e]})
this._renderLayout()}},{key:"_onReorderAfterDelete",value:function(e){var t=this.getDefaultBinding().sub("sources")
_.default.reorderRepeatableWithSplice(e,t)
this.savePage()}},{key:"_updateSize",value:function(){this._itemWidth=($(this.refs.galleryListDOM).width()-(this._columnsNum-1)*S)/this._columnsNum
this._adjustAllList()}},{key:"_updateList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reset",t=this.getDefaultBinding().sub("sources").get().size
this._renderList=[]
this._renderList.length=this._columnsNum
switch(e){case"reset":this._heightList=[]
this._heightList.length=t
for(var n=0;n<t;n++)this._heightList[n]=0
break
case"add":this._heightList.length=t
for(var i=0;i<t;i++)this._heightList[i]=this._heightList[i]||0
break
case"delete":this._heightList.length=t}this._lastHeightList=[]}},{key:"_isEditing",value:function(){var e=this
return this._heightList.some(function(t,n){return"editor"===e.getDefaultBinding().sub("sources."+n).get("_state")})}},{key:"_getShortestIndex",value:function(){var e=-1,t=999999
this._renderList.forEach(function(n,i){var o=n.currentHeight+5e-4*i
if(o<t){e=i
t=o}})
return e}},{key:"_getTallestIndex",value:function(){var e=-1,t=-1
this._renderList.forEach(function(n,i){if(n.currentHeight>t){e=i
t=n.currentHeight}})
return e}},{key:"_getTotalHeight",value:function(){if(!this._itemsList)return 0
for(var e=Math.min(this._pagesNum*this._baseItemNum,this._itemsList.length),t=0,n=0;n<e;n++)this._itemsList[n].bottom>t&&(t=this._itemsList[n].bottom)
return t}},{key:"_getItemPosition",value:function(e,t){if(!this._itemsList)return{width:this._itemWidth+"px",left:0,top:0}
var n={opacity:this._heightList[e]?1:0,width:this._itemWidth+"px",height:this._itemsList[e].bottom-this._itemsList[e].top+"px",left:this._itemsList[e].left+"px",top:this._itemsList[e].top+"px",zIndex:"editor"===this.getDefaultBinding().sub("sources."+e).get("_state")?100:"initial"}
t&&(n.height=this._itemsList[e].bottom-this._itemsList[e].top+"px")
return n}},{key:"_getDragProps",value:function(e){var t=this
return{onStart:function(){t._currentIndex=e},onDrag:function(e,n){if(!t._isDragging){t._isDragging=!0
return t.forceUpdate()}t._onDrag(e,n)},onStop:function(){if(t._isDragging){t._resetCurrentPosition()
t._isDragging=!1
t._reorderGallery()}},allowAnyClick:!1,disabled:this._isEditing()||!1,start:{x:0,y:0},zIndex:100}}},{key:"_adjustHeight",value:function(){var e=this._getTallestIndex(),t=this._renderList[e].itemList.pop()
if(t){this._renderList[e].currentHeight-=this._heightList[t.index]
if(this._getShortestIndex()===e){this._renderList[e].itemList.push(t)
this._renderList[e].currentHeight+=this._heightList[t.index]}else{var n=this._getShortestIndex()
this._renderList[n].itemList.push(t)
this._renderList[n].currentHeight+=this._heightList[t.index]
this._adjustListItemPosition(n)
this._adjustHeight()}}}},{key:"_adjustListItemPosition",value:function(e){var t=this,n=this._renderList[e],i=this._renderList[e].itemList,o=e*(this._itemWidth+S)
n.currentHeight=0
i.forEach(function(i,s){i.listIndex=e
i.indexInList=s
i.left=o
i.top=n.currentHeight*t._itemWidth+s*S
i.bottom=i.top+t._heightList[i.index]*t._itemWidth
t._itemsList[i.index]=g.default.clone(i)
n.currentHeight+=t._heightList[i.index]})}},{key:"_adjustAllList",value:function(){var e=this
this._renderList.forEach(function(t,n){e._adjustListItemPosition(n)})}},{key:"_resetCurrentPosition",value:function(e,t){if(this.refs["draggableItem"+this._currentIndex]){var n=this.refs["draggableItem"+this._currentIndex]
e||t?n.setState({clientX:n.state.clientX-e,clientY:n.state.clientY-t}):n.setState({clientX:0,clientY:0})}}},{key:"_renderLayout",value:function(){var e=this
this._canRenderLayout=!0
this._renderList=[]
this._itemsList=[]
for(var t=0;t<this._columnsNum;t++)this._renderList.push({currentHeight:0,itemList:[]})
this._heightList.forEach(function(t,n){var i=e._getShortestIndex(),o=e._renderList[i],s={index:n}
o.itemList.push(s)
o.currentHeight+=t})
this._adjustAllList()
this.forceUpdate()}},{key:"render",value:function(){var e=this,t=this.getDefaultBinding().sub("sources"),n={height:this._getTotalHeight()+"px",width:"100%",display:this._isGalleryEmpty()||!this._canRenderLayout?"none":"block"},o=this._canRenderLayout&&this._isDragging&&"number"==typeof this._currentIndex,s=t.get().size,a=this._baseItemNum*this._pagesNum,r=function(n){return u("div",{className:"position-wrapper","data-index":n,style:e._getItemPosition(n)},t.sub(n).get("id")+"_wrapper",u("div",{className:"inner-wrapper"},void 0,h.default.createElement(x.default,c({showType:"verticalGallery",index:n,key:t.sub(n).get("id"),updateItemHeight:e._getUpdateHeightFn(n),isArranging:e.props.isArranging},e._getGalleryItemProps(t.sub(n))))))}
return h.default.createElement("div",{ref:"galleryListDOM",className:"s-gallery s-vertical-gallery "+(this._isDragging?"dragging":"")+(this.props.isArranging?" s-arranging":"")},this._isGalleryEmpty()?u("div",{className:"empty-list s-common-status s-font-body"},void 0,i("Mobile|No content.")):h.default.createElement("div",{style:n,className:"vertical-list",ref:"verticalList"},t.get().map(function(n,i){var o=i<a,s=i>=a,l=!e.props.isArranging&&!1,u=l||o
return s?null:u?r(i):h.default.createElement(N,c({ref:"draggableItem"+i},e._getDragProps(i),{key:t.sub(i).get("id")+"_drag_wrapper"}),r(i))}),o&&u("div",{className:"position-wrapper dragging-placeholder",style:this._getItemPosition(this._currentIndex,"placeholder")},"placeholder")),this._needToShowPagination()&&u("div",{className:"s-gallery-pagination s-component s-text"},void 0,u("div",{className:"s-component-content"},void 0,this._pagesNum>1&&u("a",{className:"s-common-link less-link",onClick:this._onClickShowLess},void 0,i("Editor|Show less")),s>a&&u("a",{className:"s-common-link more-link",onClick:this._onClickShowMore},void 0,i("Editor|Show more")))),!1,!1)}}])
return t}(E.default)
t.default=P
e.exports=t.default}).call(t,n(9))},2226:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(1),r=o(a),l=n(2218),c=o(l),u=n(12),d=o(u),p=n(519),m=o(p),h=n(15),f=o(h),g=n(308),v=o(g),y=n(5),b=o(y),_=n(18),w=o(_),E=n(86),C=o(E),x=n(36),k=o(x),N=f.default.createPageComponent({mixins:[m.default.enableAfterUpdate()],displayName:"BlogSectionCategorySelector",bobcatPropTypes:{data:{category:r.default.PropTypes.object,binding:r.default.PropTypes.object}},getBobcatDefaultProps:function(){return{data:{category:d.default.Map({id:"all",name:i("Sections|All Categories")})}}},componentDidMount:function(){var e=this,t=this.props,n=t.addBlogCategoriesChangeListener,i=t.pageId,o=t.fetchBlogCategories,s=t.getCategories,a=t._isblogCategoriesFetched
s()
n(function(t){"all"===e.props.category.get("id")||v.default.isCategoryIdExist(e.props.category.get("id"))?t===e.props.category.get("id")&&e.forceUpdate():e._onChangeCategory({value:"all"})})
k.default.Event.subscribe("BlogManager.CloseDialog",function(){o(i,e.props.category.get("id"))})
!a()&&o(i,this.props.category.get("id"))},_createDropdownOptions:function(){var e=this.props.getCategories,t=this.props.category.get("id"),n=e().map(function(e){return{value:e.id,label:e.id.toString()===t.toString()?s("div",{className:"option capitalize selected"},void 0,e.name):s("div",{className:"option capitalize"},void 0,e.name)}})
n.length&&"all"!==t&&n.unshift({value:"all",label:s("div",{className:"option"},void 0,i("Sections|All Categories"))})
return n},_getSelectedCategoryName:function(e){var t=this.props.getCategories,n=t(),o=n.find(function(t){return t.id.toString()===e.toString()})
return o?o.name:i("Sections|All Categories")},_onChangeCategory:function(e){var t=this,n=e.value
this.updateData({category:{id:n,name:this._getSelectedCategoryName(n)}})
setTimeout(function(){t.savePage()},1)},render:function(){var e=this.props.category,t=this._createDropdownOptions()
return t.length<1?null:s("div",{className:"s-component s-category-selector"},void 0,s("div",{className:"s-component-editor",rel:"tooltip-left",title:i("all"===e.get("id")?"Sections|Select a category for this section.":"Sections|Only show posts from a certain category.")},void 0,s(c.default,{options:this._createDropdownOptions(),value:this._getSelectedCategoryName(this.props.category.get("id")),onChange:this._onChangeCategory})))}})
t.default=(0,C.default)(N,[],function(){return{pageId:b.default.getId()}},function(){return{addBlogCategoriesChangeListener:function(e){v.default.addBlogCategoriesChangeListener(e)},getCategories:function(){return v.default.getCategories()},fetchBlogCategories:function(e,t){w.default.fetchBlogCategories(e,t)},_isblogCategoriesFetched:function(){v.default._isblogCategoriesFetched()}}})
e.exports=t.default}).call(t,n(9))},2227:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=n(1),d=o(u),p=n(18),m=o(p),h=n(1997),f=o(h),g=n(5),v=o(g),y=n(798),b=function(e){var t=e.leftPrice,n=e.rightPrice,i={width:Math.min(t/n*100,100)+"%"},o={left:"calc("+Math.min(t/n*100,100)+"% - 10px)"}
return c("div",{className:"progress-bar"},void 0,c("div",{className:"progress",style:i}),c("div",{className:"indicator",style:o}))},_=function(e){function t(e){s(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._listener=n._listener.bind(n)
return n}r(t,e)
l(t,[{key:"componentDidMount",value:function(){m.default.getDonationSettings({pageId:v.default.getId()})
f.default.addChangeListener(this._listener)}},{key:"componentWillUnmount",value:function(){f.default.removeChangeListener(this._listener)}},{key:"_listener",value:function(){this.forceUpdate()}},{key:"_onClickOpenManager",value:function(){m.default.openDialog("donationManager")}},{key:"_onClickOpenDonateDialog",value:function(){m.default.openDialog("donateDialog",{strong:!0})}},{key:"render",value:function(){var e=f.default.getData(),t=e.settings,n=(e.state,e.currencyFormat)
return c("div",{className:"s-component s-donation "+(this.props.sbClass?this.props.sbClass:"")},void 0,!1,t.data.showProgress&&c("div",{className:"s-donation-progress"},void 0,c(b,{leftPrice:t.paid,rightPrice:t.goal}),c("div",{className:"left-price"},void 0,c("div",{className:"price"},void 0,(0,y.getFormattedPrice)(t.paid,n)),c("div",{className:"text"},void 0,i("Donation|Raised"))),c("div",{className:"right-price"},void 0,c("div",{className:"price"},void 0,(0,y.getFormattedPrice)(t.goal,n)),c("div",{className:"text"},void 0,i("Donation|Goal")))),c("div",{className:"s-common-button s-cta-button",onClick:this._onClickOpenDonateDialog},void 0,t.data.buttonText||i("Donation|Donate")))}}])
return t}(d.default.Component)
t.default=_
e.exports=t.default}).call(t,n(9))},2228:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(1),r=o(a),l=n(13),c=(o(l),n(2218)),u=o(c),d=n(519),p=o(d),m=n(15),h=o(m),f=n(53),g=o(f),v=n(86),y=(o(v),n(223)),b=o(y),_=h.default.createPageComponent({mixins:[p.default.enableAfterUpdate()],displayName:"EcommerceCategorySelector",bobcatPropTypes:{data:{text:r.default.PropTypes.string,category:r.default.PropTypes.string,binding:r.default.PropTypes.object}},getBobcatDefaultProps:function(){return{data:{category:"all"}}},componentWillReceiveProps:function(e){g.default.getCategories().length&&!g.default.isCategoryIdExist(e.category)&&this._onChangeCategory({value:"all"})},_createDropdownOptions:function(){var e=this,t=g.default.getCategories().map(function(t){return{value:t.id,label:t.id.toString()===e.props.category.toString()?s("div",{className:"option selected"},void 0,t.name):s("div",{className:"option"},void 0,t.name)}})
t.length&&"all"!==this.props.category&&t.unshift({value:"all",label:s("div",{className:"option"},void 0,i("Ecommerce|All Categories"))})
return t},_getSelectedCategory:function(e){var t=g.default.getCategories(),n=t.find(function(t){return t.id.toString()===e.toString()})
return n?n.name:i("Ecommerce|All Categories")},_onChangeCategory:function(e){this.updateData({category:e.value})
this.savePage()
b.default.track("Editor - Select Ecommerce Section Category")},render:function(){this.observeBinding(g.default.getCategoiresBinding())
this.observeBinding(g.default.getSettingsBinding())
var e=this._createDropdownOptions()
return e.length<1?null:s("div",{className:"s-component s-category-selector"},void 0,s("div",{className:"s-component-editor",rel:"tooltip-left",title:i("Ecommerce|Select a category for this section."),"data-original-title":i("Ecommerce|Select a category for this section.")},void 0,s(u.default,{options:this._createDropdownOptions(),value:this._getSelectedCategory(this.props.category),onChange:this._onChangeCategory})))}})
t.default=_
e.exports=t.default}).call(t,n(9))},2229:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(2204),c=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),s=n.props.themeName
n.cacheLevel=-1
"persona"!==s&&"perspective"!==s||(n.hideAdvancedOptions=!0)
n.sectionName="new_hero"
return n}s(t,e)
r(t,[{key:"getRotationKeys",value:function(){var e=this.props.themeName,t=this._levelKeys[1]
return["persona","perspective"].includes(e)?this._getKeysByLevel(0).map(function(e){return e+"-"+t}):["button-left","signup-left","images-left","button-right","signup-right","images-right","button-noImage","signup-noImage","images-noImage"]}},{key:"getButtonClassMapping",value:function(){return["big-buttons","big-buttons"]}},{key:"renderLayoutOptions",value:function(){this.props.themeName
return a("div",{},void 0,this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1))}}])
return t}(l.BaseLayoutButton)
t.default=(0,l.connectToStores)(c)
e.exports=t.default},2230:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(2204),c=n(3),u=(i(c),function(e){function t(e){o(this,t)
var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!0
n.sectionName="new_icon"
return n}a(t,e)
r(t,[{key:"getRotationKeys",value:function(){var e=this.props.themeName
return"perspective"===e?["mediaLeft-col","mediaRight-col","center-col"]:["col","natural"]}}])
return t}(l.BaseLayoutButton))
t.default=(0,l.connectToStores)(u)
e.exports=t.default},2231:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){var n=[],i=!0,o=!1,s=void 0
try{for(var a,r=e[Symbol.iterator]();!(i=(a=r.next()).done);i=!0){n.push(a.value)
if(t&&n.length===t)break}}catch(e){o=!0
s=e}finally{try{!i&&r.return&&r.return()}finally{if(o)throw s}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=n(3),p=o(d),m=n(2204),h=function(e){function t(e){s(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=e.themeName
n.cacheLevel="perspective"===i?1:0
n.sectionName="new_media"
return n}r(t,e)
u(t,[{key:"updateCachedKeys",value:function(e){var t=this.props.themeName,n="perspective"===t?3:2
e[n]=this._levelKeys[n]
this._updateLayout(e)}},{key:"updateToDefaultLayout",value:function(e){var t=n(2205),i=this.props.themeName,o="perspective"===i?1:0,s=p.default.clone(this._levelKeys)
s[o]=e
var a=t.getDefaultLayoutKey(i,s.join("-"))
this.props.updateLayout(a)}},{key:"getRotationKeys",value:function(){var e=c(this._levelKeys,4),t=e[0],n=e[1],i=e[2],o=e[3]
switch(t){case"row":return this._getKeysByLevel(3).map(function(e){return"row-"+n+"-"+i+"-"+e})
case"col":return this._getKeysByLevel(1).map(function(e){return"col-"+e+"-"+i})
case"media":return this._getKeysByLevel(1).map(function(e){return"media-"+e+"-"+i})
case"mediaLeft":case"mediaRight":case"center":return["mediaLeft","mediaRight","center"].map(function(e){return e+"-"+n+"-"+i+"-"+o})
default:return[]}}},{key:"getButtonClassMapping",value:function(){var e=this.props.themeName
return"perspective"===e?["big-buttons","big-buttons",this._getSmallButtonClass(2),"big-buttons"]:["big-buttons","media"===this._levelKeys[0]?"big-buttons":this._getSmallButtonClass(1),"big-buttons","big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return l("div",{},void 0,this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),"perspective"===e?this._getKeysByLevel(3)&&this._renderCheckBox({levelNum:3,checkedKey:"button",unCheckedKey:"text",text:i("Editor|Show Buttons")}):l("div",{},void 0,this._getKeysByLevel(3)&&this._renderLayoutButtons(3),this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,checkedKey:"button",unCheckedKey:"text",text:i("Editor|Show Buttons")})))}}])
return t}(m.BaseLayoutButton)
t.default=(0,m.connectToStores)(h)
e.exports=t.default}).call(t,n(9))},2232:function(e,t,n){(function(i){"use strict"
function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){var n=[],i=!0,o=!1,s=void 0
try{for(var a,r=e[Symbol.iterator]();!(i=(a=r.next()).done);i=!0){n.push(a.value)
if(t&&n.length===t)break}}catch(e){o=!0
s=e}finally{try{!i&&r.return&&r.return()}finally{if(o)throw s}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(2204),d=function(e){function t(e){o(this,t)
var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
var i=n.props.themeName
"perspective"===i&&"text"===n._levelKeys[0]&&(n.hideAdvancedOptions=!0)
n.sectionName="new_text"
return n}a(t,e)
c(t,[{key:"updateToDefaultLayout",value:function(e){var t=n(2202),i=this.props.themeName,o=_.clone(this._levelKeys)
o[0]=e
var s=t.getDefaultLayoutKey(i,o.join("-"))
this.props.updateLayout(s)}},{key:"getRotationKeys",value:function(){var e=l(this._levelKeys,3),t=e[0],n=(e[1],e[2])
switch(t){case"box":return this._getKeysByLevel(1).map(function(e){return"box-"+e+"-"+n})
case"text":return this._getKeysByLevel(1).map(function(e){return"text-"+e+"-"+n})
default:return[]}}},{key:"getButtonClassMapping",value:function(){var e=this.props.themeName
return"perspective"===e?["big-buttons","big-buttons","big-buttons"]:["big-buttons",this._getSmallButtonClass(1),"big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return r("div",{},void 0,"perspective"!==e&&this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,checkedKey:"button",unCheckedKey:"text",text:i("Editor|Show Buttons")}))}}])
return t}(u.BaseLayoutButton)
t.default=(0,u.connectToStores)(d)
e.exports=t.default}).call(t,n(9))},2233:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(520),s=i(o),a={donationGroup:function(e){var t=e.main.toHex(),n={".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .progress":"background: "+t,".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:before":"background: "+t,".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:after":"border-top-color: "+t}
return n},ecommerceTextGroup:function(e){var t=e.textColor.toHex(),n=e.textColor.lighten(.2).toHex(),i="color: "+t+";",o="color: "+n+";",s=".s-ecommerce .s-ecommerce-products-wrapper .s-ecommerce-card-view-wrapper .s-ecommerce-card-view-detail .s-ecommerce-card-view-detail-header",a={".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-cards .s-ecommerce-card-view-card .s-ecommerce-card-view-card-price":i,".s-ecommerce .s-ecommerce-row-view-product .s-ecommerce-row-view-product-detail-panel .s-ecommerce-row-view-product-pricing":i,".s-section .s-category-bar .category-list .category-link-item.selected":i,".s-section .s-category-bar .category-list .category-link-item.selected:after":"background: "+t,".s-section .s-category-bar .category-list .category-link-item-wrapper:hover .category-link-item:not(.no-hover)":i}
a[s+" .back-btn"]=a[s+" .prev-product-btn"]=a[s+" .next-product-btn"]=i
a[s+" .back-btn:hover"]=a[s+" .prev-product-btn:hover"]=a[s+" .next-product-btn:hover"]=o
return a},ecommerceGroup:function(e){e.textColor=e.textColor||e.main
e.mobileBg=e.mobileBg||new s.default("#f2f2f2")
var t=e.main.toHex(),n=e.mobileBg.toHex(),i=e.mobileBg.mix("#000",.2).toHex(),o="background: "+t+";",r="background: "+n+";"
return Object.assign({".s-ecommerce-row-view-product .s-ecommerce-row-view-product-thumbnail-list ul li.current":"border: 2px solid "+t,".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-card .s-ecommerce-card-view-card-stock-warning":o,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart":o,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart.hovered":o,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile":"\n        "+r+"\n        border-top: 1px solid "+i+";",".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile .check-btn":o,".s-ecommerce-animation-item":"\n        border: 2px solid "+t+";\n        color: "+t+";",".s-ecommerce-row-view-product .mobile-select .price-label":"color: "+t,".s-ecommerce-row-view-product .mobile-select .variation-item.selected":"border: 1px solid "+t+"; "+o,".s-ecommerce-row-view-product .mobile-select .add-btn":o,".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot":"border: 1px solid "+t,".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot.selected":"background: "+t},a.ecommerceTextGroup({textColor:e.textColor}))}}
t.default=a
e.exports=t.default},2234:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=m[e]||e
n=n.split(",").map(function(e){return p+e.trim()}).join(",")
var i=h[e]||h.default
if(r.default.isString(t))return t.indexOf(":")!==-1?n+("{"+t+"}"):n+("{"+i+":"+t+"}")
var o=c.default.prototype.validate(t)
return o?n+("{"+i+":"+o.toRgba()+";}"):void 0}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="",i=null
for(i in e)if(e.hasOwnProperty(i)){var s=i.split(" ")
d.default[i]?!function(){var s=d.default[i](e[i]),a=function(e){Array.isArray(t.prefix)?t.prefix.forEach(function(t){n+=o(t+" "+e,s[e])}):n+=o((t.prefix||"")+" "+e,s[e])}
for(var r in s)a(r)}():m[s[0]]?s.forEach(function(t){return n+=o(t,e[i])}):o(i,e[i])}return n}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(3),r=i(a),l=n(520),c=i(l),u=n(2233),d=i(u),p=".s-custom-colors ",m={title:".s-title",subtitle:".s-subtitle",itemTitle:".s-item-title",itemSubtitle:".s-item-subtitle",titleLink:".s-title .s-text .s-component-content a",itemTitleLink:".s-item-title .s-text .s-component-content a",subtitleLink:".s-subtitle .s-text .s-component-content a",itemSubtitleLink:".s-item-subtitle .s-text .s-component-content a",textLink:".s-text .s-component-content a",socialFeedLink:".s-social-feed .s-feeds-item .s-feed-content .s-feed-text-main a",button:".s-common-button",buttonHover:".s-common-button:hover",overlay:".s-bg-overlay:before",blogInfo:".s-blog-wrapper .s-blog-col-placeholder .s-blog-details .s-blog-info",storePrice:".s-ecommerce-row-view-product .s-ecommerce-row-view-product-pricing, .s-ecommerce-card-view-card-price",termsLink:".s-terms-link a",socialLinks:".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",socialLinks2:".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",mobileActionButton:".s-mobile-actions .s-mobile-actions-item.one-item",mobileActionButtonForApp:".s-mobile-actions .s-mobile-actions-item.selected:not(.one-item)",mobileNavbarButtons:".navbar-drawer-bar .navbar, .navbar-drawer-bar .mobile",mobileNavbarButtonsOpen:".navbar-drawer-bar.drawer-open .navbar, .navbar-drawer-bar.drawer-open .mobile"},h={default:"color",button:"background",buttonHover:"background",mobileActionButton:"background",mobileActionButtonForApp:"color",overlay:"background",mobileNavbarButtons:"background",mobileNavbarButtonsOpen:"background",socialLinks:"background",socialLinks2:"color"}
t.default={generate:s}
e.exports=t.default},2235:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(1),r=o(a),l=n(3),c=o(l),u=n(15),d=o(u),p=n(11),m=o(p),h=n(225),f=(o(h),n(5)),g=o(f),v=n(130),y=(o(v),n(44)),b=o(y),_=n(792),w=o(_),E=n(30),C=(i(E),n(55)),x=i(C),k=n(793),N=o(k),S=n(519),P=o(S),T=n(18),M=o(T),O=n(1974),I=o(O),L=n(846),D=(o(L),n(503)),B=(o(D),n(231)),A=(o(B),n(1971)),j=n(2209),H=o(j),R=n(223),U=o(R),F=n(316),V=(o(F),n(29)),W=o(V),z=n(837),K=o(z),$=n(9),G=5,q=function(e){var t=e.replace(/(\/)(\d)/,"$1t$2")
return{url:"//uploads.strikinglycdn.com/static/backgrounds/"+e+".jpg",thumbUrl:"//uploads.strikinglycdn.com/static/backgrounds/"+t+".jpg",sizing:"cover"}},Y=function(e){return{url:"//uploads.strikinglycdn.com/page/images/backgrounds/"+e+".jpg",thumbUrl:"//uploads.strikinglycdn.com/page/images/backgrounds/"+e+"-thumb.jpg",sizing:"cover"}},X=function(e){return{url:"http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/"+e+".jpg",thumbUrl:"http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/"+e+".jpg",sizing:"tile"}},J=function(e){var t=e.replace(/(\/)(\d)/,"$1t$2")
return{url:"http://o0m4okv24.qnssl.com/static/backgrounds/"+e+".jpg",thumbUrl:"http://o0m4okv24.qnssl.com/static/backgrounds/"+t+".jpg",sizing:"cover"}},Q=function(e,t){var n=["nature/194","cityscape/170","things/121","cityscape/166","nature/184"],i=q
if("solidBanner"===e){n=["banners/banner1","bg3","banners/banner3","banners/banner4","bg1"]
i=Y}if(m.default.getIsSxl()){n=["abstract/76","nature/190","cityscape/155","business-2/136","nature/171"]
i=J}if("pastelSolids"===e){n=["44","42","36","39","48"]
i=X}t&&t>0&&t<G&&(n=n.splice(0,t))
return n.map(function(e){return i(e)})}
t.default=d.default.create({displayName:"BackgroundImage",mixins:[(0,b.default)("editor"),N.default,P.default.enableAfterMount()],bobcatPropTypes:H.default.bobcatPropTypes,getBobcatDefaultProps:H.default.getBobcatDefaultProps,componentDidMount:function(){},componentWillUnmount:function(){},_setImage:function(e){this.updateData((0,A.imageDataForSaving)(e))},_imageUploaded:function(e){/\.mp4$/.test(e.getUrl())?this.updateData(Object.assign((0,A.imageDataForSaving)(e),{videoHtml:K.default.getVideoHtmlByUrl(e.getUrl(),1280,720),videoUrl:e.getUrl(),textColor:"overlay"})):this._setImage(e)
this.savePage()},_onPreviewColor:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData({textColor:e})}},_onClickTextColor:function(e){var t=this
return function(){t.updateData({textColor:e})
t.props.clearPreviewData()
t.savePage()}},_imageUrlMixin:function(e){var t={s:null,storage:null,storageKey:null,format:null}
return Object.assign(t,e)},_createEnterStockImageFn:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData(t._imageUrlMixin({url:e.url,videoHtml:"",sizing:e.sizing,textColor:"overlay",userClassName:""}))}},_createEnterStockBgColorFn:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData(t._imageUrlMixin({url:"",videoHtml:"",sizing:e.sizing,userClassName:e}))}},_createClickStockImageFn:function(e){var t=this
return function(){t.updateData(t._imageUrlMixin({url:e.url,videoHtml:"",sizing:e.sizing,userClassName:"",w:16,h:9}))
t.props.clearPreviewData()
t.savePage()
U.default.track("Editor - Edit Background")}},_createClickStockBgColorFn:function(e){var t=this
return function(){t.updateData(t._imageUrlMixin({url:"",videoHtml:"",sizing:e.sizing,userClassName:e}))
t.props.clearPreviewData()
t.savePage()
U.default.track("Editor - Edit Background")}},_onClickEditImage:function(){var e=this
w.default.launchMeitu(this._getUrlForImageEditor(),{beforeLaunch:function(){M.default.openDialog("imageEditor")},onUploadResponse:function(t){try{var n=JSON.parse(t),i=x.fromUploader(n,"qn")
e._imageUploaded(i)
M.default.addImageAsset({img:x.serializeForBackend(n,"qn")})
M.default.closeDialog("imageEditor")}catch(e){alert(I18n.t("js.pages.edit.errors.effects_network_error"))}},onClose:function(){M.default.closeDialog("imgeEditor")}})},_getUrlForImageEditor:function(){var e=c.default.assign({},this.props,{s:10})
return x.createImage(e).getUrl(this.props.size,!0)},_url:function(){return x.createImage(this.props).getUrl(this.props.size)},_onClickUpload:function(){I.default.pick({initialTabIdx:0,iconLibComponents:"background",from:"background",handlers:{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}})},_onClickMoreImage:function(){I.default.pick({initialTabIdx:2,iconLibComponents:"background",from:"background",handlers:{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}})},_onChangeBackgroundSize:function(e){this.updateData({sizing:e.target.value})
this.savePage()},_renderStockImage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=Q(this.getData("stockKey"),t)
return s("span",{},void 0,n.map(function(t,n){var i={backgroundImage:"url("+t.thumbUrl+")"}
return s("li",{style:i,onClick:e._createClickStockImageFn(t),onMouseEnter:e._createEnterStockImageFn(t),onMouseLeave:e.props.restorePreviewData},n)}))},_renderColor$Image:function(){var e=this,t=this.props.bgClassNames,n=t.length,i=""
n<G&&(i=this._renderStockImage(G-n))
return s("span",{},void 0,t.map(function(t,n){return s("li",{className:t,onClick:e._createClickStockBgColorFn(t),onMouseEnter:e._createEnterStockBgColorFn(t),onMouseLeave:e.props.restorePreviewData},n)}),i)},_renderImgEditButoon:function(){if(!m.default.getIsSxl()||g.default.getIsImageEditorRollout())return s("div",{className:"clearfix mb"},void 0,s("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickEditImage},void 0,$("Edit Image")))},render:function(){return s("div",{},void 0,r.default.createElement("img",{style:{display:"none"},src:this._getUrlForImageEditor(),ref:"aviaryImage"}),s("ul",{className:"stock-images clearfix"},void 0,this.props.showDefaultColor?this._renderColor$Image():this._renderStockImage(),s("li",{className:"btn",onClick:this._onClickMoreImage},void 0,s("span",{},void 0," ",$("More")," "))),s("div",{className:"clearfix mb"},void 0,s("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickUpload},void 0,$("Upload Image"))),this.props.showImageOptions?s("div",{},void 0,this._renderImgEditButoon(),!W.default.isSmallScreen()&&s("div",{className:"drop-down-select"},void 0,s("div",{className:"icon"}),s("select",{onChange:this._onChangeBackgroundSize,value:this.props.sizing},void 0,s("option",{value:"cover"},void 0,$("Stretch")),s("option",{value:"contain"},void 0,$("Contain")),s("option",{value:"tile"},void 0,$("Tile")),s("option",{value:"center"},void 0,$("Center")))),s("div",{className:"text-selection-wrap"},void 0,s("div",{className:"selection light-text "+("light"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":$("Light Text"),onMouseEnter:this._onPreviewColor("light"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("light")},void 0,"Tt"),s("div",{className:"selection text-overlay "+("overlay"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":$("Light Text + Overlay"),onMouseEnter:this._onPreviewColor("overlay"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("overlay")},void 0,"Tt"),s("div",{className:"selection dark-text "+("dark"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":$("Dark Text"),onMouseEnter:this._onPreviewColor("dark"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("dark")},void 0,"Tt"))):null)}})
e.exports=t.default},2236:function(e,t,n){(function(i){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var s=t&&t.defaultProps,a=arguments.length-3
n||0===a||(n={})
if(n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r])
else n||(n=s||{})
if(1===a)n.children=o
else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(1),r=o(a),l=n(6),c=o(l),u=n(15),d=o(u),p=n(44),m=o(p),h=n(837),f=o(h),g=n(1974),v=o(g),y=n(2209),b=o(y),_=n(2240),w=o(_),E=[{url:"https://www.youtube.com/watch?v=niosbUYwMB8",thumbUrl:"https://i.vimeocdn.com/video/544087938_1920.jpg"},{url:"https://www.youtube.com/watch?v=CBJuMKdYPWE",thumbUrl:"https://i.vimeocdn.com/video/531892175_1920.jpg"},{url:"https://www.youtube.com/watch?v=f6SivI7ZGPQ",thumbUrl:"https://i.vimeocdn.com/video/544619687_1920.jpg"},{url:"https://www.youtube.com/watch?v=s5trY3IYkoM",thumbUrl:"https://i.vimeocdn.com/video/544115855_1920.jpg"},{url:"https://www.youtube.com/watch?v=FXenze9SVOY",thumbUrl:"http://i.vimeocdn.com/video/544897762_1920.jpg"}]
t.default=d.default.create({displayName:"BackgroundVideo",mixins:[(0,m.default)("editor")],bobcatPropTypes:b.default.bobcatPropTypes,getBobcatDefaultProps:b.default.getBobcatDefaultProps,_getVideoProps:function(){return{videoHtml:this.props.vidoeHtml,videoUrl:this.props.videoUrl,binding:this.getDefaultBinding().sub("_addVideoPanel"),onComponentDidMount:this.props.changePositionOfAddVideoPanel,updateVideoBg:this._updateVideoBg,showVideoPanel:this.getMeta("showVideoPanel")}},_updateVideoBg:function(e){switch(e.actionState){case"add":var t={videoHtml:e.videoHtml,url:e.url,textColor:"overlay",w:null,h:null,storage:null,storageKey:null,format:null}
e.videoUrl&&(t.videoUrl=e.videoUrl)
this.updateData(t)
this.updateMeta({showVideoPanel:!1})
this.props.clearPreviewData()
e.lowResThumbnail&&this._adjustVideoBgThumbnail(e)
break
case"preview":this.props.storePreviewData()
this.updateData({videoHtml:e.videoHtml,url:e.url,textColor:"overlay",w:null,h:null,storage:null,storageKey:null,format:null})
break
case"endPreview":this.props.restorePreviewData()}},_adjustVideoBgThumbnail:function(e){var t=this,n=(0,c.default)("<img src='"+e.url+"' />")
n.load(function(){n[0].naturalWidth<200&&t.updateData({url:e.lowResThumbnail})})
n.error(function(){t.updateData({url:e.lowResThumbnail})})},_createEnterStockVideoFn:function(e){var t=this
return function(){t._updateVideoBg({videoHtml:f.default.getVideoHtmlByUrl(e.url,1280,720),url:e.thumbUrl,actionState:"preview"})}},_createClickStockVideoFn:function(e){var t=this
return function(){t._updateVideoBg({videoHtml:f.default.getVideoHtmlByUrl(e.url,1280,720),url:e.thumbUrl,actionState:"add"})
t.savePage()}},_onMouseLeaveStockVideo:function(){this._updateVideoBg({actionState:"endPreview"})},_onClickToggleVideoPanel:function(){this.updateMeta({showVideoPanel:!this.getMeta("showVideoPanel")})},_onClickMoreVideo:function(){var e=this
v.default.pick({dialogType:"video",handlers:{itemSelected:function(t){e._updateVideoBg({videoHtml:f.default.getVideoHtmlByUrl(t.url,1280,720),url:t.thumbUrl,actionState:"add"})
e.savePage()}}})},_renderStockVideo:function(){var e=this
return s("ul",{className:"stock-videos clearfix"},void 0,E.map(function(t,n){var i={backgroundImage:"url("+t.thumbUrl+")",backgroundSize:"cover"}
return s("li",{className:"stock-video-button",style:i,onClick:e._createClickStockVideoFn(t),onMouseEnter:e._createEnterStockVideoFn(t),onMouseLeave:e._onMouseLeaveStockVideo},n,s("i",{className:"fa fa-video-camera"}))}),s("li",{className:"btn",onClick:this._onClickMoreVideo},void 0,s("span",{},void 0,i("Video|More"))))},render:function(){return s("div",{},void 0,this.getMeta("showVideoPanel")&&r.default.createElement(w.default,this._getVideoProps()),this._renderStockVideo(),s("div",{className:"clearfix mb"},void 0,s("div",{className:"add-video-btn s-btn small no-margin dark-gray",onClick:this._onClickToggleVideoPanel},void 0,i("Video|Embed Video"))))}})
e.exports=t.default}).call(t,n(9))},2237:function(e,t,n){"use strict"
var i,o,s,a,r,l,c
a=n(1)
i=n(15)
c=n(2256)
r=n(33)
s=n(1942)
o=n(16)
l=function(e){return r.getExternalLinkMappingRS(e,s.getPagesList())}
e.exports=i.createPageComponent({displayName:"ExternalLinkNav",observedProps:["url","text","updateTimeStamp"],bobcatPropTypes:{data:{updateTimeStamp:a.PropTypes.number,new_target:a.PropTypes.bool,text:a.PropTypes.string,url:a.PropTypes.string,id:a.PropTypes.string,link_type:a.PropTypes.string,page_id:a.PropTypes.string,section_id:a.PropTypes.string}},_getUrlToShow:function(){var e,t,n,i,s,a,c
n=this.props,e=n.link_type,c=n.url,t=n.page_id,a=n.section_id
if("section"===e)return o.getExternalLinkUrl(e,c,t,a)
s=l(c)
return r.addProtocol(null!=(i=s.publicURL)?i:s.siteDeleted?"#":c)},_getTarget:function(){var e,t,n
n=this.props,e=n.link_type,t=n.new_target
return t&&"section"!==e?"_blank":"_self"},render:function(){return o.getShowInNavLinks(this.props.id)?c.apply(this):null}})},2238:function(e,t,n){"use strict"
var i,o,s,a,r,l,c
i=n(6)
s=n(235)
r=n(17)
a=n(306).RegexConstants
c=n(837)
o=n(40)
l=function(){function e(){}e.prototype.upload=function(e){var t,n
n=c.getVideoType(e.url)
switch(n){case"youku":case"tudou":case"qq":t=function(){switch(n){case"youku":return c.getYouKuHtml(e.url)
case"tudou":return c.getTuDouHtml(e.url)
case"qq":return c.getQQHtml(e.url)}}()
return""!==t?e.success({message:{html:t,thumbnail_url:""}}):"function"==typeof e.error?e.error():void 0
default:return new o({type:"POST",url:r.VIDEO.CREATE(),data:{video:{url:e.url,maxwidth:e.maxwidth||700}},success:function(t){return"retry"===t.html?s.poller(r.TASKS.POLL(t.message.type,t.message.id,1),e.success,e.error):"success"===t.html?e.success(t):void 0},error:e.error}).run()}}
return e}()
e.exports=new l},2239:function(e){"use strict"
var t,n
t="../../../../public/images/v4"
n=function(e){return e.replace(t,"../../../../images/v4")}
e.exports={correctThumbnailPath:n}},2240:function(e,t,n){(function(t){"use strict"
var i,o,s,a,r,l,c,u,d,p
r=n(1)
i=n(6)
o=n(15)
u=n(2238)
d=n(837)
s=n(226)
c=n(33)
a=n(44)
l=n(223)
p=n(2255)
e.exports=o.createPageComponent({displayName:"BackgroundVideoPanel",mixins:[a("editor")],bobcatPropTypes:{callbacks:{onComponentDidMount:r.PropTypes.func.isRequired,updateVideoBg:r.PropTypes.func.isRequired,showVideoPanel:r.PropTypes.bool.isRequired}},componentWillMount:function(){return this.initMeta({needToShowUrlError:!1,tempVideoUrl:this.props.videoUrl,isUploading:!1})},componentDidMount:function(){return this.cbProps.onComponentDidMount()},_tempVideoUrl:function(){return this.getMeta("tempVideoUrl")},_needToShowUrlError:function(){return this.getMeta("needToShowUrlError")},_updateVideo:function(e){return this.cbProps.updateVideoBg(e)},_uploadSuccess:function(e,n){return function(o){return function(s){var a,r,c
a=i(s.message.html)
r=a.attr("height")
c=a.attr("width")
switch(n){case"youtube":o._updateVideo({videoHtml:d.getYTIFrameHtml(d.getVideoID(e,n),c,r),videoUrl:e,url:d.getHDYTThumbnail(d.getVideoID(e,n)),lowResThumbnail:d.getNormalYTThumbnail(d.getVideoID(e,n)),actionState:"add"})
break
case"vimeo":o._updateVideo({videoHtml:d.getVimeoIFrameHtml(d.getVideoID(e,n),c,r),videoUrl:e,url:s.message.thumbnail_url,actionState:"add"})
break
default:window.alert(t("Video|Video format is not supported. Please use Youtube/Vimeo full URL only."))}o.updateMeta({isUploading:!1,needToShowUrlError:!1})
o.savePage()
return l.track("Editor - Add Video Background")}}(this)},_uploadFail:function(){var e
e=status.responseJSON
return this.updateMeta({needToShowUrlError:!0,isUploading:!1})},_uploadVideo:function(){var e,t
this.updateMeta({isUploading:!0})
t=c.addProtocol(this.getMeta("tempVideoUrl"))
e=d.getVideoType(t)
return u.upload({url:t,maxwidth:1440,success:this._uploadSuccess(t,e),error:this._uploadFail})},_onChangeUrl:function(e){return this.updateMeta({tempVideoUrl:s.escapedValue(e.target.value)})},render:function(){return p.apply(this)}})}).call(t,n(9))},2241:function(e,t,n){(function(t){"use strict"
var i,o
i=n(5)
o=n(60)
e.exports={mixins:[],displayName:"BlockSection",getWholeThemeFeature:function(){var e
e=o.get(i.getTheme().get("name"))
return null!=e?e.features:void 0},render:function(){t("Editor|Make Your Own Section")
t("Editor|Want more control over layouts? Arrange components yourself!")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2242:function(e,t,n){(function(t){"use strict"
var i,o,s,a,r,l,c
r=n(13)
a=n(16)
i=n(11)
o=n(304)
s=n(12)
l=n(3)
c=!1
e.exports={mixins:[],displayName:"BlogSection",waypointHandler:function(){var e,n
n=this._getLayoutProps().layoutVariation
if(!c&&a.getSections().length<3&&["A","B","C"].indexOf(n)!==-1){e=$(r.findDOMNode(this)).find(".s-layout .s-component-editor")
e.tooltip({placement:"left",trigger:"manual",extraClassNames:"swing-right",title:t("Blog|Try different layouts for blog!")})
c=!0
e.tooltip("show")
e.one("mouseenter",function(){return e.tooltip("destroy")})
return setTimeout(function(){return e.tooltip("destroy")},2e4)}},componentWillMount:function(){var e
e=this.getDefaultBinding().get("components.blog1").toJS()
if(l.isEmpty(e.category))return this.getDefaultBinding().set("components.blog1.category",s.fromJS({id:"all",name:t("Section|All Categories")}))},_getWaypointProps:function(){return{handler:this.waypointHandler,offset:20}},_getBlogArchiveDialogProps:function(){var e
e=this.getDefaultBinding().get("components.slideSettings.layout_variation")
null===e&&(e=void 0)
return{blogSectionLayout:e}},_getLayoutOptions:function(){return[{name:"F",key:"F"},{name:"A",key:"A"},{name:"B",key:"B"},{name:"C",key:"C"},{name:"D",key:"D"},{name:"E",key:"E"}]},_isBlogCategoryFeatureAvailable:function(){return o.canUse("blog_category")&&i.isBlogCategoryRolledOut()},render:function(){t("Editor|Simple Blog")
t("Editor|Write beautiful blog posts that open in a new page.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2243:function(e,t,n){"use strict"
e.exports=n(2216)},2244:function(e,t,n){(function(t){"use strict"
e.exports={mixins:[],displayName:"DonationSection",render:function(){t("Editor|Simple Store")
t("Editor|Sell products right on your site! Manage orders, payments, and more.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2245:function(e,t,n){(function(t){"use strict"
var i,o
o=n(3)
i=n(304)
e.exports={mixins:[],displayName:"EcommerceSection",_showLayoutButton:function(){return i.canUse("ecommerce_layout")},_getLayoutOptions:function(){return[{name:"row",key:"row"},{name:"card",key:"card"}]},render:function(){t("Editor|Simple Store")
t("Editor|Sell products right on your site! Manage orders, payments, and more.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2246:function(e,t,n){"use strict"
var i,o,s,a,r
r=n(1)
s=n(16)
i=n(11)
a=n(5)
o={observedProps:["showFooter","showTermsLink"],propTypes:{showFooter:r.PropTypes.bool,showTermsLink:r.PropTypes.bool},displayName:"FooterSection",_getLayoutOptions:function(){var e
e=[{name:"Vertical",key:"vertical"},{name:"Horizontal",key:"horizontal"},{name:"Grid",key:"grid"}]
return e},_getFooterLayoutProps:function(){var e,t
e=this.getDefaultBinding()
return t={layoutVariation:e.get("layout_variation"),binding:e}},_getLayout:function(){var e
e=this.getDefaultBinding()
return e.get("layout_variation")||"vertical"},_hasMobileActions:function(){return a.hasNewMobileActions()},render:function(){return this.getTemplate().apply(this)}}
e.exports=o},2247:function(e,t,n){(function(t){"use strict"
e.exports={mixins:[],displayName:"HTMLSection",render:function(){t("Editor|App Store & HTML")
t("Editor|Embed a map, a calendar, a document, a form or any HTML code!")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2248:function(e,t,n){(function(t){"use strict"
var i,o,s,a,r,l,c,u
r=n(1)
u=n(315)
o=n(319)
l=n(1970)
c=n(1969)
a=n(5)
i=n(11)
s=n(2201)
e.exports={mixins:[s],displayName:"ContactsSection",componentWillMount:function(){var e,t,i,o
o=a.getThemeName()
t=this._getLayoutVariation()
i=this.getDefaultBinding().get("template_name")
t.split("-").length>=2&&("perspective"===o?["mediaLeft","mediaRight","center"].includes(t.split("-")[0])||(t="center-"+t):["mediaLeft","mediaRight","center"].includes(t.split("-")[0])&&(t=t.split("-").slice(1).join("-")))
e=n(2207)
return this._getLayoutBinding().sub("layout_variation").set(e.getDefaultLayoutKey(o,t))},_getLayoutOptions:function(){var e,t
t=a.getThemeName()
e=n(2207)
return e.getLayoutOptions(t)},_renderRepeatable:function(e){var t,s,d,p,m,h,f,g,v,y
t=n(2207)
y=a.getThemeName()
m=this._getLayoutVariation()
d=this.getComponentBinding(e)
f=d.get("id")
h=this.getRepeatableBinding(e)
p="function"==typeof(s=t.getLayout(y,m))?s(h):void 0
g=function(e){return function(t,n){var s,a,l,d
a=h.sub(n)
l=p.itemClass
d=p.naturalImage
s="480x960>"
return r.createElement(c,Object.assign({className:l,binding:{default:a,listBinding:h},parentId:f,index:n},e._getRepeatableItemProps(h,n)),r.createElement("div",{className:"s-item-media-group s-mhi"},r.createElement(o,Object.assign({size:s,parentId:f,moreIcons:!0,naturalSize:d},e.getReduxComponentProps("image1",a)))),e.sbHasContent("text1",{parentBinding:a})&&(i.getIsSxl()||!d)&&r.createElement("div",{className:"s-item-text-group"},r.createElement(u,Object.assign({tagName:"div",applyWordBreaks:"true",textType:"body"},e.getComponentProps("text1",a)))))}}(this)
v=this.getComponentProps("repeatable1")
return r.createElement(l,Object.assign({className:"s-mh"+("editor"===d.get("_state")?" s-arranging":"")},v),d.get("list").map(g).toArray())},render:function(){t("Editor|Contact")
t("Editor|A list of small icons. Good for social media.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2249:function(e,t,n){"use strict"
var i,o,s,a,r,l
r=n(1)
a=n(1942)
s=n(5)
o=n(841)
l=n(129)
i={observedProps:["showNav"],displayName:"NavbarSection",propTypes:{binding:r.PropTypes.object.isRequired,className:r.PropTypes.string,navbarItemData:r.PropTypes.oneOfType([r.PropTypes.object,r.PropTypes.array]),showNav:r.PropTypes.bool,eagerLoad:r.PropTypes.bool.isRequired},componentDidMount:function(){return a.addChangeListener(this._pagesListListener)},componentWillUnmount:function(){return a.removeChangeListener(this._pagesListListener)},_pagesListListener:function(){return this.forceUpdate()},_getTimestampForLinks:function(){return(new Date).getTime()},getSectionHash:function(e){return o.getSectionHashByIndex(e)},_getFirstSectionBackgroundProps:function(){var e
e=this.getBinding("firstSection")
return e.sub("components.background1").toJS()},_getNavItemProps:function(e){return e.showNav?{}:{style:{display:"none"}}},_switchPage:function(e,t){switch(s.getSiteMode()){case"editor":t.preventDefault()
return l.replace(e.path)
case"preview":t.preventDefault()
return l.push(e.path)}},render:function(){return this.getTemplate().apply(this)}}
e.exports=i},2250:function(e,t,n){"use strict"
e.exports=n(2214)},2251:function(e,t,n){(function(t){"use strict"
var i,o,s,a,r,l,c,u
o=n(318)
r=n(2201)
s=n(11)
u=n(1941)
i="noForeground"
a=1
l="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
c={mixins:[r],displayName:"SliderSection",componentWillMount:function(){this.layoutOptions=["left","right","noImage"]
this.layoutName=this._getLayoutProps().binding.get("layout_variation")
if(this.layoutName===i)return this.layoutOptions.push(i)},getInitialState:function(){return{imgEditorState:""}},setStateFunc:function(e){return this.setState({imgEditorState:e||""})},_showMediaWrapper:function(e){var t
t=["noImage",i]
return t.indexOf(e)===-1},_sbAnyHasContent:function(e,t){var n
n=this.getRepeatableBinding("slider1")
return!!this.sbAnyHasContent(t,{parentBinding:n.sub(e)})},_sbHasMediaContent:function(e){var t
t=this.getRepeatableBinding("slider1")
return!!this.sbHasContent("media1",{parentBinding:t.sub(e)})},_getSliderLayoutArr:function(){var e,t,n,i
i=this._getLayoutVariation()
n=[]
if(i.indexOf("[")!==-1)try{n=JSON.parse(i)}catch(e){t=e}else{i||(i=this.layoutOptions[a])
e=this.getRepeatableBinding("slider1").get().size
n=Array.from(new Array(e),function(){return function(){return i}}(this))}return n},_imageRatioWarnning:function(e){var n,i,o,s,a,r,l,c,u,d,p
l=this.getRepeatableBinding("slider1")
n=l.sub(e+".components.background1")
d=n.get("w")
a=n.get("h")
u=n.get("url")
if(!d||!a){d=16
a=9}c=t("Editor|This image is too tall! Please upload a banner with a wider aspect ratio.")
i=parseFloat(d/a)
if(i<1.25)return c
if(l.get().size<2)return""
o=l.sub("0.components.background1")
c=t("Editor|Your banner images are different sizes! You should keep all banner images the same size.")
p=o.get("w")
r=o.get("h")
if(!p||!r){p=16
r=9}s=parseFloat(p/r)
return e>0&&Math.abs(i-s)>.2?c:""},_getSliderLayout:function(e){var t,n
n=this._getSliderLayoutArr()
t=n[e]
return null!=t?t:this.layoutOptions[a]},_isBannerSection:function(){return this.layoutName===i},_renderSliderLayoutBtn:function(e){var n,i,o,s,a
s=this._getSliderLayoutArr()
n=s[e]
o=this.layoutOptions.indexOf(n)
i=this._getLayoutStatusName(o)||"B"
a=function(t){return function(){o===-1&&(o=0)
o===t.layoutOptions.length-1&&(o=-1)
s[e]=t.layoutOptions[++o]
return t._updateLayout(JSON.stringify(s))}}(this)
return React.createElement("div",{className:"s-component s-layout"},React.createElement("div",{className:"s-component-editor"},React.createElement(u,{className:"center clickable small title layout-button",onTap:a,rel:"tooltip-left",title:t("Editor|Click to change layouts.")},React.createElement("span",null,t("Layout"),React.createElement("span",{className:"layout-status"},i)))))},render:function(){var e
e=this.getTemplate().apply(this)
return e}}
e.exports=c}).call(t,n(9))},2255:function(e,t,n){(function(t){"use strict"
function i(){var e=a.DOM.input
return o.createElement("div",{className:"bg-video-panel s-point-right s-tooltip-dialog "+s.keys(s.pick({active:this.cbProps.showVideoPanel},s.identity)).join(" ")},o.createElement("div",{className:"menu-title"},t("Video|Use Youtube/Vimeo Video")),o.createElement("div",{className:"input-wrap"},o.createElement(e,{type:"text",placeholder:t("Video|Enter Youtube/Vimeo URL"),onChange:this._onChangeUrl,value:this._tempVideoUrl()}),this._getIsUploading()?null:o.createElement("span",{className:"no-border no-margin s-btn small yellow",onClick:this._uploadVideo},t("Video|Upload")),this._getIsUploading()?o.createElement("span",{className:"gray no-border no-margin s-btn small"},t("Video|Uploading...")):null),this._needToShowUrlError()?o.createElement("div",{className:"error-message"},o.createElement("div",{className:"fa fa-question-circle"}),"\n    ",t("Video|Video URL is invalid."),"\n    ",o.createElement(r,{},o.createElement("a",{href:"http://support.strikingly.com/hc/en-us/articles/215046387",target:"_blank"},t("Video|Learn more.")),o.createElement("a",{href:"http://help.sxl.cn/hc/zh-cn/articles/215309018",target:"_blank"},"了解更多"))):null,o.createElement("div",{className:"hint"},t("Video|Note: Video backgrounds won't play on phones or tablets. A thumbnail will be shown instead.")))}var o=n(1),s=n(3),a=n(26),r=n(316)
e.exports=function(){return i.apply(this,[])}}).call(t,n(9))},2256:function(e,t,n){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("li",{},i.createElement("a",{className:"s-external-link-item s-nav-item",href:this._getUrlToShow(),target:this._getTarget()},i.createElement("span",{className:"s-font-body"},this.props.text)))}},2257:function(e,t,n){(function(t){"use strict"
function i(){var e=this.getDefaultBinding().sub("sources")
return o.createElement("div",{className:"s-gallery "+(this._getGalleryClassName()+(this.props.isArranging?" s-arranging":"")),ref:"galleryListDOM"},this.isEditMode()?o.createElement("div",{skip:"true"},"\n    ",this._renderForEditor(),"\n  "):null,this.isEditMode()?null:o.createElement("div",{},o.createElement("div",{},this._renderForShow()),this._needToShowPagination()?o.createElement("div",{className:"s-component s-gallery-pagination s-text"},o.createElement("div",{className:"s-component-content"},1!=this._pagesNum?o.createElement("a",{className:"less-link s-common-link",onClick:this._onClickShowLess},t("Editor|Show less")):null,e.get().size>this._pagesNum*this._baseItemNum?o.createElement("a",{className:"more-link s-common-link",onClick:this._onClickShowMore},t("Editor|Show more")):null)):null),null,this.isEditMode()&&!this._isInNativeWeb()?o.createElement("div",{className:"center edit-buttons gallery-add-image",skip:"true"},o.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddImage},"\n      ",t("Add Images"),"\n    "),o.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddVideo,style:{marginLeft:"20px"}},"\n      ",t("Add Videos"),"\n    ")):null,null,this._isInNativeWeb()?o.createElement("div",{className:"native-button-wrapper"},!this.props.isArranging&&this.props.sources.size>0?o.createElement("div",{className:"s-small-black-button",onClick:this.props.toggleEditor},o.createElement("img",{src:s.cdnAssetPath("/images/icons/native/ic_settings_white_3x.png")}),"\n      ",t("Mobile|Manage items"),"\n    "):null,this.props.isArranging&&this.props.sources.size>0?o.createElement("div",{className:"s-small-black-button",onClick:this.props.toggleEditor},o.createElement("img",{src:s.cdnAssetPath("/images/icons/native/ic_check_1_white_3x.png")}),"\n      ",t("Mobile|Done"),"\n    "):null,o.createElement("div",{className:"s-small-black-button",onClick:this._onClickNativeAddImage.bind(null,"bottom")},o.createElement("img",{src:s.cdnAssetPath("/images/icons/native/ic_add_3x.png")}),"\n      ",t("Mobile|Add Image"),"\n    ")):null)}var o=n(1),s=(n(3),n(30))
e.exports=function(){return i.apply(this,[])}}).call(t,n(9))},2258:function(e,t,n){(function(t){"use strict"
var i=n(1),o=(n(3),n(30))
e.exports=function(){return i.createElement("div",{className:"no-bg s-block-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title"},t("Make Your Own Section!")))),i.createElement("div",{},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/block-components.png")}))))}}).call(t,n(9))},2259:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-blog-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title"},t("Sections|Our Blog"))),i.createElement("div",{className:"blog"},i.createElement("div",{className:"blog-row"},i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-1.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|New Blog Feature!")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 17")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-2.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Lessons Learned from Starting Up")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 12")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-3.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Our Commitment to Service")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|August 30"))))),i.createElement("div",{className:"blog-row"},i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|New Blog Feature!")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 17")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/cityscape/t170.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Lessons Learned from Starting Up")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 12")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Our Commitment to Service")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|August 30")))))))))}}).call(t,n(9))},2260:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-cta-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.button1.text)))))}}).call(t,n(9))},2261:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"no-bg s-donation-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),i.createElement("div",{className:"p100"},i.createElement("div",{className:"progress-bar"},i.createElement("div",{className:"progress"}),i.createElement("div",{className:"indicator"})),i.createElement("div",{className:"price-bar"},i.createElement("div",{className:"left-price"},i.createElement("div",{className:"price"},"400"),i.createElement("div",{className:"text"},t("Donation|Raised"))),i.createElement("div",{className:"right-price"},i.createElement("div",{className:"price"},"10000"),i.createElement("div",{className:"text"},t("Donation|Goal")))),i.createElement("div",{className:"button"},t("Sections|Donate Now")))))}}).call(t,n(9))},2262:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"no-bg s-ecommerce-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),i.createElement("div",{className:"p50"},i.createElement("div",{className:"store-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/ecommerce1.jpg"}))),i.createElement("div",{className:"p50"},i.createElement("div",{className:"item-title s-font-heading"},t("Sections|Smart Light Bulbs")),i.createElement("div",{className:"item-body-text s-font-body"},"$49.99"),i.createElement("div",{className:"item-subtitle s-font-body"},t("Sections|While you might not need all...")),i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("div",{className:"selection-thumb"},i.createElement("div",{className:"select-box"},t("Sections|Purple"),"\n            ",i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/selector.png"}))),i.createElement("div",{className:"input-thumb"},i.createElement("div",{className:"input-box"},"1")),i.createElement("div",{className:"button"},t("Sections|Buy Now"))))))}}).call(t,n(9))},2263:function(e,t,n){(function(t){"use strict"
var i=n(1),o=(n(3),n(316)),s=n(30)
e.exports=function(){return i.createElement("div",{className:"s-html-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"app-store-thumb"},i.createElement(o,{},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/appstore.jpg"}),i.createElement("img",{src:s.cdnAssetPath("/images/editor2/appstore-sxl-1-min.png")}))))))}}).call(t,n(9))},2264:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-section-thumb s-signup-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.name_label)}),i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.email_label)}),i.createElement("div",{className:"button"},t("Sections|"+this.props.content.components.email1.submit_label))))))}}).call(t,n(9))},2265:function(e,t,n){(function(t){"use strict"
function i(){var e=this.props.content.components.slideSettings.layout_variation
return o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100 "+s.keys(s.pick({"dark-overlays":"noForeground"!==e},s.identity)).join(" ")},o.createElement("div",{className:"prev-arrow"}),o.createElement("div",{className:"next-arrow"}),"noForeground"!==e?o.createElement("div",{className:"s-slider-demo"},o.createElement("div",{className:"title-media"},o.createElement("img",{src:this._getImageUrl(this.props.content.components.slider1.list[0].components.media1.image)})),o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text2.value)}}),o.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.slider1.list[0].components.button1.text))):null,o.createElement("div",{className:"selector-container "+s.keys(s.pick({"no-foreground":"noForeground"==e},s.identity)).join(" ")},o.createElement("div",{className:"selected selector"}),o.createElement("div",{className:"selector"}),o.createElement("div",{className:"selector"}))))}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"s-section-thumb s-slider-thumb "+this._getBackgroundClass(this.props.content.components.slider1.list[0].components.background1),style:this._getBackgroundStyle(this.props.content.components.slider1.list[0].components.background1)},i.apply(this,[]))}}).call(t,n(9))},2266:function(e,t,n){(function(t){"use strict"
var i=n(1),o=(n(3),n(30))
e.exports=function(){return i.createElement("div",{className:"no-bg s-section-thumb s-social-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"social-thumb"},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/social_feed_thumb.png")}))))}}).call(t,n(9))},2267:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){var n=[],i=!0,o=!1,s=void 0
try{for(var a,r=e[Symbol.iterator]();!(i=(a=r.next()).done);i=!0){n.push(a.value)
if(t&&n.length===t)break}}catch(e){o=!0
s=e}finally{try{!i&&r.return&&r.return()}finally{if(o)throw s}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(2204),u=n(3),d=(i(u),function(e){function t(e){o(this,t)
var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!0
n.sectionName="new_title"
return n}a(t,e)
l(t,[{key:"componentDidMount",value:function(){this._rightLayout="center-right-normal"===this.props.layoutVariation}},{key:"getRotationKeys",value:function(){var e=r(this._levelKeys,3),t=(e[0],e[1],e[2]),n=["center-subTop-"+t,"center-bottom-"+t]
this._rightLayout&&n.push("center-right-"+t)
return n}}])
return t}(c.BaseLayoutButton))
t.default=(0,c.connectToStores)(d)
e.exports=t.default},2268:function(e,t,n){(function(t){"use strict"
var n
e.exports={mixins:[],displayName:"ContactFormSection",_showMap:function(){n.track("Add Map - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_map",!0)
return this.savePage()},_hideMap:function(){n.track("Remove Map - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_map",!1)
return this.savePage()},_showContactInfo:function(){n.track("Add Contact Info - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_info",!0)
return this.savePage()},_hideContactInfo:function(){n.track("Remove Contact Info - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_info",!1)
return this.savePage()},_isContactInfoEmpty:function(e){return!(e.address||e.phone||e.hours||e.email)},_fixMapHeight:function(e){var t,n,i,o,s,a
i=$(e)||$("#s-map")
if(i.length){if($(window).width()>=927){n=i.closest(".s-contact-section").find(".s-email-form-inputs-group")
t=n.find(".s-email-form-field")
a=parseInt(t.first().css("padding-top"),10)||0
s=parseInt(t.last().css("padding-bottom"),10)||0
o=n.height()-a-s
o=Math.max(200,o)
return i.height(o).css({"margin-top":a,"margin-bottom":s})}return i.height(250).css({"margin-top":0,"margin-bottom":0})}},render:function(){t("Editor|Contact Form")
t("Editor|Let viewers drop their name, email, and message.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2269:function(e){"use strict"
e.exports={mixins:[],displayName:"SocialFeedSection",render:function(){return this.getTemplate().apply(this)}}},2270:function(e,t,n){"use strict"
e.exports=n(2216)},2271:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/base/sections/hero/thumbnail/cover.png"},2273:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"column-image",key:t},o.createElement("div",{className:"image-wrapper"},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),o.createElement("div",{className:"item-text-group"},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text3.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text3.value}}):null))}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"no-bg s-columns-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),this.props.content.components.repeatable1.list.length?o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"columns-media"},s.map(this._getRepetableList(this.props.content.components.repeatable1.list),i.bind(this))])):null))}},2274:function(e,t,n){(function(t){"use strict"
var i=n(1),o=(n(3),n(30)),s=n(316)
e.exports=function(){return i.createElement("div",{className:"s-contact-form-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("div",{className:"form-wrapper"},i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.name_label)}),i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.email_label)}),i.createElement("textarea",{placeholder:t("Sections|"+this.props.content.components.email1.message_label)}),i.createElement("div",{className:"button"},t("Sections|"+this.props.content.components.email1.submit_label))),i.createElement(s,{},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/contact_map.png")}),i.createElement("img",{src:o.cdnAssetPath("/images/editor2/contact_map_sxl.png")}))))))}}).call(t,n(9))},2275:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"gallery-image",key:t},o.createElement("img",{src:this._getImageUrl(e,!0)}))}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"no-bg s-gallery-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),this.props.content.components.gallery1.sources.length?o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"gallery-media"},s.map(this._getRepetableList(this.props.content.components.gallery1.sources,8),i.bind(this))])):null))}},2276:function(e,t,n){(function(t){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-hero-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p50"},i.createElement("div",{className:"media"},i.createElement("img",{src:this._getImageUrl(this.props.content.components.media1.image)}))),i.createElement("div",{className:"p50"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}),i.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.button1.text)))))}}).call(t,n(9))},2277:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"icon",key:t},o.createElement("img",{src:this._getImageUrl(e.components.image1)}),e.components.text1.value?o.createElement("div",{className:"item-subtitle",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null)}var o=n(1),s=n(3),a=n(316)
e.exports=function(){return o.createElement("div",{className:"no-bg s-icons-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),o.createElement("div",{className:"p100"},o.createElement(a,{},o.createElement.apply(this,["div",{className:"icons-media s-font-body"},s.map(this._getRepetableList(this.props.content.components.repeatable1.list,4),i.bind(this))]),o.createElement("div",{className:"icons-media s-font-body"},o.createElement("div",{className:"icon"},o.createElement("img",{src:"//o0m4okv24.qnssl.com/static/icons/black/wechat-icon.png"}),o.createElement("div",{className:"item-subtitle"},"微信")),o.createElement("div",{className:"icon"},o.createElement("img",{src:"//o0m4okv24.qnssl.com/static/icons/black/weibo-icon.png"}),o.createElement("div",{className:"item-subtitle"},"微博")),o.createElement("div",{className:"icon"},o.createElement("img",{src:"//o0m4okv24.qnssl.com/page/images/icons/phone-icon.png"}),o.createElement("div",{className:"item-subtitle"},"电话")),o.createElement("div",{className:"icon"},o.createElement("img",{src:"//o0m4okv24.qnssl.com/page/images/icons/email-icon.png"}),o.createElement("div",{className:"item-subtitle"},"邮箱")))))))}},2278:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"info-box",key:t},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?o.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"s-info-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"info-boxes"},s.map(this._getRepetableList(this.props.content.components.repeatable1.list,4),i.bind(this))]))))}},2279:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{key:t},o.createElement("div",{className:"media-image-thumb"},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),e.components.text1.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null)}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"no-bg s-media-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement.apply(this,["div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),s.map(this.props.content.components.repeatable1.list,i.bind(this))])))}},2280:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"row-container",key:t},o.createElement("div",{className:"rows-img"},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),o.createElement("div",{className:"item-text-group"},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text3.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text3.value}}):null))}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"no-bg s-rows-thumb s-section-thumb "+this._getSectionTypeClass()},o.createElement("div",{className:"s-section-thumb-content s-thumb-"+this._getLayout()},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),this.props.content.components.repeatable1.list.length?o.createElement.apply(this,["div",{className:"p100"},s.map(this.props.content.components.repeatable1.list,i.bind(this))]):null))}},2281:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"text-container",key:t},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?o.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var o=n(1),s=n(3)
e.exports=function(){return o.createElement("div",{className:"no-bg s-section-thumb s-text-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),this.props.content.components.repeatable1.list.length?o.createElement.apply(this,["div",{},s.map(this.props.content.components.repeatable1.list,i.bind(this))]):null)))}},2282:function(e,t,n){(function(t){"use strict"
var i
i=n(29)
e.exports={mixins:[],displayName:"GallerySection",_getLayoutOptions:function(){return[{name:"normal",key:"normal"},{name:"full width",key:"fullWidth"},{name:"vertical",key:"vertical"}]},_isSmallScreen:function(){return i.isSmallScreen()},render:function(){t("Editor|Gallery")
t("Editor|Image and video thumbnails that open in a full view.")
return this.getTemplate().apply(this)}}}).call(t,n(9))},2283:function(e,t,n){"use strict"
e.exports=n(2214)},2284:function(e,t,n){"use strict"
e.exports=n(2215)},2285:function(e,t,n){"use strict"
e.exports=n(2211)},2286:function(e,t,n){"use strict"
e.exports=n(2215)},2290:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=(n(315),n(1968)),r=n(2197),l=n(2198),c=n(507),u=n(2199)
e.exports=function(){return o.createElement(u,i({className:"s-block-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(r,this.getComponentProps("background1"))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(a,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(l,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"alignment-container "+this.sbUniformTextAlignment("text1 text2")+(this.isState("editor")?" s-arranging":"")},o.createElement(c,{binding:this.getComponentBinding("block1"),items:this.getComponentBinding("block1").sub("items").get().toArray(),themeFeature:this.getWholeThemeFeature()}))))}},2291:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=(n(315),n(1968)),r=n(796),l=(n(2197),n(2198)),c=n(2199),u=(n(2203),n(797))
n(2226)
e.exports=function(){return o.createElement(c,i({className:"s-blog-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),o.createElement(u,this._getWaypointProps()),null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(a,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns no-float sixteen"},o.createElement(l,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},o.createElement(r,i({className:"WaypointLazy"},this.getComponentProps("blog1"))))))}},2292:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2212))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2293:function(e,t,n){(function(t){"use strict"
function i(e,t){var n=u.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=u.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(){var e=this.getComponentProps("contactInfo1")
return c.createElement("div",{className:"s-contact-section-columns s-three-columns "+this.sbUniformTextAlignment("text1 text2")},c.createElement("div",{className:"s-contact-info-column"},c.createElement(v,u.assign({},{onDelete:this._hideContactInfo},e))),c.createElement("div",{className:"s-google-maps-column"},c.createElement(g,u.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),c.createElement("div",{className:"s-email-column"},c.createElement(m,u.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function s(){var e=this.getComponentProps("contactInfo1")
return c.createElement("div",{className:"s-contact-section-columns s-two-columns "+this.sbUniformTextAlignment("text1 text2")},c.createElement("div",{className:"s-google-maps-column"},c.createElement(g,u.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),c.createElement("div",{className:"s-email-column"},c.createElement(m,u.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function a(){var e=this.getComponentProps("contactInfo1")
return c.createElement("div",{className:"s-contact-section-columns s-three-columns "+this.sbUniformTextAlignment("text1 text2")},c.createElement("div",{className:"s-contact-info-column"},c.createElement(v,u.assign({},{onDelete:this._hideContactInfo},e))),c.createElement("div",{className:"s-google-maps-column"},c.createElement(g,u.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),c.createElement("div",{className:"s-email-column"},c.createElement(m,u.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function r(e){var t=this.getComponentProps("contactInfo1")
return c.createElement("div",{className:"s-contact-section-columns s-two-columns "+this.sbUniformTextAlignment("text1 text2")},!e.get("show_info")||!this.isEditMode()&&this._isContactInfoEmpty(t)?null:c.createElement("div",{className:"s-contact-info-column"},c.createElement(v,u.assign({},{onDelete:this._hideContactInfo},t))),e.get("show_map")?c.createElement("div",{className:"s-google-maps-column"},c.createElement(g,u.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},this.getComponentProps("contactInfo1")))):null,c.createElement("div",{className:"s-email-column"},c.createElement(m,u.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function l(){var e=this.generateComponentBindingIfMissing(["slideSettings","display_settings"])
return c.createElement("div",{className:"container"},e.get("show_map")||e.get("show_info")?null:c.createElement("div",{className:"columns "+(this.getThemeFeature("narrowContactForm")?"twelve offset-two":"sixteen")},c.createElement(h,{section:this,binding:this.getDefaultBinding()}),c.createElement("div",{className:"s-email-form-container "+this.sbUniformTextAlignment("text1 text2")},c.createElement(m,u.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1"))))),this.isEditMode()&&e.get("show_map")&&e.get("show_info")?c.createElement("div",{className:"columns sixteen"},c.createElement(h,{section:this,binding:this.getDefaultBinding()}),o.apply(this,[e])):null,!this.isEditMode()&&e.get("show_map")&&e.get("show_info")&&this._isContactInfoEmpty(this.getComponentProps("contactInfo1"))?c.createElement("div",{className:"columns sixteen"},c.createElement(h,{section:this,binding:this.getDefaultBinding()}),s.apply(this,[e])):null,!this.isEditMode()&&e.get("show_map")&&e.get("show_info")&&!this._isContactInfoEmpty(this.getComponentProps("contactInfo1"))?c.createElement("div",{className:"columns sixteen"},c.createElement(h,{section:this,binding:this.getDefaultBinding()}),a.apply(this,[e])):null,!e.get("show_map")&&e.get("show_info")||e.get("show_map")&&!e.get("show_info")?c.createElement("div",{className:"columns sixteen"},c.createElement(h,{section:this,binding:this.getDefaultBinding()}),r.apply(this,[e])):null,!this.isEditMode()||e.get("show_map")&&e.get("show_info")?null:c.createElement("div",{className:"s-black-button-container"},e.get("show_map")?null:c.createElement("div",{className:"s-small-black-button",onClick:this._showMap},t("Editor|Add Map")),e.get("show_info")?null:c.createElement("div",{className:"s-small-black-button",onClick:this._showContactInfo},t("Editor|Add Contact Info"))))}var c=n(1),u=n(3),d=(n(315),n(2197)),p=n(1968),m=n(794),h=n(2198),f=n(2199),g=(n(11),n(1987)),v=n(1984)
e.exports=function(){return c.createElement(f,i({className:"s-contact-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?c.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:c.createElement(d,this.getComponentProps("background1"))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?c.createElement(p,this.getBackgroundProps("background1")):null,l.apply(this,[]))}}).call(t,n(9))},2294:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2219))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2295:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=(n(1968),n(2198)),r=(n(791),n(11),n(2197)),l=n(2227)
e.exports=function(){return o.createElement("div",i({className:"s-donation-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(r,s.assign({},{minimal:!0},this.getComponentProps("background1")))):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(a,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"s-ecommerce-container"},o.createElement(l,s.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("donation1"))),null)))}},2296:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=(n(315),n(1976),n(2198)),r=(n(791),n(11),n(2203)),l=n(2197),c=n(2228),u=n(1972)
e.exports=function(){return o.createElement("div",i({className:"s-section s-store-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(l,s.assign({},{minimal:!0},this.getComponentProps("background1"))),this._showLayoutButton()?o.createElement(r,s.assign({},{layoutOptions:this._getLayoutOptions()},this._getLayoutProps())):null,o.createElement(c,this.getComponentProps("ecommerce1"))):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(a,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"s-ecommerce-container"},o.createElement(u,s.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("ecommerce1"))),null)))}},2297:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2220))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2298:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=(n(315),n(2197)),r=n(1968),l=n(2004),c=n(2198),u=n(2199)
e.exports=function(){return o.createElement(u,i({className:"s-html-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(a,s.assign({},{bgClassNames:this.getThemeFeature("backgroundColorClassNames")},this.getComponentProps("background1")))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(r,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(c,{section:this,binding:this.getDefaultBinding()}),o.createElement(l,this.getComponentProps("html1")))))}},2299:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=(n(2230),n(315),n(2198))
n(2197)
e.exports=function(){return o.createElement("div",i({className:"s-icons-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(a,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n      ",this._renderRepeatable("repeatable1"),"\n    ")))}},2300:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2203),n(315),n(2197),n(1968),n(2198),n(2199),n(11),n(2221))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2301:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2212))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2302:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2212))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2303:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2220))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2304:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=(n(315),n(1976)),r=n(2198),l=(n(791),n(2197))
e.exports=function(){return o.createElement("div",i({className:"s-section s-social-feed-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(l,s.assign({},{minimal:!0},this.getComponentProps("background1")))):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{section:this,binding:this.getDefaultBinding()})),o.createElement(a,{componentName:"socialFeedComponent",componentProps:this.getComponentProps("social_feed1"),binding:this.getComponentBinding("social_feed1")}),null))}},2305:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2221))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2306:function(e,t,n){"use strict"
var i=n(1),o=(n(3),n(2219))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2307:function(e,t,n){"use strict"
var i=n(1)
n(3)
e.exports=function(){return i.createElement("div",{className:"s-section-thumb s-title-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),i.createElement("div",{className:"arrow-image"}))))}},2308:function(e,t,n){"use strict"
e.exports=n(2211)},2309:function(e,t,n){"use strict"
e.exports=n(2211)},2316:function(e,t,n){"use strict"
function i(e,t){var n=r.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=r.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(e){var t=this.props.showTermsLink
return a.createElement("div",{className:"has-copy-right"},a.createElement("div",{className:"columns no-float row sixteen"},a.createElement("div",{className:"separate-line"})),a.createElement("div",{className:"columns no-float row s-text-color-gray "+this.sbUniformTextAlignment("copyright")+" "+r.keys(r.pick({ten:t,sixteen:!t},r.identity)).join(" ")},a.createElement("div",{className:"left-align s-footer-text"},a.createElement(c,r.assign({},{textType:"body",binding:e},e.get().toObject())))),t?a.createElement("div",{className:"columns no-float row s-text-color-gray six"},a.createElement("div",{className:"right-align s-footer-text",style:{marginTop:"-10px"}},t?a.createElement(d,{className:"s-font-body"}):null)):null)}function s(){var e=this.getComponentBinding("copyright"),t=this.getComponentBinding("socialMedia")
return a.createElement("div",i({className:"s-footer-section s-section "+r.keys(r.pick({"has-terms-link":this.props.showTermsLink,"has-new-mobile-actions":this._hasMobileActions()},r.identity)).join(" ")},this.getThemeFeature("disableBackgrounds")?{}:this.getFooterBackgroundProps("background1")),this.isEditMode()?a.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},this.getThemeFeature("disableBackgrounds")?null:a.createElement(m,r.assign({},{minimal:!0,footerSection:!0},this.getComponentProps("background1"))),a.createElement(p,r.assign({},{layoutOptions:this._getLayoutOptions()},this._getFooterLayoutProps()))):null,"vertical"==this._getLayout()?a.createElement("div",{className:"container s-layout-vertical"},a.createElement("div",{className:"columns row sixteen "+this.sbUniformTextAlignment("copyright")},a.createElement("div",{},a.createElement(u.WaypointLazy,r.assign({},{binding:t,")":!0},t.toJS()))),a.createElement("div",{className:"s-footer-text"},a.createElement(c,r.assign({},{textType:"body",binding:e},e.get().toObject()))),this.props.showTermsLink?a.createElement(d,{className:"s-font-body"}):null)):null,"horizontal"==this._getLayout()?a.createElement("div",{className:"container s-layout-horizontal"},a.createElement("div",{className:"columns eight row"},a.createElement("div",{},a.createElement(u.WaypointLazy,r.assign({},{binding:t,")":!0},t.toJS())))),a.createElement("div",{className:"columns eight row"},a.createElement("div",{className:"right-align s-footer-text"},this.isEditMode()||e.get("value")?a.createElement(c,r.assign({},{textType:"body",binding:e},e.get().toObject())):null,this.props.showTermsLink?a.createElement(d,{className:l("s-font-body",{"s-compact":!this.isEditMode()&&!e.get("value")})+" "+this.sbUniformTextAlignment("copyright")}):null))):null,"grid"==this._getLayout()?a.createElement("div",{className:"container s-layout-grid"},this.sbHasContent("text1")?a.createElement("div",{className:"columns four half-fixed no-float row"},a.createElement("div",{className:"left-align s-footer-text"},a.createElement(c,r.assign({},{textType:"body",applyWordBreaks:"true",binding:this.getComponentBinding("text1")},this.getComponentProps("text1"))))):null,this.sbHasContent("text2")?a.createElement("div",{className:"columns four half-fixed no-float row"},a.createElement("div",{className:"left-align s-footer-text"},a.createElement(c,r.assign({},{textType:"body",applyWordBreaks:"true",binding:this.getComponentBinding("text2")},this.getComponentProps("text2"))))):null,this.sbHasContent("text3")?a.createElement("div",{className:"columns four half-fixed no-float row"},a.createElement("div",{className:"left-align s-footer-text"},a.createElement(c,r.assign({},{textType:"body",applyWordBreaks:"true",binding:this.getComponentBinding("text3")},this.getComponentProps("text3"))))):null,this.sbHasContent("socialMedia")?a.createElement("div",{className:"columns four half-fixed no-float right-align row"},a.createElement("div",{},a.createElement(u.WaypointLazy,r.assign({},{binding:t,")":!0},t.toJS()))),this.sbHasContent("copyright")?null:a.createElement("div",{},this.props.showTermsLink?a.createElement(d,{className:"s-font-body"}):null)):null,this.sbHasContent("socialMedia")?null:a.createElement("div",{className:"columns four half-fixed no-float right-align row s-text-color-gray"},this.sbHasContent("copyright")?a.createElement("div",{className:"s-footer-text"},a.createElement(c,r.assign({},{textType:"body",binding:e},e.get().toObject()))):null,this.props.showTermsLink?a.createElement("div",{className:"s-footer-text"},this.props.showTermsLink?a.createElement(d,{className:"s-font-body"}):null):null),this.sbHasContent("copyright")&&this.sbHasContent("socialMedia")?o.apply(this,[e,t]):null):null)}var a=n(1),r=n(3),l=n(14),c=n(315),u=n(845),d=n(2222),p=n(2203),m=(n(11),n(2197))
e.exports=function(){return this.props.showFooter?s.apply(this,[]):null}},2317:function(e,t,n){"use strict"
function i(e,t){var n=u.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=u.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(e,t,n,i,o){var s=this._sbHasMediaContent(i)
return c.createElement("div",{className:"inner"},"noForeground"!==o?c.createElement("div",{className:"container s-rva "+o},this._showMediaWrapper(o)?c.createElement("div",{className:"columns eight media-outer s-rva-media "+o+" "+u.keys(u.pick({"offset-four":!this._sbAnyHasContent(i,"text1 text2 button1")},u.identity)).join(" ")},c.createElement("div",{className:"media-wrapper"},c.createElement(d,u.assign({},{size:"medium"},this.getReduxComponentProps("media1",t.sub(i)))))):null,this._sbAnyHasContent(i,"text1 text2 button1")?c.createElement("div",{className:"columns s-rva-text slider-desc valign "+o+" "+u.keys(u.pick({eight:s,"fourteen offset-one":("noImage"==o||!s)&&this.getThemeFeature("narrowMedia"),sixteen:!("noImage"!=o&&s||this.getThemeFeature("narrowMedia"))},u.identity)).join(" ")},c.createElement("div",{className:u.keys(u.pick({"half-offset-right":"right"==o&&s},u.identity)).join(" ")},c.createElement(f,{section:this,binding:this.getDefaultBinding(),parentBinding:t.sub(i),contentCheck:"button1"}),c.createElement("div",{className:"cta-button-wrapper "+this.sbUniformTextAlignment("text1 text2",{parentBinding:t.sub(i)})},c.createElement(p,this.getComponentProps("button1",t.sub(i)))))):null):null)}function s(e,t,n,s){var a=this._getSliderLayout(s)
return c.createElement(g,i({className:"item "+a,key:s},this.getSliderBackgroundProps("background1",t.sub(s),a)),this.isEditMode()?c.createElement("div",{className:"s-section-editor-wrapper",skip:"true"},e?null:c.createElement(m,u.assign({},{allowColors:!1},this.getComponentProps("background1",t.sub(s)))),e?c.createElement(y,u.assign({},{warnningInfo:this._imageRatioWarnning(s),setStateFunc:this.setStateFunc},this.getComponentProps("background1",t.sub(s)))):null,e?null:c.createElement("s-layoutSelector",{},"\n          ",this._renderSliderLayoutBtn(s),"\n        ")):null,this.hasBackgroundVideo("background1",t.sub(s))?c.createElement(h,this.getBackgroundProps("background1",t.sub(s))):null,o.apply(this,[e,t,n,s,a]))}function a(e,t,n,i){return s.apply(this,[e,t,n,i])}function r(e){var t=this.getRepeatableBinding("slider1")
return c.createElement.apply(this,[v,u.assign({},{fullscreen:this.getThemeFeature("fullscreenSlider"),fullscreenSliderOnlyFirstSection:this.getThemeFeature("fullscreenSliderOnlyFirstSection"),index:this.props.index,getSliderLayouts:this._getSliderLayoutArr,isBanner:e,imgEditorState:this.state.imgEditorState},this.getComponentProps("slider1")),u.map(t.get().toArray(),a.bind(this,e,t))])}function l(){var e=this._isBannerSection()
return c.createElement("div",{className:"s-section s-slider-section "+u.keys(u.pick({"s-banner-section":e},u.identity)).join(" ")},r.apply(this,[e]))}var c=n(1),u=n(3),d=(n(315),n(790)),p=n(836),m=n(2197),h=n(1968),f=n(2198),g=n(2199),v=n(1993),y=n(1990)
e.exports=function(){return l.apply(this,[])}},2321:function(e,t,n){"use strict"
function i(e,t){var n=s.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=s.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(1),s=n(3),a=(n(315),n(2197),n(1968),n(2213)),r=n(2225),l=n(2198)
n(2203)
e.exports=function(){return o.createElement("div",i({className:"s-gallery-section s-section"},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,"fullWidth"!=this._getLayoutKey()?o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(l,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"columns sixteen",style:{transition:"none"}},"vertical"!=this._getLayoutKey()?o.createElement(a,s.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))):null,"vertical"==this._getLayoutKey()?o.createElement(r,s.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))):null)):null,"fullWidth"==this._getLayoutKey()?o.createElement("div",{className:"full-width-gallery"},o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(l,{section:this,binding:this.getDefaultBinding()}))),o.createElement(a,s.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1")))):null)}},2343:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(16),s=i(o),a=n(5),r=i(a),l=n(129),c=i(l),u=n(36),d=i(u),p=n(3),m=i(p)
t.default={init:function(){var e=m.default.debounce(this.rerender.bind(this),10)
$(window).resize(e)
if(!window.edit_page.isShowPage){d.default.Event.subscribe("Section.changed",e)
d.default.Event.subscribe("Slide.afterAdd",e)
d.default.Event.subscribe("Slide.afterDelete",e)
d.default.Event.subscribe("Slide.afterReorder",e)}this._setupDomEventHandlers()
this.rerender()},_setupDomEventHandlers:function(){$(".nav-container").on("click",".clickable-nav-item a",function(e){var t=$(this).attr("href")
if(!($(this).parents("#s-nav-more").length>0))switch(r.default.getSiteMode()){case"editor":e.preventDefault()
return c.default.replace(t)
case"preview":e.preventDefault()
return c.default.push(t)}})
$(".nav-container").on("click","#s-nav-more",function(e){e.preventDefault()
var t=$("#s-nav-more").offset().left+$("#s-nav-more").width()-$("#s-content .nav ul.overflow").width()
$("#s-content .nav ul.overflow").css("left",t)
var n=$(".nav-container .overflow")
return"hidden"===n.css("visibility")?n.css({visibility:"visible",opacity:1}):n.css({visibility:"hidden",opacity:0})})
$(".nav-container").on("click",".nav ul.overflow a",function(){return $(".nav-container .overflow").css({visibility:"hidden",opacity:0})})},rerender:function(){$("#s-nav-more").remove()
$("#s-content .nav ul.overflow").remove()
var e=$("#s-nav .items"),t=this._getCurrentSelectedNavItemIndex()
e.empty()
$("#s-nav .links > li:not(#s-ecommerce-nav-shopping-cart-wrapper):not(#loginContainer)").remove()
var n=$("#s-nav .links"),i=$("#s-original-nav .items > li").clone()
i.addClass("clickable-nav-item")
var o=i.find("*").addBack()
o.removeAttr("data-reactid")
s.default.getIsMultiPage()||null!==t&&i.eq(t).find(".s-nav-item").addClass("selected")
e.append(i)
var a=$("#s-original-nav .links li").clone()
a.find("*").addBack().removeAttr("data-reactid")
n.prepend(a)
this._adjustMenuLeftBorder()
var r=function(){return"none"!==this.style.display},l=i.filter(r).add(a),c=m.default.sum(l.map(function(){return $(this).width()+1})),u=$(".slides").width()-$("#s-nav .logo").outerWidth()-Math.ceil($("#s-nav .login-container").width()+$("#s-nav #s-ecommerce-nav-shopping-cart-wrapper").width())
s.default.hasSection("ecommerce")&&(u-=60)
var d=c+20<u
if(!d){var p=0,h=null,f=!1
l.each(function(){p+=$(this).outerWidth()
p>=u?f=!0:h=this
if(!f||$(this).hasClass("s-ecommerce-nav-shopping-cart-wrapper")||$(this).hasClass("login-container"))return $(this).removeClass("collapse")
$(this).addClass("collapse")
if($(this).has("s-nav-dropdown").length){$(this).html($(this).html().replace("▾",""))
return $(this).find("s-nav-dropdown").addClass("s-nav-dropdown-left")}})
$(h).addClass("collapse")
$(h).before('<li id="s-nav-more"><a href="#">•••</a></li>')
var g=$(".nav .items li.collapse, .nav .links li.collapse"),v=$('<ul class="overflow"></ul>')
g.clone().appendTo(v)
v.appendTo($("#s-content .nav"))}},_adjustMenuLeftBorder:function(){var e=$(".nav .items li:visible")
0===e.length?$(".nav .links").addClass("left-border"):$(".nav .links").removeClass("left-border")},_getCurrentSelectedNavItemIndex:function(){var e=null
if(!s.default.getIsMultiPage()){var t=$("#s-nav .items")
t.children().each(function(t,n){if($(n).find(".s-nav-item").hasClass("selected")){e=t
return!1}})}return e}}
e.exports=t.default},2348:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=new a.default(e).lumaCorrection(),i=null
i=t?new a.default(t).lumaCorrection():n
var o=n.toHex(),s=n.mult(.95).toHex(),r=n.mult(1.05).toHex(),c=i.lumaCorrection(-.6).lighten(.9).toHex(),u=l.default.generate({"subtitle itemSubtitle blogInfo mobileNavbarButtons":n,button:"\n      background-color: "+o+";\n      background-repeat: repeat-x;\n      background-image: linear-gradient(to bottom, "+r+", "+s+");\n    ",buttonHover:"\n      background: "+n.mult(1.2).toHex()+";\n    ",mobileActionButton:n,mobileActionButtonForApp:n,overlay:i.mult(.5).fade(.35),socialLinks:n.fade(.5),ecommerceGroup:{main:n,mobileBg:i.lumaCorrection(-.6).lighten(.8)},donationGroup:{main:n}})+("\n.s-custom-colors .navigator .nav-container .nav ul li a:hover,\n.s-custom-colors .navigator .nav-container .nav ul li a.selected {\n  background: "+c+";\n}\n.s-custom-colors .navigator .nav-container .nav ul.items li,\n.s-custom-colors .navigator .nav-container .nav ul.items,\n.s-custom-colors .navigator {\n  border-color: "+i.lumaCorrection(-.6).lighten(.7).toHex()+";\n}\n\n.s-custom-colors .s-section.s-bg-gray, .s-custom-colors .s-component.s-background .s-component-editor .stock-images li.s-bg-gray {\n  background-color: "+c+";\n}\n\n.s-custom-colors .dummy-shadow {\n  box-shadow: "+i.lumaCorrection(-.6).lighten(.8).toHex()+" 0 0 10px 0 inset;\n}\n.navbar-drawer.strikingly-drawer ul#nav-drawer-list {\n  border-right: 1px solid "+c+";\n}\n.navbar-drawer.strikingly-drawer ul#nav-drawer-list li a.selected {\n  background: "+c+";\n  box-shadow: 5px 0 0 0 "+i.lumaCorrection(-.6).lighten(.7).toHex()+" inset;\n}\n.navbar-drawer.strikingly-drawer ul#nav-drawer-list li a {\n  border-bottom: 1px solid "+i.lumaCorrection(-.6).lighten(.7).toHex()+";\n}")
return u}Object.defineProperty(t,"__esModule",{value:!0})
t.default=o
var s=n(520),a=i(s),r=n(2234),l=i(r)
e.exports=t.default},2367:function(e,t,n){"use strict"
var i,o,s,a,r,l,c,u,d
i=n(6)
c=n(3)
o=n(65)
u=n(36)
l=n(5)
r=n(16)
d=n(129)
s=n(318)
a=n(2343)
e.exports=function(){var e,t,n,r,l,c,d,p,m,h
e=function(e){i(".dummy-shadow").remove()
if(e){i(".s-section:even").removeClass("s-bg-gray").addClass("s-bg-white")
i(".s-section:odd").removeClass("s-bg-white").addClass("s-bg-gray")
i(".s-section").find(".s-section-editor-wrapper .s-background .stock-images li.s-bg-gray").addClass("s-bg-white-second")}else i(".s-section").find(".s-section-editor-wrapper .s-background .stock-images li.s-bg-gray").removeClass("s-bg-white-second")
if(!o.TH.Util.isIE())return i(".slides li.slide .s-section.s-bg-gray").filter(function(){return!i(this).find(".s-bg-image").length}).append('<div class="dummy-shadow"></div>')}
n=function(){var t,n
i("#s-content").hasClass("s-variation-black")&&(t=!0)
e(t)
n=i(".slide:not(.s-hidden-section) .s-section:visible")
if(t)return r(n)
s.collapsePaddingAdjacentSection(n)
return n.each(function(e,t){var o,a,r
o=i(t)
s.setThumbnailColor(o)
if(0!==e){a=i(n.eq(e-1))
if(o.hasClass("s-bg-gray")&&a.hasClass("s-bg-gray")){r=a.parent().find(".dummy-shadow")
o.parent().find(".dummy-shadow").addClass("bottom")
return r.hasClass("bottom")?r.remove():r.addClass("top")}}})}
r=function(e){return e.each(function(t,n){var o,a,r
o=i(n)
s.setThumbnailColor(o)
o.removeClass("collapse-bottom-padding")
if(0!==t){a=i(e.eq(t-1))
r=s.hasBgImageOrVideo(o)||s.hasBgImageOrVideo(a)
return o.hasClass("s-bg-gray")&&r?o.parent().find(".dummy-shadow").css("border-top","none"):o.hasClass("s-bg-white")&&r?a.parent().find(".dummy-shadow").css("border-bottom","none"):void 0}})}
n()
a.init()
m=0
h=null
t=function(){var e,t,n,o,s,a,r
"function"==typeof h&&h()
if(!(i(".slides").width()<=727)){n=i(".navigator")
t=i(".s-section").first()
e=t.find(".s-component.s-background, .s-component.s-layout, .s-component.s-slider-editor, .s-component.s-category-selector").not(".s-slider-section .s-component.s-background, .s-slider-section .s-component.s-layout")
o=t.closest(".slide").find(".premium-section-notice")
if(o.length){o.css("position","absolute")
e.push(o.get(0))}t.css("padding-top","")
e.css("top","")
m=n.height()
s=parseInt(t.css("padding-top"))
a=(parseInt(null!=(r=e.first().offset())?r.top:void 0)||0)-parseInt(i(".s-section-editor-wrapper").css("top"))
h=function(){t.css("padding-top",s+"px")
return e.css("top",a+"px")}
t.css("padding-top",s+m+"px")
return t.hasClass("strikingly-slider")?void 0:e.css("top",a+m-i(".s-mobile-top-bar").height()+"px")}}
t()
window.attachEvent&&!window.addEventListener&&i("#s-nav .logo").remove()
l=o.debounce(function(){n()
return t()},10)
c=o.debounce(function(){return n()},10)
if(!window.edit_page.isShowPage){u.Event.subscribe("Section.changed",c)
u.Event.subscribe("Slide.afterAdd",l)
u.Event.subscribe("Slide.afterDelete",l)
u.Event.subscribe("Slide.afterReorder",l)}u.Event.subscribe("Page.beforeNewOneFadeIn",function(){return l()})
i(window).resize(o.debounce(function(){return t()},10))
p=i("#s-content #s-nav")
d=i(".logo")
!u.isShowPage||p.find(".items li:visible").length||p.find(".links li").length||d.find("img").length||i(".navigator").hide()
!u.isShowPage||p.find(".items li:visible").length||p.find(".links li").length||d.css("padding-right","0px")
if(0===i(".navigator .logo .s-component-content a").length)return i(".navigator .logo .s-component-content img").css({cursor:"pointer"}).click(function(){return window.location.hash="#1"})}},2481:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/blog/thumbnail/cover.png"},2482:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/columns/thumbnail/cover.png"},2483:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/contact_form/thumbnail/cover.png"},2484:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/cta/thumbnail/cover.png"},2485:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/ecommerce/thumbnail/cover.png"},2486:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/gallery/thumbnail/cover.png"},2487:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/html/thumbnail/cover.png"},2488:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/icons/thumbnail/cover.png"},2489:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/info/thumbnail/cover.png"},2490:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/media/thumbnail/cover.png"},2491:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/rows/thumbnail/cover.png"},2492:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/signup_form/thumbnail/cover.png"},2493:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/slider/thumbnail/cover.jpg"},2494:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/social_feed/thumbnail/cover.jpg"},2495:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/text/thumbnail/cover.png"},2496:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/sections/title/thumbnail/cover.png"},2497:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/minimal/thumbnail.png"},3594:function(e,t,n){"use strict"
function i(e,t){return r.createElement("li",l.assign({},{key:t},this._getNavItemProps(e)),r.createElement("a",{className:"s-font-body s-nav-item",href:this.getSectionHash(t)},e.name))}function o(e,t,n){return r.createElement("li",{},r.createElement("a",{className:l.keys(l.pick({"s-nav-item s-font-body":!0,selected:n.selected},l.identity)).join(" "),target:n.newTarget?"_blank":"_self",href:n.path},"\n                  ",n.title,"\n                "))}function s(e,t){return r.createElement("li",{key:t},e.items?r.createElement("div",{className:l.keys(l.pick({"s-nav-item":!0,"s-nav-dropdown":!0},l.identity)).join(" ")},r.createElement("a",{className:"s-font-body s-nav-item "+l.keys(l.pick({selected:e.selected},l.identity)).join(" ")},e.title+" ","\n              ",r.createElement("i",{className:"fa fa-angle-down"})),r.createElement.apply(this,["ul",{className:l.keys(l.pick({"s-nav-item":!0,selected:e.selected},l.identity)).join(" ")},l.map(e.items,o.bind(this,e,t))])):null,e.items?null:r.createElement("a",{className:l.keys(l.pick({"s-nav-item":!0,"s-font-body":!0,selected:e.selected},l.identity)).join(" "),href:e.path,target:e.newTarget?"_blank":"_self"},e.title))}function a(e,t){return r.createElement(u,l.assign({},{updateTimeStamp:this._getTimestampForLinks(),key:t},e.getIn(["components","link"]).toObject()))}var r=n(1),l=n(3),c=(n(315),n(836),n(319)),u=n(2237)
e.exports=function(){return this.props.showNav?r.createElement("div",{className:"navigator s-navbar-section"},r.createElement("div",{className:"nav-container"},r.createElement("div",{className:"center nav",id:"s-nav"},this.sbHasContent("image1")?r.createElement("div",{className:"ib logo"},r.createElement(c,l.assign({},{size:"small",needTrim:"true"},this.getReduxComponentProps("image1")))):null,r.createElement("ul",{className:"ib items s-nav"}),r.createElement("ul",{className:"ib links"},r.createElement("div",{id:"loginContainer"}),r.createElement("li",{id:"s-ecommerce-nav-shopping-cart-wrapper",key:"ECOMMERCE_NAV_SHOPPING_CART_WRAPPER",className:"s-ecommerce-nav-shopping-cart-wrapper hidden"}))),r.createElement("div",{id:"s-original-nav"},r.createElement.apply(this,["ul",{className:"ib items s-nav"},this.props.isMultiPage?null:l.map(this.props.navbarItemData,i.bind(this)),this.props.isMultiPage?l.map(this.props.navbarItemData,s.bind(this)):null]),r.createElement.apply(this,["ul",{className:"ib links"},l.map(this.getBinding("submenu").get().toArray(),a.bind(this))])))):null}}})
;
