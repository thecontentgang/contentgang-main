export interface ApproachStep {
  number: string;
  label: string;
  title: string[];      // split lines for <br>
  description: string;
  visual: 'understand' | 'plan' | 'create' | 'grow';
  dir: 'left' | 'right'; // content side
}

export const approachSteps: ApproachStep[] = [
  {
    number: '01',
    label: 'Understand',
    title: ['Start with', 'the why.'],
    description: 'We learn your business, audience, and goals to find clarity.',
    visual: 'understand',
    dir: 'left',
  },
  {
    number: '02',
    label: 'Plan',
    title: ['Build the', 'right plan.'],
    description: 'We build a clear strategy for content, channels, and campaigns.',
    visual: 'plan',
    dir: 'right',
  },
  {
    number: '03',
    label: 'Create',
    title: ['Make people', 'care.'],
    description: 'We design engaging content and experiences that make people care.',
    visual: 'create',
    dir: 'left',
  },
  {
    number: '04',
    label: 'Grow',
    title: ['Measure and', 'grow.'], // Reduced title to match the 2-line format
    description: 'We launch campaigns, measure the results, and optimize for success.',
    visual: 'grow',
    dir: 'right',
  },
];