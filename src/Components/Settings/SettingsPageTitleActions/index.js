import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';

import { NavLink } from 'react-router-dom';

const SettingsPageTitleActions = () => {
  return (
    <>
      <Button
        component={NavLink}
        to="/Overview"
        size="large"
        className="font-weight-bold btn-primary">
        <span className="btn-wrapper--icon">
          <FontAwesomeIcon icon={['far', 'comment-dots']} />
        </span>
        <span className="btn-wrapper--label">Chat Window</span>
      </Button>
    </>
  );
};

export default SettingsPageTitleActions;
