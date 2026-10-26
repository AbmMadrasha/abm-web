
import React from 'react';
import { RiMiniProgramLine } from 'react-icons/ri';
import { FaCodeCompare } from 'react-icons/fa6';
import { GiDetour } from 'react-icons/gi';
import { FaArrowRight } from 'react-icons/fa';

const CultEvent = () => {
  const events = [
    {
      title: 'Seminar',
      description:
        'Explore new ideas, share knowledge, and learn from experienced speakers.',
      Icon: RiMiniProgramLine,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Cultural Competition',
      description:
        'Celebrate creativity, talent, and cultural diversity through exciting competitions.',
      Icon: FaCodeCompare,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: 'Educational Tour-1',
      description:
        'Discover new places and gain practical knowledge beyond the classroom.',
      Icon: GiDetour,
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      title: 'Educational Tour-2',
      description:
        'Experience learning through exploration, teamwork, and discovery.',
      Icon: GiDetour,
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <section className="bg-slate-50 px-5 py-20 md:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Our Activities
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore Our Events
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Discover opportunities to learn, express your creativity, and
            create unforgettable experiences together.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((item) => {
            const Icon = item.Icon;

            return (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                >
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold leading-snug text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 flex-grow text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <button
                    type="button"
                    onClick={() =>
                      console.log(`Explore event: ${item.title}`)
                    }
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
                  >
                    Explore Event
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CultEvent;
