//===================================Form_Check================================================
function checkName() {
    let NameObj = document.getElementById("name1");
    let NameObjVal = NameObj.value;
    let NameObjLen = NameObjVal.length;
    let sp = document.getElementById("span1");
    let flag = false;

    if (NameObjVal == "")
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">姓名不可為空白</span>`;

    else {
        for (let i = 0; i < NameObjLen; i++) {
            let ch = NameObjVal.charCodeAt(i);
            if (ch >= 0x4e00 && ch <= 0x9fff)
                flag = true;
            else
                flag = false;
        }
        if (flag)
            sp.innerHTML = `<i class="bi bi-check-circle"></i><span style="color:green">輸入正確</span>`;
        else
            sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">姓名必須全部為中文</span>`
    }
}

function checkPwd() {
    let PwdObj = document.getElementById("pass1");
    let PwdObjVal = PwdObj.value;
    let PwdObjLen = PwdObj.value.length;
    let sp = document.getElementById("span2");
    let flag1 = false, flag2 = false, flag3 = false;

    if (PwdObjVal == "")
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">密碼不可為空白</span>`;
    else if (PwdObjLen >= 6) {
        for (let i = 0; i < PwdObjLen; i++) {
            let ch = PwdObjVal.toLowerCase().charAt(i);
            if (ch >= 'a' && ch <= 'z')
                flag1 = true;
            else if (ch >= '0' && ch <= '9')
                flag2 = true;
            else if (ch.lastIndexOf('!@#$%^&*'))
                flag3 = true;
            if (flag1 && flag2 && flag3)
                break;
        }
        if (flag1 && flag2 && flag3)
            sp.innerHTML = `<i class="bi bi-check-circle"></i><span style="color:green">輸入正確</span>`;
        else
            sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">請輸入正確格式</span>`;
    }
    else if (PwdObjLen <= 6)
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">密碼長度需大於6個字</span>`;
}

function checkDate() {
    let DateObj = document.getElementById("date1");
    let DateObjVal = DateObj.value;
    let strArray = DateObjVal.split('/');
    let theYear = strArray[0];
    let theMonth = strArray[1];
    let theDate = strArray[2];
    let chkDate = new Date(theYear, theMonth - 1, theDate); 
    let sp = document.getElementById("span3");
    
    if (chkDate.getFullYear() == theYear && chkDate.getMonth()+1 == theMonth && chkDate.getDate() == theDate) {
        sp.innerHTML = `<i class="bi bi-check-circle"></i><span style="color:green">輸入正確</span>`;
    }
    else
        sp.innerHTML = `<i class="bi bi-x-circle"></i><span style="color:red">無此日期</span>`;

}

//===================================Advertisement=============================================

//圖庫
let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"];
let hrefs = ["https://reurl.cc/RrQjpe", "https://reurl.cc/d2vXEM", "https://reurl.cc/ErapEm", "https://reurl.cc/VDqjkZ", "https://reurl.cc/moNGE1"];
document.getElementById(0).className = "selected";

//選中的圖片附加邊框
function choose() {
    for (let i = 0; i < images.length; i++) {
        document.getElementById(i).className = "unselected";
    }
    document.getElementById(index).className = "selected";
}

//圖片切換函數
var index = 0;
function nextImg(num) {
    let imgObj = document.getElementById("myImg");
    index += num;//計算圖片索引
    if (index >= images.length)
        index = 0;//回到第一張
    else if (index < 0)
        index = images.length - 1;
    imgObj.src = images[index];
    choose();
    let a = document.getElementById("hpl");
    a.href = hrefs[index];
}

//自動圖片切換函數
function stop() {
    window.clearInterval(intervalId);
}
function start() {
    intervalId = window.setInterval("nextImg(1)", 3000);
}

//下方圖片條點擊函數
function selectedPic(id) {
    index = id
    choose();
    nextImg(0);
    stop();
    start();
}

//自動換圖片
let intervalId = window.setInterval("nextImg(1)", 3000);

//按鈕
prevBtn = document.createElement("a");
nextBtn = document.createElement("a");
prevBtn.classList.add("prev");
nextBtn.classList.add("next");
slide.appendChild(prevBtn);
slide.appendChild(nextBtn)
prevBtn.addEventListener("click", function () { nextImg(-1) });
nextBtn.addEventListener("click", function () { nextImg(1) });

//滑鼠移至圖片上，暫停輪播
slide = document.querySelector("#slide");
slide.addEventListener("mouseover", stop);

//滑鼠移開圖片，繼續進行輪播
slide.addEventListener("mouseout", start);

//圖片條點擊事件
for (let i = 0; i < images.length; i++) {
    document.getElementById(i).addEventListener("click", function () { selectedPic(i) });
}

//===================================Rating====================================================

