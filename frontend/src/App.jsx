import { useState } from 'react';
import axios from 'axios';

function App() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    const runQuery = async () => {
        try {
            const res = await axios.post('http://localhost:5000/query', { query });
            setData(res.data);
        } catch (error) {
            alert('Error: ' + error.response?.data?.error);
        }
    };

    return (
        <div>
            <h1>Database Query Interface</h1>
            <textarea value={query} onChange={(e) => setQuery(e.target.value)} rows="4" cols="50" />
            <button onClick={runQuery}>Run Query</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;
