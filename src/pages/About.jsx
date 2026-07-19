import React from 'react';

function About() {
  return (
    <div className="container" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      <h2 style={{ fontSize: '2.8rem', color: 'var(--champagne-gold)', marginBottom: '25px', textAlign: 'left' }}>
        Tentang Saya
      </h2>

      <div style={{ maxWidth: '800px', margin: '0 auto 35px auto', lineHeight: '1.8', fontSize: '1.1rem', opacity: 0.95 }}>
        <p>
          Saya adalah mahasiswi di <strong>Universitas Satya Terra Bhinneka</strong>, program studi <strong>Informatika</strong>. 
          Memiliki ketertarikan yang besar dalam dunia teknologi, khususnya pengembangan antarmuka web (Front-End) dan perancangan UI/UX. 
          Melalui portofolio ini, saya membagikan perjalanan akademis, pengalaman berorganisasi, serta berbagai proyek praktikum yang telah saya bangun.
        </p>
      </div>

      <div className="card-biodata">
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', marginBottom: '20px' }}>
          Biodata Diri
        </h3>
        
        <table className="tabel-biodata-terang" style={{ width: '100%', borderCollapse: 'collapse', lineHeight: '2.2' }}>
          <tbody>
            <tr>
              <td style={{ width: '30%', padding: '8px 5px', verticalAlign: 'top' }}><b>Nama Lengkap</b></td>
              <td style={{ width: '70%', padding: '8px 5px' }}><strong>: Anastasya Br Ginting</strong></td>
            </tr>
            <tr>
              <td style={{ padding: '8px 5px', verticalAlign: 'top' }}><b>NIM</b></td>
              <td style={{ padding: '8px 5px' }}><strong>: 2503311934</strong></td>
            </tr>
            <tr>
              <td style={{ padding: '8px 5px', verticalAlign: 'top' }}><b>Tempat, Tgl Lahir</b></td>
              <td style={{ padding: '8px 5px' }}><strong>: Medan, 27 Juli 2006</strong></td>
            </tr>
            <tr>
              <td style={{ width: '30%', padding: '10px 5px', verticalAlign: 'top' }}><b>Fakultas</b></td>
              <td style={{ width: '70%', padding: '10px 5px' }}><strong>: Teknologi dan Ilmu Komputer</strong></td>
            </tr>
            <tr>
              <td style={{ padding: '10px 5px', verticalAlign: 'top' }}><b>Program Studi</b></td>
              <td style={{ padding: '10px 5px' }}><strong>: Informatika</strong></td>
            </tr>
            <tr>
              <td style={{ padding: '10px 5px', verticalAlign: 'top' }}><b>Kampus</b></td>
              <td style={{ padding: '10px 5px' }}><strong>: Universitas Satya Terra Bhinneka</strong></td>
            </tr>
            <tr>
              <td style={{ padding: '10px 5px', verticalAlign: 'top' }}><b>Fokus Minat</b></td>
              <td style={{ padding: '10px 5px' }}><strong>: Front-End Web Developer, UI/UX Design</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ display: 'block', clear: 'both', width: '100%', maxWidth: '800px', margin: '55px auto 0 auto' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: 'var(--champagne-gold)', marginBottom: '20px' }}>
          Keahlian & Tools
        </h3>

        <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--champagne-gold)', opacity: 0.9 }}>
          💻 Web Development
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '25px' }}>
          <span className="project-badge" style={{ padding: '8px 18px' }}>🌐 <b>HTML5</b></span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>🎨 <b>CSS3 / Flexbox / Grid</b></span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>⚡ <b>JavaScript (ES6)</b></span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>⚛️ <b>React.js (Vite)</b></span>
        </div>

        <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--champagne-gold)', opacity: 0.9 }}>
          🎀 Design & UI/UX
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '25px' }}>
          <span className="project-badge" style={{ padding: '8px 18px' }}>📐 <b>Figma (Wireframing & Prototyping)</b></span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>🔮 <b>Canva Design</b></span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>✨ <b>Responsive Web Design</b></span>
        </div>

        <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--champagne-gold)', opacity: 0.9 }}>
          🛠️ Tools & Lainnya
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <span className="project-badge" style={{ padding: '8px 18px' }}>🚀 <b>Git & GitHub</b></span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>📝 <b>Visual Studio Code</b></span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>📊 <b>Data Validation (Form Input)</b></span>
        </div>
      </div>

      <div style={{ display: 'block', clear: 'both', width: '100%', maxWidth: '800px', margin: '55px auto 0 auto' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: 'var(--champagne-gold)', marginBottom: '20px' }}>
          Hobi & Minat
        </h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '15px' }}>
          <span className="project-badge" style={{ padding: '8px 18px' }}>🎮 <b>Bermain Game</b></span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>🎵 <b>Dengar Musik Aesthetic</b></span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>📚 <b>Membaca / Cari Inspirasi Desain</b></span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>📸 <b>Hunting Foto Estetik</b></span>
        </div>
      </div>

    </div>
  );
}

export default About;