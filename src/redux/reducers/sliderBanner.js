import { CHANGE_BANNER_SLIDE } from'../types';

const initialState = () => ({ slide:0 });

export default function sliderBannerReducer(state=initialState(), {type, payload}) {
    switch(type) {
        case CHANGE_BANNER_SLIDE:
            const { slide } = payload;
            return {...state, slide};
        default:
            return state;
    }
};
