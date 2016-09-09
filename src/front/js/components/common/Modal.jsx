'use strict';
import React from 'react';

const Modal = ({children, toggle, title}) => {
  return (
    <div>
      <div className="modal fade d-block in" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" onClick={toggle} className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">{title}</h4>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade in" onClick={toggle}></div>
    </div>
  );
};

Modal.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
  toggle: React.PropTypes.func
};

export default Modal;
