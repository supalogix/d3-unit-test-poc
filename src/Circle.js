var d3 = require("d3");

function Circle( el, circleId ) {
   d3.select(el)
      .append('svg:svg')
      .attr('width', 600)
      .attr('height', 300)
      .append('circle')
         .attr("id", circleId)
         .attr('cx', 300)
         .attr('cy', 150)
         .attr('r', 30)
         .attr('fill', '#ff0000')
         .on("click", function(d, i) {
            var item = d3.select(this);
            item.attr("fill", "#00ff00");
         });
}


module.exports = Circle;
