import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    props.onClose(false);
  };

  return (

    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(true)}
    >
      <List component="nav">

        <ListItem button onClick={() => scrollToElement('highlights')}>
          details
        </ListItem>

        <ListItem button data-testid="button-footer" onClick={() => scrollToElement('footer')}>
          footer
        </ListItem>

      </List>
    </Drawer>
  );
};

export default SideDrawer;
