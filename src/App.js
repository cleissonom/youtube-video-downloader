import './App.scss';
import { FaYoutube } from 'react-icons/fa';


function App() {
   return (
      <div className="body">
         <h1 className="heading">My Own YouTube Downloader <FaYoutube /></h1>
         <input className="URL-input" placeholder="Video URL e.g. https://www.youtube.com/watch?v=MtN1YnoL46Q" />
         <button className="convert-button">Convert</button>
      </div>
   );
}

export default App;
