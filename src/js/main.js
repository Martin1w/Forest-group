const btn = document.querySelector('.burger-btn')
const burgerMenu = document.querySelector('.burger')
const allNavItems = document.querySelectorAll('.burger-item')

const openNav = () => {
	burgerMenu.classList.toggle('burger--active')

	allNavItems.forEach(item => {
		// podczas wybrania w nav np: 'oferta' nav się zamyka (usuwa item-active)
		item.addEventListener('click', () => {
			burgerMenu.classList.remove('burger--active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		// animation-delay: 0.3s;
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

btn.addEventListener('click', openNav)
