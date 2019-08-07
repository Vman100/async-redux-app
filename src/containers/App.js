import React from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import Spiner from '../Spiner.js'
import ListPosts from '../ListPosts.js'

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPosts("ethereum"))
  }

  render() {
    
    const { isFetching, lastUpdated } = this.props
    return (
      <div>
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
        </p>
        {isFetching ? <Spiner/> :
          <ListPosts/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { isFetching, lastUpdated } = state.posts
  return {
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
