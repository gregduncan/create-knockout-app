export const add = item => {
	return { type: 'add', payload: item }
}

export const removeAll = () => {
	return { type: 'removeAll' }
}
