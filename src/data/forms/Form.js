import React from 'react';
import { Button } from '@material-ui/core';
import { inputGenerator } from './InputGenerator';

import { useDispatch } from 'react-redux';

import { paymentForms, getStateValues } from './PaymentForms';
import { useForm, useValidator } from './useForm';

const Form = ({ formName }) => {
	const form = paymentForms(formName);
	const inputFields = getStateValues(form.fields);

	const dispatch = useDispatch();

	const [values, handleChange] = useForm({ ...inputFields });
	const [formIsValid, errors, validate] = useValidator(form.fields, values);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			dispatch(form.submit(values));
		}
	};

	return (
		<div>
			{form.fields.map((f, key) =>
				inputGenerator(key, f, values[f.name], handleChange, errors[f.name])
			)}
			<div className='d-inline-flex'>
				<div className='text-center py-2'>
					<Button
						onClick={handleSubmit}
						className='btn-second font-weight-bold p-3 my-2'
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Form;
