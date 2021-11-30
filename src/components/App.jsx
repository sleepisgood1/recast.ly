import exampleVideoData from '/src/data/exampleVideoData.js';
import Search from '/compiled/src/components/Search.js';
import VideoList from '/compiled/src/components/VideoList.js';
import VideoListEntry from '/compiled/src/components/VideoListEntry.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
import searchYouTube from '/src/lib/searchYouTube.js';
class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      // textValue: ''
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    this.onVideoListEntryClick = this.onVideoListEntryClick.bind(this);
  }
  onVideoListEntryClick(clickedVideo) {
    this.setState({
      currentVideo: clickedVideo
    });
  }
  onSuccessOfSearchYouTube (youtubeVideoData) {
    this.setState({
      videoList: youtubeVideoData
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchSite={searchYouTube} value={this.state.textValue} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList onEntryClick={this.onVideoListEntryClick} videos={exampleVideoData} />
          </div>
        </div>
      </div>
    );
  }
}

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData} />
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
