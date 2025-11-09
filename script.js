// ★★★ "your_secret_password" の部分を、あなただけが知っているパスワードに変更してください
const MY_PASSWORD = "your_secret_password"; 

/**
 * ページ読み込み時にパスワードを尋ねる関数
 */
function checkPassword() {
    
    // sessionStorageを使って、一度パスワードを入力したらタブを閉じるまで記憶する
    if (sessionStorage.getItem("password_verified") === "true") {
        document.getElementById("site-content").style.display = "block";
        return;
    }

    let password = prompt("パスワードを入力してください:", "");

    if (password === MY_PASSWORD) {
        // パスワードが正しい場合、非表示にしていたコンテンツを表示
        document.getElementById("site-content").style.display = "block";
        // sessionStorageに「認証済み」と記録
        sessionStorage.setItem("password_verified", "true");
    } else {
        // パスワードが違う場合、アクセス拒否のメッセージを表示
        alert("パスワードが違います。");
        document.body.innerHTML = "<h1 style='text-align:center; margin-top: 50px;'>アクセスが拒否されました</h1>";
    }
}