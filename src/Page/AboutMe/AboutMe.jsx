
import React from 'react'
import {
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa'

const AboutMe = () => {
  const contacts = [
    {
      name: 'WhatsApp',
      description: 'Chat with us directly',
      icon: <FaWhatsapp />,
      color: 'bg-green-500',
      hover: 'hover:bg-green-600',
      link: 'https://wa.me/8801XXXXXXXXX',
    },
    {
      name: 'Facebook',
      description: 'Follow our Facebook page',
      icon: <FaFacebook />,
      color: 'bg-blue-600',
      hover: 'hover:bg-blue-700',
      link: 'https://www.facebook.com/yourpage',
    },
    {
      name: 'YouTube',
      description: 'Watch our videos',
      icon: <FaYoutube />,
      color: 'bg-red-600',
      hover: 'hover:bg-red-700',
      link: 'https://www.youtube.com/@yourchannel',
    },
    {
      name: 'Email',
      description: 'Send us an email',
      icon: <FaEnvelope />,
      color: 'bg-emerald-600',
      hover: 'hover:bg-emerald-700',
      link: 'mailto:info@yourmadrasah.com',
    },
    {
      name: 'Direct Call',
      description: 'Call us directly',
      icon: <FaPhoneAlt />,
      color: 'bg-teal-600',
      hover: 'hover:bg-teal-700',
      link: 'tel:+8801XXXXXXXXX',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-800 mb-4">
          About the Madrasah
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          An overview of our institution, featuring our establishment
          history, vision, core mission, and guiding objectives.
        </p>
      </div>

      {/* Establishment Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-8 border-l-4 border-emerald-600">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
          Establishment
        </h2>
        <p className="text-gray-700 leading-relaxed">
          This Madrasah was established in the year <strong>1438 AH</strong>,
          corresponding to <strong>2017 AD</strong>, to be a leading institution
          in the field of education and upbringing, specialized in providing
          distinguished programs for teaching the Arabic language and spreading
          the correct Islamic education.
        </p>
      </section>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-emerald-50 shadow-md rounded-lg p-6 border-t-4 border-emerald-600">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
            Vision
          </h2>
          <p className="text-gray-700 leading-relaxed italic">
            "A leading Islamic lighthouse in education and upbringing, deeply
            rooted in authenticity and adaptive to contemporary challenges."
          </p>
        </div>

        <div className="bg-emerald-50 shadow-md rounded-lg p-6 border-t-4 border-emerald-600">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
            Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            An educational, non-profit institution dedicated to teaching
            Islamic Sharia Knowledge and Arabic, and firmly instilling the
            correct doctrine (Aqeedah); aimed at preparing a righteous,
            qualified and distinguished generation that takes pride in its
            Islamic identity and Arabic language, and seeks to provide
            community services as a contribution to spreading the message
            of eternal peace.
          </p>
        </div>
      </div>

      {/* Objectives */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-12 border-l-4 border-emerald-600">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
          Objectives
        </h2>
        <ul className="space-y-3 text-gray-700 list-decimal list-inside leading-relaxed">
          <li>
            Preparing a generation that is deeply knowledgeable in Sharia
            knowledge, sciences and well-versed in contemporary cultures.
          </li>
          <li>
            Nurturing the youth based on Islamic values, principles, and
            concepts according to a moderate approach.
          </li>
          <li>
            Enabling students to master Arabic and English language skills.
          </li>
          <li>
            Utilizing the latest technical means and e-learning.
          </li>
          <li>
            Preparing cadres capable of cultural communication and showcasing
            the tolerant nature of Islam.
          </li>
          <li>
            Adopting high-quality standards in education according to
            international benchmarks.
          </li>
          <li>
            Providing sustainable financial resources to serve education.
          </li>
        </ul>
      </section>

    </div>
  )
}

export default AboutMe
