import React from 'react';
import Link from 'next/link';
import { FileText, Settings, Box, Cpu, Layers, Globe, Database } from 'lucide-react';
import { getMarkdown } from '../../lib/markdown';

const n8nTruth = "See n8n-workflow-templates/TRUTH.md";
const aiTruth = "See ai-prompt-templates/TRUTH.md";

const products = [
  {
    id: 'n8n-templates',
    title: 'n8n Workflow Templates',
    description: 'Pre-built, industry-specific automation bundles.',
    status: 'In Dev',
    icon: Layers,
    path: '/softdev/products/n8n-workflow-templates',
    color: 'text-orange-500',
    borderColor: 'border-orange-500/20',
    truth: n8nTruth,
    checklist: [
      { task: 'Define Specs', done: false },
      { task: 'Build MVP', done: false },
      { task: 'Create Marketing Assets', done: false },
      { task: 'Setup Gumroad/Stripe', done: false },
      { task: 'Launch', done: false },
    ],
    assets: ['softdev/products/n8n-workflow-templates/TRUTH.md', 'softdev/products/n8n-workflow-templates/content-creator-pack/README.md']
  },
  {
    id: 'oauth-manager',
    title: 'OAuth Token Manager',
    description: 'Standalone tool to manage and refresh social tokens.',
    status: 'Concept',
    icon: KeyIcon,
    path: '/softdev/products/oauth-manager',
    color: 'text-blue-500',
    borderColor: 'border-blue-500/20',
    truth: 'Standalone tool that manages OAuth refresh for Instagram/TikTok/LinkedIn/Twitter',
    checklist: [
      { task: 'Define Specs', done: false },
      { task: 'Build MVP', done: false },
      { task: 'Create Marketing Assets', done: false },
      { task: 'Setup Gumroad/Stripe', done: false },
      { task: 'Launch', done: false },
    ],
    assets: []
  },
  {
    id: 'azure-optimizer',
    title: 'Azure Cost Optimizer',
    description: 'Self-service audit tool for SMB Azure accounts.',
    status: 'Concept',
    icon: CloudIcon,
    path: '/softdev/products/azure-optimizer',
    color: 'text-sky-500',
    borderColor: 'border-sky-500/20',
    truth: 'Self-service audit tool for Azure subscriptions',
    checklist: [
      { task: 'Define Specs', done: false },
      { task: 'Build MVP', done: false },
      { task: 'Create Marketing Assets', done: false },
      { task: 'Setup Gumroad/Stripe', done: false },
      { task: 'Launch', done: false },
    ],
    assets: []
  },
  {
    id: 'ai-wrappers',
    title: 'AI Prompt Templates',
    description: 'Niche prompt libraries for Lawyers, Realtors, etc.',
    status: 'Ready for Content',
    icon: SparklesIcon,
    path: '/softdev/products/ai-prompt-templates',
    color: 'text-purple-500',
    borderColor: 'border-purple-500/20',
    truth: aiTruth,
    checklist: [
      { task: 'Define Specs', done: false },
      { task: 'Build MVP', done: false },
      { task: 'Create Marketing Assets', done: false },
      { task: 'Setup Gumroad/Stripe', done: false },
      { task: 'Launch', done: false },
    ],
    assets: ['softdev/products/ai-prompt-templates/TRUTH.md']
  },
  {
    id: 'micro-saas',
    title: 'Micro-SaaS Tools',
    description: 'Single-purpose tools like Invoice Generators.',
    status: 'Concept',
    icon: Box,
    path: '/softdev/products/micro-saas',
    color: 'text-green-500',
    borderColor: 'border-green-500/20',
    truth: 'Standalone, focused tools for one-off problems',
    checklist: [
      { task: 'Define Specs', done: false },
      { task: 'Build MVP', done: false },
      { task: 'Create Marketing Assets', done: false },
      { task: 'Setup Gumroad/Stripe', done: false },
      { task: 'Launch', done: false },
    ],
    assets: []
  },
  {
    id: 'browser-extensions',
    title: 'Browser Extensions',
    description: 'AI-enhanced productivity extensions.',
    status: 'Concept',
    icon: Globe,
    path: '/softdev/products/browser-extensions',
    color: 'text-yellow-500',
    borderColor: 'border-yellow-500/20',
    truth: 'Simple Chrome/Firefox extensions with AI power',
    checklist: [
      { task: 'Define Specs', done: false },
      { task: 'Build MVP', done: false },
      { task: 'Create Marketing Assets', done: false },
      { task: 'Setup Gumroad/Stripe', done: false },
      { task: 'Launch', done: false },
    ],
    assets: []
  },
  {
    id: 'api-middleware',
    title: 'API Middleware',
    description: 'Connectors for services that don\'t integrate natively.',
    status: 'Concept',
    icon: Database,
    path: '/softdev/products/api-middleware',
    color: 'text-red-500',
    borderColor: 'border-red-500/20',
    truth: 'Pre-built connectors and glue code for services',
    checklist: [
      { task: 'Define Specs', done: false },
      { task: 'Build MVP', done: false },
      { task: 'Create Marketing Assets', done: false },
      { task: 'Setup Gumroad/Stripe', done: false },
      { task: 'Launch', done: false },
    ],
    assets: []
  }
 ];

// Helper icons
function KeyIcon(props: any) { return <Settings {...props} /> }
function CloudIcon(props: any) { return <Cpu {...props} /> }
function SparklesIcon(props: any) { return <FileText {...props} /> }

export default function FactoryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Box className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">Micro-SaaS Factory</h1>
              <p className="text-slate-400">3K Pro Services Development Hub</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium">Factory Status: Online</span>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="text-sm font-medium text-slate-400">Active Products:</span>
              <span className="text-sm font-bold text-white">7</span>
            </div>
            <Link href="/factory/incubator" className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-purple-500/20 transition-all">
              <SparklesIcon className="w-4 h-4" />
              New Idea
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div 
                key={product.id} 
                className={`bg-slate-900/50 border ${product.borderColor} rounded-xl p-6 hover:bg-slate-900 transition-all group relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                  <Icon className={`w-24 h-24 ${product.color}`} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-lg bg-slate-950 border border-slate-800 ${product.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full border ${
                      product.status === 'In Dev' ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' :
                      product.status === 'Ready for Content' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                      'bg-slate-800 border-slate-700 text-slate-400'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {product.title}
                  </h3>
                   <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                     {product.description}
                   </p>

                   <div className="mb-4">
                     <h4 className="text-sm font-semibold text-cyan-400 mb-2">The Truth</h4>
                     <pre className="text-xs text-slate-300 bg-slate-950 p-2 rounded border border-slate-800 whitespace-pre-wrap line-clamp-3">{product.truth}</pre>
                   </div>

                   <div className="mb-4">
                     <h4 className="text-sm font-semibold text-blue-400 mb-2">Build Steps</h4>
                     <ul className="text-xs text-slate-300 list-disc list-inside">
                       {product.checklist.map((item, index) => (
                         <li key={index} className={item.done ? 'line-through text-slate-500' : ''}>
                           {item.task}
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div className="mb-4">
                     <h4 className="text-sm font-semibold text-purple-400 mb-2">Asset Locker</h4>
                     <ul className="text-xs text-slate-300 list-disc list-inside">
                       {product.assets.length > 0 ? product.assets.map((asset, index) => (
                         <li key={index}>{asset}</li>
                       )) : <li>No assets yet</li>}
                     </ul>
                   </div>

                   <div className="flex items-center gap-2 mt-auto">
                     <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors border border-slate-700">
                       View Specs
                     </button>
                     <button className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors shadow-lg shadow-indigo-500/20">
                       Open Lab
                     </button>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}