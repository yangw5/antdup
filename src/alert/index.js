/*
 * File: Alert.js
 * desc: 弹层提示框组件
 * File Created: Wednesday, 19th September 2018 3:37:15 pm
 * Author: chenghao
 * ======
 * Copyright 2018 - present, karakal
 */
import React, { Component, Fragment } from "react";
import Modal from "../Modal";
import "./index.less";

let alertInstance;

class Alert extends Component {
  static defaultProps = {
    cancelText: "取消",
    confirmText: "确认",
    btnText: "知道了"
  };
  componentWillUnmount() {
    alertInstance = null;
  }
  _success = () => (
    <div className="alert__icon alert__icon--success">
      <div className="alert__icon--success__line alert__icon--success__line--long" />
      <div className="alert__icon--success__line alert__icon--success__line--tip" />
      <div className="alert__icon--success__ring" />
      <div className="alert__icon--success__hide--corners" />
    </div>
  );
  _warning = () => (
    <div className="alert__icon alert__icon--warning">
      <span className="alert__icon--warning__body">
        <span className="alert__icon--warning__dot"></span>
      </span>
    </div>
  );
  _error = () => (
    <div className="alert__icon alert__icon--error">
      <span className="alert__icon--error__mark">
        <span className="alert__icon--error__line alert__icon--error__line--left"></span>
        <span className="alert__icon--error__line alert__icon--error__line--right"></span>
      </span>
    </div>
  );
  _close = () => {
    const { onCancel } = this.props;
    onCancel && onCancel();
    alertInstance.destroy();
  };
  _confirm = () => {
    const { onOk } = this.props;
    onOk && onOk();
    alertInstance.destroy();
  };
  render() {
    const {
      title,
      text,
      success,
      warning,
      error,
      confirm,
      cancelText,
      confirmText,
      btnText,
      noIcon
    } = this.props;
    return (
      <div className="alert__overlay alert__overlay--show">
        <div className="alert__modal">
          {!noIcon && (
            <div>
              {success && this._success()}
              {(warning || confirm) && this._warning()}
              {error && this._error()}
            </div>
          )}
          <div className="alert__title">{title}</div>
          <div className="alert__text">{text}</div>
          <div className="alert__button__container">
            {!confirm && (
              <div className="alert__button" onClick={this._confirm}>
                {btnText}
              </div>
            )}
            {confirm && (
              <Fragment>
                <div className="alert__button--confirm" onClick={this._close}>
                  {cancelText}
                </div>
                <div style={{ flex: 1 }}></div>
                <div className="alert__button--confirm" onClick={this._confirm}>
                  {confirmText}
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const newAlert = props => {
  alertInstance = new Modal();
  alertInstance.show(<Alert {...{ ...props }} />);
};

const _alert = {
  success: function({ title, text, duration = 2000, onOk, ...rest }) {
    alertInstance = new Modal();
    alertInstance.show(<Alert {...{ title, text, onOk, ...rest }} success />);

    if (duration === 0) return;

    let timer = setTimeout(() => {
      alertInstance && alertInstance.destroy();
      clearTimeout(timer);
    }, duration);
  },
  error: function(props) {
    newAlert({ ...props, error: true });
  },
  warning: function(props) {
    newAlert({ ...props, warning: true });
  },
  confirm: function(props) {
    newAlert({ ...props, confirm: true });
  },
  destroy: function() {
    alertInstance.destroy();
    alertInstance = null;
  }
};
_alert.warn = _alert.warning;

export default _alert;
