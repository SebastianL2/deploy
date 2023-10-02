import React, { useState, useEffect } from "react";
import imgA from "../../assets/Img_Vocales/VocalA.jpeg";
import imgE from "../../assets/Img_Vocales/VocalE.png";
import imgI from "../../assets/Img_Vocales/VocalI.jpeg";
import imgO from "../../assets/Img_Vocales/VocalO.jpeg";
import imgU from "../../assets/Img_Vocales/VocalU.jpeg";
import imgM from "../../assets/Img_Vocales/VocalM.jpeg";
import finalSound from '../../assets/sonidos/ganar.mp3';
import additionSound from "../../assets/sonidos/donkey-kong-coin.mp3"; // Sonido de suma



function MemoramaVocal() {
  const [numeros, setNumeros] = useState([]);
  const [selecciones, setSelecciones] = useState([]);
  const [emparejados, setEmparejados] = useState([]);
  const [previsualizacion, setPrevisualizacion] = useState(true);
  const [tiempo, setTiempo] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);

  useEffect(() => {
    generarTablero();
  }, []);

  useEffect(() => {
    if (previsualizacion) {
      const timer = setTimeout(() => setPrevisualizacion(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [previsualizacion]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTiempo((tiempo) => tiempo + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [tiempo]);

  const cargarImagenes = () => {
    const imageList = [imgA, imgE, imgI, imgO, imgM, imgU];
    return imageList.concat(imageList);
  };

  const generarTablero = () => {
    let images = cargarImagenes();
    setNumeros(images.sort(() => Math.random() - 0.5));
    setSelecciones([]);
    setEmparejados([]);
    setPrevisualizacion(true);
    setTiempo(0);
    setPuntuacion(0);
    setJuegoTerminado(false); // Restablece el juego a no terminado
  };

  const seleccionarTarjeta = (i) => {
    if (
      selecciones.length === 2 ||
      selecciones.includes(i) ||
      emparejados.includes(i) ||
      previsualizacion
    )
      return;
    let newSelecciones = [...selecciones, i];
    setSelecciones(newSelecciones);

    if (newSelecciones.length === 2) {
      procesarSelecciones(newSelecciones);
    }
  };

  const procesarSelecciones = (selected) => {
    setTimeout(() => {
        if (numeros[selected[0]] === numeros[selected[1]]) {
            
            // Reproduce el sonido de Mario cuando se encuentra una pareja
            const audio = new Audio(additionSound);
            audio.play();

            setEmparejados((prevEmparejados) => {
                const nuevosEmparejados = [...prevEmparejados, ...selected];
                if (nuevosEmparejados.length === numeros.length) {
                    // Reproduce el sonido final cuando se hayan encontrado todas las tarjetas
                    const audioFinal = new Audio(finalSound);
                    audioFinal.play();
                    
                    setJuegoTerminado(true); // Actualiza el estado cuando todas las tarjetas estén emparejadas
                }
                return nuevosEmparejados;
            });
            setPuntuacion((prevPuntuacion) => prevPuntuacion + 10);
        }
        setSelecciones([]);
    }, 1000);
};


  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const styles = {
    areaTarjeta: {
        width: "calc(90vw / 6)",  
        minWidth: "130px",      
        height: "calc(90vh / 4)",
        cursor: "pointer",
        display: "inline-block",
      },
    tarjeta: (isRotated) => ({
      position: "relative",
      transformStyle: "preserve-3d",
      transition: "transform 0.5s",
      transform: isRotated ? "rotateY(180deg)" : "rotateY(0deg)",
      width: "100%",
      height: "100%",
    }),
    cara: (type) => ({
      position: "absolute",
      backfaceVisibility: "hidden",
      boxShadow: "inset 0 0 0 5px white",
      fontSize: "500%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundColor: type === "trasera" ? "lightcyan" : "orange",
      transform: type === "trasera" ? "rotateY(180deg)" : "none",
    }),
    nuevoJuego: {
      cursor: "pointer",
      marginTop: "20px",
      background: "linear-gradient(orange, darkorange)",
      padding: "20px",
      borderRadius: "50px",
      border: "white 5px solid",
      fontSize: "130%",
    },
  };

  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        perspective: "1000px",
        background: "powderblue",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        font: "oblique bold 120% cursive",
      }}
    >
      {juegoTerminado ? (
        <div className="text-3xl font-bold p-6 bg-green-200 rounded-xl mt-5">
          ¡Felicitaciones, has completado el juego!
        </div>
      ) : null}

<div
        id="tablero"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "20px",  
        }}
      >
        {numeros.map((imagen, i) => (
          <div
            key={i}
            style={styles.areaTarjeta}
            onClick={() => seleccionarTarjeta(i)}
          >
            <div
              style={styles.tarjeta(
                selecciones.includes(i) ||
                  emparejados.includes(i) ||
                  previsualizacion
              )}
            >
              <div style={styles.cara("trasera")}>
                <img
                  src={imagen}
                  alt="tarjeta"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div style={styles.cara("superior")}>?</div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "15px",
        }}
      >
        <span>Tiempo: {tiempo}s</span>
        <span>Puntuación: {puntuacion}</span>
      </div>
      <button onClick={generarTablero} style={styles.nuevoJuego}>
        Nuevo Juego
      </button>
    </div>
  );
}

export default MemoramaVocal;
