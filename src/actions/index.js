export const shoppingBagActions = {
  CLEAN_BAG: 'CLEAN_BAG',
  ADD_ITEM_TO_BAG: 'ADD_ITEM_TO_BAG',
  REMOVE_ITEM_FROM_BAG: 'REMOVE_ITEM_FROM_BAG',
}

export const cleanBag = dispatch => (payload = []) => {
  dispatch({
    type: shoppingBagActions.CLEAN_BAG,
  })
}

export const addItemToBag = dispatch => payload => {
  dispatch({
    type: shoppingBagActions.ADD_ITEM_TO_BAG,
    payload,
  })
}

export const removeItemFromBag = dispatch => payload => {
  dispatch({
    type: shoppingBagActions.REMOVE_ITEM_FROM_BAG,
    payload,
  })
}
