import React from "react";
import ReactApexChart from "react-apexcharts";
import { data } from "./data";
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name:"rating",
          data: data,
        },
      ],
      options: {
        theme: {
          mode: "dark",
        },
        colors: ["#00ADB5"],

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
                text: "1 start",
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
                text: "2 start",
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
                text: "3 start",
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
                text: "4 start",
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
                // text: "5 start",
              },
            },
            {
              y: 1955,
              strokeDashArray: 0,
              borderColor: '#d50000',
              
            }
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
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
          event: {
            show: true,
          },
        },
        // fill: {
        //   type: "gradient",
        //   gradient: {
        //     shadeIntensity: 1,
        //     opacityFrom: 0.7,
        //     opacityTo: 0.9,
        //     stops: [0, 100],
        //   },
        // },
      },

      selection: "all",
    };
  }

  updateData(timeline) {
    this.setState({
      selection: timeline,
    });
    let today = new Date();

    let date =
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    console.log(date);
    var dt = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
    var dtm = new Date(dt.setMonth(dt.getMonth() - 1));
    dt.setMonth(dt.getMonth() + 1);
    var dt6 = new Date(dt.setMonth(dt.getMonth() - 6));
    dt.setMonth(dt.getMonth() + 6);
    var dt1y = new Date(dt.setFullYear(dt.getFullYear() - 1));
    dt.setFullYear(dt.getFullYear() + 1);
    console.log(dt1y);
    console.log(dt);
    switch (timeline) {
      case "one_month":
        ApexCharts.exec("area-datetime", "zoomX", dtm.getTime(), dt.getTime());
        break;
      case "six_months":
        ApexCharts.exec("area-datetime", "zoomX", dt6.getTime(), dt.getTime());
        break;
      case "one_year":
        ApexCharts.exec("area-datetime", "zoomX", dt1y.getTime(), dt.getTime());
        console.log("dt1y");
        console.log(dt1y);
        console.log(dt);
        break;

      case "all":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("10 Oct 2019").getTime(),
          dt.getTime()
        );
        break;
      default:
    }
  }

  render() {
    return (
      <div id="chart">
        <div class="toolbar">
          <button
            id="one_month"
            onClick={() => this.updateData("one_month")}
            className={this.state.selection === "one_month" ? "active" : ""}
          >
            1M
          </button>
          &nbsp;
          <button
            id="six_months"
            onClick={() => this.updateData("six_months")}
            className={this.state.selection === "six_months" ? "active" : ""}
          >
            6M
          </button>
          &nbsp;
          <button
            id="one_year"
            onClick={() => this.updateData("one_year")}
            className={this.state.selection === "one_year" ? "active" : ""}
          >
            1Y
          </button>
          &nbsp;
          <button
            id="all"
            onClick={() => this.updateData("all")}
            className={this.state.selection === "all" ? "active" : ""}
          >
            ALL
          </button>
        </div>

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
