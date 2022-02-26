import './App.css';

import Demo2 from './Demo2';
import { demo2_named_array, demo2_named_obj } from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';

function Demo1_Simple() {
  return (
    <div>
      <h1>This component is a function!</h1>
      <p>We used to use classes but now we don't!</p>
    </div>
  );
}

function Demo1_Props(props) {
  return (
    <div>
      <h1>Functions also have props</h1>
      <p>Hello {props.name}, welcome to {props.class}!</p>
    </div>
  );
}

function Demo1_Code(props) {
  const sum = props.a + props.b;
  let odd = false;
  if (sum % 2 === 1) odd = true;
  return (
    <div>
      <h1>Functions can also have code before JSX</h1>
      <p>Prop A and Prop B sum to {sum}.</p>
      {odd ? <p>The sum is odd.</p> : <p>The sum is even.</p> }
    </div>
  );
}

function App() {
  return (
    <div className="App">

      { /* Demo 1 */ }
      <Demo1_Simple></Demo1_Simple>
      <Demo1_Props name="Hadi" class="Software Saturdays"></Demo1_Props>
      <Demo1_Code a={1} b={2}></Demo1_Code>

      { /* Demo 2 */ }
      {/* <Demo2></Demo2>
      {demo2_named_array}
      <br></br>
      {demo2_named_obj.a} and {demo2_named_obj.b} */}

      { /* Demo 3 */ }
      {/* <Demo3></Demo3> */}

      { /* Demo 4 */ }
      {/* <Demo4></Demo4> */}

    </div>
  );
}

export default App;
