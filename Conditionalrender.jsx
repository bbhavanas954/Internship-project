import React from 'react'

function Good() {
    return <h5>Good</h5>
}

function Bad() {
    return <h5>Bad</h5>
}

function Condition(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <Good/>;
    }
    return <Bad/>;
}

export default Condition
