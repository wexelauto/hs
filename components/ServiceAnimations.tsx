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
  <div className="flex items-center justify-center gap-2 h-8">
    <style>{`
      @keyframes pulse-in {
        0%, 100% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1); }
      }
      .email-pulse {
        width: 6px;
        height: 6px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        animation: pulse-in 1s ease-in-out infinite;
      }
    `}</style>
    <div className="email-pulse" style={{ animationDelay: "0s" }} />
    <div className="email-pulse" style={{ animationDelay: "0.33s" }} />
    <div className="email-pulse" style={{ animationDelay: "0.66s" }} />
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
  <div className="flex items-center justify-center gap-1.5 h-8">
    <style>{`
      @keyframes slide-in {
        0% { transform: translateX(-10px); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateX(10px); opacity: 0; }
      }
      .post-box {
        width: 4px;
        height: 6px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 1px;
        animation: slide-in 1.2s ease-in-out infinite;
      }
    `}</style>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="post-box"
        style={{ animationDelay: `${i * 0.3}s` }}
      />
    ))}
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
  <div className="flex items-center justify-center gap-1 h-8">
    <style>{`
      @keyframes pipeline-flow {
        0% { width: 3px; opacity: 0.4; }
        50% { width: 10px; opacity: 1; }
        100% { width: 3px; opacity: 0.4; }
      }
      .pipeline-stage {
        height: 5px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 2px;
        animation: pipeline-flow 1.2s ease-in-out infinite;
      }
    `}</style>
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className="pipeline-stage"
        style={{ animationDelay: `${i * 0.2}s` }}
      />
    ))}
  </div>
);
