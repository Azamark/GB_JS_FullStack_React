export const toggleReducer = (state = false, action) => {
    switch (action.type) {
        case 'SWITCH_TOOGLE':
            return !state
        default: return state
    }
}