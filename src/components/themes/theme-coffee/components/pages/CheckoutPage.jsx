// components/themes/theme-two/pages/CheckoutPage.jsx
export default function ThemeTwoCheckout({ data }) {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen theme-font bg-background'>
      {/* Left side: Form */}
      <div className='flex-1 p-8 lg:p-16'>
        <div className='max-w-md ml-auto'>
          <h1 className='text-4xl font-extrabold text-primary mb-10'>
            System Checkout
          </h1>
          <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-2 p-4 bg-secondary/10 rounded-lg border border-secondary/20'>
              <input
                className='bg-transparent w-full outline-none'
                placeholder='Card Number'
              />
            </div>
          </div>
          <button className='mt-8 w-full bg-primary text-white py-3 rounded-lg font-mono shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)]'>
            EXECUTE_PAYMENT
          </button>
        </div>
      </div>

      {/* Right side: Summary */}
      <div className='w-full lg:w-1/3 bg-gray-900 text-white p-8 lg:p-16'>
        <h2 className='text-xl font-bold mb-6'>Manifest</h2>
        <div className='flex justify-between border-b border-white/10 pb-4'>
          <span>Total</span>
          <span className='text-primary'>$199.00</span>
        </div>
      </div>
    </div>
  );
}
