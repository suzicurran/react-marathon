import React from 'react';

class Playlist extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <li className={this.props.playlistClass}>{this.props.name}</li>
    );
  }
}

export default Playlist;
