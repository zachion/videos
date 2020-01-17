import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../apis/youtube';
import VideoList from './VideoList';

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
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{' '}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
