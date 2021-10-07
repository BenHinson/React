import '../CSS/App.css';

export default function Data() {
  return (
    <div className="Navigation">
      <CompanyTitle />
      <CompanyRestaurants />
      <CompanyMenus />
    </div>
  );
}

const CompanyTitle = () => {
  return (
    <div>
      <h2>Dishoom</h2>
      <p>Dishoom pays homage to the Irani cafés and the food of all Bombay.</p>
      <divide></divide>
      <button className="danger">Delete</button>
    </div>
  )
}
const CompanyRestaurants = () => {
  return (
    <div className="tableBlock">
      <table className="Restaurants">
        <thead><tr><th>Restaurants</th><th></th><th></th></tr></thead>
        <tbody>
          <tr><td>Shoreditch</td><td>80</td><td>John Doe</td></tr>
          <tr><td>Shoreditch</td><td>80</td><td>John Doe</td></tr>
          <tr><td>Shoreditch</td><td>80</td><td>John Doe</td></tr>
          <tr><td>Shoreditch</td><td>80</td><td>John Doe</td></tr>
        </tbody>
      </table>
    </div>
  )
}
const CompanyMenus = () => {
  return (
    <div className="tableBlock">
      <table className="Menus">
        <thead><tr><th>Menus</th></tr></thead>
        <tbody></tbody>
      </table>
    </div>
  )
}