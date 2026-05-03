import React from 'react'

interface AuthorBioProps {
  authorName?: string
  designation?: string
  bio?: string
  quote?: string
}

export default function AuthorBio({
  authorName = 'Adv. Meera Sharma',
  designation = 'Legal Aid Volunteer, 8 Years Experience',
  bio = 'Dedicated to making legal education accessible to every Indian citizen through LegalSathi AI.',
  quote = '"Legal awareness is the foundation of a just society. Every person deserves to understand their rights and responsibilities."',
}: AuthorBioProps) {
  return (
    <div className="mt-12 pt-8 border-t-2 border-gray-200">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <span className="text-white text-2xl font-bold">MS</span>
            </div>
          </div>

          {/* Bio Content */}
          <div className="flex-1">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-gray-800">{authorName}</h3>
              <p className="text-sm text-indigo-600 font-semibold">{designation}</p>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-3">{bio}</p>

            {/* Quote */}
            <div className="italic text-gray-800 bg-white bg-opacity-60 rounded px-4 py-3 border-l-4 border-indigo-500">
              <p className="text-sm">{quote}</p>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-4 flex gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs font-semibold text-green-700">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified Legal Expert
          </span>
          <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs font-semibold text-blue-700">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Trusted by 50,000+ Users
          </span>
        </div>
      </div>
    </div>
  )
}
