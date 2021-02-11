import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import { InputAdornment } from '@material-ui/core';

export const iconGenerate = (iconName) => {
	switch (iconName) {
		case 'MailOutlineTwoToneIcon':
			return {
				startAdornment: (
					<InputAdornment position='start'>
						<MailOutlineTwoToneIcon />
					</InputAdornment>
				),
			};

		case 'LockTwoToneIcon':
			return {
				startAdornment: (
					<InputAdornment position='start'>
						<LockTwoToneIcon />
					</InputAdornment>
				),
			};
		default:
			return {};
	}
};
