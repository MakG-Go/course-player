export function initFlipCard() {

	console.log('www')

	// const btnNext = document.querySelector('.js-btn-next');

	console.log(document.querySelectorAll('.js-flipCard'))
	const flipCards = document.querySelectorAll('.js-flipCard');
	const flipCardsVisible = [...flipCards].filter(card => isVisible(card));

	// btnNext.classList.add('disabled');

	// If the data-click attribute is present the cards flip on click,
	// otherwise they flip on hover

	flipCards.forEach((flipCard) => {
		if (flipCard.hasAttribute('data-click')) {

			console.log('123')

			flipCard.addEventListener('click', function () {

				console.log('1')

				this.classList.add('vis');
				this.classList.toggle('flip');
				checkVisited(flipCardsVisible);
			});
		} else {
			flipCard.addEventListener('mouseover', function () {

				console.log('2')

				this.classList.add('vis');
				this.classList.add('flip');
				checkVisited(flipCardsVisible);
			});

			flipCard.addEventListener('mouseout', function () {
				this.classList.remove('flip');
			});
		}
	});
}

export function checkVisited(visible) {
	const flipCardsVisited = document.querySelectorAll('.js-flipCard.vis').length;

	if (visible.length === flipCardsVisited) {
		// btnNext.classList.remove('disabled');
		return true;
	}
	return false;
}

export function isVisible(elem) {
	return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}
