# JS开发工具函数

### 正则校验check工具函数

这里的正则表达式主要参考了[any-rule](https://github.com/any86/any-rule)。

#### 验证不能包含字母

```js
export const isNoWord = value => /^[^A-Za-z]*$/g.test(value)
```



#### 验证中文和数字

```js
export const isCHNAndEN = value => /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);
```



#### 验证邮政编码（中国）

```js
export const isPostcode = value => /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value);
```



#### 验证微信号，6至20位，以字母开头，字母、数字、减号、下划线

```js
export const isWeChatNum = value => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);
```



#### 验证16进制颜色

```js
export const isColor16 = value => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);
```



#### 验证火车车次

```js
export const isTrainNum = value => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value);
```



#### 验证手机机身码（IMEI）

```js
export const isIMEI = value => /^\d{15,17}$/g.test(value);
```



#### 验证必须带端口号的网址或ip

```js
export const isHttpAndPort = value => /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);
```



#### 验证网址（支持端口和`?+参数` 和 `#+参数`）

```js
export const isRightWebsite = value => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value);
```



#### 验证统一社会信用代码

```js
export const isCreditCode = value => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);
```



#### 验证迅雷链接

```js
export const isThunderLink = value => /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value);
```



#### 验证ed2k链接（宽松匹配）

```js
export const ised2k = value => /^ed2k:\/\/\|file\|.+\|\/$/g.test(value);
```



#### 验证磁力链接（宽松匹配）

```js
export const isMagnet = value => /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);
```



#### 验证子网掩码

```js
export const isSubnetMask = value => /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(value);
```



#### 验证`linux`文件夹路径

```js
export const isLinuxFolderPath = value => /^(\/[^/]+)+\/?$/g.test(value);
```



#### 验证`linux`文件路径

```js
export const isLinuxFilePath = value => /^(\/[^/]+)+$/g.test(value);
```



#### 验证`windows`文件夹路径

```js
export const isWindowsFolderPath = value => /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(value);
```



#### 验证`windows`文件路径

```js
export const isWindowsFilePath = value => /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g.test(value);export const isWindowsFolderPath = value => /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(value);
```



#### 验证股票代码（A股）

```js
/**
 *  @param { string } value
 */
export const isAShare = value => /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/g.test(value);

```



#### 验证版本号格式必须为X.Y.Z

```js
/**
 *  @param { string } value
 */
export const isVersion = value => /^\d+(?:\.\d+){2}$/g.test(value);
```



#### 验证视频链接地址（视频格式可按需增删）

```js
/**
 *  @param { string } value
 */
export const isVideoUrl = value => /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(value);

```



#### 验证图片链接地址（图片格式可按需增删）

```js
/**
 *  @param { string } value
 */
export const isImageUrl = value => /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value);

```



#### 验证银行卡号（10到30位，覆盖对公/私账户，参考微信支付）

```js
/**
 * @param { string } value
 */
export const isAccountNumber = value => /^[1-9]\d{9,29}$/g.test(value);
```



#### 验证中文姓名

```js
/**
 * @param { string } value
 */
export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);
```



#### 验证英文姓名

```js
/**
 * @param { string } value
 */
export const isEnglishName = value => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);
```



#### 验证车牌号（新能源）

```js
/**
 * @param { string } value
 */
export const isLicensePlateNumberNER = value => /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(value);
```



#### 验证车牌号（非新能源）

```js
/**
 * @param { string } value
 */
export const isLicensePlateNumberNNER = value => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(value);
```



#### 验证车牌号（新能源 + 非新能源）

```js
/**
 * @param { string } value
 */
export const isLicensePlateNumber = value => /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(value);
```



#### 验证手机号中国（严谨），根据工信部2019年最新公布的手机号段

```js
/**
 * @param { string } value
 */
export const isMPStrict = value => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value);
```



#### 验证手机号中国（宽松），只要是13、14、15、16、17、18、19开头即可

```js
/**
 * @param { string } value
 */
export const isMPRelaxed = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);
```



#### 验证email

```js
/**
 * @param { string } value
 */
export const isEmail = value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);
```



#### 验证座机电话（国内），如：0341-86091234

```js
/**
 * @param { string } value
 */
export const isLandlineTelephone = value => /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);
```



#### 验证身份证号（1代，15位数字）

```js
/**
 * @param { string } value
 */
export const isIDCardOld = value => /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value);
```



#### 验证身份证号（2代，18位数字），最后一位是校验位，可能为数字或字符X

```js
/**
 * @param { string } value
 */
export const isIDCardNew = value => /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);
```



#### 验证身份证号，支持1、2代

```js
/**
 * @param { string } value
 */
export const isIDCard = value => /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);
```



#### 验证护照（包含香港、澳门）

```js
/**
 * @param { string } value
 */
export const isPassport = value => /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(value);
```



#### 验证帐号是否合法（字母开头，允许5-16字节，允许字母数字下划线组合）

```js
/**
 * @param { string } value
 */
export const isWebAccount = value => /^[a-zA-Z]\w{4,15}$/g.test(value);
```



#### 验证中文/汉字

```js
/**
 * @param { string } value
 */
export const isChineseCharacter = value => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);
```



#### 验证小数

```js
/**
 * @param { string } value
 */
export const isDecimal = value => /^\d+\.\d+$/g.test(value);
```



#### 验证数字

```js
/**
 * @param { string } value
 */
export const isNumber = value => /^\d{1,}$/g.test(value);
```



#### 验证qq号格式

```js
/**
 * @param { string } value
 */
export const isQQNum = value => /^[1-9][0-9]{4,10}$/g.test(value);
```



#### 验证数字和字母组成

```js
/**
 * @param { string } value
 */
export const isNumAndStr = value => /^[A-Za-z0-9]+$/g.test(value);
```



#### 验证英文字母

```js
/**
 * @param { string } value
 */
export const isEnglish = value => /^[a-zA-Z]+$/g.test(value);
```



#### 验证大写英文字母

```js
/**
 * @param { string } value
 */
export const isCapital = value => /^[A-Z]+$/g.test(value);
```



#### 验证小写英文字母

```js
/**
 * @param { string } value
 */
export const isLowercase = value => /^[a-z]+$/g.test(value);
```



### 浏览器操作相关browser工具函数

#### 返回当前url

```js
export const currentURL = () => window.location.href
```



#### 获取url参数（第一种）

```js
/**
 * @param {*} name
 * @param {*} origin
 */

export function getUrlParam(name, origin = null) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = null;
    if (origin == null) {
        r = window.location.search.substr(1).match(reg);
    } else {
        r = origin.substr(1).match(reg);
    }
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}

```



#### 获取url参数（第二种）

```js
/**
 * @param {*} name
 * @param {*} origin
 */

export function getUrlParam(name, origin = null) {
  	let url = origin || window.location.href
    let temp1 = url.split('?')
    let pram = temp1[1]
    let keyValue = pram.split('&')
    let obj = {}
    for (let i = 0; i < keyValue.length; i++) {
      let item = keyValue[i].split('=')
      let key = item[0]
      let value = item[1]
      obj[key] = value
    }
  return obj[name]
}

```



#### 修改url中的参数

```js
/**
 * @param { string } paramName
 * @param { string } replaceWith
 */
export function replaceParamVal(paramName,replaceWith) {
    var oUrl = location.href.toString();
    var re=eval('/('+ paramName+'=)([^&]*)/gi');
    location.href = oUrl.replace(re,paramName+'='+replaceWith);
    return location.href;
}
```



#### 删除url中指定的参数

```js
/**
 * @param { string } name
 */
export function funcUrlDel(name){
    var loca =location;
    var baseUrl = loca.origin + loca.pathname + "?";
    var query = loca.search.substr(1);
    if (query.indexOf(name)>-1) {
        var obj = {};
        var arr = query.split("&");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("=");
            obj[arr[i][0]] = arr[i][1];
        }
        delete obj[name];
        var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
        return url
    }
}

```



#### 获取窗口可视范围的高度

```js
export function getClientHeight() {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    } else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
}

```



#### 获取窗口可视范围的宽度

```js
export function getPageViewWidth() {
    let d = document,
        a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
    return a.clientWidth;
}

```



#### 获取窗口宽度

```js
export function getPageWidth() {
    let g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

```



#### 获取窗口尺寸

```js
export function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}

```



#### 获取滚动条距顶部高度

```js
export function getPageScrollTop() {
    let a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
}

```



#### 获取滚动条距左边的宽度

```js
export function getPageScrollLeft() {
    let a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
}

```



#### 开启全屏

```js
/**
 * @param {*} element
 */
export function launchFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen()
    }
}

```



#### 关闭全屏

```js
export function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    }
}

```



#### 返回当前滚动条位置

```js
export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

```



#### 滚动到指定元素区域

```js
export const smoothScroll = element =>{
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
};
```



#### 平滑滚动到页面顶部

```js
export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

```



#### http跳转https

```js
export const httpsRedirect = () => {
    if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

```



#### 检查页面底部是否可见

```js
export const bottomVisible = () =>{
    return document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight || document.documentElement.clientHeight);
};

```



#### 打开一个窗口

```js
/**
 * @param { string } url
 * @param { string } windowName
 * @param { number } width
 * @param { number } height
 */
export function openWindow(url, windowName, width, height) {
    var x = parseInt(screen.width / 2.0) - width / 2.0;
    var y = parseInt(screen.height / 2.0) - height / 2.0;
    var isMSIE = navigator.appName == "Microsoft Internet Explorer";
    if (isMSIE) {
        var p = "resizable=1,location=no,scrollbars=no,width=";
        p = p + width;
        p = p + ",height=";
        p = p + height;
        p = p + ",left=";
        p = p + x;
        p = p + ",top=";
        p = p + y;
        window.open(url, windowName, p);
    } else {
        var win = window.open(
            url,
            "ZyiisPopup",
            "top=" +
            y +
            ",left=" +
            x +
            ",scrollbars=" +
            scrollbars +
            ",dialog=yes,modal=yes,width=" +
            width +
            ",height=" +
            height +
            ",resizable=no"
        );
        eval("try { win.resizeTo(width, height); } catch(e) { }");
        win.focus();
    }
}

```



#### 自适应页面(rem)

```js
/**
 * @param { number } width
 */
export function AutoResponse(width = 750) {
    const target = document.documentElement;
    target.clientWidth >= 600
        ? (target.style.fontSize = "80px")
        : (target.style.fontSize = target.clientWidth / width * 100 + "px");
}

```



### 日期工具date函数

#### 获取当前时间时间戳

```js
var timestamp = Date.parse(new  Date()); //精确到秒
var timestamp = (new Date()).valueOf();  //精确到毫秒
var timestamp = new Date().getTime(); //精确到毫秒
var timestamp = +new Date();
var timestamp = Date.now();

```



#### 获取指定时间时间戳

```js
var timestamp = (new Date(" 2019/10/24 08:00:00")).getTime();
var timestamp = (new Date(" 2019-10-24 08:00:00")).getTime();
```



#### 获取当前时间的前一天/后一天的时间戳

```js
var timestamp = +new Date() - 24*60*60*1000;
var timestamp = +new Date() + 24*60*60*1000;
```



#### 今日零点时间戳

```js
var timestamp = new Date(new Date().toLocaleDateString()).getTime();
```



#### 今日最晚时间23:59:59的时间戳

```js
let timestamp = new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1;
```



#### 获取当前时间的n天后的时间戳

```js
/**
 * @param {number} n 天数
 * @returns {Number} 返回值为时间毫秒值
 */
function toNextTimes(n){
    let timestamp = +new Date() + n * 86400000;
    return timestamp;
}
```



#### 本周第一天

```js
/***
 *  @return {*} WeekFirstDay 返回本周第一天的时间
 */
function showWeekFirstDay(){
    let Nowdate = new Date();
    let WeekFirstDay = new Date(Nowdate- (Nowdate.getDay() - 1) * 86400000);
    return WeekFirstDay;
}
```



#### 本周最后一天

```js
/***
 *  @return {*} WeekLastDay 返回本周最后一天的时间
 */
function showWeekLastDay(){
    let Nowdate=new Date();
    let WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);
    let WeekLastDay=new Date((WeekFirstDay/1000+6*86400)*1000);
    return WeekLastDay;
}
```



#### 本月第一天

```js
/***
 *  @return {*} MonthFirstDay 返回本月第一天的时间
 */
function showMonthFirstDay(){
    let Nowdate = new Date();
    let MonthFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth());
    return MonthFirstDay;
}
```



#### 本月最后一天

```js
/***
 *  @return {*} MonthLastDay 返回本月最后一天的时间
 */
function showMonthLastDay(){
    let Nowdate = new Date();
    let MonthNextFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth() + 1);
    let MonthLastDay = new Date(MonthNextFirstDay - 86400000);
    return MonthLastDay;
}
```



#### 日期转时间戳

```js
/**
 * @param {String} time - 日期字符串，如'2018-8-8','2018,8,8','2018/8/8'
 * @returns {Number} 返回值为时间毫秒值
 */
function timeToTimestamp (time) {
    let date = new Date(time);
    let timestamp = date.getTime();
    return timestamp;
}

```



#### 格式化当前时间

```js
/***
 *  @return {string} timeText 返回系统时间字符串
 */
function getdataTimeSec() {
    let time = new Date();
    let weekDay;
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    //获取时分秒
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    //检查是否小于10
    h = check(h);
    m = check(m);
    s = check(s);
    let now_day = time.getDay();
    switch (now_day) {
        case 0: {
            weekDay = "星期日"
        }
            break;
        case 1: {
            weekDay = "星期一"
        }
            break;
        case 2: {
            weekDay = "星期二"
        }
            break;
        case 3: {
            weekDay = "星期三"
        }
            break;
        case 4: {
            weekDay = "星期四"
        }
            break;
        case 5: {
            weekDay = "星期五"
        }
            break;
        case 6: {
            weekDay = "星期六"
        }
            break;
        case 7: {
            weekDay = "星期日"
        }
            break;
    }
    let timeText = year + "年" + month + "月" + day + "日  " + " " + weekDay + " " + h + ":" + m +":" + s;

    return timeText
}
```



#### 返回指定时间戳之间的时间间隔

```js
/**
 *  @param {*} startTime 开始时间的时间戳
 *  @param {*} endTime 结束时间的时间戳
 *  @return {string} str 返回时间字符串
 */
function getTimeInterval(startTime, endTime) {
    let runTime = parseInt((endTime - startTime) / 1000);
    let year = Math.floor(runTime / 86400 / 365);
    runTime = runTime % (86400 * 365);
    let month = Math.floor(runTime / 86400 / 30);
    runTime = runTime % (86400 * 30);
    let day = Math.floor(runTime / 86400);
    runTime = runTime % 86400;
    let hour = Math.floor(runTime / 3600);
    runTime = runTime % 3600;
    let minute = Math.floor(runTime / 60);
    runTime = runTime % 60;
    let second = runTime;
    let str = '';
    if (year > 0) {
        str = year + '年';
    }
    if (year <= 0 && month > 0) {
        str = month + '月';
    }
    if (year <= 0 && month <= 0 && day > 0) {
        str = day + '天';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour > 0) {
        str = hour + '小时';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute > 0) {
        str = minute + '分钟';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute <= 0 && second > 0) {
        str += second + '秒';
    }
    str += '前';
    return str;
}

```



#### 按类型格式化日期

```js
/**
 * @param {*} date 具体日期变量
 * @param {string} dateType 需要返回类型
 * @return {string} dateText 返回为指定格式的日期字符串
 */
function getFormatDate(date, dateType) {
    let dateObj = new Date(date);
  	let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let strDate = dateObj.getDate();
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let seconds = dateObj.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;

    }
    if (hours >= 0 && hours <= 9) {
        hours = "0" + hours
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds
    }
  	let dateText = dateType.replace(/yyyy/, year).replace(/MM/, month).replace(/dd/, strDate).replace(/hh/, hours).replace(/mm/, minutes).replace(/ss/, seconds)
    return dateText;
}
```



#### 判断是否为闰年

```js
/**
* @param  {number} year 要判断的年份
* @return {boolean} 返回布尔值
*/
function leapYear(year) {
    return !(year % (year % 100 ? 4 : 400));
}
```



#### 返回两个年份之间的闰年

```js
/**
* @param  {number} start 开始年份
* @param  {number} end 结束年份
* @return {array}  arr 返回符合闰年的数组
*/
function leapYears(start, end) {
    let arr = [];
    for (var i=start; i<end; i++) {
        if ( leapYear(i) ) {
            arr.push(i)
        }
    }
    return arr
}
```



#### 判断时间格式是否有效

```js
/**
* 短时间，如 (10:24:06)
* @param  {string} str 需要验证的短时间
* @return {boolean} 返回布尔值
*/
function isTime(str) {
    var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
    if (a == null) { return false; }
    if (a[1] >= 24 || a[3] >= 60 || a[4] >= 60) {
        return false
    }
    return true;
}

/**
* 短日期，形如 (2019-10-24)
* @param  {string} str 需要验证的短时间
* @return {boolean} 返回布尔值
*/
function strDateTime(str){
    var result = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (result == null) return false;
    var d = new Date(result[1], result[3] - 1, result[4]);
    return (d.getFullYear() == result[1] && d.getMonth() + 1 == result[3] && d.getDate() == result[4]);
}

/**
* 长日期时间，形如 (2019-10-24 10:24:06)
* @param  {string} str 需要验证的短时间
* @return {boolean} 返回布尔值
*/
function strDateTime(str){
    var result = str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
    if (result == null) return false;
    var d = new Date(result[1], result[3] - 1, result[4], result[5], result[6], result[7]);
    return (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[3] && d.getDate() == result[4] && d.getHours() == result[5] && d.getMinutes() == result[6] && d.getSeconds() == result[7]);
}
```



#### 验证日期大小

```js
/**
* 例："2019-10-24" 和 "2019-10-25"
* @param  {string} d1需要验证的日期1
* @param  {string} d2需要验证的日期2
* @return {boolean} 返回布尔值
*/
function compareDate(d1, d2) {
    return ((new Date(d1.replace(/-/g, "\/"))) < (new Date(d2.replace(/-/g, "\/"))));
}
```



#### 验证一个日期是不是今天

```js
/**
* @param  {string} val 需要验证的日期
* @return {boolean} 返回布尔值
*/
function isToday(val){
    return new Date().toLocaleDateString() == new Date(val).toLocaleDateString();
}
```



#### 验证传入的日期是否是昨天

```js
/**
* @param  {string} val 需要验证的日期
* @return {boolean} 返回布尔值
*/
function isYesterday(val) {
    var today = new Date();
    var yesterday = new Date(now - 1000 * 60 * 60 * 24);
    var test = new Date(val);
    if (yesterday.getYear() === test.getYear() && yesterday.getMonth() === test.getMonth() && yesterday.getDate() === test.getDate()) {
        return true;
    } else {
        return false;
    }
}
```



#### 设置几天后的日期

```js
/**
* @param  {string} date 起始日期
* @param  {number} day 向后的天数
* @return {string} 返回想要得到的日期
*/
function convertDate (date, day) {
    let tempDate = new Date(date);
    tempDate.setDate(tempDate.getDate()+day);
    let Y = tempDate.getFullYear();
    let M = tempDate.getMonth()+1 < 10 ? '0'+(tempDate.getMonth()+1) : tempDate.getMonth()+1;
    let D = tempDate.getDate() < 10 ? '0'+(tempDate.getDate()) : tempDate.getDate();
    let result = Y + "-" + M + "-" + D
    return result;
}
```





### 浏览器存储相关storage工具函数

主要为浏览器存储方面的工具函数，大部分搬运自大神[火狼1](https://juejin.im/post/5de5be53f265da05c33fcbb4)

#### localStorage存储

```js
/**
 * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
 * @param { String } key  属性
 * @param { string } value 值
 */
export const localStorageSet = (key, value) => {
    if (typeof (value) === 'object') value = JSON.stringify(value);
    localStorage.setItem(key, value)
};

```



#### localStorage获取

```js
/**
 * @param {String} key  属性
 */
export const localStorageGet = (key) => {
    return localStorage.getItem(key)
};

```



#### localStorage移除

```js
/**
 * @param {String} key  属性
 */
export const localStorageRemove = (key) => {
    localStorage.removeItem(key)
};

```



#### localStorage存储某一段时间后失效

```js
/**
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param { number } expire 过期时间,毫秒数
 */
export const localStorageSetExpire = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value);
    localStorage.setItem(key, value);
    setTimeout(() => {
        localStorage.removeItem(key)
    }, expire)
};

```



#### sessionStorage存储

```js
/**
 * @param {String} key  属性
 * @param {*} value 值
 */
export const sessionStorageSet = (key, value) => {
    if (typeof (value) === 'object') value = JSON.stringify(value);
    sessionStorage.setItem(key, value)
};

```



#### sessionStorage获取

```js
/**
 * @param {String} key  属性
 */
export const sessionStorageGet = (key) => {
    return sessionStorage.getItem(key)
};

```



#### sessionStorage删除

```js
/**
 * @param {String} key  属性
 */
export const sessionStorageRemove = (key) => {
    sessionStorage.removeItem(key)
};

```



#### sessionStorage存储某一段时间后失效

```js
/**
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
export const sessionStorageSetExpire = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
    setTimeout(() => {
        sessionStorage.removeItem(key)
    }, expire)
};

```



#### Cookie存储

```js
/**
 * @param {String} key  属性
 * @param {*} value  值
 * @param { String } expire  过期时间,单位天
 */
export const cookieSet = (key, value, expire) => {
    const d = new Date();
    d.setDate(d.getDate() + expire);
    document.cookie = `${key}=${value};expires=${d.toUTCString()}`
};
 
```



#### Cookie获取

```js
/**
 * @param {String} key  属性
 */
export const cookieGet = (key) => {
    const cookieStr = unescape(document.cookie);
    const arr = cookieStr.split('; ');
    let cookieValue = '';
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i].split('=');
        if (temp[0] === key) {
            cookieValue = temp[1];
            break
        }
    }
    return cookieValue
};
```



#### Cookie删除

```js
/**
 * @param {String} key  属性
 */
export const cookieRemove = (key) => {
    document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
};
```



### 更多其他的工具函数

包含了平时可能常用的工具函数，包含数字，字符串，数组和对象等等操作。



#### 金钱格式化，三位加逗号

```js
/**
 *  @param { number } num
 */
export const formatMoney = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

```



#### 截取字符串并加省略号

```js
export function subText(str, length) {
    if (str.length === 0) {
        return '';
    }
    if (str.length > length) {
        return str.substr(0, length) + "...";
    } else {
        return str;
    }
}

```



#### 获取文件base64编码

```js
/**
 * @param file
 * @param format  指定文件格式
 * @param size  指定文件大小(字节)
 * @param formatMsg 格式错误提示
 * @param sizeMsg   大小超出限制提示
 * @returns {Promise<any>}
 */
export function fileToBase64String(file, format = ['jpg', 'jpeg', 'png', 'gif'], size = 20 * 1024 * 1024, formatMsg = '文件格式不正确', sizeMsg = '文件大小超出限制') {
    return new Promise((resolve, reject) => {
        // 格式过滤
        let suffix = file.type.split('/')[1].toLowerCase();
        let inFormat = false;
        for (let i = 0; i < format.length; i++) {
            if (suffix === format[i]) {
                inFormat = true;
                break;
            }
        }
        if (!inFormat) {
            reject(formatMsg);
        }
        // 大小过滤
        if (file.size > size) {
            reject(sizeMsg);
        }
        // 转base64字符串
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            let res = fileReader.result;
            resolve({base64String: res, suffix: suffix});
            reject('异常文件，请重新选择');
        }
    })
}

```



#### B转换到KB、MB、GB并保留两位小数

```js
/**
 * @param { number } fileSize
 */
export function formatFileSize(fileSize) {
    let temp;
    if (fileSize < 1024) {
        return fileSize + 'B';
    } else if (fileSize < (1024 * 1024)) {
        temp = fileSize / 1024;
        temp = temp.toFixed(2);
        return temp + 'KB';
    } else if (fileSize < (1024 * 1024 * 1024)) {
        temp = fileSize / (1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'MB';
    } else {
        temp = fileSize / (1024 * 1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'GB';
    }
}

```



#### base64转file

```js
/**
 *  @param { base64 } base64
 *  @param { string } filename 转换后的文件名
 */
export const base64ToFile = (base64, filename )=> {
    let arr = base64.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let suffix = mime.split('/')[1] ;// 图片后缀
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], `${filename}.${suffix}`, { type: mime })
};

```



#### base64转blob

```js
/**
 *  @param { base64 } base64
 */
export const base64ToBlob = base64 => {
    let arr = base64.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};

```



#### blob转file

```js
/**
 *  @param { blob } blob
 *  @param { string } fileName
 */
export const blobToFile = (blob, fileName) => {
    blob.lastModifiedDate = new Date();
    blob.name = fileName;
    return blob;
};

```



#### file转base64

```js
/**
 * @param { * } file 图片文件
 */
export const fileToBase64 = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        return e.target.result
    };
};
```



#### 递归生成树形结构

```js
export function getTreeData(data, pid, pidName = 'parentId', idName = 'id', childrenName = 'children', key) {
    let arr = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i][pidName] == pid) {
            data[i].key = data[i][idName];
            data[i][childrenName] = getTreeData(data, data[i][idName], pidName, idName, childrenName);
            arr.push(data[i]);
        }
    }

    return arr;
}
```



#### 遍历树节点

```js
export function foreachTree(data, childrenName = 'children', callback) {
    for (let i = 0; i < data.length; i++) {
        callback(data[i]);
        if (data[i][childrenName] && data[i][childrenName].length > 0) {
            foreachTree(data[i][childrenName], childrenName, callback);
        }
    }
}
```



#### 追溯父节点

```js
export function traceParentNode(pid, data, rootPid, pidName = 'parentId', idName = 'id', childrenName = 'children') {
    let arr = [];
    foreachTree(data, childrenName, (node) => {
        if (node[idName] == pid) {
            arr.push(node);
            if (node[pidName] != rootPid) {
                arr = arr.concat(traceParentNode(node[pidName], data, rootPid, pidName, idName));
            }
        }
    });
    return arr; 
}
```



#### 寻找所有子节点

```js
export function traceChildNode(id, data, pidName = 'parentId', idName = 'id', childrenName = 'children') {
    let arr = [];
    foreachTree(data, childrenName, (node) => {
        if (node[pidName] == id) {
            arr.push(node);
            arr = arr.concat(traceChildNode(node[idName], data, pidName, idName, childrenName));
        }
    });
    return arr;
}

```



#### 根据pid生成树形结构

```js
/**
 *  @param { object } items 后台获取的数据
 *  @param { * } id 数据中的id
 *  @param { * } link 生成树形结构的依据
 */
export const createTree = (items, id = null, link = 'pid') =>{
    items.filter(item => item[link] === id).map(item => ({ ...item, children: createTree(items, item.id) }));
};
```



#### 查询数组中是否存在某个元素并返回元素第一次出现的下标

```js
/** 
 * @param {*} item 
 * @param { array } data
 */
export function inArray(item, data) {
    for (let i = 0; i < data.length; i++) {
        if (item === data[i]) {
            return i;
        }
    }
    return -1;
}
```



#### windows根据详细版本号判断当前系统名称

```js
/**
 * @param { string } osVersion 
 */
export function OutOsName(osVersion) {
    if(!osVersion){
        return
    }
    let str = osVersion.substr(0, 3);
    if (str === "5.0") {
        return "Win 2000"
    } else if (str === "5.1") {
        return "Win XP"
    } else if (str === "5.2") {
        return "Win XP64"
    } else if (str === "6.0") {
        return "Win Vista"
    } else if (str === "6.1") {
        return "Win 7"
    } else if (str === "6.2") {
        return "Win 8"
    } else if (str === "6.3") {
        return "Win 8.1"
    } else if (str === "10.") {
        return "Win 10"
    } else {
        return "Win"
    }
}
```



#### 判断手机是Android还是iOS

```js
/**
 *  0: ios
 *  1: android
 *  2: 其它
 */
export function getOSType() {
    let u = navigator.userAgent, app = navigator.appVersion;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS) {
        return 0;
    }
    if (isAndroid) {
        return 1;
    }
    return 2;
}

```



#### 函数防抖

```js
/**
 * @param { function } func
 * @param { number } wait 延迟执行毫秒数
 * @param { boolean } immediate  true 表立即执行，false 表非立即执行
 */
export function debounce(func,wait,immediate) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            let callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait);
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(() => {
                func.apply(context, args)
            }, wait);
        }
    }
}
```



#### 函数节流

```js
/**
 * @param { function } func 函数
 * @param { number } wait 延迟执行毫秒数
 * @param { number } type 1 表时间戳版，2 表定时器版
 */
export function throttle(func, wait ,type) {
    let previous, timeout;
    if(type===1){
        previous = 0;
    }else if(type===2){
        timeout = null;
    }
    return function() {
        let context = this;
        let args = arguments;
        if(type===1){
            let now = Date.now();

            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }else if(type===2){
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }

    }
}

```



#### 判断数据类型

```js
/**
 * @param {*} target 
 */
export function type(target) {
    let ret = typeof(target);
    let template = {
        "[object Array]": "array",
        "[object Object]":"object",
        "[object Number]":"number - object",
        "[object Boolean]":"boolean - object",
        "[object String]":'string-object'
    };

    if(target === null) {
        return 'null';
    }else if(ret == "object"){
        let str = Object.prototype.toString.call(target);
        return template[str];
    }else{
        return ret;
    }
}

```



#### 生成指定范围随机数

```js
/**
 * @param { number } min 
 * @param { number } max 
 */
export const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```



#### 数组乱序

```js
/**
 * @param {array} arr
 */
export function arrScrambling(arr) {
    let array = arr;
    let index = array.length;
    while (index) {
        index -= 1;
        let randomIndex = Math.floor(Math.random() * index);
        let middleware = array[index];
        array[index] = array[randomIndex];
        array[randomIndex] = middleware
    }
    return array
}
```



#### 数组交集

```js
/**
 * @param { array} arr1
 * @param { array } arr2
 */
export const similarity = (arr1, arr2) => arr1.filter(v => arr2.includes(v));
```



#### 数组中某元素出现的次数

```js
/**
 * @param { array } arr
 * @param {*} value
 */
export function countOccurrences(arr, value) {
    return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}
```



#### 加法函数（精度丢失问题）

```js
/**
 * @param { number } arg1
 * @param { number } arg2
 */
export function add(arg1, arg2) {
    let r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m
}

```



#### 减法函数（精度丢失问题）

```js
/**
 * @param { number } arg1
 * @param { number } arg2
 */
export function sub(arg1, arg2) {
    let r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}

```



#### 除法函数（精度丢失问题）

```js
/**
 * @param { number } num1
 * @param { number } num2
 */
export function division(num1,num2){
    let t1,t2,r1,r2;
    try{
        t1 = num1.toString().split('.')[1].length;
    }catch(e){
        t1 = 0;
    }
    try{
        t2=num2.toString().split(".")[1].length;
    }catch(e){
        t2=0;
    }
    r1=Number(num1.toString().replace(".",""));
    r2=Number(num2.toString().replace(".",""));
    return (r1/r2)*Math.pow(10,t2-t1);
}
```



#### 乘法函数（精度丢失问题）

```js
/**
 * @param { number } num1
 * @param { number } num2
 */
export function mcl(num1,num2){
    let m=0,s1=num1.toString(),s2=num2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}

```



#### 递归优化（尾递归）

```js
/**
 * @param { function } f
 */
export function tco(f) {
    let value;
    let active = false;
    let accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    };
}
```



#### 生成随机整数

```js
export function randomNumInteger(min, max) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * min + 1, 10);
        case 2:
            return parseInt(Math.random() * (max - min + 1) + min, 10);
        default:
            return 0
    }
}
```



#### 去除空格

```js
/**
 * @param { string } str 待处理字符串
 * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
 */
export function trim(str, type = 1) {
    if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
    switch (type) {
        case 1:
            return str.replace(/\s/g, "");
        case 2:
            return str.replace(/(^\s)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s)/g, "");
        case 4:
            return str.replace(/(\s$)/g, "");
        default:
            return str;
    }
}
```



#### 大小写转换

```js
/**
 * @param { string } str 待转换的字符串
 * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
 */

export function turnCase(str, type) {
    switch (type) {
        case 1:
            return str.toUpperCase();
        case 2:
            return str.toLowerCase();
        case 3:
            return str[0].toUpperCase() + str.substr(1).toLowerCase();
        default:
            return str;
    }
}
```



#### 随即16进制颜色 hexColor

```js
/**
 * 方法一
 */
export function hexColor() {

    let str = '#';
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
        let index = Number.parseInt((Math.random() * 16).toString());
        str += arr[index]
    }
    return str;
}

/**
 * 方法二
 */
export const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

```



#### 转义html(防XSS攻击)

```js
export const escapeHTML = str =>{
    str.replace(
        /[&<>'"]/g,
        tag =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
    );
};

```



#### 检测移动/PC设备

```js
export const detectDeviceType = () => { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'; };

```



#### 隐藏所有指定标签

```js
/**
 * 例: hide(document.querySelectorAll('img'))
 */
export const hideTag = (...el) => [...el].forEach(e => (e.style.display = 'none'));
```



#### 返回指定元素的生效样式

```js
/**
 * @param { element} el  元素节点
 * @param { string } ruleName  指定元素的名称
 */
export const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

```



#### 检查是否包含子元素

```js
/**
 * @param { element } parent
 * @param { element } child
 * 例：elementContains(document.querySelector('head'), document.querySelector('title')); // true
 */
export const elementContains = (parent, child) => parent !== child && parent.contains(child);

```



#### 数字超过规定大小加上加号'+'，如数字超过99显示99+

```js
/**
 * @param { number } val 输入的数字
 * @param { number } maxNum 数字规定界限
 */
export const outOfNum = (val, maxNum) =>{
    val = val ? val-0 :0;
    if (val > maxNum ) {
        return `${maxNum}+`
    }else{
        return val;
    }
};
```



