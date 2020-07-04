import { CHANGE_BANNER_SLIDE } from '../types';

export const changeBannerSlide = slide => ({
    type: CHANGE_BANNER_SLIDE,
    payload: { slide }
});
