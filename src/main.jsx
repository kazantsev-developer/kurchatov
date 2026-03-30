import ReactDOM from 'react-dom/client';
import { HeroUIProvider } from './app/providers/HeroUIProvider';
import { App } from './app/App';
import './app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
    <App />
  </HeroUIProvider>,
);
