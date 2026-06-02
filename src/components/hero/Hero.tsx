import "./Hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="hero-subtitle">NEW COLLECTION 2026</p>
          
          <h1>
            Timeless <span className="highlight">Silk</span> & <br />
            Handloom Sarees
          </h1>

          <p className="hero-description">
            Directly sourced from master weavers of<br />
            Kanchipuram, Varanasi & Chanderi.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-secondary">View Lookbook</button>
          </div>
        </motion.div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="product-image-placeholder">
            PRODUCT IMAGE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;