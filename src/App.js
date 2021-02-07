import './App.css';
import { useState } from 'react';
import Landing from './components/Landing/';
import Story from './components/Story/';
import Tutorial from './components/Tutorial/';

function App() {
  const [showStory, setShowStory ] = useState(false);

  return (
    <>
      <Landing handleShowStory={() => setShowStory(true)} />
      <Story isVisible={showStory} handleHide={() => setShowStory(false)} />
      <Tutorial />
    </>
  );
}

export default App;
