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
const formatData = (values, isNew) => {
  const headers = ['submission', 'filling', 'coating'];
  const formattedValues = values.map((s) => {
    const o = {};
    headers.forEach((header, i) => o[header] = s[i]);
    return o;
  });

  // give new submissions a temporary element id so we can
  // scroll it into view
  if (isNew) formattedValues[0].elementId = `${Date.now()}`;

  return formattedValues;
};

// fetch all submissions
const fetchSubmissions = async () => {
  try {
    const data = await fetch('/submissions', {
      method: 'GET',
      ...fetchOpts,
    }).then(res => res.json());
    const values = data.values.slice(1); // the first value will always be the column header array
    // format submissions
    const submissions = formatData(values.reverse());
    return submissions;
  } catch (e) {
    console.error('Something went wrong while fetching or formatting data', e);
    return [];
  }
}

const Submissions = () => {
  const inputRef = useRef();
  const scrollToElementRef = useRef();
  const [allSubmissions, setAllSubmissions] = useState(null);

  // fetch gallery of submissions on component load
  useEffect(() => fetchSubmissions().then((res) => setAllSubmissions(res)), []);

  // why you no scroll to new submit :(
  useEffect(() => {
    if (scrollToElementRef?.current) {
      const scrollToElement = document.getElementById(scrollToElementRef.current);
      scrollToElement?.scrollIntoView();
    }
  })

  const handleSubmit = async (text) => {
    if (!text.trim().length) return;

    // send submission to backend
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

    const formattedSubmission = formatData(submission, true);
    // get appended submission element id so it can scroll into view
    scrollToElementRef.current = formattedSubmission[0].elementId;

    setAllSubmissions((prev) => [...formattedSubmission, ...prev]);
    inputRef.current.value = ''; // reset input value
  };

  return allSubmissions ? (
    <div className={'submissions__container'}>
      <div className={'submissions__head'}>
        <div className={'instructions__bubble tradition__container'}>
          <p className={'tradition__copy'}>What's your favorite</p>
          <p className={'tradition__copy'}>Lunar New Year</p>
          <p className={'tradition__copy'}>Tradition?</p>
        </div>
        <div className={'lantern__wrapper'}>
          <div className={'lantern__container'}>
            <img className={'asset lantern__asset'} src={Lantern} alt={''} />
            <div className={'input__container'}>
              <textarea maxLength='250' ref={inputRef} className={'input__element'} id={'submission'} name={'submission'}></textarea>
              <Button size={'sm'} className={'submit__button'} handleClick={() => handleSubmit(inputRef.current.value)} tmpDisableOnClick>Submit</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={'gallery__container'}>
        {allSubmissions.map((data, index) => (
          <GalleryLantern text={data.submission} filling={data.filling} coating={data.coating} submissionId={data.elementId ?? null} key={index} />
        ))}
      </div>
    </div>
  ) : null;
}

export default Submissions;
