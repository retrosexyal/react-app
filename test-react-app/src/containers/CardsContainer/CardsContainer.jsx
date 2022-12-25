import React from "react";
import Card from "../../components/Card/Card";
import '../../Styles/style.css'

export default class CardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoad: false,
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data, isLoad: true }));
  }

  render() {
    const { data, isLoad } = this.state;
    console.log(data);
    if (!isLoad) {
        return <div>Loading...</div>
    }
    return (
      <div className="card-container">
        {data.results.map((e) => {
          return (
            <Card title={e.name} subTitle={e.status} img={e.image} key={e.id} />
          );
        })}
      </div>
    );
  }
}
