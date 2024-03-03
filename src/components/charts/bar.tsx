import React from 'react'
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { Chart, registerables } from 'chart.js';

const BarChart = () => {
    const vibrantColors1 = [
        'rgba(255, 69, 92, 0.9)',    // Vibrant Red
        'rgba(70, 178, 255, 0.9)',   // Sky Blue
        'rgba(255, 226, 76, 0.9)',   // Vivid Yellow
        'rgba(0, 206, 209, 0.9)',    // Cyan
        'rgba(170, 110, 255, 0.9)',  // Rich Purple
        'rgba(255, 141, 50, 0.9)',   // Bright Orange
        'rgba(50, 205, 50, 0.9)'    // Repeated Vibrant Red
    ];
    const vibrantColors2 = [
        'rgba(255, 69, 92, 0.8)',    // Vibrant Red
        'rgba(30, 144, 255, 0.8)',   // Dodger Blue
        'rgba(255, 193, 7, 0.8)',    // Gold
        'rgba(0, 139, 139, 0.8)',    // Dark Cyan
        'rgba(138, 43, 226, 0.8)',   // Blue Violet
        'rgba(255, 99, 71, 0.8)',    // Tomato
        'rgba(255, 69, 92, 0.8)'     // Repeated Vibrant Red
    ];


    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales 2024 (M)',
                data: [590, 490, 980, 550, 840, 630, 450],
                backgroundColor: vibrantColors1,
                borderColor: [
                    'rgba(255, 69, 92, 2)',    // Vibrant Red
                    'rgba(70, 178, 255, 2)',   // Sky Blue
                    'rgba(255, 226, 76, 2)',   // Vivid Yellow
                    'rgba(0, 206, 209, 2)',    // Cyan
                    'rgba(170, 110, 255, 2)',  // Rich Purple
                    'rgba(255, 141, 50, 2)',   // Bright Orange
                    'rgba(50, 205, 50, 2)'
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        scales: {
            x: {
                grid: {
                    display: false,
                    color: 'rgba(0, 0, 0, 0.1)',
                },

            },
            y: {
                beginAtZero: true,
                max: 1000,
                grid: {
                    display: true,
                },
                border: {
                    dash: [3, 3],
                    color: 'rgba(255, 99, 132, 0.8)',
                    width: 2,
                },
            },
        },
    };
    Chart.register(...registerables, CategoryScale);
    return (
        <div className='w-full'>
            <Bar data={data} options={options} className='p-2' />
        </div>
    )
}

export default BarChart
