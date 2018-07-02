import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
//import { Input } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'
import  LoginForm  from './LoginForm'
import  SignUpForm  from './SignUpForm'
import  API  from '../utilities/API'

class ModalExampleCloseConfig extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { open: false,
      username: "",
      password: "", 
      signUpFname: "",
      signUpLname: "",
      signUpEmail: "",
      signUpCell: "",
      SignupPW: "",
      SignupRole: "",
      signUpfile: "",
      showLogin: "" // show=true show login form else show signup
    };
    this.handleOninputTextChange = this.handleOninputTextChange.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.PickForm = this.PickForm.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signup = this.signup.bind(this);
    console.log("ModalExampleCloseConfig props", props);
    console.log("ModalExampleCloseConfig context",context);
  }
 
  handleOninputTextChange(event, data) {
    // console.log("ModalExampleCloseConfig.handleOninputTextChange.event", event.target);
    // console.log("ModalExampleCloseConfig.handleOninputTextChange.data", data);
    let { name, value } = event.target;
    if (!name){
       name = data.name;
       value = data.value;
    }
    console.log("ModalExampleCloseConfig.handleOninputTextChange:", [name], value);
   
      this.setState({
        [name]: value
      });
  }

  fileChangedHandler = (event) => {
    this.setState({signUpfile: event.target.files[0]})
    console.log("ModalExampleCloseConfig.fileChangedHandler:", event.target.name, event.target.files[0].name);

  }

  closeConfigShow = (closeOnEscape, closeOnRootNodeClick, showLogin) => () => {
    if (!this.props.logState){
      this.setState({ closeOnEscape, closeOnRootNodeClick, showLogin: showLogin, open: true });
  } else {
      this.setState({ closeOnEscape, closeOnRootNodeClick, showLogin: showLogin,  open: false });
      //this.props.passHandler();
      this.logout();
    }

  }

  close = () => this.setState({ open: false })

  createClose = () => {
      // this.props.passHandler();
      this.setState({ open: false });
      // const retval = API.loginAPI(this.state.username, this.state.password );
      console.log("createClose showLogin", this.state.showLogin);
      let retval = "";
      if (this.state.showLogin) {
        retval = this.login(this.state.username, this.state.password );
      } else {
        retval = this.signup(this.state);
        // retval = { // dummy stub values
        //   logon_id: "shaun",
        //   firstName: "Shaun",
        //   lastName: "T",
        //   role: "host",
        //   photo: ""
        // };
        // this.props.passHandler(retval); // STUB until formData is figured out for signup
      }
      console.log("createClose retval", retval);

  };

  login = (username, password ) => {
    const params = {
      logon_id: username,
      logon_pwd: password
    };
      API.userLogin(params)
        .then((result) => {
          console.log("login API results:", result.data);
          this.props.passHandler(result.data)})
        .catch(err => console.log(err))
    };

    logout = ( ) => {
          API.userLogout()
          .then((result) => {
            console.log("logout API results:", result.data);
            this.props.passHandler(result.data)})
          .catch(err => console.log(err))
      };

    signup = (state) => {
      console.log("signup state:", state);
      const username = state.username, 
      password = state.password,
      signUpCell = state.signUpCell, 
      SignupRole = state.SignupRole,
       signUpFname = state.signUpFname,
       signUpLname = state.signUpLname,
       email = state.signUpEmail,
       signUpfile = state.signUpfile;

      const formData = new FormData();
       formData.append('logonId', username);
       formData.append('password', password);
       formData.append('role', SignupRole);
       formData.append('fstNam', signUpFname);
       formData.append('lstNam', signUpLname);
       formData.append('email', email);
       formData.append('cell', signUpCell);
       formData.append('createdBy', username);
       if (signUpfile)
       {
        console.log("signup formData added <photo>");
        formData.append("photo", signUpfile, signUpfile.name);
       }

        // const formData = new FormData();
        // formData.append('logonId', state.username);
        // formData.append('password', state.password);
        // formData.append('cell', state.signUpCell);
        // formData.append('role', state.SignupRole);
        // formData.append('fstNam', state.signUpFname);
        // formData.append('lstNam', state.signUpLname);
        // formData.append('createdBy', state.username);
        //var options = { content: formData };
        console.log("signup formData:", formData);
        // Display the key/value pairs
for(var pair of formData.entries()) {
  console.log(pair[0] + ', '+  pair[1]          ); 
}
        //formData.append('signUpfile', new Blob(['test payload'], { type: 'text/csv' }));
        API.userSignup(formData)
        .then((result) => {
          console.log("signup results:", result.data);
          this.props.passHandler(result.data)})
        .catch(err => console.log(err))
    };

  PickForm = () => {
    
    if (this.state.showLogin)
    return (
      <LoginForm  textHandler={this.handleOninputTextChange} />
    );
    return(
      <SignUpForm textHandler={this.handleOninputTextChange} fileHandler={this.fileChangedHandler} />
    );
  };

  switchForm = () => {
    this.setState({
      showLogin: !this.state.showLogin,
      username: "",
      password: "", 
      signUpFname: "",
      signUpLname: "",
      signUpEmail: "",
      signUpCell: "",
      SignupPW: "",
      SignupRole: "",
      signUpfile: "",
    })
  };

  render(props) {
    const { open, closeOnEscape, closeOnRootNodeClick } = this.state
    console.log("ModalExampleCloseConfig.render",this.state);
    console.log("ModalExampleCloseConfig.render",this.props);

    return (
      <div>
        {/* <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button> */}
        <Button inverted onClick={this.closeConfigShow(true, false, true)}>{this.props.btnMsg}</Button>
        <Button inverted style={this.props.logState ?{display:'none'}:{ marginLeft: '0.5em' }} onClick={this.closeConfigShow(true, false, false)}>Sign Up</Button>
        {/* <Button as='a' inverted={!fixed} primary={fixed} style={this.state.in ?{display:'none'}:{ marginLeft: '0.5em' }}> */}

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnRootNodeClick={closeOnRootNodeClick}
        >
          <Modal.Header>{this.state.showLogin?"Log into Your Account":"Create account"}</Modal.Header>
          <Modal.Content>
            {/* <p>Your ticket to good health</p> */}
           
            {/* <LoginForm style={this.state.showLogin?{ marginLeft: '0em' }:{display:'none'}} usernameHandler={this.handleOninputTextChange} passwordHandler={this.handleOninputTextChange} />
            
   
            <SignUpForm style={this.state.showLogin?{display:'none'}:{ marginLeft: '0em' }} /> */}
 {/* <LoginForm  textHandler={this.handleOninputTextChange}  /> */}
            {/* <PickForm showLogin={this.state.showLogin} textHandler={this.handleOninputTextChange} /> */}
            {this.PickForm()}
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.switchForm}>{this.state.showLogin ? "Switch to Sign Up" : "Switch to Log In"}</Button>
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

export default ModalExampleCloseConfig
