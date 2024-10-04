import './App.css'
import Events from './components/Events.jsx';
import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';
import Challenge from './components/Challenge.jsx';

function App() {
  // Essa função faz isso

    /*
    
    Multi line

    */
  return (
      <div>
        {/* Algum comentário */}
        <h1>Componente principal</h1>
        <FirstComponent/>
        <TemplateExpressions/>
        <MyComponent/>
        <Events/>
        <Challenge/>

      </div>
  );
}

export default App;