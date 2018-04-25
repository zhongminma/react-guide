/** 
 * 1. Create a funcaitonal based component and then update it in app.js
 *    function name should be camelCase
 * 
import React from 'react';
const user = () => {
    return <p>This is create a customized component</p>
};
export default user;

 * 2. Data binding use { } and use 'props' params to dynamic show properties
 * Class based use "this.props" whereas functional based use "props" keyword.
 * between component tag use props.children to visit 
 
 * 3. pass property between components
 * user component add a eventHandler can trigger 'props change'
 * on Parent componnet - App.js, we add this child eventHander as a new prop
 * 
 *   
*/

import React from 'react';

const user = (props) => {
    return (
        <div>
            <p onClick={props.updateNameClick}>Username is {props.name} and Gender {props.gender}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default user;