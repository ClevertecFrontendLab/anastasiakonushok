import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { JuiciestPage } from '../pages/JuiciestPage';
import { VeganPage } from '../pages/VeganPage';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/vegan' element={<VeganPage />} />
            <Route path='/juiciest' element={<JuiciestPage />} />
        </Routes>
    </BrowserRouter>
);

export default App;
