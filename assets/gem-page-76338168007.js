

    
    
    
    
    
    
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606876698486').children('.module');
}); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606879612146').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1606879612146-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
        var $module = jQuery('#m-1606879612146-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
  var $module = jQuery('#m-1606981062210').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1606880123769').children('.module');
}); 
    
    
    
    
    
    
jQuery(function() {
    var $module = jQuery('#m-1606880306895').children('.module');
    $module.gfV1Countdown({
        id: "1606880306895",
        idSlug: "1606880306895"
    });
});
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606880987099').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1606880987099-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
        var $module = jQuery('#m-1606880987099-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
  var $module = jQuery('#m-1606981062412').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1606880987122').children('.module');
}); 
    
    
    
    
    
    
jQuery(function() {
    var $module = jQuery('#m-1607070137511').children('.module');
    $module.gfV1Countdown({
        id: "1607070137511",
        idSlug: "1607070137511"
    });
});
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606883885051').children('.module');
  $module.gfV3Product();
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1606883885051-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
        var $module = jQuery('#m-1606883885051-2').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
  var $module = jQuery('#m-1606981025625').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1606883884903').children('.module');
}); 
    
    
    
    
    
    
jQuery(function() {
    var $module = jQuery('#m-1607070136262').children('.module');
    $module.gfV1Countdown({
        id: "1607070136262",
        idSlug: "1607070136262"
    });
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606884882716').children('.module');
}); 
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606885195816').children('.module');
}); 
    
    
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606885721235').children('.module');
}); 
    
    
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606981197371').children('.module');
}); 
    
    
    
    
    
    
    
    
    
jQuery(function() {
  try {
    var $module = jQuery('#m-1606885084426').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var autoplay = $module.data('autoplay'), 
          loop = $module.data('loop');
    } else {
      var autoplay = 0, 
          loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
              items:colxs,
              nav: navxs,
              dots:dotsxs,
              margin: marginxs
          },
          768:{
              items:colsm,
              nav: navsm,
              dots:dotssm,
              margin: marginsm
          },
          992:{
              items:colmd,
              nav: navmd,
              dots:dotsmd,
              margin: marginmd
          },
          1200:{
              items:collg,
              nav: navlg,
              dots:dotslg,
              margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
        setTimeout(function() {	
            initCarousel();	
        }, 300)	
    } else {	
        initCarousel();	
    }
  } catch(err) {}
}); 
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606886060693').children('.module');
  $module.gfV3Product();
}); 
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606886459483').children('.module');
}); 
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606886116906').children('.module');
});
    
jQuery(function() {
        var $module = jQuery('#m-1606886618769').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });
    
jQuery(function() {
    var $module = jQuery('#m-1606886821504').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});
    jQuery(function() {
  try {
    var $module = jQuery('#m-1607305831333').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
});
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606983519349').children('.module');
}); 
    
    
    
    
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606972629697').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1606972636836').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1606886086618').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  $module.gfV3ProductImage({
    'effect': effect,
    'magnify': magnify
  })
});
    
jQuery(function() {
var $module = jQuery('#m-1606886094472').children('.module');
$module.gfV4ProductImageList({
  onImageClicked: function(imageUrl, imageZoomUrl) {}
});

var style = $module.attr('data-style');
switch(style) {
  case 'slider':
      var navspeed = $module.data('navspeed'),
          navlg = $module.data('navlg'),
          navmd = $module.data('navmd'),
          navsm = $module.data('navsm'),
          navxs = $module.data('navxs'),
          collg = $module.data('collg'),
          colmd = $module.data('colmd'),
          colsm = $module.data('colsm'),
          colxs = $module.data('colxs'),
          dotslg = $module.data('dotslg'),
          dotsmd = $module.data('dotsmd'),
          dotssm = $module.data('dotssm'),
          dotsxs = $module.data('dotsxs'),

          marginlg = parseInt($module.data('mlg')),
          marginmd = parseInt($module.data('mmd')),
          marginsm = parseInt($module.data('msm')),
          marginxs = parseInt($module.data('mxs'));

      var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
      if(mode == 'production') {
          var loop = $module.data('loop');
      } else {
          var loop = 0;
      }
      $module.find('.gf_product-images-list').children().each( function( index ) {
        $(this).attr( 'data-position', index );
      });
      $module.find('.gf_product-images-list').owlCarousel({
          mouseDrag: false,
          navSpeed: navspeed,
          autoWidth: !1,
          loop: loop,
          responsiveClass:true,
          responsive:{
              0:{
                  items:colxs,
                  nav: navxs,
                  dots:dotsxs,
                  margin: marginxs
              },
              768:{
                  items:colsm,
                  nav: navsm,
                  dots:dotssm,
                  margin: marginsm
              },
              992:{
                  items:colmd,
                  nav: navmd,
                  dots:dotsmd,
                  margin: marginmd
              },
              1200:{
                  items:collg,
                  nav: navlg,
                  dots:dotslg,
                  margin: marginlg
              }
          },
          onInitialized: function(){
            $module.closest('.module-wrap[data-label="(P) Image List"]').addClass('gf-carousel-loaded');
          }
      }); 
      break;
}
}); 
    
jQuery(function() {
  var $module = jQuery('#m-1606899737626').children('.module');
}); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606900836712').children('.module');
}); 
    
    
    
    
    
    
jQuery(function() {
  var $module = jQuery('#m-1606900934338').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
});
    
jQuery(function() {
  var $module = jQuery('#m-1606900948207').children('.module');
}); 
    
    
    
    
    
    
    
    jQuery(function() {
  try {
    var $module = jQuery('#m-1606901228194').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
jQuery(function() {
  try {
    var $module = jQuery('#m-1606960974401').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var autoplay = $module.data('autoplay'), 
          loop = $module.data('loop');
    } else {
      var autoplay = 0, 
          loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
              items:colxs,
              nav: navxs,
              dots:dotsxs,
              margin: marginxs
          },
          768:{
              items:colsm,
              nav: navsm,
              dots:dotssm,
              margin: marginsm
          },
          992:{
              items:colmd,
              nav: navmd,
              dots:dotsmd,
              margin: marginmd
          },
          1200:{
              items:collg,
              nav: navlg,
              dots:dotslg,
              margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
        setTimeout(function() {	
            initCarousel();	
        }, 300)	
    } else {	
        initCarousel();	
    }
  } catch(err) {}
}); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    