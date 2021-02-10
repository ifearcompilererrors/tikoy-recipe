import React, { useEffect, useState, useRef } from 'react';
import Lantern from '../../assets/Lamp_1_Submission_.png';
import Button from '../Button';
import GalleryLantern from './GalleryLantern';
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
    
    setAllSubmissions((prev) => [...formatData(submission), ...prev]);

    inputRef.current.value = ''; // reset input value
  };

  return allSubmissions ? (
    <div className={'submissions__container'}>
      <div className={'submit__container'}>
        <div className={'lantern__container'}>
          <img className={'asset lantern__asset'} src={Lantern} alt={''} />
          <div className={'lantern__asset'}>
            <textarea ref={inputRef} id={'submission'} name={'submission'}></textarea>
            <Button size={'sm'} handleClick={() => handleSubmit(inputRef.current.value)}>Submit</Button>
          </div>
        </div>
      </div>
      <div className={'gallery__container'}>
        {allSubmissions.map((data) => {
          return <GalleryLantern text={data.submission} filling={data.filling} coating={data.coating} />
        })}
      </div>
    </div>
  ) : null; // TODO: loading state
}

export default Submissions;
