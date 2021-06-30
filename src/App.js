import {useEffect,useState} from 'react'
import './App.css';
import CardContainer from './Components/CardContainer';
import Head from './Components/Head';
import Nav from './Components/Nav';
import Search from './Components/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [search, setSearch] = useState('')
  const [list, setList] = useState([])
  const [sort, setSort] = useState(false)

  return (
    <div className='app'>
      <Head/>
      <Router>
        <Nav/>
        {/* <Route path='' exact component={}/>
        <Route path='' component={}/> */}
      </Router>
      <Search list={list} setList={setList} search={search} setSearch={setSearch} setSort={setSort}/>
      <CardContainer list={list} setList={setList} search={search} setSearch={setSearch} sort={sort}/>
      {/* <div className='box'></div>
      <div className='box'></div> */}
    </div>
  )
}
