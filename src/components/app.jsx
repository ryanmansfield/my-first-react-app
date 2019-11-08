import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render () {
    const gifs = [
      { id: "WU7RukwpWyuiEBPOG4"},
      { id: "Ze43DUajKqJjeGwW5b"},
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="WU7RukwpWyuiEBPOG4" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
