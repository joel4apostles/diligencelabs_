export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Diligence Labs",
    "description": "Expert strategic advisory for blockchain projects. Technical consultation, tokenomics design, and implementation guidance for Web3 teams.",
    "url": "https://diligencelabs.xyz",
    "logo": "https://diligencelabs.xyz/favicon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@diligencelabs.xyz",
      "contactType": "business"
    },
    "sameAs": [
      "https://www.linkedin.com/company/diligence-labs/about/",
      "https://x.com/diligencelabs_",
      "https://t.me/+4gUUpwxIgv5iNmJk"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global",
      "description": "Remote-first blockchain advisory services"
    }
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Blockchain Advisory Services",
    "description": "Strategic blockchain advisory, tokenomics design, technical architecture consulting, and Web3 implementation guidance",
    "provider": {
      "@type": "Organization",
      "name": "Diligence Labs"
    },
    "serviceType": [
      "Blockchain Consulting",
      "Tokenomics Design",
      "Smart Contract Architecture",
      "Web3 Strategy",
      "DeFi Consulting"
    ],
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://diligencelabs.xyz/#booking",
      "name": "Online Consultation"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://diligencelabs.xyz"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://diligencelabs.xyz/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Book Consultation",
        "item": "https://diligencelabs.xyz/#booking"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData, null, 2)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData, null, 2)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData, null, 2)
        }}
      />
    </>
  )
}