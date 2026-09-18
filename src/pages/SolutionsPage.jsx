import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import ActionButton from '../components/ActionButton.jsx'

import ManilaBldg1 from '../assets/manila-bldg-1.png'
import AckLogoWhite from '../assets/ack-logo-white.png'

import Services1 from '../assets/services/consulting-img-1.jpg'
import Services2 from '../assets/services/training-img-1.jpg'
import Services3 from '../assets/services/discuss-img-1.jpg'
import Services4 from '../assets/services/maintain-img-1.jpg'

import LineEffect3 from '../assets/others/line-effect-3.png'

import './SolutionsPage.css'
import AckHelmet from '../components/AckHelmet.jsx'


const services = [
    {
        number: '01',
        title: 'Consulting',
        image: Services1,
        description:
            'We analyze and translate business requirements into effective, technology-driven solutions.'
    },
    {
        number: '02',
        title: 'Training',
        image: Services2,
        description:
            'We provide in-house Avaloq training to build practical platform knowledge and best practices.'
    },
    {
        number: '03',
        title: 'Customization',
        image: Services3,
        description:
            'We support Change the Bank through controlled Avaloq customizations and reliable project delivery.'
    },
    {
        number: '04',
        title: 'Maintenance',
        image: Services4,
        description:
            'We support Run the Bank operations through reliable Avaloq maintenance and ongoing end-user support.'
    }
]


const approach = [
    {
        number: '01',
        letter: 'A',
        title: 'Accelerate',
        description:
            'Enable your team by bringing in expertise provided by seasoned Avaloq professionals.'
    },
    {
        number: '02',
        letter: 'C',
        title: 'Complete',
        description:
            'Accomplish more by ensuring deliverables are delivered with quality through efficient solutioning.'
    },
    {
        number: '03',
        letter: 'K',
        title: 'Kick Start',
        description:
            'Kick start your projects with professionals who can mentor, guide, and contribute to delivery.'
    }
]


export default function SolutionsPage() {

    return (
        <div className="solutions-page">
            <AckHelmet
                title="Solutions | Consulting, Training, Customization & Maintenance | ACK Solutions"
                description="ACK Solutions provides Avaloq consulting, training, customization, maintenance, and ongoing support for banks and financial institutions."
                path="/solutions"
            />
            <HeaderComponent />

            <main>

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="solutions-hero">

                    <div
                        className="solutions-hero-image"
                        style={{
                            backgroundImage: `url(${ManilaBldg1})`
                        }}
                    />

                    <div className="solutions-hero-overlay" />

                    <div className="solutions-container">

                        <div className="solutions-hero-content">

                            <div className="solutions-eyebrow">
                                AVALOQ & BANKING TECHNOLOGY
                            </div>

                            <h1>
                                From strategy
                                <span>to delivery.</span>
                            </h1>

                            <p>
                                ACK Solutions empowers organizations to move
                                faster and deliver with confidence by
                                reinforcing teams with highly experienced
                                Avaloq specialists.
                            </p>

                            <div className="solutions-hero-actions">

                                <ActionButton
                                    title="Talk to us"
                                    type="white"
                                />

                                <a
                                    href="#services"
                                    className="solutions-text-link"
                                >
                                    Explore our solutions
                                    <span>↓</span>
                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="solutions-hero-index">
                        <strong>01</strong>
                        <span>Solutions</span>
                    </div>

                </section>


                {/* =====================================================
                    INTRO
                ===================================================== */}

                <section className="solutions-intro">

                    <div className="solutions-container">

                        <div className="solutions-intro-grid">

                            <div className="solutions-section-label">
                                WHY ACK
                            </div>

                            <div>

                                <div className="solutions-kicker">
                                    OUR APPROACH
                                </div>

                                <h2>
                                    Expertise that helps
                                    <span>move banking forward.</span>
                                </h2>

                                <div className="solutions-intro-copy">

                                    <p className="solutions-lead">
                                        Choosing ACK Solutions means gaining
                                        a reliable partner committed to
                                        performance, quality, and sustainable
                                        growth.
                                    </p>

                                    <p>
                                        We bring experienced Avaloq
                                        professionals into the delivery
                                        process to help organizations solve
                                        complex problems, strengthen their
                                        teams, and execute with confidence.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    ACK APPROACH
                ===================================================== */}

                <section className="solutions-approach">

                    <div className="solutions-container">

                        <div className="solutions-section-heading dark">

                            <div>

                                <div className="solutions-kicker light">
                                    THE ACK APPROACH
                                </div>

                                <h2>
                                    Three ways we
                                    <span>strengthen delivery.</span>
                                </h2>

                            </div>

                            <p>
                                Our approach is designed to bring the right
                                expertise into the right stage of your
                                initiative.
                            </p>

                        </div>


                        <div className="solutions-approach-grid">

                            {approach.map(item => (
                                <article
                                    key={item.number}
                                    className="solutions-approach-card"
                                >

                                    <div className="solutions-card-number">
                                        {item.number}
                                    </div>

                                    <div className="solutions-card-letter">
                                        {item.letter}
                                    </div>

                                    <div className="solutions-approach-content">

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.description}
                                        </p>

                                    </div>

                                    <div className="solutions-card-arrow">
                                        →
                                    </div>

                                </article>
                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SERVICES
                ===================================================== */}

                <section
                    id="services"
                    className="solutions-services"
                >

                    <div className="solutions-container">

                        <div className="solutions-section-heading">

                            <div>

                                <div className="solutions-kicker">
                                    OUR SOLUTIONS
                                </div>

                                <h2>
                                    Support across the
                                    <span>Avaloq lifecycle.</span>
                                </h2>

                            </div>

                            <p>
                                We deliver comprehensive services covering
                                consulting, training, customization, and
                                ongoing maintenance.
                            </p>

                        </div>


                        <div className="solutions-services-grid">

                            {services.map(service => (
                                <article
                                    key={service.number}
                                    className="solutions-service-card"
                                >

                                    <img
                                        src={service.image}
                                        alt={service.title}
                                    />

                                    <div className="solutions-service-overlay" />

                                    <div className="solutions-service-number">
                                        {service.number}
                                    </div>

                                    <div className="solutions-service-content">

                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p>
                                            {service.description}
                                        </p>

                                        <span className="solutions-service-link">
                                            Learn more →
                                        </span>

                                    </div>

                                </article>
                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    DELIVERY EXPERIENCE
                ===================================================== */}

                <section className="solutions-track-record">

                    <div className="solutions-track-record-top">

                        <div className="solutions-container">

                            <div className="solutions-kicker light">
                                DELIVERY EXPERIENCE
                            </div>

                            <h2>
                                Proven experience in
                                <span>complex banking initiatives.</span>
                            </h2>

                        </div>

                    </div>


                    <div className="solutions-container">

                        <div className="solutions-track-record-body">

                            <div className="solutions-track-record-copy">

                                <p className="solutions-track-lead">
                                    By combining deep industry expertise
                                    with a collaborative delivery approach,
                                    we work with banking organizations
                                    across the region to strengthen
                                    operations, improve efficiency, and
                                    support sustainable growth.
                                </p>

                                <p>
                                    Our experience spans the practical
                                    realities of delivering and supporting
                                    Avaloq solutions — from implementation
                                    and customization to maintenance,
                                    integration, and end-user support.
                                </p>

                            </div>


                            <div className="solutions-track-record-mark">

                                <img
                                    src={AckLogoWhite}
                                    alt="ACK Solutions"
                                />

                            </div>

                        </div>


                        <div className="solutions-capabilities">

                            <div>
                                <strong>AVALOQ</strong>
                                <span>Platform expertise</span>
                            </div>

                            <div>
                                <strong>BANKING</strong>
                                <span>Industry experience</span>
                            </div>

                            <div>
                                <strong>DELIVERY</strong>
                                <span>Execution focused</span>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CTA
                ===================================================== */}

                <section className="solutions-cta">

                    <div className="solutions-container">

                        <div className="solutions-cta-card">

                            <img
                                src={LineEffect3}
                                alt=""
                                className="solutions-cta-effect"
                            />

                            <div className="solutions-cta-content">

                                <div className="solutions-kicker light">
                                    PARTNER WITH ACK
                                </div>

                                <h2>
                                    Let's move your
                                    <span>next initiative forward.</span>
                                </h2>

                                <p>
                                    Whether you need additional Avaloq
                                    expertise, project support, or ongoing
                                    operational assistance, we're ready to
                                    discuss your requirements.
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