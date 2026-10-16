/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FailureCase } from '../types';
import { MASTER_SOURCES } from './sources';

export const FAILURES_DATA: FailureCase[] = [
  {
    id: 'falcon1-early-failures',
    titleEn: 'Early Falcon 1 Launch Catastrophes (Flights 1, 2, and 3)',
    titleAr: 'إخفاقات إطلاق فالكون 1 الثلاثة الأولى (2006-2008)',
    company: 'SpaceX',
    yearRange: '2006 – 2008',
    issueEn: 'SpaceX suffered three consecutive total launch vehicle failures on Kwajalein Atoll. Flight 1 failed due to a corroded aluminum B-nut causing a fuel leak and fire. Flight 2 suffered stage oscillation and premature engine shutdown. Flight 3 failed when residual engine thrust during stage separation caused the first stage to collide with the second stage.',
    issueAr: 'منيت سبيس إكس بثلاث كوارث إطلاق متتالية لصاروخ فالكون 1 في جزيرة كواجالين. فشلت الرحلة 1 بسبب تآكل صامولة ألومنيوم تسببت في تسرب وقود وحريق؛ وفشلت الرحلة 2 بسبب تذبذب المرحلة وانطفاء المحرك؛ وفشلت الرحلة 3 باصطدام المرحلة الأولى بالمرحلة الثانية أثناء الانفصال نتيجة دفع متبقٍ في المحرك.',
    engineeringResponseEn: 'SpaceX redesigned fuel line couplings using corrosion-resistant stainless alloys, recalibrated second-stage propellant slosh baffles, and extended stage separation pneumatic timing by several seconds to guarantee clean clearance.',
    engineeringResponseAr: 'أعادت سبيس إكس تصميم وصلات الوقود بسبائك صلب مقاومة للملوحة، وأعادت ضبط حواجز تذبذب الوقود في الخزانات، وزادت الفارق الزمني قبل تشغيل المرحلة الثانية لتفادي أي اصطدام ميكانيكي.',
    outcomeEn: 'Flight 4 launched successfully on September 28, 2008, achieving orbit with zero institutional capital remaining, unlocking the historic $1.6B NASA Commercial Resupply Services (CRS) lifeline.',
    outcomeAr: 'نجحت الرحلة الرابعة في 28 سبتمبر 2008 ووصلت للمدار دون أن يتبقى في خزينة الشركة أي سيولة، مما فتح الباب لنيل عقد ناسا التاريخي بقيمة 1.6 مليار دولار لإنقاذ الشركة.',
    sources: [MASTER_SOURCES.spacexFalconGuide, MASTER_SOURCES.isaacsonBiography]
  },
  {
    id: 'tesla-2008-near-bankruptcy',
    titleEn: 'Tesla 2008 Near-Bankruptcy & Roadster Cost Overruns',
    titleAr: 'أزمة تيسلا المالية وتجاوز تكلفة الرودستر (2008)',
    company: 'Tesla',
    yearRange: '2008',
    issueEn: 'Tesla Roadster transmission failures and battery manufacturing issues drove unit production costs to over $140,000 for a car priced at $92,000, burning cash at an unsustainable rate during the 2008 Great Recession.',
    issueAr: 'أدت إخفاقات علبة التروس ومشاكل تجميع البطاريات في الرودستر إلى ارتفاع تكلفة إنتاج السيارة إلى 140,000 دولار بينما بيعت بـ 92,000 دولار، مما استنزف سيولة الشركة تزامناً مع انهيار الأسواق العالمية عام 2008.',
    engineeringResponseEn: 'Musk fired executive leadership, restructured supplier contracts, transitioned transmission design to a single-speed direct reduction gearbox, and put his remaining personal capital (~$40M) on the line to close an emergency financing round hours before payroll liquidation.',
    engineeringResponseAr: 'أقال ماسك القيادة التنفيذية السابقة، وأعاد التفاوض مع الموردين، واستبدل ناقل الحركة المعقد بناقل سرعة أحادي مباشر وموثوق، وضخ آخر ما يملك من ثروته الشخصية (40 مليون دولار) لإنقاذ الشركة قبل ساعات من إفلاسها.',
    outcomeEn: 'Tesla stabilized Roadster deliveries, attracted a pivotal $50M investment from Daimler, and secured a $465M Department of Energy advanced vehicle loan in 2009.',
    outcomeAr: 'استقرت عمليات تسليم الرودستر، واجتذبت تيسلا استثماراً استراتيجياً من دايملر (مرسيدس) بقيمة 50 مليون دولار وقرضاً فيدرالياً لتطوير السيارات الكهربائية.',
    sources: [MASTER_SOURCES.secTesla10K2025, MASTER_SOURCES.isaacsonBiography]
  },
  {
    id: 'model-3-production-hell',
    titleEn: 'Tesla Model 3 "Production Hell" & Excessive Automation Hubris',
    titleAr: '"جحيم إنتاج" موديل 3 وفرط الأتمتة الروبوتية (2017-2018)',
    company: 'Tesla',
    yearRange: '2017 – 2018',
    issueEn: 'Attempting to build an "alien dreadnought" factory with full robotic automation backfired catastrophically. Flawed vision sensors, robotic jams in battery pack module lines, and paint shop bottlenecks held production to a fraction of the 5,000 car/week target, bringing Tesla within single-digit weeks of bankruptcy.',
    issueAr: 'محاولة بناء مصنع مؤتمت بنسبة 100% بدون تدخل بشري باءت بفشل ذريع. أدت حساسات الرؤية المعيبة وتعطل الروبوتات في خطوط تجميع خلايا البطاريات واختناقات طلاء السيارات إلى انخفاض الإنتاج لعشرات السيارات فقط أسبوعياً، مقتربة من الإفلاس الحتمي.',
    engineeringResponseEn: 'Musk openly admitted "excessive automation at Tesla was a mistake... humans are underrated." The company dismantled malfunctioning robots, erected a temporary sprung structure (giant tent) outside the Fremont factory, and simplified components.',
    engineeringResponseAr: 'اعترف ماسك علانية بأن "الأتمتة المفرطة كانت خطأً فادحاً... وأن البشر لا غنى عنهم". وتم تفكيك مئات الروبوتات المعطلة، ونصب خيمة عملاقة بجوار المصنع كخط تجميع إضافي لتبسيط سير العمل.',
    outcomeEn: 'Tesla reached the 5,000/week production threshold by mid-2018, turned sustainably profitable, and scaled Model 3 and Model Y into global multi-million unit bestsellers.',
    outcomeAr: 'تجاوزت تيسلا حاجز 5,000 سيارة أسبوعياً في منتصف 2018، وبدأت تحقيق أرباح فصلية مستمرة، لتصبح موديل 3 وموديل واي السيارات الأكثر انتشاراً عالمياً.',
    sources: [MASTER_SOURCES.secTesla10K2025]
  },
  {
    id: 'starship-ift-failures',
    titleEn: 'Early Starship Flight Explosions & Rapid Iterative Telemetry',
    titleAr: 'انفجارات الرحلات التجريبية الأولى لستارشيب (2020-2023)',
    company: 'SpaceX',
    yearRange: '2020 – 2024',
    issueEn: 'High-altitude suborbital prototypes (SN8, SN9, SN10, SN11) suffered multiple landing explosions due to fuel header tank pressure drops and engine relight stalls. In the first orbital attempt (IFT-1 in April 2023), massive pad concrete excavation damaged booster engines and the flight termination system took 40 seconds to detonate.',
    issueAr: 'شهدت نماذج ستارشيب المبكرة (SN8 حتى SN11) انفجارات متعددة عند الهبوط بسبب انخفاض ضغط خزانات الوقود الفرعية وفشل إعادة إشعال المحركات. وفي أول تجربة مدارية متكاملة (IFT-1 عام 2023)، دمر عصف الصاروخ منصة الإطلاق وتأخر نظام التدمير الذاتي 40 ثانية.',
    engineeringResponseEn: 'SpaceX introduced a massive water-cooled steel deluge plate beneath the orbital mount to absorb acoustic energy, transitioned to hot-staging separation ring architecture, and upgraded engine methane manifolds to prevent cavitation.',
    engineeringResponseAr: 'ابتكرت سبيس إكس صفيحة فولاذية ضخمة مبردة برذاذ الماء عالي الضغط تحت المنصة لامتصاص الطاقة الصوتية، واعتمدت نظام الفصل الساخن للمراحل، وطورت مسارات تغذية الميثان لمنع التجويف.',
    outcomeEn: 'Enabled the flawless IFT-4 soft water landings and the historic IFT-5 mechanical chopstick tower catch of the Super Heavy booster in October 2024.',
    outcomeAr: 'مهدت هذه الاختبارات للإنجاز التاريخي في الرحلة الخامسة بالتقاط الصاروخ العملاق من الجو عبر أذرع البرج الآلية (عيدان الطعام) بنجاح مذهل.',
    sources: [MASTER_SOURCES.spacexFalconGuide]
  },
  {
    id: 'fsd-autonomy-regulatory',
    titleEn: 'Full Self-Driving (FSD) Timeline Over-Promises & Vision-Only Transitions',
    titleAr: 'تأخر جداول القيادة الذاتية وجدل إزالة الرادار والمستشعرات',
    company: 'Tesla',
    yearRange: '2016 – 2026',
    issueEn: 'Repeated public forecasts that autonomous robotaxis were "one year away" failed to materialize due to the edge-case complexity of real-world driving. Removing millimeter-wave radar and ultrasonic sensors in favor of pure vision sparked regulatory and safety inquiries from NHTSA.',
    issueAr: 'تكررت الوعود العامة بأن سيارات التاكسي الذاتي ستكون جاهزة "خلال عام واحد" دون أن تتحقق نظراً لتعقيد الحالات النادرة في القيادة الحقيقية. كما أثارت إزالة الرادار والمستشعرات فوق الصوتية والاعتماد الحصري على الكاميرات تحقيقات تنظيمية من هيئة السلامة المرورية الأمريكية.',
    engineeringResponseEn: 'Tesla pivoted from rule-based heuristic software to end-to-end neural networks (FSD V12+), training unified vision-to-control models on billions of video clips recorded by customer vehicles, and developed custom low-latency silicon.',
    engineeringResponseAr: 'انتقلت تيسلا من البرمجيات القائمة على القواعد المنطقية المشروطة إلى شبكات عصبية موحدة من البداية للنهاية (V12+)، وتدريب نماذج الرؤية مباشرة على مليارات مقاطع الفيديو الحقيقية من أسطول سياراتها.',
    outcomeEn: 'FSD intervention rates dropped significantly with V12/V13, paving the way for the Cybercab unveil, though level 4/5 unsupervised regulatory approval remains subject to stringent safety validation.',
    outcomeAr: 'انخفض معدل التدخل البشري بشكل كبير مع تحديثات V12/V13، مما مهد لكشف سايبركاب، رغم أن الاعتماد الرسمي بدون سائق بشري يخضع لاختبارات أمان صارمة وموافقات حكومية.',
    sources: [MASTER_SOURCES.secTesla10K2025, MASTER_SOURCES.reutersTeslaAutonomy]
  },
  {
    id: 'neuralink-thread-retraction',
    titleEn: 'Neuralink Initial Human Trial Electrode Thread Retraction',
    titleAr: 'تراجع خيوط أقطاب نيورالينك في أول مريض بشري والتعديل الهندسي',
    company: 'Neuralink',
    yearRange: '2024',
    issueEn: 'In early 2024, weeks after the first human participant (Noland Arbaugh) received the N1 implant, brain micro-motion and subdural pocketing caused roughly 85% of flexible electrode threads to retract, degrading information bit-rate.',
    issueAr: 'في مطلع عام 2024، بعد أسابيع من زراعة أول شريحة N1 لمريض بشري (نولاند أربو)، أدت الحركة الميكروية للدماغ ووجود تجويف هوائي تحت الجافية إلى انسحاب نحو 85% من خيوط الأقطاب المرنة، مما قلل سرعة التحكم.',
    engineeringResponseEn: 'Neuralink refrained from surgical intervention; engineers reprogrammed the recording algorithm to make individual surviving channels more sensitive, re-mapped firing thresholds, and modified surgical implantation depth for subsequent patients.',
    engineeringResponseAr: 'رفضت نيورالينك التدخل الجراحي؛ وقام المهندسون بإعادة برمجة خوارزميات فك التشفير العصبي لجعل القنوات الباقية أكثر حساسية، مع تعديل عمق إدخال الخيوط في العمليات اللاحقة لتفادي الفراغات.',
    outcomeEn: 'Noland regained record-setting bits-per-second control, and the second patient (Alex) experienced zero thread retraction, demonstrating robust iterative engineering in medical biotechnology.',
    outcomeAr: 'استعاد المريض الأول أرقاماً قياسية في سرعة التوجيه الرقمي، بينما لم يسجل المريض الثاني أي تراجع في الخيوط، مؤكداً نجاح المعالجة الهندسية السريعة.',
    sources: [MASTER_SOURCES.neuralinkN1Prime]
  }
];
