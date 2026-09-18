import FooterComponent from './FooterComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import ActionButton from '../components/ActionButton.jsx';

import AckLogo from '../assets/ack-logo.png';
import ManilaBldg1 from '../assets/manila-bldg-1.png';

import CollabImg1 from '../assets/others/collab-img-1.jpg';
import LightBulb1 from '../assets/others/lightbulb-img-1.png';
import OfficeTeam1 from '../assets/others/office-team-1.jpg';

import FadeRed4 from '../assets/fades/fade-red-4.png';
import Maroon1 from '../assets/fades/fade-maroon-1.png';

import LineEffect1 from '../assets/others/line-effect-2.png';

import './CareersOverviewPage.css';
import AckHelmet from '../components/AckHelmet.jsx';


const cultureItems = [
  {
    number: '01',
    title: 'Collaboration',
    description:
      'We promote a collaborative working culture where teamwork, transparency, and shared accountability drive success.',
    image: CollabImg1,
    imageAlt: 'ACK team collaboration',
  },
  {
    number: '02',
    title: 'Learning-driven',
    description:
      'We encourage constant knowledge sharing, open feedback, and continuous improvement. Our people are supported in developing new skills and exploring new ideas.',
    image: LightBulb1,
    imageAlt: 'Learning and innovation',
  },
  {
    number: '03',
    title: 'Flexibility & trust',
    description:
      'We value outcomes over rigid structures. Our flexible environment is built on trust, accountability, and giving people the space to perform at their best.',
    image: OfficeTeam1,
    imageAlt: 'ACK office team',
  },
];


export default function CareersOverviewPage() {
  return (
    <div className="careers-page">
         <AckHelmet
                title="Careers | Banking Technology & Avaloq Opportunities | ACK Solutions"
                description="Join ACK Solutions and work on real-world banking technology projects involving Avaloq and financial institutions across the region."
                path="/careers"
            />
      <HeaderComponent />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="careers-hero">

        <div className="careers-container careers-hero-grid">

          <div className="careers-hero-content">

            <div className="careers-kicker">
              <span />
              CAREERS AT ACK
            </div>

            <h1>
              Build what comes
              <span>next.</span>
            </h1>

            <p className="careers-hero-description">
              Join a team of experienced Avaloq professionals
              helping banks and financial institutions solve
              complex technology challenges.
            </p>

            <div className="careers-hero-actions">
              <ActionButton
                title="Explore jobs"
                to="/job-openings"
              />

              <a
                href="#culture"
                className="careers-text-link"
              >
                Discover our culture
                <span>↓</span>
              </a>
            </div>

          </div>


          <div className="careers-hero-image">

            <div className="careers-hero-image-inner">

              <img
                src={ManilaBldg1}
                alt="ACK Solutions Manila"
              />

              <div className="careers-hero-image-overlay" />

            </div>

            <div className="careers-hero-index">
              <span>01</span>
              <p>People</p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="careers-intro">

        <div className="careers-container careers-intro-grid">

          <div className="careers-section-label">
            WHO WE ARE
          </div>

          <div className="careers-intro-content">

            <h2>
              Great technology starts with
              <span>great people.</span>
            </h2>

            <p>
              ACK Solutions Inc. fosters a collaborative,
              supportive, and flexible work environment that
              empowers our people to perform at their best.
            </p>

            <p>
              Through continuous collaboration, open dialogue,
              and constructive feedback, we nurture a creative
              and engaging culture where ideas thrive and
              innovation is turned into reality.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CULTURE
      ===================================================== */}

      <section
        id="culture"
        className="careers-culture"
      >

        <div className="careers-container">

          <div className="careers-culture-heading">

            <div>

              <div className="careers-kicker">
                <span />
                OUR CULTURE
              </div>

              <h2>
                A place to
                <span>grow.</span>
              </h2>

            </div>

            <p>
              Our culture is designed around trust, continuous
              learning, and meaningful collaboration.
            </p>

          </div>


          <div className="careers-culture-list">

            {cultureItems.map((item, index) => (

              <article
                className={`careers-culture-item ${
                  index % 2 !== 0
                    ? 'careers-culture-item-reverse'
                    : ''
                }`}
                key={item.number}
              >

                <div className="careers-culture-image">

                  <img
                    src={item.image}
                    alt={item.imageAlt}
                  />

                  <img
                    className="careers-culture-fade"
                    src={
                      index % 2 === 0
                        ? FadeRed4
                        : Maroon1
                    }
                    alt=""
                    aria-hidden="true"
                  />

                  <div className="careers-culture-number">
                    {item.number}
                  </div>

                </div>


                <div className="careers-culture-content">

                  <div className="careers-culture-small-number">
                    {item.number}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT SETS US APART
      ===================================================== */}

      <section className="careers-difference">

        <div className="careers-container careers-difference-grid">

          <div className="careers-difference-logo">

            <div className="careers-logo-frame">

              <img
                src={AckLogo}
                alt="ACK Solutions"
              />

            </div>

          </div>


          <div className="careers-difference-content">

            <div className="careers-kicker">
              <span />
              WHAT SETS US APART
            </div>

            <h2>
              Experience matters.
              <span>So does how you share it.</span>
            </h2>

            <p>
              Our people work alongside experienced Avaloq
              specialists who understand both the technology
              and the realities of banking delivery.
            </p>

            <p>
              That creates an environment where knowledge is
              shared, questions are encouraged, and people can
              build their expertise through real-world
              challenges.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="careers-cta">

        <div className="careers-container">

          <div className="careers-cta-card">

            <img
              src={LineEffect1}
              alt=""
              aria-hidden="true"
              className="careers-cta-lines"
            />

            <div className="careers-cta-content">

              <div className="careers-kicker careers-kicker-light">
                YOUR NEXT CHAPTER
              </div>

              <h2>
                Ready to make
                <span>an impact?</span>
              </h2>

              <p>
                Explore opportunities at ACK Solutions and
                become part of a team solving meaningful
                challenges in banking technology.
              </p>

              <ActionButton
                title="Explore jobs"
                to="/job-openings"
                type="white"
              />

            </div>

          </div>

        </div>

      </section>


      <FooterComponent />

    </div>
  );
}