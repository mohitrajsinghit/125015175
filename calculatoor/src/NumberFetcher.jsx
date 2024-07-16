import React, { useEffect, useState } from 'react';

const NumberFetcher = () => {

    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const[id ,setId] = useState("");

    useEffect(()=>{
        const fetchNumbers = async (id) => {
            try {
                const response = await fetch(`http://20.244.56.144/test/${id}`, { method: 'GET' });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                setError('Failed to fetch numbers');
                setData(null);
            }
        }

        fetchNumbers();
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchNumbers(id);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Number ID (p, f, e, r):
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => {
                            e.preventDefault();
                            
                        }}
                    />
                </label>
                <button type="submit"
                    
                >Fetch Numbers</button>
            </form>
            {error && <p>{error}</p>}
            {data && (
                <div>
                    <h2>Results</h2>
                    <p>Previous State: {JSON.stringify(data.windowPrevState)}</p>
                    <p>Current State: {JSON.stringify(data.windowCurrState)}</p>
                    <p>Fetched Numbers: {JSON.stringify(data.numbers)}</p>
                    <p>Average: {data.avg}</p>
                </div>
            )}
        </div>
    );
};

export default NumberFetcher;
