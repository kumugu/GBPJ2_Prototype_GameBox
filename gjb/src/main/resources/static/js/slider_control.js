document.querySelectorAll(".slider-item img").forEach(img => {
    img.addEventListener("click", event => {
        event.preventDefault(); // 기본 클릭 동작 방지
        const gameUrl = img.parentElement.getAttribute("href");
        const windowWidth = 400; // 창의 너비
        const windowHeight = 300; // 창의 높이

        // 화면 중앙 계산
        const left = (screen.width - windowWidth) / 2;
        const top = (screen.height - windowHeight) / 2;

        // 새 창 열기
        const windowFeatures = `width=${windowWidth},height=${windowHeight},top=${top},left=${left}`;
        window.open(gameUrl, "GameWindow", windowFeatures);
    });
});
