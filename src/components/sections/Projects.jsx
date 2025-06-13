const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SafeWay AI",
      subtitle: "Güvenli Sürüş Asistanı",
      description: "5 kişilik takımımızla geliştirdiğimiz React Native Expo uygulaması. Araç sürerken kullanıcıyı izleyerek uyuklama durumunda uyarı veren ve güvenli sürüş sağlayan yapay zeka destekli uygulama.",
      technologies: [
        "React Native", "Expo", "PyTorch", "TensorFlow Lite", 
        "Roboflow", "Node.js", "Express.js", "AI/ML"
      ],
      features: [
        "Real-time göz takibi ve uyuklama tespiti",
        "Yapay zeka ile güvenli sürüş analizi",
        "Sesli ve görsel uyarı sistemi",
        "Sürüş verileri analizi"
      ],
      github: "https://github.com/BBakann/SafeWay",
      status: "Geliştirme Aşamasında",
      role: "Proje Lideri",
      icon: "🚗",
      color: "#059669",
      upcoming: "Google Play Store'da yakında!"
    },
    {
      id: 2,
      title: "JumPlane",
      subtitle: "2D Aksiyon Oyunu",
      description: "Java LibGDX kullanarak geliştirdiğim 2D uçak oyunu. Uçağımızın düşmanları öldürdüğü, engellerden kaçtığı ve hayatta kalmaya çalıştığı level sistemli aksiyon oyunu.",
      technologies: [
        "Java", "LibGDX", "2D Graphics", "Game Development"
      ],
      features: [
        "Level sistemli oyun yapısı",
        "Her Level'da farklı düşman sistemi",
        "Çoklu platform desteği",
        "2D grafik tasarım"
      ],
      github: "https://github.com/BBakann/JumPlane",
      status: "Tamamlandı",
      role: "Solo Developer",
      icon: "✈️",
      color: "#3b82f6",
      upcoming: "Google Play Store'da yakında!"
    },
    {
      id: 3,
      title: "Küçük Projelerim",
      subtitle: "Öğrenme Odaklı Projeler",
      description: "React ve React Native Expo ile geliştirdiğim küçük projeler. Farklı kütüphaneler ve teknolojileri deneyimlediğim, öğrenme odaklı çalışmalarım.",
      technologies: [
        "React.js", "React Native", "Expo", "TypeScript", "JavaScript"
      ],
      features: [
        "Mobil ve web uygulamaları",
        "Modern React yaklaşımları",
        "Responsive tasarım",
        "Temiz ve anlaşılabilir kod"
      ],
      github: "https://github.com/BBakann",
      status: "Devam Ediyor",
      role: "Developer",
      icon: "⚛️",
      color: "#8b5cf6",
      upcoming: "Yeni projeler yolda!"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projelerim</h2>
        <p className="section-subtitle">
          Geliştirdiğim ve üzerinde çalıştığım projeler
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon" style={{ backgroundColor: project.color }}>
                  <span>{project.icon}</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <div className="project-meta">
                    <span className={`status ${project.status === 'Tamamlandı' ? 'completed' : project.status === 'Geliştirme Aşamasında' ? 'development' : 'ongoing'}`}>
                      {project.status}
                    </span>
                    <span className="role">{project.role}</span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>🎯 Özellikler</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h4>🛠️ Teknolojiler</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {project.upcoming && (
                  <div className="project-upcoming">
                    <span>🚀 {project.upcoming}</span>
                  </div>
                )}
              </div>

              <div className="project-footer">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary github-link"
                >
                  <span>🐱</span> GitHub'da Görüntüle
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 