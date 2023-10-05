import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap'
import {useEffect, useState} from 'react'
import { req } from './request/req';
import { Card } from './components/Card';
import { Fav } from './components/Fav';

function App() {
  const[query,setquery] = useState("")
  const[data,setdata] = useState(null)
  const[page,setpage] = useState(true)
  
  const handleSubmit = async()=>{
    const response = await req(query)
    console.log(response);
    if(response.Response=="True")
    {
      console.log(response.Search);
      setdata(response.Search)
    }
  }

  return (
    <>
   
    <div className="text-center mt-5">
        <button className="btn btn-primary mx-auto " onClick={()=>setpage(!page)}>{page?"Show favorite":"Search Movies"}</button>
    </div>
       {page?(<><div className="container mt-5">
        <h1 className="mb-4">Movie Search</h1>
       
        <div className="input-group mb-3">
            <input type="text" id="search-input" className="form-control" value={query} onChange={(e)=>setquery(e.target.value)} placeholder="Enter atleast 4 letters" />
            <div className="input-group-append">
                <button id="search-button" onClick={()=>handleSubmit()} className="btn btn-primary" type="button">Search</button>
            </div>
        </div>

       
        <div id="search-results" className="mt-4">
        </div>
    </div>
    {
      data?.map((ele,i)=>{
        return(<Card key={i} posterUrl={ele.Poster} title={ele.Title} year={ele.Year} type={ele.Type} imdbid={ele.imdbID}/>)
      })
    }
    </>):(<Fav />)}
    </>
  );
}

export default App;
