import React, { useEffect } from 'react';
import Button from '../Button';
import './style.css';

const Story = ({ isVisible, handleHide }) => {
  useEffect(() => {
    const escFunction = (e) => {
      if (e.keyCode === 27) {
        handleHide()
      }
    }
      document.addEventListener("keydown", escFunction, false);
    return () => document.removeEventListener("keydown", escFunction, false);
  }, [handleHide]);

  return (
    <div className={`${isVisible ? 'modal-open' : 'modal-closed'} story__background`} id={'story-container'}>
      <div className={'story__container'}>
        <Button size={'sm'} className={'story__exit'} handleClick={handleHide}></Button>
        <section>
          <h1>
            What is tikoy?
          </h1>
          <p>
            Tikoy, as my Filipino parents remember it, is a sweet sticky rice cake wrapped around a meat filling that is dipped in scrambled eggs, fried, and sprinkled with sesame seeds. On Lunar New Year, my mom’s Chinese Filipino, or Tsinoy, neighbors would give this to her family as a treat and invite them to light fireworks in their yard. My parents grew up in Baguio, just a couple hours north of Manila where what might be the oldest Chinatown in the world is. Although my family, like many Filipinos, does not observe the lunisolar calendar, they celebrate Lunar New Year with their Chinese / Tsinoy friends and neighbors as their way of embracing the melting pot of regional customs.
          </p>
          <p>
            Outside of the Philippines, tikoy is also known as nian gao. My family’s friends and colleagues come up with different answers when I ask about why on Lunar New Year they eat and give away nian gao, other than its name being a loose homonym for 'new year'. Some say it’s because sticky rice sticks good luck to you, others say it’s to make the Kitchen God’s mouth so sticky they can’t narc on your family to other gods.
          </p>
          <p>
            Like the many reasons for enjoying tikoy, there are just as many ways to make it! <a className={'story__link'} target='__blank' rel='noreferrer' href='https://www.youtube.com/watch?v=2SEp4UfHgbE&t=22s'>This recipe</a> is one I particularly enjoyed from a pastry caterer in the Philippines. My parents prefer the savory, fried meat filled version, and there are many recipes to find for that online. So in the spirit of the many ways to make tikoy and celebrate Lunar New Year (and the many ways our luck can go this year 🤞), Ox Chef will walk you through how to customize your own sweet version of sticky rice.
          </p>
          <p>
            Below the tutorial is a submission box for sharing how <i>you</i> like to celebrate. I'd love to hear what your favorite Lunar New Year tradition is!
          </p>

          <p>
            Sige po! 🐂🏮
          </p>
          <p>
            - <a className={'story__link'} href='http://angeliquedecastro.com' target='__blank' rel='noreferrer'>Angelique</a>🤘
          </p>
        </section>
      </div>
    </div>
  );
  };

export default Story;
