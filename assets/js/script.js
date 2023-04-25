// NavBar
$(document).ready(function() {
  $('.button').click(function() {
    if ($(this).hasClass('expand')) {
      $('ul').slideUp(function() {
        $('.button').removeClass('expand')
      });
    } else {
      $(this).addClass('expand');
      setTimeout(function() {
        $('ul').stop().slideDown();
      },);
    }
  });
  $('ul li').click(function() {
    $('ul').slideUp(function() {
      $('.button').removeClass('expand')
    });
  });
});

// Parallax effect
let text =  document.getElementById('text');
let textdesc =  document.getElementById('textdesc');
let profil =  document.getElementById('profil');
let leftbird =  document.getElementById('left-bird');
let rightbird =  document.getElementById('right-bird');
let leftcloud =  document.getElementById('left-cloud');
let rightcloud =  document.getElementById('right-cloud');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  text.style.marginTop = value * 1+ 'px';
  textdesc.style.marginTop = value * 1+ 'px';
  profil.style.marginTop= value * 0.5+ 'px';
  leftbird.style.left = value * 0.5+ 'px';
  rightbird.style.left = value * -0.5+ 'px';
  leftcloud.style.left = value * -0.5+ 'px';
  rightcloud.style.left = value * 0.5+ 'px';
});


// LOAD + Remonter la page quand on refresh
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader-wrapper").fadeOut("slow");
  }, 1000);
});
$(window).on('beforeunload', function () {
  $('html,body').scrollTop(0);
});


// Anim Carrousel différent Projet
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

slider.addEventListener('mouseover', (e) => {
  const slide = e.target.closest('.slide');
  if (!slide || slide.classList.contains('active')) return;
  slides.forEach((s) => s.classList.remove('active'));
  slide.classList.add('active');
});

slider.addEventListener('mouseout', (e) => {
  slides.forEach((s) => s.classList.remove('active'));
});