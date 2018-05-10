class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${this.props.video.id
              .videoId}?autoplay=0`}
            allowFullScreen
          />
        </div>
        <div className="video-player-details">
          <h3>{this.props.video.snippet.title}</h3>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

window.VideoPlayer = VideoPlayer;
