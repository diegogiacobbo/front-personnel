import React, { } from 'react'
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Post from './post';
import './posts.scss';
import axios from 'axios';
import { CircleLoader } from 'react-spinners';

const override = "display: block;margin: 0 auto; margin-top: 40vh;";

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { posts: [], teste: [], id: undefined, activeIndex: null, loading: true };
    this.onNavigatePost = this.onNavigatePost.bind(this)

  }

  onNavigatePost = () => {
    this.props.history.push(
      {
        pathname: "/post/" + this.state.id,
        state: { id: this.state.id }
      }
    );
  }

  componentDidUpdate() {
    if (!isNaN(this.state.id)) this.onNavigatePost();
  }

  handleClick = (index) => this.setState({ activeIndex: index })

  componentDidMount() {

    this.callApi()
      .then(res => this.setState({ posts: res.data, loading: res.status === 200 ? false : true  }))
      .catch(err => console.log(err));
    
      window.scrollTo(0, 0);
  }

  callApi = async () => {
    const response = await
      axios.get(process.env.REACT_APP_URL_PROXY_API +
        process.env.REACT_APP_URL_API + '/posts/ispublic/', {
        headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": "Basic dXNlcjpwYXNzd29yZA==" }
      })

    if (response.status !== 200) throw Error(await response.message);
    return response;
  }

  listItemsOrdering = (list) =>
    list.sort((post, i) => {
      return new Date(Date.parse(post.creationDate)).getTime() >
        new Date(Date.parse(i.creationDate)).getTime() ? -1 : 1;
    });

  render() {
    return (
      <main role="main" className="container">
        <div className='sweet-loading'>
          <CircleLoader
            css={override}
            sizeUnit={"px"}
            size={70}
            color={'rgb(140, 31, 133)'}
            loading={this.state.loading}
          />
        </div>
        <div className="mt-5 mb-5">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <ul className="timeline">
                {
                  this.listItemsOrdering(this.state.posts).map((post, i) =>
                    <Router key={i}>
                      <li>
                        <div className="row">
                          <h4 className="col-md-10 display-4 font-italic margin-top--10" dangerouslySetInnerHTML={{ __html: post.title }} />
                          <div className="col-md-2">
                            <button
                              className=" margin-top--8 btn btn-dark"
                              onClick={() => this.setState({ id: post.id })}
                              dangerouslySetInnerHTML={{
                                __html: new Date(Date.parse(post.creationDate)).toLocaleDateString()
                              }}
                            />
                          </div>
                        </div>
                        <br />
                        <p
                          className="lead"
                          dangerouslySetInnerHTML={{
                            __html: post.content.substring(0, 200) + "..."
                          }}
                        />
                        <button
                          className="lire font-weight-bold btn margin-left--11"
                          onClick={() => this.setState({ id: post.id })}>
                          {process.env.REACT_APP_CONTINUEZ_LIRE}
                        </button>
                      </li>
                      <Route path="/post/:id" component={Post} />
                    </Router>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default withRouter(Posts);