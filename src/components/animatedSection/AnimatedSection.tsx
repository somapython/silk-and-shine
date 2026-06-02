import "./AnimatedSection.scss";
import { motion } from "framer-motion";

const AnimatedSection = () => {
  return (
    <section className="animated-section">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Luxury Fashion Collection</h2>

        <p>
          Discover premium sarees and jewellery
          crafted for elegance and tradition.
        </p>
      </motion.div>

    </section>
  );
};

export default AnimatedSection;