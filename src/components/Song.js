import React from 'react';

class Song extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <li className={this.props.songClass} onClick={this.props.handleSongSelect}>{this.props.name}-{this.props.artist} </li>
    );
  }
}

export default Song;
