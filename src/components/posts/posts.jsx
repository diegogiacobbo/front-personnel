import React, { } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Post from './post';
import './posts.scss';

class Posts extends React.Component {

  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ posts: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://back-personal.herokuapp.com/posts/'
    const response = await fetch(proxyUrl + targetUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": "Basic dXNlcjpwYXNzd29yZA=="
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

  listItems = (list) =>
    list.map(function (post, i) {
      return (

        <Router key={i}>
          <li>
            <a href="/post/" className="float-left">{post.title}</a>
            <Link to={"/post/{i}"} className="float-right"> {new Date
              (Date.parse(post.creationDate)).toLocaleDateString()}
            </Link>
            <br />
            <p>{post.content.substring(0, 200)}...</p>
          </li>
          <Route path="/post" component={Post} />
        </Router>
      )
    }
    );

  render() {
    return (
      <main role="main" className="container">
        <div className="mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4>Nouvelles à propos de Diego</h4>
              <ul className="timeline">
                {this.listItems(this.listItemsOrdering(this.state.posts))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Posts