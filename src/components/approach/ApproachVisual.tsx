'use client';

import UnderstandVisual from './visuals/UnderstandVisual';
import PlanVisual from './visuals/PlanVisual';
import CreateVisual from './visuals/CreateVisual';
import GrowVisual from './visuals/GrowVisual';
import type { ApproachStep } from './approachData';

interface Props {
  visual: ApproachStep['visual'];
  isActive: boolean;
}

export default function ApproachVisual({ visual, isActive }: Props) {
  return (
    <div className="step-visual">
      {visual === 'understand' && <UnderstandVisual isActive={isActive} />}
      {visual === 'plan'       && <PlanVisual       isActive={isActive} />}
      {visual === 'create'     && <CreateVisual     isActive={isActive} />}
      {visual === 'grow'       && <GrowVisual       isActive={isActive} />}
    </div>
  );
}
