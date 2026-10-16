/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PhilosophyPrinciple } from '../types';
import { MASTER_SOURCES } from './sources';

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    id: 'first-principles',
    titleEn: 'First Principles Thinking (Physics vs. Analogy)',
    titleAr: 'التفكير من المبادئ الأولى (الفيزياء مقابل القياس بالتشابه)',
    summaryEn: 'Boiling a problem down to its most fundamental physical truths and reasoning up from there, rather than reasoning by analogy ("doing it because it has always been done that way").',
    summaryAr: 'تجريد المشكلة الهندسية إلى أبسط حقائقها الفيزيائية غير القابلة للشك والبناء منها صعوداً، بدلاً من التفكير بالقياس والتقليد ("فعل الشيء لأن الجميع يفعله هكذا").',
    breakdownEn: [
      'Identify and clearly define current assumptions and conventional beliefs.',
      'Deconstruct the problem into fundamental foundational physical axioms (mass, materials, energy, thermodynamics).',
      'Calculate theoretical limits and rebuild the engineering solution from scratch.'
    ],
    breakdownAr: [
      'تحديد الافتراضات التقليدية السائدة ونقدها بصرامة.',
      'تفكيك المسألة إلى حقائقها المادية الأولية (الكتلة، عناصر الجدول الدوري، الطاقة، قوانين الديناميكا الحرارية).',
      'حساب الحد الأدنى النظري للتكلفة وإعادة بناء الحل الهندسي من الصفر.'
    ],
    caseStudyEn: 'When aerospace suppliers quoted $65 million for standard rocket stages, Musk calculated the raw material cost on the London Metal Exchange (aerospace-grade aluminum, carbon fiber, copper, titanium). Raw materials accounted for only ~2% of the rocket price. This realization drove SpaceX to manufacture ~85% of rocket components in-house.',
    caseStudyAr: 'عندما طلبت شركات الفضاء التقليدية 65 مليون دولار لصاروخ صغير، قام ماسك بحساب أسعار المواد الخام في بورصة المعادن (سبائك الألومنيوم، ألياف الكربون، النحاس، التيتانيوم)، فوجد أن المواد تمثل نحو 2% فقط من السعر النهائي. هذا الاكتشاف قاد سبيس إكس لتصنيع 85% من أجزاء الصاروخ داخلياً بتكلفة لا تقارن.',
    sources: [MASTER_SOURCES.spacexFalconGuide, MASTER_SOURCES.isaacsonBiography]
  },
  {
    id: 'five-step-algorithm',
    titleEn: 'The 5-Step Engineering Algorithm',
    titleAr: 'خوارزمية الهندسة الخماسية الصارمة',
    summaryEn: 'A rigorous operational rubric enforced across Tesla and SpaceX factories to eliminate waste, accelerate iteration, and prevent automated inefficiencies.',
    summaryAr: 'منهجية عمل صارمة تُطبق في مصانع تيسلا وسبيس إكس للقضاء على الهدر وتسريع دورات التطوير ومنع أتمتة العمليات غير الضرورية.',
    breakdownEn: [
      'Step 1: Make your requirements less dumb. Requirements from smart people are the most dangerous because you rarely question them.',
      'Step 2: Delete the part or process step. If you do not end up adding back at least 10% of what you deleted, you are not deleting enough.',
      'Step 3: Simplify or optimize. Only optimize after deleting; never optimize a process that should not exist in the first place.',
      'Step 4: Accelerate cycle time. You can only move faster after you have executed Steps 1, 2, and 3.',
      'Step 5: Automate. Automation is the absolute last step. Automating an unoptimized process multiplies errors.'
    ],
    breakdownAr: [
      'الخطوة 1: اجعل المتطلبات أقل غباءً. متطلبات الأذكياء هي الأكثر خطورة لأن المهندسين نادراً ما يشككون فيها.',
      'الخطوة 2: احذف القطعة أو الخطوة من خط الإنتاج. إذا لم تضطر لإعادة 10% مما حذفته، فأنت لا تحذف بما فيه الكفاية.',
      'الخطوة 3: بسّط وحسّن. لا تقم بالتحسين إلا بعد الحذف؛ لا تحسّن أبداً جزءاً كان يجب ألا يوجد أصلاً.',
      'الخطوة 4: سرّع وتيرة العمل. لا يمكنك تسريع دورة الإنتاج إلا بعد تطبيق الخطوات الثلاث السابقة.',
      'الخطوة 5: أتمت. الأتمتة هي الخطوة الأخيرة تماماً؛ فأتمتة عملية معيبة تضاعف الأخطاء بسرعة هائلة.'
    ],
    caseStudyEn: 'During Model 3 "production hell", Tesla heavily automated battery pack assembly with complex robotic flippers. When lines stalled, Musk deleted entire robotic sub-systems, simplified fiberglass insulation mats, and relied on lean human-robot handoffs before re-automating.',
    caseStudyAr: 'خلال "جحيم إنتاج" موديل 3، بالغت تيسلا في أتمتة خطوط تجميع خلايا البطاريات بروبوتات شديدة التعقيد. وعندما توقف الخط، أمر ماسك بحذف المحطات الروبوتية الزائدة، وإلغاء حصائر العزل غير الضرورية، وتبسيط العملية قبل إعادة أتمتتها بذكاء.',
    sources: [MASTER_SOURCES.secTesla10K2025, MASTER_SOURCES.isaacsonBiography]
  },
  {
    id: 'vertical-integration',
    titleEn: 'Radical Vertical Integration',
    titleAr: 'التكامل الرأسي الجذري في التصنيع',
    summaryEn: 'Designing, engineering, and manufacturing core components in-house rather than relying on multi-tiered sub-contractor supply chains.',
    summaryAr: 'تصميم وهندسة وتصنيع المكونات الحيوية داخلياً داخل مصانع الشركة بدلاً من الاعتماد على سلاسل التوريد الخارجية والمقاولين المتعددين.',
    breakdownEn: [
      'Eliminates margin stacking by multiple intermediate vendor tiers.',
      'Compresses feedback loop from design flaw to shop-floor remediation from months to hours.',
      'Enables proprietary intellectual property and rapid technological breakthroughs.'
    ],
    breakdownAr: [
      'إلغاء هوامش الربح المتراكمة للموردين الوسطاء.',
      'تقليص المدة الزمنية بين اكتشاف الخلل في التصميم وإصلاحه في خط الإنتاج من شهور إلى ساعات معدودة.',
      'حماية الملكية الفكرية وتمكين القفزات التقنية السريعة دون انتظار الموردين.'
    ],
    caseStudyEn: 'Tesla designs its own Full Self-Driving chips (HW3/HW4/AI5), casts structural vehicle front/rear underbodies in giant 9,000-ton Giga Presses, and SpaceX machines its own Raptor rocket combustion chambers using additive proprietary copper-alloy manufacturing.',
    caseStudyAr: 'تطور تيسلا رقاقات القيادة الذاتية بنفسها (HW4)، وتسكب هياكل السيارات بالكامل في مكابس صب عملاقة (غيغابرس)، بينما تصنّع سبيس إكس غرف احتراق محركات رابتور داخلياً بسبائك نحاسية عبر الطباعة ثلاثية الأبعاد.',
    sources: [MASTER_SOURCES.spacexFalconGuide, MASTER_SOURCES.secTesla10K2025]
  },
  {
    id: 'manufacturing-primacy',
    titleEn: 'Manufacturing as the Hardest Problem',
    titleAr: 'أسبقية التصنيع: بناء الآلة التي تبني الآلة',
    summaryEn: 'Designing a prototype is 1% of the effort; designing the factory and manufacturing system to produce millions with extreme precision is 99% of the challenge.',
    summaryAr: 'تصميم نموذج أولي يمثل 1% من الجهد الهندسي؛ أما تصميم المصنع ومنظومة الإنتاج لتصنيع ملايين الوحدات بدقة متناهية فيمثل 99% من التحدي الحقيقي.',
    breakdownEn: [
      'Volumetric factory efficiency and physics-limited lines.',
      'Treating the entire factory as a high-density cybernetic product.',
      'Co-locating design engineering desks directly on the production floor.'
    ],
    breakdownAr: [
      'الكفاءة الحجمية للمصانع والاقتراب من الحدود الفيزيائية لسرعة الإنتاج.',
      'التعامل مع المصنع بالكامل كمنتج برمجي وهندسي فائق الكثافة.',
      'وضع مكاتب مهندسي التصميم في قلب صالة الإنتاج مباشرة بجوار خط التجميع.'
    ],
    caseStudyEn: 'Both Starbase (Starfactory) and Tesla Gigafactories are designed around the principle that engineering offices must overlook the physical production line, ensuring engineers immediately experience and resolve assembly friction.',
    caseStudyAr: 'صُممت مصانع ستاربيس (ستارفاكتوري) ومصانع تيسلا العملاقة على مبدأ وضع مكاتب المهندسين في صالة التصنيع، ليعايش المهندس أي تعطل فوري ويعمل على معالجته في الحال.',
    sources: [MASTER_SOURCES.isaacsonBiography, MASTER_SOURCES.secTesla10K2025]
  }
];
