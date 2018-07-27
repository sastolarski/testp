function getData(exerciseId, userId, exerciseName) {
  $.get("/chart/" + exerciseId + "/" + userId, function(result) {
    createChart(result, exerciseName);
  });
}

function createChart(result, exerciseName) {
  if (result.length === 0) {
    exerciseName += ": No History";
    renderChart(exerciseName);
  }
  var reps = [];
  var sets = [];
  var weight = [];
  for (var i = 0; i < result.length; i++) {
    var rep = {
      x: new Date(result[i].createdAt),
      y: result[i].reps
    };
    reps.push(rep);
    var set = {
      x: new Date(result[i].createdAt),
      y: result[i].sets
    };
    sets.push(set);
    var weigh = {
      x: new Date(result[i].createdAt),
      y: result[i].weightUsed
    };
    weight.push(weigh);
  }
  var chart = new CanvasJS.Chart("chartContainer", {
    axisX: {
      lineThickness: 2
    },
    data: [
      {
        showInLegend: true,
        name: "series1",
        legendText: "Reps",
        type: "line",
        dataPoints: reps
      },
      {
        showInLegend: true,
        name: "series2",
        legendText: "sets",
        type: "line",
        dataPoints: sets
      },
      {
        showInLegend: true,
        name: "series3",
        legendText: "Weight",
        type: "line",
        dataPoints: weight
      }
    ]
  });
  chart.render();
  renderChart(exerciseName);
}

function renderChart(exerciseName) {
  $("#label").html(exerciseName);
  $("#chartDiv").attr("style", "");
}

$(document).ready(function() {
  $("html").on("click", ".exercise", function(event) {
    event.preventDefault();
    $("#chartContainer").html("");
    getData(
      $(this).data("exerciseid"),
      $(this).data("userid"),
      $(this).data("exercisename")
    );
  });
});
