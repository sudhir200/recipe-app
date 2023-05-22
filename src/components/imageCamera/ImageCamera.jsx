import React from 'react'
import Webcam from 'react-webcam'
import './imageCamera.css'

function ImageCamera(props) {
  return (
    <div className={`image-camera-wrapper`}>
      <Webcam
        audio={false}
        height={500}
        screenshotFormat="image/jpeg"
        width={'100%'}
        style={{ borderRadius: 10, overflow: 'hidden' }}
      >
        {({ getScreenshot }) => (
          <button
            className={'click-photo'}
            onClick={() => {
              const imageSrc = getScreenshot()
              props.onPhotoClick(imageSrc)
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam>
    </div>
  )
}

export default ImageCamera
