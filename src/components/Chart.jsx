import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
    {
        name: 'February',
        Total: 2000,
    },
    {
        name: 'Jenuary',
        Total: 1200,
    },
    {
        name: 'March',
        Total: 2000,
    },
    {
        name: 'Abril',
        Total: 2780,
    },
    {
        name: 'May',
        Total: 1890,

    },

];

function Chart({ h }) {
    return (
        <div className={`w-full ${h} mb-5`}>
            <h2 className={`text-tx mb-3`}>Last 6 Months (Revenue)</h2>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>

                    </defs>
                    <XAxis dataKey="name" stroke='gray' />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#Total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart