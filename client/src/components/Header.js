import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import StripePayments from "./StripePayments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log In With Google</a>
          </li>
        );
      default:
        return [
          <li key="1" style={{ padding: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <StripePayments />
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
