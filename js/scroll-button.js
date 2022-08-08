// 從畫面中取得 class="scroll-btn" 的元素
const scrollBtn = document.querySelector(".scroll-btn");
const heading1 = document.querySelector(".heading1");

// 綁定視窗的滑動事件
window.addEventListener("scroll", function () {
    // 取得目前視窗滑動的座標
    const y = window.scrollY;
    // 如果滑動座標超過了10
    if (y > 10) {
        // 為 .scroll-btn 加上一個名為 show 的分類
        scrollBtn.classList.add("show");
        // 為 .heading1 加上一個名為 scale 的分類
        heading1.classList.add("scale");
    } else {
        // 從 .scroll-btn 元素移除 show 的分類
        scrollBtn.classList.remove("show");
        // 從 .heading1 元素移除 scale 的分類
        heading1.classList.remove("scale");
    }
});

// 綁定 class="scroll-btn" 的點擊事件
scrollBtn.addEventListener("click", function () {
    // 滑動至網頁最上方
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});