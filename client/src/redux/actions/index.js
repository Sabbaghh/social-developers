export const petIncrease = (number) => {
	return {
		type: 'PET_INCREASE',
		Number: number ? number : 1,
	}
}
export const petDecrease = (number) => {
	return {
		type: 'PET_DECREASE',
		Number: number ? number : 1,
	}
}

export const test = (number) => {
	return {
		type: 'TEST',
		Number: number ? number : 1,
	}
}
