import React from 'react'
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Website Views 2024 (M)',
                data: [590, 490, 980, 550, 840, 630, 450],
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'Website Views 2023 (M)',
                data: [400, 300, 700, 550, 600, 500, 400],
                fill: false,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
        ],
    };
    const options = {
        maintainAspectRatio: false,
    };

    return (
        <div className='h-[300px]'>
            <Line data={data} options={options} style={{
            }} />
        </div>
    )
}

export default LineChart
