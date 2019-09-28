import React, { Component } from 'react'

class Post extends Component {

  constructor() {
    super();
    this.state = { response: '' };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {

    var proxyUrl = 'http://cors-anywhere.herokuapp.com/',
      targetUrl = 'http://back-personnel.herokuapp.com/posts/1'
    const response = await fetch(proxyUrl + targetUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "Basic dXNlcjpwYXNzd29yZA=="
      }
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  render() {
    return (
      <main role="main" className="container">
        <h1 className="mt-5">{this.state.response.title}</h1>
        <p className="lead">{this.state.response.content}</p>
      </main>
    );
  }
}

export default Post