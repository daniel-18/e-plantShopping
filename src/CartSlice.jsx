import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
      
    },
    removeItem: (state, action) => {
      const newItems = state.items.filter(item=> item.item.name!=action.payload.item.name)
      state.items = newItems

    },
    updateQuantity: (state, action) => {
      
      let plant = state.items.find((plant)=> plant.item.name == action.payload.name)
      
      let i = state.items.findIndex((data)=> plant.item.name == data.item.name)

      if(action.payload.actionType == "inc"){
        
        let newItem = {...plant, count: plant.count++}
        state.items = state.items.splice(i, 1, newItem)
        
      }else{
        if(plant.count ==1){
          const newItems = state.items.filter(item=> item.item.name!=plant.item.name)
          state.items = newItems;
          return 
        }
        let newItem = {...plant, count: plant.count--}
        state.items = state.items.splice(i, 1, newItem)
      
      }

    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
