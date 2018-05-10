class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "real kiwi hour"
    };
    this.search = this.search.bind(this);
    this.click = this.click.bind(this);
  }
  search(e) {
    this.setState({ input: e.target.value });
    const debounce = _.debounce(this.props.handleInput, 500, {
      leading: false,
      trailing: true
    });
    debounce(e.target.value);
  }
  click() {
    this.props.handleInput(this.state.input);
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
        <button onClick={this.click} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search" />
        </button>
      </div>
    );
  }
}

window.Search = Search;
