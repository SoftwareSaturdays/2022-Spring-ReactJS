import React from 'react';
import Demo1 from './component/Demo1';
import Demo2 from './component/Demo2';
import Demo3 from './component/Demo3';
import Card from './component/Card';

function App() {
  // For checkpoint 1: Write code here similar to Demo2.js
  // Hint: Create an array and map each element to JSX (the Card component), then add it to the JSX you're returning

  // Checkpoint 1 Example code:
  const names = ["bulbasaur", "charmander", "squirtle"];
  const namesJSX = names.map((pokeName) => <Card name={pokeName} />);


  return (
    // Type your website layout here...
    <div>
      {/* Checkpoint 1 Example code: */}
      {namesJSX}

      <div id="demos">
        {/* Demo #1 */}
        <Demo1 />
        <hr />

        {/* Demo #2 */}
        {/* <Demo2 numbers={[1,2,3,4,5]}/>
        <hr /> */}

        {/* Demo #3 */}
        {/* <Demo3 /> */}

      </div>
    </div>
  );
}

export default App;
