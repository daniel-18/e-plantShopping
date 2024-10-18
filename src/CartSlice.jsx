import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      state = {...state, items: [...state.items, action.payload]}
      return state
    },
    removeItem: (state, action) => {
      const newItems = state.items.filter(item=> item.index!=action.payload.index)
      state = {...state, items: newItems};
      return state
    },
    updateQuantity: (state, action) => {
      const items = state.items.map((item, index)=>{
        if(item.index == action.payload.index){
          if(action.payload.actionType == "inc"){
            return {...item, count: item.count++}
          }else{
            return {...item, count: item.count--}
          }
        }
      })
      state = {...state, items: newItems}
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
