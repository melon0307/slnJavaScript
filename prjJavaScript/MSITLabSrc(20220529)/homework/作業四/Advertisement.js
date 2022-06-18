//===================================Advertisement=============================================

let index = 0, // 圖片索引
    slide = document.querySelector("#slide"),
    items = slide.querySelectorAll("img"), // 抓取所有slide內img
    timer = 4000,
    interval = window.setInterval(showNext, timer),  // 循環
    botimgs = document.querySelectorAll("#div2 img"),
    container = document.querySelector(".container"),
    hyperlink = slide.querySelector("#hyperlink"),
    url = ["https://reurl.cc/8oL5GX", "https://reurl.cc/41vXR2", "https://reurl.cc/0pl626", "https://reurl.cc/LmLXpa", "https://reurl.cc/ErLXpa"];


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
    href();
}

// slide圖片點擊事件
function href() {
    hyperlink.addEventListener("click", () => {
        window.location.href = url[index]
    });
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
container.addEventListener("mouseover", stop);

// 滑鼠離開圖片上方時，重新開始循環計時
function start() {
    interval = window.setInterval(showNext, timer);
}
container.addEventListener("mouseout", start);

// 綁定點擊上一張，下一張按鈕的事件
nextBtn.addEventListener("click", showNext, false);
prevBtn.addEventListener("click", showPrev, false);

// 網頁開啟時show出第一張圖
items[0].classList.add("show");
botimgs[0].classList.add("selected");
href();

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
}
botimgs.forEach((botimg) => {
    botimg.addEventListener("click", selectedPic)
});