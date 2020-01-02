import React, { Component } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';

const override = "display: block;margin: 0 auto; margin-top: 40vh;";

class Post extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = { response: {}, activeIndex: null, loading: true };
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
        <div className='sweet-loading'>
          <BarLoader
            css={override}
            sizeUnit={"px"}
            size={70}
            color={'rgb(140, 31, 133)'}
            loading={this.state.loading}
          />
        </div>
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
    debugger;
    Post.callApi(this.choisirPost())
      .then(res => this.setState({ response: res.data, loading: res.status === 200 ? false : true }))
      .catch(err => console.log(err));
  }

  static callApi = async (path) => {
    return await axios.get(path);
  }

}

export default Post