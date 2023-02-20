import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame, useLoader,useThree,extend} from '@react-three/fiber'
import * as THREE from 'three'
import * as AR from 'jsartoolkit5'

const ARScene = ({ children }) => {
  const cameraRef = useRef()
  const canvasRef = useRef()
  const arToolkitSource = useRef()
  const arToolkitContext = useRef()

  useEffect(() => {
    const source = new AR.Source('webcam')
    arToolkitSource.current = new AR.Source('webcam')
    arToolkitContext.current = new AR.Context({
      cameraParametersUrl: 'data/camera_para.dat',
      detectionMode: 'mono',
      imageSmoothingEnabled: true,
      maxDetectionRate: 60,
      canvasWidth: source.parameters.sourceWidth,
      canvasHeight: source.parameters.sourceHeight
    })
  }, [])

  useFrame(() => {
    if (arToolkitSource.current.ready) {
      arToolkitContext.current.update(arToolkitSource.current.domElement)
    }
  })

  return (
    <>
      <camera ref={cameraRef} />
      <mesh>
        <boxBufferGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      {children}
      <AR.debugUI.Controls arToolkitContext={arToolkitContext.current} />
      <AR.debugUI.Canvas arToolkitContext={arToolkitContext.current} />
      <video ref={arToolkitSource} style={{ display: 'none' }} />
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </>
  )
}
