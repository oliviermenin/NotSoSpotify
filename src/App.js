import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Artists from './Components/Artists';
import Albums from './Components/Albums';
import Genres from './Components/Genres';
import AlbumArtist from './Components/AlbumArtist';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/artists/" element={<Artists />} />
          <Route path="/albums/" element={<Albums />} />
          <Route path="/genres/" element={<Genres />} />
          <Route path="album_artist/:id" element={<AlbumArtist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
