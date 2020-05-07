/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import BottomNav from "./containers/BottomNav";
import TopNav from './containers/TopNav'

function App() {
  return (
    <div>
      <BottomNav />
      <TopNav />
    </div>
  );
}

export default App;
