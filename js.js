window.addEventListener("load", getVisits);
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
                document.getElementById("region").innerHTML = data.region;
                document.getElementById("city").innerHTML = data.city;
            }
        };
        request2.send();
    }
};
request.send();

function showElements() {
    // 获取用户的 IP 地址，这是一个简化的示例，实际中需要使用后端服务获取


    var audio = document.getElementById('myAudio');
    audio.play();

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
    document.getElementById("timeDate").innerHTML = "️当前版本 1.1--本站已运行" + dnum + "天";
    document.getElementById("times").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒";
}

setInterval("createtime()", 250);
