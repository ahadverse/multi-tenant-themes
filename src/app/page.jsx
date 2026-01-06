import Link from "next/link";

export default function RootPage() {
  return (
    <div className='flex items-center justify-center min-h-screen font-sans'>
      <div className='text-center border p-10 rounded-xl shadow-sm'>
        <h1 className='text-2xl font-bold mb-2'>Multi-tenant Engine</h1>
        <p className='text-gray-600'>Please visit a tenant site:</p>
        <div className='mt-4 space-y-2 space-x-2'>
          <Link href={`http://coffee.localhost:3000`}>
            <code className='block bg-gray-100 p-2 rounded'>
              coffee.localhost:3000
            </code>
          </Link>
          <br />
          <Link href={`http://vibestore.localhost:3000`}>
            {" "}
            <code className='block bg-gray-100 p-2 rounded'>
              vibestore.localhost:3000
            </code>
          </Link>
          <br />
          <Link href={`http://nexatech.localhost:3000`}>
            {" "}
            <code className='block bg-gray-100 p-2 rounded'>
              nexatech.localhost:3000
            </code>
          </Link>
          <br />
          <Link href={`http://daraz-mart.localhost:3000`}>
            {" "}
            <code className='block bg-gray-100 p-2 rounded'>
              daraz-mart.localhost:3000
            </code>
          </Link>
        </div>
      </div>
    </div>
  );
}
