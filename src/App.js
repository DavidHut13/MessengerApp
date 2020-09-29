import React from 'react';
import Layout from './hoc/Layout/Layout'
import classes from './App.module.css'




function App() {
  return (
      <div className={classes.background}>
        <Layout  />
      </div>  
  );
}

export default App;
