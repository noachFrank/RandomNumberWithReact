import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Numbers extends React.Component {

    render() {
        return (
           <tr>
            <td>{this.props.num}</td>
             {this.props.isSelected ? <td><button disabled={this.props.isLocked} onClick={this.props.selectHit} className='btn btn-danger'>Remove From Selected</button></td> :
             <td><button onClick={this.props.selectHit} className='btn btn-primary'>Add To Selected</button></td>}
           </tr>
        )
    }
}

export default Numbers;