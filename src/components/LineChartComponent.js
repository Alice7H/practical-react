import React from 'react'
import { Line } from 'react-chartjs-2'
import './ChartComponent.css'

export default function LineChartComponent() {
    
    const color1 = 'rgba(255, 99, 132, 0.5)'
    const color2 = 'rgba(54, 162, 235, 0.5)'

    const dataLine = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            { 
                label: 'Sales for 2020 (M)',
                data: [ 3, 2, 2 ,1 , 5 ],
                borderColor: [color1],
                backgroundColor: [color1],
                pointBackgroundColor: color1,
                pointBorderColor: color1,
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 2, 2, 3],
                borderColor: [color2],
                backgroundColor: [color2],
                pointBackgroundColor: color2,
                pointBorderColor: color2,
            }
        ]
       
    }

    const optionsLine = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }
    }


    return (
        <div className='chart'>  
            <Line 
                data={dataLine}
               options={optionsLine}
             />
        </div>
    )
}
