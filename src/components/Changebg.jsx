import React from 'react'

function Changebg({setColor}) {
  return (
    <>
    <div className="w-auto h-screen flex justify-center">
        <div className="fixed bottom-6 h-12 rounded-3xl flex flex-wrap gap-8 justify-center p-2 bg-white text-white">
          <button className=" rounded-2xl p-1 bg-red-600" onClick={()=> {setColor('red')}}>Red</button>
          <button className=" rounded-2xl p-1  bg-green-600" onClick={()=> {setColor('green')}}>Green</button>
          <button className=" rounded-2xl p-1 bg-blue-600" onClick={()=> {setColor('blue')}}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default Changebg