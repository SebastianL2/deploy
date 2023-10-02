import React, { useState, useEffect } from 'react';

// Importar sonidos
import backgroundMusic from "../../assets/sonidos/angry-birds-videojuegos-.mp3";
import congratsSound from "../../assets/sonidos/text-message.mp3";
import additionSound from "../../assets/sonidos/donkey-kong-coin.mp3"; // Sonido de suma
import subtractionSound from "../../assets/sonidos/010564339_prev.mp3"; // Sonido de resta

const GameSumRes1 = () => {
    const [hiddenNumbers, setHiddenNumbers] = useState([]);
    const [currentNumbers, setCurrentNumbers] = useState([]);
    const [operation, setOperation] = useState('');
    const [answer, setAnswer] = useState('');
    const [treasuresFound, setTreasuresFound] = useState(0);
    const [message, setMessage] = useState('');
    const [remainingAttempts, setRemainingAttempts] = useState(8);
    const [isGameOver, setIsGameOver] = useState(false);

    // Estados para los sonidos
    const [backgroundAudio] = useState(new Audio(backgroundMusic));
    const [congratsAudio] = useState(new Audio(congratsSound));
    const [additionAudio] = useState(new Audio(additionSound));
    const [subtractionAudio] = useState(new Audio(subtractionSound));

    useEffect(() => {
        generateRandomNumbers();
    }, []);

    useEffect(() => {
        backgroundAudio.loop = true;
        backgroundAudio.volume = 0.5;
    }, [backgroundAudio]);

    useEffect(() => {
        congratsAudio.addEventListener('ended', () => {
            // Cuando el sonido de felicitaciones termina, se detiene la música de fondo
            backgroundAudio.pause();
        });
    }, [backgroundAudio, congratsAudio]);

    const startBackgroundMusic = () => {
        backgroundAudio.play();
    };

    const generateRandomNumbers = () => {
        const randomNumbers = [];
        while (randomNumbers.length < 5) {
            const randomNumber1 = Math.floor(Math.random() * 10) + 1; // Números del 1 al 10
            const randomNumber2 = Math.floor(Math.random() * randomNumber1) + 1; // Número aleatorio menor o igual al primero
            const randomOperator = Math.random() > 0.5 ? '+' : '-';
            const sum = randomOperator === '+' ? randomNumber1 + randomNumber2 : randomNumber1 - randomNumber2;
            if (!randomNumbers.includes(sum)) {
                randomNumbers.push(sum);
                setCurrentNumbers([randomNumber1, randomNumber2]);
                setOperation(randomOperator);
            }
        }
        setHiddenNumbers(randomNumbers);
    };

    const handleInputChange = (e) => {
        setAnswer(e.target.value);
    };

    const checkAnswer = () => {
        if (
            (operation === '+' && parseInt(answer) === currentNumbers[0] + currentNumbers[1])
        ) {
            setTreasuresFound(treasuresFound + 1);
            setMessage('¡Encontraste un tesoro!');

            // Reproduce el sonido de suma
            additionAudio.play();
        } else if (
            (operation === '-' && parseInt(answer) === currentNumbers[0] - currentNumbers[1])
        ) {
            setTreasuresFound(treasuresFound + 1);
            setMessage('¡Encontraste un tesoro!');

            // Reproduce el sonido de resta
            subtractionAudio.play();
        } else {
            setMessage('Inténtalo de nuevo.');
        }

        setRemainingAttempts(remainingAttempts - 1);

        if (remainingAttempts > 1) {
            setHiddenNumbers(hiddenNumbers.slice(1));
            generateRandomNumbers();
            setAnswer('');
        } else {
            setIsGameOver(true);

            // Reproduce el sonido de felicitaciones
            congratsAudio.play();
        }
    };

    const restartGame = () => {
        setIsGameOver(false);

        // Detiene la música de fondo y el sonido de felicitaciones al reiniciar el juego
        backgroundAudio.pause();
        congratsAudio.pause();

        setTreasuresFound(0);
        setMessage('');
        setRemainingAttempts(8);
        generateRandomNumbers();
        setAnswer('');

        // Vuelve a iniciar la música de fondo
        backgroundAudio.currentTime = 0;
        startBackgroundMusic();
    };
    // Generar un array de estrellas en función de la cantidad de tesoros encontrados
    const stars = Array.from({ length: treasuresFound }, (_, index) => (
        <span key={index} role="img" aria-label="star">
            ⭐️
        </span>
    ));

    return (
        <section
            className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex flex-col items-center justify-center"
            onClick={startBackgroundMusic}
        >
            <div className="max-w-screen-md mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
                <div className="treasure-hunt-game p-4 text-center bg-yellow-100 rounded-lg">
                    <h1 className="text-4xl font-bold mb-4 text-yellow-800">Caza los Tesoros Matemáticos</h1>
                    {!isGameOver ? (
                        <div>
                            <p className="mb-2 text-2xl text-yellow-800">Encuentra los tesoros resolviendo sumas y restas.</p>
                            <p className="mb-4 text-3xl text-yellow-800">Tesoro actual: {currentNumbers[0]} {operation} {currentNumbers[1]}</p>
                            <input
                                type="number"
                                value={answer}
                                onChange={handleInputChange}
                                placeholder="Escribe tu respuesta"
                                className="border p-2 rounded mr-2 text-2xl"
                            />
                            <button
                                onClick={checkAnswer}
                                className="bg-blue-500 text-white px-4 py-2 rounded text-2xl hover:bg-blue-700 transition"
                            >
                                Comprobar
                            </button>
                            <p className="mt-2 text-xl text-yellow-800">{message}</p>
                            <p className="mt-4 text-3xl text-yellow-800">
                                Tesoros encontrados: {treasuresFound}
                            </p>
                            <p className="mt-4 text-3xl text-yellow-800">{stars}</p>
                            <p className="mt-4 text-2xl text-yellow-800">
                                Intentos restantes: {remainingAttempts} {isGameOver && treasuresFound === 8 ? '🏆' : ''}
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p className="text-3xl font-semibold mb-4 text-yellow-800">¡Felicidades, has encontrado los tesoros!</p>
                            <p className="text-4xl" role="img" aria-label="cup" style={{marginTop:"5px"}}>
                                🏆
                            </p>
                            <button
                                onClick={restartGame}
                                className="bg-green-500 text-white px-6 py-3 rounded-lg text-2xl hover:bg-green-700 transition"
                                style={{marginTop:"10px"}}
                            >
                                Jugar de nuevo
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GameSumRes1;
