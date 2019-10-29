/** Removed while zopim account is reactivated
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
**/

/** In index.html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>

...

<div id="Contact">
  <i class="fa fa-envelope" aria-hidden="true"></i>
  <span>Contáctanos</span>
</div>
**/
