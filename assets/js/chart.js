google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ['Language', 'Percentage'],
    ["Java", 95],
    ["Python", 90],
    ["C++", 75],
    ["HTML", 70],
    ['CSS', 60],
    ['JavaScript', 75],
    ['Node.js', 50],
    ['jQuery', 60]
  ]);

  var options = {
    title: 'Programming Language Proficiency',
    width: 400,
    legend: { position: 'none' },
    chart: { title: 'Programming Language Proficiency',
             subtitle: 'proficiency level by percentage' },
    bars: 'horizontal', // Required for Material Bar Charts.
    axes: {
      x: {
        0: { side: 'top', label: 'Proficiency'} // Top x-axis.
      }
    },
    bar: { groupWidth: "90%" }
  };

  var chart = new google.charts.Bar(document.getElementById('top_x_div'));
  chart.draw(data, options);
};