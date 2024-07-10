import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");


  return (
    <>
      <div className='w-full h-screen flex justify-center'
            style={{ backgroundColor: color }}>
        <nav className='fixed bottom-6'>
          <ul className='flex gap-8 bg-neutral-300 p-2 rounded-full hover:p-4 transition-all ease-in-out'>
            <li onClick={()=> {setColor("red")}} className='bg-red-600 text-white px-4 py-1 rounded-full cursor-pointer hover:-translate-y-2 transition-all'>Red</li>
            <li onClick={()=> {setColor("green")}} className='bg-green-600 px-4 py-1 rounded-full cursor-pointer hover:-translate-y-2 transition-all'>Green</li>
            <li onClick={()=> {setColor("blue")}} className='bg-blue-600 px-4 py-1 rounded-full cursor-pointer hover:-translate-y-2 transition-all'>Blue</li>
            <li onClick={()=> {setColor("olive")}} className='bg-green-300 px-4 py-1 rounded-full cursor-pointer hover:-translate-y-2 transition-all'>Olive</li>
            <li onClick={()=> {setColor("gray")}} className='bg-gray-600 px-4 py-1 rounded-full cursor-pointer hover:-translate-y-2 transition-all'>Grey</li>
            <li onClick={()=> {setColor("yellow")}} className='bg-yellow-600 px-4 py-1 rounded-full cursor-pointer hover:-translate-y-2 transition-all'>Yellow</li>
            <li onClick={()=> {setColor("pink")}} className='bg-pink-600 px-4 py-1 rounded-full cursor-pointer hover:-translate-y-2 transition-all'>Pink</li>
            <li onClick={()=> {setColor("purple")}} className='bg-purple-600 px-4 py-1 rounded-full cursor-pointer hover:-translate-y-2 transition-all'>Purple</li>
            <li onClick={()=> {setColor("lavender")}} className='bg-neutral-400 px-4 py-1 rounded-full cursor-pointer hover:-translate-y-2 transition-all'>Lavender</li>
            <li onClick={()=> {setColor("white")}} className='bg-white px-4 py-1 rounded-full cursor-pointer hover:-translate-y-2 transition-all'>White</li>
            <li onClick={()=> {setColor("black")}} className='bg-black text-white px-4 py-1 rounded-full cursor-pointer hover:-translate-y-2 transition-all'>Black</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
