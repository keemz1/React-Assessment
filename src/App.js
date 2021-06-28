import {useEffect,useState} from 'react'
import './App.css';
import CardContainer from './Components/CardContainer';
import Head from './Components/Head';
import Search from './Components/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  

  return (
    <div className='app'>
      <Head/>
      <Search/>
      <CardContainer/>
      {/* <div className='box'></div>
      <div className='box'></div> */}
    </div>
  )
}
