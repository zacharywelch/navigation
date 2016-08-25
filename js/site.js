(function() {
  $(function() {
    $('a[href="#fakelink"]').click(function(e) {
      return e.preventDefault()
    });
 
    $('a.droplink').click(function(e) {
      var $drop, $link;
      $link = $(e.currentTarget);
      $drop = $link.siblings('.dropdown');
      if ($link.is('.active') || $drop.is('.active')) {
        $link.removeClass('active');
        $drop.removeClass('active');
      } else {
        $link.addClass('active');
        $drop.addClass('active');
      }
      return false;
    });

    $('.tagsinput').tagsinput({
      tagClass: 'btn-default',
      maxTags: 1
    });

    Ladda.bind('.ladda-button', { timeout: 2000 } );
    
    $('.datepicker').each(function(index, value) {
      new Pikaday({ field: value });
    });

    $('.table-select tbody tr').click(function(e) {
      avatar = $(this).find('img').attr('src');
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      $('#detail-offset').addClass('active');
      $('#detail-offset img').attr('src', avatar);
    });

    $('#detail-offset [data-dismiss]').click(function(e) {
      $('.table-select tr.active').removeClass('active');
    });

    $('.col-sm-gutter').hover(function(e) {
      $(this).toggleClass('lift');
    });

    document.body.className += ' animate'
  });
}).call(this);
