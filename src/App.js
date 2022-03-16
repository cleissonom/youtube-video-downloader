import './App.scss';
import { FaYoutube } from 'react-icons/fa';
import { useState } from 'react';

function App() {
   const [URLinput, setURLinput] = useState('')

   const sendURL = (URL) => {
      // We will put code here later
   }

   const convertBtn = () => {
      console.log(`URL: ${URLinput}`);
      sendURL(URLinput);
   };

   return (
      <div className="body">
         <h1 className="heading">My Own YouTube Downloader <FaYoutube /></h1>
         <input className="URL-input" onChange={e => setURLinput(e.target.value)} placeholder="Video URL e.g. https://www.youtube.com/watch?v=MtN1YnoL46Q" />
         <button className="convert-button" onClick={convertBtn}>Convert</button>
      </div>
   );
}

export default App;
