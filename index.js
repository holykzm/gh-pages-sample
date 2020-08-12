$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd hh:mm',
            language:'ja',
        });
    });

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var names = $('input[name="names"]').val();
        var staff = $('input[name="s-name"]:checked').val();
        var menu = $('input[name="menu"]').val();
        var memo = $('input[name="memo"]').val();


        var msg = `希望日：${date}\n氏名：${names}様\n担当指名：${staff}\nメニュー：${menu}\n概要：${memo}\n\n送信ありがとうございます！\n返信が来るまでしばらくお待ちください♪`;
        sendText(msg);

        return false;
    });
});
