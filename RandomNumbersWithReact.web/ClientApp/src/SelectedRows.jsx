import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedRow extends React.Component {

    render() {
        return (
            <>
            {this.props.isLocked ? <li className="list-group-item list-group-item-primary">{this.props.num} 
            <button className='btn btn-danger' onClick={this.props.lockClicked}>UnLock</button>
            </li> :
            <li className="list-group-item list-group-item-primary">{this.props.num} 
            <button className='btn btn-warning' onClick={this.props.lockClicked}>Lock</button>
            </li>    }
            </>
        )
    }
}

export default SelectedRow;