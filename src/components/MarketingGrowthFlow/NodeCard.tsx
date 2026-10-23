import React from 'react';

interface NodeCardProps {
    label: string | React.ReactNode;
    icon: React.ReactNode;
    align?: 'left' | 'right'; // 'left' means text is on the left of the icon
}

export default function NodeCard({ label, icon, align = 'left' }: NodeCardProps) {
    return (
        <div className={`flex items-center gap-4 ${align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>

            {/* ── Text Label ── */}
            <div
                className={`font-body text-sm md:text-base font-semibold leading-tight text-navy ${align === 'left' ? 'text-right' : 'text-left'
                    }`}
            >
                {label}
            </div>

            {/* ── Icon Box (White rounded square with shadow) ── */}
            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_24px_rgba(232,66,10,0.15)] relative z-10">
                <svg
                    width="40"
                    height="40"
                    viewBox="-24 -24 48 48" // This ensures the (0,0) origin icons center perfectly
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {icon}
                </svg>
            </div>

        </div>
    );
}