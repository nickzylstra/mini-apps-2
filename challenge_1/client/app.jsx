import React, { Component } from 'react';
import axios from 'axios';

const host = 'http://localhost:3000';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  async componentDidMount() {
    this.getEvents();
  }

  async getEvents(page = 1, limit = 10) {
    const events = await axios.get(`${host}/events`, {
      _page: page,
      _limit: limit,
    });

    this.setState({ events });
  }

  render() {
    return (
      <>
        hi
      </>
    );
  }
}

export default App;
