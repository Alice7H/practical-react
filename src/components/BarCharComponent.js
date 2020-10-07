import React from 'react'
import { Bar } from 'react-chartjs-2'
import './ChartComponent.css'

export default function LineChartComponent() {
    
    const color1 = 'rgba(255, 99, 132, 1)'
    const color2 = 'rgba(54, 162, 235, 1)'

    const dataBar = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            { 
                label: 'Sales for 2020 (M)',
                data: [ 3, 2, 2 ,1 , 5 ],
                borderColor: [color1, color1, color1, color1, color1],
                backgroundColor: [color1, color1, color1, color1, color1]
            },
            {
                label: 'Sales for 2019 (M)',
                data: [1, 3, 2, 2, 3],
                borderColor: [color2, color2, color2, color2, color2],
                backgroundColor: [color2, color2, color2, color2, color2]
            }
        ]
       
    }

    const optionsBar = {
        title: {
            display: true,
            text: 'Bar Chart'
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
              <Bar 
                data={dataBar}
                options={optionsBar}
            />
            
        </div>
    )
}
