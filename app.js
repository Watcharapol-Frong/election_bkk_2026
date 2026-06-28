// ==========================================================================
// TRANSLATION ENGINE & DATA DICTIONARY
// ==========================================================================
const TRANSLATIONS_EN = {
  brand: 'BKK Governor Election 2026',
  tabOverview: 'Overview',
  tabTimeline: 'Timeline',
  tabEligible: 'Eligibility',
  tabHowto: 'How to vote',
  tabCandidates: 'Candidates',
  tabPolicy: 'Policies',
  tabResults: 'Results',
  kicker: 'ELECTION · LOCAL VOTE',
  heroL1: 'Governor Election',
  heroL2: 'of Bangkok',
  heroPara: "On Sunday 28 June 2026, over 4.4 million Bangkokians will head to the polls to choose the capital's new leader. This guide covers everything you need to know — from preparation and how to vote, to the candidates and their policies.",
  dateLabel: 'Election day',
  dateUnit: ' Jun',
  dateYear: 'B.E. 2569',
  timeLabel: 'Voting hours',
  timeUnit: ' hrs',
  timeSub: 'at polling stations',
  s01title: 'Election Overview',
  s01para: "The Governor of Bangkok is directly elected by the people for a four-year term, managing the capital's budget and public services.",
  stat1unit: ' M',
  stat1label: 'Eligible voters (approx.)',
  stat2label: 'Districts across Bangkok',
  stat3label: 'Polling stations',
  stat4unit: ' yrs',
  stat4label: 'Term length',
  s02title: 'Election Timeline Calendar',
  s02para: 'Key milestones for voters leading up to and after election day.',
  t1time: '17 June 2026',
  t1label: 'Voter List Corrections Deadline',
  t1desc: 'Last day to add or remove names if registry errors are found',
  t2time: '21–27 June 2026',
  t2label: 'Pre-Election Absence Filing',
  t2desc: 'Submit a notice if you know you cannot vote on election day',
  t3time: '28 June 2026',
  t3label: 'BKK Election Day',
  t3desc: 'Cast your ballot at your designated polling station (08:00 - 17:00)',
  t4time: '29 Jun – 5 Jul 2026',
  t4label: 'Post-Election Absence Filing',
  t4desc: 'Submit absence notice within 7 days after the vote to preserve rights',
  s03title: 'Who Can Vote?',
  eligibleTitle: 'Voter Eligibility',
  eligibleSub: 'Eligible voters must satisfy all 3 criteria:',
  e1t: 'Thai nationality',
  e1d: 'Or naturalized for at least 5 years',
  e2t: 'At least 18 years old',
  e2d: 'Counting up to election day, 28 June 2026',
  e3t: 'Registered in a Bangkok household',
  e3d: 'For at least 1 continuous year before the vote',
  docTitle: 'Identification Documents',
  docPara: 'Show one of the following 3 types of valid ID to officials:',
  docCat1Title: 'National ID Card',
  docCat1Desc: '(Expired card is also acceptable)',
  docCat2Title: 'Other Government-Issued IDs',
  docCat2Desc: '(Must be valid/not expired. e.g., Driver\'s license, state official card, passport)',
  docCat3Title: 'Digital Identification',
  docCat3Desc: '(Via state applications. e.g., ThaiID, DLT QR LICENCE, PWD)',
  s04title: 'How to Vote — 5 Steps',
  st1t: 'Check the roll',
  st1d: 'Verify your name and listing number from the lists posted in front of the polling station',
  st2t: 'Show identification',
  st2d: 'Present your National ID, government ID, or digital ID, then sign/print your thumbprint',
  st3t: 'Receive ballots',
  st3d: 'Sign the ballot stubs and receive 2 ballots: Bangkok Governor and BKK Council (ส.ก.)',
  st4t: 'Mark your ballot',
  st4d: 'Enter the booth and mark ✕ for 1 governor and 1 council candidate (or "No Vote"), then fold them',
  st5t: 'Cast your vote',
  st5d: 'Drop the folded ballots into the ballot box yourself in front of election staff',
  btnCheckPortal: 'Check Voter Registration (Bureau of Registration Administration)',
  btnMapPortal: 'Find Polling Station (BKK VMAP)',
  ballotHead: 'Bangkok Governor Ballot',
  ballotN1: 'No. 1',
  ballotN1r: 'Candidate',
  ballotN2: 'No. 2',
  ballotN2r: 'Pick one',
  ballotWarnTitle: 'Mark only "one" box',
  ballotWarnBody: 'Marking more than one box, crossing out, or writing anything else makes it a <strong style="color:#C8102E;">spoiled ballot</strong> that will not be counted.',
  ballotNote: '*Mockup ballot for illustrative purposes. Actual format determined by the EC.',
  s06title: 'Candidates & Stances',
  s06para: "Meet the key candidates for Bangkok Governor and their primary campaign stances.",
  councilCandidatesBtn: '📋 View Bangkok Council (ส.ก.) Candidates List',
  c1name: 'M.L. Kornkasiwat Kasemsri',
  c1party: 'Independent (No. 1)',
  c1desc: 'Focuses on cyber-security, smart camera networks, and AI-controlled traffic across 578 intersections.',
  c2name: 'Samai Lalert',
  c2party: 'Independent (No. 2)',
  c2desc: 'Focuses on connecting feeders to main rail lines, digital flood forecasting, and creating dust-free school zones.',
  c3name: 'Anucha Burapachaisri',
  c3party: 'Democrat Party (No. 5)',
  c3desc: 'Advocates transferring BMTA buses to BKK, introducing EV Shuttle Buses, and using the "Song Rat" app for transparency.',
  c4name: 'Chadchart Sittipunt',
  c4party: 'Independent (No. 9)',
  c4desc: 'Prioritizes community systems, reform of the Gold Card healthcare system in BKK, and cleaning up corruption via Traffy Fondue.',
  c5name: 'Chaiwat Sathawornwijit',
  c5party: "People's Party (No. 10)",
  c5desc: 'Promotes "Simple Bangkok" by hiring 5,000 elder-care workers, real-time transit data, and 0% pawnshop interest.',
  c6name: 'Pol.Lt.Gen. Chanthep Sesavej',
  c6party: 'Economy Party (No. 12)',
  c6desc: 'Focuses on safety and public integrity, Plasma Arc high-heat waste processing, and street-food zoning.',
  s07title: 'Compare Standout Policies',
  compareLabelA: 'First Candidate',
  compareLabelB: 'Second Candidate',
  filterAll: 'All Candidates',
  filterB1: 'No. 1',
  filterB5: 'No. 5',
  filterB9: 'No. 9',
  filterB10: 'No. 10',
  ph0: 'Policy Domain',
  ph1: 'No. 1 (Kornkasiwat)',
  ph2: 'No. 5 (Anucha)',
  ph3: 'No. 9 (Chadchart)',
  ph4: 'No. 10 (Chaiwat)',
  r1label: '🚇 Transit & Traffic',
  r1c1: 'AI-driven traffic signal synchronization across 578 intersections.',
  r1c2: 'Transfer BMTA to BKK to implement a unified Single Ticket system.',
  r1c3: 'FAR floor area bonuses to developers who connect dead-end alleys.',
  r1c4: 'Smart shuttle buses in underserviced spots and 50% early-morning fares.',
  r2label: '🌧️ Water & Floods',
  r2c1: 'Integrate drainage canals with smart water-level sensors.',
  r2c2: 'Dredge neighborhood-level capillary pipes and bridge district lines.',
  r2c3: 'Dredge hundreds of kilometers of sewers and repair river walls annually.',
  r2c4: 'Real-time flood alerts on app and intelligent retention basins.',
  r3label: '🌳 Env & Health',
  r3c1: '"Waste to Wealth" circular economy to fund local welfare.',
  r3c2: 'Transition all public and school shuttles to EVs to reduce PM2.5.',
  r3c3: 'Household-level waste sorting and transparent emission tracing.',
  r3c4: 'Decentralize Gold Card healthcare to BKK to cut referral delays.',
  r4label: '💼 Economy & Services',
  r4c1: 'BKK 24/7 digital community market to support micro-vendors.',
  r4c2: 'Hotel tax on foreign tourists dedicated to local community upgrades.',
  r4c3: 'Traffy Fondue app to crowd-source and direct local repairs.',
  r4c4: 'BKK Lottery Receipts for local SMEs and 5,000 elder-care jobs.',
  policyNote: '* Policy comparison is synthesized from candidates\' official campaign frameworks.',
  s05title: 'Counting & Results',
  s05para: 'When polls close at 17:00, officials count openly at each station, then report district and citywide totals. We are currently counting down to election day:',
  cdDaysLabel: 'Days',
  cdHoursLabel: 'Hours',
  cdMinutesLabel: 'Minutes',
  cdSecondsLabel: 'Seconds',
  footBrand: 'BKK Governor Election · 28 June 2026',
  footAbout: 'An independent website for following the Bangkok Governor and BKK Metropolitan Council (ส.ก.) elections in 2026, built for educational purposes and public convenience.',
  footLicense: 'Published under Creative Commons license',
  footSourcesTitle: 'Data Sources',
  footLegalTitle: 'Terms & Policy',
  footDisc: 'Educational website & demonstration. Candidate profiles and policies are compiled from media reports and official campaign channels. Details may vary; please refer to the official EC guidelines.',
  footPrivacy: '🔒 This website does not collect any personal data from visitors.',
  footCopy: '© 2026 Bangkok Vote · For Educational Use · Not an official ECT website'
};

const CANDIDATES_DATA = [
  {
    no: 1,
    nameTh: 'ม.ล.กรกสิวัฒน์ เกษมศรี',
    nameEn: 'M.L. Kornkasiwat Kasemsri',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'โครงการเปลี่ยนขยะเป็นรายได้หมุนเวียน (Waste to Wealth) แปรรูปขยะแปรรูปคาร์บอนเครดิตกลับคืนเป็นสวัสดิการชุมชน',
    descEn: '"Waste to Wealth" initiative: generating and monetizing carbon credits from waste to fund public welfare.',
    color: 'yellow',
    avatar: 'KK'
  },
  {
    no: 2,
    nameTh: 'นายสมัย ละเลิศ',
    nameEn: 'Samai Lalert',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'ติดตั้งไฟและกล้องวงจรปิดรอบซอยเปลี่ยวและจุดเสี่ยงรอบโรงเรียนเพื่อลดอาชญากรรมระดับชุมชน',
    descEn: 'Systematically lighting up all high-risk blind alleys and school surroundings to reduce local crime.',
    color: 'blue',
    avatar: 'SM'
  },
  {
    no: 3,
    nameTh: 'นายพงษ์ศักดิ์ พัวพรพงษ์',
    nameEn: 'Pongsak Puapornpong',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'ติดตั้งตู้แจ้งเหตุฉุกเฉินอัจฉริยะ (Security Phone) 100,000 จุดทั่วเมืองเชื่อมโยง AI แจ้งเตือนภัยและภัยพิบัติทันที',
    descEn: 'Deploying 100,000 AI-connected emergency intercoms across BKK for real-time disaster alerts.',
    color: 'purple',
    avatar: 'PP'
  },
  {
    no: 4,
    nameTh: 'นายประทีป วัชรโชคเกษม',
    nameEn: 'Prateep Watcharachokekasem',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'ก่อสร้างเขื่อนและถนนเลียบชายฝั่งป้องกันปัญหาน้ำทะเลหนุนและวิกฤตกรุงเทพฯ จมตามโมเดลเนเธอร์แลนด์',
    descEn: 'Building coastal sea walls and road systems modeled on the Dutch Delta Works to permanently stop sea level rise.',
    color: 'light',
    avatar: 'PW'
  },
  {
    no: 5,
    nameTh: 'นายอนุชา บูรพชัยศรี',
    nameEn: 'Anucha Burapachaisri',
    partyTh: 'พรรคประชาธิปัตย์',
    partyEn: 'Democrat Party',
    descTh: 'โอนย้าย ขสมก. เข้าสังกัด กทม. เพื่อบูรณาการระบบตั๋วร่วมค่าโดยสารใบเดียวประหยัดค่าเดินทางคนกรุง',
    descEn: 'Transferring BMTA buses directly to BKK to synchronize routes and implement a true Single Ticket system.',
    color: 'blue',
    avatar: 'AB'
  },
  {
    no: 6,
    nameTh: 'นายพิศาล กิตติเยาวมาลย์',
    nameEn: 'Phisan Kittiyaowamal',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'ยกเลิกถังขยะข้างทางถาวรเพื่อสุขอนามัย โดยให้ทิ้งตรงกับรถเคลื่อนที่เก็บขยะความถี่สูงตามเวลาที่กำหนด',
    descEn: 'Abolishing curbside trash bins, requiring citizens to hand waste directly to scheduled collection vehicles.',
    color: 'teal',
    avatar: 'PK'
  },
  {
    no: 7,
    nameTh: 'นายภาสพงศ์ ไชยวิริยะวาณิชย์',
    nameEn: 'Passapong Chaiwiriyawanich',
    partyTh: 'กลุ่มกรุงเทพบินได้',
    partyEn: 'Fly Bangkok Group',
    descTh: 'เข้าซื้อหุ้นและสิทธิ์บริหารรถไฟฟ้าบีทีเอสสายสีเขียวหลังหมดสัญญาปี 2572 เพื่อจัดโปรโมชันลดราคาสำหรับคนจน',
    descEn: 'Acquiring BKK equity in the BTS Green Line post-concession (2029) to artificially reduce fare prices.',
    color: 'orange',
    avatar: 'PC'
  },
  {
    no: 8,
    nameTh: 'นายวีรพจน์ ลือประสิทธิ์สกุล',
    nameEn: 'Weerapot Luerprasitsakul',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'ระบบคัดกรอง วางแผนครอบครัว และประสานการดูแลสุขภาพสตรีฟรีทั่ว กทม. ด้วยระบบ AI วิเคราะห์ข้อมูล',
    descEn: 'Universally integrating BKK hospitals via an AI framework to manage family planning and women\'s care.',
    color: 'purple',
    avatar: 'WL'
  },
  {
    no: 9,
    nameTh: 'นายชัชชาติ สิทธิพันธุ์',
    nameEn: 'Chadchart Sittipunt',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'เพิ่มโบนัส FAR สัดส่วนอาคารให้เอกชน แลกสิทธิ์ยอมเปิดทางเชื่อมซอยตันเพื่อช่วยบรรเทาปัญหาจราจรติดขัด',
    descEn: 'Offering floor area ratio (FAR) bonuses to developers in exchange for public access through dead-end sois.',
    color: 'teal',
    avatar: 'CS'
  },
  {
    no: 10,
    nameTh: 'นายชัยวัฒน์ สถาวรวิจิตร',
    nameEn: 'Chaiwat Sathawornwijit',
    partyTh: 'พรรคประชาชน',
    partyEn: "People's Party",
    descTh: 'โอนโควตาหลักประกันสุขภาพ (บัตรทอง) 1 ล้านสิทธิ์มาอยู่ใต้ กทม. เพื่อแก้ปัญหาส่งตัวช้าและรักษาไม่ทันการณ์',
    descEn: 'Decentralizing the Universal Healthcare (Gold Card) quota directly under BKK to eliminate referral delays.',
    color: 'orange',
    avatar: 'CW'
  },
  {
    no: 11,
    nameTh: 'นายประยูร ครองยศ',
    nameEn: 'Prayoon Krongyot',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'ยึดคืนพื้นที่รกร้างและอาคารร้างที่ถูกปล่อยทิ้งในกรุงเทพฯ นำมาปรับปรุงเป็นลานกีฬาและสวนสาธารณะสว่างปลอดภัย',
    descEn: 'Systematically seizing and converting all abandoned properties or derelict lots into secure public assets.',
    color: 'light',
    avatar: 'PK'
  },
  {
    no: 12,
    nameTh: 'พล.ต.ท.ชาญเทพ เสสะเวช',
    nameEn: 'Pol.Lt.Gen. Chanthep Sesavej',
    partyTh: 'พรรคเศรษฐกิจ',
    partyEn: 'Economy Party',
    descTh: 'แปรรูปขยะมูลฝอยด้วยความร้อนสูงระบบปิด Plasma Arc สะอาดไร้มลพิษ เพื่อยกเลิกค่าเก็บขยะของประชาชน',
    descEn: 'Vaporizing waste via high-heat Plasma Arc gasification to generate energy and abolish trash fees.',
    color: 'red',
    avatar: 'CS'
  },
  {
    no: 13,
    nameTh: 'นายคมสัน พันธุ์วิชาติกุล',
    nameEn: 'Komsan Phunwichatikul',
    partyTh: 'กลุ่ม Move on 3D',
    partyEn: 'Move on 3D Group',
    descTh: 'ระบบสะสมยอดเดินเท้า (Sweat to Points) เปลี่ยนพลังก้าวเดินเป็นแต้มแลกตั๋วรถไฟฟ้าสาธารณะช่วยประหยัดเงิน',
    descEn: 'A "Sweat to Points" program converting fitness tracker steps into public transit discounts and subsidies.',
    color: 'blue',
    avatar: 'KP'
  },
  {
    no: 14,
    nameTh: 'นางมัลลิกา บุญมีตระกูล มหาสุข',
    nameEn: 'Mallika Boonmeetrakool Mahasuk',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'ส่งเสริมเศรษฐกิจท่องเที่ยววัฒนธรรม 24 ชม. และลดหย่อนอัตราภาษีป้ายและค่าธรรมเนียมช่วยเหลือผู้ประกอบการ SMEs',
    descEn: 'Promotes 24h cultural tourism, street food, and sign tax relief for local SMEs.',
    color: 'purple',
    avatar: 'MM'
  },
  {
    no: 15,
    nameTh: 'นายโอฬาร ตั้งตราตระกูล',
    nameEn: 'Olar Tangtratrakul',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'เน้นขุดลอกลุ่มแม่น้ำ จัดการระบายน้ำเสีย และเชื่อมระบบสถานีสูบน้ำฝั่งตะวันออกรอบรอยต่อกรุงเทพฯ',
    descEn: 'Focuses on drainage systems, wastewater management, and connecting border district pump stations.',
    color: 'teal',
    avatar: 'OT'
  },
  {
    no: 16,
    nameTh: 'น.ส.ศรีรัฏฐ์ ช่างเพ็ชร',
    nameEn: 'Srirat Changphet',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'มุ่งมั่นปฏิรูประบบจัดการ กทม. ให้คล่องตัวเป็นอิสระจากระเบียบข้อบังคับที่ล้าหลังของกระทรวงส่วนกลาง',
    descEn: 'Legally decoupling BKK operational mechanisms from national ministries to ensure private-sector-like speed.',
    color: 'yellow',
    avatar: 'SC'
  },
  {
    no: 17,
    nameTh: 'น.ส.ลลนา มงคลหัสดินทร์',
    nameEn: 'Lallana Mongkolhasdin',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'จัดตั้งกองทุนสวัสดิการระดับชุมชนและผู้ประกอบอาชีพอิสระ ดูแลสิทธิพื้นฐานกลุ่มเปราะบางในกรุงเทพฯ',
    descEn: 'Establishing inclusive community-led social welfare funds targeting slum dwellers and informal workers.',
    color: 'orange',
    avatar: 'LM'
  },
  {
    no: 18,
    nameTh: 'นายสมชัย เจริญวรเกียรติ',
    nameEn: 'Somchai Charoenwonkiat',
    partyTh: 'ผู้สมัครอิสระ',
    partyEn: 'Independent',
    descTh: 'เปิดระบบ Sharing Economy ให้ประชาชนกู้ยืมเครื่องมือเครื่องจักร กทม. และเช่าที่ดินรกร้างราคาถูกสร้างอาชีพ',
    descEn: 'Allowing citizens to borrow BKK heavy machinery and lease unused municipal lands for local startups.',
    color: 'light',
    avatar: 'SC'
  }
];

function renderCandidates(lang) {
  const track = document.getElementById('candidate-track');
  if (!track) return;

  track.innerHTML = '';
  const isEn = lang === 'en';

  CANDIDATES_DATA.forEach((c) => {
    const card = document.createElement('div');
    card.className = 'candidate-card';

    const name = isEn ? c.nameEn : c.nameTh;
    const party = isEn ? c.partyEn : c.partyTh;
    const desc = isEn ? c.descEn : c.descTh;

    card.innerHTML = `
      <div class="candidate-photo-wrapper">
        <span class="candidate-number-badge badge-${c.color}">${c.no}</span>
        <img
          class="candidate-photo"
          src="candidates/no-${c.no}.jpg"
          alt="${name}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="candidate-photo-placeholder" style="display:none;">${c.avatar}</div>
      </div>
      <div class="candidate-profile-info">
        <div class="candidate-name">${name}</div>
        <div class="candidate-party">${party}</div>
      </div>
      <p class="candidate-desc">${desc}</p>
    `;
    track.appendChild(card);
  });
}

const POLICY_COMPARISON_DATA = {
  1: {
    transitTh: 'ซิงโครไนซ์ 578 ทางแยกด้วย AI เพื่อปล่อยรถตามปริมาณจราจรจริง',
    transitEn: 'Synchronize 578 intersections with AI flow optimization.',
    floodTh: 'บูรณาการคลองระบายน้ำคู่กับระบบเซ็นเซอร์อัจฉริยะ',
    floodEn: 'Integrate drainage canals with smart water sensors.',
    envTh: 'แปรรูปขยะมูลฝอยหมุนเวียน (Waste to Wealth) สร้างสวัสดิการชุมชน',
    envEn: '"Waste to Wealth" circular economy to fund community welfare.',
    econTh: 'ตลาดดิจิทัล BKK 24/7 กระตุ้นเศรษฐกิจท้องถิ่น',
    econEn: 'BKK 24/7 digital marketplace for micro-vendors.'
  },
  2: {
    transitTh: 'เชื่อมต่อระบบขนส่งสาธารณะขนาดรอง (Feeder) เข้ากับรถไฟฟ้าสายหลัก',
    transitEn: 'Connect feeder transit links to primary electric rail routes.',
    floodTh: 'แผนที่พยากรณ์น้ำท่วมระดับย่านดิจิทัลเพื่อแก้ปัญหาจุดเสี่ยงน้ำท่วมขัง',
    floodEn: 'Neighborhood-level digital flood forecasting for low-lying areas.',
    envTh: 'เขตโรงเรียนปลอดฝุ่น PM 2.5 ปรับเปลี่ยนขบวนรถสัญจรโรงเรียน',
    envEn: 'Dust-free school zones with localized PM 2.5 air filtration.',
    econTh: 'จัดตั้งกองทุนส่งเสริมผู้ประกอบการระดับชุมชนและตลาดชุมชน',
    econEn: 'Establish localized occupational funds for micro-retailers.'
  },
  3: {
    transitTh: 'บูรณาการเครือข่ายกล้องวงจรปิดด้วย AI เพื่อประมวลผลจราจรแบบเรียลไทม์',
    transitEn: 'AI-driven CCTV integration for real-time traffic flow intelligence.',
    floodTh: 'เซ็นเซอร์พยากรณ์น้ำท่วมขังระดับถนนและสิ่งกีดขวางการระบายน้ำ',
    floodEn: 'Deploy rain-flooding sensors along metropolitan streets.',
    envTh: 'พัฒนาและเพิ่มพื้นที่สีเขียวขนาดใหญ่ในพื้นที่ชั้นในของกรุงเทพฯ',
    envEn: 'Expand large-scale urban green spaces in the inner city.',
    econTh: 'ติดตั้งตู้สองทาง (Security Phone) 100,000 จุดทั่วเมืองเพื่อช่วยรายงานปัญหา',
    econEn: 'Deploy 100,000 AI-connected emergency intercoms for public requests.'
  },
  4: {
    transitTh: 'ปรับปรุงระบบขนส่งระดับเขตและซ่อมแซมเส้นทางชำรุดเชิงรุก',
    transitEn: 'Enhance district-level transport and proactively repair damaged roads.',
    floodTh: 'ก่อสร้างกำแพงกั้นน้ำทะเลหนุนและถนนเลียบอ่าวไทยตามโมเดล Delta Works',
    floodEn: 'Build Gulf of Thailand sea walls modeled on the Dutch Delta Works.',
    envTh: 'ติดตั้งเครื่องฟอกอากาศยักษ์พร้อมสปริงเกอร์น้ำพ่นดักจับฝุ่นละออง PM 2.5',
    envEn: 'Install industrial-scale air purifiers and water mist sprayers.',
    econTh: 'ก่อสร้างศูนย์ดูแลเด็กแรกเกิด 50 เขตเพื่อช่วยเหลือคุณแม่วัยทำงาน',
    econEn: 'Build 50 district newborn care centers for working mothers.'
  },
  5: {
    transitTh: 'โอนย้าย ขสมก. เข้าสังกัด กทม. เพื่อบูรณาการระบบตั๋วร่วมค่าโดยสารใบเดียว',
    transitEn: 'Transfer BMTA to BKK to implement a unified Single Ticket system.',
    floodTh: 'ขุดลอกท่อเส้นเลือดฝอยระดับชุมชน และเชื่อมต่อท่อระบายน้ำข้ามเขต',
    floodEn: 'Dredge neighborhood-level capillary pipes and bridge district lines.',
    envTh: 'ปรับเปลี่ยนรถโรงเรียนและรถสาธารณะเป็นไฟฟ้า (EV) เพื่อลดฝุ่น PM2.5',
    envEn: 'Transition all public and school shuttles to EVs to reduce PM2.5.',
    econTh: 'จัดเก็บภาษีโรงแรม (Hotel Tax) จากชาวต่างชาติ นำเงินมาพัฒนาชุมชน',
    econEn: 'Hotel tax on foreign tourists dedicated to local community upgrades.'
  },
  6: {
    transitTh: 'จัดระเบียบการจอดรถริมถนน ปล่อยเลนทางเท้ากว้างสำหรับคนเดิน',
    transitEn: 'Ban roadside parking on transit routes to optimize walking lanes.',
    floodTh: 'เคลียร์ผักตบชวาและขุดลอกคูคลองในพื้นที่น้ำหลากตลอดทั้งปี',
    floodEn: 'Year-round canal weeding and channel clearing in floodways.',
    envTh: 'ยกเลิกถังขยะข้างทางถาวรเพื่อสุขอนามัย โดยให้ทิ้งตรงกับรถเคลื่อนที่',
    envEn: 'Abolish curbside trash bins, requiring direct handovers to waste vehicles.',
    econTh: 'จัดพื้นที่ขายสตรีทฟู้ดในสวนสาธารณะเป็นระบบ 2 ช่วงเวลา',
    econEn: 'Zone street food stalls in public parks during specific morning/evening slots.'
  },
  7: {
    transitTh: 'เตรียมเส้นทางบิน (Vertiport) รองรับเทคโนโลยีแท็กซี่บินได้ในอนาคต',
    transitEn: 'Prepare vertiports and regulations for future eVTOL air taxis.',
    floodTh: 'อุโมงค์ยักษ์และทางระบายน้ำเชื่อมลุ่มน้ำรอบเมืองระบายสู่ทะเล',
    floodEn: 'Mega-tunnels and bypass channels routing city runoff to the sea.',
    envTh: 'ยกเลิกค่าธรรมเนียมเก็บขยะสำหรับครัวเรือนที่เข้าร่วมการคัดแยกขยะ',
    envEn: 'Waive trash fees for families participating in sorting schemes.',
    econTh: 'ซื้อคืนหุ้นบีทีเอสสายสีเขียวหลังปี 2572 เพื่อลดราคาค่าโดยสารช่วยคนจน',
    econEn: 'Acquire BTS Green Line equity by 2029 to lower fares for the poor.'
  },
  8: {
    transitTh: 'ใช้ระบบ AI คุมสัญญาณไฟควบคุมปริมาณรถแทนระบบตั้งเวลา',
    transitEn: 'Deploy adaptive AI signals to direct traffic based on live volume.',
    floodTh: 'สร้างพื้นที่หน่วงน้ำใต้ดินระดับชุมชนลดผลกระทบน้ำรอระบาย',
    floodEn: 'Construct community-level subsurface retention pools to store floodwaters.',
    envTh: 'ติดตั้ง HEPA ฟิลเตอร์ระบบฟอกอากาศในโรงเรียนของ กทม. ทั้งหมด',
    envEn: 'Install hospital-grade HEPA filters in all municipal classrooms.',
    econTh: 'ระบบคัดกรอง วางแผนครอบครัว และดูแลสุขภาพสตรีฟรีทั่ว กทม. ด้วย AI',
    econEn: 'AI-assisted family planning and free women\'s clinical care networks.'
  },
  9: {
    transitTh: 'เพิ่มโบนัส FAR สัดส่วนอาคารให้เอกชน แลกสิทธิ์เปิดทางเชื่อมซอยตัน',
    transitEn: 'Offering floor area ratio (FAR) bonuses to developers who connect dead-end sois.',
    floodTh: 'ขุดลอกคูคลองและทำคันกั้นน้ำป้องกันพื้นที่ลุ่มต่ำริมฝั่งแม่น้ำ',
    floodEn: 'Systematically dredge canals and repair protective dykes along the river.',
    envTh: 'รณรงค์คัดแยกขยะตั้งแต่ครัวเรือน ขยายพื้นที่สีเขียวสวน 15 นาที',
    envEn: 'Campaign for household sorting and expand 15-min pocket parks.',
    econTh: 'ใช้แอปพลิเคชัน Traffy Fondue รับแจ้งปัญหาชุมชนและสั่งแก้ระดับเส้นเลือดฝอย',
    econEn: 'Use Traffy Fondue app to crowd-source and direct local repairs.'
  },
  10: {
    transitTh: 'จัดเส้นทางรถเมล์เติมเต็มรอยต่อ เดินรถฟรีค่าบริการสำหรับเด็กนักเรียน',
    transitEn: 'Add feeder shuttle routes and offer free school bus transit.',
    floodTh: 'แบบจำลองเส้นทางน้ำระดับย่านเรียลไทม์เพื่อเตือนภัยประชาชน',
    floodEn: 'Run real-time local flooding path model alerts on mobile devices.',
    envTh: 'โอนงบหลักประกันสุขภาพ (บัตรทอง) 1 ล้านสิทธิ์มาอยู่ใต้ กทม. แก้ใบส่งตัวช้า',
    envEn: 'Decentralize 1 million Gold Card health quotas directly to BKK clinics.',
    econTh: 'หวยใบเสร็จ กทม. เพื่อกระตุ้นร้านค้าย่อย SMEs และจ้างนักบริบาล 5,000 อัตรา',
    econEn: 'Introduce BKK Lottery Receipts for SMEs and hire 5,000 caregivers.'
  },
  11: {
    transitTh: 'ปรับปรุงช่องทางเดินเท้า ปราศจากสิ่งกีดขวางและมีความสม่ำเสมอทั่วกัน',
    transitEn: 'Design standardized, barrier-free sidewalks across major zones.',
    floodTh: 'ปรับปรุงแก้มลิงธรรมชาติและสถานีสูบน้ำฝั่งตะวันออกรอบปริมณฑล',
    floodEn: 'Rehabilitate natural retention areas and east-side pumping stations.',
    envTh: 'พลิกฟื้นพื้นที่ร้างขยะปฏิกูลในเขตชุมชนสู่สวนย่อมและจุดทิ้งขยะปลอดภัย',
    envEn: 'Convert illegal dumping lots into clean neighborhood collection spots.',
    econTh: 'ดึงผู้เชี่ยวชาญจาก ฟินแลนด์ ญี่ปุ่น สหรัฐฯ ปรับหลักสูตรสองภาษา กทม.',
    econEn: 'Recruits education experts from Finland/US/Japan for bilingual curriculum.'
  },
  12: {
    transitTh: 'ติดตั้งระบบกล้อง AI อัจฉริยะตรวจจับความเร็วและการจราจรทางร่วมแยก',
    transitEn: 'Install intelligent speed and gridlock enforcement AI cameras.',
    floodTh: 'ซ่อมแซมแนวป้องกันตลิ่งทรุดตัวตามชุมชนริมคลอง',
    floodEn: 'Reinforce collapsing structural embankments along canals.',
    envTh: 'แปรรูปขยะเป็นพลังงานระบบปิด Plasma Arc รักษาสิ่งแวดล้อมไม่สร้างมลพิษ',
    envEn: 'Vaporize trash via high-heat closed-loop Plasma Arc gasification.',
    econTh: 'ขจัดส่วยร้านค้า ตรวจสอบความโปร่งใสข้าราชการ กทม. ทุกเขต',
    econEn: 'Eradicate merchant extortion and audit BKK municipal staff transparency.'
  },
  13: {
    transitTh: 'ปรับปรุงซอยและโครงสร้างพื้นฐานระดับเขตและสถานีสัญจรรอยต่อ',
    transitEn: 'Upgrade sub-sois, district lanes, and minor transit nodes.',
    floodTh: 'ลอกคลองระบายน้ำขนาดเล็กและติดตั้งปั๊มสูบน้ำเคลื่อนที่เร็ว',
    floodEn: 'Dredge small canals and deploy trailer-mounted quick-pump arrays.',
    envTh: 'แคมเปญสะสมแต้มก้าวเดิน (Sweat to Points) ออกกำลังกายแลกเหรียญรถไฟฟ้า',
    envEn: 'Sweat-to-Points: convert walking steps into transit fare coins.',
    econTh: 'ลดภาษีป้ายและค่าธรรมเนียมสำหรับผู้ประกอบการรายย่อย SMEs',
    econEn: 'Provide commercial sign tax exemptions for local SME retailers.'
  },
  14: {
    transitTh: 'ใช้ AI ในการจัดความถี่รถสาธารณะของ กทม. ในช่วงเวลาเร่งด่วน',
    transitEn: 'Deploy AI to optimize BKK public shuttle schedules during rush hours.',
    floodTh: 'เรดาร์เตือนน้ำท่วม AI-X Band ช่วยพยากรณ์เมฆฝนระดับตารางเมตร',
    floodEn: 'Deploy AI-X Band radar for square-meter rain cloud forecasting.',
    envTh: 'ใช้ฝูงโดรน AI ตรวจวัดมลพิษอากาศทางสูง และฝนหลวงแก้ฝุ่นควัน',
    envEn: 'Run AI-drone high-altitude air monitoring and dust-clearing mist.',
    econTh: 'ส่งเสริมการท่องเที่ยวชุมชน 24 ชั่วโมง ดึงดูดนักท่องเที่ยวต่างชาติ',
    econEn: 'Promote 24-hour community tourism to attract high-yield travelers.'
  },
  15: {
    transitTh: 'ปรับปรุงสถานีขนส่ง ยกระดับความเชื่อมต่อระหว่างรถ รถไฟ และเรือ',
    transitEn: 'Upgrades local bus terminals, connecting rail, and ferry terminals.',
    floodTh: 'ขุดลอกลุ่มแม่น้ำ จัดการระบายน้ำเสีย และเชื่อมระบบสถานีสูบน้ำฝั่งตะวันออก',
    floodEn: 'Dredge river systems, wastewater canals, and east BKK pump network.',
    envTh: 'บำบัดน้ำเสียในคลองชุมชนด้วยเทคโนโลยีชีวภาพก่อนปล่อยสู่แม่น้ำหลัก',
    envEn: 'Treat canal wastewater using biotechnology before river discharge.',
    econTh: 'กองทุนการศึกษา กทม. 500 ล้านบาท มอบทุนถึงระดับปริญญาตรี',
    econEn: 'A 500M Baht BKK student fund providing university scholarships.'
  },
  16: {
    transitTh: 'เร่งปรับปรุงความปลอดภัยทางม้าลายและจุดตัดไฟจราจรคนข้าม',
    transitEn: 'Upgrade crosswalk safety and pedestrian light intersections.',
    floodTh: 'วางระบบท่อสูบน้ำใต้ดินขยายแนวท่อเก่าเพื่อเร่งระบายน้ำขัง',
    floodEn: 'Install subsurface bypass pipes to expand older sewer drain capacity.',
    envTh: 'สนับสนุนชุมชนในการดูแลความสะอาดและลดการใช้ถุงพลาสติก',
    envEn: 'Sponsor neighborhood associations for cleanliness and plastic reduction.',
    econTh: 'ผลักดัน กทม. ให้เป็นอิสระและมีความยืดหยุ่นสูง ปลดล็อกข้อจำกัดจากกระทรวง',
    econEn: 'Legally decouples BKK operational channels from national ministries.'
  },
  17: {
    transitTh: 'เพิ่มรถรับส่งฟรีสำหรับคนพิการและผู้สูงอายุไปโรงพยาบาล',
    transitEn: 'Offer free medical shuttle vans for seniors and disabled residents.',
    floodTh: 'ปรับปรุงที่กักเก็บน้ำในพื้นที่ชุมชนแออัด ป้องกันน้ำท่วมบ้านเรือน',
    floodEn: 'Expand drainage retention in crowded slums to protect homes.',
    envTh: 'สนับสนุนกลุ่มรักษ์สิ่งแวดล้อม จัดกิจกรรมคัดแยกและรับซื้อขยะรีไซเคิล',
    envEn: 'Sponsor community recycling clubs to buy back sorting materials.',
    econTh: 'จัดตั้งกองทุนสวัสดิการช่วยเหลือกลุ่มเปราะบางระดับฐานรากและ SLUM',
    econEn: 'Build community welfare funds supporting lower-income slums.'
  },
  18: {
    transitTh: 'ส่งเสริมและขยายเส้นทางการเดินทางทางน้ำ คลองและแม่น้ำเจ้าพระยา',
    transitEn: 'Subsidize and expand boat routes across canals and Chao Phraya river.',
    floodTh: 'จัดระเบียบการระบายน้ำของอาคารพาณิชย์และสิ่งก่อสร้างขัดขวางทางน้ำ',
    floodEn: 'Audits commercial structures blocks or drainage obstructions.',
    envTh: 'การจัดเก็บขยะอันตรายและคัดแยกสารพิษในระดับเขตอย่างถูกวิธี',
    envEn: 'Enhance specialized hazardous waste collection at the district level.',
    econTh: 'เปิดระบบ Sharing Economy ยืมครุภัณฑ์ กทม. และเช่าที่ดินรกร้างราคาถูก',
    econEn: 'Share BKK machinery and lease empty municipal lands for startups.'
  }
};

let currentLang = 'th';
const originalTexts = new WeakMap();

function applyLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const isHtml = el.hasAttribute('data-i18n-html');
    if (!originalTexts.has(el)) {
      originalTexts.set(el, isHtml ? el.innerHTML : el.textContent);
    }
    
    const key = el.getAttribute('data-i18n');
    const translatedText = TRANSLATIONS_EN[key];
    const originalText = originalTexts.get(el);
    
    const targetVal = (lang === 'en' && translatedText !== undefined) ? translatedText : originalText;
    
    if (isHtml) {
      el.innerHTML = targetVal;
    } else {
      el.textContent = targetVal;
    }
  });

  // Update Lang toggle button
  const toggleBtn = document.getElementById('langToggleBtn');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'en' ? 'ไทย' : 'EN';
  }

  // Refresh dynamic candidates list
  renderCandidates(lang);
  if (typeof window.updateCandidateCarousel === 'function') {
    window.updateCandidateCarousel();
  }

  // Refresh badge picker labels and comparison table
  buildBadgePicker();
  updateComparison();

  // Refresh dynamic logic templates that depend on language
  updateCountdown();
}

// Language button event listener
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('langToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'th' : 'en');
    });
  }
});


// ==========================================================================
// COUNTDOWN TIMER
// ==========================================================================
const ELECTION_TARGET = new Date('2026-06-28T17:00:00+07:00').getTime();

function updateCountdown() {
  const dEl = document.getElementById('bigCd-days');
  const hEl = document.getElementById('bigCd-hours');
  const mEl = document.getElementById('bigCd-minutes');
  const sEl = document.getElementById('bigCd-seconds');

  const diff = ELECTION_TARGET - Date.now();
  const pad = (n) => String(n).padStart(2, '0');

  if (diff <= 0) {
    if (dEl) dEl.textContent = '00';
    if (hEl) hEl.textContent = '00';
    if (mEl) mEl.textContent = '00';
    if (sEl) sEl.textContent = '00';
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  if (dEl) dEl.textContent = pad(d);
  if (hEl) hEl.textContent = pad(h);
  if (mEl) mEl.textContent = pad(m);
  if (sEl) sEl.textContent = pad(s);
}

// Start Countdown Interval
setInterval(updateCountdown, 1000);





// ==========================================================================
// BADGE PICKER — INTERACTIVE CANDIDATE COMPARISON
// ==========================================================================
// State: no = candidate number, null = unselected
let compareSelA = 1;
let compareSelB = 9;

function buildBadgePicker() {
  const grid = document.getElementById('badge-picker-grid');
  if (!grid) return;

  const isEn = currentLang === 'en';
  grid.innerHTML = '';

  CANDIDATES_DATA.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'badge-btn';
    btn.setAttribute('data-no', c.no);
    btn.setAttribute('title', isEn ? `No.${c.no} ${c.nameEn}` : `เบอร์ ${c.no} ${c.nameTh}`);

    // Number circle
    const circle = document.createElement('span');
    circle.className = 'badge-btn-circle';
    circle.textContent = c.no;

    // Name label
    const label = document.createElement('span');
    label.className = 'badge-btn-name';
    const fullName = isEn ? c.nameEn : c.nameTh;
    // Show last name only for compactness
    label.textContent = fullName.split(' ').pop();

    btn.appendChild(circle);
    btn.appendChild(label);

    btn.addEventListener('click', () => onBadgeClick(c.no));
    grid.appendChild(btn);
  });

  applyBadgeStates();
}

function onBadgeClick(no) {
  if (no === compareSelA) {
    // Deselect A — shift B to A
    compareSelA = compareSelB;
    compareSelB = null;
  } else if (no === compareSelB) {
    // Deselect B
    compareSelB = null;
  } else if (compareSelA === null) {
    compareSelA = no;
  } else if (compareSelB === null) {
    compareSelB = no;
  } else {
    // Both selected: replace A (older pick), shift B→A, new = B
    compareSelA = compareSelB;
    compareSelB = no;
  }
  applyBadgeStates();
  updateComparison();
}

function applyBadgeStates() {
  const buttons = document.querySelectorAll('.badge-btn');
  buttons.forEach(btn => {
    const no = parseInt(btn.getAttribute('data-no'));
    btn.classList.remove('sel-a', 'sel-b');
    if (no === compareSelA) btn.classList.add('sel-a');
    else if (no === compareSelB) btn.classList.add('sel-b');
  });
}

function updateComparison() {
  const valA = compareSelA;
  const valB = compareSelB;

  const candA = valA !== null ? CANDIDATES_DATA.find(c => c.no === valA) : null;
  const candB = valB !== null ? CANDIDATES_DATA.find(c => c.no === valB) : null;
  const compA = valA !== null ? POLICY_COMPARISON_DATA[valA] : null;
  const compB = valB !== null ? POLICY_COMPARISON_DATA[valB] : null;

  const isEn = currentLang === 'en';

  const getPolicyText = (obj, thKey, enKey) => {
    if (!obj) return '-';
    const text = isEn ? obj[enKey] : obj[thKey];
    return (text && text.trim() !== '') ? text : '-';
  };

  const nameAEl = document.getElementById('compare-name-a');
  const nameBEl = document.getElementById('compare-name-b');

  if (nameAEl) {
    nameAEl.innerHTML = candA
      ? `<span class="cand-no badge-${candA.color}">${candA.no}</span> ${isEn ? candA.nameEn : candA.nameTh}`
      : `<span class="compare-empty-hint">${isEn ? 'Pick a candidate ↑' : 'เลือกผู้สมัคร ↑'}</span>`;
  }
  if (nameBEl) {
    nameBEl.innerHTML = candB
      ? `<span class="cand-no badge-${candB.color}">${candB.no}</span> ${isEn ? candB.nameEn : candB.nameTh}`
      : `<span class="compare-empty-hint">${isEn ? 'Pick a candidate ↑' : 'เลือกผู้สมัคร ↑'}</span>`;
  }

  document.getElementById('compare-r1-a').textContent = getPolicyText(compA, 'transitTh', 'transitEn');
  document.getElementById('compare-r1-b').textContent = getPolicyText(compB, 'transitTh', 'transitEn');
  document.getElementById('compare-r2-a').textContent = getPolicyText(compA, 'floodTh', 'floodEn');
  document.getElementById('compare-r2-b').textContent = getPolicyText(compB, 'floodTh', 'floodEn');
  document.getElementById('compare-r3-a').textContent = getPolicyText(compA, 'envTh', 'envEn');
  document.getElementById('compare-r3-b').textContent = getPolicyText(compB, 'envTh', 'envEn');
  document.getElementById('compare-r4-a').textContent = getPolicyText(compA, 'econTh', 'econEn');
  document.getElementById('compare-r4-b').textContent = getPolicyText(compB, 'econTh', 'econEn');
}


// ==========================================================================
// SCROLLSPY & TABS VISUAL STATE
// ==========================================================================
function setupScrollSpy() {
  const sections = document.querySelectorAll('.scroll-spy-section');
  const navLinks = document.querySelectorAll('#sectionTabs a[data-tab]');
  const navContainer = document.getElementById('sectionTabs');

  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPosition = window.scrollY + 140; // threshold below header
    let activeId = sections[0].id;

    // Check if we are near the bottom of the page
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 15;

    if (isAtBottom) {
      activeId = sections[sections.length - 1].id;
    } else {
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          activeId = sec.id;
        }
      });
    }

    navLinks.forEach((link) => {
      const tabId = link.getAttribute('data-tab');
      if (tabId === activeId) {
        link.classList.add('active');
        
        // Auto scroll tab bar if tab item goes out of view
        if (navContainer) {
          const lOffset = link.offsetLeft;
          const rOffset = lOffset + link.offsetWidth;
          if (lOffset < navContainer.scrollLeft || rOffset > navContainer.scrollLeft + navContainer.clientWidth) {
            navContainer.scrollTo({ left: lOffset - 24, behavior: 'smooth' });
          }
        }
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial call
}

document.addEventListener('DOMContentLoaded', setupScrollSpy);
document.addEventListener('DOMContentLoaded', () => {
  renderCandidates(currentLang);
  setupCandidateCarousel();
  buildBadgePicker();
  updateComparison();
  updateCountdown();
  updateTimelineStates();
});

function setupCandidateCarousel() {
  const track = document.getElementById('candidate-track');
  const prevBtn = document.getElementById('candidate-prev');
  const nextBtn = document.getElementById('candidate-next');
  const dotsContainer = document.getElementById('candidate-dots');

  if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

  let currentIndex = 0;

  function getCards() {
    return track.querySelectorAll('.candidate-card');
  }

  function getCardsPerView() {
    return window.innerWidth <= 768 ? 1 : 4;
  }

  function updateDots() {
    dotsContainer.innerHTML = '';
    const cards = getCards();
    const cardsPerView = getCardsPerView();
    const totalPages = cards.length - cardsPerView + 1;
    if (totalPages <= 1) return;
    
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('span');
      dot.classList.add('candidates-carousel-dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        slide();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function slide() {
    const cards = getCards();
    if (!cards.length) return;
    const cardsPerView = getCardsPerView();
    const cardWidth = cards[0].offsetWidth;
    const gap = 20; // gap in CSS
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
    
    prevBtn.disabled = currentIndex === 0;
    const maxIndex = cards.length - cardsPerView;
    nextBtn.disabled = currentIndex >= maxIndex;
    
    const dots = dotsContainer.querySelectorAll('.candidates-carousel-dot');
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Expose update function to global window scope so applyLanguage can trigger it
  window.updateCandidateCarousel = () => {
    const cards = getCards();
    const cardsPerView = getCardsPerView();
    currentIndex = Math.min(currentIndex, Math.max(0, cards.length - cardsPerView));
    updateDots();
    slide();
  };

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      slide();
    }
  });

  nextBtn.addEventListener('click', () => {
    const cards = getCards();
    const cardsPerView = getCardsPerView();
    const maxIndex = cards.length - cardsPerView;
    if (currentIndex < maxIndex) {
      currentIndex++;
      slide();
    }
  });

  window.addEventListener('resize', () => {
    window.updateCandidateCarousel();
  });

  updateDots();
  slide();
}

function updateTimelineStates() {
  const now = new Date();
  
  const ranges = [
    { elId: 't-item-1', start: new Date('2026-06-01T00:00:00+07:00'), end: new Date('2026-06-17T23:59:59+07:00') },
    { elId: 't-item-2', start: new Date('2026-06-21T00:00:00+07:00'), end: new Date('2026-06-27T23:59:59+07:00') },
    { elId: 't-item-3', start: new Date('2026-06-28T00:00:00+07:00'), end: new Date('2026-06-28T23:59:59+07:00') },
    { elId: 't-item-4', start: new Date('2026-06-29T00:00:00+07:00'), end: new Date('2026-07-05T23:59:59+07:00') }
  ];

  ranges.forEach((range) => {
    const el = document.getElementById(range.elId);
    if (!el) return;

    el.classList.remove('past', 'current', 'future');
    
    if (now > range.end) {
      el.classList.add('past');
    } else if (now >= range.start && now <= range.end) {
      el.classList.add('current');
    } else {
      el.classList.add('future');
    }
  });
}
