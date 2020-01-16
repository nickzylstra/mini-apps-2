import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Search from './Search.jsx';
import Events from './Events.jsx';

const host = 'http://localhost:3000';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      query: '',
      page: 1,
      pageCount: 1,
      eventsPerPage: 10,
    };

    this.getEvents = this.getEvents.bind(this);
    this.searchEvents = this.searchEvents.bind(this);
  }

  async componentDidMount() {
    this.getEvents();
  }

  async getEvents() {
    const { page, eventsPerPage, query } = this.state;
    const res = await axios.get(`${host}/events`, {
      params: {
        _page: page,
        _limit: eventsPerPage,
        q: query,
      },
    });
    const { link } = res.headers;
    const pageCount = link ? parseInt(link.match(/next.*page=(\d+).*last/)[1], 10) : 1;
    this.setState({ events: res.data, pageCount });
  }

  async searchEvents(query) {
    this.setState({ query }, () => this.getEvents());
  }

  handlePageClick({ selected }) {
    this.setState({ page: selected }, () => this.getEvents);
  }

  render() {
    const {
      events, query, page, pageCount, eventsPerPage,
    } = this.state;
    return (
      <>
        <Search query={query} searchEvents={this.searchEvents} />
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={1}
          // pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
        <Events events={events} />
      </>
    );
  }
}

export default App;
