// =================================
// 1. Student Class
// =================================

class Student {

    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }


    // Calculate Average using reduce
    calculateAverage() {

        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }


    // Determine Student Grade
    getGrade(average) {

        if (average >= 90) {
            return "A";
        }
        else if (average >= 80) {
            return "B";
        }
        else if (average >= 70) {
            return "C";
        }
        else if (average >= 60) {
            return "D";
        }
        else if (average >= 50) {
            return "E";
        }
        else {
            return "F";
        }
    }


    // Determine Final Result
    getResult(average) {

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        }
        else {
            return "يحتاج مراجعة";
        }
    }

}


// =================================
// 2. Create Students Objects
// =================================

let studentsList = [

    new Student(101, "Ahmed", [90, 85, 95], 95),

    new Student(102, "Mona", [45, 48, 42], 90),

    new Student(103, "Ali", [60, 65, 70], 80),

    new Student(104, "Sara", [40, 45, 48], 70)

];


// =================================
// 3. Students Reports
// =================================

console.log("===== Students Reports =====");

studentsList.forEach(student => {

    let average = student.calculateAverage();

    console.log("Student ID:", student.id);
    console.log("Name:", student.name);
    console.log("Average:", average.toFixed(2));
    console.log("Grade:", student.getGrade(average));
    console.log("Final Result:", student.getResult(average));

    console.log("------------------------");

});


// =================================
// 4. Filter Students Needing Mercy
// =================================

let strugglingStudents = studentsList.filter(student => {

    let average = student.calculateAverage();

    return average >= 40 && average <= 49;

});


// =================================
// 5. Add 5 Grace Marks using map
// =================================

let graceStudents = strugglingStudents.map(student => {

    let oldAverage = student.calculateAverage();

    return {
        id: student.id,
        name: student.name,
        originalAverage: oldAverage,
        newAverage: oldAverage + 5
    };

});


// =================================
// 6. Calculate New Averages using reduce
// =================================

let totalNewAverages = graceStudents.reduce((sum, student) => {

    return sum + student.newAverage;

}, 0);


// =================================
// 7. Protect Against Division by Zero
// =================================

let graceAverage = 0;

if (graceStudents.length > 0) {

    graceAverage = totalNewAverages / graceStudents.length;

}


// =================================
// 8. Display Grace Committee Results
// =================================

console.log("===== Grace Committee Results =====");

console.log("Struggling Students:", graceStudents);

console.log("Average After Grace Marks:", graceAverage.toFixed(2));

console.log("Total Struggling Students:", graceStudents.length);