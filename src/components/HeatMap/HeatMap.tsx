import React, { RefObject } from 'react';

import * as d3 from 'd3';
import { useD3 } from '../../customHooks/useD3';
import { CommitWeeklyStatistic } from '../../utils/types';
import { format } from 'date-fns';

export type HeatMapData = {
    group: string,
    value: string,
    data: number,
}[];

const mockData = [
    {
        group: '01/01',
        value: '1',
        data: 40,
    },
    {
        group: '01/01',
        value: '2',
        data: 10,
    },
    {
        group: '01/03',
        value: '1',
        data: 100,
    },
    {
        group: '01/03',
        value: '2',
        data: 50,
    },
];

export interface HeatMapProps {
    data?: HeatMapData,
};
const HeatMap = ({ data = mockData }: HeatMapProps) => {
    const svgRef = useD3((svg: d3.Selection<Element | null, any, null, undefined>) => {
        const height = 200;
        const width = 500;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
        let myGroups = d3.map(data, (d) => d.group);
        let myVars = d3.map(data, (d) => d.value);

        // Build X scales and axis:
        let x = d3.scaleBand()
            .range([0, width])
            .domain(myGroups)
            .padding(0.05);
        svg.append("g")
            .style("font-size", 15)
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickSize(0))
            .select(".domain").remove()

        // Build Y scales and axis:
        let y = d3.scaleBand()
            .range([height, 0])
            .domain(myVars)
            .padding(0.05);
        svg.append("g")
            .style("font-size", 15)
            .call(d3.axisLeft(y).tickSize(0))
            .select(".domain").remove()

        // Build color scale
        let myColor = d3.scaleSequential()
            .interpolator(d3.interpolateInferno)
            .domain([1, 100])

        // create a tooltip
        let tooltip = d3.select("#my_dataviz")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")

        // Three function that change the tooltip when user hover / move / leave a cell
        let mouseover = function (this: any, d: any) {
            tooltip
                .style("opacity", 1)
            d3.select(this)
                .style("stroke", "black")
                .style("opacity", 1)
        }
        let mousemove = function (this: any, d: { value: string; }) {
            tooltip
                .html("The exact value of<br>this cell is: " + d.value)
            // .style("left", (d3.mouse(this)[0] + 70) + "px")
            // .style("top", (d3.mouse(this)[1]) + "px")
        }
        let mouseleave = function (this: any, d: any) {
            tooltip
                .style("opacity", 0)
            d3.select(this)
                .style("stroke", "none")
                .style("opacity", 0.8)
        }

        // add the squares
        svg.selectAll()
            .data(data, (d) => d?.data || '')
            .enter()
            .append("rect")
            .attr("x", (d) => {
                return x(d.group) || null
            })
            .attr("y", (d) => y(d.value) || null)
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .style("fill", function (d) { return myColor(d.data) })
            .style("stroke-width", 4)
            .style("stroke", "none")
            .style("opacity", 0.8)
        // .on("mouseover", mouseover)
        // .on("mousemove", mousemove)
        // .on("mouseleave", mouseleave)

        // Add title to graph
        svg.append("text")
            .attr("x", 0)
            .attr("y", -50)
            .attr("text-anchor", "left")
            .style("font-size", "22px")
            .style("fill", "white")
            .text("Commits Heatmap");

        // // Add subtitle to graph
        // svg.append("text")
        //     .attr("x", 0)
        //     .attr("y", -20)
        //     .attr("text-anchor", "left")
        //     .style("font-size", "14px")
        //     .style("fill", "white")
        //     .style("max-width", 400)
        //     .text("A short description of the take-away message of this chart.");
    }, [data]);

    return (
        <svg
            ref={svgRef as RefObject<SVGSVGElement>}
            style={{
                overflow: 'visible',
                paddingTop: '5em',
                height: 500,
                width: "100%",
                marginRight: "0px",
                marginLeft: "0px",
            }}
        >
            <g className="plot-area" />
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
    );
};

export default HeatMap;