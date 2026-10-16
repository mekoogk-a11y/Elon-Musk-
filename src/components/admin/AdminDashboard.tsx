/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ApiService } from '../../services/api';
import { TimelineEvent, NewsItem, ResearchArticle } from '../../types';
import { Shield, Plus, Trash2, Edit3, CheckCircle2, Lock, X, Database, RefreshCw, Key } from 'lucide-react';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'timeline' | 'news' | 'research' | 'system'>('timeline');

  // Datasets
  const [timeline, setTimeline] = useState<TimelineEvent[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [research, setResearch] = useState<ResearchArticle[]>([]);
  const [statusMessage, setStatusMessage] = useState('');

  // Form states
  const [newTimeline, setNewTimeline] = useState({
    year: 2026,
    date: '2026',
    titleEn: '',
    titleAr: '',
    companyId: 'spacex',
    summaryEn: '',
    summaryAr: '',
    technologyEn: '',
    technologyAr: '',
    significanceEn: '',
    significanceAr: ''
  });

  const [newNews, setNewNews] = useState({
    date: 'March 2026',
    titleEn: '',
    titleAr: '',
    summaryEn: '',
    summaryAr: '',
    company: 'SpaceX',
    source: 'Official Agency Statement',
    sourceType: 'Company Official' as const
  });

  const [newArticle, setNewArticle] = useState({
    titleEn: '',
    titleAr: '',
    category: 'Space' as const,
    readTime: '5 min',
    excerptEn: '',
    excerptAr: '',
    contentEn: '',
    contentAr: '',
    tags: 'Aerospace, Starship'
  });

  useEffect(() => {
    if (ApiService.isAdminAuthenticated()) {
      setIsAuthenticated(true);
    }
  }, []);

  const loadData = async () => {
    const [tList, nList, rList] = await Promise.all([
      ApiService.getTimeline(),
      ApiService.getNews(),
      ApiService.getResearchArticles()
    ]);
    setTimeline(tList);
    setNews(nList);
    setResearch(rList);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default master key or demo key
    if (passcode === 'muskera2026' || passcode === 'admin') {
      setIsAuthenticated(true);
      ApiService.setAdminAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError(language === 'ar' ? 'كلمة المرور غير صحيحة (استخدم: muskera2026 أو admin)' : 'Invalid Passcode (Use: muskera2026 or admin)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    ApiService.setAdminAuthenticated(false);
  };

  const showStatus = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(''), 4000);
  };

  // Timeline handlers
  const handleAddTimeline = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTimeline.titleEn || !newTimeline.titleAr) return;
    const item: TimelineEvent = {
      id: `tl-custom-${Date.now()}`,
      year: Number(newTimeline.year),
      date: newTimeline.date,
      titleEn: newTimeline.titleEn,
      titleAr: newTimeline.titleAr,
      companyId: newTimeline.companyId,
      summaryEn: newTimeline.summaryEn,
      summaryAr: newTimeline.summaryAr,
      technologyEn: newTimeline.technologyEn || 'Advanced Systems Architecture',
      technologyAr: newTimeline.technologyAr || 'معمارية أنظمة متقدمة',
      significanceEn: newTimeline.significanceEn || 'Documented inflection point',
      significanceAr: newTimeline.significanceAr || 'محطة مفصلية موثقة',
      sources: []
    };
    await ApiService.addTimelineEvent(item);
    showStatus(language === 'ar' ? 'تمت إضافة المحطة الزمنية بنجاح' : 'Timeline event added successfully');
    setNewTimeline({
      year: 2026,
      date: '2026',
      titleEn: '',
      titleAr: '',
      companyId: 'spacex',
      summaryEn: '',
      summaryAr: '',
      technologyEn: '',
      technologyAr: '',
      significanceEn: '',
      significanceAr: ''
    });
    loadData();
  };

  const handleDeleteTimeline = async (id: string) => {
    await ApiService.deleteTimelineEvent(id);
    showStatus(language === 'ar' ? 'تم الحذف' : 'Event deleted');
    loadData();
  };

  // News handlers
  const handleAddNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNews.titleEn || !newNews.titleAr) return;
    const item: NewsItem = {
      id: `news-custom-${Date.now()}`,
      date: newNews.date,
      titleEn: newNews.titleEn,
      titleAr: newNews.titleAr,
      summaryEn: newNews.summaryEn,
      summaryAr: newNews.summaryAr,
      company: newNews.company,
      source: newNews.source,
      sourceType: newNews.sourceType
    };
    await ApiService.addNewsItem(item);
    showStatus(language === 'ar' ? 'تم نشر الخبر الموثق' : 'Verified news published');
    setNewNews({
      date: 'March 2026',
      titleEn: '',
      titleAr: '',
      summaryEn: '',
      summaryAr: '',
      company: 'SpaceX',
      source: 'Official Agency Statement',
      sourceType: 'Company Official'
    });
    loadData();
  };

  const handleDeleteNews = async (id: string) => {
    await ApiService.deleteNewsItem(id);
    showStatus(language === 'ar' ? 'تم حذف الخبر' : 'News item deleted');
    loadData();
  };

  // Research Article handlers
  const handleAddArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArticle.titleEn || !newArticle.titleAr) return;
    const item: ResearchArticle = {
      id: `art-custom-${Date.now()}`,
      titleEn: newArticle.titleEn,
      titleAr: newArticle.titleAr,
      category: newArticle.category as any,
      readTime: newArticle.readTime,
      excerptEn: newArticle.excerptEn,
      excerptAr: newArticle.excerptAr,
      contentEn: newArticle.contentEn,
      contentAr: newArticle.contentAr,
      tags: newArticle.tags.split(',').map(t => t.trim()),
      sources: []
    };
    await ApiService.addResearchArticle(item);
    showStatus(language === 'ar' ? 'تمت إضافة الورقة البحثية' : 'Research monograph added');
    setNewArticle({
      titleEn: '',
      titleAr: '',
      category: 'Space',
      readTime: '5 min',
      excerptEn: '',
      excerptAr: '',
      contentEn: '',
      contentAr: '',
      tags: 'Aerospace, Engineering'
    });
    loadData();
  };

  const handleDeleteArticle = async (id: string) => {
    await ApiService.deleteResearchArticle(id);
    showStatus(language === 'ar' ? 'تم حذف البحث' : 'Article deleted');
    loadData();
  };

  // Reset database handler
  const handleResetDatabase = async () => {
    if (window.confirm(language === 'ar' ? 'هل أنت متأكد من رغبتك في إعادة ضبط قاعدة البيانات إلى الحالة الأولية المعتمدة؟' : 'Are you sure you want to reset all modifications to default seed?')) {
      await ApiService.resetDatabase();
      showStatus(language === 'ar' ? 'تمت استعادة البيانات الافتراضية' : 'Database reset to default seed');
      loadData();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#0B0D0F] border border-[#20242A] rounded-xl max-w-4xl w-full p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-lg bg-[#141820] text-[#A7ADB4] hover:text-white border border-[#20242A]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-[#20242A] pb-4">
          <div className="p-2.5 rounded bg-[#141820] border border-[#20242A]">
            <Shield className="w-5 h-5 text-[#E82127]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-display">
              {language === 'ar' ? 'لوحة تحكم وإدارة المحتوى (Admin CMS)' : 'MUSKERA CONTENT MANAGEMENT SYSTEM'}
            </h3>
            <div className="text-xs font-mono text-[#A7ADB4]">
              {language === 'ar' ? 'إدارة السجل الزمني، الأخبار، المقالات البحثية والمصادر' : 'Manage Timeline, 2026 News, Monographs & Verification'}
            </div>
          </div>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div className="p-3 rounded bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Passcode Lock if not authenticated */}
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="max-w-md mx-auto py-8 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-[#141820] border border-[#20242A] mx-auto flex items-center justify-center">
              <Lock className="w-5 h-5 text-amber-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white font-display">
                {language === 'ar' ? 'تسجيل دخول المشرف' : 'Administrative Authentication'}
              </h4>
              <p className="text-xs text-[#A7ADB4]">
                {language === 'ar' ? 'أدخل كلمة المرور للوصول لإدارة المحتوى (الافتراضية: muskera2026)' : 'Enter administrative passphrase (Default: muskera2026)'}
              </p>
            </div>

            <div className="space-y-2">
              <input
                type="password"
                placeholder={language === 'ar' ? 'كلمة المرور...' : 'Passcode...'}
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full bg-[#050505] border border-[#20242A] rounded px-3 py-2 text-xs text-white placeholder-[#A7ADB4] focus:outline-none focus:border-[#E82127] font-mono text-center"
              />
              {authError && <div className="text-xs text-[#E82127] font-mono">{authError}</div>}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2.5 rounded bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors"
            >
              {language === 'ar' ? 'دخول لوحة التحكم' : 'Unlock CMS Console'}
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            
            {/* Top Bar Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#20242A] pb-3 gap-2">
              <div className="flex gap-2">
                {[
                  { id: 'timeline', labelEn: 'Timeline Events', labelAr: 'الأحداث الزمنية' },
                  { id: 'news', labelEn: '2026 News Feed', labelAr: 'أخبار 2026' },
                  { id: 'research', labelEn: 'Research Papers', labelAr: 'الأوراق البحثية' },
                  { id: 'system', labelEn: 'Database Operations', labelAr: 'إدارة النظام' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 text-xs font-mono rounded transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white text-black font-bold'
                        : 'bg-[#141820] text-[#A7ADB4] hover:text-white'
                    }`}
                  >
                    {language === 'ar' ? tab.labelAr : tab.labelEn}
                  </button>
                ))}
              </div>

              <button
                onClick={handleLogout}
                className="text-xs font-mono text-[#E82127] hover:underline"
              >
                {language === 'ar' ? 'تسجيل الخروج' : 'Lock Console'}
              </button>
            </div>

            {/* TAB 1: TIMELINE MANAGEMENT */}
            {activeTab === 'timeline' && (
              <div className="space-y-6">
                
                {/* Form to add Timeline Event */}
                <form onSubmit={handleAddTimeline} className="p-4 rounded-lg bg-[#050505] border border-[#20242A] space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'إضافة محطة زمنية جديدة' : 'CREATE TIMELINE MILESTONE'}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Year</label>
                      <input
                        type="number"
                        value={newTimeline.year}
                        onChange={e => setNewTimeline({ ...newTimeline, year: Number(e.target.value) })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Date String</label>
                      <input
                        type="text"
                        value={newTimeline.date}
                        onChange={e => setNewTimeline({ ...newTimeline, date: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Company</label>
                      <select
                        value={newTimeline.companyId}
                        onChange={e => setNewTimeline({ ...newTimeline, companyId: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                      >
                        <option value="spacex">SpaceX</option>
                        <option value="tesla">Tesla</option>
                        <option value="xai">xAI</option>
                        <option value="neuralink">Neuralink</option>
                        <option value="boring">The Boring Company</option>
                        <option value="x-corp">X (Twitter)</option>
                        <option value="zip2">Zip2</option>
                        <option value="xcom-paypal">PayPal</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Title (EN)</label>
                      <input
                        type="text"
                        value={newTimeline.titleEn}
                        onChange={e => setNewTimeline({ ...newTimeline, titleEn: e.target.value })}
                        placeholder="e.g. Starship Catch Success"
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">العنوان (عربي)</label>
                      <input
                        type="text"
                        value={newTimeline.titleAr}
                        onChange={e => setNewTimeline({ ...newTimeline, titleAr: e.target.value })}
                        placeholder="مثال: التقاط معزز ستارشيب بنجاح"
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono text-right"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Summary (EN)</label>
                      <textarea
                        rows={2}
                        value={newTimeline.summaryEn}
                        onChange={e => setNewTimeline({ ...newTimeline, summaryEn: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">الملخص (عربي)</label>
                      <textarea
                        rows={2}
                        value={newTimeline.summaryAr}
                        onChange={e => setNewTimeline({ ...newTimeline, summaryAr: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono text-right"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-cyan-500 text-black font-semibold text-xs tracking-wider uppercase hover:bg-cyan-400"
                  >
                    {language === 'ar' ? 'حفظ المحطة في قاعدة البيانات' : 'Commit Milestone'}
                  </button>
                </form>

                {/* Existing List */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-[#A7ADB4]">
                    {language === 'ar' ? `المحطات المسجلة (${timeline.length})` : `REGISTERED MILESTONES (${timeline.length})`}
                  </div>
                  <div className="max-h-60 overflow-y-auto space-y-1.5">
                    {timeline.map(t => (
                      <div key={t.id} className="p-2.5 rounded bg-[#050505] border border-[#20242A] flex items-center justify-between text-xs">
                        <div>
                          <span className="font-mono font-bold text-white mr-2">{t.year}</span>
                          <span className="text-white">{language === 'ar' ? t.titleAr : t.titleEn}</span>
                        </div>
                        <button
                          onClick={() => handleDeleteTimeline(t.id)}
                          className="text-[#A7ADB4] hover:text-[#E82127] p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: NEWS FEED MANAGEMENT */}
            {activeTab === 'news' && (
              <div className="space-y-6">
                <form onSubmit={handleAddNews} className="p-4 rounded-lg bg-[#050505] border border-[#20242A] space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'إضافة خبر رسمي 2026' : 'PUBLISH VERIFIED 2026 NEWS'}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Company</label>
                      <input
                        type="text"
                        value={newNews.company}
                        onChange={e => setNewNews({ ...newNews, company: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Date</label>
                      <input
                        type="text"
                        value={newNews.date}
                        onChange={e => setNewNews({ ...newNews, date: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Source Name</label>
                      <input
                        type="text"
                        value={newNews.source}
                        onChange={e => setNewNews({ ...newNews, source: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Headline (EN)</label>
                      <input
                        type="text"
                        value={newNews.titleEn}
                        onChange={e => setNewNews({ ...newNews, titleEn: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">العنوان (عربي)</label>
                      <input
                        type="text"
                        value={newNews.titleAr}
                        onChange={e => setNewNews({ ...newNews, titleAr: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono text-right"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Summary (EN)</label>
                      <textarea
                        rows={2}
                        value={newNews.summaryEn}
                        onChange={e => setNewNews({ ...newNews, summaryEn: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">الملخص (عربي)</label>
                      <textarea
                        rows={2}
                        value={newNews.summaryAr}
                        onChange={e => setNewNews({ ...newNews, summaryAr: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono text-right"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-amber-400 text-black font-semibold text-xs tracking-wider uppercase hover:bg-amber-300"
                  >
                    {language === 'ar' ? 'نشر الخبر في البث المباشر' : 'Publish News Item'}
                  </button>
                </form>

                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-[#A7ADB4]">
                    {language === 'ar' ? `الأخبار الحالية (${news.length})` : `PUBLISHED NEWS ITEMS (${news.length})`}
                  </div>
                  <div className="max-h-60 overflow-y-auto space-y-1.5">
                    {news.map(n => (
                      <div key={n.id} className="p-2.5 rounded bg-[#050505] border border-[#20242A] flex items-center justify-between text-xs">
                        <div>
                          <span className="text-[#E82127] font-mono font-bold mr-2">[{n.company}]</span>
                          <span className="text-white">{language === 'ar' ? n.titleAr : n.titleEn}</span>
                        </div>
                        <button
                          onClick={() => handleDeleteNews(n.id)}
                          className="text-[#A7ADB4] hover:text-[#E82127] p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 3: RESEARCH ARTICLES */}
            {activeTab === 'research' && (
              <div className="space-y-6">
                <form onSubmit={handleAddArticle} className="p-4 rounded-lg bg-[#050505] border border-[#20242A] space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'إضافة ورقة بحثية جديدة' : 'AUTHOR RESEARCH MONOGRAPH'}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Category</label>
                      <select
                        value={newArticle.category}
                        onChange={e => setNewArticle({ ...newArticle, category: e.target.value as any })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                      >
                        <option value="Space">Space</option>
                        <option value="AI">AI</option>
                        <option value="Neurotechnology">Neurotechnology</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Innovation">Innovation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Read Time</label>
                      <input
                        type="text"
                        value={newArticle.readTime}
                        onChange={e => setNewArticle({ ...newArticle, readTime: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Tags (Comma-separated)</label>
                      <input
                        type="text"
                        value={newArticle.tags}
                        onChange={e => setNewArticle({ ...newArticle, tags: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Monograph Title (EN)</label>
                      <input
                        type="text"
                        value={newArticle.titleEn}
                        onChange={e => setNewArticle({ ...newArticle, titleEn: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">عنوان الورقة (عربي)</label>
                      <input
                        type="text"
                        value={newArticle.titleAr}
                        onChange={e => setNewArticle({ ...newArticle, titleAr: e.target.value })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono text-right"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">Full Content (EN)</label>
                      <textarea
                        rows={3}
                        value={newArticle.contentEn}
                        onChange={e => setNewArticle({ ...newArticle, contentEn: e.target.value, excerptEn: e.target.value.slice(0, 140) })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#A7ADB4] mb-1">النص الكامل (عربي)</label>
                      <textarea
                        rows={3}
                        value={newArticle.contentAr}
                        onChange={e => setNewArticle({ ...newArticle, contentAr: e.target.value, excerptAr: e.target.value.slice(0, 140) })}
                        className="w-full bg-[#141820] border border-[#20242A] rounded px-3 py-1.5 text-xs text-white font-mono text-right"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-purple-500 text-white font-semibold text-xs tracking-wider uppercase hover:bg-purple-400"
                  >
                    {language === 'ar' ? 'إيداع البحث في المكتبة' : 'Deposit Monograph'}
                  </button>
                </form>

                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-[#A7ADB4]">
                    {language === 'ar' ? `الأبحاث المسجلة (${research.length})` : `ARCHIVED RESEARCH PAPERS (${research.length})`}
                  </div>
                  <div className="max-h-60 overflow-y-auto space-y-1.5">
                    {research.map(r => (
                      <div key={r.id} className="p-2.5 rounded bg-[#050505] border border-[#20242A] flex items-center justify-between text-xs">
                        <div>
                          <span className="text-purple-400 font-mono font-bold mr-2">[{r.category}]</span>
                          <span className="text-white">{language === 'ar' ? r.titleAr : r.titleEn}</span>
                        </div>
                        <button
                          onClick={() => handleDeleteArticle(r.id)}
                          className="text-[#A7ADB4] hover:text-[#E82127] p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 4: DATABASE & SYSTEM OPERATIONS */}
            {activeTab === 'system' && (
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-[#050505] border border-[#20242A] space-y-4">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    <span>{language === 'ar' ? 'حالة قاعدة البيانات والمزامنة' : 'DATABASE INTEGRITY & REPLICATION'}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 rounded bg-[#141820] border border-[#20242A]">
                      <div className="text-lg font-bold font-mono text-white">{timeline.length}</div>
                      <div className="text-[10px] font-mono text-[#A7ADB4]">Timeline Nodes</div>
                    </div>
                    <div className="p-3 rounded bg-[#141820] border border-[#20242A]">
                      <div className="text-lg font-bold font-mono text-white">{news.length}</div>
                      <div className="text-[10px] font-mono text-[#A7ADB4]">News Records</div>
                    </div>
                    <div className="p-3 rounded bg-[#141820] border border-[#20242A]">
                      <div className="text-lg font-bold font-mono text-white">{research.length}</div>
                      <div className="text-[10px] font-mono text-[#A7ADB4]">Monographs</div>
                    </div>
                    <div className="p-3 rounded bg-[#141820] border border-[#20242A]">
                      <div className="text-lg font-bold font-mono text-emerald-400">ONLINE</div>
                      <div className="text-[10px] font-mono text-[#A7ADB4]">Storage State</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#20242A] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-[#A7ADB4]">
                      {language === 'ar'
                        ? 'تتم مزامنة كافة الإدخالات والتعديلات فورياً في التخزين الموضعي ومخطط Firestore.'
                        : 'All administrative modifications sync instantly to local persistence with Firestore blueprint readiness.'}
                    </div>
                    <button
                      onClick={handleResetDatabase}
                      className="flex items-center gap-2 px-4 py-2 rounded bg-[#141820] border border-[#E82127]/50 text-[#E82127] text-xs font-mono hover:bg-[#E82127] hover:text-white transition-colors shrink-0"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'إعادة ضبط البيانات للأصل' : 'Factory Reset Data'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
