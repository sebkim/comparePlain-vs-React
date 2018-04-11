import React, { Component } from 'react';
import web3 from './ethereum/web3';
import number from './ethereum/number';
import { Form, Input, Message, Button, Card } from 'semantic-ui-react';
import {Link} from 'react-router';
var stringify = require("json-stringify-pretty-compact")
const addresses = require('./ethereum/addresses');


class Main extends Component {
  state = {
    curNum: "",
    setnumVal: "",
    setnumLoading: false,
    account: ""
  }
  async componentWillMount()  {
    const accounts = await web3.eth.getAccounts();
    this.setState({account: accounts[0]});
  }

  onClickGetNum = async () => {
    const num = await number.methods.getNum().call()
    this.setState({curNum: num});
  }
  onSubmitSetNum = async e => {
    e.preventDefault();
    this.setState({setnumLoading: true});
    await number.methods.setNum(this.state.setnumVal).send({
      from: this.state.account
    });
    this.setState({setnumLoading: false});
  }

  render() {
    return (
      <div>
        <p>Account: {this.state.account}</p>
        <div>
          <h3>GetNum</h3>
          <Button primary onClick={this.onClickGetNum}>GetNum</Button>
          <p>{this.state.curNum}</p>
        </div>
        <br />
        <div>
          <h3>SetNum</h3>
          <Form onSubmit={this.onSubmitSetNum}>
            <Form.Field>
              <label>Number</label>
              <Input
                value={this.state.setnumVal}
                onChange={e => this.setState({setnumVal: e.target.value})}
              />
            </Form.Field>
            <Button primary loading={this.state.setnumLoading}>SetNum</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Main;
