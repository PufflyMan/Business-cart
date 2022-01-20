import './App.css';
import logo1 from './logos/github-icon.png';
import logo2 from './logos/linkedin-icon.png';
import logo3 from './logos/Icon.png';
import logo4 from './logos/Vector.png';

function App() {
  return (
    <div className="App">
      <div id='content'>
        <h1 id='name'>Yusif Ahmedov</h1>
        <button id='email'>
          <img className='email-button' src={logo3} alt='email-icon'/>
          <a className='email-button' id='email-contact' href = "mailto:ahmedovyusif8785@gmail.com?subject = Contact from Website">Email</a>
        </button>
        <button id="linkedin"><img src={logo4} /><a id='icon2' href='https://www.linkedin.com/in/yusif-ahmedov-7453ba21b/'>LinkedIn</a></button>
        <h2 id='title'>Front-End Developer</h2>
        <header className='header' id="about-header">About</header>
        <p className='desc' id="about">I am a front-end developer who is passionate about coding and engaging both creative and practical side of the human potential.</p>
        <header className='header' id="interests-header">Interests</header>
        <p className='desc' id="interests">Productivity articles, Time Management, Coffee, Music, Sports, Social Activities.</p>
        <footer>
          <a className='icon' href='https://github.com/PufflyMan'>
            <img src={logo1} alt='github-icon'/>
          </a>
          <a className='icon' href='https://www.linkedin.com/in/yusif-ahmedov-7453ba21b/'>
            <img src={logo2} alt='linkedin-icon'/>
          </a>
       </footer>
      </div>
    </div>
  );
}

export default App;
