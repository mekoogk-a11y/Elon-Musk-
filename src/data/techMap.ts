/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TechMapNode } from '../types';

export const TECH_MAP_NODES: TechMapNode[] = [
  // Space Cluster
  {
    id: 'spacex-core',
    nameEn: 'SpaceX',
    nameAr: 'سبيس إكس',
    parentCategory: 'SPACE',
    descriptionEn: 'The core aerospace launch platform enabling multiplanetary orbital transport and global satellite delivery.',
    descriptionAr: 'منظومة الإطلاق الفضائي المداري التي تمهد للرحلات بين الكواكب وتتولى نشر الأقمار الصناعية.',
    connectedTo: ['starlink-node', 'starship-node', 'xai-core'],
    x: 50,
    y: 12
  },
  {
    id: 'starlink-node',
    nameEn: 'Starlink',
    nameAr: 'ستارلينك',
    parentCategory: 'SPACE',
    descriptionEn: 'Low Earth Orbit megaconstellation providing high-speed internet and direct-to-cell phone connectivity worldwide.',
    descriptionAr: 'شبكة الأقمار الصناعية المدارية المنخفضة التي توفر الإنترنت عالي السرعة والاتصال المباشر بالهواتف.',
    connectedTo: ['spacex-core', 'xai-core', 'tesla-core'],
    x: 30,
    y: 26
  },
  {
    id: 'starship-node',
    nameEn: 'Starship',
    nameAr: 'ستارشيب',
    parentCategory: 'SPACE',
    descriptionEn: 'Fully reusable super heavy-lift rocket engineered for Lunar Artemis landings, orbital refueling, and Mars colonization.',
    descriptionAr: 'أكبر منظومة إطلاق قابلة لإعادة الاستخدام بالكامل مصممة لمهام القمر ونقل الوقود المداري واستيطان المريخ.',
    connectedTo: ['spacex-core', 'boring-node'],
    x: 70,
    y: 26
  },

  // AI & Compute Cluster
  {
    id: 'xai-core',
    nameEn: 'xAI',
    nameAr: 'xAI',
    parentCategory: 'AI',
    descriptionEn: 'Frontier AI research company developing large multimodal reasoning models and the Memphis Colossus supercomputer.',
    descriptionAr: 'شركة أبحاث الذكاء الاصطناعي التأسيسي التي تطور نماذج التفكير المعرفي وعملاق الحوسبة كولوسوس.',
    connectedTo: ['grok-node', 'tesla-core', 'x-platform', 'spacex-core'],
    x: 50,
    y: 44
  },
  {
    id: 'grok-node',
    nameEn: 'Grok',
    nameAr: 'غروك',
    parentCategory: 'AI',
    descriptionEn: 'Advanced conversational and scientific reasoning AI model integrated with real-time news data streams and coding engines.',
    descriptionAr: 'نموذج الذكاء الاصطناعي للاستدلال العلمي والحواري المرتبط بلحظية تدفق الأخبار ومحركات البرمجة.',
    connectedTo: ['xai-core', 'x-platform'],
    x: 74,
    y: 44
  },
  {
    id: 'x-platform',
    nameEn: 'X Platform',
    nameAr: 'منصة X',
    parentCategory: 'X',
    descriptionEn: 'Global real-time public digital square, video broadcast network, and peer-to-peer financial payment system.',
    descriptionAr: 'الساحة الرقمية العامة العالمية للبث المباشر للأخبار وصحافة المواطن ومنظومة المدفوعات المالية.',
    connectedTo: ['xai-core', 'grok-node', 'tesla-core'],
    x: 74,
    y: 60
  },

  // Automotive, Energy & Robotics Cluster
  {
    id: 'tesla-core',
    nameEn: 'Tesla',
    nameAr: 'تيسلا',
    parentCategory: 'TESLA',
    descriptionEn: 'Electric vehicle manufacturing, battery chemistry, distributed solar, utility storage, and autonomous neural systems.',
    descriptionAr: 'تصنيع السيارات الكهربائية وبطاريات التخزين العملاقة والطاقة الشمسية وأنظمة الذكاء الاصطناعي للقيادة الذاتية.',
    connectedTo: ['optimus-node', 'robotaxi-node', 'energy-node', 'vehicles-node', 'xai-core', 'starlink-node'],
    x: 26,
    y: 60
  },
  {
    id: 'optimus-node',
    nameEn: 'Optimus',
    nameAr: 'أوبتيموس',
    parentCategory: 'TESLA',
    descriptionEn: 'General-purpose autonomous humanoid bipedal robot designed to perform repetitive, hazardous, or tedious tasks.',
    descriptionAr: 'الروبوت البشري ثنائي القدمين متعدد الأغراض المصمم لتنفيذ المهام الصناعية الشاقة والمتكررة.',
    connectedTo: ['tesla-core'],
    x: 10,
    y: 76
  },
  {
    id: 'robotaxi-node',
    nameEn: 'Cybercab / Robotaxi',
    nameAr: 'سايبركاب / روبوتاكسي',
    parentCategory: 'TESLA',
    descriptionEn: 'Dedicated autonomous passenger vehicle operating without manual steering controls via inductive charging and vision networks.',
    descriptionAr: 'مركبة النقل التشاركي ذاتية القيادة بالكامل بدون مقود وتعتمد على الشحن اللاسلكي وشبكات الرؤية العصبية.',
    connectedTo: ['tesla-core', 'boring-node'],
    x: 24,
    y: 84
  },
  {
    id: 'energy-node',
    nameEn: 'Tesla Energy',
    nameAr: 'تيسلا إنرجي',
    parentCategory: 'TESLA',
    descriptionEn: 'Megapack utility battery storage and Powerwall distributed energy stabilizing national electric transmission grids.',
    descriptionAr: 'منظومات ميغاباك لتخزين الطاقة على مستوى الشبكات الكهربائية الكبرى وبطاريات باور وول المنزلية.',
    connectedTo: ['tesla-core', 'boring-node'],
    x: 38,
    y: 76
  },
  {
    id: 'vehicles-node',
    nameEn: 'Electric Vehicles',
    nameAr: 'المركبات الكهربائية',
    parentCategory: 'TESLA',
    descriptionEn: 'Model 3, Model Y, Cybertruck, Semi, and next-generation high-volume electric transport platforms.',
    descriptionAr: 'طرازات موديل 3 وموديل واي وسايبرتراك والشاحنة الثقيلة سيمي التي غيرت مفهوم النقل النظيف.',
    connectedTo: ['tesla-core'],
    x: 12,
    y: 60
  },

  // Specialized Engineering Frontiers
  {
    id: 'neuralink-node',
    nameEn: 'Neuralink',
    nameAr: 'نيورالينك',
    parentCategory: 'NEURALINK',
    descriptionEn: 'Sub-cranial wireless brain-computer interface enabling paralyzed patients to control digital computers directly via thought.',
    descriptionAr: 'شريحة الدماغ اللاسلكية التي تتيح للمصابين بالشلل الرباعي التحكم المباشر بالحواسيب عبر إشارات التفكير.',
    connectedTo: ['tesla-core', 'xai-core'],
    x: 50,
    y: 80
  },
  {
    id: 'boring-node',
    nameEn: 'The Boring Company',
    nameAr: 'شركة الحفر',
    parentCategory: 'BORING',
    descriptionEn: 'Scalable 3D subterranean electric loop transportation networks and rapid automated continuous tunnel boring.',
    descriptionAr: 'شبكات النقل الكهربائية تحت الأرضية ثلاثية الأبعاد وتقنيات الحفر المستمر للأنفاق الحضرية.',
    connectedTo: ['robotaxi-node', 'energy-node', 'starship-node'],
    x: 74,
    y: 84
  }
];
