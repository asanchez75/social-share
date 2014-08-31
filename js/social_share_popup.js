(function($){
  $(document).ready(function(){

  $("a[class^='social-share-']").click(function(){
    var href = $(this).attr('href');
    window.open(href, "_blank", "toolbar=no, scrollbars=no, resizable=yes, top=500, left=500, width=400, height=400");
    return false;
  });

  });
})(jQuery)

