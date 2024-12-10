document.addEventListener("DOMContentLoaded", () => {
    // 요소 선택
    const loginModal = document.getElementById("login-modal");
    const signupModal = document.getElementById("signup-modal");
    const loginBtn = document.querySelector(".login-btn");
    const signupBtn = document.querySelector(".signup-btn");
    const closeLoginModal = document.getElementById("close-login-modal");
    const closeSignupModal = document.getElementById("close-signup-modal");
    const backToLoginBtn = document.getElementById("back-to-login");
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

        const email = document.querySelector("#login-form input[name='email']").value; // email 가져오기
        const password = document.querySelector("#login-form input[name='password']").value;

        // 로그인 요청
        fetch('http://localhost:8081/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }) // email과 password 전송
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // JSON 데이터로 변환
            } else {
                throw new Error('로그인 실패');
            }
        })
        .then(data => {
            console.log('로그인 성공:', data);

            // username을 사용하여 UI 업데이트
            const username = data.username;
             document.querySelector('.user-actions').innerHTML = `
                 <div class="user-menu">
                     <button class="user-btn">${username}</button>
                     <div class="user-dropdown">
                         <a href="/profile" class="profile-link">My Profile</a>
                         <button id="logout-btn" class="logout-btn">Logout</button>
                     </div>
                 </div>
                 <button class="menu-toggle">☰</button> <!-- 햄버거 버튼 추가 -->
             `;


            // 로그아웃 버튼 동작 확인
            document.getElementById("logout-btn").addEventListener("click", () => {
                alert("로그아웃 버튼 클릭됨");
                location.reload(); // 페이지 새로고침
            });

            // 로그인 모달 닫기
            loginModal.classList.add("hidden");
            loginModal.classList.remove("active");
        })
        .catch(error => {
            console.error('Error:', error);
            alert('로그인 실패: ' + error.message);
        });
    });


    // 회원가입 폼 제출 시 처리
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault(); // 기본 제출 방지

            // 입력값 가져오기
            const email = signupForm.querySelector("input[name='email']").value;
            const password = signupForm.querySelector("input[name='password']").value;
            const username = signupForm.querySelector("input[name='username']").value;

            // 백엔드로 데이터 전송
            fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    username: username
                })
            })
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('회원가입 실패');
                }
            })
            .then(data => {
                console.log('회원가입 성공:', data);
                alert('회원가입이 완료되었습니다! 로그인해주세요.');

                // 회원가입 모달 닫기 및 로그인 모달 열기
                signupModal.classList.add("hidden");
                signupModal.classList.remove("active");
                loginModal.classList.remove("hidden");
                loginModal.classList.add("active");
            })
            .catch(error => {
                console.error('Error:', error);
                alert('회원가입 중 문제가 발생했습니다.');
            });
        });
    }
});
