/*
Activate Slider
*/

var sliders = document.querySelectorAll('.glide');

for (var i = 0; i < sliders.length; i++) {
  var glide = new Glide(sliders[i], {
    gap: 0,
  });
  
  glide.mount();
}


/*
Activate Modals
*/

$('[open-modal]').on('click', function(){
  var id = $(this).attr('open-modal');
  $('.modal#'+id).addClass('active');
});

$('[close-modal]').on('click', function(){
  $(this).parents('.modal').removeClass('active');
});

$('.modal').on('click', function(e) {
  if(e.target !== this){return};
  $(this).removeClass('active');
});

/*
Activate AOS
*/

AOS.init();


/*
Main Navigation Animation
*/

$("#nav-toggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
});

$(".overlay a").click(function () {
    $("#nav-toggle").toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked");
});


/*
Typewriter Effect
*/

let wrapper
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function writingAll (stringTarget, container){
  wrapper = document.querySelector('['+container+']')
  const stringsContainer = document.getElementsByClassName(stringTarget)
     
  while(wrapper){
    for (i=0; i <  stringsContainer.length ; i++){
      const string = stringsContainer[i].textContent
      await sleep(1000)
      await write(string)
      await sleep(1500)
      await erase()
    };
  }
};

async function write(text){    
  let index = 0
  while(index < text.length){
    const timeout = 25
    await sleep(timeout)
    index++
    wrapper.innerHTML = text.substring(0, index)
  }
};


async function erase() {
  while(wrapper.textContent.length){
    const timeout = 25
    await sleep(timeout)
    wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2)
  }
};

writingAll('input-text', 'data-text');