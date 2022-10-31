$(document).ready(function() {
    $(".sidb").click(function() {
        $(this).toggleClass("open");
        $("nav").toggleClass("open");
        $("html").toggleClass("no-scroll");
    })
    $('a.news-link').parents('.block_news').addClass('with-link');
    $('a.news-link').parents('.news_row').addClass('with-link');
    $('a.news-link').parents('.block-link').addClass('with-link');
    $('a.news-link').parents('.item-material').addClass('with-link');
    $('a.news-link').parents('.link-book').addClass('with-link');
    $('a.news-link').parents('.grid-item').addClass('with-link');

    var $blocks = $('.with-link');
    var $hrefs = $('a.news-link');

    $blocks.wrap(function() {
        var $element = $(this);
        var href = $element.find('a').attr('href');
        return "<a href=" + href + "></a>"
    });

    $('li.nodropdown').hover(function() {
        $('.submenu_bg').removeClass('show');
        $('.dropdown').removeClass('show');
        $(".offcanvas-backdrop").removeClass('show');
    });

    $('li.dropdown').hover(
        function() {
            $(".submenu_bg").addClass('show');
            $(".offcanvas-backdrop").addClass('show');
        },
        function() {
           
            $(this).removeClass('show');
        }
    );
    $('.submenu_bg').hover(
        function() {
            $(this).addClass('show');
        },
        function() {
            $(".offcanvas-backdrop").removeClass('show');
            $(this).removeClass('show');
            $("li.dropdown.show").removeClass('show');
        }
    ); 
	$('li.dropdown').hover(function() {
        $('li.dropdown').removeClass('show');
        $(this).addClass('show');
    });
    $('.offcanvas-backdrop').hover(
        function() {
            $(this).removeClass('show');
			$(".submenu_bg").removeClass('show');
			$('li.dropdown').removeClass("show");
        });
    $(".submenu_bg").mouseout(function() {
        $('li.dropdown').removeClass("show");
    });
	$('.dropdown').on('click', function(){
  $(".submenu_bg").toggleClass('show');
});
	$(document).on('mouseup', function(e){
  let s = $('.submenu_bg'); 
  if(!s.is(e.target) && s.has(e.target).length === 0) {
    s.removeClass('show'); 
  }
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $("nav.open"); // тут указываем ID элемента
	 var div = $(".sidb"); // тут указываем ID элемента
    if (!div.is(e.target)) { // и не по его дочерним элементам
      $(".sidb").removeClass("open"); // - меню отьезжает на 240px назад и прячется)
$("nav.open").removeClass("open")

    }
  });

})