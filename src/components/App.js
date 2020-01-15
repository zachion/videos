import React from 'react';
import SearchBar from './SearchBar';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
  onFormSubmit = term => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container">
        <ErrorBoundary>
          <SearchBar onSubmit={this.onFormSubmit} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
