import React, { useState } from 'react';

const letters = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O'],
  ['P', 'Q', 'R', 'S', 'T'],
  ['U', 'V', 'W', 'X', 'Y'],
];

function WordSearch() {
  const [selectedWord, setSelectedWord] = useState('');
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    checkWord(selectedWord);
  };

  const handleMouseEnter = (letter) => {
    if (isMouseDown) {
      setSelectedWord((prevWord) => prevWord + letter);
    }
  };

  const checkWord = (word) => {
    // Aquí puedes verificar si la palabra seleccionada es válida
    // o si coincide con alguna palabra en tu lista de palabras.
    console.log('Palabra seleccionada:', word);
  };

  return (
    <div>
      <h1>Juego de Sopa de Letras</h1>
      <div
        className="word-search-grid"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {letters.map((row, rowIndex) => (
          <div key={rowIndex} className="word-search-row">
            {row.map((letter, colIndex) => (
              <div
                key={colIndex}
                className="word-search-cell"
                onMouseEnter={() => handleMouseEnter(letter)}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordSearch;
