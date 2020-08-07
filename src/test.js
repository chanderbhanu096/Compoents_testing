import React from 'react';

const ankush = ['bholu','bhanu','ak'];
class Test extends React.Component {
    render() {
    return(
        <li>
            {ankush.map(ank=>ank+' ' )}

        </li>
    );
}
}

export default Test