import { useState } from 'react';
import FileTrap from './components/FileTrap'
import ImageList from './components/ImagesLIst'
import { imageObjType } from './types/imageObjType';
import './App.css'

function App() {
  const [filesBox, updateFilesBox] = useState<imageObjType[]>([]);

  const fileToDataUrl = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', (evt: Event) => {
        if (evt.currentTarget) resolve(evt.currentTarget.result);
      });
      
      fileReader.addEventListener('error', (evt: Event) => {
        if (evt.currentTarget) reject(new Error(evt.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }
  
  const handleSelect: React.ChangeEventHandler<HTMLInputElement> = async (evt) => {
      const files = [...evt.target.files];
      const urls = await Promise.all(files.map(o => fileToDataUrl(o)));

      const id = `${new Date().getTime()}`
      
      const imageObj: imageObjType = {
        id,
        src: urls[0],
      };

      updateFilesBox([...filesBox, imageObj]);
  }

  const handleDel: React.MouseEventHandler = (e) => {
    if (e.target) {
      const targetId = (e.target as HTMLButtonElement).dataset.id;
      updateFilesBox(filesBox.filter((f) => f.id !== targetId))
    }
    
  }

  return (
    <>
      <FileTrap onChange={handleSelect} />
      <ImageList filesBox={filesBox} delImage={handleDel}/>
    </>
  )
}

export default App
