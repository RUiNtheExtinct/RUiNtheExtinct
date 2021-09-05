import React from "react";
import ReactApexChart from "react-apexcharts";
import { data } from "./data";
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "solved",
          data: data,
        },
      ],
      options: {
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 2,
          dashArray: 0,
        },
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
          tickAmount: 6,
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy HH:mm",
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
          new Date("25 Aug 2020").getTime(),
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
            type="area"
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
