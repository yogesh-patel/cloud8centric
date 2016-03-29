import constants from '../constants';

let {SHOW_NAVIGATION_MENU, HIDE_NAVIGATION_MENU, HIDE_PRODUCTS, SHOW_PRODUCTS} = constants;

export function showNavigationMenu(showNavigation) {

    return {
        type: SHOW_NAVIGATION_MENU,
        payload:showNavigation
    }

}

export function showProducts(productStatus) {

    return {
        type: SHOW_PRODUCTS,
        payload: productStatus
    }

}
