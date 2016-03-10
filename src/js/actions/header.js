import constants from '../constants';

let {SHOW_NAVIGATION_MENU, HIDE_NAVIGATION_MENU} = constants;

export function showNavigationMenu(){
    return {
        type:SHOW_NAVIGATION_MENU
    }
}

export function hideNavigationMenu(){
    return {
        type:HIDE_NAVIGATION_MENU
    }
}
