
import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { mySongs } from "./songs";
import {Icon} from 'semantic-ui-react';
import './App.css';


class App extends React.Component{
  
  constructor(props) {
    super(props)
    this.audioInstance = null
    this.state = {
       audioList:[],
       show:false
    }
  }
  
  componentDidMount(){
    this.setState({
      audioList:mySongs
    })
  }
  handlePlay = () => {
    this.setState({
      show:!this.state.show
    })
  }

  
  // useEffect(() => {
  //   setAudioList(mySongs);
  // }, [])

  render(){
    const {show} = this.state;
    return (
      <div className="App">
        <h3>Music Player</h3> 
        <div className="music_functionality">
          <div className="icon_func">
            <Icon onClick={() => this.audioInstance.playPrev()} name="step backward" size="large" />
          </div>
          <div onClick={this.handlePlay} className="icon_func">
            {show ? <Icon onClick={() => this.audioInstance.pause()} name="pause" size="large" /> : <Icon  onClick={() => this.audioInstance.play()} name="play" size="large" />}
          </div>
          <div className="icon_func">
            <Icon onClick={() => this.audioInstance.playNext()} name="step forward" size="large" />
          </div>
        </div>
        <div className="listsongs">
          <ol> 
            {this.state.audioList.map(el=><li>{el.name}</li>)}
          </ol>
        </div>
       <ReactJkMusicPlayer 
          onAudioVolumeChange="true"
          onAudioPlay="false"
          showMediaSession="true"
          getAudioInstance={(instance) => {
              this.audioInstance = instance
            }}
       audioLists={this.state.audioList} />
       
      </div>
    );
  }
}

export default App;