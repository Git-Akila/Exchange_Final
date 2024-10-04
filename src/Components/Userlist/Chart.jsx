import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ graph }) => {
  
  const messageData = graph || [];

  // Standardize months (e.g., convert 'feb' to a numeric month like 2)
  const processData = (data) => {
    const monthMapping = {
      jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
      jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
    };

    return data.map((item) => {
      let monthValue = item.month;
      if (typeof monthValue === "string") {
        monthValue = monthMapping[monthValue.toLowerCase()] || monthValue;
      }
      return {
        year: item.year,
        month: monthValue,
        count: item.count,
      };
    });
  };

const processedData1=processData(messageData);
// console.log("ppp"+processedData1)
  // const processedData = processData(messageData.length ? messageData : [
  //   { year: 2024, month: 1, count: 10 },
  //   { year: 2024, month: 2, count: 15 },
  //   { year: 2024, month: 3, count: 5 },
  // ]);

  const options = {
    chart: {
      zoomType: 'xy',
    },
    title: {
      text: 'Registered Users Over Time',
    },
    xAxis: {
      categories: processedData1.map((item) => `${item.month}/${item.year}`),
      crosshair: true,
    },
    yAxis: [
      {
        // Primary yAxis
        title: {
          text: 'Number of Users',
        },
      },
    ],
    tooltip: {
      shared: true,
    },
    series: [
      {
        type: 'column',
        name: 'Registered Users',
        data: processedData1.map((item) => item.count),
        tooltip: {
          valueSuffix: ' users',
        },
        color: '#7cb5ec',
      },
      {
        type: 'spline',
        name: 'Trend Line',
        data: processedData1.map((item) => item.count),
        tooltip: {
          valueSuffix: ' users',
        },
        color: '#f7a35c',
        marker: {
          lineWidth: 2,
          lineColor: '#f7a35c',
          fillColor: 'white',
        },
      },
    ],
  };

  return (
    <div className="ml-10 mr-10 bg-blue-50 p-14">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
