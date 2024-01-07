import React from 'react';
import './AboutUs.css';
import logojavi from '../../imagenes/fotopjavi.png';
import logoadri from '../../imagenes/fotopadri.png';

function AboutUs() {

  const teamMembers = [
    {
        name: 'Javier Novella',
        role: 'Developer',
        description: 'Junior developer from the University of Oviedo, student of the Software Informatics degree and professional saxophonist from the Oviedo Conservatory',
        photo: logojavi
    },
    {
        name: 'Adrián Sanz',
        role: 'Developer',
        description: 'Junior developer from the University of Lerida, student of Computer Engineering and specialist in the field of artificial intelligence',
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