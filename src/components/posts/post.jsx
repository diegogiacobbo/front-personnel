import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = { response: {}, activeIndex: null };
  }

  componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.rappelerAutreRoute();
      }
  }

  componentDidMount() {
    this.rappelerAutreRoute();
  }

  rappelerAutreRoute() {
    global.scrollTo(0, 0);
    this.getPost();
  }

  render() {
    return (
      <main role="main" className="container">
        <h1 className="mt-5" dangerouslySetInnerHTML={{ __html: this.state.response.title }} />
        <p className="lead" dangerouslySetInnerHTML={{ __html: this.state.response.content }} />
      </main>
    );
  }

  choisirPost = () => {
    let path =
      process.env.REACT_APP_URL_PROXY_API +
      process.env.REACT_APP_URL_API;

    if (this.props.location === undefined) {
      return path + "/posts/last/";
    }
    else {
      return path + (this.props.location.pathname !== "/post/derniere" ?
        "/posts/" + this.props.location.state.id :
        "/posts/last/");
    }
  }

   getPost = () => {
    Post.callApi(this.choisirPost())
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));
  }

  static callApi = async (path) => {
    return await axios.get(path);
  }

}

export default Post