import React from 'react'
function Conditionren(props) {
  const Pets = ['Dog', 'Cat', 'Rabbit']
    return (
      <>
        <h1>Pets</h1>
        {Pets.length > 0 &&
          <h2>
            I have {Pets.length} pets in my house
          </h2>
        }
      </>
    );
  }
  export default Conditionren