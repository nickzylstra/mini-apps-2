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
    this.handlePageClick = this.handlePageClick.bind(this);
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
    const pageCountSearch = link.match(/(next|prev).*page=(\d+).*last/);
    const pageCount = pageCountSearch ? parseInt(pageCountSearch[2], 10) : 1;
    this.setState({ events: res.data, pageCount });
  }

  async searchEvents(query) {
    this.setState({ query }, () => this.getEvents());
  }

  handlePageClick({ selected }) {
    this.setState({ page: selected + 1 }, () => this.getEvents());
  }

  render() {
    const {
      events, query, pageCount,
    } = this.state;
    return (
      <>
        <div className="container">
          <Search query={query} searchEvents={this.searchEvents} />
        </div>
        <div className="container">
          <div id="react-paginate">
            <ReactPaginate
              previousLabel="previous"
              nextLabel="next"
              breakLabel="..."
              breakClassName="break-me"
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName="pagination"
              subContainerClassName="page-item page-link"
              activeClassName="active"
            />
          </div>
        </div>
        <div className="container">
          <Events events={events} />
        </div>
      </>
    );
  }
}

export default App;
