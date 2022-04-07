import './index.css';
import styled from 'styled-components';
import Tweet from './components/Tweet';
import Sidebar from './components/Sidebar';
import Popular from './components/Popular';
import Header from './components/Header';

function App() {
  return (
    <main>
      <AppBody>
        <Sidebar />
        <Tweet />
        <Popular />
      </AppBody>
    </main>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  height: 100vh;
  max-width: 100%;
`;