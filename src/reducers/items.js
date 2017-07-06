const initialState = ['test']

export default function app(state = initialState, action) {

    switch (action.type) {

        case 'add': {
            return [
                ...state,
                action.payload
            ]
        }

        case 'removeAll': {
            return []
        }

        default:
            return state
    }
}