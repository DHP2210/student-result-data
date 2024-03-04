const student = [
    {
        id: 1,
        studentName: 'Dhruv Purohit',
        subject: {
            Gujarati: 65,
            Hindi: 55,
            English: 66
        }
    },

    {
        id: 2,
        studentName: 'Jatan Upadhyay',
        subject: {
            Gujarati: 70,
            Hindi: 65,
            English: 70
        }
    },

    {
        id: 3,
        studentName: 'Aman',
        subject: {
            Gujarati: 70,
            Hindi: 25,
            English: 70
        }
    },

    {
        id: 4,
        studentName: 'Yash',
        subject: {
            Gujarati: 45,
            Hindi: 31,
            English: 70
        }
    }

]



const student2 = [
    {
        id: 1,
        studentName: 'Dhruv Purohit',
        subject: {
            Gujarati: 65,
            Hindi: 55,
            English: 66
        }
    },

    {
        id: 2,
        studentName: 'Jatan Upadhyay',
        subject: {
            Gujarati: 70,
            Hindi: 65,
            English: 70
        }
    },

    {
        id: 3,
        studentName: 'Aman',
        subject: {
            Gujarati: 70,
            Hindi: 25,
            English: 70
        }
    },

    {
        id: 4,
        studentName: 'Yash',
        subject: {
            Gujarati: 45,
            Hindi: 31,
            English: 70
        }
    }

]





// print student-data


let subject = [];
const final = student.map(e => ({ ...e, total: Math.trunc((e.subject.Gujarati + e.subject.Hindi + e.subject.English) / 3) }
))

console.log(final);




// Total percentage pass, fail


// final.forEach(student => {
//     const result = (student.total >= 35) ? 'Passed the exam' : 'Failed the exam';
//     console.log(`${student.studentName} ${result} `);

// });

// check if the person is passed all subjects (badha pass hoy to j pass , baki fail)

final.forEach(student => {
    const passAllSubjects = Object.values(student.subject).every(mark => mark >= 35);
    const result = passAllSubjects ? 'Passed the exam' : 'Failed the exam';
    console.log(`${student.studentName} ${result}`);
});




// percentage sort
final.sort(({ total: a }, { total: b }) => b - a)
console.log('--- percentage sorting --- ')
console.log(final.slice(0, 2));


// Diffrentiate arrays for Pass and Fail.

// array for who passed the exam
console.log('-------This Student Passed The Exam.-------')
console.log(final.slice(0, 2));

// array for who failed the exam
console.log('-------This Student Failed The Exam.-------')
console.log(final.slice(2, 4));


// students with most marks and lowest marks

final.sort((a, b) => a - b);
let highestMarks = final.slice(0, 2);
let lowestMarks = final.slice(-2);

console.log("Students with highest marks:", highestMarks);
console.log("Students with lowest marks:", lowestMarks);



// final.forEach(student => {
//     const passAllSubjects = Object.values(student.subject).every(mark => mark >= 35);
//     const result = passAllSubjects ? 'Passed the exam' : 'Failed the exam';
//     console.log(`${student.studentName} ${result}`);
// });



// const passStudents = final.filter(student => {
//     const passAllSubjects = Object.values(student.subject).every(mark => mark >= 35);
//     return passAllSubjects;
// });

// console.log("--Name And Percentage Of Students Passed All Subjects--");
// passStudents.forEach(student => {
//     console.log(`${student.studentName}: ${student.total}%`);
// });

// Based on the student array push a new array and print(name and percentage) for who passed exam.

const passStudentsData = student2
    .filter(student => Object.values(student.subject).every(mark => mark >= 35))
    .map(student => {
        console.log(student)
        const total = student.subject.English + student.subject.Gujarati;
        const perce = total / 2
        a = {
            studentName: student.studentName, percentage: perce, c: 'c'
        }
        console.log(a);

        return a
    });

console.log("Name And Percentage Of Students Passed All Subjects");
console.log(passStudentsData);
// passStudentsData.forEach(student => {
//     console.log(`${student.studentName}: ${student.percentage}%`);
// });




// create a new array and print(name and percentage) who passed exam.
// const studentData = [
//     {
//         id: 1,
//         studentName: 'Het',
//         subjects: {
//             Gujarati: 65,
//             Hindi: 55,
//             English: 66
//         }
//     },

//     {
//         id: 2,
//         studentName: 'Harhil',
//         subjects: {
//             Gujarati: 70,
//             Hindi: 65,
//             English: 70
//         }
//     },

//     {
//         id: 3,
//         studentName: 'Rushi',
//         subjects: {
//             Gujarati: 70,
//             Hindi: 25,
//             English: 70
//         }
//     },

//     {
//         id: 4,
//         studentName: 'Meet',
//         subjects: {
//             Gujarati: 45,
//             Hindi: 31,
//             English: 70
//         }
//     }

// ]

// console.log(studentData);
// let subjects = [];
// const finalData = studentData.map(e => ({ ...e, percentageTotal: Math.trunc((e.subjects.Gujarati + e.subjects.Hindi + e.subjects.English) / 3) }))
// console.log(finalData);




// const passStudents1 = finalData.filter(studentData => {
//     const passedAllSubjects = Object.values(studentData.subjects).every(marks => marks >= 35);
//     return passedAllSubjects;
// });

// console.log("Name And Percentage Of Students Passed All Subjects");
// passStudents1.forEach(studentData => {
//     console.log(`${studentData.studentName}: ${studentData.percentageTotal}%`);
// });







// reference
// const s = {
//     id: 1,
//     studentName: 'Dhruv Purohit',
//     // totalPercentage: 55,
//     subject: {
//         Gujarati: 65,
//         Hindi: 55,
//         English: 66
//     }
// };
// console.log();

// const s2 = { ...s };
// s2.total = s.subject.Gujarati + s.subject.Hindi + s.subject.English;
// // console.log(s2);

// let object1 = {
//     name: 'Dhruv'
// }
// let object2 = object1;
// object1.name = 'Gdbh'

// console.log(object1.name);
// console.log(object2.name);

// let a = 5;
// console.log(a);
// b = a;
// a = 10;

// console.log(a); // o/p : 10
// console.log(b);   o/p : 5











