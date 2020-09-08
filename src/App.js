import React,{useState} from 'react';
import './App.css';

function App() {

const [value,setValue]= useState("cars")
const[results,setResults]= useState([])
// 8vWwx8PiqhV9-tHJicVSZNssxYFgi0ZcYTyFRqOBxCk
const fetchImages=()=>{
  fetch(`http://api.unsplash.com/search/photos?client_id=8vWwx8PiqhV9-tHJicVSZNssxYFgi0ZcYTyFRqOBxCk&query=${value}&orientation=squarish&per_page=30`)
  .then(res=>res.json())
  .then(data=>{
setResults(data.results)
  })
}

  return (
    <div className="App">
      
      <div className="mydiv">
        <span className="head">Image<text>Splash</text></span>
        <div className="inputsearch">
        <span className="tail">Search an image </span>
        <input className="searchInput" type="text"  value={value} onChange={(e)=>setValue(e.target.value)} />
        <button onClick={()=>fetchImages()} className="find">Find</button>
        </div>
      </div>
      <div className="cat">
  <h1>Category  &#10159;  <text>{value}</text></h1>
     </div>

   <div className="gallery">
  
{
  results.map((item)=>{
    return <img className="item" key={item.id} src={item.urls.regular}/>
  })
}
   </div>


    </div>
  );
}

export default App;
