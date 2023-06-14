import React, { Component } from 'react';
import songs from './services/songs';
import SongCard from "./components/SongCard"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: songs,
    };
  }

  sortByTitle = () => {
    this.setState({
      songs: [...this.state.songs.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)],
    });
  };

  sortByRating = () => {
    this.setState({
      songs: [...this.state.songs.sort((a, b) => b.rating - a.rating)],
    });
  };

  render() {
    return (
      <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <div>
          <button onClick={this.sortByTitle} className="st-btn">Sort by Title</button>
          <button onClick={this.sortByRating}  className="st-btn">Sort by Rating</button>
        </div>
        <div id="song-list">
          {this.state.songs.map((song) => (
            <SongCard  key={song.title} data={song} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
