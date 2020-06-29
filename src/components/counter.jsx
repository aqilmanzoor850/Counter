import React, { Component } from 'react';

class Counter extends Component {

    renderCount() {
        const {value} = this.props.counter;
        if(value===0){
            return 'zero';
        }
        else {
            return value;
        }
    }
    getBadgeClass() {
        let classes = ' btn-secondary sm-2 badge-';
        if(this.props.counter.value===0){
           return classes+='warning';
        }
        else{
           return classes+='primary';
        }
    }

    render() {
        const {counter} = this.props;
        return (
            <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}} className='row'>
                <div className='col-1'>
                    <span style={{padding: '10px', width: '20px'}} className={this.getBadgeClass()}>{this.renderCount()}</span> 
                </div>
                <div className='col-2'>
                    <button onClick={() => this.props.onIncrement(counter)} className={'btn btn-secondary sm-2'}>+</button>
                    <button onClick={() => this.props.onDecrement(counter)} disabled={counter.value===0 ?'disabled': ''}  className={'btn btn-secondary sm-2 m-2'}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;