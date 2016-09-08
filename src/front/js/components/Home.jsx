import React from 'react';
export default class Home extends React.Component {

  render() {
    const {children} = this.props;
    return (
      <div className="text-xs-center">
        <h1>استاد</h1>
        {children}
      </div>
    );
  }
}
