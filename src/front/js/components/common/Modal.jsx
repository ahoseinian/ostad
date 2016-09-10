'use strict';
import React from 'react';
import Button from '../common/buttons/button.jsx';
import classNames from 'classnames';

const Modal = ({children, toggle, title, sm}) => {
  const cNames = classNames('modal-dialog', {'modal-sm': sm});
  return (
    <div>
      <div className="modal fade d-block in" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className={cNames} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="pull-xs-right">
                <Button type="outline-info" onClick={toggle} icon="close" size="sm"/>
              </div>
              <h4 className="modal-title">{title}</h4>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              <Button type="outline-info" text="خروج" onClick={toggle} icon="close"/>
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
  toggle: React.PropTypes.func,
  sm: React.PropTypes.bool
};

export default Modal;
