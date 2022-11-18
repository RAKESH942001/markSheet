
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import { React } from 'react';
import markSheets from '../service/data';
import processData from '../service/studentManager';

const getMarkSheets = () =>
	<div>
		<h1>MarkSheets</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					<th className="thStyle">RollNo</th>
					<th className="thStyle">Name</th>
					<th className="thStyle">Maths</th>
					<th className="thStyle">English</th>
					<th className="thStyle">Science</th>
					<th className="thStyle">Social</th>
					<th className="thStyle">Total</th>
					<th className="thStyle">Result</th>
					<th className="thStyle">Rank</th>

				</tr>
			</thead>
			<tbody>
				{
					processData(markSheets).map((markSheet, key) =>
						<tr key={ key }>
							<td className="tdNumberStyle">{markSheet.rollNo}</td>
							<td className="td`Style">{markSheet.name}</td>
							<td className="tdNumberStyle">{markSheet.maths}</td>
							<td className="tdNumberStyle">{markSheet.english}</td>
							<td className="tdNumberStyle">{markSheet.science}</td>
							<td className="tdNumberStyle">{markSheet.social}</td>
							<td className="tdNumberStyle">{markSheet.total}</td>
							<td className="tdNumberStyle">{markSheet.result}</td>
							<td className="tdNumberStyle">{markSheet.rank}</td>

						</tr>)
				}

			</tbody>

		</table>
	</div>;

export default getMarkSheets;
