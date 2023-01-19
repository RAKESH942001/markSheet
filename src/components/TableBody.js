/* eslint-disable max-len */
import { React } from 'react';
const TableBody = ({ rollNo, name, maths, tamil, english, science, social, total, result, rank }, key) =>
	<tr key={ key }>
		<td className="tdNumberStyle">{rollNo}</td>
		<td className="tdStyle">{name}</td>
		<td className="tdNumberStyle">{tamil}</td>
		<td className="tdNumberStyle">{maths}</td>
		<td className="tdNumberStyle">{english}</td>
		<td className="tdNumberStyle">{science}</td>
		<td className="tdNumberStyle">{social}</td>
		<td className="tdNumberStyle">{total}</td>
		<td className="tdNumberStyle">{result}</td>
		<td className="tdNumberStyle">{rank}</td>

	</tr>;

export default TableBody;
