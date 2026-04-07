document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(e) {
        // 防止表單送出導致畫面重整
        e.preventDefault();
        
        const user = document.getElementById('username').value;
        
        console.log("嘗試登入:", user);
        alert("這是一個靜態展示網站，無法真實登入。");
    });
});