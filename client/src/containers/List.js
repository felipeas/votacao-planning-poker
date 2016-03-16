import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Items } from '../components/Items';
import { AddItem } from '../components/AddItem';

/* actions */
import * as actionCreators from '../actions/items';

export class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <h1>
                Redux
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <h2>
                Boilerplate contains:
              </h2>
              <Items {...this.props} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <AddItem {...this.props} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}


function mapStateToProps(state) {
    return {
        Items: state.items,
    };
}

export default connect(mapStateToProps)(Items);
