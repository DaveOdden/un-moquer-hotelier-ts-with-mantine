import { IGuest, IGuestAddress } from './types'

declare global {
	interface ObjectConstructor {
		typedKeys<T>(obj: T): Array<keyof T>
	}
}

Object.typedKeys = Object.keys as any

export const findMatches = (record: IGuest, searchQuery: string) => {
	return Object.typedKeys(record).some((k: keyof IGuest) => {
		// search first level properties
		if (record && record[k] && record[k] instanceof String) {
			return (record[k] as string).toLowerCase().includes(searchQuery.toLowerCase())
		}

		// search in address
		if (record[k] instanceof Object && k === 'address') {
			if (record !== undefined && record.address !== undefined) {
				return Object.typedKeys(record.address).some((subKey: keyof IGuestAddress) => {
					return record?.address
						? record?.address[subKey].toString().toLowerCase().includes(searchQuery.toLowerCase())
						: false
				})
			}
		}
	})
}
