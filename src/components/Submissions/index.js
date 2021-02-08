import React from 'react';
import Button from '../Button';
import './style.css';

const handleSubmit = async () => {
  const submissions = await fetch('/submissions', {
    method: 'POST'
  }).then(res => res.json());
  console.log(submissions);
};

const Submissions = () => {

  return (
    <div className={'submissions__container'}>
      <form>
        <input />
        <Button size={'sm'} handleClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
}

export default Submissions;
