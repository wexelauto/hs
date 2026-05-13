export const SoundWaveAnimation = () => (
  <div className="flex items-center justify-center gap-1 h-8">
    <style>{`
      @keyframes wave {
        0%, 100% { height: 4px; }
        50% { height: 20px; }
      }
      .wave-bar {
        width: 3px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 2px;
        animation: wave 0.6s ease-in-out infinite;
      }
    `}</style>
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="wave-bar"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

export const EmailPulseAnimation = () => (
  <div className="flex items-center justify-center h-8">
    <style>{`
      @keyframes text-flow {
        0% { opacity: 0; transform: translateY(3px); }
        50% { opacity: 1; }
        100% { opacity: 0; transform: translateY(-3px); }
      }
      @keyframes arrow-pulse {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
      }
      .text-line {
        animation: text-flow 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      .arrow-line {
        animation: arrow-pulse 1.5s ease-in-out infinite;
      }
    `}</style>
    <svg width="56" height="12" viewBox="0 0 56 12" className="overflow-visible">
      {/* Modern flowing text lines with smooth curves */}
      <line x1="3" y1="2.5" x2="18" y2="2.5" stroke="rgba(255, 255, 255, 0.85)" strokeWidth="0.8" strokeLinecap="round" className="text-line" style={{ animationDelay: "0s" }} />
      <line x1="3" y1="6" x2="21" y2="6" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="0.8" strokeLinecap="round" className="text-line" style={{ animationDelay: "0.2s" }} />
      <line x1="3" y1="9.5" x2="17" y2="9.5" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="0.8" strokeLinecap="round" className="text-line" style={{ animationDelay: "0.4s" }} />
      
      {/* Modern arrow with smooth styling */}
      <line x1="28" y1="6" x2="45" y2="6" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="0.8" strokeLinecap="round" className="arrow-line" style={{ animationDelay: "0s" }} />
      <path d="M43 4.5 L46 6 L43 7.5" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" className="arrow-line" style={{ animationDelay: "0s" }} />
    </svg>
  </div>
);

export const CartPriceAnimation = () => (
  <div className="flex items-center justify-center gap-1.5 h-8">
    <style>{`
      @keyframes price-tick {
        0%, 100% { color: rgba(255, 255, 255, 0.5); }
        50% { color: rgba(255, 255, 255, 1); }
      }
      .price-item {
        font-size: 12px;
        font-weight: bold;
        animation: price-tick 1s ease-in-out infinite;
      }
    `}</style>
    {["$", "↓", "$"].map((char, i) => (
      <div
        key={i}
        className="price-item"
        style={{ animationDelay: `${i * 0.2}s` }}
      >
        {char}
      </div>
    ))}
  </div>
);

export const PostsAnimation = () => (
  <div className="flex items-center justify-center h-8">
    <style>{`
      @keyframes center-platform-sync {
        0%, 100% { opacity: 1; }
        50% { opacity: 1; }
      }
      @keyframes outer-platform-sync {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 0.7; }
      }
      @keyframes engagement-flow {
        0% { transform: translateY(-8px); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(8px); opacity: 0; }
      }
      .center-platform {
        animation: center-platform-sync 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      .outer-platform {
        animation: outer-platform-sync 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      .engagement-pulse {
        animation: engagement-flow 1.2s ease-out infinite;
      }
    `}</style>
    <svg width="56" height="12" viewBox="0 0 56 12" className="overflow-visible">
      {/* Outer platform circles - secondary importance, smaller and muted */}
      <circle cx="8" cy="6" r="1.8" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.75" className="outer-platform" style={{ animationDelay: "0s" }} />
      <circle cx="48" cy="6" r="1.8" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.75" className="outer-platform" style={{ animationDelay: "0.4s" }} />
      
      {/* Center platform circle - primary focus, largest and brightest */}
      <circle cx="28" cy="6" r="3" fill="none" stroke="rgba(255, 255, 255, 1)" strokeWidth="1.2" className="center-platform" style={{ animationDelay: "0.2s" }} />
      
      {/* Connecting lines showing synchronization - muted background elements */}
      <line x1="9.8" y1="6" x2="25" y2="6" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="0.6" strokeDasharray="2" />
      <line x1="31" y1="6" x2="46.2" y2="6" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="0.6" strokeDasharray="2" />
      
      {/* Engagement/response indicators flowing from center platform - highlights primary action */}
      {[0, 1].map((i) => (
        <circle
          key={i}
          cx="28"
          cy="6"
          r="1.2"
          fill="rgba(255, 255, 255, 1)"
          className="engagement-pulse"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </svg>
  </div>
);

export const WebsiteLoadAnimation = () => (
  <div className="flex items-center justify-center gap-1 h-8">
    <style>{`
      @keyframes bar-grow {
        0% { width: 4px; }
        50% { width: 16px; }
        100% { width: 4px; }
      }
      .load-bar {
        height: 2px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 1px;
        animation: bar-grow 1s ease-in-out infinite;
      }
    `}</style>
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className="load-bar"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

export const DataFlowAnimation = () => (
  <div className="flex items-center justify-center gap-1.5 h-8">
    <style>{`
      @keyframes data-move {
        0%, 100% { transform: translateY(0); opacity: 0.5; }
        50% { transform: translateY(-4px); opacity: 1; }
      }
      .data-dot {
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        animation: data-move 0.8s ease-in-out infinite;
      }
    `}</style>
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="data-dot"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

export const PipelineAnimation = () => (
  <div className="flex items-center justify-center h-8">
    <style>{`
      @keyframes center-node-pulse {
        0%, 100% { r: 3.2px; opacity: 1; }
        50% { r: 3.8px; opacity: 1; }
      }
      @keyframes outer-node-pulse {
        0%, 100% { r: 1.2px; opacity: 0.6; }
        50% { r: 1.6px; opacity: 0.8; }
      }
      @keyframes line-flow {
        0%, 100% { stroke-dashoffset: 12; opacity: 0.35; }
        50% { stroke-dashoffset: 0; opacity: 0.6; }
      }
      .crm-center-node {
        animation: center-node-pulse 1.5s ease-in-out infinite;
      }
      .crm-outer-node {
        animation: outer-node-pulse 1.5s ease-in-out infinite;
      }
      .crm-connection {
        animation: line-flow 2s ease-in-out infinite;
        stroke-dasharray: 12;
        stroke-linecap: round;
      }
    `}</style>
    <svg width="48" height="18" viewBox="0 0 48 18" className="overflow-visible">
      {/* Simplified connection lines - muted to recede */}
      <line x1="8" y1="9" x2="20" y2="4" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.7" className="crm-connection" style={{ animationDelay: "0s" }} />
      <line x1="8" y1="9" x2="20" y2="14" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.7" className="crm-connection" style={{ animationDelay: "0.2s" }} />
      <line x1="20" y1="4" x2="40" y2="6" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.6" className="crm-connection" style={{ animationDelay: "0.3s" }} />
      <line x1="20" y1="14" x2="40" y2="12" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.6" className="crm-connection" style={{ animationDelay: "0.3s" }} />
      
      {/* Central node - highly prominent, largest and brightest */}
      <circle cx="8" cy="9" r="3.2" fill="rgba(255, 255, 255, 1)" className="crm-center-node" style={{ animationDelay: "0s" }} />
      
      {/* Middle tier nodes - secondary importance */}
      <circle cx="20" cy="4" r="1.2" fill="rgba(255, 255, 255, 0.7)" className="crm-outer-node" style={{ animationDelay: "0.3s" }} />
      <circle cx="20" cy="14" r="1.2" fill="rgba(255, 255, 255, 0.7)" className="crm-outer-node" style={{ animationDelay: "0.3s" }} />
      
      {/* Outer tier nodes - tertiary importance, recessed */}
      <circle cx="40" cy="6" r="1" fill="rgba(255, 255, 255, 0.5)" className="crm-outer-node" style={{ animationDelay: "0.6s" }} />
      <circle cx="40" cy="12" r="1" fill="rgba(255, 255, 255, 0.5)" className="crm-outer-node" style={{ animationDelay: "0.6s" }} />
    </svg>
  </div>
);
