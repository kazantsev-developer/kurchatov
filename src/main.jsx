import ReactDOM from 'react-dom/client';
import { HeroUIProvider } from '@heroui/system';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
    <App />
  </HeroUIProvider>,
);
