import React, { useState } from "react";
import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleClick(e: React.MouseEvent) {
    setCount((old) => old + 1);
  }

  return (
    <div className="App">
      <div>
        <Button
          variant="contained"
          onClick={handleClick}
          endIcon={<AccessAlarmIcon />}
        >
          Hello World
        </Button>
      </div>
      <p>{count}</p>
    </div>
  );
}

export default App;
