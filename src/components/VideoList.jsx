import VideoListEntry from '/compiled/src/components/VideoListEntry.js';
var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry onEntryClick={props.onEntryClick} video={video} key={video.id.videoId}/>
    )}
    {/* <div><h5><em>videoListEntry</em><VideoListEntry video={props.videos[0]} /></h5></div> */}

    {/* <div><h5><em>videoListEntry</em><VideoListEntry video={props.videos[1]} /></h5></div>
    <div><h5><em>videoListEntry</em><VideoListEntry video={props.videos[2]} /></h5></div>
    <div><h5><em>videoListEntry</em><VideoListEntry video={props.videos[3]} /></h5></div>
    <div><h5><em>videoListEntry</em><VideoListEntry video={props.videos[4]} /></h5></div> */}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
