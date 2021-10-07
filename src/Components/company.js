import { Component } from 'react';
import '../CSS/App.css';


export default class Company extends Component {
  
  addDefaultSrc = (e) => {
    const defaultImageFallback = '//www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png'
    e.target.src = defaultImageFallback
  }

  render() {
    return (
      <div className="CompanyBlock" onClick={}>
        <span className="companyLeft">
          <span>
            <h3>{this.props.name}</h3>
            <img src={`https://www.countryflags.io/${this.props.country}/flat/24.png`} width='24'></img>
          </span>
          <p>{this.props.description}</p>
          <span className="rating">
            {[...Array(this.props.rating)].map((r, i) => <i key={i}>★</i> )}
          </span>
        </span>

        <span className="companyRight">
          <img src={this.props.logoURL} onError={this.addDefaultSrc}></img>
          <button>View</button>
        </span>
      </div>
    )
  }
}