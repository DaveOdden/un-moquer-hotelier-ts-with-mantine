import { useState, useEffect } from 'react'

// function getStorageValue(key, defaultValue) {
// 	// getting stored value
// 	const saved = localStorage.getItem(key)
// 	const initial = JSON.parse(saved)
// 	return initial || defaultValue
// }

// export const useLocalStorage = (key, defaultValue) => {
// 	const [value, setValue] = useState(() => {
// 		return getStorageValue(key, defaultValue)
// 	})

// 	useEffect(() => {
// 		// storing input name
// 		localStorage.setItem(key, JSON.stringify(value))
// 	}, [key, value])

// 	return [value, setValue]
// }

export const useLocalStorage = (key: string, defaultValue: any = null) => {
	const [value, setValue] = useState(() => {
		try {
			const saved = localStorage.getItem(key)
			if (saved !== null) {
				return JSON.parse(saved)
			}
			return defaultValue
		} catch {
			return defaultValue
		}
	})
	useEffect(() => {
		const rawValue = JSON.stringify(value)
		localStorage.setItem(key, rawValue)
	}, [key, value])

	return [value, setValue]
}
