var script = document.createElement("script");
script.src= "https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName('body')[0];
body.after(script);
console.log("Course Offered in Computer Science:");
d3.selectAll('ul ').nodes().forEach(function(e){
  console.log(e.innerText);
});
