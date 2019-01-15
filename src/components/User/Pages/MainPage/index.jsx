import React, { Component } from 'react';

import SignIn from '../../Sign-in/index';
import SignUp from '../../Sign-up/index';
import NodeEditor from '../../NoteEditor/index';
import NodeList from '../../NodeList/index';
import Modal from '../../Modal/index';
import Loading from '../../Loading/index';

class MainPage extends Component {
  state = {
    isModalOpen: false,
    isModalLoading: false,
    notes: [],
  };

  handleOpenModal = () => {
    this.setState({
      isModalLoading: true,
    });
    this.setState({
      isModalLoading: false,
      isModalOpen: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleSubmitNodeEditor = (text, rate) => {
    this.setState(prevState => ({
      notes: [{ id: Date.now(), text, rate }, ...prevState.notes],
    }));
  };

  handleInputValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { isModalOpen, isModalLoading, notes } = this.state;

    return (
      <div>
        <div>
          <hr />
          <SignIn />
          <SignUp />
          <hr />
          <NodeEditor onSubmit={this.handleSubmitNodeEditor} />
          <NodeList notes={notes} />
        </div>

        <hr />
        <button type="button" onClick={this.handleOpenModal}>
          Open Modal
        </button>

        {isModalOpen && (
          <Modal handleCloseClick={this.handleCloseModal}>
            <div>
              <p>Fusce egestas elit eget lorem</p>
            </div>
          </Modal>
        )}

        {isModalLoading && <Loading />}
      </div>
    );
  }
}

export default MainPage;
