import React from 'react';
import Song from './Song';

class SongCollection extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let className = "";
    let selectedSongId = this.props.selectedSongId;
    let songs = this.props.songs.map(song => {
      const { id, name, artist, album } = song;
      if (selectedSongId === id) {
        className = 'selected';
      } else {className = "";}
      let songOnClickFunction = () => {this.props.handleSongSelect(id);};
      return (
        <Song
          key={id}
          name={name}
          artist={artist}
          album={album}
          songClass={className}
          handleSongSelect={songOnClickFunction}
        />
      );
    });
    return(
      <ul>
        {songs}
      </ul>
    );
  }
}

export default SongCollection;
