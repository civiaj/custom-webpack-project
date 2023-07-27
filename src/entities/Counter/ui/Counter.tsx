import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export function Counter() {
    const dispatch = useAppDispatch();
    const value = useAppSelector(getCounterValue);

    const incr = () => {
        dispatch(counterActions.increment());
    };

    const decr = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>
            <button data-testid="incr-btn" onClick={incr}>
                +
            </button>
            <button data-testid="decr-btn" onClick={decr}>
                -
            </button>
        </div>
    );
}
