import React from 'react'
import Game1 from '../Games/Figuras_Geometricas1'
import Game2 from '../Games/MemoriaAnimales'
import Game3 from '../Games/MemoriaVocal'
import Game4 from '../Games/GamesSumRes1'
import Game5 from '../Games/SopaLetras'

const Games = () => {
  return (
    <div className=' bg-white'>

    <div className="join grid grid-cols-2">
      <button className="join-item btn btn-outline">Previous page</button>
      <button className="join-item btn btn-outline">Next</button>
    </div>

     <div className="collapse collapse-plus w-15 collapse-arrow bg-white">
    <input type="radio" name="my-accordion-2" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
      Juego 1../../assets/Captura.PNG
    </div>
    <div className="collapse-content"> 
    <div className="card card-side  shadow-xl">
      <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title ">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
      <Game1></Game1>
  

    </div>
  </div>
  <div className="collapse collapse-arrow bg-white">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
      Juego 2
    </div>
    <div className="collapse-content"> 
      <Game2></Game2>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-white">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
      Juego 3
    </div>
    <div className="collapse-content"> 
      <Game3></Game3>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-white">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
      Juego 4
    </div>
    <div className="collapse-content"> 
      <Game4></Game4>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-white">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
      Juego 5
    </div>
    <div className="collapse-content"> 
      <iframe src="https://v6p9d9t4.ssl.hwcdn.net/html/5137922/index.html" title="sd" width="100%" height="500"></iframe>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-white">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
      Juego 6
    </div>
    <div className="collapse-content"> 
    
    </div>
  </div>
  </div>
  )
}

export default Games