import React, { useEffect, useState, useRef } from 'react';
import Button from '../Button';
import './style.css';

const fetchOpts = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
};

// `values` is an array of strings
const formatData = (values) => {
  const headers = ['submission', 'filling', 'coating'];
  return values.map((s) => {
    const o = {};
    headers.forEach((header, i) => o[header] = s[i]);
    return o;
  });
};

const fetchSubmissions = async () => {
  try {
    const data = await fetch('/submissions', {
      method: 'GET',
      ...fetchOpts,
    }).then(res => res.json());
    const values = data.values.slice(1); // the first value will always be the column header array
    // format submissions
    const submissions = formatData(values);
    return submissions;
  } catch (e) {
    console.error('Something went wrong while fetching or formatting data', e);
    return [];
  }
}

const Submissions = () => {
  const inputRef = useRef();
  const [allSubmissions, setAllSubmissions] = useState(null);

  useEffect(() => !allSubmissions ? fetchSubmissions().then((res) => setAllSubmissions(res)) : null, [allSubmissions]);

  const handleSubmit = async (text) => {
    const data = [text, 'ube', 'oreos'];
    const submission = await fetch('/submissions', {
      method: 'POST',
      ...fetchOpts,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data }),
    }).then(res => res.json())
    .catch((e) => console.error(e));
    
    setAllSubmissions((prev) => [...prev, ...formatData(submission)]);

    inputRef.current.value = ''; // reset input value
  };

  return allSubmissions ? (
    <div className={'submissions__container'}>
      <input ref={inputRef} />
      <Button size={'sm'} handleClick={() => handleSubmit(inputRef.current.value)}>Submit</Button>
      <div>
        {allSubmissions.map((data) => {
          return <p key="data.submission">{data.submission}</p>;
        })}
      </div>
    </div>
  ) : null; // TODO: loading state
}

export default Submissions;
