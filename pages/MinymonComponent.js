import React from 'react';

const MinymonComponent = () => (
  <div style={{ position: 'relative', zIndex: 2147483647 }}>
    <minymon-body 
      enableFeed="true" 
      idsString="MWFkZmVkMjctYmM0Ny00ZjgyLWEwMGQtYjI2ODUyOWUzY2JkLkxXREZncFcxRnhFR3djYjJKcEdnNQ==" 
      infoTitle="Hi there!" 
      theme="red"
    >
      <minymon-question question="Why is this pet here?" theme="red">
        <minymon-answer answer="This is a minymon, a virtual pet assistant for your website! You can leave a message here and it will be sent to Gel. :)" question="Why is this pet here?" theme="red">
        </minymon-answer>
      </minymon-question>
      <minymon-question question="What are you up to now?" theme="red">
        <minymon-answer answer="I'm in between things right now! I'm juggling between hobbies while actively upskilling, driven by a mission to elevate web usability through continuous learning and innovative solutions.  Currently, I'm eager to transition towards roles in Project Management, Product Owner, and Business Analysis, leveraging my diverse background in software design, testing, client relationships, and marketing." question="What are you up to now?" theme="red">
        </minymon-answer>
      </minymon-question>
      <minymon-feedback description="Your message will be sent to the owner of this site." mid="1adfed27-bc47-4f82-a00d-b268529e3cbd" theme="red" uid="LWDFgpW1FxEGwcb2JpGg5">
      </minymon-feedback>
      <minymon-music src="https://firebasestorage.googleapis.com/v0/b/minymon-d541f.appspot.com/o/users%2FLWDFgpW1FxEGwcb2JpGg5%2F1adfed27-bc47-4f82-a00d-b268529e3cbd%2FthemeSong?alt=media&token=4e420c3b-34b1-436e-a902-57c4bb3e4bbc" theme="red">
      </minymon-music>
    </minymon-body>
  </div>
);

export default MinymonComponent;
