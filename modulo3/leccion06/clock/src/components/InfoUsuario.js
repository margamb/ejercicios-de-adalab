import React from 'react';

class InfoUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthDate: {
        day: 10,
        month: 'diciembre',
        year: 1895,
      },
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value,
    });
  }
  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  handleDayChange(event) {
    this.setState((prevState) => {
      return {
        birthDate: {
          ...prevState.birthDate,
          day: event.target.value,
        },
      };
    });
  }

  handleMonthChange(event) {
    this.setState((prevState) => {
      return {
        birthDate: {
          ...prevState.birthDate,
          month: event.target.value,
        },
      };
    });
  }

  handleYearChange(event) {
    this.setState((prevState) => {
      return {
        birthDate: {
          ...prevState.birthDate,
          year: event.target.value,
        },
      };
    });
  }

  render() {
    return (
      <>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="firstName"
              defaultValue={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
            LastName:
            <input
              type="text"
              name="lastname"
              defaultValue={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
            Day:
            <input
              type="text"
              name="day"
              defaultValue={this.state.birthDate.day}
              onChange={this.handleDayChange}
            />
            Month:
            <input
              type="text"
              name="month"
              defaultValue={this.state.birthDate.month}
              onChange={this.handleMonthChange}
            />
            Year:
            <input
              type="text"
              name="year"
              defaultValue={this.state.birthDate.year}
              onChange={this.handleYearChange}
            />
          </label>
          <p>{this.state.firstName}</p>
          <p>{this.state.lastName}</p>
          <p>{this.state.birthDate.day}</p>
          <p>{this.state.birthDate.month}</p>
          <p>{this.state.birthDate.year}</p>
        </form>
      </>
    );
  }
}

export default InfoUsuario;
