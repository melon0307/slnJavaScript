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

let index = 0, // 圖片索引
    slide = document.querySelector("#slide"),
    items = slide.querySelectorAll("img"), // 抓取所有slide內img
    timer = 3000,
    interval = window.setInterval(showNext, timer),  // 循環
    botimgs = document.querySelectorAll("#div2 img");

// 按鈕
prevBtn = document.createElement("a");
nextBtn = document.createElement("a");
prevBtn.classList.add("prev");
nextBtn.classList.add("next");
slide.appendChild(prevBtn);
slide.appendChild(nextBtn);

// 目前顯示圖片
let ShowCurrentImg = function () {
    items.forEach((img) => {
        img.classList.remove("show");
    });
    items[index].classList.add("show");
    pick();
}

// 下一張圖
function showNext() {
    index++;
    if (index >= items.length)
        index = 0;
    ShowCurrentImg();
}

// 上一張圖
function showPrev() {
    index--;
    if (index < 0)
        index = items.length - 1;
    ShowCurrentImg();
}

// 滑鼠移到圖片上方時，停止循環計時
function stop() {
    interval = clearInterval(interval);
}
slide.addEventListener("mouseover", stop);

// 滑鼠離開圖片上方時，重新開始循環計時
function start() {
    interval = window.setInterval(showNext, timer);
}
slide.addEventListener("mouseout", start);


// 綁定點擊上一張，下一張按鈕的事件
nextBtn.addEventListener("click", showNext, false);
prevBtn.addEventListener("click", showPrev, false);

// 網頁開啟時show出第一張圖
items[0].classList.add("show");
botimgs[0].classList.add("selected");

// 為下方目前顯示的圖片加上外框
function pick() {
    botimgs.forEach((botimg) => {
        botimg.classList.remove("selected");
    });
    botimgs[index].classList.add("selected");
}

// 下方圖片點擊事件
function selectedPic() {
    index = this.id;
    pick();
    ShowCurrentImg();
    stop();
    start();
}
botimgs.forEach((botimg) => {
    botimg.addEventListener("click", selectedPic)
});

//===================================Rating====================================================

