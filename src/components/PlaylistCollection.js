import React from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    let className = "";
    let selectedPlaylistId = this.props.selectedPlaylistId;
    let playlists = this.props.playlists.map(playlist => {
      const { id, name, songs } = playlist;
      if (selectedPlaylistId === id) {
        className = "selected";
      } else {
        className = "";
      }
      return (
        <Playlist
          key={id}
          name={name}
          songs={songs}
          playlistClass={className}
        />
      );
    });
    return(
      <ul>
        {playlists}
      </ul>
    );
  }
}

export default PlaylistCollection;
