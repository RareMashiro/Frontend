import { useReducer, useRef } from "react"
import { FORM_ACTIONS, reducer } from "../../hooks/reducer";

const initialState = {
    name: "Oleg",
    text: "text",
    rating: 10,
}

export const NewReviewForm = () => {
    const ref = useRef();
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const onNameChange = (event) => dispatch(
        {type: FORM_ACTIONS.setName, payload: {name: event.target.value}}
    )

    return (
        <div>
            <label>
                Name:
                <input
                    value={state.name}
                    onChange={onNameChange}
                    type="text"
                />
            </label>
            <label>
                Text:
                <input
                    value={state.text}
                    onChange={onNameChange}
                    type="text"
                />
            </label>
            <label>
                Rating:
                <input
                    value={state.rating}
                    onChange={onNameChange}
                    type="number"
                />
            </label>
        </div>
    )
}