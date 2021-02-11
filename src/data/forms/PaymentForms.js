import { validateEmail, validatePassword } from '../../config/validators';
import { signin } from '../../_actions/userAction';

export const paymentForms = (formName) => {
	const forms = {
		loginForm: {
			fields: [
				{
					name: 'email',
					type: 'email',
					id: 'userEmail',
					label: 'Email',
					validation: validateEmail,
					isCustomerValidation: false,
					icon: 'MailOutlineTwoToneIcon',
					placeholder: 'Enter your email',
				},
				{
					name: 'password',
					type: 'password',
					id: 'userPassword',
					label: 'Password',
					icon: 'LockTwoToneIcon',
					isCustomerValidation: false,
					validation: validatePassword,
					placeholder: 'Enter your password',
				},
				// {
				// 	name: 'gender',
				// 	type: 'select',
				// 	id: 'userGender',
				// 	label: 'Gender',
				// 	validation: required,
				// 	customValidation: null,
				// 	placeholder: 'Your gender',
				// 	options: [
				// 		{ value: 'male', label: 'Male' },
				// 		{ value: 'female', label: 'Female' },
				// 	],
				// },
			],
			submit: signin,
		},
	};

	return forms[formName];
};

export const getStateValues = (fields) => {
	const values = {};

	fields.forEach((f) => {
		values[f.name] = f.type === 'number' ? 0 : '';
	});

	return values;
};
