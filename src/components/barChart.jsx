import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import barDados from '../mock/barDados.json'

export const GBarra = () => {

    return (
        <BarChart
            style={{ width: '100%', maxWidth: '1200px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={barDados}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <CartesianGrid />
            <XAxis dataKey="label" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar fill='orange' dataKey="Meta" radius={[10, 10, 0, 0]} />
            <Bar fill='blue' dataKey="Atingido" radius={[10, 10, 0, 0]} />
        </BarChart>
    )
}