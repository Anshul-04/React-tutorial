import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {  
  // Calculate the maximum value from the data points and returning an array of values
  const dataPointsValues = props.dataPoints.map( dataPoint => dataPoint.value);
  // This is the maximum value of the data points. This is used to calculate the height of the chart bars
  const totalMaximum = Math.max(...dataPointsValues);

  return (
      <div className='chart'>
        {props.dataPoints.map((dataPoint)=>(
          <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            
          />
        ))}
      </div>
  )
}

export default Chart