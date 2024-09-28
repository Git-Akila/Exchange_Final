import React,{useState,useEffect} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
function Chart1({graph}) {
    const messageData=graph?.message || [];
    const years=messageData.map((years)=>years.years);
    const count=messageData.map((e)=>e.count);
    const month=messageData.map((e)=>e.month);
    const options = {
        title: {
          text: "Yearly Profit"
        },
        xAxis: {
          categories: years, 
          title: {
            text: "Years"
          }
        },
        yAxis: {
          title: {
            text: "Profit (in USD)"
          }
        },
        series: [
          {
            name: "Profit",
            data: count // Dynamic profits from API
          }
        ]
      };
  return (<>
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div></>
  )
}

export default Chart1