import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:berdanbakan2@gmail.com',
      display: 'berdanbakan2@gmail.com',
      color: '#dc2626'
    },
    {
      name: 'GitHub',
      icon: '🐱',
      url: 'https://github.com/BBakann',
      display: '@BBakann',
      color: '#1f2937'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/berdan-bakan-33a5112b8/',
      display: 'Berdan Bakan',
      color: '#0066cc'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // mailto ile email gönderme
    const subject = encodeURIComponent(`${formData.name} - Website İletişim`);
    const body = encodeURIComponent(`
Gönderen: ${formData.name}
Email: ${formData.email}

Mesaj:
${formData.message}
    `);
    
    window.location.href = `mailto:berdanbakan2@gmail.com?subject=${subject}&body=${body}`;
    
    // Form'u temizle
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">İletişim</h2>
        <p className="section-subtitle">
          Bir proje fikriniz var mı? Birlikte harika şeyler yapalım! 🚀
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Benimle İletişime Geçin</h3>
            <p>
              Mobil ve web geliştirme projeleri için iş birlikleri, 
              soru ve önerileriniz için her zaman ulaşılabilirlik sağlarım.
            </p>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--link-color': link.color }}
                >
                  <span className="social-icon">{link.icon}</span>
                  <div className="social-info">
                    <h4>{link.name}</h4>
                    <p>{link.display}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-card">
              <h4>💡 İş Birliği Alanları</h4>
              <ul>
                <li>React Native Mobil Uygulamaları</li>
                <li>Web Uygulaması Geliştirme</li>
                <li>MERN Stack Projeleri</li>
                <li>API Geliştirme</li>
                <li>Yapay Zeka Entegrasyonları</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Hızlı Mesaj Gönder</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Adınız</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Adınızı girin"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Proje hakkında detayları paylaşın..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn">
                📤 Mesaj Gönder
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <p>
            📍 <strong>Konum:</strong> Ankara / Isparta, Türkiye
          </p>
          <p>
            ⏰ <strong>Yanıt Süresi:</strong> Genellikle 24 saat içinde
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 