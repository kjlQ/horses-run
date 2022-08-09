import React , {useEffect} from "react";
import './App.css';
import {io} from "socket.io-client"
import {useDispatch, useSelector} from "react-redux";
import {setHorses} from "./redux/slices/horseSlice";
import Horse from "./components/Horse";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const socket = io.connect('http://localhost:3002')
    socket.emit('start');
    socket.on('ticker',(e)=>dispatch(setHorses(e)))
  },[])
  const {horses} = useSelector(state=>state.handler)
  return (
    <div className="App">
      {horses.map(item=><Horse {...item} />)}
    </div>
  );
}

export default App;
