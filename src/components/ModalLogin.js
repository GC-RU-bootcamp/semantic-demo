import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'

class ModalExampleCloseConfig extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { open: false };

    console.log("props", props);
    console.log("context",context);
  }
  closeConfigShow = (closeOnEscape, closeOnRootNodeClick) => () => {
    this.setState({ closeOnEscape, closeOnRootNodeClick, open: true })
  }

  close = () => this.setState({ open: false })
  createClose = () => {
      this.props.passHandler();
      this.setState({ open: false });
  }

  render(props) {
    const { open, closeOnEscape, closeOnRootNodeClick } = this.state
    console.log(this.state);
    console.log(props);

    return (
      <div>
        {/* <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button> */}
        <Button inverted onClick={this.closeConfigShow(true, false)}>{this.props.btnMsg}</Button>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnRootNodeClick={closeOnRootNodeClick}
        >
          <Modal.Header>Log into Your Account</Modal.Header>
          <Modal.Content>
            <p>Your ticket to good health</p>
            <Form>
    <Form.Field>
      <label>login name</label>
      <input placeholder='log in name' name="login" />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' type="password" name="password" />
    </Form.Field> 
    </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative  color='red' inverted>
              Cancel
            </Button>
            <Button
              onClick={this.createClose}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Continue'
            />
          </Modal.Actions>
          
        </Modal>
      </div>
    )
  }
}

{/* <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions> */}

export default ModalExampleCloseConfig
