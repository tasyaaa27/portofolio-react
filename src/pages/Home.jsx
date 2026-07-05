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
          <h1 style={{ fontSize: '3.2rem', marginBottom: '10px' }}>
            <span className="handwritten">Hi there!</span> I'm <span className="elegant-font" style={{ color: 'var(--primary)' }}>Asya</span>
          </h1>
          <p className="elegant-font" style={{ fontSize: '1.35rem', opacity: 0.8 }}>
            Mahasiswa Informatika | Learning to code
          </p>
        </div>
      </div>

      <div className="card-biodata" style={{ marginTop: '40px', width: '100%' }}>
        <p style={{ fontStyle: 'italic', lineHeight: '1.8', textAlign: 'center', margin: 0 }}>
          "Pergi ke pasar membeli paku, <br/>
          Untuk merakit meja yang kuat. <br/>
          Silakan intip portofolio saya, <br/>
          Mari berkolaborasi bikin dampak hebat."
        </p>
      </div>
      
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.8, lineHeight: '1.8', fontSize: '1.05rem' }}>
          <em>"Tak kenal maka tak sayang, sudah kenal mari kita berteman."</em> Selamat datang di portofolio digital saya yang bernuansa lembut ini. 
          Website portofolio ini merupakan tempat saya mendokumentasikan perjalanan akademis, pengalaman berorganisasi, 
          serta karya praktikum rekayasa web yang telah saya bangun. Silakan jelajahi menu di atas untuk mengenal saya lebih dekat!
        </p>
      </div>
    </div>
  );
}

export default Home;