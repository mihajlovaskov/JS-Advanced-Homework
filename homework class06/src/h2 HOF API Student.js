$(document).ready(()=>{
    let myH3 = $("h3").last();
    let myScript = $("#myScript")
    myH3.after(`<h5>All students with an average grade higher than 3:</h5>`);
    let myH5 = $("h5").last();
    myH5.after(`<h5>All female student names with an average grade of 5:</h5>`);
    let myH52 = $("h5").last();
    myH52.after(`<h5>All male student full names who live in Skopje and are over 18 years old:</h5>`);
    let myH53 = $("h5").last();
    myH53.after(`<h5>The average grades of all female students over the age of 24:</h5>`);
    let myH54 = $("h5").last();
    myH54.after(`<h5>All male students with a name starting with B and average grade over 2:</h5>`);
    let myH55 = $("h5").last();
    $.ajax({
        url: `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`,
        success: resultStudents => {
            //console.log(resultStudents);
            let parsedResultsStudents = JSON.parse(resultStudents);
                console.log(parsedResultsStudents);
                console.log("FIRST BULLET");
                let studentsWithGradeAboveThree = parsedResultsStudents.filter(s => s.averageGrade > 3)
                .map(student => `${student.id}. ${student.firstName} ${student.lastName}`);
                console.log(studentsWithGradeAboveThree);
                studentsWithGradeAboveThree.forEach(sd => myH52.before(`<ul><li>${sd}</li></ul>`));
                console.log("SECOND BULLET");
                let femalesGradeFive = parsedResultsStudents.filter(s => s.averageGrade == 5).filter(st => st.gender == "Female")
                .map(student => `${student.id}. ${student.firstName} ${student.lastName}`);
                console.log(femalesGradeFive);
                femalesGradeFive.forEach(su => myH53.before(`<ul><li>${su}</li></ul>`));
                console.log("THIRD BULLET");
                let malesSkopje18 = parsedResultsStudents.filter(s => s.gender == "Male").filter(st => st.city == "Skopje").filter(ss => ss.age > 18)
                .map(student => `${student.id}. ${student.firstName} ${student.lastName}`);
                console.log(malesSkopje18);
                malesSkopje18.forEach(su => myH54.before(`<ul><li>${su}</li></ul>`));
                console.log("FOURTH BULLET");
                let gradesFemales24 = parsedResultsStudents.filter(s => s.gender == "Female").filter(st => st.age > 24)
                .map(student => `${student.id}. ${student.firstName} ${student.lastName}; average grade: ${student.averageGrade}`);
                console.log(gradesFemales24);
                gradesFemales24.forEach(su => myH55.before(`<ul><li>${su}</li></ul>`));
                console.log("FIFTH BULLET");
                let malesOnBGrade2 = parsedResultsStudents.filter(s => s.gender == "Male").filter(st => st.averageGrade > 2).filter(ss => ss.firstName.startsWith("B"))
                .map(student => `${student.id}. ${student.firstName} ${student.lastName}`);
                console.log(malesOnBGrade2);
                malesOnBGrade2.forEach(su => myScript.before(`<ul><li>${su}</li></ul>`));                    
      },
        error: (error) => {console.log(`There is some problem with the API`);}
    })    
})
