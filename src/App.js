import './App.scss';
import { React, useState } from 'react';
import GetMarkSheets from './components/Table';
import markSheets from './service/data';
import studentManager from './service/studentManager';
import StudentData from './components/Inputs/StudentData';
import AddButton from './components/AddButton';

const getInitialState = (context) => ({
	currentMarkSheet: studentManager.getStudentMarks(context),
	markSheets: markSheets,
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App" role="App">
		<GetMarkSheets { ...extendedContext }/>
		<StudentData { ...extendedContext }/>
		<AddButton { ...extendedContext }/>
	</div>;
};

export default App;
