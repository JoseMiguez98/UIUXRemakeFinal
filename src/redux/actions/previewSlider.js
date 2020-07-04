import { CHANGE_SLIDE } from '../types';

export const changeSlide = slide => ({
    type: CHANGE_SLIDE,
    payload: {
        slide
    }
});
