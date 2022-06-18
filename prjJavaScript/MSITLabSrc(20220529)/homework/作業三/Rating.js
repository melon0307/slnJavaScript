let stars = document.querySelectorAll(".stars a");
let labels = document.querySelectorAll(".label h3.discription");
document.querySelector("body").addEventListener("dblclick", reset);

// forEach 取出當前star索引
stars.forEach((star1, clickedIdx) => {
    star1.addEventListener("click", () => {
        stars.forEach((star2, idx) => {
            // 若索引小於CurrentStar，則亮起
            if (idx <= clickedIdx) {
                star2.classList.add("active");
            }
            // 索引大於CurrentStar，則復原
            else {
                star2.classList.remove("active");
            }
        });
        labels[0].innerHTML = `您評分為${clickedIdx + 1}顆星`;
    });
});

// 雙擊滑鼠重置評分
function reset() {
    stars.forEach((star) => {
        star.className = "";
        labels[0].innerHTML = "您評分為0顆星";
    });
}