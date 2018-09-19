$(document).ready(function () {

    var qroup1 = $("#qroup1");
    var group2 = $("#group2");
    var group3 = $("#group3");
    // var postCategorySelect = $("#category");
    // Giving the postCategorySelect a default value
    // surveyForm.val("Test");
    // Adding an event listener for when the form is submitted
    $(".engagement").on("click", function (event) {
        event.preventDefault();

        // Wont submit the survey if we are missing a body or a title
        // if (!group2Input.val().trim() || !group3Input.val().trim()) {
        //     return;
        // }
        // Constructing a newSurvey object to hand to the database
        var newSurvey = {
            // group1: titleInput.val().trim(),
            group1: $('input[name=group1]:checked').val(),
            group2: $('input[name=group2]:checked').val(),
            group3: $('input[name=group3]:checked').val(),
            // group2: bodyInput.val().trim(),
            // group3: postCategorySelect.val()
        };

        $.post("api/survey", newSurvey)
            .then(function () {
                console.log(newSurvey)

            })
        })
   
})