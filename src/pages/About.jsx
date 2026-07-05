import React from 'react';

function About() {
  return (
    <div className="container" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <h2 style={{ fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '25px', textAlign: 'left' }}>
        Tentang Saya
      </h2>

      <div style={{ maxWidth: '800px', margin: '0 auto 35px auto', lineHeight: '1.8', fontSize: '1.1rem', opacity: 0.95 }}>
        <p>
          Saya adalah mahasiswi di <strong>Universitas Satya Terra Bhinneka</strong>, program studi <strong>Informatika</strong>. 
          Memiliki ketertarikan yang besar dalam dunia teknologi, khususnya pengembangan antarmuka web (Front-End) dan perancangan UI/UX. 
          Melalui portofolio ini, saya membagikan perjalanan akademis, pengalaman berorganisasi, serta berbagai proyek praktikum yang telah saya bangun.
        </p>
      </div>

      <div className="card-biodata" style={{ 
        width: '100%', 
        maxWidth: '800px', 
        margin: '0 auto 30px auto', 
        padding: '30px', 
        overflowX: 'auto' 
      }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '20px' }}>
          Biodata Diri
        </h3>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', lineHeight: '2' }}>
          <tbody>
            <tr>
              <td style={{ width: '30%', fontWeight: '600', padding: '8px 5px', color: 'var(--text-main)', verticalAlign: 'top' }}>Nama Lengkap</td>
              <td style={{ width: '70%', padding: '8px 5px', color: 'var(--text-main)' }}>: Anastasya Br Ginting</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', padding: '8px 5px', color: 'var(--text-main)', verticalAlign: 'top' }}>NIM</td>
              <td style={{ padding: '8px 5px', color: 'var(--text-main)' }}>: 2503311934</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', padding: '8px 5px', color: 'var(--text-main)', verticalAlign: 'top' }}>Tempat, Tgl Lahir</td>
              <td style={{ padding: '8px 5px', color: 'var(--text-main)' }}>: Medan, 27 Juli 2006</td>
            </tr>
            <tr>
              <td style={{ width: '30%', fontWeight: '600', padding: '10px 5px', color: 'var(--text-main)', verticalAlign: 'top' }}>Fakultas</td>
              <td style={{ width: '70%', padding: '10px 5px', color: 'var(--text-main)' }}>: Teknologi dan Ilmu Komputer</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', padding: '10px 5px', color: 'var(--text-main)', verticalAlign: 'top' }}>Program Studi</td>
              <td style={{ padding: '10px 5px', color: 'var(--text-main)' }}>: Informatika</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', padding: '10px 5px', color: 'var(--text-main)', verticalAlign: 'top' }}>Kampus</td>
              <td style={{ padding: '10px 5px', color: 'var(--text-main)' }}>: Universitas Satya Terra Bhinneka</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600', padding: '10px 5px', color: 'var(--text-main)', verticalAlign: 'top' }}>Fokus Minat</td>
              <td style={{ padding: '10px 5px', color: 'var(--text-main)' }}>: Front-End Web Developer, UI/UX Design</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '55px', display: 'block', clear: 'both', width: '100%', maxWidth: '800px', margin: '55px auto 0 auto' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '20px' }}>
          Keahlian & Tools
        </h3>

        <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-main)', opacity: 0.9 }}>
          💻 Web Development
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '25px' }}>
          <span className="project-badge" style={{ padding: '8px 18px' }}>🌐 HTML5</span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>🎨 CSS3 / Flexbox / Grid</span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>⚡ JavaScript (ES6)</span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>⚛️ React.js (Vite)</span>
        </div>

        <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-main)', opacity: 0.9 }}>
          🎀 Design & UI/UX
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '25px' }}>
          <span className="project-badge" style={{ padding: '8px 18px' }}>📐 Figma (Wireframing & Prototyping)</span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>🔮 Canva Design</span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>✨ Responsive Web Design</span>
        </div>

        <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-main)', opacity: 0.9 }}>
          🛠️ Tools & Lainnya
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <span className="project-badge" style={{ padding: '8px 18px' }}>🚀 Git & GitHub</span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>📝 Visual Studio Code</span>
          <span className="project-badge" style={{ padding: '8px 18px' }}>📊 Data Validation (Form Input)</span>
        </div>
      </div>

      <div style={{ marginTop: '55px', display: 'block', clear: 'both', width: '100%', maxWidth: '800px', margin: '55px auto 0 auto' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '20px' }}>
          Hobi & Minat
        </h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '15px' }}>
          <div className="project-badge" style={{ padding: '12px 25px', fontSize: '1rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🎮 <span>Bermain Game</span>
          </div>
          <div className="project-badge" style={{ padding: '12px 25px', fontSize: '1rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            🎵 <span>Dengar Musik Aesthetic</span>
          </div>
          <div className="project-badge" style={{ padding: '12px 25px', fontSize: '1rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📚 <span>Membaca / Cari Inspirasi Desain</span>
          </div>
          <div className="project-badge" style={{ padding: '12px 25px', fontSize: '1rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📸 <span>Hunting Foto Estetik</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;