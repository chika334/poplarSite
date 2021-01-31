import React, { useState } from 'react';
import clsx from 'clsx';

import { Button } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverviewMainWindow from '../../Components/Overview/OverviewMainWindow';
import OverviewSidebar from '../../Components/Overview/OverviewSidebar';
export default function Overview() {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);
  return (
    <>
      <div className="app-inner-content-layout app-inner-content-layout-fixed">
        <div className="btn-md-pane d-lg-none px-4 order-0">
          <Button
            onClick={toggleSidebarMenu}
            size="small"
            className="btn-primary p-0 btn-icon d-40">
            <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
          </Button>
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar bg-white app-inner-content-layout--sidebar__xxl order-1',
            { 'layout-sidebar-open': isSidebarMenuOpen }
          )}>
          <OverviewSidebar />
        </div>
        <div className="app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary">
          <OverviewMainWindow />
        </div>

        <div
          onClick={toggleSidebarMenu}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen
          })}
        />
      </div>
    </>
  );
}
