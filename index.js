$(function () {
    // カレンダー
    $(function () {
      $('#datetime').datetimepicker({
        format:'m/d H:i',
        inline:true,
        lang:'ja'
        });
    });

    // 送信
    $('form').submit(function () {
        var date = $('#datetime').val();
        var names = $('input[name="names"]').val();
        var staff = $('input[name="s-name"]:checked').val();

        var menu = $('input[name="menu"]:checked').map(function(){
          return $(this).val();
        }).get();

        var memo = $('input[name="memo"]').val();


        var msg = `希望日：${date}\n氏名：${names}様\n担当指名：${staff}\nメニュー：${menu}\n概要：${memo}\n\n送信ありがとうございます！\n返信が来るまでしばらくお待ちください♪`;
        sendText(msg);

        return false;
    });
});
