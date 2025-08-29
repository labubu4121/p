// pages/index.tsx
import { useEffect, useState } from 'react';

const Home = () => {
  const [serverInfo, setServerInfo] = useState({
    cpuCores: 0,
    totalMemory: 0,
    freeMemory: 0,
  });

  useEffect(() => {
    const fetchServerInfo = async () => {
      const res = await fetch('/api/server-info');
      const data = await res.json();
      setServerInfo(data);
    };

    fetchServerInfo();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Server Information</h1>
      <p><strong>CPU Cores:</strong> {serverInfo.cpuCores}</p>
      <p><strong>Total Memory:</strong> {serverInfo.totalMemory} MB</p>
      <p><strong>Free Memory:</strong> {serverInfo.freeMemory} MB</p>
    </div>
  );
};

export default Home;
