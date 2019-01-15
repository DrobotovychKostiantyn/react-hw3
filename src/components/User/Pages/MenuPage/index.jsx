import React, { Component } from 'react';
import * as api from '../../../services/api';

import Menu from '../../../Menu/index';
import FilterMenu from '../../FilterMenu/index';

export default class MenuPage extends Component {
  state = {
    listMenu: [],
    filter: '',
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    api
      .getAllMenuItems()
      .then(menu => this.setState({ listMenu: menu, isLoading: false }));
  }

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  filterMenu = filter =>
    this.state.listMenu.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );

  render() {
    const { filter, error, isLoading } = this.state;

    const filteredMenu = this.filterMenu(filter);

    return (
      <div>
        <h2>MenuPage</h2>

        <FilterMenu
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <hr />
        {error && <h2>You have a problem. Try again!</h2>}
        {isLoading && <p>Loading....</p>}
        <Menu list={filteredMenu} />
      </div>
    );
  }
}
