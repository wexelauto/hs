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
      @keyframes heart-beat {
        0%, 100% { transform: scale(1); opacity: 0.6; }
        50% { transform: scale(1.2); opacity: 1; }
      }
      @keyframes float-up {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-12px); opacity: 0; }
      }
      .engagement-heart {
        animation: heart-beat 1.5s ease-in-out infinite;
      }
      .float-particle {
        position: absolute;
        width: 3px;
        height: 3px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        animation: float-up 1.2s ease-out infinite;
      }
    `}</style>
    <div className="relative w-12 h-8 flex items-center justify-center">
      {/* Main engagement indicator (heart shape representation) */}
      <svg width="10" height="10" viewBox="0 0 10 10" className="engagement-heart" style={{ animationDelay: "0s" }}>
        <path d="M5 9 C2 7, 0 5.5, 0 3.5 C0 2, 1 0.5, 2.5 0.5 C3.5 0.5, 4 1, 5 2 C6 1, 6.5 0.5, 7.5 0.5 C9 0.5, 10 2, 10 3.5 C10 5.5, 8 7, 5 9 Z" fill="rgba(255, 255, 255, 0.8)" />
      </svg>
      
      {/* Floating engagement particles */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="float-particle"
          style={{
            left: `${4 + i * 2}px`,
            top: "4px",
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}
    </div>
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
      @keyframes node-pulse {
        0%, 100% { r: 2.2px; opacity: 0.85; }
        50% { r: 3.2px; opacity: 1; }
      }
      @keyframes line-flow {
        0%, 100% { stroke-dashoffset: 12; opacity: 0.5; }
        50% { stroke-dashoffset: 0; opacity: 0.95; }
      }
      .crm-center-node {
        animation: node-pulse 1.5s ease-in-out infinite;
      }
      .crm-outer-node {
        animation: node-pulse 1.5s ease-in-out infinite;
      }
      .crm-connection {
        animation: line-flow 2s ease-in-out infinite;
        stroke-dasharray: 12;
        stroke-linecap: round;
      }
    `}</style>
    <svg width="56" height="24" viewBox="0 0 56 24" className="overflow-visible">
      {/* Connection lines with animation - improved contrast and cleaner styling */}
      <line x1="12" y1="12" x2="22" y2="7" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="1" className="crm-connection" style={{ animationDelay: "0s" }} />
      <line x1="12" y1="12" x2="22" y2="17" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="1" className="crm-connection" style={{ animationDelay: "0.2s" }} />
      <line x1="12" y1="12" x2="28" y2="12" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="1" className="crm-connection" style={{ animationDelay: "0.4s" }} />
      <line x1="22" y1="7" x2="44" y2="8" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="0.9" className="crm-connection" style={{ animationDelay: "0.3s" }} />
      <line x1="22" y1="17" x2="44" y2="16" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="0.9" className="crm-connection" style={{ animationDelay: "0.3s" }} />
      <line x1="28" y1="12" x2="44" y2="12" stroke="rgba(255, 255, 255, 0.55)" strokeWidth="0.9" className="crm-connection" style={{ animationDelay: "0.5s" }} />
      
      {/* Central node (Customer/Lead) - higher contrast */}
      <circle cx="12" cy="12" r="2.2" fill="rgba(255, 255, 255, 1)" className="crm-center-node" style={{ animationDelay: "0s" }} />
      
      {/* First tier nodes (Channels) - improved contrast */}
      <circle cx="22" cy="7" r="1.6" fill="rgba(255, 255, 255, 0.85)" className="crm-outer-node" style={{ animationDelay: "0.3s" }} />
      <circle cx="22" cy="17" r="1.6" fill="rgba(255, 255, 255, 0.85)" className="crm-outer-node" style={{ animationDelay: "0.3s" }} />
      <circle cx="28" cy="12" r="1.6" fill="rgba(255, 255, 255, 0.85)" className="crm-outer-node" style={{ animationDelay: "0.5s" }} />
      
      {/* Second tier nodes (Touchpoints) - improved contrast */}
      <circle cx="44" cy="8" r="1.4" fill="rgba(255, 255, 255, 0.75)" className="crm-outer-node" style={{ animationDelay: "0.6s" }} />
      <circle cx="44" cy="16" r="1.4" fill="rgba(255, 255, 255, 0.75)" className="crm-outer-node" style={{ animationDelay: "0.6s" }} />
      <circle cx="44" cy="12" r="1.4" fill="rgba(255, 255, 255, 0.75)" className="crm-outer-node" style={{ animationDelay: "0.8s" }} />
    </svg>
  </div>
);
