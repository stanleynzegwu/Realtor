
import { LineChart, Line, XAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';

import './Chart.scss'

const Chart = ({title,data,grid,dataKey}) => {
    
      
    return ( 
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width='100%' aspect={4/1} stroke='#5550bd'>
                    <LineChart data={data}>
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="3 3" />}
                    <Tooltip />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" activeDot={{ r: 8 }} />
                    <XAxis dataKey="name" />
                </LineChart>
            </ResponsiveContainer>
        </div>
     );
}
 
export default Chart;