import './App.css';

// import { MuiButton } from './components/MuiButton';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiTypography } from './components/MuiTypography';

import { Navbar } from './components/Navbar';
import Seguimientos from './pages/Seguimientos';

function App() {
  return (
    <div className="App">
      {/* <MuiButton /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiSelect />*/}
      {/* <MuiTextField /> */}
      {/* <MuiTypography /> */}

      <Navbar />
      <Seguimientos />

    </div>
  );
}

export default App;
