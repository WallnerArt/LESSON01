import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reduxRTK/storeRTK';
import { useState } from 'react';
import { change } from '../reduxRTK/counterSlice';

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
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
                            if (!isNaN(+e.target.value)) {
                                setNewCount(+e.target.value);
                            }
                        }}
                    />
                </div>
                <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                        if (newCount) {
                            dispatch(change(-newCount));
                            setNewCount('');
                        }
                    }}
                >
                    Minus
                </button>
                <button
                    className="btn btn-outline-success"
                    onClick={() => {
                        if (newCount) {
                            dispatch(change(newCount));
                            setNewCount('');
                        }
                    }}
                >
                    Plus
                </button>
            </div>
            <div className="alert alert-primary text-center mb-4">
                Counter: {count}
            </div>
            <div className="row">
                <div className="col mb-2">
                    <button className="btn btn-outline-warning w-100" onClick={() => dispatch(change(-10))}>
                        -10
                    </button>
                </div>
                <div className="col mb-2">
                    <button className="btn btn-outline-warning w-100" onClick={() => dispatch(change(-1))}>
                        -1
                    </button>
                </div>
                <div className="col mb-2">
                    <button className="btn btn-outline-info w-100" onClick={() => dispatch(change(1))}>
                        +1
                    </button>
                </div>
                <div className="col mb-2">
                    <button className="btn btn-outline-info w-100" onClick={() => dispatch(change(10))}>
                        +10
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;