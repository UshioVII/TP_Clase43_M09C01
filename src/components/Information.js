import React, { Component } from 'react';
import Table from './Table';

const data = [
    {
        title: 'Titanic',
        duration: '195 min',
        rating: 'PG-13',
        genre: 'Drama',
        awards: '11 Oscars'
    },
    {
        title: 'Star Wars',
        duration: '121 min',
        rating: 'PG',
        genre: 'Sci-Fi',
        awards: '6 Oscars'
    },
    {
        title: 'The Godfather',
        duration: '175 min',
        rating: 'R',
        genre: 'Drama',
        awards: '3 Oscars'
    }
];

class Information extends Component {
  render() {
    return (
      <div className="Information">
        <Table data={data} />
      </div>
    );
  }
}

export default Information;