import { useState } from "react";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice";

import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";

import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState<number>(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  function handleClick() {
    dispatch(amountAdded(3));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>

        <div>
          <p>Dogs to fetch:</p>
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        {isFetching ? (
          <p>loading...</p>
        ) : (
          <>
            <div>
              <p>Number of dogs fetched: {data.length}</p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {data.map((breed) => (
                  <tr>
                    <td>{breed.name}</td>
                    <td>
                      <img
                        src={breed.image.url}
                        alt={breed.name}
                        height={250}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
