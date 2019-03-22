import {
    START_GAME,
    HANDLE_CLICK,
    CHECK_MINE,

} from "./const";

export const startGame = () => {
    return {
        type: START_GAME
    }
};

export const handleClick = (cell) => {
    return {
        type: HANDLE_CLICK,
        payload: cell
    }
};

export const checkMine = (cell) => {
    return {
        type: CHECK_MINE,
        payload: cell
    }
};