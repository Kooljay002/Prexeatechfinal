import Link from 'next/link';
import { CircleCheck as CheckCircle } from 'lucide-react';

export const metadata = { title: 'Application Submitted — Prexea Technology Limited' };

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#F0F2F5' }}>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 max-w-lg w-full text-center">
        <img
          src="/Prexea_logo.png"
          alt="Prexea Technology Limited"
          className="h-12 mx-auto mb-8 object-contain"
        />
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#DCFCE7' }}>
          <CheckCircle className="w-8 h-8" style={{ color: '#5B8C51' }} />
        </div>
        <h1 className="text-2xl font-extrabold text-[#0A2342] mb-3">
          Application Successfully Submitted
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-2">
          Thank you for applying to become a Field Agent with Prexea Technology Limited.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Your application has been received successfully. Our recruitment team will review
          your application, and shortlisted applicants will be contacted through the
          information provided.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold rounded-lg text-white uppercase tracking-wider transition-colors"
          style={{ backgroundColor: '#0A2342' }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
