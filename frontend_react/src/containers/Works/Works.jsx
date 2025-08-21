import { useEffect, useState } from "react";
import "./Works.scss";
import { FaEye, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fetchDocuments } from "../../services/apiService";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const getDocuments = async () => {
      try {
        const res = await fetchDocuments("projects");
        const data = await res.json();
        setWorks(data.documents);
        setFilteredWorks(data.documents);
      } catch (error) {
        console.log(error);
      }
    };

    getDocuments();
  }, []);

  const handleWorkFilter = (category) => {
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      setActiveFilter(category);
      setFilteredWorks(
        works.filter((work) => {
          return work.tags.some(
            (obj) => obj.text.toLowerCase() === category.toLowerCase()
          );
        })
      );
    }, 500);
  };

  return (
    <div id="works" className="works">
      <div className="container">
        <h2 className="works__heading">Projects</h2>
        <div className="works__filters flexCenter">
          {["All", "Web App", "Mobile App", "React JS"].map((category, i) => (
            <motion.button
              key={i}
              type="button"
              className={`works__filters__btn ${
                activeFilter === category && "active-btn"
              }`}
              whileHover={{ backgroundColor: "hsla(165, 80%, 43%, .125)" }}
              whileInView={{ scale: [0, 1] }}
              onClick={() => handleWorkFilter(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <div className="works__projects">
          {filteredWorks.map((work, i) => (
            <motion.div
              className="works__projects__item"
              key={i}
              initial={{ y: 100, opacity: 0 }}
              whileInView={animateCard}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="works__projects__item__image">
                <img src={work.imageUrl} alt="project-image" />
                <motion.div
                  className="works__projects__item__links"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    whileHover={{ scale: 0.9 }}
                    href={work.liveUrl}
                    className="works__projects__item__links__link flexCenter"
                    target="__blank"
                  >
                    <FaEye />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 0.9 }}
                    href={work.githubUrl}
                    className="works__projects__item__links__link flexCenter"
                    target="__blank"
                  >
                    <FaGithub />
                  </motion.a>
                </motion.div>
              </div>
              <div className="works__projects__item__title">
                <span>{work.name}</span>
              </div>
              <p className="works__projects__item__desc">{work.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
