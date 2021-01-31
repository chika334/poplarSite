import React from 'react';
import Charts from './Chart'
import { useSelector } from "react-redux";
import {
  Container,
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import people1 from '../../../assets/images/stock-photos/people-2.jpg';

export default function LivePreviewExample() {
  const authUser = useSelector((state) => state.authUser);

  const user = authUser.user === null ? "" : authUser.user.user
  return (
    <>
      <PerfectScrollbar>
        <div className="card-header rounded-0 bg-white px-5 py-4 border-bottom">
          <Container className="d-block text-center py-3 text-sm-left d-sm-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center mb-3 mb-sm-0">
              <div className="avatar-icon-wrapper d-50 mr-3">
                <div className="avatar-icon d-50 shadow-none rounded-circle">
                  <img alt="..." src={people1} />
                </div>
                <div className="badge badge-success badge-position badge-position--bottom-center badge-circle-inner">
                  Online
                </div>
              </div>

              <div className="font-weight-bold">
                <div className="font-size-lg">{user.fullName}</div>
              </div>
            </div>
          </Container>
        </div>
        <div className="pt-4 pb-4">
          <Charts />
        </div>
      </PerfectScrollbar>
    </>
  );
}
