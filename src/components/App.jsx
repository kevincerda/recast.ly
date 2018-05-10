class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      handle: false,
      currentVideo: {},
      query: "real kiwi hour"
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    this.searchYouTube(this.state.query);
  }
  handleInput(query) {
    this.setState({ query: query });
    this.searchYouTube(this.state.query);
  }
  handleSelect(video) {
    this.setState({ currentVideo: video });
  }
  searchYouTube(query) {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${window.YOUTUBE_API_KEY}&maxResults=5&videoEmbeddable=true&type=video&q=${query}`
      )
      .then(res =>
        this.setState({
          data: res.data,
          currentVideo: res.data.items[0],
          handle: true
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.handle && (
          <div>
            <nav className="navbar">
              <div className="col-md-6 offset-md-3">
                <Search handleInput={this.handleInput} />
              </div>
            </nav>
            <div className="row">
              <div className="col-md-7">
                <VideoPlayer video={this.state.currentVideo} />
              </div>
              <div className="col-md-5">
                <VideoList
                  select={this.handleSelect}
                  videos={this.state.data.items}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

window.App = App;
