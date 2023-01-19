import React from 'react';
import studentManager from '../service/studentManager';

const AddButton = (context) => {
	const { state, setState } = context;
	const { markSheets } = state;

	return	<div className="addButton">
		<button
			onClick={ () => setState({
				...state,
				markSheets: [...markSheets,
					studentManager.getStudentMarksWithId(context)],
			}) }
		>Add</button></div>;
};

export default AddButton;
