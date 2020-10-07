import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import './ChartComponent.css'

export default function DoughnutChartComponent() {
    
    const color1 = 'rgba(255, 99, 132, 1)'
    const color2 = 'rgba(255, 205, 86, 1)'
    const color3 = 'rgba(54, 162, 235, 1)'
    const color4 = 'rgba(255, 159, 64, 1)'
    const color5 = 'rgba(153, 102, 255, 1)'

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            { 
                label: 'Sales for 2020 (M)',
                data: [ 3, 2, 2 ,1 , 5 ],
                borderColor: [color1, color2, color3, color4, color5],
                backgroundColor: [color1, color2, color3, color4, color5]
            }
        ]
       
    }

    const options = {
        title: {
            display: true,
            text: 'Doughnut Chart'
        }
    }

    return (
        <div className='chart'>  
              <Doughnut 
                data={data}
                options={options}
            />
            
        </div>
    )
}
