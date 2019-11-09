function debounce(func, wait = 20, immediate = true) {
     var timeout;
     return function () {
          var context = this,
               args = arguments;
          var later = function () {
               timeout = null;
               if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
     };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
     sliderImages.forEach( img => {
          const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2
          const imageBottom = img.offsetTop + img.height
          const isHalfShow = slideInAt > img.offsetTop;
          const isNotScrolledPast = window.scrollY < imageBottom;

          (isHalfShow && isNotScrolledPast) ? img.classList.add('active') : img.classList.remove('active')
     });
}

window.addEventListener('scroll', debounce(checkSlide));