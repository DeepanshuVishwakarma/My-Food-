import React from "react";
import { toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slice/CartSlice";
function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };
  return (
    <div>
      <div>
        <div>
          <img src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <FaTrash></FaTrash>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
