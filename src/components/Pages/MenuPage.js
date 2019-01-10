import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import queryString from 'query-string';
import * as api from '../services/api';

import Options from '../Options/index';
import BtnClear from '../BtnClear/index';
import Menu from '../Menu/index';

export default class MenuPage extends Component {
  state = {
    listMenu: [],
    categories: [],
  };

  componentDidMount() {
    const currentCategory = queryString.parse(this.props.location.search)
      .category;
    // console.log(currentCategory);
    api.getCategories().then(categories => this.setState({ categories }));

    if (!currentCategory) {
      api.getAllMenuItems().then(menu => this.setState({ listMenu: menu }));
      return;
    }

    api
      .getMenuItemsWithCategory(currentCategory)
      .then(menu => this.setState({ listMenu: menu }));
  }

  componentDidUpdate(prevProps) {
    const prev = queryString.parse(prevProps.location.search).category;
    const next = queryString.parse(this.props.location.search).category;

    // console.log(prev, 'prev');
    // console.log(next, 'next');

    if (prev === next) return;
    api
      .getMenuItemsWithCategory(next)
      .then(menu => this.setState({ listMenu: menu }));

    if (next === undefined) {
      api.getAllMenuItems().then(menu => this.setState({ listMenu: menu }));
      console.log('undefined');
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
    const { listMenu, categories } = this.state;
    const currentValue = queryString.parse(this.props.location.search).category;
    // console.log(currentValue);

    return (
      <div>
        <h2>MenuPage</h2>
        <NavLink to="/menu/add">Add new Dish</NavLink>
        <hr />
        <Options
          categories={categories}
          value={queryString.parse(this.props.location.search).category}
          handleOptionChange={this.handleOptionChange}
        />
        {currentValue && (
          <BtnClear value={currentValue} handleClearBtn={this.handleClearBtn} />
        )}
        <Menu list={listMenu} />
      </div>
    );
  }
}
