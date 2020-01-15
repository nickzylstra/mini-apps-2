import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import Events from './Events.jsx';

const host = 'http://localhost:3000';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      query: '',
    };

    this.getEvents = this.getEvents.bind(this);
    this.searchEvents = this.searchEvents.bind(this);
  }

  async componentDidMount() {
    this.getEvents();
  }

  async getEvents(query, page = 1, limit = 10) {
    const res = await axios.get(`${host}/events`, {
      params: {
        _page: page,
        _limit: limit,
        q: query,
      },
    });

    this.setState({ events: res.data });
  }

  async searchEvents(query) {
    this.setState({ query }, () => {
      // eslint-disable-next-line no-shadow
      const { query } = this.state;
      this.getEvents(query);
    });
  }

  render() {
    const { events, query } = this.state;
    return (
      <>
        <Search query={query} searchEvents={this.searchEvents} />
        <Events events={events} />
      </>
    );
  }
}

export default App;
