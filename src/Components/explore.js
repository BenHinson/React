import { Component } from 'react';
import Company from '../Components/company';
import '../CSS/App.css';

// ==================

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      filterTerm: ''
    };
  }

  updateFilterTerm = (newTerm) => this.setState({filterTerm: newTerm.target.value.toLowerCase()})

  componentDidMount = async(e) => {
    let reset = e?.target.getAttribute('reset');
    try {
      const companies = await(await fetch('//localhost:2053/companies')).json();
      this.setState({ isLoaded: true })
      this.props.addItems(companies.data, reset)
    } catch(error) {
      this.setState({ isLoaded: true, error })
    }
  }

  render() {
    const {error, isLoaded, filterTerm} = this.state;
    const {items} = this.props;

    if (error) { return <div>Error: {error.message}</div> } 
    else if (!isLoaded) { return <div>Loading...</div> }
    else {
      return (
        <div className="Explore">

          <input className="Filter" placeholder="Filter Results" onChange={this.updateFilterTerm}></input>
    
          <span className="flex-between">
            <h2>Explore</h2>
            <i className="refresh" reset='true' onClick={this.componentDidMount}>↻</i>
          </span>
          <div className="Companies">
            {items.filter(com => com.name.toLowerCase().includes(filterTerm)).map((item, i) => (
              <Company
                key={i}
                id={item.id}
                name = {item.name || 'Demo Name'}
                description = {item.description || 'description'}
                rating = {item.rating || 4}
                country = {item.country || 'GB'}
                logoURL = {item.logoURL || ''}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}