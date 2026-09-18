import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import ActionButton from '../components/ActionButton.jsx'

import ManilaBldg1 from '../assets/manila-bldg-1.png'
import FadeRed4 from '../assets/fades/fade-red-4.png'
import RedLinesBG from '../assets/backgrounds/red-lines-bg.jpg'
import LineEffect1 from '../assets/others/line-effect-2.png'

import TileHeader from '../components/TileHeader.jsx'

import './ClientsPage.css'
import AckHelmet from '../components/AckHelmet.jsx'


const projects = [
    {
        title: 'Indonesian Bank',
        img: 'ID',
        tasks: [
            'Implementation',
            'Release Upgrade'
        ],
        story:
            'Implemented Secondary Bond functionality by configuring Avaloq components to support end-to-end trade processing and reporting. We also delivered Avaloq release upgrades through structured impact analysis and testing, ensuring a smooth transition while maintaining platform stability.',
        order: 1
    },
    {
        title: 'Singapore Bank',
        img: 'SG',
        tasks: [
            'Run the Bank',
            'Change the Bank'
        ],
        story:
            'We supported both Run the Bank and Change the Bank initiatives for Singaporean banks by ensuring stable daily Avaloq operations while delivering controlled enhancements aligned with evolving business needs. This approach enabled continuous improvement and regulatory readiness.',
        order: 2
    },
    {
        title: 'Taiwanese Bank',
        img: 'TW',
        tasks: [
            'SIT Support',
            'UAT Support',
            'INTF Enhancement'
        ],
        story:
            'We provided SIT and UAT support for Taiwanese banks, ensuring smooth validation of Avaloq solutions and readiness for production. In parallel, we delivered interface component enhancements that improved system integration, data accuracy, and overall operational efficiency.',
        order: 3
    },
    {
        title: 'Philippine Bank',
        img: 'PH',
        tasks: [
            'UAT Support',
            'PGL Support',
            'Web Services'
        ],
        story:
            'We supported UAT and PGL activities for Philippine banks, ensuring solutions were fully validated and ready for production use. In addition, we implemented Avaloq web services to enhance system connectivity, streamline integrations, and support reliable end-to-end business processes.',
        order: 4
    }
]


export default function ClientsPage() {

    return (
        <div className="clients-page">
        <AckHelmet
            title="Clients | Banking Projects Across Asia | ACK Solutions"
            description="Explore ACK Solutions' Avaloq delivery experience across Indonesia, Singapore, Taiwan, and the Philippines, covering implementation, upgrades, testing, integration, web services, and banking operations."
            path="/clients"
        />
            <HeaderComponent />

            <main>

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="clients-hero">

                    <div
                        className="clients-hero-background"
                        style={{
                            backgroundImage: `
                                linear-gradient(
                                    90deg,
                                    rgba(255,255,255,0.97) 0%,
                                    rgba(255,255,255,0.91) 42%,
                                    rgba(255,255,255,0.45) 75%,
                                    rgba(255,255,255,0.15) 100%
                                ),
                                url(${RedLinesBG})
                            `
                        }}
                    />

                    <div className="clients-container">

                        <div className="clients-hero-content">

                            <div className="clients-eyebrow">
                                CLIENTS & EXPERIENCE
                            </div>

                            <h1>
                                Trusted where
                                <span>banking gets complex.</span>
                            </h1>

                            <p>
                                Our delivery experience spans banking
                                organizations across Asia, supporting
                                complex Avaloq initiatives from
                                implementation and testing to enhancement,
                                integration, and ongoing operations.
                            </p>

                            <div className="clients-hero-actions">

                                <a
                                    href="#projects"
                                    className="clients-scroll-link"
                                >
                                    Explore our experience
                                    <span>↓</span>
                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="clients-hero-index">

                        <strong>01</strong>

                        <span>
                            Client experience
                        </span>

                    </div>

                </section>


                {/* =====================================================
                    INTRO / FOOTPRINT
                ===================================================== */}

                <section className="clients-intro">

                    <div className="clients-container">

                        <div className="clients-intro-grid">

                            <div className="clients-section-label">
                                OUR EXPERIENCE
                            </div>

                            <div>

                                <div className="clients-kicker">
                                    ACROSS ASIA
                                </div>

                                <h2>
                                    Experience built through
                                    <span>real delivery.</span>
                                </h2>

                                <div className="clients-intro-copy">

                                    <p className="clients-lead">
                                        ACK Solutions has supported
                                        banking and financial institutions
                                        across multiple markets, working
                                        alongside teams to deliver and
                                        maintain critical Avaloq solutions.
                                    </p>

                                    <p>
                                        From project implementation and
                                        release upgrades to SIT, UAT,
                                        interfaces, web services, and
                                        Run-the-Bank support, our experience
                                        reflects the practical demands of
                                        banking technology delivery.
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div className="clients-markets">

                            <div className="clients-market">
                                <span className="clients-market-code">
                                    ID
                                </span>

                                <div>
                                    <strong>Indonesia</strong>
                                    <span>Implementation & upgrades</span>
                                </div>
                            </div>

                            <div className="clients-market">
                                <span className="clients-market-code">
                                    SG
                                </span>

                                <div>
                                    <strong>Singapore</strong>
                                    <span>Run & Change the Bank</span>
                                </div>
                            </div>

                            <div className="clients-market">
                                <span className="clients-market-code">
                                    TW
                                </span>

                                <div>
                                    <strong>Taiwan</strong>
                                    <span>Testing & integration</span>
                                </div>
                            </div>

                            <div className="clients-market">
                                <span className="clients-market-code">
                                    PH
                                </span>

                                <div>
                                    <strong>Philippines</strong>
                                    <span>UAT & web services</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    PROVEN TRACK RECORD
                ===================================================== */}

                <section className="clients-track-record">

                    <div className="clients-track-image">

                        <img
                            src={FadeRed4}
                            alt=""
                            className="clients-track-fade"
                        />

                        <img
                            src={ManilaBldg1}
                            alt="Manila business district"
                            className="clients-track-building"
                        />

                    </div>


                    <div className="clients-track-content">

                        <div className="clients-kicker light">
                            PROVEN DELIVERY
                        </div>

                        <h2>
                            A track record built
                            <span>on delivery.</span>
                        </h2>

                        <p className="clients-track-lead">
                            Our proven track record reflects years of
                            successful delivery across complex banking
                            and financial environments.
                        </p>

                        <p>
                            We have consistently supported institutions
                            in implementing, enhancing, and stabilizing
                            their Avaloq platforms — meeting tight
                            timelines, navigating regulatory requirements,
                            and ensuring seamless integrations.
                        </p>

                        <div className="clients-track-line" />

                        <span className="clients-track-caption">
                            AVALOQ · BANKING · DELIVERY
                        </span>

                    </div>

                </section>


                {/* =====================================================
                    PROJECTS
                ===================================================== */}

                <section
                    id="projects"
                    className="clients-projects"
                >

                    <div className="clients-container">

                        <div className="clients-section-heading">

                            <div>

                                <div className="clients-kicker">
                                    PROJECT EXPERIENCE
                                </div>

                                <h2>
                                    What we've helped
                                    <span>our clients deliver.</span>
                                </h2>

                            </div>

                            <p>
                                Selected examples of initiatives where
                                our Avaloq expertise supported banking
                                teams across the region.
                            </p>

                        </div>


                        <div className="clients-project-grid">

                            {projects.map(project => (
                                <TileHeader
                                    key={project.order}
                                    title={project.title}
                                    img={project.img}
                                    tasks={project.tasks}
                                    story={project.story}
                                    order={project.order}
                                />
                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CTA
                ===================================================== */}

                <section className="clients-cta">

                    <div className="clients-container">

                        <div className="clients-cta-card">

                            <img
                                src={LineEffect1}
                                alt=""
                                className="clients-cta-effect"
                            />

                            <div className="clients-cta-content">

                                <div className="clients-kicker light">
                                    WORK WITH ACK
                                </div>

                                <h2>
                                    Have a banking initiative
                                    <span>you need to move forward?</span>
                                </h2>

                                <p>
                                    Let's discuss how our Avaloq
                                    experience can support your next
                                    implementation, enhancement, or
                                    delivery initiative.
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