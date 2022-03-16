import {React,useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

//Not using useDataApi here coz click event for same url needs fetech call which wouldnt work if abstracted to useEffect
function App() {
  const [quote, getQuote] = useState({content:'', author:''});
  const [isLoading, setisLoading] = useState(false);

  function fetchQuote(){
    setisLoading(true);
    fetch('https://api.quotable.io/random')
    .then(data => data.json())
    .then(res => {
      setisLoading(false); getQuote({content: res.content, author: res.author})
    });
  }

  useEffect(() => {
    fetchQuote();
  },[])

  return (
    <div className="App">
      <div className="App-Quote">
       <div className = "App-Quote-Content">
            {isLoading ? (
              <div>Loading ...</div>
            ) : (
              <div>
                {`"${quote.content}"`}
                {`- ${quote.author}`}
             </div>
           )}
       </div>
       <button className = "App-Quote-Generate" onClick= {fetchQuote}>
          Get Another Quote
       </button>
      </div>
    </div>
  );
}

export default App;
