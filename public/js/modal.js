function recordExercise() {
  var newEntry = {
    userId: $(".modal-title").data("userid"),
    exerciseId: $(".modal-title").data("exerciseid"),
    sets: parseFloat(
      $("#sets")
        .val()
        .trim()
    ),
    reps: parseFloat(
      $("#reps")
        .val()
        .trim()
    ),
    weightUsed: parseFloat(
      $("#weight")
        .val()
        .trim()
    )
  };
  $.ajax("/submit", {
    type: "POST",
    data: newEntry
  }).then(function() {
    $("#record").modal("hide");
    $("#sets").val("");
    $("#reps").val("");
    $("#weight").val("");
  });
}

// Ensure the page is loaded before beginning
$(document).ready(function() {
  $("#record").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var exerciseId = button.data("exerciseid");
    var userId = button.data("userid");
    var exerciseName = button.data("exercisename");
    $(".modal-title")
      .text(exerciseName)
      .attr("data-exerciseid", exerciseId)
      .attr("data-userid", userId);
  });
  $("html").on("submit", function(event) {
    event.preventDefault();
    recordExercise();
  });
});
