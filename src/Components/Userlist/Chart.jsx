import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {Link} from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
//npm install highcharts highcharts-react-official

const Chart = ({graph}) => {
  // console.log("DATAAAAA"+JSON.stringify(data,null,2));
  // console.log("DAAAATAAAAAA"+data)
  const messageData = graph?.message || [];
  const count=messageData.count || [];
  const year=messageData.year;
  const month=messageData.month;
  const processData = (data) => {
    return data.map(item => [item.month, item.count]);
  }
  
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Registered User",
      align: "left",
    },
    subtitle: {
      text: "According to the Email Registration",
      align: "left",
    },
    xAxis: {
      title: {
        enabled: true,
        text: "Year",
      },
      categories: messageData.map(item => item.year), 
      labels: {
        format: "{value}",
      },
      accessibility: {
        rangeDescription: "Range: Jan to Dec.",
      },
      maxPadding: 0.05,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: "Month",
      },
      labels: {
        format: "{value}",
      },
      accessibility: {
        rangeDescription: "Range: 0 to max count.",
      },
      lineWidth: 2,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "{point.x} : {point.y}",
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Total Users",
        data: processData(messageData),
      },
    ],
  };
  const options1 = {
    chart: {
      type: "spline",
      inverted: true,
      responsive: "standard", 
    },
    title: {
      text: "Email Verification",
      align: "left",
    },
    subtitle: {
      text: "According to the Email Registration",
      align: "left",
    },
    xAxis: {
      reversed: false,
      title: {
        enabled: true,
        text: "Users",
      },
      labels: {
        format: "{value} ",
      },
      accessibility: {
        rangeDescription: "Range: 50 to 1000.",
      },
      maxPadding: 0.05,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: "Year",
      },
      labels: {
        format: "{value}",
      },
      accessibility: {
        rangeDescription: "Range: 2015 to 2024.",
      },
      lineWidth: 2,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "{point.x} : {point.y}",
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Total Users",
        data: [
          [0, 15],
          [10, -50],
          [20, -56.5],
          [30, -46.5],
          [40, -22.1],
          [50, -2.5],
          [60, -27.7],
          [70, -55.7],
          [80, -76.5],
        ],
      },
    ],
  };

  return (<>
  <div className="text-center mx-auto   container   ">
    {/* <Link to="/"><button className="mx-20 my-20 flex justify-start gap-1 items-center bg-slate-20 hover:shadow-gray shadow-black p-2 hover:shadow-xl shadow-sm "> <FaArrowLeft /> Back </button></Link> */}
    {/* <div className="mt-10  mx-auto container  grid xs:grid-cols-2  grid-cols-1 md:grid-cols-2 gap-2 bg-light-white"> */}
      {/* <div className="">
        <HighchartsReact highcharts={Highcharts} options={options1} />
      </div> */}
      <div className=" ml-10 mr-10 bg-blue-50 p-14">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div></>
  );
};

export default Chart;
