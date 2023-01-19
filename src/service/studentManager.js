
const getTotal = (examPapers) =>
	Number(examPapers.tamil)
+ Number(examPapers.english)
+ Number(examPapers.maths)
+ Number(examPapers.science)
+ Number(examPapers.social)
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

const getStudentMarks = () => ({

	rollNo: 57,
	name: 'z',
	tamil: 51,
	english: 71,
	maths: 33,
	science: 26,
	social: 64,

});

const studentManager = {
	processMarkSheet,
	getStudentMarks,
};

export default studentManager;
