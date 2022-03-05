//import { database } from '@/database.js';
import { database } from '../database.js';
import { onValue, ref, off } from 'firebase/database';
import React from 'react';

class demo3 extends React.Component {
    constructor(props) {
        super(props)

        this.createData = this.createData.bind(this);
        this.readData = this.readData.bind(this);
        this.updateData = this.updateData.bind(this);
        this.deleteData = this.deleteData.bind(this);

    }

    componentDidMount() {
        const dataRef = ref(database, '/');
        onValue(dataRef, (snap) => {
            // This is just a complicated iterative process
             //     to read all the data from the database and
            //     print it to the console. Your data reads
            //     will use a similar loop, but probably
            //     not two of them
            for(let key in snap.val()) {
                console.log(key, ':');
                for(let sub_key in snap.val()[key]) {
                    console.log('   ',sub_key, ':', snap.val()[key][sub_key]);
                }
                console.log('-----------------')
            }
        });
    }

    componentWillUnmount() {
        const dataRef = ref(database, '/');
        off(dataRef);
        console.log("Removed listener");
    }


    render () {
        // Type your code here...

        const someJSX = (  
        <div>
            <h1>Software Saturdays</h1>
            <h2>Lesson 7, Demo 3</h2>
            <h3>Check your browser console!</h3>
        </div>
        );

        // Return some JSX here...
        return someJSX;
    }
}

export default demo3;