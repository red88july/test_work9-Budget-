import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {getCategory} from '../../containers/budgetSlice/budgetThunks.ts';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {getCategories, getFetchingLoadingcategories} from '../../containers/budgetSlice/budgetSlice.ts';
import SpinnerBig from '../Spinners/SpinnerBig.tsx';

const Categories = () => {
  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(getCategories);
  const categoryLoadingList = useAppSelector(getFetchingLoadingcategories);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex flex-column align-items-center mt-5">
        {categoryLoadingList ? <SpinnerBig /> : categoryList.map((categoty) => (
          <div className="d-flex justify-content-between mb-2 border border-5 rounded-4 border-secondary p-2 w-50 flex-wrap">
            <div className="mb-2 d-flex flex-column">
              <span> Category: <b>{categoty.category}</b></span>
            </div>
            <div className="mb-2 d-flex flex-column">
              <span> Type: <b>{categoty.type}</b></span>
            </div>
            <div className="d-flex gap-2 m-0 flex-wrap">
              <Link
                to={`/edit-categories/${categoty.id}`}
                className="btn btn-primary pt-2">
                Edit
              </Link>
              <button
                type="button"
                className="btn btn-secondary">
                Delete
              </button>
            </div>
          </div>))}
      </div>
    </>
  );
};

export default Categories;