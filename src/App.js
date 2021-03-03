import profile from './profile.JPG';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px'
          }}
        >
          <div
            style={{
              borderRadius: '5px',
              overflow: 'hidden',
              height: '40vh',
              boxShadow: '#88add1 0px 0px 7px 0px'
            }}
          >
            <img src={profile} alt='Profile' style={{ height: '40vh' }} />
          </div>
          <div style={{ fontWeight: 500, fontSize: '33px', marginTop: '10px' }}>Szemes András</div>
          <div style={{ fontSize: '21px', fontStyle: 'italic' }}>26 January 1996</div>
          <div style={{ fontSize: '23px', marginTop: '20px' }}>Software developer</div>
        </div>
      </header>
    </div>
  );
}

export default App;
