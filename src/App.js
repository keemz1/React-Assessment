import {useEffect,useState} from 'react'
import './App.css';
import CardContainer from './Components/CardContainer';
import CardDetail from './Components/CardDetail';
import Head from './Components/Head';
import Nav from './Components/Nav';
import Search from './Components/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [search, setSearch] = useState('')
  const [list, setList] = useState([])
  const [sort, setSort] = useState(false)
  const [sortDesc, setSortDesc] = useState(false)

  const Home = () =>(
    <div>
      <Search list={list} setList={setList}
       search={search} setSearch={setSearch} 
       sort={sort} setSort={setSort} 
       setSortDesc={setSortDesc} sortDesc={sortDesc}/>
        <CardContainer list={list} setList={setList} 
        search={search} setSearch={setSearch} sort={sort}
        setSortDesc={setSortDesc} sortDesc={sortDesc}
        />
    </div>
  );

  return (
    <div className='app'>
      <Head/>
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/cardDetails' component={CardDetail}/>
        </Switch>
      </Router>
      
      {/* <div className='box'></div>
      <div className='box'></div> */}
    </div>
  )
}

export default App;
