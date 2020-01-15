import React, { Component } from 'react';
import axios from 'axios';
import Events from './Events.jsx';

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
    const res = await axios.get(`${host}/events`, {
      params: {
        _page: page,
        _limit: limit,
      },
    });

    this.setState({ events: res.data });
  }

  render() {
    const { events } = this.state;
    return (
      <Events events={events} />
    );
  }
}

export default App;
