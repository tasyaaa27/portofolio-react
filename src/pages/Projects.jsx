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
      <h2 style={{ fontSize: '2.8rem', color: 'var(--champagne-gold)', marginBottom: '10px' }}>Project Saya</h2>
      <p style={{ opacity: 0.8, marginBottom: '40px', color: '#ffffff' }}>Klik tombol detail untuk membuka informasi lengkap.</p>

      <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
        {projectList.map((project) => (
          <div key={project.id} className="card-biodata" style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: 0 }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '10px' }} />
            <div>
              <span className="project-badge">{project.category}</span>
            </div>
            <h3 style={{ margin: '10px 0', fontSize: '1.4rem', color: '#ffebd2', fontWeight: '700' }}>{project.title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#ffffff', opacity: 0.85, minHeight: '50px', lineHeight: '1.5' }}>{project.shortDesc}</p>
            <button className="btn-detail" onClick={() => setActiveProject(project)}>Lihat Detail ✨</button>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveProject(null)}>×</button>
            <img src={activeProject.image} alt={activeProject.title} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '15px', marginBottom: '20px' }} />
            
            <div>
              <span className="project-badge">{activeProject.category}</span>
            </div>
            <h2 style={{ marginTop: '15px', color: '#ffebd2', fontSize: '1.8rem', fontWeight: '700' }}>{activeProject.title}</h2>
            <hr style={{ opacity: 0.2, margin: '15px 0', border: 'none', borderTop: '1px solid #ffffff' }} />
            
            <h4 style={{ marginBottom: '8px', fontSize: '1.1rem', color: 'var(--champagne-gold)' }}>Deskripsi Lengkap:</h4>
            <p style={{ fontSize: '0.95rem', color: '#ffffff', opacity: 0.9, lineHeight: '1.6', marginBottom: '20px' }}>{activeProject.fullDesc}</p>
            
            <h4 style={{ marginBottom: '8px', fontSize: '1.1rem', color: 'var(--champagne-gold)' }}>Teknologi:</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {activeProject.tech.map((t, idx) => (
                <span key={idx} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;