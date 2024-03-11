
import { useState } from 'react';
import './App.css';
import paraData from './paras.json';
import ListItem from './components/ListItem.js';

function App() {;

  const [inputValue, setInputValue] = useState();
  const [arr, setArr] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    if (inputValue < 0 || inputValue > paraData.length) {
      alert('You can query only upto 10 paragraphs');  
      return;
    }

    const newArr = [];
    for (let i = 0; i < inputValue; i++) {
      const obj = {
          id: paraData[i].id,
          para: paraData[i].para
      }
      newArr.push(obj);
    }
    setArr(newArr);
  }

  return (
    <section className='w-full min-h-screen py-16 px-4 bg-orange-100 flex flex-col items-center gap-8'>
      <h1 className='text-center text-3xl font-bold text-red-800 tracking-wide'>TIRED OF BORING LOREM IPSUM?</h1>
      <div className='container max-w-xl flex flex-col items-center gap-16'>

        <form className='flex items-center gap-2'>
          <label className='text-xl'>Paragraphs:</label>
          <input className='w-16 px-2 font-semibold text-lg' type='number' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
          <button type='submit' className='bg-orange-400 text-white px-4 py-1 rounded' onClick={handleClick}>GENERATE</button>
        </form>

        <ul className='flex flex-col gap-6 items-center'>
          {
            arr.map((obj) => {
              return <ListItem para={obj.para} id={obj.id} />
            })
          }
        </ul>

      </div>
    </section>
  );
}

export default App;
