import React from 'react';

function Education() {
  return (
    <div className="container" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", position: 'relative' }}>

      <h2 style={{ 
        fontSize: '2.8rem', 
        color: 'var(--primary)', 
        marginBottom: '40px', 
        textAlign: 'left' 
      }}>
        Riwayat Pendidikan
      </h2>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '25px', 
        maxWidth: '850px', 
        margin: '0 auto',
        paddingBottom: '30px'
      }}>

        <div className="project-card" style={{ 
          position: 'relative', 
          overflow: 'hidden',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '25px', 
            fontSize: '3rem', 
            opacity: 0.25,
            pointerEvents: 'none'
          }}>
            🎓
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🌸</span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', margin: 0, fontWeight: '700' }}>
              Universitas Satya Terra Bhinneka <span style={{ fontSize: '1rem', color: 'var(--text-sub)', fontWeight: 'normal' }}>(2025 - Sekarang)</span>
            </h3>
          </div>

          <p style={{ fontSize: '1.05rem', fontWeight: '600', marginTop: '2px' }}>
            S1 - Informatika | Fakultas Teknologi dan Ilmu Komputer
          </p>
          
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '10px' }}>
            📍 Alamat: Jl. Sunggal Gg. Bakul, Sunggal, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20128
          </p>

          <div style={{ borderTop: '1px dashed var(--border)', my: '10px', paddingTop: '12px' }}>
            <p style={{ marginBottom: '8px', lineHeight: '1.5' }}>
              • Aktif berkontribusi dalam organisasi internal <strong>UPM Komputer</strong>.
            </p>
            <p style={{ lineHeight: '1.5' }}>
              • Aktif sebagai anggota dalam kegiatan kerohanian di <strong>Interfaith Centre Kristen Protestan</strong>.
            </p>
          </div>
        </div>

        <div className="project-card" style={{ 
          position: 'relative', 
          overflow: 'hidden',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '25px', 
            fontSize: '3rem', 
            opacity: 0.25,
            pointerEvents: 'none'
          }}>
            🏫
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🌸</span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', margin: 0, fontWeight: '700' }}>
              SMA Kemala Bhayangkari 1 Medan <span style={{ fontSize: '1rem', color: 'var(--text-sub)', fontWeight: 'normal' }}>(2021 - 2024)</span>
            </h3>
          </div>

          <p style={{ fontSize: '1.05rem', fontWeight: '600', marginTop: '2px' }}>
            Jurusan IPA
          </p>
          
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '10px' }}>
            📍 Alamat: Jl. K.H. Wahid Hasyim No.1M, Merdeka, Kec. Medan Baru, Kota Medan, Sumatera Utara 20154
          </p>

          <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '12px' }}>
            <p style={{ marginBottom: '8px', lineHeight: '1.5' }}>
              • Dipercaya menjabat sebagai <strong>Bendahara Ekskul Paskibra</strong> dan aktif sebagai <strong>Anggota Pramuka</strong>.
            </p>
            <p style={{ marginBottom: '8px', lineHeight: '1.5' }}>
              • Berkontribusi membawa pulang berbagai <strong>Piala Penghargaan</strong> melalui kemenangan di berbagai kejuaraan lomba Paskibra bergengsi di luar sekolah.
            </p>
            <p style={{ lineHeight: '1.5' }}>
              • Aktif berkontribusi menjadi <strong>Panitia Lomba Paskibra tingkat se-Kota Medan</strong> yang diadakan di sekolah selama 3 tahun berturut-turut.
            </p>
          </div>
        </div>

        <div className="project-card" style={{ 
          position: 'relative', 
          overflow: 'hidden',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '25px', 
            fontSize: '3rem', 
            opacity: 0.25,
            pointerEvents: 'none'
          }}>
            🎒
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🌸</span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', margin: 0, fontWeight: '700' }}>
              SMP Methodist 1 Medan <span style={{ fontSize: '1rem', color: 'var(--text-sub)', fontWeight: 'normal' }}>(2018 - 2021)</span>
            </h3>
          </div>

          <p style={{ fontSize: '1.05rem', fontWeight: '600', marginTop: '2px' }}>
            Pendidikan Sekolah Menengah Pertama
          </p>
          
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '10px' }}>
            📍 Alamat: Jl. Hang Tuah No.4, Madras Hulu, Kec. Medan Polonia, Kota Medan, Sumatera Utara 20151
          </p>

          <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '12px' }}>
            <p style={{ lineHeight: '1.5' }}>
              • Aktif mengembangkan kedisiplinan diri sebagai <strong>Anggota Ekskul Pramuka</strong>.
            </p>
          </div>
        </div>

        <div className="project-card" style={{ 
          position: 'relative', 
          overflow: 'hidden',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ position: 'absolute', top: '20px', right: '25px', fontSize: '3rem', opacity: 0.25, pointerEvents: 'none' }}>
            📚
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🌸</span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', margin: 0, fontWeight: '700' }}>
              SD Negeri 060886 <span style={{ fontSize: '1rem', color: 'var(--text-sub)', fontWeight: 'normal' }}>(2012 - 2018)</span>
            </h3>
          </div>
          <p style={{ fontSize: '1.05rem', fontWeight: '600', marginTop: '2px' }}>
            Pendidikan Sekolah Dasar
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '10px' }}>
            📍 Alamat: Jl. Rebab No.99, Titi Rantai, Kec. Medan Baru, Kota Medan, Sumatera Utara 20157
          </p>
          <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '12px' }}>
            <p style={{ lineHeight: '1.5' }}>
              • Memulai langkah awal pendidikan dasar, beradaptasi dengan lingkungan sekolah, dan aktif dalam kegiatan belajar mengajar dasar serta pengenalan minat bakat.
            </p>
          </div>
        </div>

        <div className="project-card" style={{ 
          position: 'relative', 
          overflow: 'hidden',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ position: 'absolute', top: '20px', right: '25px', fontSize: '3rem', opacity: 0.25, pointerEvents: 'none' }}>
            🧸
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🌸</span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', margin: 0, fontWeight: '700' }}>
              TK Methodist 1 Medan <span style={{ fontSize: '1rem', color: 'var(--text-sub)', fontWeight: 'normal' }}>(2012)</span>
            </h3>
          </div>
          <p style={{ fontSize: '1.05rem', fontWeight: '600', marginTop: '2px' }}>
            Taman Kanak-Kanak
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '10px' }}>
            📍 Alamat: Jl. Hang Tuah No.4, Madras Hulu, Kec. Medan Polonia, Kota Medan, Sumatera Utara 20151
          </p>
          <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '12px' }}>
            <p style={{ lineHeight: '1.5' }}>
              • Masa keemasan pengenalan membaca, menulis, berhitung (calistung) sambil bermain secara interaktif, serta melatih interaksi sosial anak sejak usia dini.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;