var jsonUrl = "/static/homepage/assets/json/arrival_date_month.json"
Plotly.d3.json(jsonUrl, function(err, fig) {
  Plotly.plot('chart1', fig.data, fig.layout, {responsive: true});
});

var jsonUrl = "/static/homepage/assets/json/is_canceled.json"
Plotly.d3.json(jsonUrl, function(err, fig) {
  Plotly.plot('chart2', fig.data, fig.layout, {responsive: true});
});

var jsonUrl = "/static/homepage/assets/json/reserved_room_type.json"
Plotly.d3.json(jsonUrl, function(err, fig) {
  Plotly.plot('chart3', fig.data, fig.layout, {responsive: true});
});

var jsonUrl = "/static/homepage/assets/json/arrival_date_month_groupby_is_canceled.json"
Plotly.d3.json(jsonUrl, function(err, fig) {
  Plotly.plot('chart4', fig.data, fig.layout, {responsive: true});
});

var jsonUrl = "/static/homepage/assets/json/lead_time.json"
Plotly.d3.json(jsonUrl, function(err, fig) {
  Plotly.plot('chart5', fig.data, fig.layout, {responsive: true});
});