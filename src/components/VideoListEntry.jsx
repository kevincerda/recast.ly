class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img
            className="media-object"
            src={this.props.video.snippet.thumbnails.default.url}
          />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">
            {this.props.video.snippet.title}
          </div>
          <div className="video-list-entry-detail">
            {this.props.video.snippet.description}
          </div>
        </div>
      </div>
    );
  }
}

VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

window.VideoListEntry = VideoListEntry;
