import Navigation from '../components/Navigation';

const timelineItems = [
  {
    year: '2019',
    title: 'The Inception',
    text:
      'Test League was conceptualized by Talha Riaz to create an elite, highly competitive franchise cricket ecosystem where raw athletic supremacy meets high-stakes operational planning.',
    alignment: 'left',
    marker: '1',
  },
  {
    year: '2020',
    title: 'Inaugural Draft',
    text:
      'The first player auction drafted 10 contracted athletes. Team Royals claimed the inaugural trophy in a packed, electric atmosphere that set the tone for seasons to come.',
    alignment: 'right',
    marker: '2',
  },
  {
    year: '2023',
    title: 'The Invitation Era',
    text:
      'TEST LEAGUE elevated into an ultra-exclusive private tournament circuit. Admission guidelines were tightened to feature only verified, premier-tier athletic profiles. A new era of excellence began.',
    alignment: 'left',
    marker: '3',
  },
];

function ProfileCard({ id, role, title, badgeLabel, iconPath, image, imagePosition, accentClass, roleClass, quote, alt }) {
  return (
    <section className="bg-deep-card border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch" id={id}>
      <div className="md:w-2/5 relative min-h-[400px]">
        <img
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-top grayscale-image"
          src={image}
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deep-card" />
      </div>

      <div className="md:w-3/5 p-12 flex flex-col justify-center">
        <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${roleClass}`}>{role}</p>
        <h2 className="profile-title mb-4">{title}</h2>
        <div className="mb-6">
          <span className={`inline-flex items-center gap-2 text-[10px] font-bold px-3 py-1.5 rounded-md border uppercase tracking-widest ${accentClass}`}>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d={iconPath} />
            </svg>
            {badgeLabel}
          </span>
        </div>
        <p className="text-gray-400 italic text-sm leading-relaxed max-w-lg">{quote}</p>
      </div>
    </section>
  );
}

function TimelineItem({ year, title, text, alignment, marker }) {
  const isLeft = alignment === 'left';

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
      <div className={`md:w-[45%] ${isLeft ? 'text-right pr-0 md:pr-12 order-2 md:order-1 mt-8 md:mt-0' : 'order-2 md:order-1'}`}>
        {isLeft ? (
          <div className="bg-deep-card p-6 rounded-xl border border-white/5 inline-block text-right">
            <span className="text-blue-400 text-[10px] font-bold tracking-widest">{year}</span>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs ml-auto">{text}</p>
          </div>
        ) : null}
      </div>

      <div className="w-8 h-8 rounded-full bg-obsidian border-2 border-gray-700 flex items-center justify-center text-[10px] font-bold order-1 md:order-2">
        {marker}
      </div>

      <div className={`md:w-[45%] ${isLeft ? 'order-3' : 'pl-0 md:pl-12 order-3 mt-8 md:mt-0'}`}>
        {!isLeft ? (
          <div className="bg-deep-card p-6 rounded-xl border border-white/5 inline-block text-left">
            <span className="text-blue-400 text-[10px] font-bold tracking-widest">{year}</span>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">{text}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function LegacyFooter() {
  return (
    <footer className="py-20 text-center opacity-20 text-[10px] uppercase tracking-[0.5em]" data-purpose="footer">
      End of Legacy Timeline
    </footer>
  );
}

export default function LegacyPage() {
  return (
    <div className="w-full bg-obsidian text-white font-sans antialiased overflow-x-hidden flex flex-col">
      <Navigation activePage="legacy" />

      <header className="pt-40 pb-20 text-center px-4" data-purpose="main-hero">
        <h1 className="text-4xl md:text-5xl font-black tracking-[0.3em] uppercase mb-6 text-outline">The Legacy of Test League</h1>
        <p className="max-w-xl mx-auto text-gray-400 text-sm leading-relaxed font-light italic">
          An elite invitation-only framework engineering the standard of modern franchise cricket.
        </p>
      </header>

      <main className="w-full max-w-[80vw] mx-auto px-4 space-y-12">
        <ProfileCard
          id="founder"
          alt="Talha Riaz"
          accentClass="bg-blue-900/30 text-blue-400 border-blue-800/50"
          badgeLabel="Right-Arm Fast Bowler"
          iconPath="M13 10V3L4 14h7v7l9-11h-7z"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDiYdEP8ktIkrBO6coKflyibguNRyIAICfJh5zhAINDi9OSBLLQXstnDx2JdTCLRTzmyvxvhi2j9_xR4amBTB3dBMTCdNMVMG23BZLcDTzUfpuvpSkD-sGHSpjCMVu2c1DIuMlYcsJCR30NG6deVVDGCucuRTXmQGkUTAOHwKCOAB9jo9xOsTDQ37ackw48so9h3QKaW3tvf7D2mqwv2vyP4pqhcUMqUV6hWTL69y69S1kaaoX_DFqk-vobh5Nu-z3aXj8ePr3uHfzx"
          imagePosition="center 20%"
          quote="TEST LEAGUE was structured to fulfill a singular commitment: designing a private, prestigious matrix where raw athletic supremacy meets high-stakes operational planning. We ensure elite visibility across every single delivery."
          role="Founder & Executive League Owner"
          roleClass="text-gold-accent"
          title="Talha Riaz"
        />

        <ProfileCard
          alt="Muhammad Muzammil"
          accentClass="bg-purple-900/30 text-purple-400 border-purple-800/50"
          badgeLabel="All-Rounder"
          iconPath="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCC9u5j8A61rwruQCIE2X7QeziwMpt2DQKaSgYvkjXeE7KPZqXFqWOXskaiMRyD87yoIFQPuAsWihwAk-z75_5HBzd7vES7BrsxW986JM3hot6RyO7yAImlU0uY5tw7rd8cuU50RVjYlGSUdkhq8d5izorKa8SacAMKcjAC9e2HH-Ut-Vy--d5ck4FIPso7cLk8iUW_CmbgIy7WIRT7UikmBDFxmqRUP4f7hPryWIqpnan5_ZjRaID_yqxQq-Edekgp1FlvEbHeqfEg"
          imagePosition="center 60%"
          quote="Commanding structural integration across operations, player coordination, and franchise relations. Bringing elite all-round on-field expertise to executive system governance to preserve absolute competitive parity across the draft board."
          role="General Manager"
          roleClass="text-blue-400"
          title="Muhammad Muzammil"
        />

        <section className="section-padding relative" data-purpose="history-timeline" id="history">
          <div className="timeline-line" />
          <div className="space-y-24 relative z-10">
            {timelineItems.map((item) => (
              <TimelineItem key={item.year} {...item} />
            ))}
          </div>
        </section>
      </main>

      <LegacyFooter />
    </div>
  );
}