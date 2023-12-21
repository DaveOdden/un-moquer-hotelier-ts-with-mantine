import { CheckedInIcon } from './CheckedInIcon'
import { NotCheckedInIcon } from './NotCheckedInIcon'

export const ListItemIcon: React.FC<{
	checkedIn: boolean
	checkinDate: string
}> = ({ checkedIn, checkinDate }) =>
	checkedIn ? <CheckedInIcon /> : <NotCheckedInIcon checkinDateTime={checkinDate} />
