import { CheckedInIcon } from './CheckedInIcon'
import { NotCheckedInIcon } from './NotCheckedInIcon'

export const ListItemIcon: React.FC<{
	checkedIn: boolean
	checkinDate: any
}> = ({ checkedIn, checkinDate }) => {
	return checkedIn ? <CheckedInIcon /> : <NotCheckedInIcon checkinDateTime={checkinDate} />
}
