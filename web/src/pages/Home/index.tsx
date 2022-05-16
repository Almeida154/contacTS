import React, { useEffect, useState } from 'react';

interface dataProps {
  message: string;
}

const Home = () => {
  const [data, setData] = useState({} as dataProps);

  useEffect(() => {
    (async () => {
      var req = await fetch('http://localhost:3333/contacts');
      var res = await req.json();
      setData(res);
    })();
  }, []);

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
};

export default Home;
