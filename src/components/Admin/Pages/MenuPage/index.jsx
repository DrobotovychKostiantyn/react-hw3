import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import queryString from 'query-string';
import * as api from '../../../services/api';

import Options from '../../Options/index';
import BtnClear from '../../BtnClear/index';
import Menu from '../../Menu/index';

export default class MenuPage extends Component {
  state = {
    listMenu: [],
    categories: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const currentCategory = queryString.parse(this.props.location.search)
      .category;
    this.setState({ isLoading: true });
    api
      .getCategories()
      .then(categories => this.setState({ categories }))
      .catch(error => this.setState({ error, isLoading: false }));

    if (!currentCategory) {
      api
        .getAllMenuItems()
        .then(menu => this.setState({ listMenu: menu, isLoading: false }));
      return;
    }

    api
      .getMenuItemsWithCategory(currentCategory)
      .then(menu => this.setState({ listMenu: menu, isLoading: false }));
  }

  componentDidUpdate(prevProps) {
    const prev = queryString.parse(prevProps.location.search).category;
    const next = queryString.parse(this.props.location.search).category;

    if (prev === next) return;
    api.getMenuItemsWithCategory(next).then(menu => {
      this.setState({ isLoading: true });
      this.setState({ listMenu: menu, isLoading: false });
    });

    if (next === undefined) {
      api.getAllMenuItems().then(menu => {
        this.setState({ isLoading: true });
        this.setState({ listMenu: menu, isLoading: false });
      });
    }
  }

  handleClearBtn = () => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: ``,
    });
  };

  handleOptionChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { listMenu, categories, error, isLoading } = this.state;
    const currentValue = queryString.parse(this.props.location.search).category;

    return (
      <div>
        <h2>MenuPage</h2>
        <NavLink to={`${this.props.match.path}/add`}>Add new Dish</NavLink>
        <hr />
        <Options
          categories={categories}
          value={queryString.parse(this.props.location.search).category}
          handleOptionChange={this.handleOptionChange}
        />
        {currentValue && (
          <BtnClear value={currentValue} handleClearBtn={this.handleClearBtn} />
        )}
        {error && <h2>You have a problem. Try again!</h2>}
        {isLoading && <p>Loading....</p>}
        <Menu list={listMenu} />
      </div>
    );
  }
}
