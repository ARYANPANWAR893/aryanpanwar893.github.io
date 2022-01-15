import './styles/style.css'

function App() {
  return (
    <div className='content'>
      <div className="left">
        <div className="logo">aryan<br />panwar.</div>
        <div className='dimension'>
          <div className="image">
            <div className="text">welcome to my cozy <br /> space on the internet.</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className='bars'>
          <div className="bar">
            <div className="title">tutorials</div>
            <div className="desc">
              i create content to help and <br /> 
              inspire you to <a target='_blank' href="https://instagram.com/codingcheats/">learn to code.</a>
            </div>
          </div>
          <div className="bar">
            <div className="title">work</div>
            <div className="desc">
              i work as a freelancer aswell on <br /> 
              the side <a target='_blank' href="https://fiverr.com/aryanpanwarr">want to work with me?</a>
            </div>
          </div>
          <div className="bar">
            <div className="title">projects</div>
            <div className="desc">
              i love to code aswell you can <br />
              <a target='_blank' href="https://github.com/codingcheats">view some of my projects.</a>
            </div>
          </div>
        </div>
        <div className='links'>
          <div className='container'>
            <div className="image-container1"></div>content creator
          </div>
          <div className='container'>
            <div className="image-container2"></div>freelancer
          </div>
          <div className='container'>
            <div className="image-container3"></div>developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;