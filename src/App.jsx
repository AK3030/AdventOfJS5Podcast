import './App.css';
import PodcastCoverImage from './assets/podcast-cover.png';
import PodcastCover from './components/PodcastCover';
import PodcastListTile from './components/PodcastListTile';

function App() {

  return (
    <div className="App">
      <div className='tiles-container'>
        <PodcastCover imageUrl={PodcastCoverImage}/>
        <PodcastListTile title="Compressed.fm"/>
      </div>
    </div>
  )
}

export default App
