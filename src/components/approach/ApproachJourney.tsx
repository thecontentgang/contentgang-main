'use client';

import ApproachStep from './ApproachStep';
import { approachSteps } from './approachData';

interface Props {
  activeStep: number;
}

export default function ApproachJourney({ activeStep }: Props) {
  return (
    <div className="approach__stage">
      {approachSteps.map((step, i) => (
        <ApproachStep
          key={step.number}
          step={step}
          isActive={activeStep === i}
        />
      ))}
    </div>
  );
}
