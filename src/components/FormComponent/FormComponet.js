import React, { Component } from 'react';


const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErros =>{
  let valid = true;
  //Obejects in the constructor
  Object.values(formErros).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;

};




class FormComponent extends Component {

  constructor(props){
    super(props);

      this.state ={
        firstName: null,
        lastName: null,
        email:null,
        password: null,
        formErros: {
          firstName:"",
          lastName: "",      
          email:"",
          password: ""
        }
      
    };
    
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state.formErros)){
  
      console.log(`
      --Sumitting--
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Password: ${this.state.password}
  
      `)
    }else {
      console.error('Form Invalid- display error message')
    }
  
  };
  
  handleChange = e => {
  
    e.preventDefault();
    const {name, value} = e.target;
    let formErros = this.state.formErros;
  
    
    
    switch (name){
      case'firstName':
      formErros.firstName = value.length < 3 && value.length > 0? "minimal 3 character required":"";
      break;
  
      case'lastName':
      formErros.lastName = value.length < 3 && value.length > 0? "minimal 3 character required":"";
      break;
  
      case'email':
      formErros.email = emailRegex.test(value)&& value.length > 0? '': 'invalid email address';
      
      break;
    
      case'password':
      formErros.password = value.length < 6 && value.length > 0? "minimal 6 character required":"";
      break;
      default:
      break;
  
    }
  
    this.setState({formErros, [name]: value}, () => console.log(this.state));
  
  };

  
  
  render() {
    const {formErros} = this.state;  
    return(
    <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit = {this.handleSubmit} noValidate>
             <div className = "firstName">
              <label htmlFor="firstName">First Name</label>
              <input 
                className ={formErros.firstName.length > 0 ? "error": null}
                placeholder = "Frist Name" 
                type="text" 
                name = "firstName"
                noValidate  
                onChange={this.handleChange}
             />
              {formErros.firstName.length > 0 && (<span className="errorMessage">{formErros.firstName}</span>)}

             </div>
    
             <div className = "lastName">
              <label htmlFor="lastName">Last Name</label>
              <input 
                
                className ={formErros.lastName.length > 0 ? "error": null}
                placeholder = "Last Name" 
                type="text" 
                name = "lastName"
                noValidate  
                onChange={this.handleChange}
             />
             {formErros.lastName.length > 0 && (<span className="errorMessage">{formErros.lastName}</span>)}
             </div>
    
             <div className = "Email">
              <label htmlFor="Email">Email </label>
              <input 
                
                className ={formErros.email.length > 0 ? "error": null}
                placeholder = "email" 
                type="email" 
                name = "email"
                noValidate  
                onChange={this.handleChange}
             />
              {formErros.email.length > 0 && (<span className="errorMessage">{formErros.email}</span>)}
    
             </div>
    
             <div className = "password">
              <label htmlFor="password">Password</label>
              <input 
                
                className ={formErros.password.length > 0 ? "error": null}
                placeholder = "Password" 
                type="password" 
                name = "password"
                noValidate  
                onChange={this.handleChange}
             />
              {formErros.password.length > 0 && (<span className="errorMessage">{formErros.password}</span>)}

    
             </div>
             <div className="createAccount">
             <button type= "submit">Create Account</button>
             <small>Already Have an Account </small>
             </div>
            </form>
          </div>
        </div>
        );
      }
  }



export default FormComponent;
