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
  kicker: 'ELECTION · BANGKOK VOTE',
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
  s05title: 'Election Results',
  s05para: 'Unofficial results (95% counted) · 28 June 2026 at 22:35',
  resRank1: 'Rank 1',
  resRank2: 'Rank 2',
  resRank3: 'Rank 3',
  resName1: 'Chadchart Sittipunt',
  resName2: 'Mallika Boonmeetrakool Mahasuk',
  resName3: 'Chaiwat Sathawornwijit',
  resName4: 'Anucha Burapachaisri',
  resName5: 'M.L. Kornkasiwat Kasemsri',
  resName6: 'Samai Lalert',
  resName7: 'Prateep Watcharachokekasem',
  resName8: 'Pol.Lt.Gen. Chanthep Sesavej',
  resWinner: '🏆 Winner (Unofficial)',
  resWinnerTerm: 'Term 2',
  resScoreUnit: 'votes',
  resCountedLabel: 'Counted so far',
  resTournoutHint: 'Tap for details ›',
  resTurnoutSub: 'Total eligible voters 4,428,644 · Turnout 49.7%',
  turnoutModalTitle: 'Ballot Statistics',
  turnoutModalSub: 'Ballots counted (unofficial)',
  turnoutModalPctNote: '(of estimated turnout)',
  turnoutStatEligible: 'Eligible voters',
  turnoutStatTurnout: 'Turnout',
  turnoutStatUnit: 'persons',
  turnoutStatBallot: 'ballots',
  turnoutStatGood: 'Valid ballots',
  turnoutStatSpoiled: 'Spoiled ballots',
  turnoutStatAbstain: 'No vote',
  resOthersLabel: 'Other Candidates',
  resPolicyNote: '* Unofficial results, 95% counted as of 28 Jun 2026 · Source: Thairath, Thai PBS · EC to certify within 30 days',
  resNo: 'No.',
  resIndep: 'Independent',
  resDemocrat: 'Democrat Party',
  resPeoplesParty: "People's Party",
  resEconParty: 'Economy Party',
  districtSubtitle: 'Bangkok — 50 Electoral Districts',
  districtTabSK: 'BMA Council (ส.ก.) Results',
  districtTabGov: 'Governor Score',
  skToggleGroup: 'By Party',
  skToggleSort: 'By Number',
  districtPlaceholderText: 'Under Development',
  districtPlaceholderSub: 'Governor score heatmap by district',
  cdDaysLabel: 'Days',
  cdHoursLabel: 'Hours',
  cdMinutesLabel: 'Minutes',
  cdSecondsLabel: 'Seconds',
  footBrand: 'BKK Governor Election 2026',
  footAbout: 'An independent website for following the Bangkok Governor and BKK Metropolitan Council (ส.ก.) elections in 2026, built for educational purposes and public convenience.',
  footLicense: 'Original site content only (third-party data/images belong to their owners)',
  footSourcesTitle: 'Data Sources',
  footLegalTitle: 'Terms & Policy',
  footAboutLink: 'About & Data Sources + Privacy →',
  footDisc: 'Educational website, not affiliated with the EC or PPTV. Real-time results, candidate photos and party data are the property of their respective owners (PPTV HD36 and sources), shown for reference only. Details may vary; please refer to the official EC results.',
  footPrivacy: '🔒 No personal data is collected directly. Anonymous traffic stats via Google Analytics 4 (IP anonymized).',
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

    const thFirstName = c.nameTh.replace(/^(นางสาว|น\.ส\.|นาง|นาย|ม\.ล\.|ม\.ร\.ว\.|ม\.จ\.|พล\.ต\.ท\.|พล\.ต\.ต\.|พล\.ต\.|พล\.อ\.|ร\.ต\.อ\.)\s*/u, '').split(' ')[0];
    const name = isEn ? c.nameEn : 'คุณ ' + thFirstName;
    const party = isEn ? c.partyEn : c.partyTh;
    const desc = isEn ? c.descEn : c.descTh;

    card.innerHTML = `
      <div class="candidate-photo-wrapper">
        <span class="candidate-number-badge badge-${c.color}">${c.no}</span>
        <img
          class="candidate-photo"
          src="candidates/no-${c.no}.webp"
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

// ==========================================================================
// LIVE RESULTS — via our own server-side proxy (/api/pptv)
// ==========================================================================
// The browser only calls our domain; the proxy talks to the upstream PPTV API
// and holds any credentials server-side. See api/pptv.js. `p` is the upstream
// sub-path; the proxy enforces an allowlist.
const SK_ELECTION = 'สมาชิกสภากรุงเทพมหานคร';
const pptvUrl = (p) => `/api/pptv?p=${encodeURIComponent(p)}`;

const RESULTS_API         = pptvUrl('api/rank');
const RESULTS_SUMMARY_API = pptvUrl('api/summary/bkk-governor-2026');
const RESULTS_MAP_API     = pptvUrl('api/map');
const RESULTS_SK_MAP_API  = pptvUrl(`api/map/${SK_ELECTION}`);

// Per-zone detail (full candidate list + ballot stats). `kind` selects the
// election: 'gov' → api/zone/{slug}; 'sk' → api/zone/{election}/{slug}.
const _zoneDetailCache = {};
async function fetchZoneDetail(slug, kind = 'gov') {
  const path = kind === 'sk'
    ? `api/zone/${SK_ELECTION}/${slug}`
    : `api/zone/${slug}`;
  if (_zoneDetailCache[path]) return _zoneDetailCache[path];
  const res = await fetch(pptvUrl(path));
  const data = await res.json();
  _zoneDetailCache[path] = data;
  return data;
}

const CAND_NAME_EN = {
  1: 'M.L. Kornkasiwat Kasemsri',
  2: 'Samai Lalert',
  3: 'Phongsak Phaewphong',
  4: 'Prateep Watcharachokekasem',
  5: 'Anucha Burapachaisri',
  6: 'Pisal Kittiyaowmaly',
  7: 'Phaspong Chaiwirinawanich',
  8: 'Weerapon Lueprasitkul',
  9: 'Chadchart Sittipunt',
  10: 'Chaiwat Sathawornwijit',
  11: 'Prayoon Krongyos',
  12: 'Pol.Lt.Gen. Chanthep Sesavej',
  13: 'Komsan Panthuwichitkul',
  14: 'Mallika Boonmeetrakool Mahasuk',
  15: 'Oharn Tangtrakul',
  16: 'Srirat Changphet',
  17: 'Lana Mongkolhasdinthon',
  18: 'Somchai Chareonwankieat',
};

const PARTY_EN = {
  'อิสระ': 'Independent',
  'Independent': 'Independent',
  'พรรคประชาชน': "People's Party",
  'พรรคประชาธิปัตย์': 'Democrat Party',
  'พรรคเศรษฐกิจ': 'Economy Party',
  'พรรคอนาคตไทย': 'Thailand Future Party',
  'กลุ่ม Better Bangkok': 'Better Bangkok Group',
  'กลุ่มคนทำงาน': 'Khon Tham Ngan Group',
  'กลุ่มเพื่อไทย Life ลงตัว': 'Pheu Thai Life Long Tua Group',
  'กลุ่มกรุงเทพบินได้': 'Krung Thep Bin Dai Group',
  'กลุ่มมีนบุรีพึ่งได้': 'Min Buri Pueng Dai Group',
};

let resultsData = null;

function _candName(c, lang) {
  return lang === 'en'
    ? (CAND_NAME_EN[c.no] || `${c.f_name} ${c.l_name}`)
    : `${c.f_name} ${c.l_name}`;
}

function _partyName(c, lang) {
  return lang === 'en' ? (PARTY_EN[c.party_name] || c.party_name) : c.party_name;
}

function renderResults(lang) {
  const wrap = document.getElementById('res-dynamic-wrap');
  if (!wrap || !resultsData) return;

  const top3 = resultsData.filter(c => c.rank <= 3).sort((a, b) => a.rank - b.rank);
  const rest  = resultsData.filter(c => c.rank >  3);
  const maxPct = parseFloat(top3[0].score_percent);

  const rankLbl  = r => lang === 'en' ? `Rank ${r}` : `อันดับ ${r}`;
  const unit     = lang === 'en' ? 'votes' : 'คะแนน';
  const noLbl    = lang === 'en' ? 'No.' : 'เบอร์';
  const otherLbl = lang === 'en' ? 'Other Candidates' : 'ผู้สมัครลำดับถัดไป';

  const podiumHTML = `
    <div class="res-podium">
      ${top3.map(c => `
        <div class="podium-avatar rank-${c.rank}">
          <div class="podium-rank-label">${rankLbl(c.rank)}</div>
          <img src="${c.photo}" alt="${_candName(c, lang)}" class="podium-circle"
               style="border-color:${c.color};" onerror="this.style.display='none'">
          <div class="podium-name">${_candName(c, lang)}</div>
          <div class="podium-pct" style="color:${c.color}">${c.score_percent}%</div>
          <div class="podium-votes">${c.score} <span>${unit}</span></div>
        </div>`).join('')}
    </div>`;

  const listHTML = `
    <div class="res-others-label">${otherLbl}</div>
    <div class="res-list-wrap">
      ${rest.map(c => {
        const bar = Math.max(2, Math.round(parseFloat(c.score_percent) / maxPct * 100));
        return `
          <div class="res-row">
            <div class="res-row-left">
              <div class="res-row-rank" style="background:${c.color};">${c.rank}</div>
              <img src="${c.photo}" class="res-row-photo" onerror="this.style.display='none'">
            </div>
            <div class="res-row-body">
              <div class="res-row-name">${_candName(c, lang)}</div>
              <div class="res-row-tags">
                <span class="res-row-tag-outline">${noLbl} ${c.no}</span>
                <span class="res-row-tag-fill">${_partyName(c, lang)}</span>
              </div>
              <div class="res-row-bar-wrap">
                <div class="res-row-bar" style="width:${bar}%;background:${c.color}"></div>
              </div>
            </div>
            <div class="res-row-score">
              <div class="res-row-pct">${c.score_percent}%</div>
              <div class="res-row-votes">${c.score} ${unit}</div>
            </div>
          </div>`;
      }).join('')}
    </div>`;

  wrap.innerHTML = podiumHTML + listHTML;
}

function renderTurnoutModal(s) {
  const box = document.getElementById('turnoutPopover');
  if (!box || !s) return;
  const lang = currentLang;
  const pct  = s.progress;
  const unit = lang === 'en' ? 'persons' : 'คน';
  const blt  = lang === 'en' ? 'ballots' : 'ใบ';

  box.innerHTML = `
    <div class="turnout-modal-header">
      <h3 class="turnout-modal-title">${lang === 'en' ? 'Ballot Statistics' : 'สถิติการนับคะแนน'}</h3>
      <button class="turnout-modal-close" id="turnoutModalClose" aria-label="ปิด">✕</button>
    </div>
    <div class="turnout-modal-counted">
      <div class="turnout-modal-sub">${lang === 'en' ? 'Ballots counted (unofficial)' : 'นับคะแนนแล้ว (อย่างไม่เป็นทางการ)'}</div>
      <div class="turnout-modal-big">${s.total_votes}</div>
      <div class="turnout-modal-bar-wrap"><div class="turnout-modal-bar" style="width:${pct}%"></div></div>
      <div class="turnout-modal-pct-row">
        <span class="turnout-modal-pct-val">${pct}%</span>
        <span class="turnout-modal-pct-note">${lang === 'en' ? '(of estimated turnout)' : '(ของประมาณการผู้มาใช้สิทธิ)'}</span>
      </div>
    </div>
    <div class="turnout-modal-grid">
      <div class="turnout-stat-card">
        <div class="turnout-stat-label">${lang === 'en' ? 'Eligible voters' : 'ผู้มีสิทธิ'}</div>
        <div class="turnout-stat-val">${s.eligible} <span>${unit}</span></div>
      </div>
      <div class="turnout-stat-card">
        <div class="turnout-stat-label">${lang === 'en' ? 'Turnout' : 'มาใช้สิทธิ'}</div>
        <div class="turnout-stat-val">${s.voter_turnout} <span>${unit}</span></div>
        <div class="turnout-stat-pct">${s.voter_turnout_percentage}%</div>
      </div>
      <div class="turnout-stat-card">
        <div class="turnout-stat-label">${lang === 'en' ? 'Valid ballots' : 'บัตรดี'}</div>
        <div class="turnout-stat-val">${s.good_votes} <span>${blt}</span></div>
        <div class="turnout-stat-pct">${s.percent_good_votes}%</div>
      </div>
      <div class="turnout-stat-card">
        <div class="turnout-stat-label">${lang === 'en' ? 'Spoiled ballots' : 'บัตรเสีย'}</div>
        <div class="turnout-stat-val">${s.bad_votes} <span>${blt}</span></div>
        <div class="turnout-stat-pct">${s.percent_bad_votes}%</div>
      </div>
      <div class="turnout-stat-card span2">
        <div class="turnout-stat-label">${lang === 'en' ? 'No vote' : 'ไม่ประสงค์ลงคะแนน'}</div>
        <div class="turnout-stat-val">${s.no_votes} <span>${unit}</span></div>
        <div class="turnout-stat-pct">${s.percent_no_votes}%</div>
      </div>
    </div>`;

  // Re-bind close button after re-render
  const closeBtn = box.querySelector('#turnoutModalClose');
  if (closeBtn) closeBtn.addEventListener('click', () => {
    box.classList.remove('open');
    const btn = document.getElementById('turnoutBarBtn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });
}

let summaryData = null;

async function loadResultsFromAPI() {
  const wrap = document.getElementById('res-dynamic-wrap');
  try {
    const [rankRes, summaryRes] = await Promise.all([
      fetch(RESULTS_API),
      fetch(RESULTS_SUMMARY_API),
    ]);
    const [rankData, summary] = await Promise.all([rankRes.json(), summaryRes.json()]);
    resultsData = rankData.sort((a, b) => a.rank - b.rank);
    summaryData = summary;
    renderResults(currentLang);
    renderTurnoutModal(summaryData);

    // Update turnout bar numbers from API
    const countedEl = document.querySelector('.res-turnout strong');
    const pctEl     = document.querySelector('.res-turnout-pct');
    if (countedEl) countedEl.textContent = summary.total_votes;
    if (pctEl)     pctEl.textContent     = summary.progress + '%';

    renderResultsMeta(); // date / time / counted% from API
  } catch {
    if (wrap) wrap.innerHTML = '<p class="res-error">ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง</p>';
  }
}

// Format "2026-06-28 22:35:32" → { date, time } in Thai (Buddhist era) or English
const _TH_MONTHS = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
const _EN_MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function _formatUpdated(raw, lang) {
  const m = String(raw || '').match(/(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/);
  if (!m) return null;
  const [, y, mo, d, hh, mm] = m;
  const month = parseInt(mo, 10) - 1;
  const day = parseInt(d, 10);
  if (lang === 'en') return { date: `${day} ${_EN_MONTHS[month]} ${y}`, time: `${hh}:${mm}` };
  return { date: `${day} ${_TH_MONTHS[month]} ${parseInt(y, 10) + 543}`, time: `${hh}:${mm}` };
}

// Render the date/time/counted% lines from live summary data (both languages)
function renderResultsMeta() {
  const lead = document.getElementById('resSectionLead');
  const note = document.getElementById('resPolicyNote');
  const pct  = summaryData ? summaryData.progress : '95';
  const t    = summaryData ? _formatUpdated(summaryData.updated_at, currentLang) : null;
  const dt   = t ? t : { date: currentLang === 'en' ? '28 Jun 2026' : '28 มิ.ย. 2569', time: '22:35' };
  const en   = currentLang === 'en';

  if (lead) lead.textContent = en
    ? `Unofficial vote count (${pct}% counted) · ${dt.date}, ${dt.time}`
    : `ผลการนับคะแนนอย่างไม่เป็นทางการ (นับแล้ว ${pct}%) · ${dt.date} เวลา ${dt.time} น.`;

  if (note) note.textContent = en
    ? `* Unofficial results, ${pct}% counted · updated ${dt.date}, ${dt.time} · Source: PPTV HD36 · EC to certify within 30 days`
    : `* ผลคะแนนอย่างไม่เป็นทางการ นับแล้ว ${pct}% · อัปเดต ${dt.date} ${dt.time} น. · ที่มา: PPTV HD36 · กกต. จะรับรองผลภายใน 30 วัน`;
}

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

  // Re-render live results in correct language
  renderResults(lang);
  renderTurnoutModal(summaryData);
  renderResultsMeta();

  // Refresh both district views (labels, units) + FAB labels for the new language
  if (typeof renderDView === 'function') {
    ['sk', 'gov'].forEach(k => {
      renderDView(k);
      updateDFabLabel(DVIEWS[k]);
    });
  }

  // If the district popup is open, re-render it in the new language
  const dOverlay = document.getElementById('skDistrictOverlay');
  if (dOverlay && dOverlay.classList.contains('open') && _lastModalWinner) {
    showDistrictModal(_lastModalWinner);
  }
}

// Language button event listener
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('langToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'th' : 'en');
    });
  }

  loadResultsFromAPI();
  loadDistrictData();              // ส.ก. (mock) + Governor (live /api/map)
  initDViewInteractions('sk');     // bind seat/legend events ONCE per view
  initDViewInteractions('gov');
  initDViewControls('sk');         // bind Map/Grid toggle + FAB ONCE per view
  initDViewControls('gov');
  initDistrictTabs();
  initDistrictModal();

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      _clearGroupHighlight(DVIEWS.sk);
      _clearGroupHighlight(DVIEWS.gov);
      closeDistrictModal();
    }
  });

  // Turnout popover
  const turnoutBtn     = document.getElementById('turnoutBarBtn');
  const turnoutPopover = document.getElementById('turnoutPopover');

  function openTurnout() {
    turnoutPopover.classList.add('open');
    turnoutPopover.setAttribute('aria-hidden', 'false');
    turnoutBtn.setAttribute('aria-expanded', 'true');
  }
  function closeTurnout() {
    turnoutPopover.classList.remove('open');
    turnoutPopover.setAttribute('aria-hidden', 'true');
    turnoutBtn.setAttribute('aria-expanded', 'false');
  }

  if (turnoutBtn) turnoutBtn.addEventListener('click', e => {
    e.stopPropagation();
    turnoutPopover.classList.contains('open') ? closeTurnout() : openTurnout();
  });

  document.addEventListener('click', e => {
    if (turnoutPopover && !turnoutPopover.contains(e.target)) closeTurnout();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTurnout(); });
});


// ==========================================================================
// DISTRICT TAB — BMC COUNCIL SEAT GRID
// ==========================================================================

const PARTY_COLORS = {
  'พรรคประชาชน':         { bg: '#FF6B00', text: '#fff' },
  'พรรคเพื่อไทย':        { bg: '#E53935', text: '#fff' },
  'พรรคประชาธิปัตย์':    { bg: '#1565C0', text: '#fff' },
  'พรรคพลังประชารัฐ':    { bg: '#283593', text: '#fff' },
  'พรรคภูมิใจไทย':       { bg: '#2E7D32', text: '#fff' },
  'พรรคชาติไทยพัฒนา':   { bg: '#F9A825', text: '#222' },
  'อิสระ':               { bg: '#CFD8DC', text: '#546E7A' },
};

// Mock data — 50 Bangkok districts (instant fallback before the live API resolves)
const SK_MOCK_DATA = [
  // People's Party (22 seats)
  { district:'จตุจักร',       no:3,  name:'สุรินทร์ มีแสง',        party:'พรรคประชาชน',      score:18420 },
  { district:'ลาดพร้าว',      no:7,  name:'วิชัย ทองดี',           party:'พรรคประชาชน',      score:17800 },
  { district:'ห้วยขวาง',      no:2,  name:'กัญญา สุขสวัสดิ์',      party:'พรรคประชาชน',      score:16950 },
  { district:'บึงกุ่ม',       no:5,  name:'ธนกร อนุชิต',           party:'พรรคประชาชน',      score:16700 },
  { district:'วังทองหลาง',    no:4,  name:'พรพิมล ไชยรักษ์',       party:'พรรคประชาชน',      score:15900 },
  { district:'สวนหลวง',       no:6,  name:'อนุชา พงษ์วิไล',        party:'พรรคประชาชน',      score:15300 },
  { district:'ประเวศ',        no:3,  name:'ปิยนุช วัฒนสิทธิ์',     party:'พรรคประชาชน',      score:14800 },
  { district:'คลองเตย',       no:8,  name:'รัตนา ศรีสมบัติ',       party:'พรรคประชาชน',      score:14200 },
  { district:'บางนา',         no:5,  name:'ชาญวิทย์ เพชรรัตน์',    party:'พรรคประชาชน',      score:13900 },
  { district:'สาทร',          no:2,  name:'มณีรัตน์ ดวงแก้ว',      party:'พรรคประชาชน',      score:13600 },
  { district:'ดอนเมือง',      no:4,  name:'เอกชัย บุญประเสริฐ',    party:'พรรคประชาชน',      score:13400 },
  { district:'บางเขน',        no:6,  name:'วันเพ็ญ สิงห์คำ',       party:'พรรคประชาชน',      score:13100 },
  { district:'หลักสี่',       no:3,  name:'ปราโมทย์ ฤกษ์งาม',      party:'พรรคประชาชน',      score:12800 },
  { district:'ลาดกระบัง',     no:7,  name:'สิริพร มงคลชัย',        party:'พรรคประชาชน',      score:12500 },
  { district:'มีนบุรี',       no:2,  name:'ทวีศักดิ์ จันทรมาศ',    party:'พรรคประชาชน',      score:12300 },
  { district:'คันนายาว',      no:4,  name:'กิตติ์ธเนศ ศรีวิชัย',   party:'พรรคประชาชน',      score:12000 },
  { district:'สะพานสูง',      no:5,  name:'พัชรินทร์ วงษ์เจริญ',   party:'พรรคประชาชน',      score:11700 },
  { district:'บางกะปิ',       no:3,  name:'ธีรพล ทองทา',           party:'พรรคประชาชน',      score:11500 },
  { district:'คลองสาน',       no:6,  name:'รพีพัฒน์ แก้วใส',       party:'พรรคประชาชน',      score:11200 },
  { district:'บางซื่อ',       no:4,  name:'อรุณี สมพงษ์',          party:'พรรคประชาชน',      score:10900 },
  { district:'ดินแดง',        no:2,  name:'วีระชัย ทองสุข',         party:'พรรคประชาชน',      score:10700 },
  { district:'ราชเทวี',       no:5,  name:'กนกพร ดีงาม',           party:'พรรคประชาชน',      score:10400 },
  // Pheu Thai Party (14 seats)
  { district:'พระนคร',        no:4,  name:'สมชาย วีระกิจ',         party:'พรรคเพื่อไทย',     score:17600 },
  { district:'ยานนาวา',       no:3,  name:'อารีย์ พงษ์ดี',         party:'พรรคเพื่อไทย',     score:16800 },
  { district:'บางรัก',        no:5,  name:'พินิจ สินธุวงษ์',        party:'พรรคเพื่อไทย',     score:16200 },
  { district:'สัมพันธวงศ์',   no:2,  name:'จิรายุ ลิ้มสกุล',        party:'พรรคเพื่อไทย',     score:15500 },
  { district:'จอมทอง',        no:6,  name:'นิภาพร คำอยู่',          party:'พรรคเพื่อไทย',     score:14800 },
  { district:'ราษฎร์บูรณะ',   no:4,  name:'สุภาพร ทองแดง',         party:'พรรคเพื่อไทย',     score:14100 },
  { district:'ทุ่งครุ',       no:3,  name:'ประสิทธิ์ เกษมสันต์',    party:'พรรคเพื่อไทย',     score:13400 },
  { district:'บางขุนเทียน',   no:5,  name:'วรรณา ชัยสิทธิ์',       party:'พรรคเพื่อไทย',     score:12700 },
  { district:'หนองแขม',       no:2,  name:'สาโรจน์ มีโชค',         party:'พรรคเพื่อไทย',     score:12100 },
  { district:'บางแค',         no:4,  name:'ลัดดา ไทยเจริญ',         party:'พรรคเพื่อไทย',     score:11600 },
  { district:'ภาษีเจริญ',     no:6,  name:'ศักดิ์ชัย พงษ์อำไพ',    party:'พรรคเพื่อไทย',     score:11100 },
  { district:'ตลิ่งชัน',      no:3,  name:'สุนทร วัฒนะ',           party:'พรรคเพื่อไทย',     score:10700 },
  { district:'บางกอกน้อย',    no:5,  name:'อิสรา แสงจันทร์',       party:'พรรคเพื่อไทย',     score:10300 },
  { district:'ทวีวัฒนา',      no:2,  name:'ปัณฑา ชัยเจริญ',        party:'พรรคเพื่อไทย',     score: 9800 },
  // Democrat Party (7 seats)
  { district:'ปทุมวัน',       no:3,  name:'พิสิฐ บำรุงกิจ',        party:'พรรคประชาธิปัตย์',  score:14300 },
  { district:'พญาไท',         no:4,  name:'กุลธิดา ชัยภักดี',      party:'พรรคประชาธิปัตย์',  score:13200 },
  { district:'บางพลัด',       no:2,  name:'วิทวัส สุขสันต์',        party:'พรรคประชาธิปัตย์',  score:12600 },
  { district:'ดุสิต',         no:5,  name:'สุรเชษฐ์ จันทร์หอม',    party:'พรรคประชาธิปัตย์',  score:11900 },
  { district:'ป้อมปราบ',      no:3,  name:'วิรัตน์ ทวีสุข',         party:'พรรคประชาธิปัตย์',  score:11100 },
  { district:'บางกอกใหญ่',    no:4,  name:'นภาพร เอกอุดม',         party:'พรรคประชาธิปัตย์',  score:10400 },
  { district:'หนองจอก',       no:6,  name:'อภิชาติ ศรีทอง',         party:'พรรคประชาธิปัตย์',  score: 9800 },
  // Palang Pracharath Party (3 seats)
  { district:'บึงกุ่ม',       no:7,  name:'วรชัย พรประสิทธิ์',     party:'พรรคพลังประชารัฐ',  score:12000 },
  { district:'บางบอน',        no:4,  name:'สิทธิชัย ชัยโชค',        party:'พรรคพลังประชารัฐ',  score:11200 },
  { district:'ลาดพร้าว',      no:9,  name:'ฐิติรัตน์ คงคา',         party:'พรรคพลังประชารัฐ',  score:10500 },
  // Independent (4 seats)
  { district:'พระโขนง',       no:5,  name:'สมบูรณ์ สุขสมบัติ',     party:'อิสระ',             score:13500 },
  { district:'มีนบุรี',       no:8,  name:'ชลิตา ธรรมรัตน์',        party:'อิสระ',             score:12800 },
  { district:'สะพานสูง',      no:3,  name:'วิสุทธิ์ มีชัย',          party:'อิสระ',             score:11600 },
  { district:'บางนา',         no:7,  name:'รัชนก ปัญญาดี',          party:'อิสระ',             score:10900 },
];

// Two district tabs share identical UI; only the dataset differs.
//   sk  : BMC council seats (live /api/map)
//   gov : Governor results per district (live /api/map)
const DVIEWS = {
  sk: {
    key: 'sk',
    gridId: 'sk-seat-grid', legendId: 'sk-legend',
    fabId: 'skGroupFab', fabLabelId: 'skGroupFabLabel',
    data: [], zoneMap: {}, zoneKind: 'sk',
    displayMode: 'map', viewMode: 'group', activeGroup: null,
    countUnitTh: 'ที่นั่ง', countUnitEn: 'seats',
  },
  gov: {
    key: 'gov',
    gridId: 'gov-seat-grid', legendId: 'gov-legend',
    fabId: null, fabLabelId: null, // no group/sort FAB (Grid is fixed: by district 1→50)
    data: [], zoneMap: {}, zoneKind: 'gov',
    displayMode: 'map', viewMode: 'group', activeGroup: null,
    countUnitTh: 'เขต', countUnitEn: 'districts',
  },
};
let activeDView = 'sk';

// Geographic grid positions for Bangkok's 50 districts (col 1-9, row 1-9)
const BKK_MAP_GRID = {
  'สายไหม':       { r:1, c:4 }, 'ดอนเมือง':     { r:1, c:5 }, 'หนองจอก':      { r:1, c:9 },
  'บางเขน':       { r:2, c:3 }, 'หลักสี่':      { r:2, c:4 }, 'มีนบุรี':      { r:2, c:8 },
  'ตลิ่งชัน':    { r:3, c:1 }, 'บางพลัด':     { r:3, c:2 }, 'บางซื่อ':     { r:3, c:3 },
  'จตุจักร':     { r:3, c:4 }, 'ลาดพร้าว':    { r:3, c:5 }, 'บึงกุ่ม':     { r:3, c:6 },
  'คันนายาว':    { r:3, c:7 }, 'ลาดกระบัง':   { r:3, c:8 },
  'ทวีวัฒนา':    { r:4, c:1 }, 'บางกอกน้อย':  { r:4, c:2 }, 'ดุสิต':       { r:4, c:3 },
  'พญาไท':       { r:4, c:4 }, 'ดินแดง':      { r:4, c:5 }, 'ห้วยขวาง':    { r:4, c:6 },
  'วังทองหลาง':  { r:4, c:7 }, 'บางกะปิ':     { r:4, c:8 }, 'สะพานสูง':    { r:4, c:9 },
  'บางแค':       { r:5, c:1 }, 'บางกอกใหญ่':  { r:5, c:2 }, 'พระนคร':      { r:5, c:3 },
  'ราชเทวี':     { r:5, c:4 }, 'ป้อมปราบ':    { r:5, c:5 }, 'สัมพันธวงศ์': { r:5, c:6 },
  'สวนหลวง':     { r:5, c:7 }, 'ประเวศ':      { r:5, c:8 },
  'ภาษีเจริญ':   { r:6, c:1 }, 'ธนบุรี':      { r:6, c:2 }, 'คลองสาน':     { r:6, c:3 },
  'ปทุมวัน':     { r:6, c:4 }, 'บางรัก':      { r:6, c:5 }, 'ยานนาวา':     { r:6, c:6 },
  'คลองเตย':     { r:6, c:7 }, 'พระโขนง':     { r:6, c:8 }, 'บางนา':       { r:6, c:9 },
  'หนองแขม':     { r:7, c:1 }, 'จอมทอง':      { r:7, c:2 }, 'บางคอแหลม':   { r:7, c:3 },
  'สาทร':        { r:7, c:4 }, 'วัฒนา':       { r:5, c:9 }, 'คลองสามวา':   { r:2, c:7 },
  'ราษฎร์บูรณะ': { r:8, c:2 }, 'บางบอน':      { r:9, c:1 },
  'ทุ่งครุ':     { r:9, c:2 }, 'บางขุนเทียน': { r:9, c:3 },
};

// Parse "9,517" → 9517
function _parseScore(s) {
  return parseInt(String(s == null ? 0 : s).replace(/[^\d]/g, ''), 10) || 0;
}

// Choose readable text color for an arbitrary background hex
function _contrastText(hex) {
  const h = String(hex || '').replace('#', '');
  if (h.length < 6) return '#fff';
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) > 150 ? '#1a1a1a' : '#fff';
}

// Resolve a Thai district name to a map-grid position (tolerant of name variants)
function _resolvePos(thName) {
  if (!thName) return null;
  if (BKK_MAP_GRID[thName]) return BKK_MAP_GRID[thName];
  const keys = Object.keys(BKK_MAP_GRID);
  const hit = keys.find(k => thName.includes(k) || k.includes(thName));
  return hit ? BKK_MAP_GRID[hit] : null;
}

// Canonical Bangkok district numbering (matches Governor zone_no 1–50)
const DISTRICT_NO = {
  'พระนคร':1, 'ดุสิต':2, 'หนองจอก':3, 'บางรัก':4, 'บางเขน':5,
  'บางกะปิ':6, 'ปทุมวัน':7, 'ป้อมปราบศัตรูพ่าย':8, 'พระโขนง':9, 'มีนบุรี':10,
  'ลาดกระบัง':11, 'ยานนาวา':12, 'สัมพันธวงศ์':13, 'พญาไท':14, 'ธนบุรี':15,
  'บางกอกใหญ่':16, 'ห้วยขวาง':17, 'คลองสาน':18, 'ตลิ่งชัน':19, 'บางกอกน้อย':20,
  'บางขุนเทียน':21, 'ภาษีเจริญ':22, 'หนองแขม':23, 'ราษฎร์บูรณะ':24, 'บางพลัด':25,
  'ดินแดง':26, 'บึงกุ่ม':27, 'สาทร':28, 'บางซื่อ':29, 'จตุจักร':30,
  'บางคอแหลม':31, 'ประเวศ':32, 'คลองเตย':33, 'สวนหลวง':34, 'จอมทอง':35,
  'ดอนเมือง':36, 'ราชเทวี':37, 'ลาดพร้าว':38, 'วัฒนา':39, 'บางแค':40,
  'หลักสี่':41, 'สายไหม':42, 'คันนายาว':43, 'สะพานสูง':44, 'วังทองหลาง':45,
  'คลองสามวา':46, 'บางนา':47, 'ทวีวัฒนา':48, 'ทุ่งครุ':49, 'บางบอน':50,
};

function _resolveZoneNo(thName) {
  if (!thName) return 0;
  if (DISTRICT_NO[thName]) return DISTRICT_NO[thName];
  const key = Object.keys(DISTRICT_NO).find(k => thName.includes(k) || k.includes(thName));
  return key ? DISTRICT_NO[key] : 0;
}

// Derive an English district name from the zone slug (e.g. "phra-nakhon" → "Phra Nakhon").
// Used as a fallback because the council API doesn't return zone_name_en.
function _slugToEn(slug) {
  if (!slug) return '';
  return String(slug).split('-').filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Display label for a party/group (PARTY_EN defined above). In Thai,
// optionally strip the leading "พรรค" (Party) word.
function _partyLabel(party, stripPrefix) {
  if (currentLang === 'en') return PARTY_EN[party] || party;
  return (stripPrefix && party !== 'อิสระ') ? party.replace('พรรค', '') : party;
}

// Transform an /api/map response → unified seat model.
//   mode 'gov' → group by winning candidate (districts won by same person cluster)
//   mode 'sk'  → group by party (seats of same party cluster)
function _transformMapData(json, mode) {
  const data = [];
  const zoneMap = {};
  Object.values(json || {}).forEach(zone => {
    if (!zone || !Array.isArray(zone.candidates) || !zone.candidates.length) return;
    const cands = zone.candidates
      .map(c => ({
        no:    c.candidate_no,
        name:  `${c.f_name || ''} ${c.l_name || ''}`.trim(),
        party: c.party_name || 'อิสระ',
        color: c.color || '#CFD8DC',
        score: _parseScore(c.score),
        pct:   parseFloat(c.score_percent) || 0,
        rank:  c.rank || 99,
        photo: c.photo_square || '',
      }))
      .sort((a, b) => a.rank - b.rank);

    const districtTh = zone.zone_name_th;
    const districtEn = zone.candidates[0].zone_name_en || _slugToEn(zone.zone_slug);
    const total = cands.reduce((s, c) => s + c.score, 0);
    const w = cands[0];
    const group    = mode === 'sk' ? w.party : w.name;
    const groupKey = mode === 'sk' ? w.party : String(w.no);

    data.push({
      district: districtTh, districtEn, slug: zone.zone_slug || '',
      zoneNo: zone.candidates[0].zone_no || _resolveZoneNo(districtTh),
      no: w.no, name: w.name,
      group, groupKey,
      color: w.color, score: w.score,
      pos: _resolvePos(districtTh),
    });
    zoneMap[districtTh] = { candidates: cands, total, districtEn };
  });
  return { data, zoneMap };
}

// Build the BMC council seat model from mock data (instant fallback).
// Grouping key = party.
function _buildSKData() {
  const data = SK_MOCK_DATA.map(c => ({
    district: c.district, districtEn: '', slug: '',
    zoneNo: _resolveZoneNo(c.district),
    no: c.no, name: c.name,
    group: c.party, groupKey: c.party,
    color: (PARTY_COLORS[c.party] || PARTY_COLORS['อิสระ']).bg,
    score: c.score,
    pos: _resolvePos(c.district),
  }));
  return { data, zoneMap: {} };
}

// Group a unified dataset by groupKey, largest group first
function _buildGroups(data) {
  const g = {};
  data.forEach(c => { (g[c.groupKey] = g[c.groupKey] || []).push(c); });
  return Object.values(g).sort((a, b) => b.length - a.length);
}

// Shared data-* attributes for a clickable seat
function _seatAttrs(c) {
  return `data-group="${c.groupKey}" data-no="${c.no}" data-name="${c.name}" `
    + `data-district="${c.district}" data-district-en="${c.districtEn || ''}" `
    + `data-slug="${c.slug || ''}" data-score="${c.score}" data-color="${c.color}" `
    + `data-party="${c.group}" role="button" tabindex="0"`;
}

// Geographic map cell with district name
function _seatMapHTML(c) {
  const txt = _contrastText(c.color);
  const label = currentLang === 'en' ? (c.districtEn || c.district) : c.district;
  return `<div class="sk-seat sk-seat--map"
    style="grid-row:${c.pos.r};grid-column:${c.pos.c};background:${c.color}"
    ${_seatAttrs(c)} title="${label}" aria-label="เบอร์ ${c.no} ${c.name} เขต${c.district}">
    <span class="sk-seat-district-label" style="color:${txt}">${label}</span>
  </div>`;
}

// District-ordered cell: zone number + district name (Governor grid)
function _seatDistrictHTML(c) {
  const txt = _contrastText(c.color);
  const label = currentLang === 'en' ? (c.districtEn || c.district) : c.district;
  return `<div class="sk-seat sk-seat--district" style="background:${c.color}"
    ${_seatAttrs(c)} title="${label}" aria-label="เขต ${c.zoneNo} ${c.district} ${c.name}">
    <span class="sk-seat-zone-no" style="color:${txt}">${c.zoneNo}</span>
    <span class="sk-seat-district-label" style="color:${txt}">${label}</span>
  </div>`;
}

function _setGridLayout(grid, layout) {
  grid.classList.toggle('sk-seat-grid--map',    layout === 'map');
  grid.classList.toggle('sk-seat-grid--groups', layout === 'groups');
}

function _renderDMap(cfg, grid) {
  // One cell per district — keep the top-scoring seat where districts repeat
  const winners = {};
  cfg.data.forEach(c => {
    if (!c.pos) return;
    if (!winners[c.district] || c.score > winners[c.district].score) winners[c.district] = c;
  });
  _setGridLayout(grid, 'map');
  grid.innerHTML = Object.values(winners).map(_seatMapHTML).join('');
}

function renderDView(key) {
  const cfg = DVIEWS[key];
  const grid   = document.getElementById(cfg.gridId);
  const legend = document.getElementById(cfg.legendId);
  if (!grid || !legend) return;

  const groups = _buildGroups(cfg.data);
  const byZone = (a, b) => (a.zoneNo || 0) - (b.zoneNo || 0);

  if (cfg.displayMode === 'map') {
    _renderDMap(cfg, grid);
  } else {
    // Same uniform district-cell grid for both tabs; only the order changes.
    //   Governor / Sort  → ordered by district number 1→50
    //   Council Group   → seats reordered so same-party seats cluster together
    _setGridLayout(grid, null);
    const seats = (cfg.key === 'sk' && cfg.viewMode === 'group')
      ? groups.flatMap(items => [...items].sort(byZone))
      : [...cfg.data].sort(byZone);
    grid.innerHTML = seats.map(_seatDistrictHTML).join('');
  }

  const unit = currentLang === 'en' ? cfg.countUnitEn : cfg.countUnitTh;
  legend.innerHTML = groups.map(items => {
    const rep   = [...items].sort((a, b) => b.score - a.score)[0];
    // Governor groups by candidate name (no party EN); council groups by party
    const label = cfg.key === 'sk' ? _partyLabel(rep.group, true) : rep.group;
    return `<div class="sk-legend-item" data-group="${rep.groupKey}" role="button" tabindex="0">
      <div class="sk-legend-dot" style="background:${rep.color}"></div>
      <span>${label}</span>
      <span class="sk-legend-count">${items.length} ${unit}</span>
    </div>`;
  }).join('');

  if (cfg.activeGroup) _applyGroupHighlight(cfg);
}

function _applyGroupHighlight(cfg) {
  const grid   = document.getElementById(cfg.gridId);
  const legend = document.getElementById(cfg.legendId);
  if (grid) grid.querySelectorAll('.sk-seat').forEach(el => {
    el.classList.toggle('highlighted', el.dataset.group === cfg.activeGroup);
    el.classList.toggle('dimmed',      el.dataset.group !== cfg.activeGroup);
  });
  if (legend) legend.querySelectorAll('.sk-legend-item').forEach(el => {
    el.classList.toggle('active-legend', el.dataset.group === cfg.activeGroup);
  });
}

function _clearGroupHighlight(cfg) {
  cfg.activeGroup = null;
  const grid   = document.getElementById(cfg.gridId);
  const legend = document.getElementById(cfg.legendId);
  if (grid) grid.querySelectorAll('.sk-seat').forEach(el => el.classList.remove('highlighted', 'dimmed'));
  if (legend) legend.querySelectorAll('.sk-legend-item').forEach(el => el.classList.remove('active-legend'));
}

// Bind seat-click + legend-click for one view (called ONCE per view)
function initDViewInteractions(key) {
  const cfg    = DVIEWS[key];
  const grid   = document.getElementById(cfg.gridId);
  const legend = document.getElementById(cfg.legendId);

  if (grid) grid.addEventListener('click', e => {
    const seat = e.target.closest('.sk-seat');
    if (!seat) return;
    showDistrictModal({
      district:   seat.dataset.district,
      districtEn: seat.dataset.districtEn,
      slug:       seat.dataset.slug,
      no:         parseInt(seat.dataset.no),
      name:       seat.dataset.name,
      party:      seat.dataset.party,
      score:      parseInt(seat.dataset.score),
      color:      seat.dataset.color,
      zoneKind:   cfg.zoneKind,
      pre:        cfg.zoneMap[seat.dataset.district],
    });
  });

  if (legend) legend.addEventListener('click', e => {
    const item = e.target.closest('.sk-legend-item');
    if (!item) return;
    const g = item.dataset.group;
    if (cfg.activeGroup === g) { _clearGroupHighlight(cfg); }
    else { cfg.activeGroup = g; _applyGroupHighlight(cfg); }
  });
}

// ── District popup modal ──────────────────────────────────────────────────── //
let _modalReq = 0; // guards against out-of-order async renders

function _renderModalCandidates(candList, candidates, total) {
  const maxScore = candidates[0] ? (candidates[0].score || 1) : 1;
  candList.innerHTML = candidates.map(c => {
    const bg = c.color || (PARTY_COLORS[c.party] || PARTY_COLORS['อิสระ']).bg;
    const pct = c.pct != null ? c.pct.toFixed(2) : (total ? (c.score / total * 100).toFixed(2) : '0.00');
    const barPct = (c.score / maxScore * 100).toFixed(1);
    const rankClass = c.rank === 1 ? 'rank-1' : c.rank === 2 ? 'rank-2' : 'rank-3';
    const winnerClass = c.rank === 1 ? 'winner' : '';
    return `
      <div class="sk-sheet-cand-card ${winnerClass}">
        <div class="sk-sheet-rank ${rankClass}">${c.rank}</div>
        <div class="sk-sheet-avatar" style="background:${bg}20;border:1.5px solid ${bg}40">${
          c.photo ? `<img src="${c.photo}" alt="${c.name}" loading="lazy" onerror="this.remove()">` : ''
        }</div>
        <div class="sk-sheet-cand-body">
          <div class="sk-sheet-party-row">
            <div class="sk-sheet-party-dot" style="background:${bg}"></div>
            <span class="sk-sheet-party-name">${_partyLabel(c.party, false)}</span>
          </div>
          <div class="sk-sheet-cand-name">${c.name}</div>
          <span class="sk-sheet-cand-no">${currentLang === 'en' ? 'No.' : 'เบอร์'} ${c.no}</span>
        </div>
        <div class="sk-sheet-score-col">
          <div class="sk-sheet-score-num">${c.score.toLocaleString()}</div>
          <div class="sk-sheet-score-pct">${pct}%</div>
        </div>
        <div class="sk-sheet-bar-wrap">
          <div class="sk-sheet-bar" style="width:${barPct}%;background:${bg}"></div>
        </div>
      </div>`;
  }).join('');
}

let _lastModalWinner = null;
async function showDistrictModal(winner) {
  _lastModalWinner = winner;
  const overlay   = document.getElementById('skDistrictOverlay');
  const nameEl    = document.getElementById('skSheetName');
  const labelEl   = document.getElementById('skSheetLabel');
  const totalEl   = document.getElementById('skSheetTotal');
  const candList  = document.getElementById('skSheetCandList');
  if (!overlay) return;

  const req = ++_modalReq;
  const districtEn = winner.districtEn || winner.district;
  labelEl.textContent = currentLang === 'en' ? `District ${districtEn}` : `เขต${winner.district}`;
  nameEl.textContent  = currentLang === 'en' ? districtEn : winner.district;

  // Instant paint: show the top candidates we already have from the map data,
  // then quietly fill in the complete list when the zone detail arrives.
  if (winner.pre && winner.pre.candidates && winner.pre.candidates.length) {
    totalEl.textContent = (winner.pre.total || 0).toLocaleString();
    _renderModalCandidates(candList, winner.pre.candidates, winner.pre.total);
  } else {
    totalEl.textContent = '…';
    candList.innerHTML  = `<div class="sk-sheet-loading">${currentLang === 'en' ? 'Loading…' : 'กำลังโหลด…'}</div>`;
  }

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Full candidate list from the zone detail endpoint
  if (winner.slug) {
    try {
      const d = await fetchZoneDetail(winner.slug, winner.zoneKind);
      if (req !== _modalReq) return; // a newer click superseded this one
      const candidates = (d.candidates || [])
        .map(c => ({
          no:    c.candidate_no,
          name:  `${c.f_name || ''} ${c.l_name || ''}`.trim(),
          party: c.party_name || 'อิสระ',
          color: c.color || '#CFD8DC',
          score: _parseScore(c.score),
          pct:   parseFloat(c.score_percent) || 0,
          rank:  c.rank || 99,
          photo: c.photo_square || '',
        }))
        .sort((a, b) => a.rank - b.rank);
      const total = _parseScore(d.total_votes) || candidates.reduce((s, c) => s + c.score, 0);
      totalEl.textContent = total.toLocaleString();
      _renderModalCandidates(candList, candidates, total);

      // Update "last updated" line from the zone's timestamp
      const tsEl = document.getElementById('skSheetTimestamp');
      const t = _formatUpdated(d.updated_at, currentLang);
      if (tsEl && t) tsEl.textContent = currentLang === 'en'
        ? `Last updated ${t.date}, ${t.time}`
        : `อัปเดตล่าสุด ณ วันที่ ${t.date} ${t.time} น.`;
    } catch {
      if (req !== _modalReq) return;
      // Keep the instant top-candidates view if we already have it
      if (!(winner.pre && winner.pre.candidates && winner.pre.candidates.length)) {
        totalEl.textContent = '—';
        candList.innerHTML = `<div class="sk-sheet-loading">${currentLang === 'en' ? 'Failed to load data' : 'ไม่สามารถโหลดข้อมูลได้'}</div>`;
      }
    }
    return;
  }

  // Fallback (council seats without a slug): mock spread
  const total = Math.round(winner.score / 0.42);
  const wColor = winner.color || (PARTY_COLORS[winner.party] || PARTY_COLORS['อิสระ']).bg;
  const candidates = [
    { rank: 1, name: winner.name,        no: winner.no,            party: winner.party, color: wColor,    score: winner.score },
    { rank: 2, name: 'ผู้สมัครอันดับ 2', no: (winner.no % 9) + 80, party: 'อิสระ',      color: '#90A4AE', score: Math.round(winner.score * 0.70) },
    { rank: 3, name: 'ผู้สมัครอันดับ 3', no: (winner.no % 6) + 90, party: 'อิสระ',      color: '#CFD8DC', score: Math.round(winner.score * 0.14) },
  ];
  totalEl.textContent = total.toLocaleString();
  _renderModalCandidates(candList, candidates, total);
}

function closeDistrictModal() {
  const overlay = document.getElementById('skDistrictOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initDistrictModal() {
  const overlay  = document.getElementById('skDistrictOverlay');
  const closeBtn = document.getElementById('skSheetClose');
  if (closeBtn) closeBtn.addEventListener('click', closeDistrictModal);
  if (overlay) overlay.addEventListener('click', e => {
    if (e.target === overlay) closeDistrictModal();
  });
}

function updateDFabLabel(cfg) {
  const label = document.getElementById(cfg.fabLabelId);
  if (!label) return;
  // Show the action (the mode you'll switch TO), not the current mode
  label.textContent = cfg.viewMode === 'group'
    ? (currentLang === 'en' ? 'By District' : 'ตามเขต')
    : (currentLang === 'en' ? 'By Party' : 'จัดกลุ่ม');
}

// Map/Grid display toggle + Group/Sort FAB for one view (called ONCE per view)
function initDViewControls(key) {
  const cfg   = DVIEWS[key];
  const panel = document.getElementById(`dtab-${key}`);
  if (!panel) return;

  const displayBtns = panel.querySelectorAll('.sk-display-btn');
  const fab         = document.getElementById(cfg.fabId);

  displayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      displayBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cfg.displayMode = btn.dataset.display;
      if (fab) fab.classList.toggle('sk-group-fab--hidden', cfg.displayMode === 'map');
      renderDView(key);
    });
  });

  if (fab) {
    fab.addEventListener('click', () => {
      cfg.viewMode = cfg.viewMode === 'group' ? 'sort' : 'group';
      updateDFabLabel(cfg);
      renderDView(key);
    });
    // FAB is only relevant in Grid mode; default view is Map → hidden
    fab.classList.toggle('sk-group-fab--hidden', cfg.displayMode === 'map');
  }
  updateDFabLabel(cfg);
}

// Tab switching between Council and Governor panels
function initDistrictTabs() {
  const tabs = document.querySelectorAll('.district-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const target = tab.dataset.dtab;
      activeDView = target;
      document.querySelectorAll('.district-panel').forEach(panel => {
        panel.classList.toggle('district-panel-hidden', panel.id !== `dtab-${target}`);
      });
      renderDView(target);
    });
  });
}

// Show council mock instantly, then replace both tabs with live API data
function loadDistrictData() {
  const sk = _buildSKData();           // instant fallback so the grid isn't empty
  DVIEWS.sk.data = sk.data;
  DVIEWS.sk.zoneMap = sk.zoneMap;
  renderDView('sk');
  loadSKMapFromAPI();
  loadGovMapFromAPI();
}

async function loadSKMapFromAPI() {
  try {
    const res = await fetch(RESULTS_SK_MAP_API);
    const json = await res.json();
    const { data, zoneMap } = _transformMapData(json, 'sk');
    if (!data.length) return; // keep mock fallback
    DVIEWS.sk.data = data;
    DVIEWS.sk.zoneMap = zoneMap;
    DVIEWS.sk.activeGroup = null;
    renderDView('sk');
  } catch {
    /* keep mock council data on screen */
  }
}

async function loadGovMapFromAPI() {
  try {
    const res = await fetch(RESULTS_MAP_API);
    const json = await res.json();
    const { data, zoneMap } = _transformMapData(json, 'gov');
    if (!data.length) return;
    DVIEWS.gov.data = data;
    DVIEWS.gov.zoneMap = zoneMap;
    DVIEWS.gov.activeGroup = null;
    renderDView('gov');
  } catch {
    /* governor map stays empty if the API is unreachable */
  }
}

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
    if (isEn) {
      label.textContent = fullName.split(' ').pop();
    } else {
      const firstName = c.nameTh.replace(/^(นางสาว|น\.ส\.|นาง|นาย|ม\.ล\.|ม\.ร\.ว\.|ม\.จ\.|พล\.ต\.ท\.|พล\.ต\.ต\.|พล\.ต\.|พล\.อ\.|ร\.ต\.อ\.)\s*/u, '').split(' ')[0];
      label.textContent = 'คุณ ' + firstName;
    }

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
