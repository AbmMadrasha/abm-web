import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrLanguage } from 'react-icons/gr';
import { LiaQuranSolid, LiaLanguageSolid } from 'react-icons/lia';
import { SiGeneralmotors, SiCoursera, SiGreatlearning } from 'react-icons/si';
import { BiSolidInstitution } from 'react-icons/bi';
import { MdOnlinePrediction, MdFeedback, MdKeyboardArrowRight } from 'react-icons/md';
import { GrScorecard } from 'react-icons/gr';
import { FaCertificate, FaOpera } from 'react-icons/fa';
import { PiExam } from 'react-icons/pi';
import { GoLaw } from 'react-icons/go';
import { FaToriiGate } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';
import logo from '../../assets/logo.jpeg';

// 🧩 All menu items in one place — no more repetition
const menuData = [
  { label: 'Home', to: '/' },
  { label: 'About US', to: '/AboutMe' },
  {
    label: 'Department',
    children: [
      { label: 'Kitab Department', to: '/Department#kitab-section', icon: SiGeneralmotors },
      { label: 'Hifz Department', to: '/Department#hifz-section', icon: LiaQuranSolid },
      { label: 'Assaf Altaheeli 1year', icon: SiCoursera },
      { label: 'Arabic Language Learning Course', to: '/Application', icon: LiaLanguageSolid },
      { label: 'E-Learning', to: '/Application', icon: SiGreatlearning },
    ],
  },
  {
    label: 'Application',
    children: [
      { label: 'On-Campus', to: '/Application', icon: BiSolidInstitution },
      { label: 'Online', to: '/Application', icon: MdOnlinePrediction },
    ],
  },
  { label: 'Cultural Event', to: '/CultEvent' },
  {
    label: 'E-Service',
    children: [
      {
        label: 'Madrasah Card', icon: GrScorecard,
        children: [
          { label: 'Academic', to: '/', icon: MdOnlinePrediction },
          { label: 'Cultural', to: '/', icon: MdOnlinePrediction },
          { label: 'Student', to: '/', icon: MdOnlinePrediction },
          { label: 'Request Now', to: '/', icon: MdOnlinePrediction },
        ],
      },
      {
        label: 'Certificate', icon: FaCertificate,
        children: [
          { label: 'Completion (CC)', to: '/', icon: MdOnlinePrediction },
          { label: 'Transfer (TC)', to: '/', icon: MdOnlinePrediction },
          { label: 'Leaving (SLC)', to: '/', icon: MdOnlinePrediction },
        ],
      },
      {
        label: 'Co-Operation Portal', icon: FaOpera,
        children: [
          { label: 'Academic', to: '/', icon: MdOnlinePrediction },
          { label: 'Admission', to: '/', icon: MdOnlinePrediction },
          { label: 'Check Status', to: '/', icon: MdOnlinePrediction },
        ],
      },
      {
        label: 'Exam and Result', icon: PiExam,
        children: [
          { label: 'Admission Test', to: '/', icon: MdOnlinePrediction },
          { label: 'Check Status', to: '/', icon: MdOnlinePrediction },
          { label: 'Result', to: '/', icon: MdOnlinePrediction },
        ],
      },
      {
        label: 'Online Quran Learning', icon: MdOnlinePrediction,
        children: [
          { label: 'Quran', to: '/', icon: MdOnlinePrediction },
          { label: 'Qaida', to: '/', icon: MdOnlinePrediction },
        ],
      },
      {
        label: 'Recruitment Gate', icon: FaToriiGate,
        children: [
          { label: 'Nurani Teacher', to: '/', icon: MdOnlinePrediction },
          { label: 'Arabic Teacher', to: '/', icon: MdOnlinePrediction },
          { label: 'General Teacher', to: '/', icon: MdOnlinePrediction },
          { label: 'Science Teacher', to: '/', icon: MdOnlinePrediction },
          { label: 'Hifz Teacher', to: '/', icon: MdOnlinePrediction },
          { label: 'Security Guard', to: '/', icon: MdOnlinePrediction },
          { label: 'Cook', to: '/', icon: MdOnlinePrediction },
        ],
      },
      {
        label: 'Parent Feedback, Compliant and Suggestion', icon: MdFeedback,
        children: [
          { label: 'Educational', to: '/', icon: MdOnlinePrediction },
          { label: 'Student', to: '/', icon: MdOnlinePrediction },
          { label: 'Cultural', to: '/', icon: MdOnlinePrediction },
          { label: 'Environment', to: '/', icon: MdOnlinePrediction },
          { label: 'Apply', to: '/', icon: MdOnlinePrediction },
        ],
      },
      {
        label: 'Laws and Regulations', icon: GoLaw,
        children: [
          { label: 'Student', to: '/', icon: MdOnlinePrediction },
          { label: 'Teacher', to: '/', icon: MdOnlinePrediction },
          { label: 'Employees', to: '/', icon: MdOnlinePrediction },
          { label: 'Worker', to: '/', icon: MdOnlinePrediction },
        ],
      },
      {
        label: 'Achievement', icon: GiAchievement,
        children: [
          { label: 'Student Achievement', to: '/', icon: MdOnlinePrediction },
          { label: 'Teacher Achievement', to: '/', icon: MdOnlinePrediction },
          { label: 'Submit', to: '/', icon: MdOnlinePrediction },
        ],
      },
      { label: 'Alomii Feedback and Suggestion', to: '/', icon: MdFeedback },
    ],
  },
  { label: 'E-Learning', to: '/' },
  { label: 'Contact US', to: '/contact' },
  { label: 'Video Gallary', to: '/videos' },
];

// ─────────────────────────────────────────────
// 🖥️ Desktop: recursive dropdown item
// ─────────────────────────────────────────────
const DesktopItem = ({ item, level = 0 }) => {
  const Icon = item.icon;
  const hasChildren = item.children?.length;

  // Standalone link (no children)
  if (!hasChildren) {
    return (
      <li>
        <Link
          to={item.to}
          className="p-3 flex justify-between gap-2 items-center hover:bg-gray-100"
        >
          <div className="flex justify-start gap-4 items-center">
            {Icon && <Icon className="text-blue-900" />}
            <h3 className="text-blue-900">{item.label}</h3>
          </div>
          {level >= 0 && <MdKeyboardArrowRight className="text-blue-900 text-2xl" />}
        </Link>
      </li>
    );
  }

  // Item with nested submenu
  return (
    <li className="p-3 flex justify-between gap-2 items-center hover:bg-gray-100 relative group/submenu">
      <div className="flex justify-start gap-4 items-center">
        {Icon && <Icon className="text-blue-900" />}
        <h3 className="text-blue-900">{item.label}</h3>
      </div>
      <MdKeyboardArrowRight className="text-blue-900 text-2xl" />

      <ul
        className="absolute left-full top-0 min-w-90 bg-white shadow-lg rounded-md max-h-96 overflow-y-auto
          opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible
          transition-all duration-300 z-50"
      >
        {item.children.map((child, i) => (
          <DesktopItem key={i} item={child} level={level + 1} />
        ))}
      </ul>
    </li>
  );
};

// 🖥️ Desktop top-level menu
const DesktopMenu = () => (
  <div className="hidden md:flex">
    <ul className="flex justify-center items-center gap-10">
      {menuData.map((item, i) =>
        item.children ? (
          <li key={i} className="text-lg relative group">
            <button className="cursor-pointer text-blue-900">{item.label}</button>
            <ul
              className="absolute left-0 top-full min-w-70 bg-white shadow-lg rounded-md
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-300 z-50"
            >
              {item.children.map((child, j) => (
                <DesktopItem key={j} item={child} level={0} />
              ))}
            </ul>
          </li>
        ) : (
          <li key={i} className="text-lg text-blue-900">
            <Link to={item.to}>{item.label}</Link>
          </li>
        )
      )}
    </ul>
  </div>
);

// ─────────────────────────────────────────────
// 📱 Mobile: recursive accordion item
// ─────────────────────────────────────────────
const MobileItem = ({ item, level = 0, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  const hasChildren = item.children?.length;

  if (!hasChildren) {
    return (
      <li>
        <Link
          to={item.to}
          onClick={onNavigate}
          className="flex items-center gap-3 py-2 pl-2 text-blue-900 hover:bg-gray-100"
          style={{ paddingLeft: `${level * 16 + 8}px` }}
        >
          {Icon && <Icon />}
          <span>{item.label}</span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 py-2 pl-2 text-blue-900 hover:bg-gray-100"
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        <span className="flex items-center gap-3">
          {Icon && <Icon />}
          {item.label}
        </span>
        <MdKeyboardArrowRight
          className={`transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        />
      </button>
      {open && (
        <ul>
          {item.children.map((child, i) => (
            <MobileItem
              key={i}
              item={child}
              level={level + 1}
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

// 📱 Mobile drawer
const MobileMenu = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-[9998] md:hidden"
      />
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl z-[9999] md:hidden overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-blue-900">Menu</span>
          <button onClick={onClose} className="text-2xl text-blue-900">✕</button>
        </div>
        <ul className="p-2">
          {menuData.map((item, i) => (
            <MobileItem key={i} item={item} onNavigate={onClose} />
          ))}
        </ul>
        <div className="p-4 border-t flex flex-col gap-2">
          <button className="text-2xl self-start"><GrLanguage /></button>
          <button className="bg-[#1D4961] text-white py-2 rounded hover:bg-amber-600 transition-colors">
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

// ─────────────────────────────────────────────
// 🏠 Main Navbar
// ─────────────────────────────────────────────
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[9999] flex justify-between px-4 md:px-10 bg-white py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-oswald font-bold text-[12px] text-center">
              Abu Bakar (R) Madrasah Chattogram
            </h3>
            <h3 className="font-oswald font-bold text-[14px] text-center">
              ﻣﺪﺭﺳﺔ ﺃﺑﻲ ﺑﻜﺮ ﺭﺿﻲ ﺍﻟﻠﻪ ﻋﻨﻪ ﺷﻴﺘﺎﻏﻮﻧﻎ
            </h3>
          </div>
        </div>

        {/* Desktop menu */}
        <DesktopMenu />

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button className="cursor-pointer text-2xl"><GrLanguage /></button>
          <button className="text-xl items-center bg-[#1D4961] w-full p-1 cursor-pointer text-white rounded-xs hover:bg-amber-600 hover:font-semibold">
            Log In
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-2xl flex items-center"
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Navbar;