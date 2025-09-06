import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container">
      <div className="top-section">
        {/* Left Image */}
        <div className="left">
          <Image
            src="/starfield.png"
            alt="Starfield"
            width={400}
            height={400}
          />
        </div>

        {/* Right Content */}
        <div className="right">
          <h1 className="title">
            A World <br /> Supercomputer
          </h1>
          <p className="tag">/ THE NEXUS LAYER 1</p>
          {/* Circle with Plus Sign */}
          <div className="circle-plus">
          </div>
          <p className="desc">
            Nexus is a new kind of Layer 1 blockchain — purpose-built for the AI
            era. It’s verifiable. Exponentially scalable. Built for agents. And
            open to anyone.
          </p>

          {/* Buttons */}
          <div className="button-group">
            <button className="btn black flex items-center gap-2">
              Button Name
              <span className="arrow-circle">
                <span className="arrow">→</span>
              </span>
            </button>
            <button className="btn outline">Button Name →</button>
          </div>

          {/* Features */}
          <ul className="features">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <li className="feature" key={i}>
                  <div className="feature-left">
                    <h3>Horizontally + Vertically Scalable</h3>
                  </div>
                  <div className="feature-right">
                    <p>
                      The Nexus Layer 1 is EVM-compatible and optimized for
                      verifiable compute. Use Rust or Solidity to deploy
                      applications that invoke zk-proven computation or power
                      agentic services.
                    </p>
                    <div className="icon">
                      <i className="fas fa-gamepad"></i>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
