import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../reduxRTK/storeRTK';
import { increment, decrement, incrementByAmount, decrementByAmount } from '../reduxRTK/counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();
  const [newCount, setNewCount] = useState<number | ''>('');

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4 mb-4 bg-white rounded">
        <h2 className="text-center mb-4">Counter App</h2>
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter a number"
            value={newCount}
            onChange={(e) => {
              const value = e.target.value;
              setNewCount(value === '' ? '' : parseInt(value, 10));
            }}
          />
        </div>
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            if (newCount !== '') {
              dispatch(decrementByAmount(Number(newCount)));
              setNewCount('');
            }
          }}
        >
          Минус
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            if (newCount !== '') {
              dispatch(incrementByAmount(Number(newCount)));
              setNewCount('');
            }
          }}
        >
          Плюс
        </button>
      </div>
      <div className="alert alert-primary text-center mb-4">
        Счетчик: {count}
      </div>
      <div className="row">
        <div className="col mb-2">
          <button
            className="btn btn-outline-warning w-100"
            onClick={() => dispatch(decrementByAmount(10))}
          >
            -10
          </button>
        </div>
        <div className="col mb-2">
          <button
            className="btn btn-outline-warning w-100"
            onClick={() => dispatch(decrementByAmount(1))}
          >
            -1
          </button>
        </div>
        <div className="col mb-2">
          <button
            className="btn btn-outline-info w-100"
            onClick={() => dispatch(incrementByAmount(1))}
          >
            +1
          </button>
        </div>
        <div className="col mb-2">
          <button
            className="btn btn-outline-info w-100"
            onClick={() => dispatch(incrementByAmount(10))}
          >
            +10
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;