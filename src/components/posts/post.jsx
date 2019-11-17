import React, { Component } from 'react'
import axios from 'axios';

class Post extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = { response: {}, activeIndex: null };
  }


  componentDidUpdate() {
    console.log(this.state.response)
  }

  componentDidMount() {
    this.callApi(this.choisirPost())
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));

    window.scrollTo(0, 0)
  }

  choisirPost = () => {
    return this.props.location.pathname !== "/post/derniere" ? 
      "/posts/" + this.props.location.state.id : 
      "/posts/last/";
  }

  callApi = async (path) => {
    const response =
      await axios.get(
        process.env.REACT_APP_URL_PROXY_API + "/" +
        process.env.REACT_APP_URL_API + path, {
        headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": "Basic dXNlcjpwYXNzd29yZA==" }
      })

    if (response.status !== 200) throw Error(response.message);
    return response;
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