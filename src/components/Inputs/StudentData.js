import { keys } from '@laufire/utils/lib';
import React from 'react';

const StudentData = (context) => {
	const { state, setState } = context;
	const { currentMarkSheet } = state;

	return (
		<div>
			{keys(currentMarkSheet).map((header, key) =>
				<div	key={ key }>
					<label> {header}</label>
					<input
						type="text"
						placeholder="Enter value"
						onChange={ ({ target: { value }}) => setState({
							...state,
							currentMarkSheet: { ...currentMarkSheet,
								[header]: value },
						}) }
					/>
				</div>)}
		</div>);
};

export default StudentData;
