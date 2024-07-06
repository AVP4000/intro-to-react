import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import Counter from '../components/Counter';

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  const titles = [{ title: 'AP Counter' }, { title: 'Darrell Counter' }, { title: 'Ben Counter' }, { title: null }];

  // const user = { displayName: 'Dr. T' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '20vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Hello {user.displayName}! </h1>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
      {titles.map((t) => <Counter key={t.title} title={t.title} />)}
    </>
  );
}

export default Home;
