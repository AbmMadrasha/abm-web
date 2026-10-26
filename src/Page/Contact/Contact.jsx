
import React from 'react'
import {
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa'

const Contact = () => {
  const contacts = [
    {
      name: 'WhatsApp',
      description: 'Chat with us directly',
      icon: <FaWhatsapp />,
      color: 'bg-green-500',
      hover: 'hover:bg-green-600',
      link: 'https://wa.me/8801336629479',
    },
    {
      name: 'Facebook',
      description: 'Follow our Facebook page',
      icon: <FaFacebook />,
      color: 'bg-blue-600',
      hover: 'hover:bg-blue-700',
      link: 'https://www.facebook.com/share/19S8sfj8q1/',
    },
    {
      name: 'YouTube',
      description: 'Watch our videos',
      icon: <FaYoutube />,
      color: 'bg-red-600',
      hover: 'hover:bg-red-700',
      link: 'https://youtube.com/@abubakarrmctg?si=3c0zViHQIxyKbZRy',
    },
    {
      name: 'Email',
      description: 'Send us an email',
      icon: <FaEnvelope />,
      color: 'bg-emerald-600',
      hover: 'hover:bg-emerald-700',
      link: 'mailto:abubakarramadrasahchattogram@gmail.com',
    },
    {
      name: 'Direct Call Madrasah',
      description: 'Call us directly',
      icon: <FaPhoneAlt />,
      color: 'bg-teal-600',
      hover: 'hover:bg-teal-700',
      link: 'tel:+8801634903200',
    },

    {
      name: 'Direct Call Principal',
      description: 'Call us directly',
      icon: <FaPhoneAlt />,
      color: 'bg-teal-600',
      hover: 'hover:bg-teal-700',
      link: 'tel:+8801735944188',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <section className="bg-emerald-50 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-emerald-800 mb-3">
            Contact & Connect With Us
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Stay connected with our Madrasah. Contact us for information,
            admissions, and other inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contacts.map((contact) => {
            const isSocial = ['WhatsApp', 'Facebook', 'YouTube'].includes(
              contact.name
            )

            return (
              <a
                key={contact.name}
                href={contact.link}
                target={isSocial ? '_blank' : undefined}
                rel={isSocial ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`${contact.color} ${contact.hover} text-white
                              w-14 h-14 rounded-full flex items-center
                              justify-center text-2xl shrink-0 transition-colors`}
                >
                  {contact.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {contact.description}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Contact
