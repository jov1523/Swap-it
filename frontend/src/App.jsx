import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';

function Home() {
  return (
    <div className="bento-container">
      <div className="bento-card" data-span="wide">
        <h1>Welcome to SwapIt</h1>
        <p>Your neighborhood barter platform</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* This will be used for future routes */}
      </Route>
    </Routes>
  );
}

export default App;
