import { useDispatch, useSelector } from 'react-redux'

export const Toggler = () => {
    const isChecked = useSelector(state => state);
    console.log(isChecked);
    const dispatch = useDispatch();

    return (
        <>
            <input type='checkbox'
                value={isChecked}
                onChange={() => {
                    dispatch({ type: 'SWITCH_TOOGLE' });
                }}
            />
        </>
    )
}