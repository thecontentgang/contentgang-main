'use client';

import { approachSteps } from './approachData';

interface Props {
  activeStep: number;
}

export default function ApproachNode({ activeStep }: Props) {
  return (
    <div className="approach__dots">
      {approachSteps.map((step, i) => (
        <div key={step.number} className="dot-group">
          <div className={`dot${activeStep === i ? ' dot--active' : ''}`} />
          <span className={`dot__label${activeStep === i ? ' dot__label--active' : ''}`}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}
