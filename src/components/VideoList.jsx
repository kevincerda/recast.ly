class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: false
    };
  }
  render() {
    return (
      <div className="video-list">
        <div>
          {this.props.videos.map(video => <VideoListEntry video={video} />)}
        </div>
      </div>
    );
  }
}

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;
