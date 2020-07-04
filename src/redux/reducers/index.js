import { combineReducers } from "redux";
import comments from './comments';
import highScores from './highscores';
import previewSlider from './previewSlider';
import sliderBanner from './sliderBanner';
import user from './user';

export default combineReducers({
    comments,
    highScores,
    previewSlider,
    sliderBanner,
    user
});
