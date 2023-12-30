import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Modal from "./components/Modal/Modal";
import FinanceTracker from "./components/FinanceTracker/FinanceTracker";
import PageNoFoundPicture from '../src/images/404PageNotFound.jpg';
import Categories from './components/Categories/Categories.tsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<FinanceTracker />}/>
        <Route path={'/categories'} element={<Categories />}/>
        <Route path={'/add-expense'} element={<Modal />}/>
          <Route path="*" element={(
              <div className="container-fluid pic-container d-flex justify-content-center">
                  <img
                      style={{width: '50rem', height: '50rem'}}
                      src={PageNoFoundPicture}
                      alt="Page Not Found"/>
              </div>
          )}/>
      </Routes>
    </Layout>
  );
}

export default App;
