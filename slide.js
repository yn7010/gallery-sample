$(function () {
    //（１）ページの概念・初期ページを設定
    var page = 0;

    //（２）イメージの数を最後のページ数として変数化
    var lastPage = parseInt($("#slide img").length - 1);
    //（３）最初に全部のイメージを一旦非表示にします
    $("#slide img").css("display", "none");
    //（４）初期ページを表示
    $("#slide img").eq(page).css("display", "block");

    //（５）ページ切換用、自作関数作成
    function changePage() {
        $("#slide img").fadeOut(500);
        $("#slide img").eq(page).fadeIn(500);
    };

    //（６）～秒間隔でイメージ切換の発火設定
    var Timer;

    function startTimer() {
        Timer = setInterval(function () {
            if (page === lastPage) {
                page = 0;
                changePage();
            } else {
                page++;
                changePage();
            }
        }, 5000);
    }
    //（７）～秒間隔でイメージ切換の停止設定
    function stopTimer() {
        clearInterval(Timer);
    }

    //（８）タイマースタート
    startTimer();

    /*オプションを足す場合はここへ記載*/
    $(".slide-left").click(function () {
        console.log("sss", "aaa");
        if (page === 0) {
            page = lastPage;
            changePage();
        } else {
            page--;
            changePage();
        }
        stopTimer();
        startTimer();
    });
    $(".slide-right").click(function () {
        console.log("sss", "aaa");
        if (page === lastPage) {
            page = 0;
            changePage();
        } else {
            page++;
            changePage();
        }
        stopTimer();
        startTimer();
    });
});
