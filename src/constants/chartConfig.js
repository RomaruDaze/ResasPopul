import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const getChartData = (data) => ({
    labels: data.map((item) => item.year),
    datasets: [
        {
            label: "人口数",
            data: data.map((item) => item.value),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
        },
    ],
});

export const chartOptions = {
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                display: true,
                color: "#f1f1f1"

            },
            ticks: {
                color: "#f1f1f1",
            },
            title: {
                display: true,
                text: '人数',
                color: "#f1f1f1",
            }
        },
        x: {
            ticks: {
                color: "#f1f1f1",
            },
            title: {
                display: true,
                text: '年',
                color: "#f1f1f1",
            }
        }
    },
    plugins: {
        legend: {
            display: true,
            labels: {
                color: "#f1f1f1",
            }
        },
        tooltip: {
            enabled: true,
            bodyColor: "#f1f1f1",
        },
    },
};