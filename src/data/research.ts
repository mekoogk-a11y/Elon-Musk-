/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ResearchArticle } from '../types';
import { MASTER_SOURCES } from './sources';

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: 'art-reusability-aerospace',
    titleEn: 'Aerospace Economics of Full Orbital Reusability: From Falcon 9 to Starship',
    titleAr: 'اقتصاديات إعادة الاستخدام المداري الكامل: من فالكون 9 إلى ستارشيب',
    category: 'Space',
    readTime: '8 min',
    excerptEn: 'An empirical examination of how multi-engine retro-propulsion, aerodynamic grid fins, and hot staging slashed the cost of orbital payload insertion by an order of magnitude.',
    excerptAr: 'دراسة تطبيقية لكيفية مساهمة الدفع الصاروخي العكسي والزعانف الشبكية والفصل الساخن في خفض تكلفة نقل الكيلوغرام إلى الفضاء بعشرة أضعاف.',
    contentEn: `In traditional aerospace architecture, the cost of a rocket was entirely amortized over a single flight. Falcon 9 proved that recovering the booster via autonomous spaceport drone ships preserved the most expensive asset—the nine Merlin 1D engines and primary airframe—reducing marginal launch costs significantly. 

Starship extends this philosophy to the upper stage. By utilizing 304L stainless steel (which retains strength at cryogenic temperatures and costs ~$3/kg versus ~$130/kg for carbon fiber) and replacing landing legs with ground-based robotic catch arms (Mechazilla), the vehicle eliminates dead landing mass. The long-term architectural goal is daily orbital turnaround with liquid methane and liquid oxygen propellants.`,
    contentAr: `في هندسة الفضاء التقليدية، كانت التكلفة الإجمالية للصاروخ تستهلك بالكامل في رحلة واحدة يُرمى بعدها في المحيط. أثبت فالكون 9 أن استعادة المعزز عبر منصات الهبوط البحرية ذاتية القيادة يحافظ على أثمن أجزاء الصاروخ (محركات ميرلين التسعة والهيكل الرئيسي)، مما خفض التكلفة الحدية للإطلاق بشكل غير مسبوق.

وتتوج منظومة ستارشيب هذه الفلسفة بتطبيق إعادة الاستخدام الكامل على المرحلتين. وباستخدام الفولاذ المقاوم للصدأ 304L (الذي تزداد متانته في البرودة الفائقة ويكلف 3 دولارات للكيلوغرام مقارنة بـ 130 دولاراً لألياف الكربون) واستبدال أرجل الهبوط بأذرع البرج الميكانيكية، يتخلص الصاروخ من الأوزان الميتة لتمكين رحلات يومية روتينية.`,
    tags: ['Falcon 9', 'Starship', 'Orbital Mechanics', 'Reusability', 'Aerospace Engineering'],
    sources: [MASTER_SOURCES.spacexFalconGuide, MASTER_SOURCES.nasaArtemisHLS]
  },
  {
    id: 'art-fsd-end-to-end',
    titleEn: 'End-to-End Neural Networks vs. Heuristic Robotics in Autonomous Driving',
    titleAr: 'الشبكات العصبية المباشرة مقابل البرمجيات الشرطية في القيادة الذاتية',
    category: 'Autonomy' as any,
    readTime: '7 min',
    excerptEn: 'How Tesla’s transition from 300,000+ lines of explicit C++ rules to unified photon-to-control neural networks eliminated heuristic edge-case brittleness.',
    excerptAr: 'كيف أدى تحول تيسلا من 300 ألف سطر من التعليمات البرمجية الشرطية إلى شبكات عصبية موحدة تعالج الصور مباشرة إلى التخلص من هشاشة الأنظمة القديمة.',
    contentEn: `Autonomous driving historically decomposed perception, planning, and control into independent software layers. When edge cases multiplied—such as construction cones, erratic pedestrians, or faded lane markings—the hand-coded rules collided.

Tesla Full Self-Driving V12 completely replaced traditional planning logic with deep neural networks trained on millions of high-quality driving clips. Photons hitting the camera sensors directly output vehicle control parameters (steering angle, acceleration, braking). By scaling compute infrastructure with the Memphis Colossus and Dojo, the model learns subtle human-like maneuvers through imitation and reinforcement learning.`,
    contentAr: `تاريخياً، قسّمت هندسة القيادة الذاتية المعالجة إلى طبقات منفصلة: الرؤية، وتخطيط المسار، والتحكم الميكانيكي. وعند مواجهة حالات غير متوقعة كالحواجز المرورية المؤقتة، كانت القواعد البرمجية المكتوبة يدوياً تتضارب.

قامت تيسلا في تحديث FSD V12 باستبدال ملايين الأسطر البرمجية بشبكة عصبية موحدة تُدرب على ملايين ساعات القيادة البشرية الممتازة. فتتحول الفوتونات الملتقطة عبر الكاميرات مباشرة إلى أوامر توجيه وتسارع وفرملة، مما يمنح المركبة سلاسة تحاكي أفضل السائقين البشريين.`,
    tags: ['Tesla FSD', 'Neural Networks', 'Computer Vision', 'Artificial Intelligence', 'Cybercab'],
    sources: [MASTER_SOURCES.secTesla10K2025, MASTER_SOURCES.reutersTeslaAutonomy]
  },
  {
    id: 'art-bci-neuralink-engineering',
    titleEn: 'Biocompatibility and Signal Integrity in Sub-Cranial Neural Implants',
    titleAr: 'التوافق الحيوي وسلامة الإشارات في شرائح الدماغ المزروعة تحت الجمجمة',
    category: 'Neurotechnology',
    readTime: '6 min',
    excerptEn: 'Scientific analysis of the N1 device: flexible thin-film polyimide electrodes, automated surgical inserters, and transcutaneous telemetry.',
    excerptAr: 'تحليل علمي لشريحة N1: خيوط البوليميد الرقيقة، وتقنيات الإدخال الجراحي الآلي بالروبوت، ونقل البيانات عبر الجلد لاسلكياً.',
    contentEn: `Rigid microelectrode arrays (such as the Utah array) trigger glial scar tissue encapsulation over time due to the micromotion of the brain within the cerebrospinal fluid. Neuralink solved this mechanical mismatch by developing ultra-flexible polyimide threads thinner than a human hair (4 to 6 micrometers).

The R1 surgical robot utilizes optical coherence tomography and computer vision to insert threads individually, actively avoiding superficial cortical blood vessels to minimize hemorrhage. An onboard low-power ASIC digitizes 1,024 channels at 20 kHz, transmitting compressed neural spike data via Bluetooth LE through the intact scalp.`,
    contentAr: `تسببت مصفوفات الأقطاب الصلبة القديمة في تكوّن ندبات نسيجية في الدماغ بسبب الحركة الطبيعية للمخ داخل السائل الدماغي. تجاوزت نيورالينك هذا العائق بتطوير خيوط بوليمر مرنة أرق من شعرة الإنسان (من 4 إلى 6 ميكرومترات).

يقوم الروبوت الجراحي R1 بزرع الخيوط بدقة مجهرية بالاستعانة بالرؤية الحاسوبية لتفادي الشعيرات الدموية، بينما تسجل الرقاقة الدقيقة المدمجة إشارات 1024 قطباً عصبياً وتنقلها لاسلكياً عبر البلوتوث من خلال فروة الرأس السليمة.`,
    tags: ['Neuralink', 'BCI', 'Neuroscience', 'Biomedical Engineering', 'ASIC'],
    sources: [MASTER_SOURCES.neuralinkN1Prime]
  },
  {
    id: 'art-supercomputing-colossus',
    titleEn: 'Data Center Power Topologies and Liquid Cooling at the 100,000-GPU Scale',
    titleAr: 'توبولوجيا الطاقة والتبريد السائل في مراكز الحوسبة الفائقة بمقياس 100 ألف معالج',
    category: 'AI',
    readTime: '7 min',
    excerptEn: 'Engineering specifications behind xAI’s Memphis Colossus: rapid electrical substation construction, direct-to-chip heat dissipation, and parallel training Fabrics.',
    excerptAr: 'المواصفات الهندسية وراء مجمع كولوسوس في ممفيس: التشييد السريع للمحطات الكهربائية والتبريد السائل المباشر لرقاقات المعالجة.',
    contentEn: `Training multimodal models exceeding hundreds of billions of active parameters requires uninhibited communication bandwidth between nodes. The Memphis Colossus cluster unified 100,000 NVIDIA H100 and H200 accelerators into a flat, non-blocking network fabric.

The facility required unprecedented utility coordination, establishing dedicated utility connections and on-site natural gas turbine microgrids to sustain over 150 megawatts of continuous electrical load. Direct-to-chip liquid cooling loops reject heat without atmospheric evaporative waste, ensuring thermal stability across sustained training checkpoints.`,
    contentAr: `يتطلب تدريب النماذج اللغوية الضخمة نطاقاً ترددياً فائق السرعة وبدون اختناقات بين آلاف المعالجات. وحقق مجمع كولوسوس التابع لـ xAI دمج 100 ألف معالج رسومي في نسيج شبكي متجانس وموحد.

تطلب المشروع توفير طاقة تفوق 150 ميغاوات عبر توربينات غازية ومحطات تحويل مخصصة في أقل من 4 أشهر، مع استخدام أنظمة تبريد سائل مباشرة تسحب الحرارة من سطح المعالجات لضمان استقرار التدريب المتواصل لأسابيع دون انقطاع.`,
    tags: ['xAI', 'Colossus', 'Supercomputing', 'Liquid Cooling', 'GPU Clusters'],
    sources: [MASTER_SOURCES.xaiColossusReport]
  },
  {
    id: 'art-gigacasting-manufacturing',
    titleEn: 'High-Pressure Mega-Casting and Structural Battery Integration',
    titleAr: 'الصب بالقوالب العملاقة (غيغابرس) ودمج البطاريات الهيكلي',
    category: 'Manufacturing',
    readTime: '6 min',
    excerptEn: 'How replacing 70+ stamped and welded sheet metal stampings with a single high-pressure aluminum die casting revolutionized vehicle body shops.',
    excerptAr: 'كيف أحدث استبدال أكثر من 70 قطعة معدنية ملحومة بقطعة صب ألومنيوم واحدة ثورة في تصنيع هياكل السيارات.',
    contentEn: `Traditional vehicle manufacturing required stamping dozens of steel parts and joining them using hundreds of robotic spot welds, sealants, and rivets. Each joint introduced dimensional tolerance stack-up and mechanical points of failure.

Tesla partnered with IDRA to engineer 6,000-to-9,000-ton Giga Presses. By developing a proprietary aluminum alloy that requires no post-casting heat treatment (which previously caused thermal warping in large components), Tesla cast the entire front and rear underbody in single strokes, saving floor space, vehicle mass, and production noise.`,
    contentAr: `تطلب تصنيع السيارات تقليدياً كبس عشرات الصفائح المعدنية ولحمها بمئات الروبوتات والمسامير، مما يزيد فرص الأخطاء في المقاييس.

تعاونت تيسلا لتطوير مكابس صب عملاقة بقوة 9000 طن، وابتكرت سبيكة ألومنيوم لا تحتاج لمعالجة حرارية تالية للصب، مما مكنها من سكب الجزء الخلفي والأمامي للسيارة بالكامل في ثوانٍ معدودة كقطعة صلبة واحدة خفيفة الوزن وعالية الأمان.`,
    tags: ['Tesla', 'Mega-Casting', 'Manufacturing', 'Metallurgy', 'Gigafactory'],
    sources: [MASTER_SOURCES.secTesla10K2025]
  },
  {
    id: 'art-first-principles-cost',
    titleEn: 'Mathematical Foundations of First Principles: The Physics of Battery Cost Trajectories',
    titleAr: 'الأسس الرياضية للتفكير من المبادئ الأولى: فيزياء تكلفة البطاريات',
    category: 'Innovation',
    readTime: '7 min',
    excerptEn: 'Deconstructing battery cell economics down to elemental lithium, nickel, cobalt, and graphite commodity spot pricing.',
    excerptAr: 'تفكيك اقتصاديات خلايا البطاريات إلى أسعار العناصر الكيميائية الأولية في الأسواق العالمية.',
    contentEn: `When battery packs cost $600 per kilowatt-hour, conventional market consensus held that electric vehicles would never achieve price parity with internal combustion engines. By applying first principles analysis, Musk evaluated the spot market value of lithium, iron, phosphate, and electrolyte salts, revealing an elemental material floor below $80/kWh.

The gap was entirely manufacturing inefficiency: solvent drying, coating ovens, and supply chain shipping. By transitioning to dry battery electrode coating and tabless 4680 cell geometries, Tesla systematically closed the delta toward theoretical thermodynamic limits.`,
    contentAr: `عندما كانت حزمة البطاريات تكلف 600 دولار لكل كيلوواط ساعة، أجمع المحللون على استحالة منافسة السيارات الكهربائية لسيارات البنزين. لكن بتطبيق المبادئ الأولى، تم حساب القيمة السوقية لخامات الليثيوم والحديد والفوسفات، فاتضح أن تكلفتها المادية الأساسية أقل من 80 دولاراً للكيلوواط ساعة.

وكان الفارق الهائل ناتجاً عن هدر التصنيع وسلاسل التوريد. وبابتكار تقنية الطلاء الجاف للأقطاب الكهربائية وتصميم خلايا 4680 بدون ألسنة توصيل، اقتربت الصناعة تدريجياً من حدودها الفيزيائية الدنيا.`,
    tags: ['First Principles', 'Battery Technology', 'Lithium', 'Energy Storage', '4680 Cells'],
    sources: [MASTER_SOURCES.secTesla10K2025]
  }
];
