const hamburger = document.querySelector('.hamburger');
const mobile_menu_items = document.querySelectorAll('.m_m_item');
const mobile_menu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('nav');
const cards = document.getElementsByClassName('card_links-toggle');


for(var i = 0; i < cards.length; i++)
{
	cards[i].addEventListener('click', () => {
		cards[i].classList.toggle('animation');
	});
}


function toggleMenu ()
{
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-open');
}

hamburger.addEventListener('click', function() {
    toggleMenu();
});

for(var i = 0; i < mobile_menu_items.length; i++)
{
    mobile_menu_items[i].addEventListener('click', function(){
        toggleMenu();
    });
}

/* Scroll section */
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('is-active')
		}else{
			sectionsClass.classList.remove('is-active')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)