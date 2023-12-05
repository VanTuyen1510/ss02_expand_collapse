import Home from "./components/Home";

const { Component } = require("react");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };
  }

  handleLogin = () => {
    this.setState({ isExpand: true });
  };

  handleLogout = () => {
    this.setState({ isExpand: false });
  };

  render() {
    const {isExpand} = this.state;
    if (isExpand) return <Home onLogOut={this.handleLogout} />;
    return (
      <div>
        <div>
          <h1 style={{ background: "green" }}>Conditional Rendering</h1>
          <button type="button" onClick={this.handleLogin}>
            Xem giới thiệu
          </button>
        </div>
      </div>
    );
  }
}
export default App;
