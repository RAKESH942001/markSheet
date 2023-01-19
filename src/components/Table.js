
import { React } from 'react';
import TableBody from './TableBody';
import tableHeader from './TableHeader';
import studentManager from '../service/studentManager';
import { peek } from '@laufire/utils/debug';

const heading = [
	'RollNo',
	'Name',
	'Tamil',
	'Maths',
	'English',
	'Science',
	'Social',
	'Total',
	'Result',
	'Rank',

];
const getMarkSheets = ({ state: { markSheets }}) => {
	peek(markSheets);
	return <div>
		<h1>MarkSheets</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{heading.map(tableHeader)}
				</tr>
			</thead>
			<tbody>
				{studentManager.processMarkSheet(markSheets)
					.map(TableBody)}

			</tbody>

		</table>
	</div>;
};

export default getMarkSheets;
