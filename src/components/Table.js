
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import { React } from 'react';
import markSheets from '../service/data';
import processData from '../service/studentManager';
import TableBody from './TableBody';
import tableHeader from './TableHeader';
const heading = [
	'RollNo',
	'Name',
	'Maths',
	'English',
	'Science',
	'Social',
	'Total',
	'Result',
	'Rank',

];
const getMarkSheets = () =>
	<div>
		<h1>MarkSheets</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{heading.map(tableHeader)}
				</tr>
			</thead>
			<tbody>
				{
					processData(markSheets).map(TableBody)
				}

			</tbody>

		</table>
	</div>;

export default getMarkSheets;
