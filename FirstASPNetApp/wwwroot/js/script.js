//David Schraedel
//JavaScript for grade calculation


//$("#form").submit(function handleForm(event) { event.preventDefault(); })

$('#submitButton').click(function () {
    //define variables
    var fGradePercentage = 0.0;
    var sGradeLetter = '';
    var fAssignments = parseFloat($('#Assignments').val());
    var fGroupProject = parseFloat($('#GroupProject').val());
    var fQuizzes = parseFloat($('#Quizzes').val());
    var fExams = parseFloat($('#Exams').val());
    var fIntex = parseFloat($('#Intex').val());

    //calculate grade based on inputs
    fGradePercentage = fAssignments + fGroupProject + fQuizzes + fExams + fIntex;
    if (fGradePercentage >= 94) {
        sGradeLetter = 'A';
    }
    else if (fGradePercentage >= 90) {
        sGradeLetter = 'A-';
    }
    else if (fGradePercentage >= 87) {
        sGradeLetter = 'B+';
    }
    else if (fGradePercentage >= 84) {
        sGradeLetter = 'B';
    }
    else if (fGradePercentage >= 80) {
        sGradeLetter = 'B-';
    }
    else if (fGradePercentage >= 77) {
        sGradeLetter = 'C+';
    }
    else if (fGradePercentage >= 74) {
        sGradeLetter = 'C';
    }
    else if (fGradePercentage >= 70) {
        sGradeLetter = 'C-';
    }
    else if (fGradePercentage >= 67) {
        sGradeLetter = 'D+';
    }
    else if (fGradePercentage >= 64) {
        sGradeLetter = 'D';
    }
    else if (fGradePercentage >= 60) {
        sGradeLetter = 'D-';
    }
    else {
        sGradeLetter = 'E';
    }

    //display calculated products on page
    $('#calculatedLetterGrade').html(sGradeLetter);
    $('#calculatedPercentGrade').html(fGradePercentage + "%");
});
