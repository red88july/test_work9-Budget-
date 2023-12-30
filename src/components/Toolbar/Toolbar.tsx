import {Link} from 'react-router-dom';
import {useAppDispatch} from "../../app/hooks.ts";
import {startEventForModal} from "../../containers/budgetSlice/budgetSlice.ts";
import '../../style.css';
import FinanceLogo from '../../images/ic-finance.png';

const Toolbar = () => {
    const dispatch = useAppDispatch();

    const clickOnContact = () => {
        dispatch(startEventForModal());
    };

  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle ps-5 pe-5 pt-2 pb-2 d-flex justify-content-between">
      <div className="d-flex align-items-center gap-4">
        <Link to="/" className="p-2">
          <img className="w-100 h-100" src={FinanceLogo} alt="React Logo"/>
        </Link>
        <div className="d-flex align-items-center flex-column">
          <h4>Finance Tracker</h4>
        </div>
      </div>
      <div className="d-flex gap-3">
        <Link to="/categories" className="links">Categories</Link>
        <Link to="/add-expense" onClick={clickOnContact} className="links">Add</Link>
      </div>
    </nav>
);
};

export default Toolbar;