import React from 'react';
import Button from '../Button';
import './style.css';

const Story = ({ isVisible, handleHide }) => (
  <div className={'story__container'} id={'story-container'} style={{ display: `${ isVisible ? 'block' : 'none' }` }}>
    <Button size={'sm'} className={'story__exit'} handleClick={handleHide}></Button>
    {/* <!-- TODO: prevent scroll --> */}
    <section>
      <h1>
        What is tikoy?
      </h1>
      <p>
        I'm baby helvetica PBR&B lomo master cleanse offal williamsburg.
        Ethical keffiyeh irony, mumblecore jean shorts jianbing tofu
        meditation cold-pressed deep v intelligentsia pok pok health goth
        franzen lyft. Mustache authentic scenester ugh, truffaut neutra
        organic. Schlitz man braid vaporware, single-origin coffee cred
        vegan chillwave marfa franzen lomo tattooed snackwave ennui twee.
        Shoreditch man bun health goth, fashion axe squid PBR&B gochujang
        subway tile fixie asymmetrical cray glossier. Selvage pinterest
        irony asymmetrical.
      </p>

      <p>
        Vexillologist ramps schlitz beard trust fund shoreditch
        cold-pressed. Stumptown hammock cloud bread, cred pinterest chambray
        fingerstache shoreditch glossier. Schlitz pour-over skateboard
        aesthetic raw denim, leggings vegan hammock hell of XOXO mlkshk
        lumbersexual tumblr bushwick. Single-origin coffee cardigan chambray
        dreamcatcher leggings pour-over tumeric beard. Dreamcatcher
        readymade chillwave fam lyft umami, cred photo booth art party tote
        bag microdosing.
      </p>

      <p>
        Skateboard photo booth ramps, lo-fi meh lomo you probably haven't
        heard of them. Distillery blue bottle beard, edison bulb iceland
        retro hot chicken live-edge. Fam lo-fi authentic tacos jianbing
        intelligentsia kombucha hella trust fund food truck palo santo
        heirloom retro next level. Beard raclette next level kickstarter.
        Put a bird on it cardigan next level mixtape YOLO la croix palo
        santo yuccie blue bottle irony tumeric cornhole mlkshk. Irony
        flexitarian fixie, four dollar toast selvage paleo prism pickled
        tacos cornhole neutra meh.
      </p>

      <p>
        3 wolf moon activated charcoal hella biodiesel, tilde paleo neutra.
        Typewriter authentic jean shorts man bun, palo santo kitsch quinoa
        man braid venmo coloring book retro. Cold-pressed biodiesel iceland
        master cleanse, pork belly hoodie poke next level dreamcatcher DIY
        iPhone wolf hell of. Wayfarers snackwave you probably haven't heard
        of them photo booth.
      </p>

      <p>
        Af farm-to-table normcore tilde copper mug plaid. 90's pinterest
        polaroid, irony +1 schlitz adaptogen fanny pack godard poke cardigan
        man braid. Mumblecore waistcoat flannel bitters. Biodiesel live-edge
        keytar messenger bag taxidermy skateboard blue bottle plaid. Umami
        blog knausgaard glossier cred enamel pin affogato. Tumblr activated
        charcoal stumptown, shaman cliche pitchfork asymmetrical bitters.
      </p>
    </section>
  </div>
)

export default Story;
