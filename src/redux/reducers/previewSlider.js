import { CHANGE_SLIDE } from '../types';

const initialState = () => ({ slide: 0 });

export default function previewSliderReducer(state=initialState(), {type, payload}) {
    switch(type) {
        case CHANGE_SLIDE:
            const { slide } = payload;
            return { slide };
        default:
            return state;
    }
}
