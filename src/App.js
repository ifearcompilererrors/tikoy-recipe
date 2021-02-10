import './App.css';
import './index.css';
import { useState } from 'react';
import Landing from './components/Landing';
import Story from './components/Story';
import Tutorial from './components/Tutorial';
import Submissions from './components/Submissions/';

function App() {
  const [showStory, setShowStory ] = useState(false);

  return (
    <div className={showStory ? 'no-scroll' : ''}>
      <Landing handleShowStory={() => setShowStory(true)} />
      <Story isVisible={showStory} handleHide={() => setShowStory(false)} />
      <Tutorial />
      <Submissions />
    </div>
  );
}

export default App;
