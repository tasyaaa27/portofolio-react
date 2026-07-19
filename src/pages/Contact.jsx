import React from 'react';

function Contact() {
  return (
    <div className="container" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <h2 style={{ fontSize: '2.8rem', color: 'var(--champagne-gold)', marginBottom: '15px', textAlign: 'left' }}>
        Hubungi Saya
      </h2>
      
      <p style={{ maxWidth: '800px', marginBottom: '35px', lineHeight: '1.8', fontSize: '1.05rem', color: '#ffffff', opacity: 0.95 }}>
        Terima kasih sudah berkunjung ke website portofolio saya! Jika kamu ingin berdiskusi, bertanya seputar perkuliahan, atau tertarik untuk berkolaborasi dalam project, silakan hubungi saya melalui salah satu platform interaktif di bawah ini:
      </p>

      <div className="card-biodata" style={{ 
        padding: '25px', 
        maxWidth: '850px', 
        margin: '0 auto 45px auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '15px',
        alignItems: 'center'
      }}>

        <a href="mailto:gintingtasya36@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ textAlign: 'center', padding: '15px 10px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s ease', background: 'rgba(255,255,255,0.05)' }} className="sosmed-item-box">
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>📩</span>
            <h4 style={{ margin: '0 0 5px 0', color: '#ffebd2', fontSize: '1.1rem', fontWeight: '700' }}>Email</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#ffffff', opacity: 0.8, wordBreak: 'break-all' }}>gintingtasya36@gmail.com</p>
          </div>
        </a>

        <a href="https://api.whatsapp.com/send?phone=6281276599067" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ textAlign: 'center', padding: '15px 10px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s ease', background: 'rgba(255,255,255,0.05)' }} className="sosmed-item-box">
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>📱</span>
            <h4 style={{ margin: '0 0 5px 0', color: '#ffebd2', fontSize: '1.1rem', fontWeight: '700' }}>WhatsApp</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#ffffff', opacity: 0.8 }}>081276599067</p>
          </div>
        </a>

        <a href="https://instagram.com/_u/asyaagtg" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ textAlign: 'center', padding: '15px 10px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s ease', background: 'rgba(255,255,255,0.05)' }} className="sosmed-item-box">
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>📸</span>
            <h4 style={{ margin: '0 0 5px 0', color: '#ffebd2', fontSize: '1.1rem', fontWeight: '700' }}>Instagram</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#ffffff', opacity: 0.8 }}>@asyaagtg</p>
          </div>
        </a>

        <a href="https://www.tiktok.com/@asyaagtg" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ textAlign: 'center', padding: '15px 10px', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s ease', background: 'rgba(255,255,255,0.05)' }} className="sosmed-item-box">
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>🎵</span>
            <h4 style={{ margin: '0 0 5px 0', color: '#ffebd2', fontSize: '1.1rem', fontWeight: '700' }}>TikTok</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#ffffff', opacity: 0.8 }}>@asyaagtg</p>
          </div>
        </a>

      </div>

      <div className="card-biodata" style={{ padding: '35px 20px', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
        <p style={{ 
          fontSize: '1.35rem', 
          fontFamily: "'Playfair Display', serif", 
          color: '#ffebd2', 
          fontStyle: 'italic',
          fontWeight: '600',
          marginBottom: '6px',
          lineHeight: '1.5'
        }}>
          "Pecah gayung karena dihentak, kilat dayung sudah ke tangan."
        </p>
        <p style={{ fontSize: '0.85rem', color: '#ffffff', opacity: 0.7, fontStyle: 'italic', marginBottom: '25px' }}>
          (Orang yang bijak akan langsung paham maksud yang baik sebelum kalimat selesai diucapkan.)
        </p>
        
        <div style={{ width: '60px', borderTop: '1px dashed rgba(255,255,255,0.3)', margin: '0 auto 25px auto' }}></div>

        <p style={{ fontStyle: 'italic', lineHeight: '1.9', color: '#ffffff', opacity: 0.95, fontSize: '1.05rem', letterSpacing: '0.3px' }}>
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