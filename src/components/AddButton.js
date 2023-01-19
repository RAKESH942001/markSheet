import React from 'react';

const AddButton = (context) => {
	const { state, setState } = context;
	const { currentMarkSheet, studentMarkSheets } = state;

	return	<div className="addButton">
		<button
			onClick={ () => setState({
				...state,
				studentMarkSheets: [...studentMarkSheets, currentMarkSheet],
			}) }
		>Add</button></div>;
};

export default AddButton;
