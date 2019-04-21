// BASIC
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// CMPS
import MovesList from '../cmps/MovesList';

// SERVISES
import UserService from '../services/UserService';

class UserDetailsPage extends Component {
  state = {
    currUser: null,
  }
  async componentDidMount() {
    this.setState({ currUser: await UserService.getUser() })
  }
  render() {
    return (
      <div>
        <h4>User Details Page</h4>

        {this.state.currUser &&
          <div>
            <div>{this.state.currUser.userName}</div>
            <div>{this.state.currUser.coins}</div>
            <div>{this.state.currUser.coins < 0 &&
              <div>
                <label >We've noticed that you're in a negative account.</label><br />
                <label >We wanted to offer you an affordable loan from the gray market</label>
              </div>
            }</div>
            <div>
              <MovesList moves={this.state.currUser.moves}
                title={`${this.state.currUser.userName} - All Transactions`} />
            </div>
          </div>
        }

        {!this.state.currUser &&
          <div>
            <div>Guest</div>
            <div>0 Coins</div>
            <div>No Moves</div>
          </div>
        }

      </div>
    )
  }
}

export default withRouter(UserDetailsPage)
