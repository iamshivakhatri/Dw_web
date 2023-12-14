import React from 'react';
import '../CSS/about.css';


const TeamMemberCard = ({ name, email, github }) => {
  return (
    <div className="team-member-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>
        <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
      </p>
    </div>
  );
};

const AboutUs = () => {
  const teamMembers = [
    { name: 'Shiva Khatri', email: 'iamshivakhatri@gmail.com', github: 'https://github.com/iamshivakhatri' },
    { name: 'Gaurab Baral', email: 'gaurab@gmail.com', github: 'https://github.com/Gaurab-B' },
    { name: 'Aditya Khanal', email: 'khanal.aditya1122@gmail.com', github: 'https://github.com/AadityaKhanal2003' },
    { name: 'Mandeep Aryal', email: 'mandeep@gmail.com', github: 'https://github.com/mandeep' },
  ];

  return (
    <div className="about-us-container">
      <div className="about-us-content">

        <p>
         <h1>Welcome! </h1><br/>
         We are a passionate team under North American Stainless, and our mission is to 
        make datasets fun and insightful. Based in North America, we bring together a diverse group of
         individuals who love working with data. Our goal is to transform the often complex world of datasets into something enjoyable and informative. 
         Through this platform, we invite you to join us on a journey where data becomes not just meaningful but also entertaining. Let's explore the exciting possibilities together!
        </p>
        
       
      </div>
      <div className="team-members-container">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
     </div>
    </div>
  );
};

export default AboutUs;
