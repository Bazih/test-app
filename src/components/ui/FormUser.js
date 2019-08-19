import React from "react";

class FormUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      gender: ""
    };
  }

  handleChange = event => {
    if (event.target.name === "firstName")
      this.setState({ firstName: event.target.value });
    if (event.target.name === "lastName")
      this.setState({ lastName: event.target.value });
    if (event.target.name === "phone")
      this.setState({ phone: event.target.value });
    if (event.target.name === "email")
      this.setState({ email: event.target.value });
    if (event.target.name === "gender")
      this.setState({ gender: event.target.value });
  };

  handleSubmit = event => {
    this.props.addData({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      gender: this.state.gender
    });

    this.setState({ firstName: "", lastName: "", phone: "", email: "", gender: "male" });
    event.preventDefault();
  };

  render() {
    return (
      <div className="text-center">
        <form  className="user-add-form" onSubmit={this.handleSubmit}>
          <h3>Создать нового пользователя</h3>
          <label>
            Имя:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Фамилия:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Телефон:
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Пол:
            <select value={this.state.gender} name="gender" onChange={this.handleChange}>
              <option value="male">мужской</option>
              <option value="female">женский</option>
            </select>
          </label>

          <input type="submit" value="Добавить" />
        </form>
      </div>
    )
  }
}

export default FormUser;
