import HeaderComponent from './HeaderComponent.jsx'
import ActionButton from '../components/ActionButton.jsx'
import TileHeader from '../components/TileHeader.jsx'
import FooterComponent from './FooterComponent.jsx'

import AckLogoPng from '../assets/ack-logo.png'

import ShowPic1 from '../assets/portraits/show-pic-1.jpg'
import ShowPic2 from '../assets/portraits/show-pic-2.jpg'
import ShowPic4 from '../assets/portraits/show-pic-4.jpg'
import ShowPic7 from '../assets/portraits/show-pic-7.jpg'

import StreamCash from '../assets/stream_icons/stream_cash.png'
import StreamCredit from '../assets/stream_icons/stream_credit.png'
import StreamIntf from '../assets/stream_icons/stream_interface.png'
import StreamInv from '../assets/stream_icons/stream_investment.png'
import StreamMigr from '../assets/stream_icons/stream_migration.png'
import StreamSecu from '../assets/stream_icons/stream_secu.png'

import MakatiCity2 from '../assets/makati-city-2b.jpg'

import Services1 from '../assets/services/consulting-img-1.jpg'
import Services2 from '../assets/services/training-img-1.jpg'
import Services3 from '../assets/services/discuss-img-1.jpg'
import Services4 from '../assets/services/maintain-img-1.jpg'

import LineEffect1 from '../assets/others/line-effect-1.png'

import Slideshow from '../components/Slideshow.jsx'

import './HomePage.css'


function HomePage() {

    return (
        <div className="ack-home">

            <HeaderComponent />

            <main>

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="ack-hero">

                    <div className="ack-hero-background">
                        <Slideshow />
                    </div>

                    <div className="ack-hero-overlay"></div>

                    <div className="ack-hero-content">

                        <div className="ack-eyebrow">
                            AVALOQ & BANKING TECHNOLOGY
                        </div>

                        <h1>
                            Technology expertise
                            <span>that moves banking forward.</span>
                        </h1>

                        <p>
                            ACK Solutions helps banks and financial institutions
                            deliver, enhance, and operate Avaloq solutions with
                            confidence.
                        </p>

                        <div className="ack-hero-actions">
                            <ActionButton
                                title="Explore our services"
                                type="white"
                                to="/services"
                            />

                            <a
                                className="ack-text-link"
                                href="#projects"
                            >
                                View our experience
                                <span>→</span>
                            </a>
                        </div>

                    </div>

                    <div className="ack-hero-bottom">

                        <div>
                            <strong>01</strong>
                            <span>Expertise</span>
                        </div>

                        <div>
                            <strong>02</strong>
                            <span>Execution</span>
                        </div>

                        <div>
                            <strong>03</strong>
                            <span>Reliability</span>
                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INTRO
                ===================================================== */}

                <section className="ack-intro">

                    <div className="ack-container">

                        <div className="ack-intro-grid">

                            <div className="ack-section-label">
                                <span></span>
                                WHO WE ARE
                            </div>

                            <div className="ack-intro-content">

                                <h2>
                                    From strategy to delivery —
                                    <em>confidence in execution.</em>
                                </h2>

                                <p className="ack-lead">
                                    ACK Solutions provides specialized Avaloq
                                    expertise to help financial institutions
                                    solve complex technology challenges and
                                    deliver meaningful business outcomes.
                                </p>

                                <p>
                                    We reinforce teams with experienced
                                    professionals who understand both the
                                    technology and the demands of modern
                                    banking operations.
                                </p>

                                <div className="ack-stats">

                                    <div>
                                        <strong>AVALOQ</strong>
                                        <span>Specialized expertise</span>
                                    </div>

                                    <div>
                                        <strong>BANKING</strong>
                                        <span>Domain experience</span>
                                    </div>

                                    <div>
                                        <strong>DELIVERY</strong>
                                        <span>Execution focused</span>
                                    </div>

                                </div>

                            </div>

                            <div className="ack-intro-logo">
                                <img
                                    src={AckLogoPng}
                                    alt="ACK Solutions"
                                />
                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    EXPERIENCE
                ===================================================== */}

                <section
                    id="projects"
                    className="ack-projects"
                >

                    <div className="ack-container">

                        <div className="ack-section-heading">

                            <div>
                                <span className="ack-kicker">
                                    EXPERIENCE
                                </span>

                                <h2>
                                    Proven across
                                    <span>regional banking.</span>
                                </h2>
                            </div>

                            <p>
                                Our project experience spans multiple banking
                                markets and a broad range of Avaloq initiatives.
                            </p>

                        </div>


                        <div className="ack-project-grid">

                            <TileHeader
                                title="Indonesian Bank"
                                img="ID"
                                tasks={[
                                    'Implementation',
                                    'Release Upgrade'
                                ]}
                                story="Implemented Secondary Bond functionality by configuring Avaloq components to support end-to-end trade processing and reporting. We also delivered Avaloq release upgrades through structured impact analysis and testing, ensuring a smooth transition while maintaining platform stability."
                                order={1}
                            />

                            <TileHeader
                                title="Singapore Bank"
                                img="SG"
                                tasks={[
                                    'Run the Bank',
                                    'Change the Bank'
                                ]}
                                story="We supported both Run the Bank and Change the Bank initiatives for Singaporean banks by ensuring stable daily Avaloq operations while delivering controlled enhancements aligned with evolving business needs."
                                order={2}
                            />

                            <TileHeader
                                title="Taiwanese Bank"
                                img="TW"
                                tasks={[
                                    'SIT Support',
                                    'UAT Support',
                                    'INTF Enhancement'
                                ]}
                                story="We provided SIT and UAT support for Taiwanese banks, ensuring smooth validation of Avaloq solutions and readiness for production. In parallel, we delivered interface component enhancements that improved system integration, data accuracy, and operational efficiency."
                                order={3}
                            />

                            <TileHeader
                                title="Philippine Bank"
                                img="PH"
                                tasks={[
                                    'UAT Support',
                                    'PGL Support',
                                    'Web Services'
                                ]}
                                story="We supported UAT and PGL activities for Philippine banks, ensuring solutions were fully validated and ready for production use. In addition, we implemented Avaloq web services to enhance system connectivity and support reliable end-to-end business processes."
                                order={4}
                            />

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    WHY ACK
                ===================================================== */}

                <section className="ack-why">

                    <div
                        className="ack-why-image"
                        style={{
                            backgroundImage: `url(${MakatiCity2})`
                        }}
                    ></div>

                    <div className="ack-why-panel">

                        <span className="ack-kicker">
                            WHY ACK SOLUTIONS
                        </span>

                        <h2>
                            Experience that
                            <span>strengthens your team.</span>
                        </h2>

                        <p className="ack-why-intro">
                            ACK Solutions empowers organizations to move faster
                            by combining experienced Avaloq professionals,
                            practical delivery experience, and an
                            execution-focused approach.
                        </p>

                        <div className="ack-pillars">

                            <div className="ack-pillar">
                                <div className="ack-pillar-letter">A</div>
                                <div>
                                    <h3>Accelerate</h3>
                                    <p>
                                        Bring seasoned Avaloq expertise into
                                        your team and accelerate delivery.
                                    </p>
                                </div>
                            </div>

                            <div className="ack-pillar">
                                <div className="ack-pillar-letter">C</div>
                                <div>
                                    <h3>Complete</h3>
                                    <p>
                                        Improve delivery quality through
                                        efficient and practical solutioning.
                                    </p>
                                </div>
                            </div>

                            <div className="ack-pillar">
                                <div className="ack-pillar-letter">K</div>
                                <div>
                                    <h3>Kick Start</h3>
                                    <p>
                                        Start projects with professionals who
                                        can guide, mentor, and execute.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SERVICES
                ===================================================== */}

                <section className="ack-services">

                    <div className="ack-container">

                        <div className="ack-section-heading">

                            <div>
                                <span className="ack-kicker">
                                    WHAT WE DO
                                </span>

                                <h2>
                                    Avaloq expertise
                                    <span>when it matters.</span>
                                </h2>
                            </div>

                            <p>
                                From implementation and transformation to
                                day-to-day operations, we support the full
                                lifecycle of Avaloq environments.
                            </p>

                        </div>


                        <div className="ack-service-grid">

                            <ServiceCard
                                number="01"
                                title="Consulting"
                                image={Services1}
                                description="We analyze business requirements and design effective, technology-driven solutions."
                            />

                            <ServiceCard
                                number="02"
                                title="Training"
                                image={Services2}
                                description="We provide Avaloq training that develops practical platform knowledge and best practices."
                            />

                            <ServiceCard
                                number="03"
                                title="Customization"
                                image={Services3}
                                description="We support Change the Bank through controlled Avaloq customizations and reliable project delivery."
                            />

                            <ServiceCard
                                number="04"
                                title="Maintenance"
                                image={Services4}
                                description="We support Run the Bank operations through reliable Avaloq maintenance and ongoing support."
                            />

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    AVALOQ STREAMS
                ===================================================== */}

                <section className="ack-streams">

                    <div className="ack-streams-header">

                        <div className="ack-container">

                            <span className="ack-kicker">
                                AVALOQ CAPABILITIES
                            </span>

                            <h2>
                                Supporting the streams
                                <span>behind the bank.</span>
                            </h2>

                        </div>

                    </div>


                    <div className="ack-container">

                        <div className="ack-stream-grid">

                            <StreamCard
                                image={StreamInv}
                                title="Investment Related Transactions"
                            />

                            <StreamCard
                                image={StreamCash}
                                title="Cash Related Transactions"
                            />

                            <StreamCard
                                image={StreamCredit}
                                title="Credit"
                            />

                            <StreamCard
                                image={StreamIntf}
                                title="Interfaces"
                            />

                            <StreamCard
                                image={StreamSecu}
                                title="Security"
                            />

                            <StreamCard
                                image={StreamMigr}
                                title="Migration"
                            />

                        </div>

                        <div className="ack-stream-description">
                            We support a broad range of Avaloq streams across
                            front-to-back processes, helping banks maintain
                            stable transaction processing, secure integration,
                            reliable data movement, and operational resilience.
                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CAREERS
                ===================================================== */}

                <section className="ack-careers">

                    <div className="ack-careers-card">

                        <div className="ack-careers-pattern"></div>

                        <div className="ack-careers-content">

                            <span className="ack-kicker">
                                JOIN ACK SOLUTIONS
                            </span>

                            <h2>
                                Build what's next
                                <span>in banking technology.</span>
                            </h2>

                            <p>
                                Join a team where your expertise can make an
                                impact across real-world banking technology
                                projects.
                            </p>

                            <ActionButton
                                title="Explore careers"
                                type="white"
                                to="/careers"
                            />

                        </div>

                    </div>

                </section>

            </main>

            <FooterComponent />

        </div>
    )
}


/* =====================================================
   SERVICE CARD
===================================================== */

function ServiceCard({
    number,
    title,
    image,
    description
}) {

    return (
        <article className="ack-service-card">

            <img
                src={image}
                alt={title}
            />

            <div className="ack-service-overlay"></div>

            <div className="ack-service-number">
                {number}
            </div>

            <div className="ack-service-content">

                <h3>{title}</h3>

                <p>{description}</p>

                <span className="ack-service-arrow">
                    →
                </span>

            </div>

        </article>
    )
}


/* =====================================================
   STREAM CARD
===================================================== */

function StreamCard({
    image,
    title
}) {

    return (
        <article className="ack-stream-card">

            <div className="ack-stream-icon">
                <img
                    src={image}
                    alt=""
                />
            </div>

            <div className="ack-stream-title">
                {title}
            </div>

        </article>
    )
}


export default HomePage