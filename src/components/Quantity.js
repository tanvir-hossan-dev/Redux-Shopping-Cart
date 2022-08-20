import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddProduct } from "../Redux/ActionCreator";

const Quantity = () => {
  const data = useSelector((item) => item.productReducer);
  const dispatch = useDispatch();
  const handleQuantityPlus = (id, quantity) => {
    const product = data.product.find((item) => item.id === id);
    dispatch(AddProduct({ ...product, quantity }));
  };
  const handleQuantityMinus = (id, quantity) => {
    const product = data.product.find((item) => item.id === id);
    dispatch(AddProduct({ ...product, quantity }));
  };
  return (
    <>
      <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        {data.product.length > 0 &&
          data.product.map((item) => (
            <div key={item.id} class="flex justify-between border-b-2 mb-2">
              <div class="text-lg py-2">
                <p>{item.name}</p>
              </div>
              <div class="text-lg py-2">
                <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button
                    onClick={() =>
                      handleQuantityPlus(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() =>
                      handleQuantityPlus(item.id, item.quantity + 1)
                    }
                    disabled={item.quantity === item.stock}
                    class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}

        <div class="flex justify-center items-center text-center">
          <div class="text-xl font-semibold">
            <p>Total Item</p>
            <p class="text-5xl">
              {data.product.reduce((accumulator, current) => {
                return accumulator + current.quantity;
              }, 0)}
            </p>
          </div>
        </div>
      </div>
      <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div class="flex justify-center items-center text-center">
          <div class="text-xl font-semibold">
            <p>Total Price</p>
            <p class="text-5xl">
              {data.product.reduce((accumulator, current) => {
                return accumulator + current.quantity * current.price;
              }, 0)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quantity;
