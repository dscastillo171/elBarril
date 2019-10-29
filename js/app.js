$(document).ready(function() {
  $zopim(function() {
    $zopim.livechat.window.hide();
    $zopim.livechat.window.onHide(function() {
      $('#Contact').show();
    });
  });

  $('#Contact').click(function() {
    $zopim(function() {
      $zopim.livechat.window.show();
      $('#Contact').hide();
    });
  });
});