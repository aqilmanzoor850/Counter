import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const {onIncrement, onDecrement} = this.props;
        return(
            <div>
                {this.props.counters.map(count => <Counter 
                                                    key={count.id} 
                                                    onIncrement={onIncrement}
                                                    counter={count}
                                                    onDecrement={onDecrement} 
                                                    />
                                        )
                }
            </div>
        );
    }
}
 
export default Counters;