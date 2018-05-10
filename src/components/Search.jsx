class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "kiwi"
    };
    this.search = this.search.bind(this);
  }
  search(e) {
    this.props.handleInput(e.target.value);
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <div className="search-bar form-inline">
        <input
          onChange={this.search}
          className="form-control"
          value={this.state.input}
          type="text"
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search" />
        </button>
      </div>
    );
  }
}

window.Search = Search;
