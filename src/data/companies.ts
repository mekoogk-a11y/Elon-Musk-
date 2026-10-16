/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Company } from '../types';
import { MASTER_SOURCES } from './sources';

export const COMPANIES_DATA: Company[] = [
  {
    id: 'spacex',
    name: 'SpaceX',
    taglineEn: 'Making Life Multiplanetary through Reusable Aerospace Engineering',
    taglineAr: 'جعل الحياة متعددة الكواكب عبر هندسة فضاء قابلة لإعادة الاستخدام',
    foundedYear: 2002,
    roleEn: 'Founder, CEO & Chief Engineer',
    roleAr: 'المؤسس، الرئيس التنفيذي ورئيس المهندسين',
    status: 'active',
    category: 'Aerospace',
    descriptionEn: 'Space Exploration Technologies Corp. revolutionized orbital spaceflight by developing the world’s first reusable orbital-class rocket boosters (Falcon 9), certified human spacecraft (Dragon), global megaconstellation satellite internet (Starlink), and the fully reusable super heavy-lift launch system (Starship).',
    descriptionAr: 'أحدثت شركة سبيس إكس ثورة في رحلات الفضاء المدارية بتطوير أول معززات صواريخ مدارية قابلة لإعادة الاستخدام في العالم (فالكون 9)، ومركبات مأهولة معتمدة (دراغون)، وشبكة إنترنت فضائي عالمية (ستارلينك)، ومنظومة الإطلاق الثقيلة فائقة الحجم القابلة لإعادة الاستخدام بالكامل (ستارشيب).',
    coreTechnologies: [
      'Reusable Rocket Boosters (Falcon 9 / Super Heavy)',
      'Raptor 3 Full-Flow Staged Combustion Methane Engines',
      'Merlin 1D LOX/RP-1 Engines',
      'Autonomous Drone Ship Recovery Platforms (ASDS)',
      'Starlink Laser Inter-Satellite Optical Links',
      'Dragon PICA-X Thermal Protection Heatshield'
    ],
    keyProducts: [
      {
        name: 'Falcon 9',
        descriptionEn: 'The workhorse two-stage orbital rocket that established routine booster reuse with over 350 successful landings.',
        descriptionAr: 'الصاروخ المداري ثنائي المراحل الذي رسخ إعادة الاستخدام الدورية بأكثر من 350 عملية هبوط ناجحة.',
        status: 'Operational'
      },
      {
        name: 'Falcon Heavy',
        descriptionEn: 'Triple-core heavy-lift rocket capable of lifting nearly 64 metric tons into low Earth orbit.',
        descriptionAr: 'صاروخ الرفع الثقيل ثلاثي المعززات القادر على رفع قرابة 64 طناً مترياً إلى المدار الأرضي المنخفض.',
        status: 'Operational'
      },
      {
        name: 'Dragon & Crew Dragon',
        descriptionEn: 'Autonomous spacecraft delivering cargo and NASA astronauts to the International Space Station with splashdown recovery.',
        descriptionAr: 'مركبة فضائية ذاتية القيادة لنقل الحمولات ورواد فضاء ناسا لمحطة الفضاء الدولية مع الهبوط بالمظلات في المحيط.',
        status: 'Operational'
      },
      {
        name: 'Starship & Super Heavy',
        descriptionEn: '121-meter stainless steel launch system designed for total reusability, Moon Artemis HLS landings, and Mars colonization.',
        descriptionAr: 'منظومة إطلاق من الفولاذ المقاوم للصدأ بطول 121 متراً مصممة لإعادة الاستخدام الكامل والهبوط على القمر والمريخ.',
        status: 'Active Flight Testing / Operational Path'
      }
    ],
    metrics: [
      { labelEn: 'Orbital Launches', labelAr: 'الإطلاقات المدارية', value: '400+' },
      { labelEn: 'Successful Booster Landings', labelAr: 'عمليات هبوط المعزز الناجحة', value: '360+' },
      { labelEn: 'Active Starlink Satellites', labelAr: 'أقمار ستارلينك العاملة', value: '6,400+' },
      { labelEn: 'Astronauts Flown', labelAr: 'رواد فضاء تم نقلهم', value: '50+' }
    ],
    sources: [MASTER_SOURCES.spacexFalconGuide, MASTER_SOURCES.nasaCommercialCrew, MASTER_SOURCES.nasaArtemisHLS]
  },
  {
    id: 'tesla',
    name: 'Tesla',
    taglineEn: 'Accelerating the Transition to Sustainable Energy, Robotics & Autonomy',
    taglineAr: 'تسريع انتقال العالم نحو الطاقة المستدامة والروبوتات والذكاء الاصطناعي المستقل',
    foundedYear: 2004,
    roleEn: 'Technoking, CEO & Product Architect',
    roleAr: 'الرئيس التنفيذي، مهندس المنتجات والمستثمر المبكر',
    status: 'active',
    category: 'Automotive & AI',
    descriptionEn: 'Tesla began as an electric vehicle startup and evolved into an engineering conglomerate spanning high-volume electric transport, megawatt-scale battery energy storage (Megapack), distributed solar, custom AI silicon (D1 / Dojo / Hardware 4), end-to-end neural network autonomy (FSD), and humanoid robotics (Optimus).',
    descriptionAr: 'بدأت تيسلا كشركة ناشئة للسيارات الكهربائية وتطورت إلى صرح هندسي يشمل النقل الكهربائي عالي الكثافة، وتخزين الطاقة الضخم (ميغاباك)، والسيليكون المتخصص للذكاء الاصطناعي، والقيادة الذاتية الكاملة عبر الشبكات العصبية المباشرة، والروبوت البشري أوبتيموس.',
    coreTechnologies: [
      'End-to-End Neural Network Vision Autonomy (FSD)',
      'Structural 4680 Battery Cells & Large Pack Architecture',
      'Mega-Casting Single-Piece High-Pressure Aluminum Die Casting',
      'Permanent Magnet Switched Reluctance Motors',
      'In-House Tesla AI Computer (HW4 / AI5)',
      'Unboxed Manufacturing Assembly Architecture'
    ],
    keyProducts: [
      {
        name: 'Model 3 & Model Y',
        descriptionEn: 'Mass-market electric sedans and crossovers, with Model Y achieving the world’s best-selling vehicle title across all fuel types.',
        descriptionAr: 'سيارات كهربائية واسعة الانتشار، حيث تصدرت موديل واي قائمة السيارات الأكثر مبيعاً في العالم بين جميع فئات الوقود.',
        status: 'Mass Production'
      },
      {
        name: 'Cybertruck',
        descriptionEn: 'Ultra-hard cold-rolled stainless steel exoskeleton utility truck with steer-by-wire and 48-volt low-voltage architecture.',
        descriptionAr: 'شاحنة من الفولاذ المقاوم للصدأ المدرفل على البارد بهيكل خارجي وتوجيه سلكي إلكتروني ونظام كهربائي 48 فولت.',
        status: 'Production'
      },
      {
        name: 'Megapack & Powerwall',
        descriptionEn: 'Utility-scale energy storage stabilizing electric grids worldwide and residential backup systems.',
        descriptionAr: 'منظومات ضخمة لتخزين الطاقة على مستوى شبكات الكهرباء الوطنية وأنظمة الطاقة المنزلية الاحتياطية.',
        status: 'High Growth Production'
      },
      {
        name: 'Cybercab & Robovan',
        descriptionEn: 'Dedicated autonomous robotaxi vehicles designed without steering wheel or pedals, utilizing wireless inductive charging.',
        descriptionAr: 'مركبات تاكسي ذاتي القيادة بدون مقود أو دواسات وتعتمد كلياً على الشحن اللاسلكي بالحث الكهرومغناطيسي.',
        status: 'Pre-production Testing'
      }
    ],
    metrics: [
      { labelEn: 'Cumulative Deliveries', labelAr: 'إجمالي السيارات المسلّمة', value: '7,000,000+' },
      { labelEn: 'Megapack Deployments', labelAr: 'طاقة تخزين ميغاباك المنشورة', value: '30+ GWh' },
      { labelEn: 'Supercharger Connectors', labelAr: 'أجهزة الشحن الفائق عالمياً', value: '60,000+' }
    ],
    sources: [MASTER_SOURCES.secTesla10K2025, MASTER_SOURCES.reutersTeslaAutonomy]
  },
  {
    id: 'xai',
    name: 'xAI',
    taglineEn: 'Accelerating Human Discovery through Foundational Scientific Artificial Intelligence',
    taglineAr: 'تسريع الاستكشاف البشري عبر الذكاء الاصطناعي التأسيسي العلمي',
    foundedYear: 2023,
    roleEn: 'Founder & CEO',
    roleAr: 'المؤسس والرئيس التنفيذي',
    status: 'active',
    category: 'Artificial Intelligence',
    descriptionEn: 'xAI was established in July 2023 with the explicit mission to understand the true nature of the universe. In record time, xAI built "Colossus" in Memphis, Tennessee—one of the world’s largest GPU supercomputers utilizing over 100,000 liquid-cooled Nvidia processors—to train the Grok series of frontier multimodal models.',
    descriptionAr: 'تأسست xAI في يوليو 2023 بهدف معلن هو فهم الطبيعة الحقيقية للكون. وفي وقت قياسي أنشأت الشركة عملاق الحوسبة "كولوسوس" في ممفيس، تينيسي—أحد أضخم الحواسيب الفائقة بمعالجات رسومية مبردة بالسائل—لتدريب نماذج غروك المتقدمة متعددة الوسائط.',
    coreTechnologies: [
      'Grok Frontier Large Multimodal Models (LMM)',
      'Memphis Colossus 100,000+ GPU Supercluster Architecture',
      'Real-Time Multimodal Reasoning & Synthesis Pipeline',
      'High-Density Direct-to-Chip Liquid Cooling System',
      'Low-Latency Truth-Seeking Scientific Verification'
    ],
    keyProducts: [
      {
        name: 'Grok-2 & Grok-3',
        descriptionEn: 'State-of-the-art multimodal reasoning models featuring real-time knowledge synthesis and advanced coding/math verification.',
        descriptionAr: 'نماذج استدلال وتوليد معرفي متقدمة تتميز بالتكامل اللحظي مع الأحداث والبرمجة وحل المسائل العلمية المعقدة.',
        status: 'Active Deployment'
      },
      {
        name: 'Colossus Supercomputer',
        descriptionEn: 'Massive compute cluster built in under 122 days, setting industry records for data center power delivery and parallel scaling.',
        descriptionAr: 'عنقود حوسبة فائق تم تشييده في أقل من 122 يوماً مسجلاً أرقاماً قياسية في سرعة الربط وإمدادات الطاقة.',
        status: 'Operational'
      }
    ],
    metrics: [
      { labelEn: 'Training GPUs', labelAr: 'معالجات التدريب الفائقة', value: '100,000+ H100/H200' },
      { labelEn: 'Cluster Construction Time', labelAr: 'مدة بناء عنقود الحوسبة', value: '122 Days' }
    ],
    sources: [MASTER_SOURCES.xaiColossusReport]
  },
  {
    id: 'neuralink',
    name: 'Neuralink',
    taglineEn: 'Engineering High-Bandwidth Brain-Computer Interfaces for Neurological Restoration',
    taglineAr: 'هندسة واجهات الدماغ والحاسوب عالية النطاق لاستعادة الوظائف العصبية',
    foundedYear: 2016,
    roleEn: 'Co-Founder & CEO',
    roleAr: 'المؤسس المشارك والرئيس التنفيذي',
    status: 'active',
    category: 'Neurotechnology',
    descriptionEn: 'Neuralink is developing fully implantable, wireless brain-computer interfaces (BCIs) aimed at restoring autonomy to individuals with quadriplegia and severe neurological conditions. The N1 implant uses 1,024 microscopic electrode sites across 64 ultra-flexible threads, inserted precisely by the R1 surgical robot to avoid cerebral vasculature.',
    descriptionAr: 'تعمل نيورالينك على تطوير واجهات دماغية حاسوبية لاسلكية بالكامل وقابلة للزرع داخل الجمجمة لاستعادة استقلالية الحركة لمن يعانون الشلل الرباعي. وتستخدم شريحة N1 عدد 1024 قطباً كهربائياً دقيقاً موزعة على 64 خيطاً مرناً يزرعها الروبوت الجراحي R1 بدقة لتفادي الأوعية الدموية.',
    coreTechnologies: [
      'N1 Hermetically Sealed Sub-Cranial Implantable ASIC',
      '64 Flexible Biocompatible Polymer Electrode Threads (1,024 Channels)',
      'R1 Micron-Precision Automated Optical Surgical Robot',
      'Wireless Inductive Power Transfer & Bluetooth Telemetry',
      'Spike Detection & Neural Decoder Software Pipeline'
    ],
    keyProducts: [
      {
        name: 'Telepathy (N1 BCI System)',
        descriptionEn: 'Enables direct mental control of computers, digital keyboards, and gaming consoles for paralyzed individuals.',
        descriptionAr: 'يتيح التحكم العقلي المباشر بالحواسيب ولوحات المفاتيح والألعاب الرقمية للمصابين بالشلل الرباعي.',
        status: 'Human Clinical Trials (PRIME Study)'
      },
      {
        name: 'Blindsight Program',
        descriptionEn: 'Early-stage research aimed at stimulating the visual cortex to restore sight for individuals with optic nerve damage.',
        descriptionAr: 'برنامج بحثي مبكر يهدف لتحفيز القشرة البصرية لاستعادة الرؤية لمن يعانون تلفاً في العصب البصري.',
        status: 'Pre-clinical / FDA Breakthrough Designation'
      }
    ],
    metrics: [
      { labelEn: 'Electrode Channels', labelAr: 'قنوات الأقطاب الكهربائية', value: '1,024' },
      { labelEn: 'Implant Thickness', labelAr: 'سُمك الشريحة في الجمجمة', value: '8 mm' },
      { labelEn: 'Human Study Status', labelAr: 'مرحلة التجارب البشرية', value: 'Active Clinical Trial' }
    ],
    sources: [MASTER_SOURCES.neuralinkN1Prime]
  },
  {
    id: 'boring',
    name: 'The Boring Company',
    taglineEn: 'Solving Soul-Crushing Traffic through Fast, Scalable Underground 3D Mobility',
    taglineAr: 'حل أزمة المرور الخانقة عبر شبكات أنفاق ثلاثية الأبعاد سريعة وقابلة للتوسع',
    foundedYear: 2016,
    roleEn: 'Founder',
    roleAr: 'المؤسس',
    status: 'active',
    category: 'Infrastructure',
    descriptionEn: 'Founded to alleviate urban traffic congestion by creating cost-effective, rapidly excavated underground tunnel systems. By designing electrified, automated tunneling machines (Prufrock) and all-electric passenger transit loops (Vegas Loop), the company eliminates surface friction and enables high-capacity express transport.',
    descriptionAr: 'تأسست لحل التكدس المروري في المدن الكبرى عبر إنشاء منظومات أنفاق تحت الأرض بتكلفة منخفضة وحفر سريع. وعبر تطوير حفارات كهربائية آلية (بروفروك) وشبكات نقل ركاب كهربائية بالكامل (فيغاس لوب)، تتيح الشركة نقلاً آمناً وسريعاً يتفادى ازدحام الشوارع.',
    coreTechnologies: [
      'Prufrock Continuous Mining & Tunnel Boring Machines',
      'Precast Concrete Segment Erector Automation',
      'Autonomous Loop Fleet Operations Architecture',
      'High-Efficiency Subterranean Station Design'
    ],
    keyProducts: [
      {
        name: 'Vegas Loop',
        descriptionEn: 'Active commercial underground passenger transit system connecting the Las Vegas Convention Center, Resorts World, and expanding to Harry Reid Airport.',
        descriptionAr: 'شبكة أنفاق نقل ركاب عاملة تربط مركز مؤتمرات لاس فيغاس والمنتجعات وتتوسع نحو المطار الدولي.',
        status: 'Operational & Expanding (68+ Miles Planned)'
      },
      {
        name: 'Prufrock 3 Tunnel Boring Machine',
        descriptionEn: 'Designed to "porpoise" directly into the earth without excavation pits and dig continuously at speeds exceeding traditional machines.',
        descriptionAr: 'حفارة مصممة للدخول المباشر إلى باطن الأرض دون حفر خنادق ضخمة والحفر المتواصل بسرعات قياسية.',
        status: 'Active Deployment'
      }
    ],
    metrics: [
      { labelEn: 'Passengers Transported in Vegas', labelAr: 'ركاب تم نقلهم في فيغاس', value: '2,500,000+' },
      { labelEn: 'Approved Loop Network', labelAr: 'طول شبكة فيغاس المعتمدة', value: '68+ Miles / 93+ Stations' }
    ],
    sources: [MASTER_SOURCES.secTesla10K2025]
  },
  {
    id: 'x-corp',
    name: 'X (formerly Twitter)',
    taglineEn: 'The Global Digital Town Square & Everything App',
    taglineAr: 'الساحة الرقمية العامة العالمية وتطبيق كل شيء',
    foundedYear: 2022,
    roleEn: 'Owner & Chief Technology Officer',
    roleAr: 'المالك ورئيس التكنولوجيا',
    status: 'active',
    category: 'Software & Social',
    descriptionEn: 'Acquired in October 2022 for $44 billion and re-architected from the ground up: replacing legacy microservices with lean unified tech stacks, open-sourcing the recommendation algorithm, scaling long-form video/podcasting, integrating Grok real-time AI, and securing money transmitter licenses across the U.S. for peer-to-peer digital payments.',
    descriptionAr: 'تم الاستحواذ عليها في أكتوبر 2022 بمبلغ 44 مليار دولار وإعادة هيكلتها بالكامل: استبدال مئات الخدمات القديمة ببنية خفيفة موحدة، ونشر خوارزمية التوصية كمصدر مفتوح، والتوسع في الفيديو والبث المباشر، وتكامل ذكاء غروك، والحصول على تراخيص الدفع المالي.',
    coreTechnologies: [
      'Open-Source Algorithmic Feed Ranking Logic',
      'Low-Latency Global Video Streaming Infrastructure',
      'X Payments (Peer-to-Peer Financial Rails)',
      'Native Grok Context Integration & Summarization'
    ],
    keyProducts: [
      {
        name: 'X Microblogging & Long-Form Video',
        descriptionEn: 'Real-time global news distribution, citizen journalism, audio Spaces, and creator revenue sharing.',
        descriptionAr: 'بث الأخبار الحية وصحافة المواطن والمساحات الصوتية التفاعلية ومشاركة أرباح صناع المحتوى.',
        status: 'Operational'
      },
      {
        name: 'X Payments / X Money',
        descriptionEn: 'Regulatory licensing and software rails enabling digital wallet transactions, tipping, and merchant checkout.',
        descriptionAr: 'البنية التنظيمية والبرمجية للمدفوعات الرقمية والمحافظ الإلكترونية بين المستخدمين والتجار.',
        status: 'State Licensing Rollout'
      }
    ],
    metrics: [
      { labelEn: 'Daily Active Users', labelAr: 'المستخدمون النشطون يومياً', value: '250,000,000+' },
      { labelEn: 'Payment Licenses Acquired', labelAr: 'تراخيص الدفع المالي في أمريكا', value: '35+ States' }
    ],
    sources: [MASTER_SOURCES.xaiColossusReport]
  },
  {
    id: 'zip2',
    name: 'Zip2',
    taglineEn: 'Pioneering Online City Guides & Commercial Internet Directories',
    taglineAr: 'ريادة أدلة المدن الرقمية والخرائط التجارية للصحف على الإنترنت المبكر',
    foundedYear: 1995,
    roleEn: 'Co-Founder & Chief Technology Officer',
    roleAr: 'المؤسس المشارك ورئيس التكنولوجيا',
    status: 'acquired',
    category: 'Software & Social',
    descriptionEn: 'Musk’s first venture, founded in Palo Alto alongside his brother Kimbal Musk with $2,000 in seed capital. Zip2 created vector map routing, business yellow-page databases, and licensed software to major newspaper publishers (The New York Times, Knight Ridder) to bring local commerce online during the dawn of the World Wide Web.',
    descriptionAr: 'أول مشروع ريادي لإيلون ماسك، أسسه مع شقيقه كيمبال في بالو ألتو برأس مال بسيط. ابتكرت Zip2 خرائط رقمية تفاعلية وقواعد بيانات للأعمال المحلية ومررت برمجياتها لكبريات الصحف الأمريكية لجلب التجارة المحلية إلى الإنترنت في بداياته.',
    coreTechnologies: [
      'NavTech Vector Road Map Database Vectorization',
      'Early Web Server Directory Integration',
      'Local Business Geographic Query Engine'
    ],
    keyProducts: [
      {
        name: 'Zip2 City Directory Software',
        descriptionEn: 'Turnkey online directory and mapping platform licensed to newspapers for localized advertising.',
        descriptionAr: 'منصة أدلة إلكترونية وخرائط مرخصة للصحف الورقية لتمكين الإعلانات المحلية التفاعلية.',
        status: 'Acquired by Compaq in 1999 ($307M)'
      }
    ],
    metrics: [
      { labelEn: 'Acquisition Value (1999)', labelAr: 'قيمة صفقة الاستحواذ', value: '$307 Million' },
      { labelEn: 'Musk Share Proceeds', labelAr: 'حصة إيلون ماسك من الصفقة', value: '$22 Million' }
    ],
    sources: [MASTER_SOURCES.isaacsonBiography]
  },
  {
    id: 'xcom-paypal',
    name: 'X.com / PayPal',
    taglineEn: 'The Vanguard of Online Financial Services & Email-Based Money Transfer',
    taglineAr: 'طليعة الخدمات المصرفية الرقمية وتحويل الأموال عبر البريد الإلكتروني',
    foundedYear: 1999,
    roleEn: 'Founder & CEO (X.com), Largest Shareholder (PayPal)',
    roleAr: 'المؤسس والرئيس التنفيذي لـ X.com، المساهم الأكبر في باي بال',
    status: 'acquired',
    category: 'Fintech',
    descriptionEn: 'Musk invested $12M of his Zip2 proceeds to launch X.com as one of the world’s first FDIC-insured internet banks. In 2000, X.com merged with Peter Thiel and Max Levchin’s Confinity, whose palm pilot payment feature was renamed PayPal. The company solved online auction friction, achieved hyper-viral growth on eBay, and was acquired by eBay in 2002 for $1.5 billion.',
    descriptionAr: 'استثمر ماسك 12 مليون دولار من عائدات Zip2 لتأسيس X.com كأحد أوائل البنوك الرقمية المرخصة والمؤمنة في العالم. وفي عام 2000 اندمجت مع كونفينيتي وأطلقت خدمة باي بال التي حلت مشكلة الدفع في المزادات الإلكترونية وتوسعت بسرعة فائقة حتى استحوذت عليها إيباي عام 2002 بمبلغ 1.5 مليار دولار.',
    coreTechnologies: [
      'Email-Linked Peer-to-Peer Fund Transfer Rails',
      'Fraud Mitigation & Automated Risk Scoring Systems',
      'Viral Sign-up Incentive Architecture'
    ],
    keyProducts: [
      {
        name: 'PayPal Online Payment Gateway',
        descriptionEn: 'Frictionless digital payment protocol enabling consumers to send and receive funds securely using email accounts.',
        descriptionAr: 'بوابة دفع رقمية تتيح للمستخدمين إرسال واستقبال الأموال بأمان عبر حساب البريد الإلكتروني.',
        status: 'Acquired by eBay in 2002 ($1.5B)'
      }
    ],
    metrics: [
      { labelEn: 'Acquisition Value (2002)', labelAr: 'قيمة الاستحواذ من قبل إيباي', value: '$1.5 Billion' },
      { labelEn: 'Musk Net Proceeds', labelAr: 'صافي عائدات ماسك (رأس مال الفضاء وتيسلا)', value: '~$180 Million' }
    ],
    sources: [MASTER_SOURCES.isaacsonBiography]
  }
];
