import React, { useEffect, useRef } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";

export const CameraAI = ({ object, setObject }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    // Cargar el modelo coco-ssd
    const loadModel = async () => {
      try {
        const model = await cocoSsd.load();
        modelRef.current = model;
        console.log("Modelo coco-ssd cargado correctamente.");
      } catch (error) {
        console.error("Error al cargar el modelo coco-ssd:", error);
      }
    };

    loadModel();

    // Acceder a la cámara
    const startCamera = async () => {
      if (navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },
          });
          videoRef.current.srcObject = stream;
        } catch (error) {
          console.error("No se pudo acceder a la cámara:", error);
        }
      }
    };

    startCamera();

    return () => {
      const stream = videoRef.current?.srcObject;
      const tracks = stream?.getTracks();
      tracks?.forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    const detectObjects = async () => {
      if (videoRef.current && modelRef.current) {
        const video = videoRef.current;
        const input = tf.browser.fromPixels(video);

        // Detectar objetos con el modelo coco-ssd
        const results = await modelRef.current.detect(input);

        // Filtrar y agregar solo objetos nuevos que no están en el estado `object`
        results?.forEach((item) => {
          if (!object.includes(item.class)) {
            setObject((prevObjects) => [...prevObjects, item.class]);
          }
        });

        // Dibujar en el canvas
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.drawImage(
          video,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );

        results.forEach((result) => {
          const { bbox, class: className } = result;
          ctx.beginPath();
          ctx.rect(bbox[0], bbox[1], bbox[2], bbox[3]);
          ctx.lineWidth = 2;
          ctx.strokeStyle = "red";
          ctx.fillStyle = "red";
          ctx.stroke();
          ctx.fillText(className, bbox[0], bbox[1] - 10);
        });

        input.dispose();
      }
    };

    const interval = setInterval(detectObjects, 100);

    return () => clearInterval(interval);
  }, [object, setObject]);

  return (
    <div>
      <video ref={videoRef} autoPlay muted width="390" height="844" />
      <canvas
        ref={canvasRef}
        width="390"
        height="844"
        style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
      />
    </div>
  );
};
