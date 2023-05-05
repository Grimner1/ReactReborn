import React, { Component } from "react";
import User from "./User";
import City from "./City";
// import { withDataLoader } from "./withDataLoader";
import WithDataLoader from "./WithDataLoader";

// const MyCity = WithDataLoader(
//   "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities/1"
// )(City);

// const SuperUser = WithDataLoader("https://api.github.com/users/octocat")(User);

const MyCity = WithDataLoader(
  City,
  "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities/1"
);

const SuperUser = WithDataLoader(User, "https://api.github.com/users/octocat");

const App = () => (
  <div className="page">
    <MyCity />
    <SuperUser />
  </div>
);

// -----------

// const urlCity = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities/1";
// const urlUser = "https://api.github.com/users/octocat";

// const getData = (url) => {
//   return fetch(url).then((data) => data.json());
// };

// class App extends Component {
//   state = {
//     userData: "",
//     cityData: "",
//   };

//   componentDidMount() {
//     getData(urlCity).then((data) => {
//       this.setState({
//         cityData: data,
//       });
//     });

//     getData(urlUser).then((data) => {
//       this.setState({
//         userData: data,
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="page">
//         <City data={this.state.cityData} />
//         <User data={this.state.userData} />
//       </div>
//     );
//   }
// }

export default App;
