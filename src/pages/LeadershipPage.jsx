import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import ActionButton from '../components/ActionButton.jsx'

import AckLogo from '../assets/ack-logo.png'
import ManilaBldg1 from '../assets/manila-bldg-1.png'
import VicenteRed from '../assets/people/vicente-red-sq.jpg'
import CelsoRed from '../assets/people/celso-red-sq.jpg'
import LineEffect1 from '../assets/others/line-effect-2.png'

import './LeadershipPage.css'
import AckHelmet from '../components/AckHelmet.jsx'


const leaders = [
    {
        name: 'Vicente Figueroa III',
        role: 'President / CEO',
        image: VicenteRed,
        alt: 'ACK President and CEO'
    },
    {
        name: 'Celso Ribunal',
        role: 'COO',
        image: CelsoRed,
        alt: 'ACK Chief Operating Officer'
    }
]


export default function LeadershipPage() {

    return (
        <div className="leadership-page">
<AckHelmet
    title="Leadership | ACK Solutions Inc."
    description="Meet the leadership team behind ACK Solutions and learn about the experience and expertise driving our Avaloq and banking technology services."
    path="/leadership"
/>
            <HeaderComponent />

            <main>

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="leadership-hero">

                    <div
                        className="leadership-hero-bg"
                        style={{
                            backgroundImage: `
                                linear-gradient(
                                    90deg,
                                    rgba(10, 11, 15, 0.96) 0%,
                                    rgba(10, 11, 15, 0.84) 42%,
                                    rgba(10, 11, 15, 0.45) 75%,
                                    rgba(10, 11, 15, 0.2) 100%
                                ),
                                url(${ManilaBldg1})
                            `
                        }}
                    />

                    <div className="leadership-container">

                        <div className="leadership-hero-content">

                            <div className="leadership-eyebrow">
                                LEADERSHIP
                            </div>

                            <h1>
                                Built by experts.
                                <span>Led by experience.</span>
                            </h1>

                            <p>
                                ACK Solutions was founded by seasoned Avaloq
                                professionals with deep experience in
                                designing, developing, customizing, and
                                delivering banking solutions across multiple
                                markets.
                            </p>

                            <div className="leadership-hero-actions">

                                <a
                                    href="#leadership"
                                    className="leadership-scroll-link"
                                >
                                    Meet our leadership
                                    <span>↓</span>
                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="leadership-hero-index">

                        <strong>01</strong>

                        <span>
                            Leadership
                        </span>

                    </div>

                </section>


                {/* =====================================================
                    LEADERSHIP INTRO
                ===================================================== */}

                <section
                    id="leadership"
                    className="leadership-intro"
                >

                    <div className="leadership-container">

                        <div className="leadership-intro-grid">

                            <div className="leadership-section-label">
                                OUR FOUNDATION
                            </div>

                            <div>

                                <div className="leadership-kicker">
                                    EXPERIENCE FIRST
                                </div>

                                <h2>
                                    Expertise that
                                    <span>shapes how we lead.</span>
                                </h2>

                                <div className="leadership-copy">

                                    <p className="leadership-lead">
                                        Our leadership is built on deep
                                        technical expertise and real-world
                                        delivery experience.
                                    </p>

                                    <p>
                                        The company was founded by seasoned
                                        Avaloq professionals who have spent
                                        years designing, developing, and
                                        implementing complex banking solutions
                                        across multiple markets.
                                    </p>

                                    <p>
                                        That experience continues to shape
                                        how we approach every engagement —
                                        with technical depth, practical
                                        understanding, and a focus on
                                        delivering outcomes that work in
                                        real banking environments.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    STATEMENT
                ===================================================== */}

                <section className="leadership-statement">

                    <div className="leadership-container">

                        <div className="leadership-statement-card">

                            <div className="leadership-statement-number">
                                02
                            </div>

                            <div>

                                <div className="leadership-kicker light">
                                    AVALOQ MASTERY
                                </div>

                                <h2>
                                    Leadership rooted in
                                    <span>practical experience.</span>
                                </h2>

                                <p>
                                    Leadership rooted in practical experience
                                    creates clarity, confidence, and consistent
                                    results across every engagement.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    WHO WE ARE
                ===================================================== */}

                <section className="leadership-who">

                    <div className="leadership-container">

                        <div className="leadership-who-grid">

                            <div className="leadership-logo-panel">

                                <div className="leadership-logo-circle">
                                    <img
                                        src={AckLogo}
                                        alt="ACK Solutions"
                                    />
                                </div>

                                <span>
                                    ACK SOLUTIONS
                                </span>

                            </div>


                            <div className="leadership-who-content">

                                <div className="leadership-kicker">
                                    03 / WHO WE ARE
                                </div>

                                <h2>
                                    Founded on
                                    <span>Avaloq expertise.</span>
                                </h2>

                                <p className="leadership-lead">
                                    Founded on October 18, 2022, ACK Solutions
                                    was established by Avaloq professionals
                                    with over a decade of hands-on experience
                                    in customizing and enhancing Avaloq Wealth
                                    products.
                                </p>

                                <p>
                                    With deep expertise in configuration,
                                    development, and platform optimization,
                                    the founders have successfully supported
                                    financial institutions in tailoring
                                    Avaloq solutions to meet complex business
                                    and regulatory requirements.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

 <section className="leadership-founders">

    <div className="leadership-container">

        <div className="leadership-founders-heading">

            <div>
                <div className="leadership-kicker">
                    THE PEOPLE BEHIND ACK
                </div>

                <h2>
                    Experience at the
                    <span>helm.</span>
                </h2>
            </div>

            <p>
                ACK Solutions is guided by leaders whose careers
                have been shaped by hands-on work in Avaloq and
                banking technology.
            </p>

        </div>


        <div className="leadership-founders-grid">

            <div className="leadership-founder">

                <img
                    src={VicenteRed}
                    alt="ACK President and CEO"
                />

                <div className="leadership-founder-overlay">
                    <div>
                        <h3>Vicente Figueroa III</h3>
                        <p>President / CEO</p>
                    </div>

                    <span>01</span>
                </div>

            </div>


            <div className="leadership-founder">

                <img
                    src={CelsoRed}
                    alt="ACK Chief Operating Officer"
                />

                <div className="leadership-founder-overlay">
                    <div>
                        <h3>Celso Ribunal</h3>
                        <p>COO</p>
                    </div>

                    <span>02</span>
                </div>

            </div>

        </div>

    </div>

</section>


                {/* =====================================================
                    PHILOSOPHY
                ===================================================== */}

                <section className="leadership-philosophy">

                    <div className="leadership-container">

                        <div className="leadership-philosophy-inner">

                            <div className="leadership-philosophy-number">
                                04
                            </div>

                            <div>

                                <div className="leadership-kicker">
                                    OUR APPROACH
                                </div>

                                <h2>
                                    Deep expertise.
                                    <span>Practical leadership.</span>
                                </h2>

                                <p>
                                    Our leadership philosophy is grounded in
                                    the belief that technical expertise only
                                    creates value when it can be translated
                                    into practical delivery.
                                </p>

                                <p>
                                    That means understanding the platform,
                                    understanding the business, and
                                    understanding the realities of delivering
                                    change within financial institutions.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CTA
                ===================================================== */}

                <section className="leadership-cta">

                    <div className="leadership-container">

                        <div className="leadership-cta-card">

                            <img
                                src={LineEffect1}
                                alt=""
                                className="leadership-cta-effect"
                            />

                            <div className="leadership-cta-content">

                                <div className="leadership-kicker light">
                                    WORK WITH ACK
                                </div>

                                <h2>
                                    Let's build what's
                                    <span>next.</span>
                                </h2>

                                <p>
                                    Whether you're looking for Avaloq
                                    expertise, delivery support, or a
                                    trusted technology partner, we'd be
                                    glad to start the conversation.
                                </p>

                                <ActionButton
                                    title="Contact us"
                                    type="white"
                                />

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <FooterComponent />

        </div>
    )
}