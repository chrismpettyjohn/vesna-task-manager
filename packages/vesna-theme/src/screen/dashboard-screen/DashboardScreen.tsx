import React from 'react';
import {UserGuard} from '@vesna-task-manager/web';

export function DashboardScreen() {
  return (
    <UserGuard>
      <div className="task-manager">
        <div className="left-bar">
          <div className="left-content">
            <h2
              style={{
                letterSpacing: 10,
                textTransform: 'uppercase',
                textAlign: 'center',
                marginTop: 0,
              }}
            >
              Vesna
            </h2>
            <ul className="action-list">
              <li className="item">
                <span>Inbox</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content">
          <div className="header">Today Tasks</div>
          <div className="content-categories">
            <div className="label-wrapper">
              <input className="nav-item" name="nav" type="radio" id="opt-1" />
              <label className="category" htmlFor="opt-1">
                All
              </label>
            </div>
            <div className="label-wrapper">
              <input
                className="nav-item"
                name="nav"
                type="radio"
                id="opt-2"
                checked
              />
              <label className="category" htmlFor="opt-2">
                Important
              </label>
            </div>
            <div className="label-wrapper">
              <input className="nav-item" name="nav" type="radio" id="opt-3" />
              <label className="category" htmlFor="opt-3">
                Notes
              </label>
            </div>
            <div className="label-wrapper">
              <input className="nav-item" name="nav" type="radio" id="opt-4" />
              <label className="category" htmlFor="opt-4">
                Links
              </label>
            </div>
          </div>
          <div className="tasks-wrapper">
            <div className="task">
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id="item-1"
                checked
              />
              <label htmlFor="item-1">
                <span className="label-text">
                  Dashboard Design Implementation
                </span>
              </label>
              <span className="tag approved">Approved</span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          width: '100%',
          height: 'fit-content',
          marginTop: 10,
        }}
      >
        <span
          style={{fontWeight: 'bold', fontSize: '1.4rem', letterSpacing: 3}}
        >
          Impending Success LLC
        </span>
      </div>
    </UserGuard>
  );
}
