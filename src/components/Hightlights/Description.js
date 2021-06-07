import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import CollapsibleTable from './Dataform';

class Description extends Component {
    state={
      loading: true,
      contacts: 0,
    };

    async componentDidMount() {
      const url = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ contacts: data, loading: false });
    }

    render() {
      return (
        <Fade>
          <div className="center_wrapper">
            <h2>DETAILS</h2>
          </div>
          <div className="highlight_description">

            {this.state.loading
              ? (<div data-testid="loading">loading...</div>)
              : (<CollapsibleTable Rows={this.state.contacts} data-testid="showdata" />)}
          </div>
        </Fade>

      );
    }
}
export default Description;
