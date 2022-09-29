// == Import : npm
import { createRoot } from 'react-dom/client';

// == Import : local
// Composants
import App from 'src/components/App';

const rootReactElement = <App />;

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
