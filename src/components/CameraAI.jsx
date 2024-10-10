import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import yolo from "tfjs-yolo";

export const CameraAI = ({ object, setObject }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);

  // Cargar el modelo de YOLO
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await yolo.v3tiny(); // Cargar la versión Tiny de YOLO para mejor rendimiento en navegadores
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  // Iniciar la cámara
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            facingMode: "environment", // usar la cámara trasera
          },
        })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((err) => {
          console.error("Error al acceder a la cámara: ", err);
        });
    }
  }, []);

  // Detección de objetos en el feed de video
  const detectObjects = async () => {
    if (model && videoRef.current && videoRef.current.readyState === 4) {
      const inputImage = tf.browser.fromPixels(videoRef.current);
      const predictions = await model.predict(inputImage);
      inputImage.dispose(); // Liberar memoria

      // Dibujar los resultados en el canvas
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      predictions.forEach((prediction, index) => {
        if (index < 4) {
          setObject((prev) => {
            const newObject = [...prev];
            newObject[index] = prediction.class;
            return newObject;
          });
        }
      });

      const [x, y, width, height] = prediction.bbox;
      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "red";
      ctx.fillStyle = "red";
      ctx.stroke();

      // Dibuja la etiqueta y la confianza
      ctx.fillText(
        `${index} - ${object[index]} (${(prediction.score * 100).toFixed(2)}%)`,
        x,
        y > 10 ? y - 5 : 10
      );
    }
  };

  // Detectar objetos en cada frame
  useEffect(() => {
    const interval = setInterval(() => {
      detectObjects();
    }, 100); // Cada 100ms
    return () => clearInterval(interval);
  }, [model]);

  return (
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};
