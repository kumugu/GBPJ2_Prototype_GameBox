document.addEventListener("DOMContentLoaded", () => {
    // 요소 선택
    const loginModal = document.getElementById("login-modal");
    const signupModal = document.getElementById("signup-modal");
    const loginBtn = document.querySelector(".login-btn"); // 로그인 버튼
    const signupBtn = document.querySelector(".signup-btn"); // 회원가입 버튼
    const closeLoginModal = document.getElementById("close-login-modal"); // 로그인 모달 닫기 버튼
    const closeSignupModal = document.getElementById("close-signup-modal"); // 회원가입 모달 닫기 버튼
    const backToLoginBtn = document.getElementById("back-to-login"); // 회원가입 뒤로가기 버튼

    // 로그인 버튼 클릭 시 로그인 모달 열기
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            loginModal.classList.remove("hidden");
            loginModal.classList.add("active");
            signupModal.classList.add("hidden");
        });
    }

    // 회원가입 버튼 클릭 시 회원가입 모달 열기
    if (signupBtn) {
        signupBtn.addEventListener("click", () => {
            signupModal.classList.remove("hidden");
            signupModal.classList.add("active");
            loginModal.classList.add("hidden");
        });
    }

    // 로그인 모달 닫기 버튼 클릭 시 로그인 모달 닫기
    if (closeLoginModal) {
        closeLoginModal.addEventListener("click", () => {
            loginModal.classList.add("hidden");
            loginModal.classList.remove("active");
        });
    }

    // // 회원가입 모달 닫기 버튼 클릭 시 회원가입 모달 닫기
    // if (closeSignupModal) {
    //     closeSignupModal.addEventListener("click", () => {
    //         signupModal.classList.add("hidden");
    //         signupModal.classList.remove("active");
    //     });
    // }
    // 회원가입 모달 닫기 버튼 클릭 시 index.html로 이동
    if (closeSignupModal) {
        closeSignupModal.addEventListener("click", () => {
            window.location.href = "index.html"; // index.html로 이동
        });
    }

    // 뒤로가기 버튼 클릭 시 회원가입 창 닫고 로그인 창 열기
    if (backToLoginBtn) {
        backToLoginBtn.addEventListener("click", () => {
            signupModal.classList.add("hidden");
            signupModal.classList.remove("active");
            loginModal.classList.remove("hidden");
            loginModal.classList.add("active");
        });
    }
});
