class PrintNumber {
	constructor(from, to, time) {
		this._from = from
		this._to = to
		this._time = time
	}

	printNumbersInterval() {
		if (this._from <= this._to) {
			let current = this._from
			const intervalId = setInterval(() => {
				console.log(`Interval >> ${current}`)
				if (current === this._to) {
					clearInterval(intervalId)
				}
				current++
			}, this._time)
		} else {
			throw new RangeError('Error range number (from <= to)')
		}
	}

	printNumbersTimeout() {
		if (this._from <= this._to) {
			let current = this._from
			const timeoutId = setTimeout(function printNext() {
				console.log(`Timeout >> ${current}`)
				if (current < this._to) {
					current++
					setTimeout(printNext, this._time)
				} else {
					clearTimeout(timeoutId)
				}
			}, this._time)
		} else {
			throw new RangeError('Error range number (from <= to)')
		}
	}
}

// const result1 = new PrintNumber(1, 3, 1000)
// result1.printNumbersInterval()
// result1.printNumbersTimeout()

// const result2 = new PrintNumber(3, 3, 1000)
// result2.printNumbersInterval()
// result2.printNumbersTimeout()

// const result3 = new PrintNumber(4, 3, 1000)
// result3.printNumbersInterval()
// result3.printNumbersTimeout()
