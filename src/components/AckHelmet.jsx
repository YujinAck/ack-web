import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://acksolutionsinc.com';
const SITE_NAME = 'ACK Solutions Inc.';

function AckHelmet({
    title,
    description,
    path = '/',
}) {

    const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;

    return (
        <Helmet>
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:type"
                content="website"
            />

            <meta
                property="og:url"
                content={canonicalUrl}
            />

            <meta
                property="og:site_name"
                content={SITE_NAME}
            />

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <link
                rel="canonical"
                href={canonicalUrl}
            />
        </Helmet>
    );
}

export default AckHelmet;