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
    this.props.history.push(
      {
        pathname: "/post/" + this.state.id,
        state: { id: this.state.id }
      }
    );
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
    const response = await fetch(
      process.env.REACT_APP_URL_PROXY_API + "/" +
      process.env.REACT_APP_URL_API + '/posts/ispublic/', {
      method: "GET",
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
            <div className="col-md-8 offset-md-2">
              <ul className="timeline">
                {
                  this.listItemsOrdering(this.state.posts).map((post, i) =>
                    <Router key={i}>
                      <li>
                        <h4 className="float-left display-4 font-italic margin-top--10" dangerouslySetInnerHTML={{ __html: post.title }} />
                        <button onClick={() => this.setState({ id: post.id })} className="float-right margin-top--8 btn btn-dark" dangerouslySetInnerHTML={{
                          __html: new Date
                            (Date.parse(post.creationDate)).toLocaleDateString()
                        }}
                        />
                        <br />
                        <p className="lead" dangerouslySetInnerHTML={{ __html: post.content.substring(0, 200) }} />
                        <button onClick={() => this.setState({ id: post.id })} className="lire font-weight-bold btn margin-left--11" dangerouslySetInnerHTML={{
                          __html: 'Continue lendo...'
                        }}
                        />
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