import React from 'react';
import "./App.css";
import FormsBinding from "./Components/FormsBinding";
import ConditionalLooping from "./Components/ConditionalLooping";




let App  = () => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <div className="container">
                <a href="/" className="navbar-brand font-weight-bold">React Hooks Forms Binding & Conditional looping</a>
            </div>
        </nav>
        <FormsBinding />
        <ConditionalLooping />
        </React.Fragment>
  );
}

export default App;
