import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Home() {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

const handelFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/room/${roomCode}`);
};


  return (
    <>
    <div className='homepage'>
<form className='form' onSubmit={handelFormSubmit}>
    <div>
        <label>Enter Room Code</label>
        <input type="text" name='roomcode' required placeholder='Enter Your Room Code' value={roomCode} onChange={(e) => setRoomCode(e.target.value)}/>
    </div>
    <button type='submit'>Enter Room</button>
</form>
    </div>
    </>
  );
}

export default Home