<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon"
          href="https://img2.baidu.com/it/u=645669258,2496124638&fm=253&fmt=auto&app=138&f=JPEG?w=502&h=500"
          type="image/png">
    <script>
        // 定义一个函数，用于每30分钟刷新页面
        function refreshPage() {
            location.reload(); // 刷新页面
        }

        // 调用setTimeout()函数，每30分钟秒钟执行一次refreshPage函数
        setTimeout(refreshPage, 36000000); // 10000毫秒 = 10秒
        window.onload = function () {
            var isWechat = /MicroMessenger/i.test(navigator.userAgent);
            if (isWechat) {
                alert("请用浏览器访问")
                var overlay = document.getElementById('overlay');
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        };
        window.addEventListener("load", getVisits);
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Source of Yinhai</title>
</head>
<body>
<script>
    function showMessageBox() {//--------------------------------------------------------------------------------------------
        var messageContent = " "; // 设置消息内容
        var messageBox = document.getElementById("messageBox");
        var messageContentElement = document.getElementById("messageContent");
        var countdown1Element = document.getElementById("countdown1");
        var currentIndex = 0;
        var countdown1Seconds = 10;//关闭时间为5秒

        // 显示消息框
        messageBox.style.display = "block";

        // 隐藏其他元素
        var otherElements1 = document.getElementById("otherElements1");
        otherElements1.style.display = "none";

        // 逐个显示消息内容
        function showMessage() {
            if (currentIndex < messageContent.length) {
                messageContentElement.innerHTML += messageContent[currentIndex];
                currentIndex++;
                setTimeout(showMessage, 100); // 每100毫秒显示一个字，可以根据需要调整速度
            }
            else {
                // 显示完毕后执行其他操作
                // 比如显示作者信息
                messageContentElement.innerHTML += "<br>-----殷海<br>";

                // 开始倒计时
                var countdown1Interval = setInterval(function() {
                    countdown1Seconds--;
                    countdown1Element.innerText = "剩余时间：" + countdown1Seconds + " 秒自动关闭消息，并刷新网页";
                    if (countdown1Seconds <= 0) {
                        clearInterval(countdown1Interval);
                        closeMessageBox();
                    }
                }, 1000); // 每秒更新一次倒计时

            }
        }

        showMessage();
    };

    function closeMessageBox() {
        var messageBox = document.getElementById("messageBox");
        messageBox.style.display = "none"; // 隐藏消息框

        // 显示其他元素
        var otherElements1 = document.getElementById("otherElements1");
        otherElements1.style.display = "block";
        setTimeout(function() {
            location.reload();
        }, 1000); // 1000毫秒 = 1秒
    }
</script>
<script>
    // Function to show the message box
    function showMessageBox1() {
        // Implement your code here to show the message box
        console.log("Message box shown.");
    }

    // Automatically click the button every 10 seconds
    setInterval(function() {
        document.querySelector('.visit-btn').click();
    }, 10000); // 10000 milliseconds = 10 seconds
</script>
<!--<div id="otherElements1">-->
<!--  &lt;!&ndash; 其他页面元素 &ndash;&gt;-->
<!--  <button onclick="showMessageBox() ">显示消息框</button>-->
<!--</div>-->





<div id="messageBox" style="display: none;">
    <div id="messageContent" style="font-size: 50px">
        <!-- 消息内容在JavaScript中设置 -->
    </div>
    <div id="countdown1"></div>
    <!--  <button id="closeBtn" onclick="closeMessageBox()" style="color: red">关闭</button>-->
</div>
<div id="content">

    <!-- Image and Video Section -->
    <div class="image-video-section" style="margin-bottom: 20px;">

        <button onclick="closeVideo()" style="display: none; background-color: red" id="closeButton" class="visit-btn">
            关闭视频
        </button>
        <video id="videoPlayer" width="auto" height="auto" controls style="display: none; border-radius: 10px;">
            <!-- The source will be set dynamically using JavaScript -->
            Your browser does not support the video tag.
        </video>
    </div>
    <div style="height: 20px;"></div>

    <style>
        .button-container {
            text-align: center;
        }

        .visit-btn1 {
            background-color: red;
            animation: bounce 1s infinite;
        }
    </style>


</div>
<style>
    #overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 9999;
        display: none;
    }

    #overlay img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
    }
</style>


<div id="overlay">
    <img src="https://cdn.seovx.com/ha/?mom=302" alt="Please use a browser to access this website">
</div>
<div id="otherElements">

    <div >


        <!--<button class="visit-btn" onclick="visitLink('https://enghon.lanzoum.com/b05f5hqla')">计算机组装课件密码：1234</button>-->

        <!--<button class="visit-btn" onclick="showMessageBox()">查看消息</button>-->

    </div>
    <span id="timeDate" style="color: #0033ff; text-align: center;background-color: #f0f0f0;font-size: 50px"></span>
    <span id="times" style="color: deeppink;"></span>
    <p>当前 IP 地址：<span id="ip"></span></p>
    <span id="device">设备信息：</span>
    <!--
    <p style="text-align: center">扫一扫分享本网站，点击放大图片 </p>
        <img src="icon/QR.png" style="width: 250px; height: 250px; margin-top: 0px; display: block; margin-left: auto; margin-right: auto;" onclick="magnify(this.src)" alt="QR Code"> -->
</div>
<code style="font-size: 60px; color: blue; font-family: 'Courier New', Courier, monospace;">

</code>



<!-- 消息框 -->


<style>
    #messageBox {
        display: none; /* 默认隐藏消息框 */
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #ffffff;
        padding: 20px;
        border: 1px solid #000000;
        z-index: 9999; /* 确保在最上层 */
        animation: bounce 0.5s infinite alternate;
    }

    @keyframes bounce {
        0% {
            top: 50%;
        }
        100% {
            top: 52%; /* 在垂直方向上的偏移量 */
        }
    }
</style>
<style>
    /* 消息框样式 */
    #messageBox {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotateX(30deg) rotateY(20deg) scale(1.1);
        background: linear-gradient(135deg, #00f3ff, #ff006a);
        padding: 20px;
        border: 2px solid #00f3ff;
        box-shadow: 0 0 50px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.5);
        color: #fff;
        font-family: Arial, sans-serif;
        text-align: center;
        z-index: 9999;
    }




    /* 消息框内容样式 */
    #messageContent {
        margin-bottom: 40px;
    }

    /* 关闭按钮样式 */
    #closeBtn {
        background-color: #f6ecec;
        border: none;
        color: #100f0f;
        padding: 8px 12px;
        font-size: 14px;
        cursor: pointer;
    }
</style>
<br>

<style>
    /* 隐藏放大图片 */
    #magnifyImg {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 9999;
    }

    /* 放大图片样式 */
    #magnifyImg img {
        display: block;
        margin: auto;
        width: auto;
        height: 60%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>


<!-- 放大显示的图片容器 -->
<div id="magnifyImg" onclick="this.style.display='none'">
    <img src="" alt="放大图片">
</div>

<script>
    function magnify(src) {
        var magnifyImg = document.getElementById("magnifyImg");
        var img = magnifyImg.querySelector("img");
        img.src = src;
        magnifyImg.style.display = "block";
    }
</script>

<script language="javascript">
    var now = new Date();

    function createtime() {
        var grt = new Date("01/13/2024 00:00:00");/*---这里是网站的启用时间--*/
        now.setTime(now.getTime() + 250);
        days = (now - grt) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if (String(hnum).length == 1) {
            hnum = "0" + hnum;
        }
        minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if (String(mnum).length == 1) {
            mnum = "0" + mnum;
        }
        seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if (String(snum).length == 1) {
            snum = "0" + snum;
        }
        document.getElementById("timeDate").innerHTML = "️站长殷海，资源来自全网，version=2.8--have runned " + dnum + " 天";
        document.getElementById("times").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒";
    }

    setInterval("createtime()", 250);
</script>

<audio id="myAudio">
    <source src="movie/鸡你太美.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>
<style>
    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>

<script>
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            search();

        }
    });


    function search() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const allContent = document.body.innerHTML.toLowerCase();
        const searchResults = [];
        let currentIndex = allContent.indexOf(searchTerm);
        while (currentIndex !== -1) {
            const start = Math.max(0, currentIndex - 10);
            const end = Math.min(allContent.length, currentIndex + searchTerm.length + 10);
            const matchedText = allContent.substring(start, end);
            searchResults.push({index: currentIndex, text: matchedText});
            currentIndex = allContent.indexOf(searchTerm, currentIndex + 1);
        }
        searchResults.forEach(result => {
            const index = result.index;
            const length = searchTerm.length;
            const content = document.body.innerHTML;
            const highlightedContent = content.substring(0, index) +
                '<span style="color: red; font-size: 50px; animation: blink 1s infinite; font-weight: bold;">' +
                content.substring(index, index + length) +
                '</span>' +
                content.substring(index + length);
            document.body.innerHTML = highlightedContent;

        });
    }
</script>


<div id="hiddenElements" >

    <input type="text" id="searchInput" placeholder="请输入搜索关键词模糊搜索">
    <button id="searchButton" onclick="search()">搜索</button>
      <h1 style="color: #f8bd0b">何鑫狗儿子</h1>
    <div id="searchResults">搜索内容会在页面闪烁</div>
    <code id="link12"
          style=" background-color: rgba(253,158,158,0.09); padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(234,92,92,0.55);">


        <div class="category-header" style="color: #3498db; font-size: 18px; margin-bottom: 10px;">📱 Easysign</div>
        <code>可为苹果手机安装破解软件</code>
        <button class="visit-btn" onclick="visitLink('https://www.i4.cn/news_detail_53550.html')">
            ios16以上系统打开开发者模式的方法，自签必须开启
        </button>
        <button class="visit-btn" onclick="visitLink('https://www.pgyer.com/tools/udid')">一键获取 udid</button>
        <button class="visit-btn" onclick="visitLink('https://qr.alipay.com/fkx11377f1hr6zddl1zxg31')">支付宝付款</button>
        <button class="visit-btn" onclick="visitLink('https://xyck.cc')">用证书安装轻松签，如果无效请百度轻松签</button>


        <button class="copy-btn" onclick="copyToClipboard('369931068', 'link7')">购买证书就25元一本，请认准此群才有售后，点击复制QQ群号
        </button>
        <button class="copy-btn" onclick="copyToClipboard('https://m.tb.cn/h.5E4wiid?tk=jxw0WOmnqXF', 'link7')">复制闲鱼链接下单
        </button>
        <!-- Resources -->
        <div class="category-header" style="color: #3498db; font-size: 18px; margin-bottom: 10px;">🚀 Resources
        </div>

        <!--            </button>-->
        <button class="visit-btn" onclick="visitLink('https://fk.jiejingfan.vip?from=2690')">晴天源</button>
        <button class="copy-btn" onclick="copyToClipboard('#小程序://91IOS/hXIgxc5oSntvwuD', 'link9')">点击复制91ios 小程序地址
        </button>
        <button class="visit-btn" onclick="visitLink('https://alist.91ios.fun')">访问91ios网盘</button>
        <button class="visit-btn" onclick="visitLink('https://91ios.fun')">访问91ios资源网</button>
        <button class="copy-btn" onclick="copyToClipboard('https://apt.91ios.fun/appstore', 'link8')">
            点击复制91ios轻松签软件源
        </button>
        <button class="visit-btn" onclick="visitLink('esign://addsource?url=https://apt.91ios.fun/appstore')">
            一键导入91ios轻松签源
        </button>
        <br>
         <button style="color: red" onclick="visitLink('http://6f39e2dd.r27.cpolar.top')">我的文件服务器</button>
         <button style="color: red" onclick="visitLink('https://enghon.serv00.net/')">我的文件服务器（备份）</button>
        <button class="visit-btn" onclick="visitLink('https://pan.zgios.cn')">访问宅哥资源网盘</button>
        <button class="visit-btn" onclick="visitLink('https://enghon.lanzouk.com/i4ySr299tb3e')">机场</button>
        <button class="visit-btn" onclick="visitLink('http://app.pgbug.com')">访问宅哥资源</button>
        <button class="visit-btn" onclick="visitLink('https://pan.cwser.club')">宠物鼠儿资源</button>
        <button class="visit-btn" onclick="visitLink('https://pan.wxqqurl.cn/appku/share')">爱锋助手网盘</button>
        <br>
        <button class="visit-btn" onclick="visitLink('https://macvk.com/')">Macvk</button>
        <button class="visit-btn" onclick="visitLink('https://macwk.cn/')">Macwk</button>

        <button class="visit-btn" onclick="visitLink('https://www.seemac.cn/')">seemac</button>
        <button class="visit-btn" onclick="visitLink('https://www.macat.vip/')">马克喵</button>
        <button class="visit-btn" onclick="visitLink('https://foxirj.com/')">佛系软件</button>
        <button class="visit-btn" onclick="visitLink('https://motrix.app/')">motrix高速下载器</button>
        <button class="visit-btn" onclick="visitLink('https://juzi1.app/')">橘子视频</button>
        <button class="visit-btn" onclick="visitLink('https://xszys.com')">小柿子影视</button>
        <button class="visit-btn" onclick="visitLink('https://www.sixyin.com/8498.html')">洛雪音乐音源1</button>
        
        <button class="visit-btn"
                onclick="visitLink('https://apps.apple.com/cn/app/addons-浏览器扩展插件广告拦截/id6446811843')">
            Addons，Safari扩展网页视频嗅探脚本暗黑模式等
        </button>
       
        <br>

        <!-- Hackintosh -->
        <div class="category-header"
             style="color: #3498db; font-size: 18px; margin-top: 20px; margin-bottom: 10px;">🖥️
            Hackintosh
        </div>
        <button class="visit-btn" onclick="visitLink('https://github.com/daliansky/Hackintosh')">黑苹果EFI</button>
        <button class="visit-btn" onclick="visitLink('https://github.com/JeoJay127/RapidEFI-Tool')">RapidEFI</button>
        <button class="visit-btn" onclick="visitLink('https://www.bilibili.com/video/BV1u5411V7Mf?t=145.2')">黑苹果教程1
        </button>
        <button class="visit-btn" onclick="visitLink('https://www.bilibili.com/video/BV1Z34y1y7VA?t=99.4')">黑苹果教程2
        </button>
        <button class="visit-btn" onclick="visitLink('https://blog.daliansky.net/')">黑果小兵部落</button>
        <button class="visit-btn" onclick="visitLink('https://github.com/dortania/OpenCore-Legacy-Patcher/releases')">
            OpenCore Legacy Patcher
        </button>
        <button class="visit-btn" onclick="visitLink('https://cloud.189.cn/web/share?code=UnuMJrNR3Ubm（访问码：rb8i）')">
            黑苹果工具
        </button>
        <br>

        <!-- Tools and Utilities -->
        <div class="category-header"
             style="color: #3498db; font-size: 18px; margin-top: 20px; margin-bottom: 10px;">🔧
            Tools and Utilities
        </div>
        <button class="visit-btn" onclick="visitLink('https://wormhole.app/')">临时文件传输</button>
         <button class="visit-btn" onclick="visitLink('https://enghon.lanzouk.com/i4ySr299tb3e')">机场</button>
         <button class="visit-btn" onclick="visitLink('https://enghon.lanzouk.com/b05f53oha')">我的系统工具</button>
        <button class="visit-btn" onclick="visitLink('http://hbkgds.com')">各种接口</button>
        <button class="visit-btn" onclick="visitLink('jsq.html')">网页计时器</button>
        <button class="visit-btn" onclick="visitLink('https://www.itab.link/')">itab</button>
        <button class="visit-btn"
                onclick="visitLink('https://www.icloud.com/shortcuts/7c613ba89f844d64a7c961ca9eeea053')">苹果手机快捷指令工具箱
        </button>
        <button class="visit-btn" onclick="visitLink('https://tool.liumingye.cn/music')">歌曲免费下载</button>
        <button class="visit-btn" onclick="visitLink('https://www.tampermonkey.net/')">油猴浏览器脚本</button>
        <button class="visit-btn" onclick="visitLink('https://vip.bljiex.com/')">全网视频免费看</button>
        <button class="visit-btn" onclick="visitLink('https://www.y821.com/')">西瓜视频在线看</button>

        <button class="visit-btn" onclick="visitLink('https://www.94speed.com')">百度网盘解析下载</button>
        <button class="visit-btn" onclick="visitLink('sileo://source/https://byg.iosios.net/')">搬运工越狱源</button>
        <button class="visit-btn" onclick="visitLink('sileo://source/https://xiangfeidexiaohuo.github.io/')">刀刀越狱源
        </button>
        <button class="visit-btn" onclick="visitLink('sileo://source/https://laileld.github.io/repo/')">来了老弟越狱源</button>
        <button class="visit-btn" onclick="visitLink('https://mp.weixin.qq.com/s/vNAYa5BMTFw1DSkSeniO2g')">其它越狱源
        </button>
        <br>


        <!-- Academic Tools -->
        <div class="category-header"
             style="color: #3498db; font-size: 18px; margin-top: 20px; margin-bottom: 10px;">📚
            Academic Tools
        </div>
        <button class="visit-btn" onclick="visitLink('https://www.paperask.com/NoLoginPost.aspx')">论文查重 1</button>
        <button class="visit-btn" onclick="visitLink('https://www.paperyy.com/NoLoginPost.aspx')">论文查重 2</button>
        <button class="visit-btn" onclick="visitLink('https://www.paperpass.com')">（查重+AIGC检测）</button>
        <button class="visit-btn" onclick="visitLink('http://www.papereasy.com/online/')">免费降重</button>
        <button class="visit-btn" onclick="visitLink('https://www.processon.com/')">Processon在线绘图</button>
        <button class="visit-btn" onclick="visitLink('https://www.daokeyuedu.com/')">稻壳阅读器免费看文档</button>
        <button class="visit-btn" onclick="visitLink('https://portal.sclib.org/interlibSSO/main/main.jsp')">
            四川省图书馆可免费知网
        </button>
        <button class="visit-btn" onclick="visitLink('https://enghon.lanzoum.com/b05f5hqla')">计算机组装课件</button>
        <br>

        <div class="category-header"
             style="color: #3498db; font-size: 18px; margin-top: 20px; margin-bottom: 10px;">📲
            Trollstore
        </div>
        <button class="visit-btn" onclick="visitLink('https://ios.cfw.guide/installing-trollstore/')">
            巨魔商店支持的设备系统范围和安装方法
        </button>
        <button class="visit-btn"
                onclick="visitLink('https://pan.zgios.cn/%E5%B7%A8%E9%AD%94%E5%AE%89%E8%A3%85%E5%B7%A5%E5%85%B7')">
            安装工具
        </button>
        <button class="visit-btn" onclick="visitLink('https://www.123pan.com/s/1wUuVv-IcqVv')">巨魔应用集合</button>
        <br>
        <button class="visit-btn"
                onclick="visitLink('https://www.bilibili.com/video/BV1zt4y1R77m/?spm_id_from=333.337.search-card.all.click&vd_source=b5eb0a32113325486b9781e315944468')">
            16系统iPad改台前调度：
        </button>

        <!-- Add the "换图标" button -->


        <button class="visit-btn" onclick="visitLink('https://enghon.lanzouh.com/b05ewlbmb')">换图标密码 1234</button>
      <button onclick="window.location.href='1.pdf'" type="button" id="add">新增</button>


        


        <!-- Entertainment -->
        <div class="category-header"
             style="color: #3498db; font-size: 18px; margin-top: 20px; margin-bottom: 10px;">🎮
            Entertainment
        </div>
        <button class="visit-btn" onclick="visitLink('https://www.youtube.com')">YouTube</button>
        <button class="visit-btn" onclick="visitLink('https://chat.openai.com/')">Chatgpt官网</button>
        <button class="visit-btn" onclick="visitLink('https://www.tiktok.com/')">Tiktok</button>
        <button class="visit-btn" onclick="visitLink('https://chat18.aichatos.xyz/')">免费 ChatGPT</button>
        <br>
        <!-- VPN and Chatgpt -->
        <div class="category-header"
             style="color: #3498db; font-size: 18px; margin-top: 20px; margin-bottom: 10px;">🌐
            Apple
        </div>
        <!--        <button class="visit-btn" onclick="visitLink('https://mitce.com/aff.php?aff=5065')">MITCE vpn 速度非常快-->
        <!--            1000mbps/s，可 ChatGPT&#45;&#45;强烈推荐-->
        </button>


        <button class="visit-btn" onclick="visitLink('https://suburl.v1.mk/')">节点链接客户端转换</button>

        <button class="visit-btn " onclick="promptForPassword()">外区苹果🆔密码是今天的月日，例0123</button>
        <span id="psw1"> </span>


        <div class="category-header"
             style="color: #3498db; font-size: 18px; margin-top: 20px; margin-bottom: 10px;">🪪
            Apple Enterprise Certificate
        </div>


        <script>
            document.querySelector('.copy-btn1').addEventListener('click', function () {
                var password = prompt('请输入密码:');
                // 发送密码到服务器进行验证
                // 假设已经从服务器端获得了密码
                var correctPassword = "从服务器获得的密码"; // 这里用实际的密码替换

                // 通过 AJAX 请求获取 psw.txt 文件内容
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'psw.bat', true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var fileContent = xhr.responseText.trim();
                        var lines = xhr.responseText.split('\n');
                        var filePassword = lines[3].trim();
                        var fileGroupID = lines[4].trim();
                        if (password === filePassword) {
                            alert('群号：' + fileGroupID);
                            // 复制到剪贴板
                            var dummy = document.createElement("input");
                            document.body.appendChild(dummy);
                            dummy.setAttribute('value', '11111');
                            dummy.select();
                            document.execCommand('copy');
                            document.body.removeChild(dummy);
                        } else {
                            alert('密码错误或文件内容不匹配!');
                        }
                    }
                };
                xhr.send();
            });
        </script>


        <button class="visit-btn" onclick="visitLink('https://apporanges.lanzoub.com/b0cfcmzwj')">访问</button>
        <div class="category-header"
             style="color: #3498db; font-size: 18px; margin-top: 20px; margin-bottom: 10px;">💵
            Donation
        </div>
        <button class="visit-btn" onclick="showImage('icon/wx.png')">微信捐赠</button>
        <button class="visit-btn" onclick="visitLink('https://qr.alipay.com/fkx11377f1hr6zddl1zxg31')">支付宝捐赠
        </button>

        <!-- Image and Video container -->
        <div id="imageContainer" style="display: none;">
            <h3 style="color: #3498db;">非常感谢，你的支1持就是动力</h3>
            <img id="displayedImage" width="300" height="400" alt="Displayed Image">
        </div>


    </code>
    <iframe src="https://chat.tinycms.xyz:3002/?ref=ccbaohe.com" width="100%" height="800px" frameborder="0"
            style="background-color: rgba(229,13,13,0)!important;"></iframe>
    <iframe src="https://tool.liumingye.cn/music" width="100%" height="800px" frameborder="0"
            style="background-color: rgba(229,13,13,0)!important;"></iframe>

    <iframe src="https://chat18.aichatos.xyz/" width="0px" height="0px" frameborder="0"
            style="background-color: rgba(229,13,13,0)!important;"></iframe>
    <!--<iframe src="https://www.y821.com/" width="100%" height="800px" frameborder="0"
            style="background-color: rgba(229,13,13,0)!important;"></iframe>-->
    <span id="span_tag"></span>


</div>


<div class="popup-overlay1" id="popupOverlay1">
    <div class="popup" id="popupContent1">
        <p id="popupMessage"></p>
        <input type="password" id="password-input" placeholder="请输入密码">
        <button id="submit-password" onclick="checkPassword()">确认</button>
    </div>
</div>
<div class="popup-overlay" id="popupOverlay">
    <div class="popup" id="popupContent">
        <p>复制成功！</p>
        <p id="countdown">3</p>
    </div>
</div>


<!--开站时间开始-->
</a>
<div style="text-align: center;"><a class="nav-link"

>
    <br>

    <span class="nav-item">
                </span></a><a class="nav-link">

</a></div>




<script>
    // 发送HTTP GET请求，获取响应内容
    var response = new XMLHttpRequest();
    response.open("GET", "http://hbkgds.com/api/tj.php?name=yhAPI&a=2", true);
    response.send();

    // 获取响应内容的文本
    response.onreadystatechange = function () {
        if (this.readyState == 4 || this.status == 200) {
            var text = this.responseText;

            // 将响应内容的文本赋给span标签的innerHTML属性
            document.getElementById("span_tag").innerHTML = text;
        }
    };
</script>


</span>

<style>


    /* 当屏幕宽度超过800px时，应用不同的背景图 */
    @media (min-width: 531px) {
        body {
            background: url('https://cdn.seovx.com/ha/?mom=302');
            /*background: url('https://cdn.seovx.com/?mom=302');*/
        }
    }

    @media (max-width: 530px) {
        body {
            background: url('https://cdn.seovx.com/ha/?mom=302');
        }
    }

    body {

        /*美女*/
        /*background: url('https://cdn.seovx.com/?mom=302');*/
        /*古风*/
        /*background: url('https://cdn.seovx.com/ha/?mom=302');*/
        /*表情包*/
        /*background: url('https://api.isoyu.com/ARU_GIF_S.php');*/

        /*background-size: 600px auto;*/
        background-size: 600px auto;
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        padding: 20px;
        margin: 0;
        /* Remove overflow: hidden; to allow scrolling */
        transition: filter 0.5s ease-in-out;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .grayscale {
        filter: grayscale(100%);
    }

    .popup-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    .popup-overlay1 {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    .popup {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
    }

    code {
        display: block;
        padding: 10px;
        background-color: #f0f0f0;
        margin: 10px 0;
        word-wrap: break-word;
    }

    .copy-btn, .visit-btn {
        background-color: #4caf50;
        border: none;
        color: white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
    }

    #password-input {
        margin-top: 10px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    #submit-password {
        margin-top: 10px;
        padding: 8px 16px;
        background-color: #4caf50;
        border: none;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    }

    #fullscreenContainer {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        visibility: hidden; /* 初始隐藏 */
    }

    /* 按钮样式 */
    #fullscreenButton {
        padding: 20px;
        font-size: 18px;
        background-color: #2ecc71;
        color: #fff;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    #fullscreenButton:hover {
        background-color: #27ae60;
        transform: scale(1.05);
    }


</style>
<style>
    #searchInput {
        padding: 8px;
        margin-right: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    #searchButton {
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }

    #searchResults {
        margin-top: 20px;
    }

    .searchResult {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f9f9f9;
    }

    .searchResult a {
        text-decoration: none;
        color: #333;
    }
</style>
<script>
    // JavaScript function to show images
    function showImage(imagePath) {
        var imageContainer = document.getElementById('imageContainer');
        var displayedImage = document.getElementById('displayedImage');
        // Set the image source
        displayedImage.src = imagePath;
        // Show the image container
        imageContainer.style.display = 'block';
        // Show the close button for video player
        document.getElementById('closeButton').style.display = 'none';
    }

    // JavaScript functions for video playback and download
    function playVideo(videoPath) {
        var video = document.getElementById('videoPlayer');
        var closeButton = document.getElementById('closeButton');
        // Set the video source dynamically
        video.src = videoPath;
        // Show the video player
        video.style.display = 'block';
        // Show the close button for video player
        closeButton.style.display = 'block';
        // Play the video
        video.play();
    }

    // JavaScript function to close the video player
    function closeVideo() {
        var video = document.getElementById('videoPlayer');
        var closeButton = document.getElementById('closeButton');
        // Pause the video
        video.pause();
        // Hide the video player and close button
        video.style.display = 'none';
        closeButton.style.display = 'none';
    }
</script>
<script>
    function showElements() {
        // 获取用户的 IP 地址，这是一个简化的示例，实际中需要使用后端服务获取
        window.onload = function () {
            var isWechat = /MicroMessenger/i.test(navigator.userAgent);
            if (isWechat) {
                alert("请用浏览器访问")
                var overlay = document.getElementById('overlay');
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        };

        var audio = document.getElementById('myAudio');
        //audio.play();

        // Show the initially hidden elements
        document.getElementById('hiddenElements').style.display = 'block';
        // Call the function to visit the website if needed
        visitLink('http://hbkgds.com/api/tj.php?name=yhAPI&a=1');

        // Show the initially hidden elements
        // Show the initially hidden elements
        document.getElementById('hiddenElements').style.display = 'block';

        // Hide the button
        document.querySelector('.visit-btn1').style.display = 'none';
    }

    // If you have the visitLink function, you can define it here
    function visitLink(url) {
        // Implement the logic to visit the link
        window.location.href = url;
    }
</script>

<script>
    ((function () {
        var callbacks = [],
            timeLimit = 50,
            open = false;
        setInterval(loop, 1);
        return {
            addListener: function (fn) {
                callbacks.push(fn);
            },
            cancleListenr: function (fn) {
                callbacks = callbacks.filter(function (v) {
                    return v !== fn;
                });
            }
        }

        function loop() {
            var startTime = new Date();
            debugger;
            if (new Date() - startTime > timeLimit) {
                if (!open) {
                    callbacks.forEach(function (fn) {
                        fn.call(null);
                    });
                }
                open = true;
                window.stop();
                alert('不要扒我了');
                window.location.reload();
            } else {
                open = false;
            }
        }
    })()).addListener(function () {
        window.location.reload();
    });

    document.oncontextmenu = function () {
        var audio = document.getElementById('myAudio');
        audio.play();
        alert("禁止右键");

        return false;
    };

    document.onkeydown = function (e) {
        if (e.keyCode == 123) {
            var audio = document.getElementById('myAudio');
            audio.play();
            alert("禁止使用 F12 和开发者工具！");
            return false;
        }
    };
</script>
<script>
    function getDeviceInfo() {
        var userAgent = navigator.userAgent;
        var deviceInfo = {};

        // 获取手机品牌
        var mobileBrands = ['iPhone', 'iPad', 'iPod', 'Android', 'Windows Phone', 'BlackBerry', 'Samsung', 'HTC', 'Nokia'];
        for (var i = 0; i < mobileBrands.length; i++) {
            if (userAgent.indexOf(mobileBrands[i]) !== -1) {
                deviceInfo.mobileBrand = mobileBrands[i];
                break;
            }
        }

        // 获取手机型号
        var mobileModelMatch = userAgent.match(/(iPhone|iPad|iPod|Android|Windows Phone|BlackBerry);? ([^)\s]+)/);
        if (mobileModelMatch) {
            deviceInfo.mobileModel = mobileModelMatch[2];
        }

        // 获取手机系统版本
        var mobileSystemVersionMatch = userAgent.match(/(Android|iPhone|iPad|iPod)\s([\d_]+)/);
        if (mobileSystemVersionMatch) {
            deviceInfo.mobileSystemVersion = mobileSystemVersionMatch[2].replace(/_/g, '.');
        }

        // 获取电脑品牌
        var computerBrands = ['Dell', 'HP', 'Lenovo', 'Acer', 'Asus', 'Microsoft', 'Sony', 'Toshiba'];
        for (var j = 0; j < computerBrands.length; j++) {
            if (userAgent.indexOf(computerBrands[j]) !== -1) {
                deviceInfo.computerBrand = computerBrands[j];
                break;
            }
        }

        // 获取电脑型号
        var computerModelMatch = userAgent.match(/Windows NT\s([\w.]+)/);
        if (computerModelMatch) {
            deviceInfo.computerModel = computerModelMatch[1];
        }


        // 获取电脑系统
        var computerSystemMatch = userAgent.match(/(Windows NT|Mac OS|Linux)\s?([\d._]*)/);
        if (computerSystemMatch) {
            deviceInfo.computerSystem = computerSystemMatch[1];
            deviceInfo.computerSystemVersion = computerSystemMatch[2];
        }

        return deviceInfo;
    }

    // 调用函数获取设备信息
    var deviceInfo = getDeviceInfo();
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    window.addEventListener('load', function () {
        // 判断屏幕宽度并弹窗提示
        if (window.innerWidth < 530) {
            document.getElementById("device").innerHTML = "手机品牌:" + deviceInfo.mobileBrand + " 手机型号:" + deviceInfo.mobileModel + " 手机系统版本:" + deviceInfo.mobileSystemVersion + " 分辨率：" + screenWidth + "x" + screenHeight
            // var p1 = 'https://cdn.seovx.com/?mom=302'
            //alert('你正在用手机访问');
        } else if (window.innerWidth < 1200) {
            document.getElementById("device").innerHTML = "平板品牌:" + deviceInfo.mobileBrand + " 平板型号:" + deviceInfo.mobileModel + " 平板系统版本:" + deviceInfo.mobileSystemVersion + " 分辨率：" + screenWidth + "x" + screenHeight
            // var p1 = 'https://cdn.seovx.com/?mom=302'
            //alert('你正在用平板电脑访问');

        } else {
            document.getElementById("device").innerHTML = "电脑品牌1:" + deviceInfo.computerBrand + " 电脑型号:" + deviceInfo.computerModel + " 电脑系统:" + deviceInfo.computerSystem + " 电脑系统版本:" + deviceInfo.computerSystemVersion + " 分辨率：" + screenWidth + "x" + screenHeight
            // alert('你正在用电脑访问');
        }
    });
</script>
<script>
    // 获取当前 IP 地址
    var ip = "";
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.ipify.org/?format=json", true);
    request.onload = function () {
        if (request.status === 200) {
            ip = JSON.parse(request.responseText).ip;
            document.getElementById("ip").innerHTML = ip;

            // 获取当前 IP 地址的地区和运营商
            var request2 = new XMLHttpRequest();
            request2.open("GET", "https://ipinfo.io/" + ip + "/json", true);
            request2.onload = function () {
                if (request2.status === 200) {
                    var data = JSON.parse(request2.responseText);
                    document.getElementById("region").innerHTML = data.country + "-" + data.region + "-" + data.city + "/(" + data.loc + ")";


                }
            };
            request2.send();
        }
    };
    request.send();
</script>

<script>


    function visitLink(url) {
        // Implement your link visit logic here
        window.open(url, '_blank');
    }

    function openIconPopup() {
        // Show the icon popup
        document.getElementById('iconPopup').style.display = 'block';
    }

    function closeIconPopup() {
        // Close the icon popup
        document.getElementById('iconPopup').style.display = 'none';
    }

    function downloadIcon(iconFileName) {
        // Create a link element
        var link = document.createElement('a');

        // Set the download attribute and href for the link
        link.download = iconFileName;
        link.href = 'icon/' + iconFileName; // Assuming icons are in the "icon" folder

        // Trigger a click on the link to start the download
        link.click();
    }


    function promptForPassword() {
        var popupOverlay = document.getElementById("popupOverlay1");
        var popupContent = document.getElementById("popupContent1");
        var popupMessage = document.getElementById("popupMessage");
        var passwordInput = document.getElementById("password-input");

        var today = new Date();
        var month = (today.getMonth() + 1).toString().padStart(2, '0');
        var day = today.getDate().toString().padStart(2, '0');

        var password = month + day;

        popupMessage.innerText = "请输入密码以访问链接";
        passwordInput.value = ""; // Clear the input field
        popupOverlay.style.display = "flex";
        passwordInput.focus();
    }

    function checkPassword() {
        var popupOverlay = document.getElementById("popupOverlay1");
        var passwordInput = document.getElementById("password-input");

        var today = new Date();
        var month = (today.getMonth() + 1).toString().padStart(2, '0');
        var day = today.getDate().toString().padStart(2, '0');

        var expectedPassword = month + day;
        document.getElementById('password-input').innerHTML = expectedPassword;
        document.getElementById('psw1').innerHTML = "外区苹果🆔密码是";
        if (passwordInput.value === expectedPassword) {
            window.open('https://ccbaohe.com/appleID/', '_blank');
            popupOverlay.style.display = "none";
        } else {
            alert("密码错误，请重新输入。");
            passwordInput.value = ""; // Clear the input field
            passwordInput.focus();
        }
    }

    function copyToClipboard(text, linkId) {
        var contentDiv = document.getElementById("content");
        contentDiv.classList.add("grayscale");

        var textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        // Show popup notification
        var popupOverlay = document.getElementById("popupOverlay");
        var popupContent = document.getElementById("popupContent");
        popupOverlay.style.display = "flex";

        // Countdown and close popup
        var seconds = 3;
        var countdownElement = document.getElementById("countdown");
        var countdownInterval = setInterval(function () {
            seconds--;
            countdownElement.innerText = seconds;

            if (seconds <= 0) {
                clearInterval(countdownInterval);
                popupOverlay.style.display = "none";
                contentDiv.classList.remove("grayscale");
            }
        }, 1000);
    }


</script>

</div>
</body>
</html>
