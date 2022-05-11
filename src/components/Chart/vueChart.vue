<template>
      <div class="graph">
        <div id="chart1"></div>
      </div>
</template>

<script>
import * as d3 from "d3";
import './chart1.css'

export default {

  data() {
    return {
      maxAllowed: 0,
      graphData: [
        {
          month: 1,
          percent: 100,
        },
        {
          month: 2,
          percent: 100,
        },
        {
          month: 3,
          percent: 100,
        },
        {
          month: 4,
          percent: 100,
        },
        {
          month: 5,
          percent: 100,
        },
        {
          month: 6,
          percent: 100,
        },
        {
          month: 7,
          percent: 100,
        },
        {
          month: 8,
          percent: 101,
        },
        {
          month: 9,
          percent: 100,
        },
        {
          month: 10,
          percent: 102,
        },
        {
          month: 11,
          percent: 101,
        },
        {
          month: 12,
          percent: 100,
        },
      ],
      graphWhite: [
        {
          month: 1,
          percent: 98.5,
        },
        {
          month: 2,
          percent: 98.4,
        },
        {
          month: 3,
          percent: 98.3,
        },
        {
          month: 4,
          percent: 98.4,
        },
        {
          month: 5,
          percent: 98.5,
        },
        {
          month: 6,
          percent: 98.4,
        },
        {
          month: 7,
          percent: 98.6,
        },
        {
          month: 8,
          percent: 98.5,
        },
        {
          month: 9,
          percent: 98.5,
        },
        {
          month: 10,
          percent: 98.4,
        },
        {
          month: 11,
          percent: 98.6,
        },
        {
          month: 12,
          percent: 98.5,
        }
      ],
      graphGreen: [
        {
          month: 1,
          percent: 97,
        },
        {
          month: 2,
          percent: 97,
        },
        {
          month: 3,
          percent: 97.1,
        },
        {
          month: 4,
          percent: 97.1,
        },
        {
          month: 5,
          percent: 97.1,
        },
        {
          month: 6,
          percent: 97,
        },
        {
          month: 7,
          percent: 97,
        },
        {
          month: 8,
          percent: 97,
        },
        {
          month: 9,
          percent: 97.1,
        },
        {
          month: 10,
          percent: 97.1,
        },
        {
          month: 11,
          percent: 97,
        },
        {
          month: 12,
          percent: 97,
        }
      ],
      minAllowed: 0
    };
  },
  mounted() {
    this.maxAllowed = d3.max(this.graphData, (d) => d.percent) + 2;
    this.minAllowed = d3.max(this.graphData.concat(this.graphWhite, this.graphGreen), (d) => d.percent) - 6;
    this.drawGraph();
  },
  methods: {
    drawGraph() {
      const margin = { top: 25, right: 325, bottom: 25, left: 45 };
      const width =
        document.getElementById("chart1").parentElement.offsetWidth -
        (margin.left + margin.right);
      const height =
        document.getElementById("chart1").parentElement.offsetHeight -
        (margin.top + margin.bottom);

      // Remove any existing SVG
      d3.select("#chart1").selectAll("svg > *").remove();

      // Group
      const g = d3
        .select("#chart1")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr(
          "transform",
          "translate(" + margin.left + ", " + margin.top + ")"
        );

      const xScale = d3
        .scalePoint()
        .padding(0.6)
        .domain(this.graphData.map((d) => { return d.month }))
        .range([0, width]);

      const yScale = d3
        .scaleLinear()
        .domain([this.minAllowed, this.maxAllowed])
        .range([height, 0]);

      //сетка
      g.append("g")
        .attr("class", "y-axis-grid")
        .call(d3.axisLeft(yScale).tickSize(-width).tickFormat("").ticks(9));

      g.append("g")
        .attr("class", "x-axis-grid")
        .call(d3.axisBottom(xScale).tickSize(height).tickFormat("").ticks(5));
      

      // тень
      const defs = g.append("defs");
      const filter = defs.append("filter").attr("id", "shadow");
      filter
        .append("feOffset")
        .attr("in", "SourceGraphic")
        .attr("dx", 0)
        .attr("dy", 10)
        .attr("result", "offOut");
      filter
        .append("feGaussianBlur")
        .attr("in", "offOut")
        .attr("stdDeviation", 10)
        .attr("result", "blurOut");
      filter
        .append("feBlend")
        .attr("in", "SourceGraphic")
        .attr("in2", "blurOut")
        .attr("mode", "normal");

      const grad = defs
        .append("linearGradient")
        .attr("id", "grad")
        .attr("x1", "0%")
        .attr("x2", "0%")
        .attr("y1", "0%")
        .attr("y2", "100%")
        .attr("gradientTransform", "rotate(0)");

      var colors = [
        ["rgb(74, 179, 255)", "0.2"],
        ["rgb(74, 179, 255)", "0"],
      ];

      grad
        .selectAll("stop")
        .data(colors)
        .enter()
        .append("stop")
        .style("stop-color", function (d) {
          return d[0];
        })
        .style("stop-opacity", function (d) {
          return d[1];
        })
        .attr("offset", function (d, i) {
          return 100 * (i / (colors.length - 1)) + "%";
        });

      // Axis
      // x-axis
      const xAxis = d3.axisBottom(xScale).tickFormat((d, i) => {
       return this.getNameMonth(i)
      }).tickSizeOuter(0);

      g.append("g")
        .attr("transform", "translate(0, " + height + ")")
        .attr("class", "graph-axis")
        .call(xAxis.scale(xScale))
        .append("text")
        .attr("x", width)
        .attr("y", -6)
        .attr("text-anchor", "end")
        .attr("font", "10px sans-serif")
        .attr("letter-spacing", "1px")
        .attr("fill", "#8997b1");

      // y-axis
      const yAxis = d3.axisLeft(yScale).ticks(9).tickSizeOuter(0)
      g.append("g")
        .attr("class", "graph-axis y-axis-tick")
        .call(yAxis.scale(yScale))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .attr("font", "10px sans-serif")
        .attr("letter-spacing", "1px")
        .attr("fill", "#8997b1");
        
      // Data line
      const line = d3
        .line()
        .x((d) => xScale(d.month))
        .y((d) => yScale(d.percent));

      // define the area
      var area = d3
        .area()
        .x((d) => xScale(d.month))
        .y0(height)
        .y1((d) => yScale(d.percent));

      const path = g
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#088dda")
        .attr("stroke-width", "2px")
        //.style("filter", "url(#shadow)")
        .attr("d", line(this.graphData));

        
      const path2 = g
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#FAFAFA")
        .attr("stroke-width", "1px")
        //.style("filter", "url(#shadow)")
        .attr("d", line(this.graphWhite));

      const path3 = g
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#44D5C7")
        .attr("stroke-width", "1px")
        //.style("filter", "url(#shadow)")
        .attr("d", line(this.graphGreen));

      g.append("path")
        .attr("class", "area")
        .attr("d", area(this.graphData))
        .attr("fill", "url(#grad)");

      // Transition
      const totalLength = path.node().getTotalLength();
      path
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength);
      path.transition().attr("stroke-dashoffset", 0);

      // Data dots
      g.selectAll("line-circle")
        .data(this.graphData)
        .enter()
        .append("circle")
        .attr("r", 4)
        .attr("fill", (d) => {
          if (d.month === 0) {
            return "none";
          } else {
            return "#088dda";
          }
        })
        .attr('class', 'circles')
        .attr("cx", (d) => xScale(d.month))
        .attr("cy", (d) => yScale(d.percent));

      // Removing y-axis 0 tick-line
      d3.selectAll(".y-axis-tick .tick line").each(function (d, i) {
        if (i === 0) {
          this.remove();
        }
      });

      var svg = d3.select("#chart1").select('svg')

      //
      var legend = svg.append("text").attr("x", width + 100).attr("y", '30%')
      legend.append('tspan').attr('fill', 'white').attr('dy', '35').attr('x', width + 110).text("Фактический вес")
      legend.append('tspan').attr('fill', 'white').attr('dy', '38').attr('x', width + 110).text("Целевой вес")
      legend.append('tspan').attr('fill', 'white').attr('dy', '35').attr('x', width + 110).text("Тренд")
      
      svg.append("circle").attr("cx",width + 90).attr("cy",'calc(30% + 1.7em)').attr("r", 6).style("fill", "#4AB3FF")
      svg.append("circle").attr("cx",width + 90).attr("cy",'calc(30% + 3.7em)').attr("r", 6).style("fill", "#41D3BF")
      svg.append("circle").attr("cx",width + 90).attr("cy",'calc(30% + 5.7em)').attr("r", 6).style("fill", "#FAFAFA")
    },
    getNameMonth(i, reverse = false) {
      var arr = [
        'янв',
        'фев',
        'март',
        'апр',
        'май',
        'июнь',
        'июль',
        'авг',
        'сент',
        'окт',
        'нояб',
        'дек'
      ]
      if(reverse == false)
      return arr[i]
      else {
        for(var j = 0; j < arr.length; j++) {
          if(arr[j] == i) return j;
        }
      }
    }
  },
}
</script>