import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp

function App() {

  useEffect(() =>{
   tg.ready()
  }, [])


const OnClose = () =>{
  tg.close();
}

  return (
   <div>
    work
     <button onClick={OnClose}>Закрыть</button>
   </div>
  );
}

export default App;
