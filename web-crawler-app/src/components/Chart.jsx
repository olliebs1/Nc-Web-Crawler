import React from 'react';
import { Pie } from 'react-chartjs-2';

const Chart = (props) => {

  const working = props.links.working.length;
  const notWorking = props.links.notWorking.length;



  const data = {
    labels: [
      'working', 'not working'
    ],
    datasets: [{
      data: [working, notWorking],
      backgroundColor: [
        '#36A2EB',
        '#FF6384',


      ],
      hoverBackgroundColor: [
        '#36A2EB',
        '#FF6384',


      ]
    }]
  };
  return (
    <div>
      <h2>Pie Example</h2>
      <Pie data={data} />
    </div>
  );
}

export default Chart




