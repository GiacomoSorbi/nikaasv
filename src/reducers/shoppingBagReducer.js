import { shoppingBagActions } from '../actions'

export const shoppingBagInitialState = { orders: [] }

export default (state = shoppingBagInitialState, action) => {
  switch (action.type) {
    case shoppingBagActions.ADD_ITEM_TO_BAG:
      return {
        ...state,
        orders: state.orders.concat(action.payload),
      }
    case shoppingBagActions.REMOVE_ITEM_FROM_BAG:
      console.log(
        action,
        state.orders.slice(0, action.payload),
        state.orders.slice(action.payload + 1),
        state.orders
          .slice(0, action.payload)
          .concat(state.orders.slice(+action.payload + 1)),
      )
      return {
        ...state,
        orders: state.orders
          .slice(0, +action.payload)
          .concat(state.orders.slice(+action.payload + 1)),
      }
    default:
      return state
  }
}
