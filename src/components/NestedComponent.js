import React from 'react';
import {withRouter} from 'react-router-dom';

const NestedComponent = props => {
    console.log(props);
    return <div>Nested Component</div>;
}

export default withRouter(NestedComponent);