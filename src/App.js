import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Post from './components/Post';
import SelectedItem from './components/SelectedItem';
import Barry from  './otters/otter1.jpg';
import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

const otters = [
    { id: 1, src: Barry, name: 'Barry' },
    { id: 2, src: Robin, name: 'Robin' },
    { id: 3, src: Maurice, name: 'Maurice' },
    { id: 4, src: Lesley, name: 'Lesley' },
    { id: 5, src: Barbara, name: 'Barbara' },
];

function App() {
    const [selectedPostName, setSelectedPostName] = useState('Barry');
    const selectedPost = otters.find(otter => otter.name === selectedPostName);

    return (
      <div>
        <Header />
        <div className='app-content'>
          <ul className='post-list'>
              {
                otters.map((otter) => (
                  <Post key={otter.id} src={otter.src} name={otter.name} setSelectedPostName={setSelectedPostName} />
                ))
              }
            </ul>
            <SelectedItem src={selectedPost.src} name={selectedPost.name} />
          </div>
          <Footer />
      </div>
    );
}

export default App;
