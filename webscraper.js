var script = document.createElement("script");
script.src= "https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName('body')[0];
body.after(script);
d3.selectAll("p a").nodes().forEach(function(e){
  console.log(e.innerText);
});
