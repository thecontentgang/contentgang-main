'use client';

import ApproachVisual from './ApproachVisual';
import type { ApproachStep as StepType } from './approachData';

interface Props {
  step: StepType;
  isActive: boolean;
}

export default function ApproachStep({ step, isActive }: Props) {
  const isRight = step.dir === 'right';

  return (
    <div
      className={`step-card${isActive ? ' active' : ''}`}
      data-dir={step.dir}
      aria-hidden={!isActive}
    >
      {/* Content block */}
      <div className={`step-content${isRight ? ' content-right' : ''}`}>
        <div>
          <div className="step-number">{step.number}</div>
          <div className="step-label">{step.label}</div>
        </div>
        <div className={`step-divider${isRight ? ' divider-right' : ''}`} />
        <h3 className="step-title">
          {step.title.map((line, i) => (
            <span key={i}>
              {line}
              {i < step.title.length - 1 && <br />}
            </span>
          ))}
        </h3>
        <p className={`step-desc${isRight ? ' desc-right' : ''}`}>{step.description}</p>
      </div>

      {/* Visual block */}
      <ApproachVisual visual={step.visual} isActive={isActive} />
    </div>
  );
}
