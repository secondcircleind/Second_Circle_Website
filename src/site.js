export const organisation = {
  name: 'Second Circle India',
  legalName: 'Second Circle Project Foundation',
  type: 'Registered Section 8 company',
  cin: 'U88900DL2025NPL449784',
  address: 'Flat No. 230, Block A-4 DDA Flat, Paschim Vihar, New Delhi-110063, India',
  cityLine: 'Paschim Vihar, New Delhi, India',
  phone: '011-43047136',
  mobile: '+91 8527274277',
  mobileHref: 'tel:+918527274277',
  phoneHref: 'tel:01143047136',
  email: 'info@secondcircleindia.org',
};

export const contactAddressLines = [
  'Flat No. 230, Block A-4 DDA Flat',
  'Paschim Vihar, New Delhi-110063, India',
];

export const contactPurposes = [
  {
    label: 'Partnerships',
    note: 'For conversations about working with the organisation. This page does not name partners.',
    subject: 'Partnership enquiry',
  },
  {
    label: 'Research and learning',
    note: 'For research or learning conversations. This page does not publish findings or figures.',
    subject: 'Research enquiry',
  },
  {
    label: 'Programme conversations',
    note: 'For conversations about programme work. Programme detail on this site remains pending approval.',
    subject: 'Programme enquiry',
  },
  {
    label: 'General enquiries',
    note: 'For other questions that do not fit the categories above.',
    subject: 'General enquiry',
  },
];

export function contactMailto(subject) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${organisation.email}${query}`;
}

export const defaultMeta = {
  title: 'Second Circle India | Health equity with dignity',
  description:
    'Second Circle India works towards a more equitable health system where every person can access care, live with dignity and participate fully in their community.',
};

export const programs = [
  {
    number: '01',
    slug: 'community-engagement',
    title: 'Community engagement',
    short: 'Listen first.',
    description: 'We listen to lived experience and build solutions with communities.',
    icon: 'HeartHandshake',
    tone: 'yellow',
    image: '/media/second-circle-community.jpg',
    imageAlt: 'People talking together in a village setting.',
    imageWidth: 929,
    imageHeight: 619,
    detailStatus: 'Approved programme scope published. Named locations, partners, case studies and measured outcomes remain pending approval.',
  },
  {
    number: '02',
    slug: 'access-and-support',
    title: 'Access and support',
    short: 'Make care reachable.',
    description: 'We connect people and communities with information, support and pathways to care.',
    icon: 'HandHeart',
    tone: 'olive',
    image: '/media/second-circle-support.jpg',
    imageAlt: 'Two women talking outdoors in a calm garden setting.',
    imageWidth: 1600,
    imageHeight: 1067,
    detailStatus: 'Content pending approval',
  },
  {
    number: '03',
    slug: 'research-and-learning',
    title: 'Research and learning',
    short: 'Learn from reality.',
    description: 'We generate and use evidence to understand inequity and improve support.',
    icon: 'BookOpen',
    tone: 'paper',
    image: '/media/second-circle-research.jpg',
    imageAlt: 'A group of people studying documents together.',
    imageWidth: 658,
    imageHeight: 987,
    detailStatus: 'Approved programme scope published. Named locations, partners, case studies and measured outcomes remain pending approval.',
  },
  {
    number: '04',
    slug: 'advocacy-and-systems-change',
    title: 'Advocacy and systems change',
    short: 'Change what shapes care.',
    description: 'We work with communities and partners to advance inclusive policies and responsive healthcare.',
    icon: 'Scale',
    tone: 'charcoal',
    image: '/media/second-circle-advocacy.jpg',
    imageAlt: 'People seated together in a meeting.',
    imageWidth: 929,
    imageHeight: 619,
    detailStatus: 'Approved programme scope published. Named locations, partners, case studies and measured outcomes remain pending approval.',
  },
];

const programDetailShared = {
  communitiesPending:
    'Named communities and regions will be added only after approval. No geography is published here yet.',
};

export const programDetailBySlug = {
  'community-engagement': {
    sections: [
      {
        id: 'overview',
        title: 'Programme overview',
        usesApprovedSummary: true,
        paragraphs: [
          'Our community engagement work is designed to create meaningful spaces for connection, learning, support, and collective well-being. We work towards healthier, more connected, and empowered communities through activities shaped by community needs and lived experience.',
        ],
      },
      {
        id: 'who',
        title: 'Who this work may be for',
        intro: 'This work is intended to support people and groups such as:',
        list: [
          'Communities seeking stronger connection, support, and access to health information',
          'People who may benefit from peer support and community spaces',
          'Marginalised communities',
          'People engaging with mental health and psychosocial well-being initiatives',
        ],
        note: 'This describes who the work may be for. It is not a list of current beneficiaries.',
      },
      {
        id: 'what',
        title: 'What this work may include',
        intro: 'Areas this work may include:',
        list: [
          'Community initiatives and gatherings',
          'Peer support',
          'Mental health and psychosocial well-being',
          'Community spaces and programmes',
          'Health literacy',
          'Support for marginalised communities',
          'Workshops, circles, discussions, networking, and other community activities',
        ],
        note: 'This is not a claim that every activity listed is currently active.',
      },
      {
        id: 'where',
        title: 'Where the work takes place',
        paragraphs: [
          'This work is community-facing. Specific locations and regions are still to be confirmed and will be published only after approval.',
        ],
      },
      {
        id: 'communities',
        title: 'Communities and regions',
        pending: programDetailShared.communitiesPending,
      },
      {
        id: 'partners',
        title: 'Partners and collaborators',
        paragraphs: [
          'Named partners and partnership details are still to be confirmed. No organisations are listed here until they are approved for publication.',
        ],
      },
      {
        id: 'outcomes',
        title: 'Outcomes and impact',
        intro: 'Intended directions for this work include:',
        list: [
          'Stronger community connection',
          'Greater health literacy',
          'More supportive and empowered communities',
          'Better recognition of lived experience',
        ],
        note: 'These are intended outcomes, not measured results or completed impact claims.',
      },
      {
        id: 'stories',
        title: 'Stories and learning',
        paragraphs: [
          'Stories, research notes, and learning from this work will be added after approval. No case studies are published on this page yet.',
        ],
        links: [{ href: '/stories', label: 'Stories & insights' }],
      },
      {
        id: 'resources',
        title: 'Related resources',
        paragraphs: [
          'Public resources related to this work will be listed here after approval. There are no programme downloads on this page yet.',
        ],
        links: [{ href: '/resources', label: 'Resources index' }],
      },
      {
        id: 'connect',
        title: 'How to connect or support this work',
        paragraphs: [
          'Contact us about future programme conversations. This page does not open a referral form or guarantee a programme pathway.',
        ],
        links: [{ href: '/contact', label: 'Contact us about future programme conversations' }],
      },
    ],
  },
  'advocacy-and-systems-change': {
    sections: [
      {
        id: 'overview',
        title: 'Programme overview',
        usesApprovedSummary: true,
        paragraphs: [
          'We work to address the legal, policy, and institutional barriers that affect people’s access to equitable healthcare and dignity. Our advocacy is grounded in rights, evidence, and the experiences of affected communities.',
        ],
      },
      {
        id: 'who',
        title: 'Who this work may be for',
        intro: 'This work is intended to support people and groups such as:',
        list: [
          'People affected by discrimination in healthcare and the insurance sector',
          'Communities affected by HIV-related rights issues',
          'People affected by mental health or disability rights barriers',
          'Communities and stakeholders seeking more equitable health policy and systems',
        ],
        note: 'This describes who the work may be for. It is not a list of current clients or beneficiaries.',
      },
      {
        id: 'what',
        title: 'What this work may include',
        intro: 'Areas this work may include:',
        list: [
          'Strategic litigation',
          'Legal and policy advocacy',
          'Discrimination in the healthcare and insurance sector',
          'HIV rights',
          'Mental health rights',
          'Disability rights',
          'Health policy',
          'Government accountability',
          'Regulatory reforms',
          'Legal research',
        ],
        note: 'This describes possible areas of work. It does not claim that Second Circle currently provides legal representation, accepts legal cases, or delivers every listed activity.',
      },
      {
        id: 'where',
        title: 'Where the work takes place',
        paragraphs: [
          'This work relates to healthcare, insurance, policy, legal, regulatory, and institutional systems. Specific geographies are still to be confirmed and will be published only after approval.',
        ],
      },
      {
        id: 'communities',
        title: 'Communities and regions',
        pending: programDetailShared.communitiesPending,
      },
      {
        id: 'partners',
        title: 'Partners and collaborators',
        paragraphs: [
          'Named partners remain pending approval. No partner organisations or centres are named on this page.',
        ],
      },
      {
        id: 'outcomes',
        title: 'Outcomes and impact',
        intro: 'Intended contributions of this work include:',
        list: [
          'Greater attention to rights and equity in healthcare',
          'Stronger accountability in health systems',
          'Evidence-informed policy and regulatory discussion',
          'Better recognition of discrimination and rights barriers',
        ],
        note: 'These are intended contributions, not measured results or completed case outcomes.',
      },
      {
        id: 'stories',
        title: 'Stories and learning',
        paragraphs: [
          'Legal research notes, policy briefs, publications, and approved case studies may be added later. No case studies or downloads are published on this page yet.',
        ],
        links: [{ href: '/stories', label: 'Stories & insights' }],
      },
      {
        id: 'resources',
        title: 'Related resources',
        paragraphs: [
          'Policy briefs, legal research, and other public materials may be listed here after approval. There are no programme downloads on this page yet.',
        ],
        links: [{ href: '/resources', label: 'Resources index' }],
      },
      {
        id: 'connect',
        title: 'How to connect or support this work',
        paragraphs: [
          'Contact us about future advocacy or systems conversations. This page does not invite legal cases, offer representation, or open a case intake process.',
        ],
        links: [{ href: '/contact', label: 'Contact us about future advocacy conversations' }],
      },
    ],
  },
  'research-and-learning': {
    sections: [
      {
        id: 'overview',
        title: 'Programme overview',
        usesApprovedSummary: true,
        paragraphs: [
          'Our research and learning work supports better understanding, stronger practice, and more informed action. We bring together research, lived experience, knowledge-sharing, and capacity building to contribute to more equitable health systems and communities.',
        ],
      },
      {
        id: 'who',
        title: 'Who this work may be for',
        intro: 'This work is intended to support people and groups such as:',
        list: [
          'Communities whose lived experiences should inform research and policy',
          'Researchers and academic collaborators',
          'Practitioners and organisations working on health equity',
          'Students, fellows, and emerging professionals',
        ],
        note: 'This describes who the work may be for. It is not a list of current programme participants.',
      },
      {
        id: 'what',
        title: 'What this work may include',
        intro: 'Areas this work may include:',
        list: [
          'Research projects',
          'Policy briefs',
          'Publications',
          'Academic collaboration',
          'Community-based research',
          'Documentation of lived experiences',
          'Training and capacity building',
          'Fellowships and internships',
          'Seminars and public forums',
          'Knowledge dissemination',
        ],
        note: 'This is not a claim that every activity listed is currently active.',
      },
      {
        id: 'where',
        title: 'Where the work takes place',
        paragraphs: [
          'This work may take place through community-based research, academic collaboration, training, seminars, and public forums. Specific locations are still to be confirmed and will be published only after approval.',
        ],
      },
      {
        id: 'communities',
        title: 'Communities and regions',
        pending: programDetailShared.communitiesPending,
      },
      {
        id: 'partners',
        title: 'Partners and collaborators',
        intro: 'Future collaboration may involve broad categories such as:',
        list: [
          'Academic collaborators',
          'Community organisations',
          'Practitioners and subject-matter professionals',
        ],
        note: 'No partner organisation is named here. Specific partners remain pending approval.',
      },
      {
        id: 'outcomes',
        title: 'Outcomes and impact',
        intro: 'Intended contributions of this work include:',
        list: [
          'Better documentation of lived experience',
          'Stronger evidence for health equity work',
          'Increased knowledge sharing and capacity',
          'More informed policy and practice',
        ],
        note: 'These are intended contributions, not measured research results.',
      },
      {
        id: 'stories',
        title: 'Stories and learning',
        paragraphs: [
          'Policy briefs, publications, research notes, and learning resources may be added after approval. No research products are published on this page yet.',
        ],
        links: [{ href: '/stories', label: 'Stories & insights' }],
      },
      {
        id: 'resources',
        title: 'Related resources',
        paragraphs: [
          'Policy briefs, publications, research notes, and learning resources may be listed here after approval. There are no programme downloads on this page yet.',
        ],
        links: [{ href: '/resources', label: 'Resources index' }],
      },
      {
        id: 'connect',
        title: 'How to connect or support this work',
        paragraphs: [
          'Contact us about future research, learning, or collaboration conversations. This page does not open an application form for fellowships, internships, or research partnerships.',
        ],
        links: [{ href: '/contact', label: 'Contact us about future research and learning conversations' }],
      },
    ],
  },
  'access-and-support': {
    sections: [
      {
        id: 'overview',
        title: 'Programme overview',
        usesApprovedSummary: true,
        pending:
          'A fuller overview of how Access and Support is organised will be added after founder approval. The short description above is the approved summary for now.',
      },
      {
        id: 'who',
        title: 'Who this work is for',
        pending:
          'Approved detail is still needed on who this work is for, including any communities or groups it is intended to support.',
      },
      {
        id: 'what',
        title: 'What the programme does',
        pending:
          'Approved detail is still needed on what support may include. No services, pathways, or current delivery claims are published here yet.',
      },
      {
        id: 'where',
        title: 'Where the work takes place',
        pending:
          'Approved detail is still needed on where this work may be available. No sites or regions are named until they are confirmed.',
      },
      {
        id: 'communities',
        title: 'Communities and regions',
        pending: programDetailShared.communitiesPending,
      },
      {
        id: 'partners',
        title: 'Partners and collaborators',
        pending:
          'Approved detail is still needed on partners and collaborators. No organisations are listed here yet.',
      },
      {
        id: 'outcomes',
        title: 'Outcomes and impact',
        pending:
          'Approved detail is still needed on intended or verified outcomes. This section contains no numbers and no results claims.',
      },
      {
        id: 'stories',
        title: 'Stories and learning',
        pending:
          'Approved stories, learning notes, and evidence from this programme will be added here. No case studies are published yet.',
        links: [{ href: '/stories', label: 'Stories & insights' }],
      },
      {
        id: 'resources',
        title: 'Related resources',
        pending:
          'Approved detail is still needed on any public resources for this vertical. There are no programme downloads on this page yet.',
        links: [{ href: '/resources', label: 'Resources index' }],
      },
      {
        id: 'connect',
        title: 'How to connect or support this work',
        pending:
          'Approved detail is still needed on the contact pathway and any referral or access route. The link below is for general enquiries only and does not open a support intake process.',
        links: [{ href: '/contact', label: 'Contact the team' }],
      },
    ],
  },
};

export function getProgramDetailSections(program) {
  return programDetailBySlug[program.slug]?.sections || programDetailBySlug['access-and-support'].sections;
}

export const images = {
  logo: {
    src: '/media/assets-logo-second-circle-india.png',
    alt: 'Second Circle India',
    width: 2000,
    height: 2000,
  },
  hero: {
    src: '/media/second-circle-hero.jpg',
    alt: 'A community gathering outdoors under a tree.',
    width: 1800,
    height: 1200,
  },
  story: {
    src: '/media/second-circle-story.jpg',
    alt: 'A large group of women sitting together.',
    width: 929,
    height: 929,
  },
  care: {
    src: '/media/second-circle-care.jpg',
    alt: 'Women talking and laughing together in a courtyard.',
    width: 1200,
    height: 1600,
  },
};

export const photoSizes = {
  '/media/team/karandeep-pupneja.jpeg': [836, 919],
  '/media/team/shrutanjaya-bhardwaj.jpeg': [768, 836],
  '/media/team/shashank-maheshwari.jpeg': [569, 593],
  '/media/team/mohd-wasil.jpeg': [1254, 1254],
  '/media/team/piyush-nayyer.jpeg': [1071, 1428],
  '/media/team/nipun-aggarwal.png': [683, 1024],
  '/media/team/aditya-singh.jpeg': [1200, 1600],
  '/media/team/jatin-gupta.jpeg': [1122, 1402],
  '/media/team/jatin-paroli.jpeg': [1023, 1537],
};

export const siteOrigin = 'https://secondcircleindia.org';
export const productionHost = 'secondcircleindia.org';

export function isProductionHost(hostname = typeof window === 'undefined' ? '' : window.location.hostname) {
  return hostname === productionHost || hostname === `www.${productionHost}`;
}

export const legacyAliases = {
  '/about-us': '/about',
  '/our-programs': '/our-work',
  '/contact-us': '/contact',
  '/privacy-policy': '/privacy',
  '/privacy-policy-2': '/donation-policy',
  '/financial-reports-list': '/resources/financial-reports',
  '/legal-and-statutory-documents': '/resources/legal-documents',
};

export function resolvePath(pathname) {
  const path = normalizePath(pathname);
  return legacyAliases[path] || path;
}

export const headerNav = [
  { href: '/our-work', label: 'Our work' },
  { href: '/approach', label: 'Our approach' },
  { href: '/stories', label: 'Stories & insights' },
  { href: '/about', label: 'About' },
];

export const footerNav = [
  {
    label: 'Explore',
    links: [
      { href: '/about', label: 'About' },
      { href: '/our-core-values', label: 'Core values' },
      { href: '/our-work', label: 'Our work' },
      { href: '/approach', label: 'Our approach' },
      { href: '/stories', label: 'Stories & insights' },
    ],
  },
  {
    label: 'Get involved',
    links: [
      { href: '/donate', label: 'Donate' },
      { href: '/contact', label: 'Contact' },
      { href: '/resources', label: 'Resources' },
    ],
  },
  {
    label: 'Transparency',
    links: [
      { href: '/resources/financial-reports', label: 'Financial reports' },
      { href: '/resources/legal-documents', label: 'Legal documents' },
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/donation-policy', label: 'Donation policy' },
    ],
  },
];

export const resourceIndex = [
  { href: '/resources/financial-reports', label: 'Financial reports' },
  { href: '/resources/legal-documents', label: 'Legal and statutory documents' },
  { href: '/privacy', label: 'Privacy policy' },
  { href: '/donation-policy', label: 'Donation policy' },
];

export const pendingResourceCategories = [
  {
    label: 'Awareness and campaign materials',
    description:
      'A future collection of approved public-facing advertisements, campaign creatives, awareness materials, videos, and downloadable resources.',
    status: 'Content pending approval',
  },
];

export const pendingFinancialReports = [
  {
    label: 'Audited financial report',
    status: 'Document pending approval',
    note: 'The audited report is still awaited from the CA and will be published here when approved.',
  },
  {
    label: 'Additional financial documents',
    status: 'Coming soon',
    note: 'Further financial documents will be listed only after founder approval.',
  },
];

export const pendingLegalDocuments = [
  { label: 'Incorporation documents', status: 'Document pending approval' },
  { label: 'Section 8 registration', status: 'Document pending approval' },
  { label: 'PAN and tax documents', status: 'Document pending approval' },
  { label: 'Other statutory records', status: 'Coming soon' },
];

export const privacyDraft = {
  heading: 'Privacy Policy',
  reviewLabel: 'Draft for founder and legal review',
  status: 'Status: Draft pending approval',
  notice: 'This is a conservative draft for founder and legal review. It is not a final privacy policy and should not be treated as legally approved.',
  sections: [
    {
      title: '1. About this policy',
      paragraphs: [
        'This draft describes how the Second Circle India website currently works. It applies to this informational website only. It does not apply to any other website, application, payment system, or offline programme unless those are later added and this policy is revised.',
        'The website is published for Second Circle Project Foundation, a registered Section 8 company (CIN: U88900DL2025NPL449784), using the name Second Circle India. No other legal registrations are stated in this draft.',
      ],
    },
    {
      title: '2. Information currently received',
      paragraphs: [
        'The current website is informational. It does not contain a contact form, payment form, newsletter signup, user account, or login system.',
        'If a person writes to the organisation using the published email address, the organisation may receive whatever that person chooses to include. That may include a name, email address, and message. The organisation does not ask visitors to send more than they need to send for an ordinary enquiry.',
        'Please do not send sensitive medical, legal, financial, identity, or beneficiary information through an ordinary email unless the organisation has specifically asked for it through an approved channel.',
      ],
    },
    {
      title: '3. Technical information',
      paragraphs: [
        'This draft does not claim that analytics, advertising cookies, pixels, or other third-party monitoring tools are active on this website. A check of the current website did not find those tools.',
        'The site uses local images, bundled interface icons, and typefaces loaded from Google Fonts. Google Fonts is a third-party font service. Its own practices apply to that request. Whether that service sets additional cookies or logs is a matter for confirmation before this draft is approved. This draft does not treat Google Fonts as website analytics.',
        'If the website is later placed on a hosting service, that host may keep ordinary server logs such as IP address, browser type, and requested pages. That would be a hosting-level matter. It has not been confirmed for this website and must be reviewed before final approval. This draft does not name a hosting provider, analytics product, payment provider, CRM, or email platform.',
      ],
    },
    {
      title: '4. How information may be used',
      paragraphs: [
        'Where the organisation receives information, it may use it to:',
      ],
      bullets: [
        'respond to enquiries sent by email',
        'maintain and secure the website',
        'understand and improve the website only where a relevant technical tool is actually enabled (none is enabled in the current website beyond the font loading described above)',
        'meet legal or safety obligations where those apply, subject to legal review',
      ],
    },
    {
      title: '5. Sharing and disclosure',
      paragraphs: [
        'Second Circle India does not sell or rent personal information.',
        'Information may be shared with a service provider only where that is necessary to operate the website or to respond to an enquiry. No specific processor, payment gateway, or hosting provider is named in this draft because those arrangements are not verified for this website.',
      ],
      legalNote: 'This sharing paragraph requires legal confirmation before approval.',
    },
    {
      title: '6. Data security',
      paragraphs: [
        'The organisation intends to use reasonable technical and organisational safeguards for information it holds. No website can promise absolute security or guaranteed prevention of unauthorised access. This draft does not make that promise.',
      ],
    },
    {
      title: '7. Data retention',
      paragraphs: [
        'Information received by email may be kept only for as long as it is needed to respond to the enquiry and to meet any later confirmed legal duty. No fixed retention period is stated here.',
      ],
      legalNote: 'Retention periods require founder and legal confirmation.',
    },
    {
      title: '8. External links',
      paragraphs: [
        'This website may contain links to other websites. Those sites have their own policies. Second Circle India is not responsible for their privacy practices.',
      ],
    },
    {
      title: '9. Children and vulnerable persons',
      paragraphs: [
        'The current website is not built to collect personal or sensitive information through forms. Children and vulnerable people should not be asked to submit personal information through this website.',
      ],
      legalNote: 'Final safeguarding wording requires legal review.',
    },
    {
      title: '10. Privacy requests',
      paragraphs: [
        'For privacy questions or requests, write for now to info@secondcircleindia.org. This is a provisional contact only.',
        'The privacy contact workflow is pending confirmation. This draft does not appoint a Data Protection Officer and does not create a separate privacy email address.',
      ],
    },
    {
      title: '11. Policy changes',
      paragraphs: [
        'This draft may be updated after founder and legal review. A later approved version may replace it. No review date is claimed here.',
      ],
    },
    {
      title: '12. Contact details',
      paragraphs: [
        'Second Circle Project Foundation, a registered Section 8 company (CIN: U88900DL2025NPL449784).',
        'Flat No. 230, Block A-4 DDA Flat, Paschim Vihar, New Delhi-110063, India',
        'Email: info@secondcircleindia.org',
        'Phone: 011-43047136',
        'Mobile: +91 8527274277',
        'This Privacy Policy remains a draft pending founder and legal approval.',
      ],
    },
  ],
};

export const donationPolicyDraft = {
  heading: 'Donation Policy',
  reviewLabel: 'Draft for founder and legal review',
  status: 'Status: Draft pending approval',
  notice: 'This is a conservative draft for founder and legal review. It is not a final donation policy. The website currently does not accept donations. Do not treat this page as an invitation to pay.',
  sections: [
    {
      title: '1. Purpose and scope',
      paragraphs: [
        'This draft is intended to govern future donations made to Second Circle Project Foundation, a registered Section 8 company (CIN: U88900DL2025NPL449784), using the name Second Circle India.',
        'The website currently does not accept donations. No donation is accepted through this website today.',
        'This draft will be updated, and founder and legal approval will be required, before donations are accepted through this website.',
      ],
    },
    {
      title: '2. Current donation status',
      paragraphs: [
        'No online donation gateway is connected to this website. There is no active donation form and no confirmed payment processor.',
        'The published email address and phone numbers are for general contact. They are not a payment method. This draft does not include bank details, UPI IDs, QR codes, payment links, or processor names.',
      ],
    },
    {
      title: '3. How donations may be accepted in future',
      paragraphs: [
        'The following channels are listed only as possible future options. None of them is currently available through this website. No account details or payment instructions are published here.',
      ],
      pendingList: [
        'Online payment',
        'Bank transfer',
        'Cheque or demand draft',
        'In-kind support',
        'Corporate or institutional support',
      ],
    },
    {
      title: '4. Use of donations',
      paragraphs: [
        'If donations are later accepted, they would be used for the organisation’s approved charitable and organisational objectives.',
        'This draft does not allocate gifts to a named programme. It does not promise that a fixed percentage of any gift will reach programmes.',
      ],
      legalNote: 'Final allocation rules, including any restricted-donation rules, require founder and legal approval.',
    },
    {
      title: '5. Designated donations',
      paragraphs: [
        'If a future process allows restricted or designated gifts, that process must be confirmed in writing before such a gift is accepted.',
        'The organisation may need to redirect funds if a designated purpose cannot be carried out. The terms of that redirection have not been approved.',
      ],
      legalNote: 'Final designated-donation wording requires founder and legal approval.',
    },
    {
      title: '6. Donation receipts and tax benefits',
      paragraphs: [
        'Receipt and tax documentation processes are not confirmed for this website. This draft does not claim tax eligibility and does not describe a receipt process.',
      ],
      legalNote: 'Pending: tax documentation, receipt process, and any related eligibility wording require founder and legal confirmation. No tax benefit is claimed here.',
    },
    {
      title: '7. Refunds and cancellations',
      paragraphs: [
        'This draft does not set a refund window, timeline, or transaction fee. Any future refund or cancellation process will depend on the approved payment method and legal review.',
        'The situations below are placeholders only. No refund process is active on this website.',
      ],
      pendingList: [
        'Duplicate transaction',
        'Incorrect amount',
        'Failed payment',
        'Fraudulent or unauthorised transaction',
        'Donor cancellation request',
      ],
    },
    {
      title: '8. Anonymous and foreign donations',
      paragraphs: [
        'This draft does not say that anonymous donations or foreign donations are accepted. Eligibility and compliance requirements are pending confirmation.',
      ],
    },
    {
      title: '9. Refusal or return of donations',
      paragraphs: [
        'If donations are later accepted, the organisation may need to decline or return funds that are unlawful, unethical, conflicted, or inconsistent with its approved objectives. The precise tests and process have not been approved.',
      ],
      legalNote: 'This refusal and return section requires legal review.',
    },
    {
      title: '10. Donor privacy',
      paragraphs: [
        'Donor information will be handled only after the donation workflow and the privacy process are approved. No payment processor is named in this draft because none is connected to this website.',
      ],
      link: { href: '/privacy', label: 'Read the draft Privacy Policy' },
    },
    {
      title: '11. Queries and complaints',
      paragraphs: [
        'For donation questions, write for now to info@secondcircleindia.org. This is a provisional contact only.',
        'The grievance and donation-support workflow is pending confirmation. This draft does not appoint a grievance officer.',
      ],
    },
    {
      title: '12. Changes to this policy',
      paragraphs: [
        'This draft may be updated after founder and legal approval. A later approved version may replace it. No effective date is claimed here.',
      ],
    },
    {
      title: '13. Contact information',
      paragraphs: [
        'Second Circle Project Foundation, a registered Section 8 company (CIN: U88900DL2025NPL449784).',
        'Flat No. 230, Block A-4 DDA Flat, Paschim Vihar, New Delhi-110063, India',
        'Email: info@secondcircleindia.org',
        'Phone: 011-43047136',
        'Mobile: +91 8527274277',
        'Payment details and tax information are not included. This Donation Policy remains a draft pending founder and legal approval.',
      ],
    },
  ],
};

export const valuesBelief = 'Our work is guided by a simple belief: health is a matter of equity, rights and dignity.';
export const valuesGuide = 'These values shape how we work, the partnerships we build and the change we seek to create.';

export const values = [
  {
    title: 'Equity',
    text: 'We work towards a health system where everyone has a fair opportunity to access the care, support and resources they need.',
  },
  {
    title: 'Dignity',
    text: 'We see people beyond their illness, identity or circumstances and believe everyone deserves to be treated with respect.',
  },
  {
    title: 'Inclusion',
    text: 'We strive to create communities and systems where people feel welcomed, heard and able to participate.',
  },
  {
    title: 'Human Rights',
    text: 'We believe that access to healthcare is closely connected to equality, freedom and dignity. We work to strengthen people\'s understanding and exercise of their rights.',
  },
  {
    title: 'Lived Experience',
    text: 'We value people\'s experiences as an important source of knowledge and believe those most affected by health inequalities should have a voice in shaping solutions.',
  },
  {
    title: 'Community',
    text: 'We believe meaningful change happens with people, not simply for them. We create opportunities for people to connect, participate and contribute.',
  },
  {
    title: 'Evidence & Learning',
    text: 'We value reliable evidence, research and reflection. We remain open to learning, questioning our assumptions and improving our work.',
  },
  {
    title: 'Accountability',
    text: 'We take responsibility for our actions, use resources thoughtfully and remain transparent and accountable to the communities and partners we work with.',
  },
  {
    title: 'Collaboration',
    text: 'We believe lasting change requires people and organisations to work together. We build partnerships across communities, civil society, academia, healthcare and public institutions.',
  },
];

export const peopleIntro = 'Second Circle India is shaped by people who bring technology, communication, health equity and community-centred thinking to the work.';
export const advisoryIntro = 'Our Advisory Board provides perspective and guidance as Second Circle India develops its work.';
export const pendingBiography = 'Biography to be added after confirmation.';

export const peopleGroups = [
  {
    id: 'founder',
    title: 'Founder',
    layout: 'three',
    people: [
      {
        name: 'Karandeep Pupneja',
        role: 'Founder and Executive Director',
        photo: '/media/team/karandeep-pupneja.jpeg',
        photoAlt: 'Karandeep Pupneja',
        photoPosition: 'center 46%',
        bio: 'Karandeep Pupneja is the Founder and Executive Director of Second Circle Project Foundation. He holds a Bachelor\'s degree in Law and Politics and a Master\'s degree in Development Studies from Dr. B. R. Ambedkar University Delhi (AUD). His engagement with social welfare began during his undergraduate years, when he served as the University Level Student Coordinator for the National Service Scheme (NSS). His working experience at the NSS brought him closer to the realities and challenges faced by marginalised communities. The idea for Second Circle Project emerged during his Master\'s dissertation, where he examined the policy effectiveness of the Targeted Intervention approach in India\'s HIV/AIDS response. Through his academic and community engagement, Karandeep interacted with people living with HIV and witnessed the discrimination and exclusion they continue to experience, particularly within healthcare and health insurance systems. This work shaped his understanding that while advances in treatment have transformed HIV into a manageable health condition, the challenges faced by people after diagnosis extend far beyond medical care. Access to mental health support, nutrition, social protection, healthcare, insurance, dignity and legal rights remains an essential part of the journey. Karandeep believes that a person is always more than a diagnosis. His work is centred on advancing health equity and building systems of care that are accessible, inclusive and responsive to people\'s lived realities. He is currently pursuing legal and policy interventions concerning discrimination and unequal access to health insurance for people living with HIV, persons with disabilities and people affected by mental health conditions, including litigation before the Delhi High Court. Karandeep is a strong advocate for social justice and believes that one should never stop helping others. Perhaps that is the least a human being can do to keep humanity alive.',
      },
    ],
  },
  {
    id: 'advisory',
    title: 'Advisory Board',
    intro: advisoryIntro,
    layout: 'three',
    people: [
      {
        name: 'Shrutanjaya Bhardwaj',
        role: 'Advisory Board Member',
        photo: '/media/team/shrutanjaya-bhardwaj.jpeg',
        photoAlt: 'Shrutanjaya Bhardwaj',
        bio: 'Shrutanjaya Bhardwaj is an Advocate-on-Record at the Supreme Court of India and founder of Pravah Law Associates and Solicitors in New Delhi, India. In February 2026, Shrutanjaya secured the first rank in the prestigious Advocate-on-Record examination conducted by the Supreme Court. Shrutanjaya has received his education from prestigious institutions in India and abroad. He completed B.A. LL.B (Hons.) from National Law University, Delhi (NLUD), where he was awarded the Vice Chancellor\'s Gold Medal for the Best Male Student in the University. He also received an LL.M from University of Michigan Law School, Ann Arbor. Beyond the courtroom, Shrutanjaya is a dedicated researcher and educator. He has served as Visiting Faculty at the National Law University, Delhi (NLUD), the National Law School of India University, Bengaluru (NLSIU), and the Campus Law Centre of the University of Delhi (CLC). In addition, Shrutanjaya has authored numerous widely-cited articles in journals such as the NUJS Law Review, Indian Law Review, Indian Journal of Constitutional Law and the NLUD Journal for Legal Studies. His research often explores the intersection of technology and law, empirical studies on judicial behaviour, and the philosophical foundations of fundamental rights.',
      },
      {
        name: 'Shashank Maheshwari',
        role: 'Advisory Board Member',
        photo: '/media/team/shashank-maheshwari.jpeg',
        photoAlt: 'Shashank Maheshwari',
        bio: 'Shashank Maheshwari is an Assistant Professor at Jindal Global Law School, O.P. Jindal Global University, where he has taught since 2020, currently teaching Moot Court and Trial Advocacy, Legal Methods, and History of Courts, Legislature and Legal Profession. He holds an LLM from National Law University, Delhi, and a B.A. LL.B. (Hons.) from Amity Law School. He has cleared the All India Bar Examination and UGC-NET. His scholarship spans peer-reviewed articles in the Economic and Political Weekly, alongside frequent opinion pieces in The Indian Express, The Print, LiveLaw, and VerfBlog on constitutional and public law issues. He is particularly interested in research on Constitutional Law, Public International Law, with a focus on International Criminal Law and Terrorism.',
      },
      {
        name: 'Mohd Wasil',
        role: 'Advisory Board Member',
        photo: '/media/team/mohd-wasil.jpeg',
        photoAlt: 'Mohd Wasil',
        bio: 'An engineer-turned-lawyer and Faculty of Law, DU graduate, blending technical precision with sharp legal strategy. Specializes in Patent, Criminal, and Civil Law, offering a unique cross-disciplinary edge to contentious litigation and intellectual property protection.',
      },
    ],
  },
  {
    id: 'technology',
    title: 'Technology & Communications Team',
    layout: 'three',
    people: [
      { name: 'Piyush Nayyer', role: 'Technology & Communications', photo: '/media/team/piyush-nayyer.jpeg', photoAlt: 'Piyush Nayyer', photoPosition: 'center 40%', bioPending: true },
      { name: 'Nipun Aggarwal', role: 'Technology & Communications', photo: '/media/team/nipun-aggarwal.png', photoAlt: 'Nipun Aggarwal', bioPending: true },
      { name: 'Aditya Singh', role: 'Technology & Communications', photo: '/media/team/aditya-singh.jpeg', photoAlt: 'Aditya Singh', bioPending: true },
      { name: 'Jatin Gupta', role: 'Technology & Communications', photo: '/media/team/jatin-gupta.jpeg', photoAlt: 'Jatin Gupta', bioPending: true },
      { name: 'Jatin Paroli', role: 'Technology & Communications', photo: '/media/team/jatin-paroli.jpeg', photoAlt: 'Jatin Paroli', bioPending: true },
    ],
  },
];

export const homepagePending = [
  { label: 'Programme highlights', status: 'Pending approval', text: 'Approved programme names, locations, activities and local detail have not been published.', color: 'yellow' },
  { label: 'Communities and regions served', status: 'Pending approval', text: 'The communities and regions supported by Second Circle India have not been approved for publication.', color: 'olive' },
  { label: 'Impact, partners and updates', status: 'Pending approval', text: 'Impact figures, partner names and organisational updates will be added only after approval.', color: 'charcoal' },
];

export const storyCategories = [
  {
    id: 'community-voices',
    label: 'Community voices',
    intro: 'Approved first-person or community accounts will appear here after consent and review. No voices are published yet.',
    cards: [
      {
        title: 'Title pending approval',
        description: 'An approved community voice will be added here. No name, quote, or outcome is published in this slot.',
        dateLabel: 'Date pending approval',
        image: '/media/second-circle-community.jpg',
        imageAlt: 'People talking together in a village setting.',
        imageWidth: 929,
        imageHeight: 619,
      },
      {
        title: 'Title pending approval',
        description: 'A second community-voice slot is reserved. No story has been approved for it.',
        dateLabel: 'Date pending approval',
        image: '/media/second-circle-support.jpg',
        imageAlt: 'Two people in a supportive conversation.',
        imageWidth: 658,
        imageHeight: 987,
      },
    ],
  },
  {
    id: 'research-and-learning',
    label: 'Research and learning',
    intro: 'Approved research notes and learning pieces will appear here. No findings or figures are published yet.',
    cards: [
      {
        title: 'Title pending approval',
        description: 'An approved research or learning note will be added here. This slot does not contain results.',
        dateLabel: 'Date pending approval',
        image: '/media/second-circle-research.jpg',
        imageAlt: 'A group of people studying documents together.',
        imageWidth: 658,
        imageHeight: 987,
      },
      {
        title: 'Title pending approval',
        description: 'A second research-and-learning slot is reserved. No paper or briefing is attached.',
        dateLabel: 'Date pending approval',
        image: '/media/second-circle-advocacy.jpg',
        imageAlt: 'People seated together in a meeting.',
        imageWidth: 929,
        imageHeight: 619,
      },
    ],
  },
  {
    id: 'organisation-and-partner-updates',
    label: 'Organisation and partner updates',
    intro: 'Approved organisational and partner updates will appear here. No partners or announcements are named yet.',
    cards: [
      {
        title: 'Title pending approval',
        description: 'An approved organisational update will be added here. This is not a news item.',
        dateLabel: 'Date pending approval',
        image: '/media/second-circle-story.jpg',
        imageAlt: 'A large group of women sitting together.',
        imageWidth: 929,
        imageHeight: 929,
      },
      {
        title: 'Title pending approval',
        description: 'A partner-update slot is reserved. No partner is named until approval.',
        dateLabel: 'Date pending approval',
        image: '/media/second-circle-hero.jpg',
        imageAlt: 'A community gathering outdoors under a tree.',
        imageWidth: 929,
        imageHeight: 697,
      },
    ],
  },
];

export const featuredStoryPlaceholder = {
  category: 'Featured story',
  title: 'Title pending approval',
  description: 'A featured story will appear here after approval and consent. This block is a reserved space, not a published account.',
  dateLabel: 'Date pending approval',
  image: '/media/second-circle-story.jpg',
  imageAlt: 'A large group of women sitting together.',
  imageWidth: 929,
  imageHeight: 929,
};

export const routeMeta = {
  '/': defaultMeta,
  '/about': {
    title: 'About | Second Circle India',
    description: 'Second Circle India is a Section 8 non-profit working towards health equity, dignity and inclusion.',
  },
  '/our-core-values': {
    title: 'Our Core Values | Second Circle India',
    description: 'Our work is guided by a simple belief: health is a matter of equity, rights and dignity.',
  },
  '/our-work': {
    title: 'Our work | Second Circle India',
    description: 'Community engagement, access and support, research and learning, and advocacy and systems change.',
  },
  '/our-work/community-engagement': {
    title: 'Community engagement | Second Circle India',
    description: 'We listen to lived experience and build solutions with communities.',
  },
  '/our-work/access-and-support': {
    title: 'Access and support | Second Circle India',
    description: 'We connect people and communities with information, support and pathways to care.',
  },
  '/our-work/research-and-learning': {
    title: 'Research and learning | Second Circle India',
    description: 'We generate and use evidence to understand inequity and improve support.',
  },
  '/our-work/advocacy-and-systems-change': {
    title: 'Advocacy and systems change | Second Circle India',
    description: 'We work with communities and partners to advance inclusive policies and responsive healthcare.',
  },
  '/approach': {
    title: 'Our approach | Second Circle India',
    description: 'We listen to lived experience, learn from evidence and act together across communities and systems.',
  },
  '/stories': {
    title: 'Stories & insights | Second Circle India',
    description: 'Reserved space for approved community voices, research and learning, and organisation and partner updates. No stories are published yet.',
  },
  '/donate': {
    title: 'Donate | Second Circle India',
    description: 'Support Second Circle India’s work towards more accessible, inclusive and responsive care. Donation details are awaiting approval.',
  },
  '/contact': {
    title: 'Contact | Second Circle India',
    description: 'Contact Second Circle India by email or phone for partnerships, research, programme conversations or general enquiries. There is no contact form on the site yet.',
  },
  '/resources': {
    title: 'Resources | Second Circle India',
    description: 'Financial reports, legal documents, privacy policy and donation policy for Second Circle India.',
  },
  '/resources/financial-reports': {
    title: 'Financial reports | Second Circle India',
    description: 'Audited financial reports for Second Circle India will be published here after approval.',
  },
  '/resources/legal-documents': {
    title: 'Legal documents | Second Circle India',
    description: 'Statutory and legal documents for Second Circle India will be published here after approval.',
  },
  '/privacy': {
    title: 'Privacy Policy | Second Circle India',
    description: 'Draft privacy policy for the Second Circle India website. Status: draft pending founder and legal approval. Not a final legal document.',
  },
  '/donation-policy': {
    title: 'Donation Policy | Second Circle India',
    description: 'Draft donation policy for Second Circle India. No online donations are accepted on this website. Status: draft pending founder and legal approval.',
  },
};

export const notFoundMeta = {
  title: 'Page not found | Second Circle India',
  description: 'This page is not on the Second Circle India website.',
};

export function normalizePath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return path;
}

export function getProgramByPath(path) {
  const prefix = '/our-work/';
  if (!path.startsWith(prefix)) return null;
  return programs.find((item) => path === `${prefix}${item.slug}`) || null;
}

export function isKnownRoute(path) {
  return Boolean(routeMeta[path]);
}

export function getRouteMeta(path) {
  return routeMeta[path] || notFoundMeta;
}

export function navIsCurrent(href, path) {
  if (href === '/') return path === '/';
  return path === href || path.startsWith(`${href}/`);
}

export function applyDocumentMeta(path) {
  const meta = getRouteMeta(path);
  document.title = meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', meta.description);

  let robots = document.querySelector('meta[name="robots"]');
  if (!isProductionHost()) {
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
  } else if (robots) {
    robots.setAttribute('content', 'index, follow');
  }

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!isKnownRoute(path) || !isProductionHost()) {
    if (canonical) canonical.remove();
    return;
  }
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', `${siteOrigin}${path === '/' ? '/' : path}`);
}
