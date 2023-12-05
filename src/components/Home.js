import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{background : "green"}}>Conditional Rendering</h1>
        <p>
          Trong ReactJs,đôi khi bạn có một số Component và tùy thuộc vào từng
          điều kiện ví dụ như trạng thái của state , props,... mà bạn muốn hiển
          thị một hoặc một số component nào đó.Khi đó bạn có thể sử dụng
          Conditional rendering để render ra component mà bạn mong muốn
        </p>
        <div>
          <button onClick={this.props.onLogOut}>Đóng giới thiệu</button>
        </div>
      </div>
    );
  }
}

export default Home;
