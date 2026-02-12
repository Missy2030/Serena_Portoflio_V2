import { FaCode,FaFacebook,FaInstagram,FaCrop,FaAppStore,FaWhatsapp  } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './i18n';
import emailjs from '@emailjs/browser';


function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
}

function App() {
  // Animation des compteurs
  const [counters, setCounters] = useState([
    { value: 0, target: 60, text: "Projets complétés", suffix: "+" },
    { value: 0, target: 5, text: "Années d'expérience", suffix: "+" },
    { value: 0, target: 50, text: "Clients satisfaits", suffix: "%" }
  ]);


  //Logique JS avec emailjs pour l'envoi de formulaire
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_nqodvw8', 'template_62cxk75', form.current, 'Bnlu3Mqg_8OPJ7AWB')
    .then((result) => {
        alert("Message envoyé avec succès !");
        form.current.reset();
    }, (error) => {
        alert("Une erreur est survenue, réessayez.");
        console.error(error.text);
    });
};


  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => prev.map(item => ({
        ...item,
        value: item.value < item.target ? item.value + 1 : item.value
      })));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Données des services
  const services = [
    {
      title: "Web Design",
      items: ["Design sur mesure", "Optimisation SEO", "Tests cross-navigateurs"],
      color: "linear-gradient(135deg,rgb(138, 102, 223) 0%,rgb(226, 96, 161) 100%)",
      icon: <FaCode style={{color:"red", fontSize: "3rem" }} />
    },
    {
      title: "UI/UX Design",
      items: ["Prototypes interactifs", "Tests utilisateurs", "Design système"],
      color: "linear-gradient(135deg,rgb(22, 78, 74) 0%, #8b5cf6 100%)",
      icon: <FaCrop style={{ color: "blue", fontSize: "3rem" }}/>
    },
    {
      title: "App Development",
      items: ["Applications cross-platform", "Intégration API et de services tiers", "Optimisation des performances et de la sécurité des applications.", "Maintenance et mises à jour de l'application"],
      color: "linear-gradient(135deg,rgb(33, 87, 69) 0%, #3b82f6 100%)",
      icon: < FaAppStore style={{color:"pink", fontSize: "3rem" }} />
    }
  ];

  // Données des projets
  const projects = [
    {
      title: "Portfolio personnel responsive",
      description: "Site pour présenter mes compétences et réalisations",
      tags: ["HTML", "JavaScript","CSS"],
      image: "71b1c757-259d-47ed-a4da-e3359bd3c658 - Copy.jpg",
      overlayColor: "rgba(72, 21, 190, 0.85)",
      link: "https://serenaportfolio.free.nf/"
    },
    {
      title: "E-commerce",
      description: "Plateforme de vente en ligne",
      tags: ["React", "Node.js","API"],
      image: "821924ec3c3d85c87ff018320f1112f8.jpg",
      overlayColor: "rgba(148, 28, 172, 0.85)",
      link: "https://techandme.ct.ws/"
    }
  ];

  // Références pour l'animation au scroll
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [workRef, workVisible] = useScrollAnimation();

  return (
    <div className="portfolio">
      {/* Section Header avec effet de brillance */}
      <header id="#top" className="header-section" style={{
        background: "radial-gradient(circle, #f8f9fa 0%, #e9ecef 100%)",
        textAlign: "center",
        padding: "6rem 0"
      }}>
        <h1 style={{
          fontSize: "4rem",
          margin: "0",
          background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animation: "textGlow 2s ease-in-out infinite alternate"
        }}>
          Serena
        </h1>
        <h2 style={{
          fontSize: "1.8rem",
          color: "#4b5563",
          margin: "1rem 0"
        }}>
          Web Designer & Développeuse
        </h2>
        <p style={{
          fontSize: "1.2rem",
          color: "#6b7280",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Créatrice d'expériences digitales mémorables
        </p>
      </header>

      {/* Section Compteurs animés */}
      <section className="counter-section" style={{
        background: "linear-gradient(135deg,rgb(116, 144, 199) 0%,rgb(218, 230, 229) 100%)",
        padding: "4rem 0",
        margin: "2rem 0"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap"
        }}>
          {counters.map((counter, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "3.5rem",
                fontWeight: "bold",
                background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: "1"
              }}>
                {counter.value}{counter.suffix}
              </div>
              <p style={{
                color: "#4b5563",
                fontSize: "1.1rem",
                marginTop: "0.5rem"
              }}>{counter.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section About */}
      <section 
        ref={aboutRef}
        className="about-section"
        style={{
          opacity: aboutVisible ? 1 : 0,
          transform: aboutVisible ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.6s ease-out",
          padding: "3rem 0",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <h2 className="section-title">À Propos</h2>
        <div style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start"
        }}>
          <div style={{ flex: 1 }}>
            <p style={{
              fontSize: "1.2rem",
              lineHeight: "1.7",
              color: "#4b5563"
            }}>
              Étudiante en systèmes informatiques et Logiciels, passionnée par le développement web et la création 
              d'interfaces utilisateur professionnelles. Spécialisée dans la conception et l'optimisation 
              de sites web avec des compétences solides en SEO et e-commerce.
            </p>
          </div>
          
          <div style={{ flex:1  }}>
            <h3 style={{
              fontSize: "2rem",
              color: "#1f2937",
              marginBottom: "1.5rem",
              
            }}>Mes Compétences</h3>
            
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem"
            }}>
              {[
                { name: "UI/UX Design", level: 80 },
                { name: "Développement Web", level: 75 },
                { name: "React Native", level: 65 }
              ].map((skill, index) => (
                <div key={index}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem"
                  }}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div style={{
                    height: "9px",
                    background: "#e5e7eb",
                    borderRadius: "4px",
                    overflow: "hidden"
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
                      transition: "width 1s ease-out"
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Services avec effets de survol */}
      <section 
        ref={servicesRef}
        className="services-section"
        style={{
          opacity: servicesVisible ? 1 : 0,
          transform: servicesVisible ? "translateY(0)" : "translateY(50px)",
          transition: "all 0.6s ease-out 0.2s",
          padding: "4rem 0",
          background: "#f9fafb"
        }}
      >
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem"
        }}>
          <h2 className="section-title">Mes Services</h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "3rem"
          }}>
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card"
                style={{
                  background: "rgb(134, 159, 209)",
                  borderRadius: "12px",
                  padding: "2rem",
                  boxShadow: "0 4px 20px rgba(40, 118, 182, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: "1"
                }}
              >
                <div 
                  className="service-overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: service.color,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    zIndex: "-1"
                  }}
                ></div>
                
                <div style={{ position: "relative", zIndex: "2" }}>
                  <div style={{
                    fontSize: "2.5rem",
                    marginBottom: "1rem"
                  }}>{service.icon}</div>
                  
                  <h3 style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    color: "#1f2937"
                  }}>{service.title}</h3>
                  
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0
                  }}>
                    {service.items.map((item, i) => (
                      <li key={i} style={{
                        padding: "0.5rem 0",
                        borderBottom: "1px solid rgba(0,0,0,0.05)",
                        display: "flex",
                        alignItems: "center"
                      }}>
                        <span style={{
                          display: "inline-block",
                          width: "8px",
                          height: "8px",
                          background: service.color,
                          borderRadius: "50%",
                          marginRight: "0.75rem"
                        }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets  */}
      <section 
  ref={workRef}
  className="work-section"
  style={{
    opacity: workVisible ? 1 : 0,
    transform: workVisible ? "translateY(0)" : "translateY(50px)",
    transition: "all 0.6s ease-out 0.4s",
    padding: "4rem 0",
    maxWidth: "1230px",
    margin: "0 auto"
  }}
>
  <h2 className="section-title">Mes Réalisations</h2>
  
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "2rem",
      marginTop: "3rem"
    }}
  >
    {projects.map((project, index) => (
      <a 
        key={index}
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "block" }}
      >
        <div 
          className="project-card"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            transition: "transform 0.4s ease",
            width: "100%",
            aspectRatio: "1 / 1", // carré responsive
            cursor: "pointer"
          }}
          onMouseEnter={e => e.currentTarget.querySelector('.project-overlay').style.opacity = 1}
          onMouseLeave={e => e.currentTarget.querySelector('.project-overlay').style.opacity = 0}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/images/${project.image}`}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease"
            }}
          />
          
          <div 
            className="project-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: project.overlayColor,
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              opacity: 0,
              transition: "opacity 0.4s ease"
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", textAlign: "center" }}>
              {project.title}
            </h3>
            <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              {project.description}
            </p>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center"
            }}>
              {project.tags.map((tag, i) => (
                <span 
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem"
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    ))}
  </div>
</section>

      <a
  href="CV_Hodonou_Serena.docx"
  download
  className="cv-button"
  style={{
    marginTop:"2rem",
    padding: "1.5rem 2rem",
    background: "PURPLE",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
    transition: "all 0.3s ease",
    display: "inline-block"
  }}
>
  Download my CV
</a>


      {/* Section Contact */}
      <section className="contact-section" style={{
        padding: "4rem 3rem",
        background: "linear-gradient(135deg,rgb(69, 99, 160) 0%, #e5e7eb 100%)",
        marginTop: "2rem"
      }}>
        <h2 className="section-title">Contactez-moi</h2>
          
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          textAlign:"center"
        }}>

          
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            marginTop: "2rem",
            flexWrap: "wrap"
          }}>
            <div style={{
              background: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              minWidth: "300px"
            }}>
              <h3 style={{
                color: "#1f2937",
                marginBottom: "1.5rem"
              }}>Coordonnées</h3>
              
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize:"1.3rem"
                }}>
                  <span>📧</span>
                  <span> <a href="mailto:webstudiomissy@gmail.com" style={{color:"purple",textDecoration: "none" }} >webstudiomissy@gmail.com</a></span>
                </div>
                
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "1.3rem"
                }}>
                  <span> < IoPhonePortrait /> </span>
                  <span>+229 01 96 01 79 83</span>
                </div>
              </div>
            </div>
            
            <div style={{
              background: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              minWidth: "300px"
            }}>
              <h3 style={{
                color: "#1f2937",
                marginBottom: "1.5rem"
              }}>Réseaux sociaux</h3>
              
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem"
              }}>
                <a href="https://www.instagram.com/web_studio_shm" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
                  color: "white",
                  borderRadius: "60%",
                  textDecoration: "none",
                  icon: < FaInstagram />
                }}>
                  
                  <span> < FaInstagram /></span>
                </a>
                
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  background: "linear-gradient(45deg, #3b82f6, #1d4ed8)",
                  color: "white",
                  borderRadius: "60%",
                  textDecoration: "none",
                  
                }}>
                  <span> <FaFacebook /> </span>
                </a>
                
                <a href="https://wa.me/+2290141123574" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  background: "linear-gradient(45deg,rgb(19, 197, 34),rgb(32, 156, 7))",
                  color: "white",
                  borderRadius: "60%",
                  textDecoration: "none",
                  
                }}>
                  <span>< FaWhatsapp  /></span>
                  
                </a>
              </div>
            </div>



<form id="contact_form" onSubmit={sendEmail} ref={form} style={{
  background: "white",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  marginTop: "2rem",
  maxWidth: "650px",
  marginLeft: "auto",
  marginRight: "auto"
}}>
  <h3 style={{ color: "#1f2937", marginBottom: "1rem" }}>Envoyez-moi un message</h3>

  <input type="text" name="user_name" placeholder="Votre nom" required style={{
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontWeight:"bold",
    fontSize: "1rem" 
  }} />

  <input type="email" name="user_email" placeholder="Votre email" required style={{
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontWeight:"bold",
    fontSize: "1rem" 

  }} />

  <textarea name="message" rows="5" placeholder="Votre message" required style={{
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "1rem" 
  }} />

  <button type="submit" style={{
    background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
    color: "white",
    padding: "0.75rem 2rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    
  }}>Envoyer</button>
</form>


            
          </div>
        </div>
      </section>

      {/* Bouton Retour en haut flottant */}
      <a 
        href="#top" 
        className="floating-button"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          background: "linear-gradient(45deg, #8b5cf6, #ec4899)",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(139, 92, 246, 0.3)",
          textDecoration: "none",
          fontSize: "1.5rem",
          zIndex: "100",
          transition: "all 0.3s ease"
        }}
      >
        ↑
      </a>
    </div>
  );

  
}

export default App;