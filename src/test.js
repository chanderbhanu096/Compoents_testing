import React from 'react';

// const ankush = ['bholu','bhanu','ak'];
class Test extends React.Component {
    render() {
        console.log('props',this.props);
    return(
        <ul className="contact-list">
            {this.props.contacts.map(contact=><li key={contact}>
            
            {contact}</li>)}
        </ul>
    );
}
}

export default Test