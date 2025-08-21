import { useState, useEffect } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { fetchDocuments } from "../../services/apiService";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getDocuments = async () => {
      try {
        const res = await fetchDocuments("skills");
        const data = await res.json();
        setSkills(data.documents);
      } catch (error) {
        console.log(error);
      }
    };

    getDocuments();
  }, []);

  return (
    <div id="skills" className="skills">
      <div className="container">
        <h2 className="skills__heading">My Skills</h2>
        <div className="skills__list">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="skills__list__item"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.075 }}
              whileInView={{ scale: 1, transition: { delay: i - i * 0.95 } }}
            >
              <div className="skills__list__item__wrapper flexCenter">
                <img
                  src={skill.imageUrl}
                  className="skills__list__item__icon"
                />
              </div>
              <span className="skills__list__item__name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
