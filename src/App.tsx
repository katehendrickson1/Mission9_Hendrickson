import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const teamNames = data.teams; //acces the specific element in json file "teams"

function Welcome() {
  return (
    <div className="header">
      <h1>College Basketball Teams</h1>
      <h3>
        This website will display all your favorite college basketball teams
        with their respective mascots and locations{' '}
      </h3>
    </div>
  );
}

class TeamCard extends React.Component<TeamProps> {
  render() {
    const oneCard = this.props;

    return (
      <div className="team-card">
        <h2>{oneCard.school}</h2>
        <h3>Mascot: {oneCard.name}</h3>
        <h3>Location: {oneCard.city + ', ' + oneCard.state}</h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="team-list">
      {teamNames.map(
        (
          teamNum, //map function loops through the different elements in the array
        ) => (
          <TeamCard {...teamNum} /> //spread operator to pull out different elements
        ),
      )}
    </div>
  ); //function that will return a list of bands
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
