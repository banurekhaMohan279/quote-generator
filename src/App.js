import {React,useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [quote, getQuote] = useState({content:'', author:''});

  function fetchQuote(){
    fetch('https://api.quotable.io/random')
    .then(data => data.json())
    .then(res => getQuote({content: res.content, author: res.author}));
  }

  useEffect(() => {
    fetchQuote();
  },[])

  return (
    <div className="App">
      <div className="App-Quote">
       <div className = "App-Quote-Content">
        {`"${quote.content}"`}
        {`- ${quote.author}`}
       </div>
       <button className = "App-Quote-Generate" onClick= {fetchQuote}>
          Get Another Quote
       </button>
      </div>
    </div>
  );
}

export default App;
