import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slice/CartSlice";
function Product(props) {
  let post = props.post;
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed From Cart");
  };
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      {/* <button>{true ? <p>Remove Item</p> : <p>Add to Cart</p>}</button> */}
      {cart.some((p) => p.id == post.id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={AddToCart}>Add to Cart</button>
      )}
    </div>
  );
}

export default Product;
