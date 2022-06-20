import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        //empty array or we need put something data like contryName:country, region:region?
      ],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          countries: json,
          DataisLoaded: true,
        }); console.log(json)
      })
  }
  // getCountryNames(state) {
  //   return state.item.filter(i => i.name)
  // }
  // getCountryDataFiltered(state) {
  //   // const lithuania = state.item.find(x => x.name === 'Lithuania')
  //   // return state.item.filter(i => i.area < lithuania.area)
  // }

  render() {
    const { DataisLoaded, countries } = this.state;
    // const lithuania = items.find(x => x.name === 'Lithuania')

    if (!DataisLoaded) return <div>
      <h1>Please wait some time....</h1></div>;
    return (
      <div className="App">
        <h1>Country List</h1> {
          countries.map((item) => (
            <ul key={item.id}>
              <td> Country: {item.name} </td>
              <td> , Region: {item.region} </td>
              <td> , Area: {item.area} </td>
              <td>Independent: {item.independent}</td> 
            </ul>
          ))
          // .filter(i => i.area < lithuania.area)
        }
      </div>
    );
  }
}
export default App;

