import React from 'react';
import {connect} from 'react-redux'
import { List, ListItem, ListItemText, Link} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
  }
}));

function ListPosts(props) {
  const classes = useStyles();

console.log(props.items)
  return (
    <List className={classes.root}>
      {props.items.map((post, i) =>
        <ListItem key={i}>
          <Link href={'https://reddit.com' + post.permalink}>
            <ListItemText primary={post.title} secondary={post.selftext} />
          </Link>
        </ListItem>
      )}
    </ List>
  );
}

const mapStateToProps = state => {
  const { items} = state.posts
  return {
    items
  }
}

export default connect(mapStateToProps)(ListPosts)
