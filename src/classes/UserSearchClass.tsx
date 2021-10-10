import React, { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}
class UserSearchClass extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  // onSearch = () => {
  //   const foundUser = this.props.users.find((user) => {
  //     return user.name === this.state.name;
  //   });

  //   // console.log('foundUser', foundUser);
  //   this.setState({ user: foundUser });
  // }

  onSearch() {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    // console.log('foundUser', foundUser);
    this.setState({ user: foundUser });
  }

  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h3>User Search</h3>
        <input
          value={name}
          // value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onSearch}>Find</button>
        <div>
          <p>
            {/* {this.state.user && this.state.user.name} &nbsp;
            {this.state.user && this.state.user.age} */}
            {user && user.name} &nbsp;
            {user && user.age}
          </p>
        </div>
      </div>
    );
  }
}

export default UserSearchClass;
