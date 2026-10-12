const students = [
    { name: "يوسف", specialty: " Multimedia ", marks: [85, 90, 88] },
    { name: "سارة", specialty: " Software Engineering ", marks: [92, 95, 90] },
    { name: "حمودة", specialty: "  IT", marks: [30, 50, 60] },
    { name: "ليلى", specialty: "Electrical Engineering ", marks: [70, 75, 80] }
];


const calculateAverage = (marks) => {
    if (marks.length === 0) return 0;
    const sum = marks.reduce((total, mark) => total + mark, 0);
    return Math.round((sum / marks.length) * 10) / 10;
};

const studentsWithDetails = students.map(student => {
    const avg = calculateAverage(student.marks);
    return {
        ...student,
        specialty: student.specialty.trim(),
        average: avg,
        isPassed: avg >= 50
    };
});

const totalStudents = studentsWithDetails.length;
const passedStudentsCount = studentsWithDetails.filter(s => s.isPassed).length;
const successRate = ((passedStudentsCount / totalStudents) * 100).toFixed(1) + "%";


const topStudent = studentsWithDetails.reduce((prev, current) => prev.average > current.average ? prev : current);
const lowestStudent = studentsWithDetails.reduce((prev, current) => prev.average < current.average ? prev : current);

console.log(`نسبة النجاح: ${successRate}`);
console.log(` أعلى معدل: ${topStudent.name} بمعدل ${topStudent.average}`);
console.log(` أقل معدل: ${lowestStudent.name} بمعدل ${lowestStudent.average}`);

const allSpecialties = [...new Set(studentsWithDetails.map(s => s.specialty))];
console.log("أسماء التخصصات الموجودة:", allSpecialties);

const getAverageBySpecialty = (specName) => {
    const filteredStudents = studentsWithDetails.filter(s => s.specialty === specName.trim());
    if (filteredStudents.length === 0) return null;

    const totalMarksSum = filteredStudents.reduce((sum, s) => sum + s.average, 0);
    return Math.round((totalMarksSum / filteredStudents.length) * 10) / 10;
};

const averageSpecialty = getAverageBySpecialty(" Multimedia");
console.log("معدل تخصص Multimedia:", averageSpecialty ?? "ما في طلاب في هاد التخصص");
