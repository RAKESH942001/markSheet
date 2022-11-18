/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import { React } from 'react';
import marksheets from '../service/data';

const rowStyle = {
	background: 'AliceBlue',
	fontSize: '15px',
	marginType: '15px',
	textAlign: 'center',
	color: 'red',
};

const columnStyle = {
	display: 'inline-block',
	width: '85px',
	columnWidth: '50px',
	borderWidth: '90%',
	border: '2px groove black',
	textAlign: 'left',
	height: '30px',
	paddingLeft: '5px',
};
const headerStyle = {
	background: 'wine',
	border: '5px double black',
};
const titleStyle = {
	background: 'lavender',
	borderTop: '2px double black',
	fontSize: '20px',
	fontTransform: 'upperCase',
	padding: '20px',
	textAlign: 'centre',
	// wordSpacing: '10050px',

};

const getMarkSheets = () => <div>
	<div style={ headerStyle }><h1>MarkSheet</h1></div>
	<div style={ titleStyle }>
		<span style={ titleStyle }>RollNo</span>
		<span style={ titleStyle }>Name</span>
		<span style={ titleStyle }>Tamil</span>
		<span style={ titleStyle }>English</span>
		<span style={ titleStyle }>Maths</span>
		<span style={ titleStyle }>Science</span>
		<span style={ titleStyle }>Social</span>
	</div>
	{
		marksheets.map(({ rollNo, name, tamil, english, maths, science, social }, key) =>
			<div
				key={ key }
				style={ rowStyle }
			>
				<span style={ columnStyle }>{rollNo}</span>
				<span style={ columnStyle }>{name}</span>
				<span style={ columnStyle }>{tamil}</span>
				<span style={ columnStyle }>{english}</span>
				<span style={ columnStyle }>{maths}</span>
				<span style={ columnStyle }>{science}</span>
				<span style={ columnStyle }>{social}</span>
			</div>)
	}

</div>;

export default getMarkSheets;
