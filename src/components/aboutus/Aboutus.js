import React from 'react';
import './AboutUs.css';
import logojavi from '../../imagenes/fotopjavi.png';
import logoadri from '../../imagenes/fotopadri.png';

function AboutUs() {

  const teamMembers = [
    {
        name: 'Javier Novella',
        role: 'Developer',
        description: 'Desarrollador junior de la Universidad de Oviedo, estudiante del grado de Informatica de Software y saxofonista profesional del conservatorio de Oviedo',
        photo: logojavi
    },
    {
        name: 'Adrián Sanz',
        role: 'Developer',
        description: 'Desarrollador junior de la Universidad de Gerona, estudiante de Ingeniería Informatica y especialista en el campo de las inteligencias artificiales',
        photo: logoadri
    }
  ];

  return (
    <div className='totalAbout'>
      <div className="about-us">
        <h2 style={{ color: 'black' }}>About Us</h2>
        <div className="team-members">
          {teamMembers.map(member => (
            <div className="member" key={member.name}>
              <img src={member.photo} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;