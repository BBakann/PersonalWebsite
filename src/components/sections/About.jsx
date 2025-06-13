const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-main">
            <div className="about-intro">
              <h3>Merhaba! Ben Berdan Bakan</h3>
              <p>
                22 yaşında bir bilgisayar mühendisliği öğrencisiyim. Mobil ve web geliştirme 
                alanlarında kendimi geliştirmeye devam ediyorum, yeni teknolojiler öğrenmeyi 
                ve araştırmayı seviyorum.
              </p>
            </div>

            <div className="about-cards">
              <div className="info-card education-card">
                <div className="card-icon">🎓</div>
                <h4>Eğitim</h4>
                <p>Süleyman Demirel Üniversitesi</p>
                <span>Bilgisayar Mühendisliği</span>
              </div>

              <div className="info-card interests-card">
                <div className="card-icon">💻</div>
                <h4>İlgi Alanları</h4>
                <div className="interests-list">
                  <span>Mobil Geliştirme</span>
                  <span>Web Geliştirme</span>
                  <span>Yapay Zeka</span>
                </div>
              </div>

              <div className="info-card focus-card">
                <div className="card-icon">🎯</div>
                <h4>Şu Anda</h4>
                <p>React Native ve Web teknolojileri ile projeler geliştiriyorum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 