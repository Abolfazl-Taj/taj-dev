import React from 'react';
import Typed from 'typed.js';
function Type() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Welcome To My Site', 'Iam Abolfazl Taj' , 'Iam Web Developer'],
        typeSpeed: 50,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
    return (
      <div className="App">
        <span ref={el} />
      </div>
    );
  }
  export default  Type