> JS Chart

JavaScript charting library that can draw many different types of charts using SVG. It is easy to use and get started with, so it's a good fit for this tutorial. The API (Application Programming Interface, aka the options and settings necessary to create charts) makes difficult things simpler and it is a good option when experimenting with data visualizations.

![](https://cdn.mos.cms.futurecdn.net/S5bicwPe8vbP9nt3iwAwwi.jpg)


You can create responsive charts with JSCharting through a couple simple steps:
* Define a `<div>` tag in the HTML file with a unique id.

* Provide this id, data, and any other options when calling JSC.Chart() in the JavaScript file.

![](https://www.freakyjolly.com/wp-content/uploads/2020/05/Pasted-into-Angular-98-Chart.js-Tutorial-using-Line-Bar-Pie-Scatter-Doughnut-Examples-with-ng2-charts.png)


### How to Build a JavaScript Bar Chart
* Create an HTML page.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Bar Chart</title>
  </head>
  <body>
    <div id="container" style="width: 100%; height: 100%"></div>
  </body>
</html>
```

* Reference all necessary files

```html
<!DOCTYPE html>
<html>
  <head>
      <title>JavaScript Bar Chart</title>
      <script src="https://cdn.anychart.com/releases/8.0.0/js/anychart-base.min.js"></script>
  </head>
  <body>
    <div id="container" style="width: 100%; height: 100%"></div>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
      <title>JavaScript Bar Chart</title>
      <script src="https://cdn.anychart.com/releases/8.0.0/js/anychart-base.min.js"></script>
  </head>
  <body>
    <div id="container" style="width: 100%; height: 100%"></div>
    <script>
        <!-- chart code will be here -->
    </script>
  </body>
</html>
```
* Put together the data
![](https://www.exceldashboardtemplates.com/wp-content/uploads/2015/05/image_thumb15.png)


```js
var data = {
  header: ["Name", "Death toll"],
  rows: [
    ["San-Francisco (1906)", 1500],
    ["Messina (1908)", 87000],
    ["Ashgabat (1948)", 175000],
    ["Chile (1960)", 10000],
    ["Tian Shan (1976)", 242000],
    ["Armenia (1988)", 25000],
    ["Iran (1990)", 50000]
]}
```
 
 * Write the code for the chart

 ```js

anychart.onDocumentReady(function() {
    // the code to create a chart will be here
});
```

```js
anychart.onDocumentReady(function() {
    // the data 
    var data = {
      header: ["Name", "Death toll"],
      rows: [
        ["San-Francisco (1906)", 1500],
        ["Messina (1908)", 87000],
        ["Ashgabat (1948)", 175000],
        ["Chile (1960)", 10000],
        ["Tian Shan (1976)", 242000],
        ["Armenia (1988)", 25000],
        ["Iran (1990)", 50000]
    ]};
});
```
```js
// create the chart
var chart = anychart.bar();
 
// add the data
chart.data(data);

// set the chart title
chart.title("The deadliest earthquakes in the XXth century");

chart.container('container');
chart.draw();

```



