import React, { useState } from "react";
import { motion } from "framer-motion";
import { data } from "../../data/data";

const Memes = () => {
  const [memeData, setMemeData] = useState(data);

  return (
    <>
      <p className="logo">nollymemes</p>
      <br />
      <br />
      <br />
      <br />
      {memeData.map((datum) => {
        const { id, image } = datum;

        return (
          <div key={id} className="memes-page">
            <motion.img
              src={image}
              alt=""
              className="memes-page memes"
              initial={{
                width: "75%",
                height: "75%"
              }}
              whileHover={{
                width: "80%",
                height: "80%"
              }}
              transition={{
                type: "spring",
                stiffness: 200
              }}
            />
            <br />
          </div>
        );
      })}
    </>
  );
};

export { Memes };
