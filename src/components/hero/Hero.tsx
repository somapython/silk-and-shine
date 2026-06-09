// import { useEffect, useState } from "react";
// import "./Hero.scss";
// import { motion } from "framer-motion";
// import { getHero } from "../../services/heroService";

// const Hero = () => {
//   const [hero,setHero] = useState<any>(null);

//       useEffect(() => {
//       loadHero();
//       },[]);

//       const loadHero =
//       async() =>
//       {
//       const data =
//       await getHero();

//       setHero(data);
//       };
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <motion.div 
//           className="hero-left"
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <p className="hero-subtitle">NEW COLLECTION {new Date().getFullYear()}</p>
          
//           <h1> {hero?.title} </h1>

//           {/* <p className="hero-description">
//             Directly sourced from master weavers of<br />
//             Kanchipuram, Varanasi & Chanderi.
//           </p> */}
//           <p className="hero-description"> {hero?.description} </p>

//           <div className="hero-buttons">
//             <a href={hero?.shopNowLink || "/products"} className="btn-primary">Shop Now</a>
//             <a href={hero?.lookbookLink || "/"} className="btn-secondary">View Lookbook</a>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="hero-right"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           <div className="hero-image-container">
//             {
//               hero?.imageUrl && (

//               <img
//                 src={hero.imageUrl}
//                 alt={hero.title}
//                 className="hero-image"
//               />

//               )
//               }
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { useEffect, useState } from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { getHero } from "../../services/heroService";

const Hero = () => {

  const [hero, setHero] =
    useState<any>(null);

  useEffect(() => {
    loadHero();
  }, []);

  const loadHero = async () => {

    try {

      const data =
        await getHero();

      setHero(data);

    }
    catch(error)
    {
      console.error(error);
    }
  };

  return (

    <section className="hero">

      <div className="hero-content">

        <motion.div
          className="hero-left"
          initial={{
            opacity: 0,
            x: -40
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1
          }}
        >

          <p className="hero-subtitle">
            NEW COLLECTION {new Date().getFullYear()}
          </p>

          <h1>
            {hero?.title ||
            "Silk & Shine"}
          </h1>

          <p className="hero-description">
            {hero?.description}
          </p>

          <div className="hero-buttons">

            <a
              href={
                hero?.shopNowLink ||
                "/products"
              }
              className="btn-primary"
            >
              Shop Now
            </a>

            <a
              href={
                hero?.lookbookLink ||
                "/"
              }
              className="btn-secondary"
            >
              View Lookbook
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{
            opacity: 0,
            x: 40
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1,
            delay: .2
          }}
        >

          <div className="hero-image-container">

            {
              hero?.imageUrl && (

                <img
                  src={hero.imageUrl}
                  alt={hero.title}
                  className="hero-image"
                />

              )
            }

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;