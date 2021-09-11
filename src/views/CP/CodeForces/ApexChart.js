import React from "react";
import ReactApexChart from "react-apexcharts";
import data from "./data";
class ApexChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Rating",
					data: data,
				},
			],
			options: {
				theme: {
					mode: "dark",
				},
				colors: ["#ff0004"],

				chart: {
					id: "area-datetime",
					type: "area",
					height: 350,
					zoom: {
						autoScaleYaxis: true,
					},
				},
				annotations: {
					yaxis: [
						{
							y: 1200,
							y2: 1400,
							borderColor: "#000",
							fillColor: "#9e9e9e",
							opacity: 0.2,
							label: {
								borderColor: "#333",
								style: {
									fontSize: "10px",
									color: "#212121",
									background: "#9e9e9e",
								},
								text: "1 Stars",
							},
						},
						{
							y: 1400,
							y2: 1600,
							borderColor: "#000",
							fillColor: "#009688",
							opacity: 0.2,
							label: {
								borderColor: "#333",
								style: {
									fontSize: "10px",
									color: "#EEEEEE",
									background: "#009688",
								},
								text: "2 Stars",
							},
						},
						{
							y: 1600,
							y2: 1800,
							borderColor: "#000",
							fillColor: "#03a9f4",
							opacity: 0.2,
							label: {
								borderColor: "#333",
								style: {
									fontSize: "10px",
									color: "#EEEEEE",
									background: "#03a9f4",
								},
								text: "3 Stars",
							},
						},
						{
							y: 1800,
							y2: 2000,
							borderColor: "#000",
							fillColor: "#673ab7",
							opacity: 0.2,
							label: {
								borderColor: "#333",
								style: {
									fontSize: "10px",
									color: "#EEEEEE",
									background: "#673ab7",
								},
								text: "4 Stars",
							},
						},
						{
							y: 2000,
							y2: 2200,
							borderColor: "#000",
							fillColor: "#ffeb3b",
							opacity: 0.2,
							label: {
								borderColor: "#333",
								style: {
									fontSize: "10px",
									color: "#EEEEEE",
									background: "#ffeb3b",
								},
								text: "5 Stars",
							},
						},
						{
							y: 1955,
							strokeDashArray: 0,
							borderColor: "#d50000",
						},
					],
				},
				dataLabels: {
					enabled: true,
					textAnchor: "middle",
					distributed: false,
					offsetX: 0,
					offsetY: 0,
					style: {
						fontSize: "14px",
						fontFamily: "Helvetica, Arial, sans-serif",
						fontWeight: "bold",
						colors: undefined,
					},
				},
				markers: {
					size: 0,
					style: "hollow",
				},
				xaxis: {
					type: "datetime",
					// min: new Date("10 Oct 2019").getTime(),
					// tickAmount: 6,
					tickPlacement: "between",
				},
				tooltip: {
					x: {
						format: "dd MMM yyyy",
					},
					z: {
						title: "Event:",
						format: "string",
					},
					event: {
						show: true,
					},
				},
				fill: {
					type: "gradient",
					gradient: {
						shadeIntensity: 1,
						opacityFrom: 0.7,
						opacityTo: 0.9,
						stops: [0, 100],
					},
				},
			},

			selection: "all",
		};
	}

	render() {
		return (
			<div id="chart">
				<div id="chart-timeline">
					<ReactApexChart
						options={this.state.options}
						series={this.state.series}
						type="line"
						height={350}
					/>
				</div>
			</div>
		);
	}
}
// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);
export default ApexChart;
