import React, { useState, useEffect, useRef } from 'react';
import aciertoSound from '../../assets/sonidos/010564339_prev.mp3'; // Reemplaza con la ruta correcta a tu archivo de sonido de acierto
import errorSound from '../../assets/sonidos/megaman-x-error.mp3'; // Reemplaza con la ruta correcta a tu archivo de sonido de error
import ganarSound from '../../assets/sonidos/donkey-kong.mp3'; // Reemplaza con la ruta correcta a tu archivo de sonido de ganar

function Figuras1() {
  const shapes = [
    { id: 1, color: 'red', shapeClass: 'Square', style: { width: '64px', height: '64px', margin: '2px' } },
    { id: 2, color: 'blue', shapeClass: 'Circle', style: { width: '64px', height: '64px', borderRadius: '50%', margin: '2px' } },
    { id: 3, color: 'green', shapeClass: 'Triangle', style: { width: '0', height: '0', borderTop: '32px solid transparent', borderBottom: '32px solid transparent', borderRight: '32px solid green', margin: '2px' } },
    { id: 4, color: 'blue', shapeClass: 'Rectangle', style: { width: '96px', height: '64px', margin: '2px' } },
    { id: 5, color: 'green', shapeClass: 'Square', style: { width: '64px', height: '64px', margin: '2px' } },
    { id: 6, color: 'red', shapeClass: 'Circle', style: { width: '64px', height: '64px', borderRadius: '50%', margin: '2px' } },
    { id: 7, color: 'pink', shapeClass: 'Triangle', style: { width: '0', height: '0', borderTop: '32px solid transparent', borderBottom: '32px solid transparent', borderRight: '32px solid pink', margin: '2px' } },
    { id: 8, color: 'red', shapeClass: 'Rectangle', style: { width: '96px', height: '64px', margin: '2px' } },
    // ... (otros objetos de figura)
  ];

  const gridSize = 3;
  const [selectedShape, setSelectedShape] = useState(null);
  const [gridShapes, setGridShapes] = useState(Array(gridSize).fill(null).map(() => Array(gridSize).fill(null)));
  const [availableShapes, setAvailableShapes] = useState([...shapes]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const aciertoSoundEffect = useRef(new Audio(aciertoSound));
  const errorSoundEffect = useRef(new Audio(errorSound));
  const ganarSoundEffect = useRef(new Audio(ganarSound));

  useEffect(() => {
    if (timer > 0 && !gameOver) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0 && !gameOver) {
      setGameOver(true);
      if (score === shapes.length) {
        setShowCongrats(true);
        ganarSoundEffect.current.play(); // Reproduce el sonido de ganar
      }
    }
  }, [timer, gameOver, score, shapes.length]);

  const handleShapeDragStart = (event, shape) => {
    if (!gameOver || showCongrats) {
      event.dataTransfer.setData('shape', JSON.stringify(shape));
    }
  };

  const handleShapeDragOver = (event) => {
    if (!gameOver || showCongrats) {
      event.preventDefault();
    }
  };

  const handleShapeDrop = (event, rowIndex, columnIndex) => {
    if (!gameOver || showCongrats) {
      event.preventDefault();
      const droppedShape = JSON.parse(event.dataTransfer.getData('shape'));
      const expectedShapeClass = shapes[rowIndex * gridSize + columnIndex].shapeClass;

      if (droppedShape.color === shapes[rowIndex * gridSize + columnIndex].color && droppedShape.shapeClass === expectedShapeClass) {
        const newGridShapes = [...gridShapes];
        newGridShapes[rowIndex][columnIndex] = droppedShape;
        setGridShapes(newGridShapes);

        const newAvailableShapes = availableShapes.filter((shape) => shape.id !== droppedShape.id);
        setAvailableShapes(newAvailableShapes);

        setScore(score + 1);

        if (score + 1 === shapes.length) {
          setGameOver(true);
          setShowCongrats(true);
          ganarSoundEffect.current.play(); // Reproduce el sonido de ganar
        } else {
          aciertoSoundEffect.current.play(); // Reproduce el sonido de acierto
        }
      } else {
        alert('Esa no es la figura correcta.');
        errorSoundEffect.current.play(); // Reproduce el sonido de error
      }
    }
  };

  const handleCongratsClose = () => {
    setGridShapes(Array(gridSize).fill(null).map(() => Array(gridSize).fill(null)));
    setAvailableShapes([...shapes]);
    setScore(0);
    setTimer(60);
    setGameOver(false);
    setShowCongrats(false);
    ganarSoundEffect.current.pause(); // Detiene el sonido de ganar al hacer clic en "Continuar"
  };

  return (
    <section className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-md mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6">Juego de Figuras Geométricas</h1>
        <div className="grid grid-cols-4 gap-2" style={{ border: '5px solid #ff0000' }}>
          {shapes.map((shape, index) => (
            <div
              key={shape.id}
              className={`border-4 border-${shape.color}-500`}
              style={{
                ...shape.style,
                margin: '25px',
              }}
              onDragOver={handleShapeDragOver}
              onDrop={(e) => handleShapeDrop(e, Math.floor(index / gridSize), index % gridSize)}
            >
              {gridShapes[Math.floor(index / gridSize)][index % gridSize] ? (
                <div
                  className={`w-full h-full bg-${shape.color}-500`}
                  style={{
                    ...gridShapes[Math.floor(index / gridSize)][index % gridSize].style,
                    margin: '0',
                  }}
                  draggable
                  onDragStart={(e) => handleShapeDragStart(e, shape)}
                ></div>
              ) : (
                <div
                  className={`w-full h-full`}
                  draggable
                  onDragStart={(e) => handleShapeDragStart(e, shape)}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <p className="text-lg">Arrastra las figuras del mismo color y tipo para llenar las formas.</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Figuras Disponibles</h2>
          <div className="flex space-x-2">
            {availableShapes.map((shape) => (
              <div
                key={shape.id}
                className={`w-20 h-20 bg-${shape.color}-500 border-4 border-${shape.color}-500`}
                style={{
                  ...shape.style,
                  margin: '2px',
                }}
                draggable
                onDragStart={(e) => handleShapeDragStart(e, shape)}
              ></div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <p className="text-lg">Tiempo restante: {timer} segundos</p>
        </div>
        <div className="mt-6">
          <p className="text-lg">Puntuación: {score}</p>
        </div>
        {gameOver && !showCongrats && (
          <button
            className="mt-8 bg-blue-500 text-white rounded-full px-6 py-3 text-xl hover:bg-blue-600 transition-colors"
            onClick={handleCongratsClose}
          >
            Intentarlo de Nuevo
          </button>
        )}
      </div>
      {showCongrats && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-4xl font-bold mb-6">¡Felicitaciones! 🎉</h2>
            <p className="text-xl">Has completado el juego con una puntuación de {score}.</p>
            <button
              className="mt-8 bg-blue-500 text-white rounded-full px-6 py-3 text-xl hover:bg-blue-600 transition-colors"
              onClick={handleCongratsClose}
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Figuras1;
