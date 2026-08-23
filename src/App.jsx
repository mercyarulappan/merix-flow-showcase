import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  Spinner,
  DotsLoader,
  PulseLoader,
  RainbowLoader,
  BubblesLoader,
  WaveLoader,
  OrbitLoader,
  LiquidLoader,
  AuroraLoader,
  GalaxyLoader,
  DNAloader,
  OrbitDotsLoader,
  NeonLoader,
  MatrixLoader,
  MeteorLoader,
  RadarLoader,
  FireLoader,
  HeartLoader,
  SnowLoader,
  FlowerLoader,
  WaterDropLoader,
  LeafLoader,
  CloudLoader,
  SunLoader,
  MoonLoader,
  EqualizerLoader,
  HourglassLoader,
  TypingLoader,
  PacmanLoader,
  GameLoader,
  RocketLoader,
  ParticleLoader,
  PortalLoader,
  MorphLoader,
  MagicLoader,
} from "merix-flow";

import "./App.css";

const loaders = [
  {
    name: "Spinner",
    component: Spinner,
    category: "Basic",
    props: ["size", "variant", "speed", "color", "label"],
  },
  {
    name: "DotsLoader",
    component: DotsLoader,
    category: "Basic",
    props: ["size", "color", "label"],
  },
  {
    name: "PulseLoader",
    component: PulseLoader,
    category: "Basic",
    props: ["size", "color", "label"],
  },

  {
    name: "RainbowLoader",
    component: RainbowLoader,
    category: "Colorful",
    props: ["size"],
  },
  {
    name: "BubblesLoader",
    component: BubblesLoader,
    category: "Colorful",
    props: ["size"],
  },
  {
    name: "WaveLoader",
    component: WaveLoader,
    category: "Colorful",
    props: ["size"],
  },

  {
    name: "OrbitLoader",
    component: OrbitLoader,
    category: "Creative",
    props: ["size"],
  },
  {
    name: "LiquidLoader",
    component: LiquidLoader,
    category: "Creative",
    props: ["size"],
  },
  {
    name: "AuroraLoader",
    component: AuroraLoader,
    category: "Creative",
    props: ["size"],
  },
  {
    name: "GalaxyLoader",
    component: GalaxyLoader,
    category: "Creative",
    props: ["size"],
  },
  {
    name: "DNAloader",
    component: DNAloader,
    category: "Creative",
    props: ["size"],
  },
  {
    name: "OrbitDotsLoader",
    component: OrbitDotsLoader,
    category: "Creative",
    props: ["size"],
  },

  {
    name: "NeonLoader",
    component: NeonLoader,
    category: "Tech",
    props: ["size"],
  },
  {
    name: "MatrixLoader",
    component: MatrixLoader,
    category: "Tech",
    props: ["size"],
  },
  {
    name: "MeteorLoader",
    component: MeteorLoader,
    category: "Tech",
    props: ["size"],
  },
  {
    name: "RadarLoader",
    component: RadarLoader,
    category: "Tech",
    props: ["size"],
  },

  {
    name: "FireLoader",
    component: FireLoader,
    category: "Nature",
    props: ["size"],
  },
  {
    name: "HeartLoader",
    component: HeartLoader,
    category: "Nature",
    props: ["size"],
  },
  {
    name: "SnowLoader",
    component: SnowLoader,
    category: "Nature",
    props: ["size"],
  },
  {
    name: "FlowerLoader",
    component: FlowerLoader,
    category: "Nature",
    props: ["size"],
  },
  {
    name: "WaterDropLoader",
    component: WaterDropLoader,
    category: "Nature",
    props: ["size"],
  },
  {
    name: "LeafLoader",
    component: LeafLoader,
    category: "Nature",
    props: ["size"],
  },

  {
    name: "CloudLoader",
    component: CloudLoader,
    category: "Weather",
    props: ["size"],
  },
  {
    name: "SunLoader",
    component: SunLoader,
    category: "Weather",
    props: ["size"],
  },
  {
    name: "MoonLoader",
    component: MoonLoader,
    category: "Weather",
    props: ["size"],
  },

  {
    name: "EqualizerLoader",
    component: EqualizerLoader,
    category: "Music",
    props: ["size"],
  },

  {
    name: "HourglassLoader",
    component: HourglassLoader,
    category: "Utility",
    props: ["size"],
  },
  {
    name: "TypingLoader",
    component: TypingLoader,
    category: "Utility",
    props: ["text", "size"],
  },

  {
    name: "PacmanLoader",
    component: PacmanLoader,
    category: "Games & Space",
    props: ["size"],
  },
  {
    name: "GameLoader",
    component: GameLoader,
    category: "Games & Space",
    props: ["size"],
  },
  {
    name: "RocketLoader",
    component: RocketLoader,
    category: "Games & Space",
    props: ["size"],
  },

  {
    name: "ParticleLoader",
    component: ParticleLoader,
    category: "Pro",
    props: ["size"],
  },
  {
    name: "PortalLoader",
    component: PortalLoader,
    category: "Pro",
    props: ["size"],
  },
  {
    name: "MorphLoader",
    component: MorphLoader,
    category: "Pro",
    props: ["size"],
  },
  {
    name: "MagicLoader",
    component: MagicLoader,
    category: "Pro",
    props: ["size"],
  },
];



const sizes = ["small", "medium", "large"];

const colors = ["#8b5cf6", "#06b6d4", "#22c55e", "#ec4899", "#f97316"];

function App() {
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedColor, setSelectedColor] = useState("#8b5cf6");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedLoader, setCopiedLoader] = useState(null);
  const now = new Date(); 
  const categories = [
    "All",
    ...new Set(loaders.map((loader) => loader.category)),
  ];

  const filteredLoaders = loaders.filter((loader) => {
    const matchesSearch = loader.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || loader.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCopy = async (name) => {
    try {
      await navigator.clipboard.writeText(`<${name} />`);

      setCopiedLoader(name);

      setTimeout(() => {
        setCopiedLoader(null);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  

  const getLoaderProps = (loader) => {
    const componentProps = {
      size: selectedSize,
    };
    if (loader.props.includes("color")) {
      componentProps.color = selectedColor;
    }

    if (loader.name === "TypingLoader") {
      componentProps.text = "Loading";
    }

    return componentProps;
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="top">
          <span className="badge">35 LOADERS</span>
        </div>
        <div className="trybadge">
          <span className="badge">
            <a
              href="https://github.com/mercyarulappan/merix-flow"
              target="_blank"
            >
              {" "}
              Try it here!{" "}
            </a>
          </span>
        </div>
        <span className="badge">version 1</span>
        <h1>
          Merix<span>Flow</span>
        </h1>
        <p>
          Creative and colorful loading animations for modern React
          applications.
        </p>
      </header>

      <section className="toolbar">
        <input
          type="text"
          placeholder="Search loaders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="controls">
        <div className="control-group">
          <span>Size</span>

          <div className="control-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "active" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <span>Color</span>

          <div className="color-options">
            {colors.map((color) => (
              <button
                key={color}
                className={selectedColor === color ? "active" : ""}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>

          <small>Color applies only to basic loaders.</small>
        </div>
      </section>

      <main className="loader-grid">
        {filteredLoaders.map(({ name, component: Loader, category, props }) => {
          const componentProps = getLoaderProps({
            name,
            props,
          });

          return (
            <article className="loader-card" key={name}>
              <div className="loader-preview">
                <Loader {...componentProps} />
              </div>

              <div className="loader-info">
                <div className="loader-details">
                  <div className="loader-title-row">
                    <h3>{name}</h3>

                    <button
                      className="copy-button"
                      onClick={() => handleCopy(name)}
                    >
                      {copiedLoader === name ? "Copied ✓" : "Copy"}
                    </button>
                  </div>

                  <span className="loader-category">{category}</span>

                  <div className="loader-props">
                    {props.map((prop) => (
                      <span key={prop}>{prop}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </main>

      {filteredLoaders.length === 0 && (
        <div className="empty-state">No loaders found.</div>
      )}

      <footer>
        <div>Mercy © {now.getFullYear()}</div>
        <div className="links">
          <a
            href="https://github.com/mercyarulappan/merix-flow"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.npmjs.com/package/merix-flow" target="_blank">
            <i className="fa-brands fa-npm"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
