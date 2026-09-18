import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AckLogoPng from '../assets/ack-logo.png';

import './HeaderComponent.css';


const navItems = [
  {
    label: 'Solutions',
    to: '/solutions',
  },
  {
    label: 'Clients',
    to: '/clients',
  },
  {
    label: 'Leadership',
    to: '/leadership',
  },
  {
    label: 'Careers',
    to: '/careers',
  },
];


const HeaderComponent = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const handleNavigation = (to) => {
    setMobileMenuOpen(false);

    window.location.href = to;
  };


  return (
    <header className="ack-header">

      <div className="ack-header-container">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <motion.a
          href="/"
          className="ack-header-logo"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src={AckLogoPng}
            alt="ACK Solutions"
          />
        </motion.a>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="ack-header-nav">

          {navItems.map((item, index) => (

            <motion.a
              key={item.label}
              href={item.to}
              className="ack-header-nav-link"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.08 + index * 0.05,
              }}
            >
              {item.label}
            </motion.a>

          ))}

        </nav>


        {/* =====================================================
            DESKTOP CTA
        ===================================================== */}

        {/* <motion.a
          href="/contact"
          className="ack-header-cta"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
        >
          <span>Get Started</span>
        </motion.a> */}


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          className={`ack-header-menu ${
            mobileMenuOpen ? 'is-open' : ''
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >

          <span />
          <span />

        </button>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            className="ack-mobile-menu"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >

            <nav>

              {navItems.map((item, index) => (

                <motion.a
                  key={item.label}
                  href={item.to}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>
                    {item.label}
                  </span>

                  <span>↗</span>
                </motion.a>

              ))}


              <a
                href="/contact"
                className="ack-mobile-cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
                <span>↗</span>
              </a>

            </nav>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
};


export default HeaderComponent;