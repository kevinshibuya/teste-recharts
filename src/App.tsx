import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Legend, Bar, PieChart, Pie } from 'recharts';

import { api } from './services/api';

import './App.css';

interface RandomNumbers {
  'id': string;
  'number': number;
  'positive': number;
  'negative': number;
  'decimal': number;
  'normal': number;
}

function App() {
  const [randomNumbers, setRandomNumbers] = useState<RandomNumbers[]>([]);

  useEffect(() => {
    async function loadRandomNumber() {
      api.get('number/random_number?size=5')
        .then(res => setRandomNumbers(res.data))
    }

    loadRandomNumber();
  }, []);

  return (
    <div className="App">
      {/* <div className="sidemenu">
        <div className="head">
          <p className="title">Empresa teste</p>
        </div>
        <div className="body">
          <a href="#">Dashboard</a>
          <a href="#">Configs</a>
          <a href="#">Exit</a>
        </div>
      </div> */}
      {/* <div className="dashboard body"> */}
        <LineChart width={600} height={300} data={randomNumbers}>
          <Line type="monotone" dataKey="positive" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
        </LineChart>
        <BarChart width={600} height={300} data={randomNumbers}>
          <XAxis dataKey="id" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="positive" fill="#8884d8" barSize={30} />
        </BarChart>
        <PieChart width={730} height={250}>
          <Pie data={randomNumbers} dataKey="normal" nameKey="id" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie data={randomNumbers} dataKey="decimal" nameKey="id" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
      {/* </div> */}
    </div>
  );
}

export default App;
