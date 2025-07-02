const linkText = document.querySelector('.link-info')

function loadText() {
	setTimeout(() => {
		linkText.textContent = 'Hello Google'
	}, 1000)
}

function countTimeToLoad() {
	const TIME_LOAD = 5
	let current = TIME_LOAD
	if (current > 0) {
		const intervalId = setInterval(() => {
			linkText.textContent = `${current}`
			linkText.classList.add('unlock')
			if (current === 0) {
				clearInterval(intervalId)
				loadText()
				setTimeout(() => {
					linkText.classList.remove('unlock')
				}, 1000)
			}
			current--
		}, 1000)
	}
}

countTimeToLoad()
