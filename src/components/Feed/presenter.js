//부모 component <App>
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Loading from 'components/Loading';
import FeedPhoto from 'components/FeedPhoto';

const Feed = props => {
  if (props.loading) {
    return <LoadingFeed />
  } else if (props.feed) {
    return <RenderFeed {...props} /> ;
  }
};


const LoadingFeed = props => (
  <div>
    <Loading />
  </div>
);

const RenderFeed = props => (
  <div>
    {_.map(props.feed, photo => <FeedPhoto {...photo} key={photo.uid} />)}
  </div>
);
Feed.propTypes = {
  loading: PropTypes.bool.isRequired
}
export default Feed;