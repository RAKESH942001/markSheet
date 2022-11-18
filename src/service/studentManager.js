
const getTotal = (examPapers) =>
	examPapers.tamil
  + examPapers.english
  + examPapers.maths
  + examPapers.science
  + examPapers.social
  ;
const passMark = 35;
const getResult = (examPapers) => (Math.min(
	examPapers.tamil,
	examPapers.english,
	examPapers.maths,
	examPapers.science,
	examPapers.social,
) >= passMark
	? 'Pass'
	: 'Fail');
const addFields = (papers) => ({
	...papers,
	total: getTotal(papers),
	result: getResult(papers),

});

const getRank = (examPapers) => {
	const sortedData = examPapers.sort((a, b) => b.total - a.total);
	let rank = 1;
	const finalMarkSheet = sortedData.map((student) => ({
		...student,
		rank: student.result === 'Pass' ? rank++ : '-',
	}));

	return finalMarkSheet;
};
const processMarkSheet = (examPapers) => {
	const finalData = examPapers.map(addFields);

	return getRank(finalData);
};

export default processMarkSheet;
