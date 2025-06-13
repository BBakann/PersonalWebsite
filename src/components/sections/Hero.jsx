import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: '🚀 Berdan\'s Personal Terminal v2.0', timestamp: true },
    { type: 'system', text: '💡 Type "help" to see available commands', timestamp: false },
    { type: 'system', text: '🎯 Try "intro" for a quick introduction!', timestamp: false }
  ]);
  const [currentPath, setCurrentPath] = useState('~/berdan-dev');
  const [isTyping, setIsTyping] = useState(false);
  const [codeIndex, setCodeIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const terminalRef = useRef(null);

  const commands = {
    help: `📋 Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 info      - Personal information
  skills    - Technical skills
 projects  - My projects
 contact   - Contact information
 experience - Work & education
 intro     - Quick introduction
 theme     - Change terminal theme
 clear     - Clear terminal
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

    info: `Berdan Bakan
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Age: 22 years old
 University: Süleyman Demirel University
 Major: Computer Engineering
 Location: Turkey
 Passion: Mobile & Web Development
 Goal: Building innovative solutions`,

    skills: `Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frontend:
 React.js & React Native
JavaScript & TypeScript
CSS & Responsive Design

Backend:
Node.js & Express.js
Python
Java

Database:
MongoDB
Database Design

AI/ML:
TensorFlow
Data Science
Model Development

Tools:
Expo (React Native)
REST API Development
CI/CD (Github Actions)
Version Control (Git,Github,)`,

    projects: `My Projects
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. SafeWay AI
   React Native + AI/ML
   Safe driving assistant app
   Team project (5 members)
   TensorFlow, PyTorch, Node.js
   Real-time driver monitoring

2. JumPlane Game
   2D Java LibGDX Game
   Survival & obstacle avoidance
   Level-based progression
   Custom graphics & physics

3. Personal Website
   React.js Project
   Modern & Interactive Design
   Fully Responsive
   Mini games included`,

    contact: `Contact Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Email: berdanbakan2@gmail.com
 GitHub: github.com/BBakann
 LinkedIn: linkedin.com/in/berdan-bakan-33a5112b8
 Website: You're here! 😊

 Feel free to reach out for:
    Job opportunities
    Collaboration
    Project discussions
    Just a chat about tech!`,

    experience: `Experience & Education
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Education:
    Computer Engineering Student
    Süleyman Demirel University
    Currently pursuing degree

 Projects Experience:
    SafeWay AI - Project Leader
    JumPlane Game - Solo Developer
    Multiple React Projects
   
 Skills Development:
    Mobile App Development
    Web Development
    AI/ML Implementation
    Team Leadership`,

    intro: `Hello! I'm Berdan Bakan
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 22-year-old Computer Engineering student at SDU
 Passionate about mobile & web development
 Currently working on innovative projects:
   • SafeWay AI (Safe driving app)
   • JumPlane Game (2D survival game)
   • Various React/React Native projects

 Always learning new technologies and solving problems!
 Check out my projects and feel free to connect!`,

    theme: `🎨 Terminal Theme
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌙 Currently using: Dark Developer Theme
🎨 Available themes: Dark mode optimized
 Features: Syntax highlighting, smooth animations
 Tip: Use the 🌙 button in the header to toggle site theme!`,

    clear: 'CLEAR_TERMINAL',

    // Easter eggs
    time: () => ` Current time: ${new Date().toLocaleString('tr-TR')}`,
    date: () => ` Today is: ${new Date().toLocaleDateString('tr-TR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })}`,
  };

  const titles = [
    'Mobile Developer',
    'Web Developer',
    'React Native Enthusiast',
    'Problem Solver',
    'Tech Explorer'
  ];

  const codeLines = [
    'const developer = {',
    '  name: "Berdan Bakan",',
    '  age: 22,',
    '  location: "Turkey",',
    '  university: "SDU Computer Engineering",',
    '  passion: ["Mobile Dev", "Web Dev", "AI/ML"],',
    '  currentStack: ["React", "React Native", "Node.js"],',
    '  learning: ["TensorFlow", "Advanced JS", "React Native"]',
    '};',
    '',
    '// Current projects I\'m working on',
    'const projects = [',
    '  {',
    '    name: "SafeWay AI",',
    '    tech: ["React Native", "TensorFlow", "Node.js"],',
    '    status: "in-development",',
    '    team: 5',
    '  },',
    '  {',
    '    name: "JumPlane Game",',
    '    tech: ["Java", "LibGDX"],',
    '    status: "completed",',
    '    type: "2D-Game"',
    '  }',
    '];',
    '',
    '',
  ];

  // Code typing effect
  useEffect(() => {
    if (codeIndex < codeLines.length) {
      const currentLine = codeLines[codeIndex];
      if (displayedCode.length < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedCode(currentLine.substring(0, displayedCode.length + 1));
        }, 30);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCodeIndex(codeIndex + 1);
          setDisplayedCode('');
        }, 800);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        setCodeIndex(0);
        setDisplayedCode('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [codeIndex, displayedCode, codeLines]);

  // Terminal typing effect
  useEffect(() => {
    const handleType = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];

      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, titles]);

  const addToHistory = (entry) => {
    setTerminalHistory(prev => [...prev, entry]);
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const input = userInput.toLowerCase().trim();
    
    // Add user command to history
    addToHistory({ 
      type: 'user', 
      text: `${currentPath} $ ${userInput}`, 
      timestamp: true 
    });
    
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      if (commands[input]) {
        if (input === 'clear') {
          setTerminalHistory([
            { type: 'system', text: '🧹 Terminal cleared.', timestamp: true }
          ]);
        } else {
          const output = typeof commands[input] === 'function' 
            ? commands[input]() 
            : commands[input];
          addToHistory({ type: 'output', text: output, timestamp: false });
        }
      } else {
        // Suggest similar commands
        const suggestions = Object.keys(commands).filter(cmd => 
          cmd.includes(input) || input.includes(cmd.substring(0, 3))
        );
        
        let errorMsg = `❌ Command '${userInput}' not found.`;
        if (suggestions.length > 0) {
          errorMsg += `\n💡 Did you mean: ${suggestions.slice(0, 3).join(', ')}?`;
        }
        errorMsg += '\n💬 Type "help" to see all available commands.';
        
        addToHistory({ type: 'error', text: errorMsg, timestamp: false });
      }
      setIsTyping(false);
    }, 300);
    
    setUserInput('');
  };

  const formatTimestamp = () => {
    return new Date().toLocaleTimeString('tr-TR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        {/* Sol Panel - Enhanced Terminal */}
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <div className="terminal-title">
              <span className="terminal-icon">🖥️</span>
              berdan@dev-terminal
            </div>
            <div className="terminal-status">
              <span className="status-online">🟢 Online</span>
            </div>
          </div>
          
          <div ref={terminalRef} className="terminal-body">
            <div className="terminal-output">
              {terminalHistory.map((entry, index) => (
                <div key={index} className={`terminal-line ${entry.type}`}>
                  {entry.timestamp && (
                    <span className="timestamp">[{formatTimestamp()}] </span>
                  )}
                  <span className="line-content">{entry.text}</span>
                </div>
              ))}
              {isTyping && (
                <div className="terminal-line typing">
                  <span className="typing-indicator">💭 Typing...</span>
                </div>
              )}
            </div>
            
            <form onSubmit={handleTerminalSubmit} className="terminal-input-line">
              <span className="prompt">
                <span className="prompt-path">{currentPath}</span>
                <span className="prompt-symbol"> $ </span>
              </span>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="terminal-input"
                placeholder="Enter command... (try 'help')"
                autoComplete="off"
                autoFocus
              />
              <span className="input-cursor">_</span>
            </form>
          </div>
          
          <div className="terminal-footer">
            <div className="terminal-info">
              <span>💻 Terminal</span>
              <span>📍 Ready for commands</span>
              <span>⚡ Type 'help' to start</span>
            </div>
          </div>
        </div>

        {/* Sağ Panel - Modern JS Code Editor */}
        <div className="code-editor-window">
          <div className="code-header">
            <div className="code-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <div className="file-tabs">
              <div className="file-tab active">
                <span className="file-icon">⚡</span>
                <span>developer.js</span>
              </div>
              <div className="file-tab">
                <span className="file-icon">🚀</span>
                <span>projects.js</span>
              </div>
            </div>
          </div>
          
          <div className="code-body">
            <div className="line-numbers">
              {codeLines.map((_, index) => (
                <span key={index} className={index <= codeIndex ? 'active' : ''}>{index + 1}</span>
              ))}
            </div>
            
            <div className="code-content">
              {codeLines.slice(0, codeIndex).map((line, index) => (
                <div key={index} className="code-line completed">
                  {line.includes('//') ? (
                    <span className="comment">{line}</span>
                  ) : line.includes('const') || line.includes('async') || line.includes('try') || line.includes('catch') || line.includes('return') ? (
                    <>
                      <span className="keyword">{line.split(' ')[0]} </span>
                      <span className="rest">{line.substring(line.split(' ')[0].length + 1)}</span>
                    </>
                  ) : line.includes(':') && (line.includes('"') || line.includes('[') || line.includes('{')) ? (
                    <>
                      <span className="indent">{line.substring(0, line.indexOf(line.trim()))}</span>
                      <span className="property">{line.trim().split(':')[0]}</span>
                      <span className="operator">: </span>
                      <span className="value">{line.trim().substring(line.trim().indexOf(':') + 1)}</span>
                    </>
                  ) : line.trim().startsWith('}') || line.trim().startsWith('];') || line.trim().startsWith('};') ? (
                    <span className="bracket">{line}</span>
                  ) : (
                    <span className="default">{line}</span>
                  )}
                </div>
              ))}
              {codeIndex < codeLines.length && (
                <div className="code-line typing">
                  <span className="typed-code">
                    {displayedCode}
                    <span className="code-cursor">|</span>
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="code-footer">
            <div className="code-info">
              <span>⚡ ES6+ Modern JS</span>
              <span>🔥 Arrow Functions</span>
              <span>🎯 Clean Code</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero; 