import React, { useState, useEffect, useRef } from "react";
import "../styles/TopGenres.scss"
import Chart from "chart.js/auto"
import ChartDataLabels from 'chartjs-plugin-datalabels'

const TopGenres = ({data}) => {
    const [items, setItems] = useState(data.top_genres_short);
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const fourWeek = () => {
        setItems(data.top_genres_short);
    };

    const fourMonth = () => {
        setItems(data.top_genres_medium);
    };

    const allTime = () => {
        setItems(data.top_genres_long);
    };

    //using chartjs to create genre graphs
    //function to render chart
    const renderChart = () => {
        if(chartInstance.current) {
            chartInstance.current.destroy(); //destroy exisiting chart if any
        }

        const ctx = chartRef.current.getContext("2d");
        const labels = items.slice(0, 5).map(((item, index) => `${index + 1}. ${item[0].charAt(0).toUpperCase() + item[0].slice(1)}`));
        const genreCounts = items.slice(0, 5).map((item => item[1]));

        
        //section for various options (refer to documentation)
        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Top Genres",
                        data: genreCounts,
                        backgroundColor: "rgba(75, 192, 192, 0.6)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    datalabels: {
                        color: '#ffffff',
                        padding: 30,
                        font: {
                            weight: "bold",
                            size: 16,
                        },
                        formatter: (value, context) => {
                            return context.chart.data.labels[context.dataIndex]
                        },
                        anchor: "start",
                        align: "end",
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                        categoryPercentage: 0.1,
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                        barPercentage: 0.1,
                    },
                },
                interaction: {
                    mode: null,  //disable hover effects
                },
            },
            plugins: [ChartDataLabels],
        });
    }

    //render chart w/ useEffect
    useEffect (() => {
        renderChart();
        //cleanup function to destroy the chart on component unmount or re-render
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };

    }, [items])


    return (
        <div className = "wrapper">

            <div className = "headerText">
                Top 5 Genres
            </div>

            <div className="buttonContainer">
                <button onClick={fourWeek}>Four Weeks</button>
                <button onClick={fourMonth}>Four Months</button>
                <button onClick={allTime}>All time</button>
            </div>
            <div className="canvasContainer">
                <canvas className="graphCanvas" ref={chartRef}/>
            </div>
        </div>
    )
}

export default TopGenres;