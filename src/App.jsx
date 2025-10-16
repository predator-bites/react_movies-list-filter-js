import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterList(list, query) {
  return list.filter(movie => {
    const modifiedQuery = query.toLowerCase().trim();
    const title = movie.title.toLowerCase().trim();
    const description = movie.description.toLowerCase().trim();

    if (title.includes(modifiedQuery)) {
      return true;
    }

    if (description.includes(modifiedQuery)) {
      return true;
    }

    return false;
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const filteredList = filterList(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={evnt => {
                  setQuery(evnt.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
