export function actionPinUser(user) {
    return {
        type: 'PIN_USER',
        user: user
    }
}

export function actionUnpinUser(user) {
    return {
        type: 'UNPIN_USER',
        user: user
    }
}