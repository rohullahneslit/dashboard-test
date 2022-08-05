import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import {faker} from '@faker-js/faker'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Overall Sales',
    },
  },
}

const labels = ['24', '25', '26', '27', '28', '29', '30']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
      borderColor: '#251FD3',
      backgroundColor: 'white',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

const Chart = () => {
  return <Line options={options} data={data} />
}

export default Chart
