/* eslint-disable no-console */
import { React } from 'react';
import students from '../core/data';

const studentData = () => {
	const lines = students.map(({ std, sec }, key) =>
		<div
			key={ key }
			style={
				{
					background: 'grey',
					height: '55px',
					marginType: '15px',
					borderSize: '20px',
					color: 'red',
				}
			}
		>
			The {std} and {sec}
		</div>);

	return lines;
};

export default studentData;
