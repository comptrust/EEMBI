import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  iconOnly = false,
  inverted = false,
  size = 'md'
}) => {
  const iconSize = size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11';
  const textSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base';
  const subtextSize = size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-xs' : 'text-[11px]';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Foundation Emblem SVG - Calibrated to Logo MBI Palette */}
      <div className={`relative ${iconSize} shrink-0`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Globe Azure Background (#5295DC) */}
          <circle cx="100" cy="85" r="72" fill="#5295DC" />
          
          {/* Continents (#7ABF86) */}
          <path
            d="M52 48C58 42 72 40 80 50C85 58 78 68 70 72C62 76 50 82 48 95C46 108 55 118 62 122C54 116 46 102 44 88C42 70 46 54 52 48Z"
            fill="#7ABF86"
          />
          <path
            d="M125 35C140 40 155 52 160 68C164 80 158 92 148 100C140 106 135 116 138 126C130 118 126 108 128 98C130 84 140 76 138 62C136 50 128 42 125 35Z"
            fill="#7ABF86"
          />
          <path
            d="M85 30C100 28 115 32 120 40C114 46 105 48 95 44C88 40 85 34 85 30Z"
            fill="#7ABF86"
          />

          {/* Central Silhouette: Mother & Two Children in Logo Deep Navy (#162846) */}
          {/* Left Child */}
          <circle cx="68" cy="82" r="7" fill="#162846" />
          <path
            d="M61 93C61 90 64 89 68 89C72 89 75 90 75 93L78 115H58L61 93Z"
            fill="#162846"
          />
          <line x1="68" y1="115" x2="65" y2="132" stroke="#162846" strokeWidth="4" strokeLinecap="round" />
          <line x1="72" y1="115" x2="75" y2="132" stroke="#162846" strokeWidth="4" strokeLinecap="round" />

          {/* Center Mother / Mentor Figure */}
          <circle cx="100" cy="58" r="9" fill="#162846" />
          <path
            d="M91 72C91 68 95 67 100 67C105 67 109 68 109 72L115 125H85L91 72Z"
            fill="#162846"
          />
          <line x1="95" y1="125" x2="93" y2="146" stroke="#162846" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="105" y1="125" x2="107" y2="146" stroke="#162846" strokeWidth="4.5" strokeLinecap="round" />

          {/* Right Child */}
          <circle cx="132" cy="84" r="7" fill="#162846" />
          <path
            d="M125 95C125 92 128 91 132 91C136 91 139 92 139 95L142 116H122L125 95Z"
            fill="#162846"
          />
          <line x1="128" y1="116" x2="125" y2="133" stroke="#162846" strokeWidth="4" strokeLinecap="round" />
          <line x1="135" y1="116" x2="138" y2="133" stroke="#162846" strokeWidth="4" strokeLinecap="round" />

          {/* Hands holding the family together */}
          <path
            d="M74 98L92 90M108 90L126 98"
            stroke="#162846"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Supportive Caring Hands Cradling from Base (#C37238) */}
          {/* Left Hand */}
          <path
            d="M30 118C28 126 26 142 34 158C42 174 58 185 82 192C86 193 88 188 84 185C66 172 56 156 54 135C53 128 47 114 43 118C40 121 38 132 37 138C34 132 32 124 30 118Z"
            fill="#C37238"
          />
          <path
            d="M38 116C37 112 33 111 31 115C27 122 25 133 30 148C34 145 37 136 38 127L38 116Z"
            fill="#C37238"
          />
          <path
            d="M48 108C46 105 42 106 41 110C39 116 39 125 43 133C46 128 48 120 48 114V108Z"
            fill="#C37238"
          />
          <path
            d="M58 105C55 103 52 105 52 108C52 114 53 121 57 128C59 123 60 115 59 110L58 105Z"
            fill="#C37238"
          />

          {/* Right Hand */}
          <path
            d="M170 118C172 126 174 142 166 158C158 174 142 185 118 192C114 193 112 188 116 185C134 172 144 156 146 135C147 128 153 114 157 118C160 121 162 132 163 138C166 132 168 124 170 118Z"
            fill="#C37238"
          />
          <path
            d="M162 116C163 112 167 111 169 115C173 122 175 133 170 148C166 145 163 136 162 127L162 116Z"
            fill="#C37238"
          />
          <path
            d="M152 108C154 105 158 106 159 110C161 116 161 125 157 133C154 128 152 120 152 114V108Z"
            fill="#C37238"
          />
          <path
            d="M142 105C145 103 148 105 148 108C148 114 147 121 143 128C141 123 140 115 141 110L142 105Z"
            fill="#C37238"
          />
        </svg>
      </div>

      {/* Official Typography Lockup matching original mark */}
      {!iconOnly && (
        <div className="flex items-center gap-3">
          <div className={`w-[1.5px] self-stretch my-0.5 ${inverted ? 'bg-slate-600' : 'bg-slate-300'}`} />
          <div className="flex flex-col leading-tight">
            <span
              className={`font-semibold tracking-tight ${textSize} ${
                inverted ? 'text-white' : 'text-[#162846]'
              }`}
            >
              Emmanuel Ebot Mbi
            </span>
            <span
              className={`font-medium tracking-wider uppercase ${subtextSize} ${
                inverted ? 'text-[#DE884A]' : 'text-[#C37238]'
              }`}
            >
              Foundation
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
