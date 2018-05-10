class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      handle: false,
      currentVideo: {},
      query: "kiwi"
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    this.searchYouTube("kiwi");
  }
  handleInput(query) {
    console.log("handleInput Fired");
    this.setState({ query: query });
    this.searchYouTube(this.state.query);
  }
  handleSelect(video) {
    console.log("handleSelect Fired");
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
    {
      console.log(this.state.query);
    }
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
                <VideoList videos={this.state.data.items} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

window.App = App;
