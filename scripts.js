const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);
// can return attribute changes for selector
(function($) {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  
    $.fn.attrchange = function(callback) {
      if (MutationObserver) {
        var options = {
          subtree: false,
          attributes: true
        };
  
        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(e) {
            callback.call(e.target, e.attributeName);
          });
        });
  
        return this.each(function() {
          observer.observe(this, options);
        });
  
      }
    }
  })(jQuery);
  
  // when one details opens, close the others
  $('.details-item').attrchange(function(attribute){
    if(attribute == "open" && $(this).attr("open")) {
      $(this).siblings(".details-item").removeAttr("open");
    }
  });
  
  // keyboard: prevent closing the open details to emulate tabs
  $('.details-tab').on("keydown", function(e) {
    if(e.keyCode == 32 || e.keyCode == 13) {
      if($(this).parent().attr("open")) {
        e.preventDefault();
      }
    } 
  });
  
  // mouse: prevent closing the open details to emulate tabs
  $('.details-tab').on("click", function(e) {
    if($(this).parent().attr("open")) {
      e.preventDefault();
    }
  });

  //Learning outcome
  // $(selector).attrchange(): a call back function for when an attribute changes
//
// can return attribute changes for selector
(function($) {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  $.fn.attrchange = function(callback) {
    if (MutationObserver) {
      var options = {
        subtree: false,
        attributes: true
      };

      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(e) {
          callback.call(e.target, e.attributeName);
        });
      });

      return this.each(function() {
        observer.observe(this, options);
      });

    }
  }
})(jQuery);

// when one details opens, close the others
$('.details-item').attrchange(function(attribute){
  if(attribute == "open" && $(this).attr("open")) {
    $(this).siblings(".details-item").removeAttr("open");
  }
});

// keyboard: prevent closing the open details to emulate tabs
$('.details-tab').on("keydown", function(e) {
  if(e.keyCode == 32 || e.keyCode == 13) {
    if($(this).parent().attr("open")) {
      e.preventDefault();
    }
  } 
});

// mouse: prevent closing the open details to emulate tabs
$('.details-tab').on("click", function(e) {
  if($(this).parent().attr("open")) {
    e.preventDefault();
  }
});
const menuItems = document.querySelectorAll('.menu li');

menuItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const id = item.getAttribute('id');
    const section = document.querySelector(`#${id}`);
    const pos = section.offsetTop;
    window.scrollTo({ top: pos, behavior: 'smooth' });
  });
});
const menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const scrollToUrl = item.getAttribute('data-scroll-to');
    window.location.href = scrollToUrl;
  });
});
