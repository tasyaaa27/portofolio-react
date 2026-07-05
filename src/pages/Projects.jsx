import React, { useState } from 'react';

import gbrProject1 from '../assets/project1.png';
import gbrProject2 from '../assets/project2.png';
import gbrProject3 from '../assets/project3.png';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projectList = [
    {
      id: 1,
      title: "Tabel Praktikum & Multimedia",
      category: "Web Dasar",
      image: gbrProject1,
      shortDesc: "Struktur HTML murni untuk data praktikum dan pemutar multimedia.",
      fullDesc: "Project praktikum awal yang berfokus pada penguasaan struktur HTML murni. Mengimplementasikan pembuatan tabel data akademik yang rapi, integrasi audio player, video otomatis (autoplay), serta penyusunan biodata terstruktur.",
      tech: ["HTML", "Multimedia", "CSS Dasar"]
    },
    {
      id: 2,
      title: "Formulir Pendaftaran Online",
      category: "UI/UX",
      image: gbrProject2,
      shortDesc: "Antarmuka formulir interaktif dengan validasi keamanan input.",
      fullDesc: "Pengembangan antarmuka formulir pendaftaran digital menggunakan CSS Grid dan Flexbox agar responsif. Dilengkapi dengan atribut validasi tipe data input, safety password, serta desain tombol interaktif saat diarahkan kursor.",
      tech: ["HTML", "CSS3 Forms", "UI Design"]
    },
    {
      id: 3,
      title: "Landing Page Orangutan Haven",
      category: "React Project",
      image: gbrProject3,
      shortDesc: "Website pusat konservasi Orangutan Sumatera yang responsif.",
      fullDesc: "Project website modern yang didedikasikan untuk pusat konservasi Orangutan Sumatera. Menggunakan React komponen agar modular, mencakup halaman edukasi habitat, sistem simulasi donasi, serta game interaktif sederhana ramah pengguna.",
      tech: ["React.js", "JavaScript", "CSS Modules", "Responsive"]
    }
  ];

  return (
    <div className="container" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <h2 style={{ fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '10px' }}>Project Saya</h2>
      <p style={{ opacity: 0.8, marginBottom: '40px' }}>Klik tombol detail untuk membuka informasi lengkap.</p>

      <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '15px' }} />
            <br/>
            <span className="project-badge">{project.category}</span>
            <h3 style={{ margin: '15px 0', fontSize: '1.5rem' }}>{project.title}</h3>
            <button className="btn-detail" onClick={() => setActiveProject(project)}>Lihat Detail ✨</button>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveProject(null)}>×</button>
            <img src={activeProject.image} alt={activeProject.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px', marginBottom: '20px' }} />
            
            <span className="project-badge">{activeProject.category}</span>
            <h2 style={{ marginTop: '15px', color: 'var(--primary)', fontSize: '2rem' }}>{activeProject.title}</h2>
            <hr style={{ opacity: 0.1, margin: '15px 0' }} />
            
            <h4 style={{ marginBottom: '8px', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: 'var(--accent)' }}>Deskripsi Lengkap:</h4>
            <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: '1.6', marginBottom: '20px' }}>{activeProject.fullDesc}</p>
            
            <h4 style={{ marginBottom: '8px', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: 'var(--accent)' }}>Teknologi:</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {activeProject.tech.map((t, idx) => <span key={idx} className="tech-tag">{t}</span>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;