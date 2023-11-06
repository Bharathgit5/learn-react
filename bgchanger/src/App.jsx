import { useState } from 'react'


function App() {
  const [color, setColor] = useState("red")

  return (
    <>
  <div className='w-full h-screen duration-200'
  style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center
    bottom-10 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center 
      gap-3 shadow-lg bg-white w-full py-5 rounded-3xl'>
       <button onClick={() => setColor('orange')}
        className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:'orange'}}>orange</button>
       <button onClick={() => setColor('green')} 
       className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:'green'}}>green</button> 
       <button onClick={() => setColor('red')}
       className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:'red'}}>red</button> 
       <button onClick={() => setColor('pink')} 
       className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:'pink'}}>pink</button> 
       <button onClick={() => setColor('white')} 
       className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:'white'}}>white</button> 
       <button onClick={() => setColor('black')} 
       className='outline-none px-4 py-2 rounded-full' style={{backgroundColor:'black', color:'white'}}>black</button>  
      </div>
    </div>
  </div>

    </>
  )
}

export default App
