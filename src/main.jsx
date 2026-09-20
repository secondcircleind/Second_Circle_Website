import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Menu,
  X,
  HeartHandshake,
  Scale,
  BookOpen,
  HandHeart,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';
import './styles.css';
import {
  applyDocumentMeta,
  contactAddressLines,
  contactMailto,
  contactPurposes,
  footerNav,
  getProgramByPath,
  headerNav,
  homepagePending,
  images,
  isKnownRoute,
  navIsCurrent,
  organisation,
  pendingBiography,
  pendingFinancialReports,
  pendingLegalDocuments,
  peopleGroups,
  peopleIntro,
  photoSizes,
  privacyDraft,
  donationPolicyDraft,
  getProgramDetailSections,
  programs,
  resolvePath,
  resourceIndex,
  pendingResourceCategories,
  storyCategories,
  featuredStoryPlaceholder,
  values,
  valuesBelief,
  valuesGuide,
} from './site.js';

const programIcons = { HeartHandshake, HandHeart, BookOpen, Scale };

function SiteImage({ src, alt, width, height, priority = false, className, style, sizes }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'low'}
      decoding={priority ? 'sync' : 'async'}
    />
  );
}

function PersonCard({ person }) {
  const [open, setOpen] = React.useState(false);
  return (
    <article className={`person-card ${person.bioPending ? 'is-pending' : ''} ${open ? 'is-open' : ''}`}>
      <SiteImage
        src={person.photo}
        alt={person.photoAlt}
        width={photoSizes[person.photo]?.[0]}
        height={photoSizes[person.photo]?.[1]}
        sizes="(max-width: 800px) 100vw, 33vw"
        style={person.photoPosition ? { objectPosition: person.photoPosition } : undefined}
      />
      <div className="person-body">
        <h4>{person.name}</h4>
        <p className="person-role">{person.role}</p>
        {person.bioPending ? (
          <p className="person-bio" role="status">{pendingBiography}</p>
        ) : (
          <>
            <p className={`person-bio ${open ? 'is-open' : ''}`}>{person.bio}</p>
            <button type="button" className="read-more" aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? 'Read less' : 'Read more'}
            </button>
          </>
        )}
      </div>
    </article>
  );
}

function PageHeader({ path }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to main content</a>
      <a className="brand" href="/" aria-label="Second Circle India home" aria-current={path === '/' ? 'page' : undefined}>
        <SiteImage src={images.logo.src} alt="Second Circle India" width={images.logo.width} height={images.logo.height} priority sizes="156px" />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav id="main-navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary">
        {headerNav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={navIsCurrent(item.href, path) ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          className="nav-donate"
          href="/donate"
          aria-current={path === '/donate' ? 'page' : undefined}
          onClick={() => setMenuOpen(false)}
        >
          Donate <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function PageFooter({ path }) {
  return (
    <footer className="site-footer section-charcoal">
      <div className="footer-main">
        <div className="footer-identity">
          <SiteImage src={images.logo.src} alt="" width={images.logo.width} height={images.logo.height} className="footer-logo" sizes="168px" />
          <p className="footer-tagline">Health equity <br />with dignity.</p>
          <p className="footer-legal-name">{organisation.legalName}</p>
          <p className="footer-legal-note">{organisation.type}</p>
          <p className="footer-cin">CIN: {organisation.cin}</p>
        </div>
        <div className="footer-links">
          {footerNav.map((group) => (
            <div key={group.label}>
              <span className="footer-label">{group.label}</span>
              {group.links.map((item) => (
                <a key={item.href} href={item.href} aria-current={navIsCurrent(item.href, path) ? 'page' : undefined}>
                  {item.label}
                </a>
              ))}
            </div>
          ))}
          <div>
            <span className="footer-label">Contact</span>
            <a href={`mailto:${organisation.email}`}><Mail size={15} /> {organisation.email}</a>
            <a href={organisation.mobileHref}><Phone size={15} /> {organisation.mobile}</a>
            <a href={organisation.phoneHref}><Phone size={15} /> {organisation.phone}</a>
            <span className="footer-address"><MapPin size={15} /> {organisation.address}</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {organisation.name}</span>
        <span>{organisation.legalName} is a registered Section 8 company</span>
        <span><a href="/privacy">Privacy</a> · <a href="/donation-policy">Donation policy</a></span>
      </div>
    </footer>
  );
}

function StoryCard({ item, category, featured = false }) {
  const body = (
    <>
      <SiteImage
        src={item.image}
        alt={item.imageAlt}
        width={item.imageWidth}
        height={item.imageHeight}
        sizes={featured ? '(max-width: 800px) 88vw, 52vw' : '(max-width: 800px) 88vw, 30vw'}
      />
      <div className="story-card-copy">
        <p className="story-card-category">{category}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {item.dateLabel && <p className="story-card-date">{item.dateLabel}</p>}
        <span className="content-pending-label">{featured ? 'Content pending approval' : 'Coming soon'}</span>
        {!item.href && <p className="story-card-unavailable">No published story is attached to this card.</p>}
      </div>
    </>
  );

  return (
    <article className={`story-card ${featured ? 'is-featured' : ''}`}>
      {item.href ? (
        <a className="story-card-link" href={item.href}>
          {body}
        </a>
      ) : (
        <div className="story-card-link is-inactive">{body}</div>
      )}
    </article>
  );
}

function PendingContent({ children }) {
  return (
    <div className="pending-content" role="status">
      <span>Content pending approval</span>
      <p>{children}</p>
    </div>
  );
}

function PlaceholderNotice({ children = 'Content will be added after founder approval.' }) {
  return (
    <div className="placeholder-notice" role="status">
      <span>Coming soon</span>
      <p>{children}</p>
    </div>
  );
}

function PolicyDraftPage({ draft }) {
  return (
    <>
      <section className="policy-hero section-paper">
        <div className="brand-field brand-field-light" aria-hidden="true"><span /><span /><span /></div>
        <p className="eyebrow"><span /> Legal draft</p>
        <h1>{draft.heading}</h1>
        <p className="draft-label">{draft.reviewLabel}</p>
        <p className="policy-status">{draft.status}</p>
      </section>
      <section className="content-section section-paper policy-page">
        <ApprovalBanner title={draft.reviewLabel}>
          {draft.notice}
        </ApprovalBanner>
        <article className="policy-document">
          {draft.sections.map((section) => (
            <section className="policy-block" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>
                  {section.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {section.pendingList && (
                <ul className="policy-pending-list">
                  {section.pendingList.map((item) => (
                    <li key={item}>
                      <strong>{item}</strong>
                      <span>Not currently available. Pending approval.</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.link && <a className="text-link" href={section.link.href}>{section.link.label} <ArrowUpRight size={17} /></a>}
              {section.legalNote && <p className="legal-confirm">{section.legalNote}</p>}
            </section>
          ))}
        </article>
      </section>
    </>
  );
}

function ApprovalBanner({ title, children }) {
  return (
    <div className="approval-banner" role="status">
      <span>Awaiting founder and legal approval</span>
      <strong>{title}</strong>
      <p>{children}</p>
    </div>
  );
}

function PageHero({ eyebrow, title, intro, image, imageAlt = '', imageWidth, imageHeight, dark = false, priority = false, caption = null }) {
  return (
    <section className={`page-hero ${dark ? 'section-charcoal' : 'section-paper'}${image ? '' : ' is-copy-only'}`}>
      {!image && <div className="brand-field" aria-hidden="true"><span /><span /><span /></div>}
      <div className="page-hero-copy">
        <p className={`eyebrow ${dark ? 'eyebrow-light' : ''}`}><span /> {eyebrow}</p>
        <h1>{title}</h1>
        {intro && <p className="page-hero-intro">{intro}</p>}
      </div>
      {image && (
        <figure className="page-hero-figure">
          <SiteImage
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            priority={priority}
            sizes="(max-width: 800px) 88vw, 42vw"
          />
          {caption && <figcaption className="media-caption">{caption}</figcaption>}
        </figure>
      )}
    </section>
  );
}

function ApproachSystem() {
  return (
    <ol className="approach-system" aria-label="Approach steps">
      <li>
        <span className="approach-system-num">01</span>
        <h2>Listen</h2>
        <p>Lived experience and community knowledge come first.</p>
      </li>
      <li>
        <span className="approach-system-num">02</span>
        <h2>Learn</h2>
        <p>Evidence and reflection shape what we do next.</p>
      </li>
      <li>
        <span className="approach-system-num">03</span>
        <h2>Act together</h2>
        <p>Communities, organisations and systems move as one.</p>
      </li>
    </ol>
  );
}

function PendingDocumentRow({ item, index }) {
  return (
    <div className="resource-row is-pending">
      <span>0{index + 1}</span>
      <div>
        <strong>{item.label}</strong>
        {item.note && <p>{item.note}</p>}
      </div>
      <span className="doc-status">{item.status}</span>
    </div>
  );
}

function ProgramDetail({ program }) {
  const sections = getProgramDetailSections(program);

  return (
    <>
      <PageHero eyebrow="Our work" title={program.title} intro={program.description} image={program.image} imageAlt={program.imageAlt} imageWidth={program.imageWidth} imageHeight={program.imageHeight} dark priority />
      <p className="program-page-status" role="status">{program.detailStatus}. This page is a content frame, not a finished programme report.</p>
      {sections.map((section, index) => (
        <section className="program-section section-paper" id={section.id} key={section.id}>
          <p className="eyebrow"><span /> {String(index + 1).padStart(2, '0')}</p>
          <h2>{section.title}</h2>
          {section.usesApprovedSummary && (
            <p className="lead-copy">{program.description}</p>
          )}
          {section.paragraphs?.map((paragraph) => (
            <p className="lead-copy" key={paragraph}>{paragraph}</p>
          ))}
          {section.intro && <p className="lead-copy">{section.intro}</p>}
          {section.list && (
            <ul className="program-area-list">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {section.note && <p className="program-section-note">{section.note}</p>}
          {section.pending && <PendingContent>{section.pending}</PendingContent>}
          {section.links && (
            <div className="program-section-links">
              {section.links.map((item) => (
                <a className="text-link" href={item.href} key={`${item.href}-${item.label}`}>{item.label} <ArrowUpRight size={17} /></a>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
}

function NotFoundPage() {
  return (
    <>
        <PageHero eyebrow="Error 404" title={<>This page is <br /><em>not on the site.</em></>} intro="The address may be mistyped, or the page has not been published yet." dark />
      <section className="content-section section-paper">
        <div className="not-found-actions">
          <a className="button button-charcoal" href="/">Back to the homepage <ArrowUpRight size={18} /></a>
          <a className="text-link" href="/our-work">See our work <ArrowUpRight size={17} /></a>
          <a className="text-link" href="/contact">Contact the team <ArrowUpRight size={17} /></a>
        </div>
      </section>
    </>
  );
}

function InnerPage({ path }) {
  const program = getProgramByPath(path);
  let content;

  if (program) {
    content = <ProgramDetail program={program} />;
  } else if (path === '/about') {
    content = (
      <>
        <PageHero eyebrow="About Second Circle India" title={<>Working towards <br /><em>health equity, together.</em></>} intro="Second Circle India is a Section 8 non-profit organisation working towards health equity, dignity and inclusion." image={programs[0].image} imageAlt={programs[0].imageAlt} imageWidth={programs[0].imageWidth} imageHeight={programs[0].imageHeight} dark priority />
        <section className="content-section section-paper">
          <div className="content-grid">
            <div>
              <p className="eyebrow"><span /> Mission and vision</p>
              <h2>Accessible and <span>inclusive</span> healthcare.</h2>
            </div>
            <div>
              <p className="lead-copy">We are on our mission to promote health equity by working to make healthcare more accessible, inclusive, and responsive to people's needs. We are working to advance health rights through community engagement, research and advocacy.</p>
              <p className="lead-copy">We envision a society where every person can access healthcare, understand and exercise their rights, find supportive communities, and live with dignity without discrimination.</p>
            </div>
          </div>
        </section>
        <section className="content-section section-paper values-section">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow"><span /> Values</p>
              <h2>These values shape <br /><span>how we work.</span></h2>
            </div>
            <p className="section-aside">Our work is guided by a simple belief: health is a matter of equity, rights and dignity.</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <article className="value-card" key={value.title}>
                <span>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="people-section section-yellow">
          <p className="eyebrow"><span /> Our people</p>
          <h2>People behind <br /><em>the work.</em></h2>
          <p className="people-intro">{peopleIntro}</p>
          {peopleGroups.map((group) => (
            <div className="people-group" key={group.id}>
              <h3>{group.title}</h3>
              {group.intro && <p className="people-group-intro">{group.intro}</p>}
              <div className={`people-grid is-${group.layout}`}>
                {group.people.map((person) => <PersonCard person={person} key={person.name} />)}
              </div>
            </div>
          ))}
        </section>
      </>
    );
  } else if (path === '/our-core-values') {
    content = (
      <>
        <PageHero eyebrow="Values" title="Our Core Values" intro={valuesBelief} />
        <section className="content-section section-paper values-overview">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow"><span /> Nine values</p>
              <h2>Values</h2>
            </div>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <article className="value-card" key={value.title}>
                <span>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="content-section section-paper">
          <div className="content-grid">
            <div>
              <p className="eyebrow"><span /> How we work</p>
              <h2>How the values <br /><span>guide the work.</span></h2>
            </div>
            <p className="lead-copy">{valuesGuide}</p>
          </div>
        </section>
        <section className="content-section section-paper">
          <div className="content-grid">
            <div>
              <p className="eyebrow"><span /> Mission and vision</p>
              <h2>On the About <br /><span>page.</span></h2>
            </div>
            <div>
              <p className="lead-copy">Mission and vision are published on About. This page does not repeat those sections.</p>
              <a className="text-link" href="/about">About <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
        <section className="support section-yellow values-cta" aria-labelledby="values-cta-heading">
          <div className="support-grid">
            <h2 id="values-cta-heading">Our work and <br /><span>contact.</span></h2>
            <div className="values-cta-links">
              <a className="button button-charcoal" href="/our-work">Our work <ArrowUpRight size={18} /></a>
              <a className="button button-paper" href="/contact">Contact <ArrowUpRight size={18} /></a>
            </div>
          </div>
        </section>
      </>
    );
  } else if (path === '/approach') {
    content = (
      <>
        <PageHero eyebrow="Our approach" title={<>Start with people. <br /><em>Build with them.</em></>} intro="We listen to lived experience, learn from evidence and act together across communities, organisations and systems." dark />
        <section className="content-section section-paper">
          <p className="lead-copy approach-page-lede">Our approach is a working rhythm, not a slogan. Each step is simple on purpose: stay close to people, learn carefully, and act with others.</p>
          <ApproachSystem />
        </section>
      </>
    );
  } else if (path === '/our-work') {
    content = (
      <>
        <PageHero eyebrow="The work" title={<>Four ways we move <br /><em>towards equity.</em></>} intro="Our programme areas are shaped by community needs and informed by evidence." dark />
        <section className="content-section section-paper">
          <p className="program-index-note" role="status">Each vertical has an approved short description. Detailed programme facts are pending founder approval.</p>
          <div className="program-index-list">
            {programs.map((programItem) => (
              <article className="program-index-card" key={programItem.slug}>
                <div className={`program-index-media tone-${programItem.tone}`} style={{ backgroundImage: `url(${programItem.image})` }} role="img" aria-label={programItem.imageAlt} />
                <div className="program-index-copy">
                  <span className="program-index-number">{programItem.number}</span>
                  <h2>{programItem.title}</h2>
                  <p>{programItem.description}</p>
                  <span className="content-pending-label">{programItem.detailStatus}</span>
                  <a className="text-link" href={`/our-work/${programItem.slug}`}>Open programme page <ArrowUpRight size={17} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </>
    );
  } else if (path === '/stories') {
    content = (
      <>
        <PageHero eyebrow="Stories & insights" title="Stories & insights" intro="This page is reserved for approved community voices, research and learning, and organisation and partner updates. No stories are published yet." image={images.story.src} imageAlt={images.story.alt} imageWidth={images.story.width} imageHeight={images.story.height} priority caption="Reserved editorial space" />
        <section className="content-section section-paper stories-architecture">
          <nav className="story-category-nav" aria-label="Story categories">
            <p>Jump to a reserved category. No stories are published yet.</p>
            <div>
              {storyCategories.map((category) => (
                <a href={`#${category.id}`} key={category.id}>{category.label}</a>
              ))}
            </div>
          </nav>
          <section className="featured-story-section" aria-labelledby="featured-story-heading">
            <h2 id="featured-story-heading">Featured story</h2>
            <PendingContent>A featured piece will be chosen after a story is approved. This is not a published story.</PendingContent>
            <StoryCard item={featuredStoryPlaceholder} category={featuredStoryPlaceholder.category} featured />
          </section>
          {storyCategories.map((category) => (
            <section className="story-category" id={category.id} key={category.id}>
              <div className="story-group-head">
                <h2>{category.label}</h2>
                <span className="content-pending-label">Content pending approval</span>
              </div>
              <p className="story-category-intro">{category.intro}</p>
              <div className="story-card-grid">
                {category.cards.map((item, index) => (
                  <StoryCard item={item} category={category.label} key={`${category.id}-${index}`} />
                ))}
              </div>
            </section>
          ))}
        </section>
      </>
    );
  } else if (path === '/donate') {
    content = (
      <>
        <PageHero eyebrow="Support our work" title={<>Help make care <br /><em>more human.</em></>} intro="Your support will help Second Circle India build more accessible, inclusive and responsive systems of care." image={images.care.src} imageAlt={images.care.alt} imageWidth={images.care.width} imageHeight={images.care.height} dark priority caption="Donation workflow not active" />
        <section className="content-section section-paper">
          <div className="content-grid">
            <div>
              <p className="eyebrow"><span /> Donate</p>
              <h2>Your support <br />makes <span>space.</span></h2>
            </div>
            <div>
              <ApprovalBanner title="Donation process not published yet">
                The donation gateway, payment process, tax information and receipt details have not been approved for publication. No payment link is offered on this page.
              </ApprovalBanner>
              <p className="lead-copy">If you would like to discuss giving, contact the organisation directly.</p>
              <a className="button button-charcoal" href={`mailto:${organisation.email}`}>Discuss giving <ArrowUpRight size={18} /></a>
              <p className="policy-crosslink">See also the <a href="/donation-policy">donation policy draft</a>.</p>
            </div>
          </div>
        </section>
      </>
    );
  } else if (path === '/contact') {
    content = (
      <>
        <PageHero eyebrow="Contact" title={<>Contact <br /><em>the team.</em></>} intro="Use this page for partnerships, research and learning, programme conversations, or general enquiries. There is no contact form on the site yet." image={programs[0].image} imageAlt={programs[0].imageAlt} imageWidth={programs[0].imageWidth} imageHeight={programs[0].imageHeight} priority />
        <section className="content-section section-paper contact-page">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow"><span /> Why people write</p>
              <h2>Contact <br /><span>purpose.</span></h2>
            </div>
            <p className="section-aside">Choose a subject if it helps. Each link opens the visitor’s own email app. Nothing is sent through this website.</p>
          </div>
          <div className="contact-purpose-grid">
            {contactPurposes.map((purpose) => (
              <article className="contact-purpose-card" key={purpose.subject}>
                <h3>{purpose.label}</h3>
                <p>{purpose.note}</p>
                <a className="text-link" href={contactMailto(purpose.subject)}>Email with subject: {purpose.subject} <ArrowUpRight size={17} /></a>
              </article>
            ))}
          </div>
          <div className="contact-grid">
            <div>
              <p className="eyebrow"><span /> Reach the team</p>
              <h2>Email, phone <br /><span>and address.</span></h2>
              <address className="contact-address">
                {contactAddressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </div>
            <div className="enquiry-options">
              <a className="enquiry-option" href={contactMailto()}>
                <Mail size={18} aria-hidden="true" />
                <span>
                  <strong>Email the team</strong>
                  <span>{organisation.email}</span>
                </span>
              </a>
              <div className="enquiry-option is-static">
                <Phone size={18} aria-hidden="true" />
                <span>
                  <strong>Call the team</strong>
                  <a href={organisation.phoneHref}>{organisation.phone}</a>
                  <a href={organisation.mobileHref}>{organisation.mobile}</a>
                </span>
              </div>
            </div>
          </div>
          <section className="enquiry-form-reserved" aria-labelledby="enquiry-form-heading">
            <h2 id="enquiry-form-heading">Contact form coming soon</h2>
            <PendingContent>
              The enquiry workflow is still being finalised. This page does not collect or submit personal information. There is no form endpoint, no third-party form service, and no success message.
            </PendingContent>
          </section>
          <p className="contact-privacy-note">
            Do not send sensitive medical, legal, financial or identity information through ordinary email. Read the <a href="/privacy">Privacy Policy</a> for what this website currently does and does not collect.
          </p>
        </section>
      </>
    );
  } else if (path === '/resources') {
    content = (
      <>
        <PageHero eyebrow="Resources & transparency" title={<>Resources <br /><em>and trust.</em></>} intro="Clear, accessible information about the organisation, its work and its responsibilities." dark />
        <section className="content-section section-paper">
          <div className="resource-list">
            {resourceIndex.map((item, index) => (
              <a className="resource-row is-link" href={item.href} key={item.href}>
                <span>0{index + 1}</span>
                <strong>{item.label}</strong>
                <span className="resource-go">Open <ArrowUpRight size={16} /></span>
              </a>
            ))}
            {pendingResourceCategories.map((item, index) => (
              <div className="resource-row is-pending" key={item.label}>
                <span>0{resourceIndex.length + index + 1}</span>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.description}</p>
                </div>
                <span className="doc-status">{item.status}</span>
              </div>
            ))}
          </div>
          <PlaceholderNotice>Approved files and final legal wording will be added after founder and legal review.</PlaceholderNotice>
        </section>
      </>
    );
  } else if (path === '/resources/financial-reports') {
    content = (
      <>
        <PageHero eyebrow="Resources" title={<>Financial <br /><em>reports.</em></>} intro="Audited reports will appear here only after they are received and approved for publication." dark />
        <section className="content-section section-paper">
          <ApprovalBanner title="No reports are available to download">
            These rows describe documents that are expected, not files that can be read now. The founder has said the audited report is still awaited from the CA.
          </ApprovalBanner>
          <div className="resource-list">
            {pendingFinancialReports.map((item, index) => (
              <PendingDocumentRow item={item} index={index} key={item.label} />
            ))}
          </div>
        </section>
      </>
    );
  } else if (path === '/resources/legal-documents') {
    content = (
      <>
        <PageHero eyebrow="Resources" title={<>Legal and <br /><em>statutory documents.</em></>} intro="Incorporation, registration and other statutory records will be listed here after approval." dark />
        <section className="content-section section-paper">
          <ApprovalBanner title="Document library not published">
            Titles below are a working checklist only. No legal files are attached, and this list is not a public filing record.
          </ApprovalBanner>
          <div className="resource-list">
            {pendingLegalDocuments.map((item, index) => (
              <PendingDocumentRow item={item} index={index} key={item.label} />
            ))}
          </div>
        </section>
      </>
    );
  } else if (path === '/privacy') {
    content = <PolicyDraftPage draft={privacyDraft} />;
  } else if (path === '/donation-policy') {
    content = <PolicyDraftPage draft={donationPolicyDraft} />;
  } else {
    content = <NotFoundPage />;
  }

  return (
    <div className="site-shell">
      <PageHeader path={path} />
      <main id="main">{content}</main>
      <PageFooter path={path} />
    </div>
  );
}

function HomePage({ path }) {
  const [activeProgram, setActiveProgram] = React.useState(0);
  const selected = programs[activeProgram];

  React.useEffect(() => {
    const activeTab = document.getElementById(`program-tab-${selected.slug}`);
    if (activeTab && document.activeElement?.getAttribute('role') === 'tab') {
      activeTab.focus();
    }
  }, [selected.slug]);

  return (
    <div className="site-shell">
      <PageHeader path={path} />
      <main id="main">
        <section className="hero section-dark">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light"><span /> {organisation.legalName}</p>
            <h1>Health equity <em>with dignity.</em></h1>
            <p className="hero-lede">We work towards a more equitable health system where every person can access care, live with dignity and participate fully in their community.</p>
            <div className="hero-actions">
              <a className="button button-yellow" href="#work">Explore our work <ArrowUpRight size={18} /></a>
              <a className="text-link text-link-light" href="#support">Support Second Circle <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <figure className="hero-figure">
              <SiteImage src={images.hero.src} alt={images.hero.alt} width={images.hero.width} height={images.hero.height} priority sizes="(max-width: 800px) 100vw, 50vw" />
            </figure>
          </div>
          <div className="hero-scroll"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section className="intro section-paper" id="about">
          <div className="section-kicker"><span>01</span><span className="kicker-line" /><span>Why we exist</span></div>
          <div className="intro-grid">
            <h2>Making care more <span>accessible</span> and responsive.</h2>
            <div className="intro-body">
              <p className="lead-copy">Health, rights and dignity are connected. Our work brings together community engagement, research and advocacy to address the barriers that keep people from living healthy, dignified lives.</p>
              <a className="text-link" href="#approach">Discover our approach <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="programs section-paper" id="work">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow"><span /> The work</p>
              <h2>Four ways we move <br /><span>towards equity.</span></h2>
            </div>
            <p className="section-aside">Our programme areas are shaped by community needs and informed by evidence.</p>
          </div>
          <div className="program-layout">
            <div className="program-list" role="tablist" aria-label="Programme areas">
              {programs.map((program, index) => {
                const Icon = programIcons[program.icon];
                return (
                  <button
                    className={`program-tab ${activeProgram === index ? 'active' : ''}`}
                    type="button"
                    key={program.slug}
                    id={`program-tab-${program.slug}`}
                    onClick={() => setActiveProgram(index)}
                    role="tab"
                    aria-selected={activeProgram === index}
                    aria-controls="program-panel"
                    tabIndex={activeProgram === index ? 0 : -1}
                    onKeyDown={(event) => {
                      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                        event.preventDefault();
                        setActiveProgram((index + 1) % programs.length);
                      }
                      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                        event.preventDefault();
                        setActiveProgram((index - 1 + programs.length) % programs.length);
                      }
                    }}
                  >
                    <span className="program-number">{program.number}</span>
                    <span className="program-tab-copy"><strong>{program.title}</strong><small>{program.short}</small></span>
                    <Icon className="program-tab-icon" size={22} />
                    <ArrowUpRight className="program-arrow" size={18} />
                  </button>
                );
              })}
            </div>
            <div className={`program-feature ${selected.tone}`} style={{ backgroundImage: `url(${selected.image})` }} role="tabpanel" id="program-panel" aria-labelledby={`program-tab-${selected.slug}`}>
              <div className="feature-top"><span>{selected.number} / 04</span></div>
              <div>
                <h3>{selected.title}</h3>
                <p>{selected.description}</p>
                <a className="text-link" href={`/our-work/${selected.slug}`}>Programme details <ArrowUpRight size={17} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="approach section-charcoal" id="approach">
          <ApproachSystem />
          <div className="approach-copy">
            <p className="eyebrow eyebrow-light"><span /> Our approach</p>
            <h2>Start with people. <br /><em>Build with them.</em></h2>
            <p>We value lived experience and community knowledge. We use evidence and reflection to improve our work. We collaborate across communities, organisations and systems.</p>
            <a className="text-link text-link-light" href="/approach">See how we work <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="placeholders section-paper" id="placeholder">
          <div className="section-heading-row">
            <div><p className="eyebrow"><span /> Building in public</p><h2>Our work <br /><span>in practice.</span></h2></div>
            <p className="section-aside">The next layer of this site will bring our programmes, communities and learning to life.</p>
          </div>
          <div className="placeholder-grid">
            {homepagePending.map((card, index) => (
              <article className={`placeholder-card ${card.color}`} key={card.label}>
                <div className="placeholder-top"><span>0{index + 1}</span><span className="coming-soon">{card.status}</span></div>
                <h3>{card.label}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stories section-yellow" id="stories">
          <div className="stories-copy">
            <p className="eyebrow"><span /> Stories & insights</p>
            <h2>Change is built <br /><em>together.</em></h2>
            <p>Community voices, research, updates and partner perspectives will live here as the work grows.</p>
            <a className="button button-charcoal" href="/stories">Explore stories <ArrowUpRight size={18} /></a>
          </div>
          <figure className="story-panel">
            <SiteImage className="story-panel-photo" src={images.story.src} alt={images.story.alt} width={images.story.width} height={images.story.height} sizes="(max-width: 800px) 88vw, 40vw" />
            <figcaption className="story-panel-caption">
              <span>Reserved editorial space</span>
              <strong>Stories coming soon</strong>
            </figcaption>
          </figure>
        </section>

        <section className="support section-paper" id="support">
          <p className="eyebrow"><span /> Stay connected</p>
          <div className="support-grid">
            <h2>Help make care <br /><span>more human.</span></h2>
            <div>
              <p className="lead-copy">Your support will help Second Circle India build more accessible, inclusive and responsive systems of care.</p>
              <a className="button button-charcoal" href="/donate">Support the work <ArrowUpRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>
      <PageFooter path={path} />
    </div>
  );
}

function App() {
  const requestedPath = window.location.pathname;
  const path = resolvePath(requestedPath);
  React.useEffect(() => {
    const canonicalPath = path === '/' ? '/' : path;
    if (requestedPath !== canonicalPath) {
      window.history.replaceState(null, '', canonicalPath);
    }
    applyDocumentMeta(path);
  }, [path, requestedPath]);

  if (!isKnownRoute(path)) return <InnerPage path={path} />;
  return path === '/' ? <HomePage path={path} /> : <InnerPage path={path} />;
}

createRoot(document.getElementById('root')).render(<App />);
