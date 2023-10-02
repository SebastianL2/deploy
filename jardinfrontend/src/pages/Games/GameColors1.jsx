import React, { useState, useEffect } from 'react';


// Importa los archivos de sonido aquí...
import correctSound from '../assets/sonidos/mario-bros-coin.mp3';
import incorrectSound from '../assets/sonidos/pacman-dies.mp3';

const colorData = [
  { name: 'Rojo', color: 'red' },
  { name: 'Azul', color: 'blue' },
  { name: 'Verde', color: 'green' },
  { name: 'Amarillo', color: 'yellow' },
  { name: 'Morado', color: 'purple' },
  { name: 'Rosa', color: 'pink' },
  { name: 'Naranja', color: 'orange' },
  { name: 'Marrón', color: 'brown' },
  { name: 'Negro', color: 'black' },
  { name: 'Gris', color: 'gray' },
  { name: 'Blanco', color: 'white' },
  { name: 'Lima', color: 'lime' },
  { name: 'Violeta', color: 'violet' },
];

function chunkArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

function GameColors() {
  const [score, setScore] = useState(0);
  const [currentColor, setCurrentColor] = useState({});
  const [gameOver, setGameOver] = useState(false);

  // Crea las instancias de los elementos de audio para respuesta correcta e incorrecta
  const correctSoundEffect = new Audio(correctSound);
  const incorrectSoundEffect = new Audio(incorrectSound);

  useEffect(() => {
    getNextColor();
  }, []);

  const getNextColor = () => {
    const randomIndex = Math.floor(Math.random() * colorData.length);
    setCurrentColor(colorData[randomIndex]);
  };

  const checkAnswer = (selectedColor) => {
    if (selectedColor === currentColor.color) {
      setScore(score + 1);
      getNextColor();
      // Reproduce el sonido de respuesta correcta
      correctSoundEffect.play();
    } else {
      setGameOver(true);
      // Reproduce el sonido de respuesta incorrecta
      incorrectSoundEffect.play();
    }
  };

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
    getNextColor();
  };

  const colorsInRows = chunkArray(colorData, 3); // Cambia 3 para el número deseado de columnas

  return (
    <section className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-md mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">Colores</h1>
          <p className="text-xl mb-2">Puntuación: {score}</p>

          {!gameOver ? (
            <div className="text-center">
              <h2 className="text-2xl mb-4">Adivina el Color: {currentColor.name}</h2>
              {colorsInRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center mb-2">
                  {row.map((color, index) => (
                    <button
                      key={index}
                      style={{ backgroundColor: color.color }}
                      className="w-16 h-16 m-2 rounded-full"
                      onClick={() => checkAnswer(color.color)}
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl mb-4">¡Juego Terminado!</h2>
              <p className="text-xl mb-4">Tu puntuación final: {score}</p>
              <button
                onClick={restartGame}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Reiniciar Juego
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GameColors;
