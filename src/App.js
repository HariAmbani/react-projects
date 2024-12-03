import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainLayout from './pages/MainLayout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <MainLayout></MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
