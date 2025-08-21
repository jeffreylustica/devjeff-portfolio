import "./About.scss";
import { motion } from "framer-motion";

const About = ({ resume }) => {
  const inViewVariants = {
    showX: {
      x: [-100, 0],
      opacity: [0, 1],
      transition: { delay: 0.2, duration: 0.5 },
    },
    showY: {
      y: [-100, 0],
      opacity: [0, 1],
      transition: { delay: 0.3, duration: 0.5 },
    },
    show: { opacity: [0, 1], transition: { delay: 0.7, duration: 0.5 } },
  };

  return (
    <div id="about" className="about">
      <div className="about__content container">
        <motion.h1
          className="about__heading"
          variants={inViewVariants}
          whileInView="showX"
        >
          Hey!
        </motion.h1>
        <div className="about__right">
          <motion.h1
            className="about__right__intro"
            variants={inViewVariants}
            whileInView="showY"
          >
            WELCOME!
          </motion.h1>
          <motion.p
            className="about__right__desc"
            variants={inViewVariants}
            whileInView="showY"
          >
            I'm Jeffrey Lustica, a front-end developer aspirant. I graduated
            with a Bachelor of Science in Information Technology degree and a
            Cum Laude at ACLC College Baliuag. I made the decision to return to
            web programming, so I enrolled in and finished the courses at an
            online coding school after working in a BPO company for five years
            as a data analyst. I'm now capable of developing a highly
            interactive web application using the latest web technologies. You
            can check out my work and skills below. If you are interested in
            working with me, feel free to get in touch.
          </motion.p>
          <motion.a
            className="about__right__resume"
            href={resume?.fileUrl}
            download="jeffrey-lustica-resume"
            target="_blank"
            rel="noreferrer"
            variants={inViewVariants}
            whileInView="show"
            whileHover={{
              scale: 1.05,
              color: "hsla(0, 0%, 100%, .95)",
              backgroundColor: "hsla(165, 80%, 43%, .75)",
              boxShadow: "0 4px 4px hsla(0, 0%, 0%, .5)",
            }}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
