import React, { } from 'react'
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Post from './post';
import './posts.scss';

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = { posts: [], id: undefined };
    this.onNavigatePost = this.onNavigatePost.bind(this)
  }


  onNavigatePost = () => {
    this.props.history.push("/post/" + this.state.id);
  }

  componentWillUnmount() {
    console.log("WillUnmount");
  }

  componentDidUpdate() {
    if (!isNaN(this.state.id)) this.onNavigatePost();
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ posts: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    var proxyUrl = 'https://cors-proxy-personnel.herokuapp.com/',
      targetUrl = 'https://back-personal.herokuapp.com/posts/';
    /*  proxyUrl = 'http://localhost:3001/';
    targetUrl = 'http://localhost:8080/posts/'; */ 
    const response = await fetch(proxyUrl + targetUrl, {
      method: "GET",
      /* mode: 'no-cors' */
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "Basic dXNlcjpwYXNzd29yZA==",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, x-requested-by",
        "Access-Control-Allow-Origin": "*"
      }
    })
    if (response.status !== 200) throw Error(await response.json().message);
    return await response.json();
  }

  /**
   * FIXME: Implementar filter apenas com posts de producao,
   *  apos nova versao de back-end.
   */
  listItemsFilter = (list) =>
    list.filter((post, i) => {
      return post.creationDate !== i.creationDate;
    });

  listItemsOrdering = (list) =>
    list.sort((post, i) => {
      return new Date(Date.parse(post.creationDate)).getTime() >
        new Date(Date.parse(i.creationDate)).getTime() ? -1 : 1;
    });



  render() {
    return (
      <main role="main" className="container">
        <div className="mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4>Nouvelles à propos de Diego</h4>
              <ul className="timeline">
                {
                  this.listItemsOrdering(this.state.posts).map((post, i) =>
                    <Router key={i}>
                      <li>
                        <button className="float-left btn btn-dark" onClick={() => this.setState({ id: post.id })}>
                          {post.title} </button>
                        <button onClick={() => this.setState({ id: post.id })} className="float-right btn btn-dark"> {new Date
                          (Date.parse(post.creationDate)).toLocaleDateString()}
                        </button>
                        <br />
                        <p>{post.content.substring(0, 200)}...</p>
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