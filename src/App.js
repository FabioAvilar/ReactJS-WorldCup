import { useState } from "react";
import "./styles.css";

const TEAM_LIST = [
  {
    name: "Brazil",
    wins: 5,
    flag: "br"
  },
  { name: "Germany", wins: 4, flag: "🇩🇪" },
  { name: "Italy", wins: 4, flag: "🇮🇹" },
  { name: "Argentina", wins: 2, flag: "🇦🇷" },
  { name: "France", wins: 2, flag: "🇫🇷" },
  { name: "Uruguay", wins: 2, flag: "🇺🇾" },
  { name: "Spain", wins: 1, flag: "󠁧󠁢󠁥󠁮󠁧🇪🇸" },
  { name: "England", wins: 1, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }
];

// hints:
// add an onChange listener to the <input>
// add an onClick listener to the <button>
//
// inside them, you'll need to update the teams state!
// in one case, a filter operation is needed
// in the other, you have to reset the state to the initial one

export default function App() {
  const [teams, setTeams] = useState(TEAM_LIST);
  const [count, setCount] = useState(0);

  function onChange(event) {
    const newCount = +event.target.value;
    const result = TEAM_LIST.filter((x) => x.wins > newCount);
    setTeams(result);
    setCount(newCount);
  }

  function onClick() {
    setTeams(TEAM_LIST);
    setCount(0);
  }

  return (
    <div className="app">
      <h1>World Cup Statistics</h1>
      <div className="controls">
        <label>
          Show me teams that won more than:
          <input onChange={onChange} type="number" value={count} />
          cups.
        </label>
        <button onClick={onClick}>Reset</button>
      </div>
      <ul>
        {teams.map((x) => (
          <li key={x.name}>
            <span className="flag">{x.flag}</span>
            <span className="name">{x.name}</span>
            <span className="wins">
              {Array.from({ length: x.wins }).map((_, index) => (
                <span className="cup" key={index} />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
