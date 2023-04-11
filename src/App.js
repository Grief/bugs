import React from 'react';
import AutoSizer from "react-virtualized-auto-sizer";

export function App() {
  return (
    <>
      <div id="test"><AutoSizer onResize={() => document.getElementById('test').classList.add('big')}>
        {(props) => <div>{JSON.stringify(props)}</div>}
      </AutoSizer></div>
      <button onClick={() => {
        document.getElementById('test').classList.remove('big')
      }}>REPRODUCE</button>
    </>
  );
}

