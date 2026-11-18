import { useState } from 'react'
import s from './Charts.module.css'
import { Menu } from './components/menu'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

function Charts(){

const [show, setShow] = useState("")

const data =[
    {label:'JAN', Metas:100, Atingido:100 },
    {label:'FEV', Metas:100, Atingido:100 },
    {label:'MAR', Metas:100, Atingido:100 },
    {label:'ABR', Metas:100, Atingido:100 },
    {label:'MAI', Metas:100, Atingido:100 },
    {label:'JUN', Metas:100, Atingido:100 },
    {label:'JUL', Metas:100, Atingido:100 },
    {label:'AGO', Metas:100, Atingido:100 },
    {label:'SET', Metas:100, Atingido:100 },
    {label:'OUT', Metas:100, Atingido:100 },
    {label:'NOV', Metas:100, Atingido:100 },
    {label:'DEZ', Metas:150, Atingido:50 },
]
    
    return(
        <>
            <Menu/>
            <div className={s.wrapCharts}>
                <div className={s.wrapBtns}>
                    <button onClick={() => setShow("barra")}>Barra</button>
                    <button onClick={() => setShow("pizza")}>Pizza</button>
                    <button onClick={() => setShow("linha")}>Linha</button>
                </div>
                {show === "barra" && 
                <BarChart
                    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                    responsive
                    data={data}
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
                    <Bar fill='pink' dataKey="Metas" radius={[10, 10, 0, 0]} />
                    <Bar fill='red' dataKey="Atingido" radius={[10, 10, 0, 0]} />
                   
                </BarChart>}
                {show === "pizza" && <h1>gráfico de pizza</h1>}
                {show === "linha" && <h1>gráfico de linha</h1>}
            </div>
            
        </>
    )
}

export default Charts