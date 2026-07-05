import React from 'react';

function Contact() {
  return (
    <div className="container" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* JUDUL UTAMA */}
      <h2 style={{ fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '15px', textAlign: 'left' }}>
        Hubungi Saya
      </h2>
      
      <p style={{ maxWidth: '800px', marginBottom: '35px', lineHeight: '1.8', fontSize: '1.05rem', opacity: 0.95 }}>
        Terima kasih sudah berkunjung ke website portofolio saya! Jika kamu ingin berdiskusi, bertanya seputar perkuliahan, atau tertarik untuk berkolaborasi dalam project, silakan hubungi saya melalui salah satu platform interaktif di bawah ini:
      </p>

      {/* 🌟 SATU KOTAK PERSEGI PANJANG BESAR MENYAMPING */}
      <div className="project-card" style={{ 
        padding: '20px', 
        maxWidth: '850px', 
        margin: '0 auto 45px auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Dibagi rata jadi 4 kolom menyamping
        gap: '10px',
        alignItems: 'center'
      }}>
        
        {/* KOLOM 1: EMAIL (Langsung Buka APK Gmail/Mail) */}
        <a href="mailto:gintingtasya36@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ textAlign: 'center', padding: '10px', borderRadius: '10px', cursor: 'pointer', transition: 'transform 0.2s' }} className="nav-item-link">
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '5px' }}>📩</span>
            <h4 style={{ margin: '0 0 2px 0', color: 'var(--primary)', fontSize: '1rem', fontWeight: '700' }}>Email</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7, wordBreak: 'break-all' }}>gintingtasya36@gmail.com</p>
          </div>
        </a>

        {/* KOLOM 2: WHATSAPP (Langsung Buka APK WhatsApp Chat) */}
        <a href="https://api.whatsapp.com/send?phone=6281276599067" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ textAlign: 'center', padding: '10px', borderRadius: '10px', cursor: 'pointer', transition: 'transform 0.2s' }} className="nav-item-link">
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '5px' }}>📱</span>
            <h4 style={{ margin: '0 0 2px 0', color: 'var(--primary)', fontSize: '1rem', fontWeight: '700' }}>WhatsApp</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>081276599067</p>
          </div>
        </a>

        {/* KOLOM 3: INSTAGRAM (Langsung Buka/Redirect ke APK Instagram) */}
        <a href="https://instagram.com/_u/asyaagtg" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ textAlign: 'center', padding: '10px', borderRadius: '10px', cursor: 'pointer', transition: 'transform 0.2s' }} className="nav-item-link">
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '5px' }}>📸</span>
            <h4 style={{ margin: '0 0 2px 0', color: 'var(--primary)', fontSize: '1rem', fontWeight: '700' }}>Instagram</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>@asyaagtg</p>
          </div>
        </a>

        {/* KOLOM 4: TIKTOK (Langsung Buka/Redirect ke APK TikTok) */}
        <a href="https://www.tiktok.com/@asyaagtg" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ textAlign: 'center', padding: '10px', borderRadius: '10px', cursor: 'pointer', transition: 'transform 0.2s' }} className="nav-item-link">
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '5px' }}>🎵</span>
            <h4 style={{ margin: '0 0 2px 0', color: 'var(--primary)', fontSize: '1rem', fontWeight: '700' }}>TikTok</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>@asyaagtg</p>
          </div>
        </a>

      </div>

      {/* SECTION PANTUN / QUOTE ESTETIK */}
      <div className="project-card" style={{ padding: '30px', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
        <p style={{ 
          fontSize: '1.25rem', 
          fontFamily: "'Cormorant Garamond', serif", 
          color: 'var(--primary)', 
          fontStyle: 'italic',
          fontWeight: '600',
          marginBottom: '5px'
        }}>
          "Pecah gayung karena dihentak, kilat dayung sudah ke tangan."
        </p>
        <p style={{ fontSize: '0.85rem', opacity: 0.7, fontStyle: 'italic', marginBottom: '20px' }}>
          (Orang yang bijak akan langsung paham maksud yang baik sebelum kalimat selesai diucapkan.)
        </p>
        
        <div style={{ width: '50px', borderTop: '1px dashed var(--border)', margin: '0 auto 20px auto' }}></div>

        <p style={{ fontStyle: 'italic', lineHeight: '1.8', opacity: 0.9, fontSize: '0.95rem' }}>
          "Membeli teri di Pasar Pajak Ikan,<br />
          Singgah sebentar makan soto Medan.<br />
          Pesan dan saran sangat saya harapkan,<br />
          Semoga pintu kolaborasi terbuka di masa depan."
        </p>
      </div>
    </div>
  );
}

export default Contact;