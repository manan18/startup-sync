import { CategoryScale, Chart, registerables } from 'chart.js';
import React from 'react'
import { Line } from 'react-chartjs-2';

const ProductChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Purchases 2024 (M)',
                data: [700, 550, 850, 600, 920, 700, 500],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.4,
            },
            {
                label: 'Sales 2024 (M)',
                data: [450, 350, 800, 600, 650, 550, 450],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.4,
            },
        ],

    };
    const options = {
        maintainAspectRatio: false,
    };
    Chart.register(CategoryScale, ...registerables)

    return (
        <div className='h-[300px]'>
            <Line data={data} options={options} style={{
            }} />
        </div>
    )
}

export default ProductChart;
