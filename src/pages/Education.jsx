import React from 'react';

function Education() {
  return (
    <div className="container" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", position: 'relative' }}>

      <h2 style={{ 
        fontSize: '2.8rem', 
        color: 'var(--champagne-gold)', 
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

        <div className="card-biodata" style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', right: '25px', fontSize: '3rem', opacity: 0.25, pointerEvents: 'none' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🌸</span>
            <h3 style={{ fontSize: '1.4rem', color: '#ffebd2', margin: 0, fontWeight: '700' }}>
              Universitas Satya Terra Bhinneka <span style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 'normal', opacity: 0.7 }}>(2025 - Sekarang)</span>
            </h3>
          </div>
          <p style={{ fontSize: '1.05rem', fontWeight: '600', marginTop: '2px', color: '#ffffff' }}>
            S1 - Informatika | Fakultas Teknologi dan Ilmu Komputer
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '10px', color: '#ffffff' }}>
            📍 Alamat: Jl. Sunggal Gg. Bakul, Sunggal, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20128
          </p>
          <div style={{ borderTop: '1px dashed rgba(255,255,255,0.3)', paddingTop: '12px' }}>
            <p style={{ marginBottom: '8px', lineHeight: '1.5', color: '#ffffff' }}>
              • Aktif berkontribusi dalam organisasi internal <strong style={{ color: '#ffebd2' }}>UPM Komputer</strong>.
            </p>
            <p style={{ lineHeight: '1.5', color: '#ffffff' }}>
              • Aktif sebagai anggota dalam kegiatan kerohanian di <strong style={{ color: '#ffebd2' }}>Interfaith Centre Kristen Protestan</strong>.
            </p>
          </div>
        </div>

        <div className="card-biodata" style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', right: '25px', fontSize: '3rem', opacity: 0.25, pointerEvents: 'none' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🌸</span>
            <h3 style={{ fontSize: '1.4rem', color: '#ffebd2', margin: 0, fontWeight: '700' }}>
              SMA Kemala Bhayangkari 1 Medan <span style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 'normal', opacity: 0.7 }}>(2021 - 2024)</span>
            </h3>
          </div>
          <p style={{ fontSize: '1.05rem', fontWeight: '600', marginTop: '2px', color: '#ffffff' }}>
            Jurusan IPA
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '10px', color: '#ffffff' }}>
            📍 Alamat: Jl. K.H. Wahid Hasyim No.1M, Merdeka, Kec. Medan Baru, Kota Medan, Sumatera Utara 20154
          </p>
          <div style={{ borderTop: '1px dashed rgba(255,255,255,0.3)', paddingTop: '12px' }}>
            <p style={{ marginBottom: '8px', lineHeight: '1.5', color: '#ffffff' }}>
              • Dipercaya menjabat sebagai <strong style={{ color: '#ffebd2' }}>Bendahara Ekskul Paskibra</strong> dan aktif sebagai <strong style={{ color: '#ffebd2' }}>Anggota Pramuka</strong>.
            </p>
            <p style={{ marginBottom: '8px', lineHeight: '1.5', color: '#ffffff' }}>
              • Berkontribusi membawa pulang berbagai <strong style={{ color: '#ffebd2' }}>Piala Penghargaan</strong> melalui kemenangan di berbagai kejuaraan lomba Paskibra bergengsi di luar sekolah.
            </p>
            <p style={{ lineHeight: '1.5', color: '#ffffff' }}>
              • Aktif berkontribusi menjadi <strong style={{ color: '#ffebd2' }}>Panitia Lomba Paskibra tingkat se-Kota Medan</strong> yang diadakan di sekolah selama 3 tahun berturut-turut.
            </p>
          </div>
        </div>

        <div className="card-biodata" style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', right: '25px', fontSize: '3rem', opacity: 0.25, pointerEvents: 'none' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🌸</span>
            <h3 style={{ fontSize: '1.4rem', color: '#ffebd2', margin: 0, fontWeight: '700' }}>
              SMP Methodist 1 Medan <span style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 'normal', opacity: 0.7 }}>(2018 - 2021)</span>
            </h3>
          </div>
          <p style={{ fontSize: '1.05rem', fontWeight: '600', marginTop: '2px', color: '#ffffff' }}>
            Pendidikan Sekolah Menengah Pertama
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '10px', color: '#ffffff' }}>
            📍 Alamat: Jl. Hang Tuah No.4, Madras Hulu, Kec. Medan Polonia, Kota Medan, Sumatera Utara 20151
          </p>
          <div style={{ borderTop: '1px dashed rgba(255,255,255,0.3)', paddingTop: '12px' }}>
            <p style={{ lineHeight: '1.5', color: '#ffffff' }}>
              • Aktif mengembangkan kedisiplinan diri sebagai <strong style={{ color: '#ffebd2' }}>Anggota Ekskul Pramuka</strong>.
            </p>
          </div>
        </div>

        <div className="card-biodata" style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', right: '25px', fontSize: '3rem', opacity: 0.25, pointerEvents: 'none' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🌸</span>
            <h3 style={{ fontSize: '1.4rem', color: '#ffebd2', margin: 0, fontWeight: '700' }}>
              SD Negeri 060886 <span style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 'normal', opacity: 0.7 }}>(2012 - 2018)</span>
            </h3>
          </div>
          <p style={{ fontSize: '1.05rem', fontWeight: '600', marginTop: '2px', color: '#ffffff' }}>
            Pendidikan Sekolah Dasar
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '10px', color: '#ffffff' }}>
            📍 Alamat: Jl. Rebab No.99, Titi Rantai, Kec. Medan Baru, Kota Medan, Sumatera Utara 20157
          </p>
          <div style={{ borderTop: '1px dashed rgba(255,255,255,0.3)', paddingTop: '12px' }}>
            <p style={{ lineHeight: '1.5', color: '#ffffff' }}>
              • Memulai langkah awal pendidikan dasar, beradaptasi dengan lingkungan sekolah, dan aktif dalam kegiatan belajar mengajar dasar serta pengenalan minat bakat.
            </p>
          </div>
        </div>

        <div className="card-biodata" style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', right: '25px', fontSize: '3rem', opacity: 0.25, pointerEvents: 'none' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>🌸</span>
            <h3 style={{ fontSize: '1.4rem', color: '#ffebd2', margin: 0, fontWeight: '700' }}>
              TK Methodist 1 Medan <span style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 'normal', opacity: 0.7 }}>(2012)</span>
            </h3>
          </div>
          <p style={{ fontSize: '1.05rem', fontWeight: '600', marginTop: '2px', color: '#ffffff' }}>
            Taman Kanak-Kanak
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.8, marginBottom: '10px', color: '#ffffff' }}>
            📍 Alamat: Jl. Hang Tuah No.4, Madras Hulu, Kec. Medan Polonia, Kota Medan, Sumatera Utara 20151
          </p>
          <div style={{ borderTop: '1px dashed rgba(255,255,255,0.3)', paddingTop: '12px' }}>
            <p style={{ lineHeight: '1.5', color: '#ffffff' }}>
              • Masa keemasan pengenalan membaca, menulis, berhitung (calistung) sambil bermain secara interaktif, serta melatih interaksi sosial anak sejak usia dini.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;