import React from 'react';

const Card = (props) => {
// const Card = (name, email, id) => {
  // const { name, email } = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img alt='robots' src={`https://robohash.org/${props.id}?100x100`} />
      <div>
        <h2>{props.name}</h2> {/*<h2>{name}</h2>*/}
        <p>{props.email}</p>  {/*<p>{email}</p>*/}
      </div>
    </div>
    );
}

export default Card;