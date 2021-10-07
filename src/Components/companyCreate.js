import { Component, useState } from 'react';
import Explore from './explore';
import '../CSS/App.css';

// ==================

const initialFormData = Object.freeze({
  name: '',
  logoURL: '',
  description: '',
  country: '',
  rating: ''
})

// ==================

export default class Create extends Component {
  render() {
    return (
      <div className="Controls">
        <h2>Create</h2>
        <CreateCompany addItems={this.props.addItems} />
      </div>
    );
  }
}



class CreateCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowSubmit: false,
      form: initialFormData,
    }
  }

  handleChange = async (e) => {
    let newForm = {...this.state.form, [e.target.name]: e.target.value.trim()}
    this.setState({form: newForm})
    if (newForm.name && newForm.description && newForm.logoURL && newForm.country && newForm.rating) {
      this.setState({allowSubmit: true})
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await(await fetch('http://localhost:2053/companies', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state.form)
      })).json();
      this.props.addItems([this.state.form])
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <form className="companyCreate" onSubmit={this.handleSubmit}>
        <input name="name" className="grid-span-2" placeholder='Company Name...' onChange={this.handleChange.bind(this)}></input>
        <input name="description" className="grid-span-2" placeholder='Description...' onChange={this.handleChange.bind(this)}></input>
        <input name="logoURL" placeholder='Logo URL...' onChange={this.handleChange.bind(this)}></input>
        <input name="country" placeholder='Country...' onChange={this.handleChange.bind(this)}></input>
  
        <span className="rating rating-selection">
          <input type="radio" name="rating" value="5" id="5" onChange={this.handleChange.bind(this)}></input><label for="5">★</label>
          <input type="radio" name="rating" value="4" id="4" onChange={this.handleChange.bind(this)}></input><label for="4">★</label>
          <input type="radio" name="rating" value="3" id="3" onChange={this.handleChange.bind(this)}></input><label for="3">★</label>
          <input type="radio" name="rating" value="2" id="2" onChange={this.handleChange.bind(this)}></input><label for="2">★</label>
          <input type="radio" name="rating" value="1" id="1" onChange={this.handleChange.bind(this)}></input><label for="1">★</label>
        </span>
  
        <button className="grid-span-2" type='submit' disabled={!this.state.allowSubmit}>Create Company</button>
      </form>
    );
  }

}