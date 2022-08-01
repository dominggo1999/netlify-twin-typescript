import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import Hello from '~/components/Hello';
import { backendURL } from './config/backendUrl';

export const Box = styled.div`
  ${tw`
    w-full 
    h-screen 
    bg-black 
    flex  
    flex-col
    justify-center
    items-center
    text-white
    text-2xl
  `}
`;

const App = () => {
  const [message, setMessage] = useState('');

  const callBackend = async (): Promise<void> => {
    const res = await fetch(backendURL);
    const json = await res.json();
    setMessage(json.message);
  };

  useEffect(() => {
    callBackend();
  }, []);

  console.log('test');

  return (
    <Box>
      <Hello />
      <p>{message}</p>
    </Box>
  );
};

export default App;
