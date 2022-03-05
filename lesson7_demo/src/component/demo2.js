import { database } from '../database.js';
import { set, update, onValue, remove, ref } from 'firebase/database';

import React from 'react';

class Demo2 extends React.Component {
    constructor(props) {
        super(props)

        this.createData = this.createData.bind(this);
        this.readData = this.readData.bind(this);
        this.updateData = this.updateData.bind(this);
        this.deleteData = this.deleteData.bind(this);

    }

    createData() {
        let data = {
            key: 'value',
            otherkey: 'other value',
        }
        const dataRef = ref(database, '/added');
        set(dataRef, data)
        .then(() => {
            console.log("Set was successful");
        })
        .catch((error) => {
            console.log("Set failed");
            console.log(error);
        });
    }

    readData() {
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

    updateData() {
        let data = {
            otherkey: 'new value',
        }
        const dataRef = ref(database, '/added');
        update(dataRef, data)
        .then(() => {
            console.log("Update was successful");
        })
        .catch((error) => {
            console.log("Update failed");
            console.log(error);
        });
        console.log('-----------------')
        console.log('-----------------')
        console.log('-----------------')
    }

    deleteData() {
        const dataRef = ref(database, '/added');
        remove(dataRef)
        .then(() => {
            console.log("Remove was successful");
        })
        .catch((error) => {
            console.log("Remove failed");
            console.log(error);
        });
        console.log('-----------------')
        console.log('-----------------')
        console.log('-----------------')
    }

    render () {
        // Type your code here...

        const someJSX = (
            <div>
                <h1>Software Saturdays</h1>
                <h2>Lesson 7, Demo 2</h2>
                <h3>Check your browser console to see the output of these buttons!</h3>
                <button onClick={this.readData}>Read Data</button><br /><br />
                <button onClick={this.createData}>Create Data</button><br /><br />
                <button onClick={this.updateData}>Update Data</button><br /><br />
                <button onClick={this.deleteData}>Delete Data</button><br /><br />
            </div>
        );

        // Return some JSX here...
        return someJSX;
    }
}

export default Demo2;