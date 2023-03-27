import "./lineChart.css"
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

let beneficios = [72, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let cryptoData = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'price',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 0,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
       
        ],
    };
    let cryptoOptions = {//trabajan en el grafico en general
        responsive: true,
        scales : {
            // y : {
            //     min : 0
            // },
            x: {
                ticks: { color: 'rgb(255, 99, 132)'}
            }
        }
};


export default function LineCharts() {
  return (
    <div className="crypto-graf">
    <Line data={cryptoData} options={cryptoOptions}></Line>
    </div>
  )
}
