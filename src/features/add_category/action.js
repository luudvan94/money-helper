import Category from '../../api/category';

export const REQUEST_ADD_CATEGORY = "REQUEST_ADD_CATEGORY";
export const RECEIVE_NEW_CATEGORY = "RECEIVE_NEW_CATEGORY";
export const GO_BACK = "GO_BACK";

export function requestAddCategory(category) {
    return { type: REQUEST_ADD_CATEGORY, category }
}

export function receiveNewCategory(category) {
    return { type: RECEIVE_NEW_CATEGORY, category }
}

export function goBack() {
    return { type: GO_BACK }
}

export function addCategory(category = {}) {
    return function(dispatch) {

        dispatch(requestAddCategory(category));

        var category = new Category();
        category.save({
            score: 1337,
            playerName: "Sean Plott",
            cheatMode: false
        })
        .then((gameScore) => {
            console.log('New object created with objectId: ' + gameScore.id);
        }, (error) => {
            console.log(error);
        });
    }
}