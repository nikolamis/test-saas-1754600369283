import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Test SAAS 1754600369283</title>
      </Head>
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Sorry, the page you're looking for doesn't exist. 
            Let's get you back on track.
          </p>
          
          <div className="space-x-4">
            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Go Home
            </Link>
            <Link href="/pricing" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              View Pricing
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            Powered by Test SAAS 1754600369283
          </div>
        </div>
      </div>
    </>
  );
}