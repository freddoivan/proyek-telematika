"use client"

import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-converter';
import * as bodySegmentation from '@tensorflow-models/body-segmentation';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import { useEffect, useRef } from 'react';

export default function Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null);;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  //Perlu Explor lagi untuk mendpatkan data per segment "maskValueToColor / maskValueToLabel" function
  useEffect(() => {
    async function loadBodyPix() {
      const segmenter = await bodySegmentation.createSegmenter(bodySegmentation.SupportedModels.BodyPix);
      const video = videoRef.current;
      const canvas = canvasRef.current;

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;

      video.onloadedmetadata = () => {
        video.play();

        async function detectBody() {
          const segmentation = await segmenter.segmentPeople(video,{multiSegmentation:false,segmentBodyParts:true});
          const coloredPartImage = await bodySegmentation.toColoredMask(segmentation, bodySegmentation.bodyPixMaskValueToRainbowColor, {r: 255, g: 255, b: 255, a: 255});
          const opacity = 0.5;
          const flipHorizontal = false;
          const maskBlurAmount = 0;
          bodySegmentation.drawMask(
            canvas, video , coloredPartImage, opacity, maskBlurAmount,
            flipHorizontal);
          requestAnimationFrame(detectBody);
        }

        detectBody();
      };
    }

    loadBodyPix();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted width="640" height="480" />
      <canvas ref={canvasRef} width="640" height="480" />
    </div>
  );
}