'use client';

interface Props {
  progress: number; // 0–1
}

export default function ApproachPath({ progress }: Props) {
  return (
    <div className="approach__progress" role="progressbar" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
      <div
        className="approach__progress-fill"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
