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
 

 *  
*/

import React from 'react';

const user = (props) => {
    return (
        <div>
            <p>Username is {props.name} and Gender {props.gender}</p>
            <p>Email is: {props.children}</p>
        </div>
    )
}

export default user;