$(function () {
    // カレンダー
    $(function () {
      //デートピッカー用スクリプト
      $("#datepicker").pickadate({
      format: "yyyy年mm月dd日",
      // 良福寺なら１だけ
      disable: [1,7]
      });
      //タイムピッカー用スクリプト
      $("#timepicker").pickatime({
      format: "HH:i",
      interval: 30, //時間間隔（分で指定）
      min: [10,00], //最小時間
      max: [20,00] //最大時間
      });
      //タイムピッカー用スクリプト2
      $("#timepicker2").pickatime({
      format: "HH:i",
      interval: 30, //時間間隔（分で指定）
      min: [10,00], //最小時間
      max: [20,00] //最大時間
      });
      //デートピッカー2
      $("#datepicker2").pickadate({
      format: "yyyy年mm月dd日",
      // 良福寺なら１だけ
      disable: [1,7]
      });
      //タイムピッカー2-1
      $("#timepicker2-1").pickatime({
      format: "HH:i",
      interval: 30, //時間間隔（分で指定）
      min: [10,00], //最小時間
      max: [20,00] //最大時間
      });
      //タイムピッカー2-2
      $("#timepicker2-2").pickatime({
      format: "HH:i",
      interval: 30, //時間間隔（分で指定）
      min: [10,00], //最小時間
      max: [20,00] //最大時間
      });
      //デートピッカー2
      $("#datepicker3").pickadate({
      format: "yyyy年mm月dd日",
      // 良福寺なら１だけ
      disable: [1,7]
      });
      //タイムピッカー3-1
      $("#timepicker3-1").pickatime({
      format: "HH:i",
      interval: 30, //時間間隔（分で指定）
      min: [10,00], //最小時間
      max: [20,00] //最大時間
      });
      //タイムピッカー3-2
      $("#timepicker3-2").pickatime({
      format: "HH:i",
      interval: 30, //時間間隔（分で指定）
      min: [10,00], //最小時間
      max: [20,00] //最大時間
      });

    });

   
    
    // 送信
    $('form').submit(function () {
        var date = $('#datepicker').val();
        var time = $('#timepicker').val();
        var time2 = $('#timepicker2').val();
        
        var date2 = $('#datepicker2').val();
        var time21 = $('#timepicker2-1').val();
        var time22 = $('#timepicker2-2').val();
        var date3 = $('#datepicker3').val();
        var time31 = $('#timepicker3-1').val();
        var time32 = $('#timepicker2-2').val();
        var staff = $('input[name="s-name"]:checked').val();

        var names = $('input[name="names"]').val();

        var menu = $('input[name="menu"]:checked').map(function(){
          return $(this).val();
        }).get();

        var memo = $('input[name="memo"]').val();


        var msg = `希望日：${date}\n\n時間：${time}～${time2}までの間\n\n（第２希望）\n ${date2}\n${time21}～${time22}までの間\n\n（第３希望）\n${date3}\n${time31}～${time32}までの間\n\n氏名：${names}様\n\n 担当指名：${staff}\n\nメニュー：${menu}\n\n概要：${memo}\n\n\n送信ありがとうございます！\n返信が来るまでしばらくお待ちください♪`;
        sendText(msg);

        return false;
    });
});
