import React, { useState } from 'react';
import './ImageUploaderLayout.css';
import Button from '@mui/joy/Button';
import * as tf from '@tensorflow/tfjs';
import exampleImage from '../../imagenes/tienda.png';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
  
    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
    };
  
    async function runModel() {
      const model = await tf.loadGraphModel('https://raw.githubusercontent.com/daved01/tensorflowjs-web-app-demo/main/models/fullyConvolutionalModelTfjs/model.json');
  
      // Get content image
      let image = new Image(256,256);
      image.src = exampleImage;
  
      // Convert image to tensor and add batch dimension
      let tfTensor = tf.browser.fromPixels(image);    
      tfTensor = tfTensor.div(255.0);
      tfTensor = tfTensor.expandDims(0);
      tfTensor = tfTensor.cast("float32");
      
      // Run image through model
      const pred = model.predict(tfTensor);
      
      // Convert tensor to image
      let outputTensor = pred.squeeze();
      
      // Scale to range [0,1] from [-1,1]
      outputTensor = outputTensor.mul(0.5);
      outputTensor = outputTensor.add(0.5);
  
      // Prepare rendering of the result
      const canvas = document.getElementById('canvas'); 
      await tf.browser.toPixels(outputTensor, canvas);      
  };
  
    return (
      <div className="imguploader-container">
        <input type="file" onChange={handleImageChange} accept="image/*" />
  
        {image && (
          <div className='imguploader-container-imagen'>
            <h2>Vista previa:</h2>
            <img src={URL.createObjectURL(image)} alt="Vista previa" height="400vh" />
            <Button variant='soft' onClick={runModel} style={{marginTop: '1vh'}}>Subir Imagen</Button>
          </div>
        )}
      </div>
    );
  };

export default ImageUploader;