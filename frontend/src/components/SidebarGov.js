import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';



export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/profileGovPageTest">
        Profile
      </a>
      <a className="menu-item" href="/Feed">
        Feed
      </a>
      <a className="menu-item" href="/pollTest">
        My Polls
      </a>
      <a className="menu-item" href="/createPollTest">
        Create a Poll
      </a>
    </Menu>
  );
};