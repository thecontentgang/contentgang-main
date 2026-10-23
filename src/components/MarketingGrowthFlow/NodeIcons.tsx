// ─────────────────────────────────────────────────────────────
// NodeIcons.tsx
// ─────────────────────────────────────────────────────────────

const ACCENT = '#E8420A';

// ─────────────────────────────────────────────────────────────
// CONTENT
// ─────────────────────────────────────────────────────────────

export function ContentVideoIcon() {
  return (
    <g>
      <rect
        x="-16"
        y="-12"
        width="32"
        height="24"
        rx="5"
        fill={ACCENT}
      />

      <path
        d="M-3 -7 L7 0 L-3 7 Z"
        fill="white"
      />
    </g>
  );
}

// ─────────────────────────────────────────────────────────────
// ENGAGEMENT
// ─────────────────────────────────────────────────────────────

export function EngagementIcon() {
  return (
    <g>
      <path
        d="
          M-2 9
          C-6 5 -15 0 -15 -7
          C-15 -12 -11 -15 -7 -15
          C-4 -15 -2 -13 -1 -11
          C0 -13 3 -15 6 -15
          C10 -15 13 -12 13 -7
          C13 0 4 5 -2 9
          Z
        "
        fill={ACCENT}
      />

      <g
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <line x1="3" y1="7" x2="12" y2="2" />
        <line x1="3" y1="7" x2="12" y2="12" />
      </g>

      <circle cx="3" cy="7" r="2.5" fill={ACCENT} />
      <circle cx="12" cy="2" r="2.5" fill={ACCENT} />
      <circle cx="12" cy="12" r="2.5" fill={ACCENT} />
    </g>
  );
}

// ─────────────────────────────────────────────────────────────
// CAMPAIGNS
// ─────────────────────────────────────────────────────────────

export function CampaignsIcon() {
  return (
    <g>
      <circle
        cx="0"
        cy="0"
        r="13"
        stroke={ACCENT}
        strokeWidth="3.5"
        fill="none"
      />

      <circle
        cx="0"
        cy="0"
        r="5"
        stroke={ACCENT}
        strokeWidth="3.5"
        fill="none"
      />

      <circle
        cx="0"
        cy="0"
        r="2"
        fill={ACCENT}
      />

      <line
        x1="4"
        y1="-4"
        x2="14"
        y2="-14"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M9 -14 L15 -15 L14 -9"
        fill={ACCENT}
      />
    </g>
  );
}

// ─────────────────────────────────────────────────────────────
// LEADS
// ─────────────────────────────────────────────────────────────

export function LeadsIcon() {
  return (
    <g>
      <rect
        x="-15"
        y="1"
        width="7"
        height="11"
        rx="1"
        fill={ACCENT}
      />

      <rect
        x="-5"
        y="-5"
        width="7"
        height="17"
        rx="1"
        fill={ACCENT}
      />

      <rect
        x="5"
        y="-12"
        width="7"
        height="24"
        rx="1"
        fill={ACCENT}
      />

      <path
        d="M-16 3 L-7 -5 L0 -1 L11 -12"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7 -12 L13 -13 L12 -7"
        fill={ACCENT}
      />
    </g>
  );
}

// ─────────────────────────────────────────────────────────────
// COMMUNITY
// ─────────────────────────────────────────────────────────────

export function CommunityIcon() {
  return (
    <g>
      <circle
        cx="-9"
        cy="-4"
        r="4.5"
        fill={ACCENT}
      />

      <path
        d="M-15 11 C-15 4 -3 4 -3 11 Z"
        fill={ACCENT}
      />

      <circle
        cx="9"
        cy="-4"
        r="4.5"
        fill={ACCENT}
      />

      <path
        d="M3 11 C3 4 15 4 15 11 Z"
        fill={ACCENT}
      />

      <circle
        cx="0"
        cy="-7"
        r="5.5"
        fill={ACCENT}
      />

      <path
        d="M-7.5 12 C-7.5 3.5 7.5 3.5 7.5 12 Z"
        fill={ACCENT}
      />
    </g>
  );
}

// ─────────────────────────────────────────────────────────────
// BRAND
// ─────────────────────────────────────────────────────────────

export function BrandIcon() {
  return (
    <g>
      <path
        d="
          M-15 9
          L15 9
          L17 -6
          L8 1
          L0 -10
          L-8 1
          L-17 -6
          Z
        "
        fill={ACCENT}
      />

      <rect
        x="-15"
        y="9"
        width="30"
        height="4"
        rx="2"
        fill={ACCENT}
      />
    </g>
  );
}