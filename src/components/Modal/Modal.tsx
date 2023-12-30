import Backdrop from '../Backdrop/Backdrop';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { actionForModal, endEventForModal, startEventForModal } from '../../containers/budgetSlice/budgetSlice.ts';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { Budget } from '../../types';

const Modal = () => {
  const dispatch = useAppDispatch();
  const actionModal = useAppSelector(actionForModal);
  const navigate = useNavigate();
  const [price, setPrice] = useState<Budget>({
    price: 0,
  });
  const [selectCategory, setSelectCategory] = useState<string>('');
  const [selectType, setSelectType] = useState<string>('expense');
  const categories = selectType === 'income' ? ['Drinks', 'Food'] : ['Salary', 'Programming'];

  const inputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = event.target;
      if (name === 'type') {
        setSelectType(value);
        setSelectCategory('');
      }
      setPrice((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },[]);

  const onInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleOnClickBack = () => {
    dispatch(startEventForModal());
  };

  const closeModal = () => {
    dispatch(endEventForModal());
    navigate('/');
  };

  const closeAndBackToHome = () => {
    dispatch(endEventForModal());
    navigate('/');
  };

  return (
    <>
      {actionModal && <Backdrop show={actionModal} onClick={handleOnClickBack} />}
      <div style={{ display: actionModal ? 'block' : 'none' }} className="modal actionModal mt-5" onClick={closeModal}>
        <div className="modal-dialog" onClick={onInnerClick}>
          <div className="modal-content">
            <div className="d-flex justify-content-end p-2">
              <button type="button" className="btn-close" onClick={closeModal} />
            </div>
            <div className="modal-body">
              <form className="bg-light p-3 border border-4 rounded-3 input-form">
                <div className="mb-2">
                  <div className="form-group mb-3">
                    <label htmlFor="select-type">Type</label>
                    <select
                      id="select-type"
                      className="form-select mt-2"
                      name="type"
                      value={selectType}
                      onChange={(e) => inputChange(e)}
                      required>
                      <option value="expense">Expense</option>
                      <option value="income">Income</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="select-category">Category</label>
                    <select
                      id="select-category"
                      className="form-select mt-2"
                      value={selectCategory}
                      name="category"
                      onChange={(e) => setSelectCategory(e.target.value)}
                      required>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}

                    </select>
                  </div>
                </div>
                <div className="d-flex flex-column mb-3">
                  <div className="mb-1">
                    <label htmlFor="input-content" className="form-label">
                      Amount
                    </label>
                  </div>
                  <div className="d-flex">
                    <input
                      id="input-content"
                      name="price"
                      value={price.price}
                      onChange={(e) => inputChange(e)}
                      className="form-control"
                    />
                    <span className="input-group-text">KGS</span>
                  </div>
                </div>
                <div className=" d-flex gap-2">
                  <button
                    type="button"
                    className=" btn btn-secondary"
                    onClick={closeAndBackToHome}>
                    Cancel
                  </button>
                  <button type="submit" className=" btn btn-success">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
