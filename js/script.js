$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .menu, .header__right').toggleClass('active');
		$('body').toggleClass('lock');
		$('.menu, .header__right').toggleClass('open');
	});
	$('.menu__link').click(function(event){
		$('.header__burger, .menu, .header__right').removeClass('active');
		$('body').removeClass('lock');
	});


	$(document).ready(function(){
		$('.home__slider').slick({
			arrows:false,
			slidesToShow:1,
			autoplay:true,
			autoplaySpeed:2000,
			speed:800,
			draggable:false,
			swipe:false
		});
	});


	$(document).ready(function(){
		$('.gallery__slider').slick({
			arrows:true,
			slidesToShow:1,
			centerMode: true,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						centerMode: false,
					}
				}
			]
		});
	});

	$('.comment__inner').slick({
		arrows:false,
		dots:true,
		slidesToShow:2,
		slidesToScroll:2,
		draggable:false	,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1,
					slidesToScroll:1
			}
			
		}]
	});


	$('.question__block--title').click(function(event) {
		if($('.question__block').hasClass('one')){
			$('.question__block--title').not($(this)).removeClass('active');
			$('.question__block--text').not($(this).next()).slideUp(300);

		}
		$(this).toggleClass('active').next().slideToggle(300);

	});

});


const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



const openPopUp = document.getElementById('open__pop-up');
const openPopUpTwo = document.getElementById('open__pop-up-two');
const closePopUp = document.getElementById('pop-up__close');
const popUp = document.getElementById('pop-up');

openPopUp.addEventListener('click', function(e){
 e.preventDefault();
 popUp.classList.add('active');
});

openPopUpTwo.addEventListener('click', function(e){
 e.preventDefault();
 popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
 popUp.classList.remove('active');
});