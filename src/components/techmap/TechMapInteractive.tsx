/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TECH_MAP_NODES } from '../../data/techMap';
import { TechMapNode } from '../../types';
import { Network, Sparkles, Cpu, Layers } from 'lucide-react';

export const TechMapInteractive: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<TechMapNode>(TECH_MAP_NODES[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeNodeId = hoveredNodeId || selectedNode.id;

  // Calculate connections
  const connections: { from: TechMapNode; to: TechMapNode }[] = [];
  TECH_MAP_NODES.forEach((node) => {
    node.connectedTo.forEach((targetId) => {
      const target = TECH_MAP_NODES.find((n) => n.id === targetId);
      if (target && node.id < target.id) {
        connections.push({ from: node, to: target });
      }
    });
  });

  return (
    <section id="techmap" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#20242A]">
      
      {/* Header */}
      <div className="space-y-3 mb-10 text-center sm:text-left rtl:sm:text-right">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
          <Network className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'معمارية المنظومة الموحدة' : 'SYSTEM ARCHITECTURE MAP'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase font-display">
          {t('techMapTitle')}
        </h2>
        <p className="text-sm text-[#A7ADB4] max-w-2xl">
          {t('techMapSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Interactive Interactive Network Stage (Col 1 & 2) */}
        <div className="lg:col-span-2 relative bg-[#0B0D0F] border border-[#20242A] rounded-lg p-6 sm:p-8 min-h-[500px] overflow-hidden bg-tech-grid">
          
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-[11px] font-mono text-[#A7ADB4]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>INTERACTIVE NETWORK GRAPH</span>
          </div>

          <div className="absolute top-4 right-4 z-10 text-[11px] font-mono text-[#A7ADB4]">
            {language === 'ar' ? 'انقر على أي عقدة للاستكشاف' : 'Click node to inspect linkage'}
          </div>

          {/* SVG Vector Connections Canvas */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((c, i) => {
              const isHighlighted =
                c.from.id === activeNodeId || c.to.id === activeNodeId;
              return (
                <line
                  key={i}
                  x1={`${c.from.x}%`}
                  y1={`${c.from.y}%`}
                  x2={`${c.to.x}%`}
                  y2={`${c.to.y}%`}
                  stroke={isHighlighted ? '#06B6D4' : '#20242A'}
                  strokeWidth={isHighlighted ? '2.5' : '1'}
                  strokeDasharray={isHighlighted ? '4 2' : 'none'}
                  className={isHighlighted ? 'transition-all duration-300' : ''}
                />
              );
            })}
          </svg>

          {/* Render Interactive Nodes */}
          <div className="relative w-full h-[450px]">
            {TECH_MAP_NODES.map((node) => {
              const isSelected = selectedNode.id === node.id;
              const isHovered = hoveredNodeId === node.id;
              const isRelated =
                selectedNode.connectedTo.includes(node.id) ||
                node.connectedTo.includes(selectedNode.id);

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 z-20 group`}
                >
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono tracking-wider uppercase transition-all ${
                      isSelected
                        ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)] border border-cyan-300'
                        : isRelated
                        ? 'bg-[#141820] text-cyan-300 border border-cyan-500/50 shadow-sm'
                        : 'bg-[#050505] text-[#A7ADB4] border border-[#20242A] hover:border-white/50 hover:text-white'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected
                          ? 'bg-black'
                          : isRelated
                          ? 'bg-cyan-400'
                          : 'bg-[#A7ADB4]'
                      }`}
                    />
                    <span>{language === 'ar' ? node.nameAr : node.nameEn}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Static ASCII Conceptual Schema Legend (as requested in brief #18) */}
          <div className="mt-4 pt-4 border-t border-[#20242A] text-[10px] font-mono text-[#A7ADB4]/70 hidden sm:block">
            <div className="flex items-center justify-between">
              <span>PILLARS: SPACE (SpaceX/Starlink/Starship) ↔ AI (xAI/Grok) ↔ AUTONOMY (Tesla/Optimus/Robotaxi)</span>
              <span>SYNAPSE: NEURALINK & BORING CO.</span>
            </div>
          </div>

        </div>

        {/* Node Inspector Panel (Col 3) */}
        <div className="bg-[#0B0D0F] border border-[#20242A] rounded-lg p-6 space-y-6">
          
          <div className="border-b border-[#20242A] pb-4 space-y-1">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 uppercase">
              <span>{selectedNode.parentCategory}</span>
              <span className="text-[#A7ADB4]">SYS ID: {selectedNode.id}</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              {language === 'ar' ? selectedNode.nameAr : selectedNode.nameEn}
            </h3>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A7ADB4] flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'ar' ? 'الدور في المنظومة التكنولوجية' : 'ECOSYSTEM ROLE'}</span>
            </div>
            <p className="text-sm text-[#FFFFFF]/90 leading-relaxed">
              {language === 'ar' ? selectedNode.descriptionAr : selectedNode.descriptionEn}
            </p>
          </div>

          <div className="space-y-3 pt-2 border-t border-[#20242A]">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A7ADB4] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E82127]" />
              <span>{language === 'ar' ? 'الروابط الهندسية والتقاطعات المباشرة' : 'DIRECT ENGINEERING BRIDGES'}</span>
            </div>
            
            <div className="space-y-2">
              {selectedNode.connectedTo.map((targetId) => {
                const target = TECH_MAP_NODES.find((n) => n.id === targetId);
                if (!target) return null;
                return (
                  <div
                    key={target.id}
                    onClick={() => setSelectedNode(target)}
                    className="p-2.5 rounded bg-[#050505] border border-[#20242A] hover:border-cyan-500/50 cursor-pointer transition-colors flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-semibold text-white font-display">
                        {language === 'ar' ? target.nameAr : target.nameEn}
                      </div>
                      <div className="text-[10px] text-[#A7ADB4] font-mono">
                        {target.parentCategory}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {language === 'ar' ? 'عرض ←' : '→ View'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-3 rounded bg-[#050505] border border-[#20242A] text-xs text-[#A7ADB4] space-y-1">
            <div className="text-white font-medium flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'ar' ? 'التكامل التبادلي' : 'Synergy Architecture'}</span>
            </div>
            <p className="text-[11px] text-[#A7ADB4] leading-normal">
              {language === 'ar'
                ? 'تستفيد كافة المشروعات من وفورات الحجم في المواد المتقدمة والسيليكون وشبكات الطاقة والبرمجيات ذاتية القيادة.'
                : 'Shared economies of scale across specialized metallurgical alloys, low-latency silicon, battery packs, and real-time neural networks.'}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
