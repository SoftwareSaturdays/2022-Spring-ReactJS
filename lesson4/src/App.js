import React from 'react';
import Software from './component/Software';
import Saturday from './component/Saturday';
import Purdue from './component/Purdue';
import Boilermakers from './component/Boilermakers';

function App() {
    return (
        // Type your website layout here...
        <div id="demos">
            {/* Demo #1 */}
            <Software day="Saturday" date="Oct 10"/>
            <Saturday lessonNumber="4" software="ReactJS"/>

            {/* Demo #2 */}
            {/* <Purdue year={2019}/>
            <Purdue year={2019}/> */}

            {/* Demo #3 */}
            {/* <Boilermakers /> */}
        </div>
    );
}

export default App;