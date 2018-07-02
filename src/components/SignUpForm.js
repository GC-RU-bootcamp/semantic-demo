import React, { 
  Component} from 'react'
//import { Button, Modal } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'
import { 
  //Checkbox, 
 // Radio, 
  Select, 
  //TextArea 
} from 'semantic-ui-react'


const options = [
  { key: 'm', text: 'Member', value: 'client' },
  { key: 't', text: 'Trainer', value: 'host' },
];


class SignUpForm extends Component {
  constructor(props, context) {
    super(props, context); 
    this.state = { };

    console.log("SignUpForm state", this.state);
    console.log("SignUpForm props", props);
    console.log("SignUpForm context", context);
  }

  render(props) {
    // console.log("SignUpForm state", this.state);
    // console.log("SignUpForm props", this.props);
    
  
    return (
      <div>
    
            <Form>
              {/* <p>Your ticket to good health</p> */}
              <Form.Field placeholder='First name' control={Input} label='First name' name="signUpFname" onChange={this.props.textHandler} />
              
            {/*}  <Form.Field>
                <label>First name</label>
                <input placeholder='First name' name="signUpFnameXXX" onChange={this.props.textHandler}/>
              </Form.Field>
    */}
              <Form.Field>
                <label>Last name</label>
                <input placeholder='last name' name="signUpLname" onChange={this.props.textHandler}/>
              </Form.Field>

              <Form.Field>
                <label>Logon ID</label>
                <input placeholder='Username' name="username" onChange={this.props.textHandler}/>
              </Form.Field>

              <Form.Field>
                <label>Email address</label>
                <input placeholder='Email' name="signUpEmail" onChange={this.props.textHandler}/>
              </Form.Field>


              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" name="password"  onChange={this.props.textHandler} />
              </Form.Field> 

              <Form.Field>
                <label>Confirm Password</label>
                <input placeholder='Password' type="password" name="SignupPW"  onChange={this.props.textHandler} />
              </Form.Field> 
            {/*}  <Form.Field>
                <label>Role</label>
                <div>
                  <Input list='SignupRole' placeholder='Role?' name="SignupRoleXXX" onChange={this.props.textHandler}/>
                  <datalist id='SignupRole'>
                    <option value='Client' />
                    <option value='Trainer' />
                  </datalist>
                </div>
              </Form.Field>*/}

              <Form.Field control={Select} label='Role?' options={options} placeholder='Role?' name="SignupRole" onChange={this.props.textHandler} />
         {/* <label>Role?</label>
              <Form.Group inline>
          <Form.Field
            control={Radio}
            label='Member'
            value='client'
            checked={value === 'client'} 
            name="SignupRole" onChange={this.props.textHandler}
          />
          <Form.Field
            control={Radio}
            label='Trainer'
            value='host'
            checked={value === 'host'}
            name="SignupRole" onChange={this.props.textHandler}
          />
        </Form.Group>
         */}
              <Form.Field>
                <label>Cell Phone</label>
                <input placeholder='Cell Phone' name="signUpCell" onChange={this.props.textHandler}/>
              </Form.Field>
              {/* See for image upload:   https://www.academind.com/learn/react/snippets/image-upload/*/}
              {/* <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" name="loginPW"  onChange={this.props.loginPWHandler} />
              </Form.Field>  */}
            </Form>

      </div>
    )
  }
}


export default SignUpForm
