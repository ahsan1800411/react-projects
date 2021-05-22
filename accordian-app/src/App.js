import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about login</h3>
        <section className="info">
          {data.map((d) => {
            return <SingleQuestion key={d.id} {...d} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
