import React, { Component } from "react";
import Filter from "./Filter";
import User from "./User";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: "",
      filterText: "",
      count: this.props.users.length,
    };
  }

  onChange = (text) => {
    this.setState({
      filterText: text,
    });

    const filtersUsers = this.filter(text);
    const count = filtersUsers.length;
    // console.log(filtersUsers);
    console.log(count);

    this.setState({
      users: filtersUsers,
      filterText: text,
      count: count,
    });
    console.log();
  };

  filter = (text) => this.props.users.filter(({ name }) => name.includes(text));

  render() {
    const users = this.state.users ? this.state.users : this.props.users;
    // console.log(this.state);

    return (
      <div>
        {
          <div>
            <Filter
              onChange={this.onChange}
              filterText={this.state.filterText}
              count={this.state.count}
            />
            <ul>
              {users.map(({ name, age }, id) => (
                <User key={id} name={name} age={age} />
              ))}
            </ul>

            {/* <User /> */}
          </div>
        }
      </div>
    );
  }
}

export default UserList;
