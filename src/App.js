import "./App.css";
import ProductShow from "./components/ProductShow";
import Quantity from "./components/Quantity";

function App() {
  return (
    <>
      <div class="bg-gray-50 h-full md:h-screen">
        <div class="grid place-items-center">
          <h1 class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <ProductShow />
          <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <Quantity />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
