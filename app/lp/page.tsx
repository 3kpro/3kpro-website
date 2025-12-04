"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Copy,
  ExternalLink,
  X,
  MessageSquare,
  Hash,
  Sparkles,
  Zap,
  TrendingUp,
} from "lucide-react";
import { LAUNCH_TEMPLATES } from "@/lib/data/launch-templates";

interface ToastState {
  show: boolean;
  type: 'success' | 'error';
  message: string;
}

function CopyButton({ text, label = "Copy" }: { text: string, label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center justify-center gap-2 px-4 py-2 transition-all ${
        copied
          ? 'bg-green-500/20 text-green-400 border-green-500/30'
          : 'bg-gray-800 hover:bg-gray-700 text-white border-gray-700'
      } border rounded-lg text-sm font-medium`}
    >
      {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? "Copied!" : label}
    </button>
  );
}

// Platform icon mapping
const PLATFORM_ICONS: Record<string, any> = {
  twitter: X,
  reddit: MessageSquare,
  product_hunt: Hash,
  linkedin: Hash,
  indie_hackers: Sparkles,
  dev_to: Zap,
  hackernews: TrendingUp,
  instagram: Hash,
  youtube: Hash,
};

export default function LaunchpadPage() {
  const [searchFilter, setSearchFilter] = useState("");

  // Filter templates by search
  const filteredTemplates = LAUNCH_TEMPLATES.filter((template: any) =>
    template.community_name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    template.platform.toLowerCase().includes(searchFilter.toLowerCase())
  );

  // Group by platform
  const groupedTemplates = filteredTemplates.reduce((acc: any, template: any) => {
    if (!acc[template.platform]) {
      acc[template.platform] = [];
    }
    acc[template.platform].push(template);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🚀 Launchpad</h1>
          <p className="text-gray-400">
            Pre-written launch posts for TrendPulse. Copy, customize, and post!
          </p>
        </div>

        {/* Search Filter */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search platforms or communities..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
        </div>

        {/* Platform Sections */}
        <div className="space-y-8">
          {Object.entries(groupedTemplates).map(([platform, templates]: [string, any]) => {
            const Icon = PLATFORM_ICONS[platform] || Hash;

            return (
              <div key={platform} className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-6">
                {/* Platform Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/50">
                  <Icon className="w-6 h-6 text-coral-400" />
                  <h2 className="text-2xl font-bold capitalize">{platform.replace('_', ' ')}</h2>
                  <span className="ml-auto text-sm text-gray-500">{templates.length} post{templates.length > 1 ? 's' : ''}</span>
                </div>

                {/* Templates for this platform */}
                <div className="space-y-6">
                  {templates.map((template: any, idx: number) => {
                    const content = template.content;

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/30 space-y-4"
                      >
                        {/* Community/Target Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-1">
                              {template.community_name}
                            </h3>
                            {template.url && (
                              <a
                                href={template.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-coral-400 hover:text-coral-300 flex items-center gap-1"
                              >
                                <ExternalLink className="w-3 h-3" />
                                Open {template.community_name}
                              </a>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-500 uppercase">Day {template.day}</div>
                          </div>
                        </div>

                        {/* Content Display */}
                        <div className="space-y-4">
                          {/* Title (if exists) */}
                          {content.title && (
                            <div className="space-y-2">
                              <label className="text-xs text-gray-500 uppercase font-medium">Title</label>
                              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                <p className="text-white font-medium">{content.title}</p>
                              </div>
                              <CopyButton text={content.title} label="Copy Title" />
                            </div>
                          )}

                          {/* Body/Description/Text */}
                          {(content.body || content.description || content.text || content.caption) && (
                            <div className="space-y-2">
                              <label className="text-xs text-gray-500 uppercase font-medium">
                                {content.body ? 'Body' : content.description ? 'Description' : 'Content'}
                              </label>
                              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                <p className="text-gray-200 whitespace-pre-wrap">
                                  {content.body || content.description || content.text || content.caption}
                                </p>
                              </div>
                              <CopyButton
                                text={content.body || content.description || content.text || content.caption}
                                label="Copy Content"
                              />
                            </div>
                          )}

                          {/* Thread (for Twitter) */}
                          {content.thread && Array.isArray(content.thread) && (
                            <div className="space-y-2">
                              <label className="text-xs text-gray-500 uppercase font-medium">Thread ({content.thread.length} tweets)</label>
                              <div className="space-y-2">
                                {content.thread.map((tweet: string, tIdx: number) => (
                                  <div key={tIdx} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                    <div className="flex gap-3">
                                      <div className="text-xs text-gray-500 font-mono">{tIdx + 1}/</div>
                                      <p className="text-gray-200 flex-1">{tweet}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <CopyButton text={content.thread.join('\n\n')} label="Copy Full Thread" />
                            </div>
                          )}

                          {/* Tagline (for Product Hunt) */}
                          {content.tagline && (
                            <div className="space-y-2">
                              <label className="text-xs text-gray-500 uppercase font-medium">Tagline</label>
                              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                <p className="text-white">{content.tagline}</p>
                              </div>
                              <CopyButton text={content.tagline} label="Copy Tagline" />
                            </div>
                          )}

                          {/* First Comment */}
                          {content.first_comment && (
                            <div className="space-y-2">
                              <label className="text-xs text-gray-500 uppercase font-medium">First Comment</label>
                              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                                <p className="text-gray-200 whitespace-pre-wrap">{content.first_comment}</p>
                              </div>
                              <CopyButton text={content.first_comment} label="Copy Comment" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No posts found matching "{searchFilter}"
          </div>
        )}
      </div>
    </div>
  );
}
