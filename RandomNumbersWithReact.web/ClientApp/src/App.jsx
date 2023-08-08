import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Row from './RowGenerator';
import SelectedRows from './SelectedRows';

class App extends React.Component {

    state = {
        numbers: [],
        selected: [],
        locked: []
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    addClicked = () => {
        this.setState({ numbers: [...this.state.numbers, this.getRandomInt(1, 500)] })

        //console.log(this.state)
    }

    selectClicked = (num) => {
        const { selected } = this.state;
        if (selected.includes(num)) {
            this.setState({ selected: selected.filter(n => n != num) })
        }
        else {
            this.setState({ selected: [...selected, num] })
        }
    }

    lockClicked = (num) => {

        console.log(num);
        const { locked } = this.state;
        if (locked.includes(num)) {
            this.setState({ locked: locked.filter(n => n != num) })
        }
        else {
            this.setState({ locked: [...locked, num] })
        }
    }


    render() {
        return (
            <div className="container mt-5">
                <div className='row'>
                    <button className='btn btn-success' onClick={this.addClicked}>Add Random Number</button>
                </div>
                <div className='mt-3'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Numbers</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.numbers.map((num, i) => <Row key={i} num={num}
                                isSelected={this.state.selected.includes(num)}
                                selectHit={() => this.selectClicked(num)}
                                isLocked={this.state.locked.includes(num)} />)}
                        </tbody>
                    </table>
                </div>

                <div className='container mt-2'>
                    <div className='col-md-2'>
                        <ul>
                            {this.state.selected.map((s, i) => <SelectedRows key={i} num={s}
                                isLocked={this.state.locked.includes(s)}
                                lockClicked={() => this.lockClicked(s)} />)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;