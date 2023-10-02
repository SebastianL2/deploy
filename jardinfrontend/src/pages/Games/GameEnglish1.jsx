import React, { useState, useEffect } from 'react';

import AppleImage from '../assets/Img_English/manzana.jpg';
import CatImage from '../assets/Img_English/gato.png';
import BananaImage from '../assets/Img_English/banana.jpg';
import PearImage from '../assets/Img_English/pera.jpg';
import DogImage from '../assets/Img_English/perro.png';
import BearImage from '../assets/Img_English/oso.jpg';
import LionImage from '../assets/Img_English/leon.jpg';
import OrangeImage from '../assets/Img_English/naranja.jpg';
import PigImage from '../assets/Img_English/cerdo.jpg';

// Importar los archivos de sonido ...
import correctSound from '../assets/sonidos/donkey-kong-coin.mp3';
import gameOverSound from '../assets/sonidos/pacman-dies.mp3';
import incorrectSound from '../assets/sonidos/megaman-x-error.mp3';


function GameEnglish1() {
  const [targetImage, setTargetImage] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false); // Variable de estado para rastrear la interacción del usuario
  const maxAttempts = 10;

  const objects = ['Apple', 'Cat', 'Banana', 'Pear', 'Dog', 'Bear', 'Lion', 'Orange', 'Pig'];

  const objectImageMap = {
    Apple: AppleImage,
    Cat: CatImage,
    Banana: BananaImage,
    Pear: PearImage,
    Dog: DogImage,
    Bear: BearImage,
    Lion: LionImage,
    Orange: OrangeImage,
    Pig: PigImage,
  };

  // sonidos aquí...
  const correctSoundEffect = new Audio(correctSound);
  const gameOverSoundEffect = new Audio(gameOverSound);
  const incorrectSoundEffect = new Audio(incorrectSound);

  useEffect(() => {
    newWord();
    //  el evento de clic
    document.addEventListener('click', handleDocumentClick);

   return () => {
      // Limpia el evento de clic cuando el componente se desmonta
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [userInteracted]);

  const newWord = () => {
    if (attempts < maxAttempts) {
      const randomIndex = Math.floor(Math.random() * objects.length);
      const randomObject = objects[randomIndex];
      setTargetImage(objectImageMap[randomObject]);
      setAttempts(attempts + 1);
    } else {
      setGameOver(true);
       // Reproduce el sonido de game over
      gameOverSoundEffect.play();
      }
  };

  const handleObjectClick = (selectedObject) => {
    if (!gameOver) {
      const targetObject = Object.keys(objectImageMap).find(
        (key) => objectImageMap[key] === targetImage
      );

      if (selectedObject === targetObject) {
        setScore(score + 1);
        // Reproduce el sonido de respuesta correcta
        correctSoundEffect.play();
      } else {
        // Reproduce el sonido de respuesta incorrecta
        incorrectSoundEffect.play();
      }
      newWord();
    }
  };


  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setGameOver(false);

    // Detiene y reinicia los efectos de sonido
    correctSoundEffect.pause();
    correctSoundEffect.currentTime = 0;
    gameOverSoundEffect.pause();
    gameOverSoundEffect.currentTime = 0;
    incorrectSoundEffect.pause();
    incorrectSoundEffect.currentTime = 0;


    newWord();

  };

  const handleDocumentClick = () => {
    // Cuando el usuario hace clic en la página, marca que ha interactuado
    setUserInteracted(true);

    };

  return (
    <section className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-md mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Encuentra el Objeto</h1>
          <img src={targetImage} alt="Object" className="mb-6" style={{ maxWidth: '200px' }} />
          <div className="flex flex-wrap justify-center">
            {objects.map((word, index) => (
              <div
                key={index}
                className={`w-16 h-16 m-2 flex items-center justify-center cursor-pointer border-2 border-gray-500 rounded-full ${
                  gameOver ? 'pointer-events-none' : ''
                }`}
                style={{ flex: '0 0 25%', maxWidth: '25%' }}
                onClick={() => handleObjectClick(word)}
              >
                {word}
              </div>
            ))}
          </div>
          <p className="text-xl mt-6">Puntuación: {score}</p>
          {gameOver && (
            <button className="text-xl mt-6 bg-blue-500 text-white py-2 px-4 rounded" onClick={resetGame}>
              Reiniciar Juego
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default GameEnglish1;
