export const FORM_ACTIONS = {
    setName: 'setName',
    setText: 'setText',
    setRating: 'setRating'
};

export const reducer = (state, action) => {
    switch(action?.type) {
        case FORM_ACTIONS.setName:
            return { name: action.payload.name, text: "", rating: 0 };
        
        case FORM_ACTIONS.setText:
            return { ...state, text: action.payload.text };
        
        case FORM_ACTIONS.setRating:
            return { ...state, rating: action.payload.rating };
        
        default:
            return state;
    }
};