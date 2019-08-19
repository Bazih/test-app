import React from 'react';
import FormUser from '../ui/FormUser';
import UsersList from '../ui/UsersList';
import data from '../../data/data.json';

class UsersContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    // Get data from API
    this.setState({ users: data })
  }

  addData = (obj) => {
    fetch('https://example.com/users', {
      method: 'POST',
      body: obj
    })
      .then(response => response.json())
      .then(response => {
        console.log('Успех:', JSON.stringify(response))
        // Обновление текущего состояния списка клиентов через setState или отправка запроса на весь список клиентов
      })
      .catch(error => console.error('Ошибка:', error));

    this.setState(prevState => ({
      users: [...prevState.users, obj]
    }))
  };

  updateData = (index, field, value) => {
    const obj = this.state.users[index];
    obj[field] = value;

    fetch(`https://example.com/users/${obj.id}`, {
      method: 'POST',
      body: obj
    })
      .then(response => response.json())
      .then(response => {
        console.log('Успех:', JSON.stringify(response))
        // Обновление конкретной записи клиента через setState или отправка запроса на весь список клиентов
      })
      .catch(error => console.error('Ошибка:', error));

    this.setState(prevState => {
      prevState.users[index][field] = value;
      return [...prevState.users];
    });
  };

  render() {
    return (
      <div>
        <FormUser addData={this.addData} />
        <UsersList updateData={this.updateData} users={this.state.users} />
      </div>
    )
  }
}

export default UsersContainer;
