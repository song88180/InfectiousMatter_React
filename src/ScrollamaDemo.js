import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Agents from './Agents.js';

const ScrollamaDemo = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
      <Scrollama onStepEnter={onStepEnter} debug>
        {[1, 2, 3, 4].map((_, stepIndex) => (
          <Step data={stepIndex}>
            <div
              style={{
                margin: '50vh 0',
                border: '1px solid gray',
                opacity: currentStepIndex === stepIndex ? 1 : 0.2,
              }}
            >
              <Agents /> 
              I'm a Scrollama Step of index {stepIndex}
              
            </div>
          </Step>
        ))}
      </Scrollama>
  );
};

export default ScrollamaDemo;
