import React from 'react';
import fotoProfil from '../assets/profil.jpeg';

function Home() {
  return (
    <div className="container" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="hero-row">
        <div className="hero-left">
          <img src={fotoProfil} alt="Anastasya" className="profil" />
        </div>
        
        <div className="hero-right" style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '3.2rem', marginBottom: '10px', color: '#F5E6CA' }}>
            <span className="handwritten">Hi there!</span> I'm <span className="elegant-font" style={{ color: '#F5E6CA' }}>Asya</span>
          </h1>
          <p className="elegant-font" style={{ fontSize: '1.35rem', color: '#ffffff', opacity: 0.9 }}>
            Mahasiswa Informatika | Learning to code
          </p>
        </div>
      </div>

      <div style={{ 
        marginTop: '40px', 
        width: '100%',
        maxWidth: '800px', 
        margin: '40px auto 30px auto', 
        padding: '30px', 
        backgroundColor: '#ffffff1a', 
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid #ffffff40', 
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)', 
        borderRadius: '16px'
      }}>
        <div style={{ textAlign: 'center', lineHeight: '2' }}>
          <span style={{ fontStyle: 'italic', display: 'block', color: '#ffffff', fontSize: '1.2rem', fontWeight: '500', textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)' }}>
            "Pergi ke pasar membeli paku,
          </span>
          <span style={{ fontStyle: 'italic', display: 'block', color: '#ffffff', fontSize: '1.2rem', fontWeight: '500', textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)' }}>
            Untuk merakit meja yang kuat.
          </span>
          <span style={{ fontStyle: 'italic', display: 'block', color: '#ffffff', fontSize: '1.2rem', fontWeight: '500', textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)' }}>
            Silakan intip <span style={{ color: '#ffebd2', fontWeight: '700' }}>portofolio saya</span>,
          </span>
          <span style={{ fontStyle: 'italic', display: 'block', color: '#ffffff', fontSize: '1.2rem', fontWeight: '500', textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)' }}>
            Mari berkolaborasi bikin <span style={{ color: '#ffebd2', fontWeight: '700' }}>dampak hebat</span>."
          </span>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <p style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          color: '#ffffff', 
          lineHeight: '1.8', 
          fontSize: '1.1rem',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
        }}>
          <em style={{ color: '#F5E6CA' }}>"Tak kenal maka tak sayang, sudah kenal mari kita berteman."</em> Selamat datang di portofolio digital saya yang bernuansa lembut ini. 
          Website portofolio ini merupakan tempat saya mendokumentasikan perjalanan akademis, pengalaman berorganisasi, 
          serta karya praktikum rekayasa web yang telah saya bangun. Silakan jelajahi menu di atas untuk mengenal saya lebih dekat!
        </p>
      </div>
    </div>
  );
}

export default Home;