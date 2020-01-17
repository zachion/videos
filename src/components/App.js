import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../apis/youtube';

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async term => {
    const response = youtube
      .get('/search', {
        params: {
          ...baseParams,
          q: term
        }
      })
      .then(response => {
        this.setState({ videos: response.data.items });
      });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
