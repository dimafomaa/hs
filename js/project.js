$(document).ready(function(){


	$(document).ready(function(){
		$('.gallery__slider-info').slick({
			arrows:true,
			dots: true,
			slidesToShow:1,
			
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						centerMode: false,
					},
					breakpoint: 768,
					settings: {
						dots: false,
					}
				}
			]
		});
	});


	$(".gallery__slider-info").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true
		}
	});


});

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



const openPopUpThree = document.getElementById('open__pop-up-three');
const openPopUpFour = document.getElementById('open__pop-up-four');
const closePopUp = document.getElementById('pop-up__close');
const popUp = document.getElementById('pop-up');

openPopUpThree.addEventListener('click', function(e){
 e.preventDefault();
 popUp.classList.add('active');
});

openPopUpFour.addEventListener('click', function(e){
 e.preventDefault();
 popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
 popUp.classList.remove('active');
});