"use client";

import React, { useEffect, useRef, useState } from "react";

const ARMarker: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [cameraStatus, setCameraStatus] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const checkCameraPermission = async () => {
      try {
        // Request camera permission
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });

        // Stop the stream immediately
        stream.getTracks().forEach((track) => track.stop());

        setCameraStatus("loading");
      } catch (error) {
        console.error("Camera permission denied:", error);
        setCameraStatus("error");
        return;
      }

      // Dynamic script loading
      const loadScripts = () => {
        return new Promise<void>((resolve, reject) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if ((window as any).AFRAME && (window as any).ARjs) {
            resolve();
            return;
          }

          const aframeScript = document.createElement("script");
          aframeScript.src = "https://aframe.io/releases/1.2.0/aframe.min.js";
          aframeScript.async = true;

          const arScript = document.createElement("script");
          arScript.src =
            "https://cdn.jsdelivr.net/npm/ar.js@2.2.2/aframe/build/aframe-ar.min.js";
          arScript.async = true;

          aframeScript.onload = () => {
            arScript.onload = () => {
              setCameraStatus("success");
              resolve();
            };
            arScript.onerror = reject;
            document.body.appendChild(arScript);
          };
          aframeScript.onerror = reject;

          document.body.appendChild(aframeScript);
        });
      };

      try {
        await loadScripts();
      } catch (error) {
        console.error("Script loading failed:", error);
        setCameraStatus("error");
      }
    };

    checkCameraPermission();
  }, [isMounted]);

  useEffect(() => {
    if (cameraStatus !== "success" || !sceneRef.current) return;

    // Use static HTML for the AR scene
    sceneRef.current.innerHTML = `
      <a-scene
        vr-mode-ui="enabled: false;"
        loading-screen="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
        id="scene"
        embedded
        gesture-detector
      >
        <a-assets>
          <a-asset-item id="animated-asset" src="/assets/asset.glb"></a-asset-item>
        </a-assets>

        <a-marker
          id="animated-marker"
          type="pattern"
          preset="custom"
          url="/assets/marker.patt"
          raycaster="objects: .clickable"
          emitevents="true"
          cursor="fuse: false; rayOrigin: mouse;"
          id="markerA"
        >
          <a-entity
            id="bowser-model"
            scale="0.0044742729306487695 0.0044742729306487695 0.0044742729306487695"
            animation-mixer="loop: repeat"
            gltf-model="#animated-asset"
            class="clickable"
            gesture-handler
          ></a-entity>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    `;
  }, [cameraStatus]);

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100svh",
          position: "relative",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      ref={sceneRef}
      style={{
        width: "100vw",
        height: "100svh",
        position: "relative",
      }}
    >
      {cameraStatus === "idle" && <p>Requesting Camera Permission...</p>}
      {cameraStatus === "loading" && <p>Loading AR Scripts...</p>}
      {cameraStatus === "error" && (
        <p>
          Camera access denied or scripts failed to load. Please enable camera
          permissions and reload.
        </p>
      )}
    </div>
  );
};

export default ARMarker;
