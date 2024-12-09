document.addEventListener("DOMContentLoaded", () => {
    // 요소 선택
    const loginModal = document.getElementById("login-modal");
    const signupModal = document.getElementById("signup-modal");
    const loginBtn = document.querySelector(".login-btn"); // 로그인 버튼
    const signupBtn = document.querySelector(".signup-btn"); // 회원가입 버튼
    const closeLoginModal = document.getElementById("close-login-modal"); // 로그인 모달 닫기 버튼
    const closeSignupModal = document.getElementById("close-signup-modal"); // 회원가입 모달 닫기 버튼
    const backToLoginBtn = document.getElementById("back-to-login"); // 회원가입 뒤로가기 버튼
    const userActions = document.querySelector('.user-actions');
    const toggleToSignupBtn = document.getElementById('toggle-to-signup');
    const toggleToLoginBtn = document.getElementById('toggle-to-login');

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

    // 회원가입 모달 닫기 버튼 클릭 시 모달 닫기
    if (closeSignupModal) {
        closeSignupModal.addEventListener("click", () => {
            signupModal.classList.add("hidden");
            signupModal.classList.remove("active");
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

    // 로그인 폼 제출 시 UI 업데이트
document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault(); // 폼 제출 방지

    const userActions = document.querySelector('.user-actions');
    const loginBtn = document.querySelector('.login-btn');

    // 로그인 모달 닫기
    const loginModal = document.getElementById("login-modal");
    loginModal.classList.add("hidden");
    loginModal.classList.remove("active");

    // 기존 login-btn을 User123으로 변경
    if (loginBtn) {
        loginBtn.outerHTML = `
            <div class="user-menu">
                <button class="user-btn">User123</button>
                <div class="user-dropdown">
                    <a href="/profile">My Profile</a>
                    <button id="logout-btn">Logout</button>
                </div>
            </div>
        `;
    }

    console.log('사용자 메뉴로 변경되었습니다.');

    // 로그아웃 버튼 동작 확인
    document.getElementById("logout-btn").addEventListener("click", () => {
        alert("로그아웃 버튼 클릭됨");
        location.reload(); // 페이지 새로고침
    });
});

    

});
