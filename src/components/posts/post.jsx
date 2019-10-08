import React, { Component } from 'react'

class Post extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = { response: '' };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch(
      process.env.REACT_APP_URL_PROXY_API + "/" +
      process.env.REACT_APP_URL_API + "/posts/" +
      this.props.location.state.id, {
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
        <h1 className="mt-5" dangerouslySetInnerHTML={{ __html: this.state.response.title }} />
        <p className="lead" dangerouslySetInnerHTML={{ __html: this.state.response.content }} />
      </main>
    );
  }
}

export default Post