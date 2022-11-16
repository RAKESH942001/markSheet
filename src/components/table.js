/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import { React } from 'react';
import students from '../core/data';
const rowStyle = {
	background: 'LightCyan',
	border: '2px groove black',
	height: '55px',
	fontSize: '15px',
	marginType: '15px',
	textAlign: 'center',
	borderSize: '20px',
	color: 'red',
};

const columnStyle = {
	display: 'inline-block',
	width: '150px',
	border: '2px groove black',

};

const studentData = () => {
	return <div>
		<h1>TJS School</h1>
		{
			students.map(({ name, std }, key) =>
				<div
					key={ key }
					style={ rowStyle }
				>
					<span style={ columnStyle }>{name}</span>
					<span style={ columnStyle }>{std}</span>
				</div>)

		}
	</div>;
};

export default studentData;
