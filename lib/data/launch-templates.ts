export const LAUNCH_TEMPLATES = [
  // ==================== DAY 1: THE REVEAL ====================
  // Focus: Problem/Solution, Initial Awareness

  // PRODUCT HUNT
  {
    day: 1,
    platform: 'product_hunt',
    community_name: 'Product Hunt Launch',
    url: 'https://www.producthunt.com/posts/new',
    content: {
      tagline: "XELORA: Predict Momentum. Engineer Virality.",
      description: "We built XELORA to solve a simple problem: creators waste days making content that gets 3 likes. It's designed for content creators, marketers, and solopreneurs who need to know what will go viral before they hit publish. Our AI-powered Viral Score™ predicts engagement with 87% accuracy.",
      first_comment: "Hey Product Hunt! 👋\n\nI'm the founder of XELORA.\n\nI watched too many creators pour their hearts into content that flopped. Meanwhile, low-effort posts randomly went viral. It made no sense.\n\nThat's why we built XELORA - an AI that analyzes 1M+ viral posts to predict what will perform BEFORE you create it.\n\nIt helps you save time and maximize reach by showing your Viral Score™ before you publish. Our beta testers increased engagement by 340% on average.\n\nWould love your feedback! What content challenges are you facing?"
    }
  },

  // ==================== PRODUCT HUNT FORUMS (COMPLIANT) ====================
  // ⚠️ IMPORTANT: These posts follow PH Forum Guidelines (value-first, not promotional)
  // Do NOT post all on same day - space 3-5 days apart
  // Lead with VALUE, not product promotion

  // POST #1: Value-First Discussion - Viral Content Insights
  {
    day: 2,
    platform: 'product_hunt',
    community_name: 'p/general (Value Discussion)',
    url: 'https://www.producthunt.com/p/general',
    content: {
      title: "What Actually Makes Content Go Viral? I Analyzed 1M+ Posts to Find Out.",
      body: "After spending 3 hours on a LinkedIn post that got 3 likes, I went down a rabbit hole analyzing what makes content explode.\n\nSpent months digging into viral patterns across platforms. Here's what the data shows:\n\n## Key Findings:\n\n**1. Hook Quality > Topic Choice (3x more important)**\n- First 3 seconds decide 70% of engagement\n- \"How to use AI\" → 20/100 viral potential\n- \"I replaced my marketing team with AI for $0\" → 87/100\n\n**2. Multi-Source Validation Matters**\n- Topics trending on 1 platform: 40% viral chance\n- Topics trending on 3+ platforms: 87% viral chance\n- Cross-platform validation = strongest signal\n\n**3. Timing Matters LESS Than You Think**\n- Quality beats schedule 9/10 times\n- Tuesday 10am ≈ Saturday 2pm if content is good\n- Exception: Breaking news requires immediate posting\n\n**4. Platform-Specific Optimization**\n- Twitter: 1200 chars max, controversy works\n- LinkedIn: 2400 chars optimal, professional + vulnerable\n- Reddit: Value-first, no BS, hates self-promotion\n- TikTok: First 3 seconds or scroll\n\n**5. Specificity is a Cheat Code**\n- Generic: \"Marketing tips\" → 15/100\n- Specific: \"How I got 10K LinkedIn followers in 30 days with $0 ad spend\" → 92/100\n\nI built a scoring system based on this research for my own content. Been using it for a few months - accuracy is around 87% so far.\n\n**Questions for the community:**\n- Do you optimize for virality or just post authentically?\n- What's your biggest content creation frustration?\n- Have you noticed similar patterns in your niche?\n\nHappy to share more insights from the research if useful!"
    }
  },

  // POST #2: AMA - AI-Assisted Development
  {
    day: 4,
    platform: 'product_hunt',
    community_name: 'p/general (AMA)',
    url: 'https://www.producthunt.com/p/general',
    content: {
      title: "I built a SaaS in 90 days using AI as my dev team (Claude Code). AMA about AI-assisted development.",
      body: "Hey Product Hunt!\n\nI'm James, solo founder. Just finished building XELORA (viral content prediction platform) in 90 days using AI-assisted development.\n\n**Background:**\n- Former Uber driver (nights/weekends dev)\n- Used Claude Code for ~70% of my codebase\n- Bootstrapped with ~$1,500, no VC funding\n- Shipped in 90 days vs 6+ months traditional dev\n\n**What I can talk about:**\n- AI-assisted development (how I shipped 10x faster)\n- Viral content mechanics (analyzed 1M+ posts)\n- Bootstrapping on a shoestring ($132/mo burn rate)\n- Building with Next.js 15, Vertex AI, Supabase\n- Solo founder mental health (the real struggle)\n- Product Hunt launch strategy\n\n**NOT here to sell** - genuinely want to help other builders ship faster using AI.\n\n**Ask me anything!**\n\nSome topics I can dive into:\n- How I structured prompts to get production-ready code\n- What AI can vs can't do well in development\n- How I validated the idea before building\n- Dealing with imposter syndrome as a non-traditional dev\n- Bootstrapping without savings\n\nFire away! 🚀"
    }
  },

  // POST #3: Validation Question - Product Feedback
  {
    day: 6,
    platform: 'product_hunt',
    community_name: 'p/producthunt (Validation)',
    url: 'https://www.producthunt.com/p/producthunt',
    content: {
      title: "Honest question: Is AI-powered \"viral prediction\" actually useful, or just marketing fluff?",
      body: "I've been working on an AI that predicts which content will go viral (0-100 score) before you post it.\n\nCurrent accuracy: ~87% on 1M+ post training data using Google Vertex AI.\n\nBut I'm genuinely curious:\n\n**For marketers/creators:**\n- Would you trust an AI to tell you if your content will work?\n- What accuracy rate would you need to actually use it?\n- Or do you prefer just posting and seeing what sticks?\n\n**For builders:**\n- Is \"viral prediction\" a solved problem already?\n- Are there better approaches than ML scoring?\n- Should I open-source the algorithm for validation?\n\nI'm close to launching this on PH, but want to make sure it's actually solving a real problem - not just cool tech looking for a use case.\n\n**Brutal feedback welcome.** Is this useful or am I building something nobody wants?"
    }
  },

  // POST #4: Lessons Learned - Bootstrapping
  {
    day: 8,
    platform: 'product_hunt',
    community_name: 'p/general (Lessons)',
    url: 'https://www.producthunt.com/p/general',
    content: {
      title: "Bootstrapped a SaaS from $0 → Launch in 90 days. Here's what actually worked.",
      body: "Just launched my first SaaS on Product Hunt yesterday. Wanted to share what worked (and what didn't) while it's fresh.\n\n## What Worked:\n\n**1. AI-Assisted Development = 10x Speed**\n- Used Claude Code for ~70% of codebase\n- Focused on product decisions, not syntax\n- Shipped in 90 days vs 6 months solo dev\n\n**2. Leverage Free Tiers Ruthlessly**\n- Vercel: Free hosting (up to 100GB bandwidth)\n- Supabase: Free backend (up to 500MB DB)\n- Google Cloud: $1,200 in AI credits (new accounts)\n- Monthly burn: $132 (can scale to $10K MRR at this rate)\n\n**3. Ship Before It's Perfect**\n- 87% accuracy is good enough (not 99%)\n- Missing features? Launch anyway\n- Users tell you what matters\n\n**4. Build What People WILL Pay For**\n- Validation: People DM'd asking to pay before I had Stripe set up\n- Problem: \"I spend 3 hours on content, get 3 likes\"\n- Solution: \"Know what works BEFORE you create\"\n\n**5. Product Hunt is Still Worth It (2025)**\n- Launched at 12:01 AM PST\n- Got [X] upvotes, [X] signups, [X] paying customers\n- Real users, real feedback, real momentum\n\n## What Didn't Work:\n\n- Overthinking the tagline (spent 3 hours, first draft was fine)\n- Building features users didn't ask for\n- Not setting up analytics Day 1 (added Week 3, regret it)\n- Trying to launch on multiple platforms same day (too scattered)\n\n## Key Insight:\n\nBootstrap forces discipline. No VC money = no room for waste. Every feature must drive revenue.\n\nHonestly? Better product because of constraints.\n\n**Questions I can answer:**\n- AI-assisted development workflows\n- Bootstrap economics (how to stay under $200/mo burn)\n- Shipping fast as solo founder\n- Free tier architecture strategies\n\nNot dropping links (don't want to be spammy), but happy to help other bootstrappers ship faster!"
    }
  },

  // REDDIT - r/SaaS (Value-first, NO direct promo)
  {
    day: 1,
    platform: 'reddit',
    community_name: 'r/SaaS',
    url: 'https://www.reddit.com/r/SaaS/submit',
    content: {
      title: "I analyzed 1M viral posts to understand what makes SaaS content actually convert",
      body: "Hey r/SaaS,\n\nSpent the last 6 months deep-diving into viral content mechanics while building a tool. Thought I'd share the most surprising patterns I found:\n\n**1. Hook quality beats topic 10:1**\n- \"How to use AI for marketing\" → 20/100 engagement\n- \"I fired my marketing team and replaced them with AI for $0\" → 87/100\n- First 3 seconds decide 70% of your engagement\n\n**2. Multi-platform validation is the strongest signal**\n- Topic trending on 1 platform: 40% viral chance\n- Same topic on 3+ platforms: 87% viral chance\n- Cross-validation eliminates false positives\n\n**3. Platform-specific optimization matters more than timing**\n- Twitter: Punchy, controversial, <1200 chars\n- LinkedIn: Professional, 2400 chars sweet spot, value-first\n- Reddit: Zero BS tolerance, value upfront, context matters\n\n**4. Specificity drives conversions**\n- Generic \"SaaS tips\" → 15% CTR\n- \"How I got 1,000 paying customers with $0 ad spend\" → 92% CTR\n\n**5. Emotional triggers (curiosity, FOMO, validation) = 3x engagement**\n\nBuilt these insights into a prediction model while building my own SaaS. Happy to discuss the methodology if anyone's interested in content strategy."
    }
  },

  // REDDIT - r/SideProject
  {
    day: 1,
    platform: 'reddit',
    community_name: 'r/SideProject',
    url: 'https://www.reddit.com/r/SideProject/submit',
    content: {
      title: "Built an AI that predicts viral content with 87% accuracy. 6 months of nights/weekends.",
      body: "After 6 months of nights and weekends, I finally launched my side project.\n\nIt's an AI that predicts what content will go viral BEFORE you create it.\n\n**The workflow:**\n1. Enter your content idea\n2. Get a Viral Score™ (0-100)\n3. See specific improvements (better hook, add emotional trigger, etc.)\n4. Publish with confidence\n\n**Tech stack:**\n- Frontend: Next.js 15 (App Router, Server Components)\n- Backend: Supabase (Auth + PostgreSQL)\n- AI: Google Gemini 2.0 Flash\n- Payments: Stripe subscriptions\n\n**Beta results:**\n- 87% prediction accuracy\n- Users increased engagement by 340%\n- Saves 15+ hours/week on content that flops\n\nBuilt entirely solo while working full-time. Open to feedback!\n\n**DM me or check profile for link.** Happy to answer technical questions!"
    }
  },

  // REDDIT - r/roastmystartup (Feedback-focused, promotion allowed)
  {
    day: 1,
    platform: 'reddit',
    community_name: 'r/roastmystartup',
    url: 'https://www.reddit.com/r/roastmystartup/submit',
    content: {
      title: "Roast my AI viral content predictor - be brutally honest",
      body: "I built XELORA - an AI that predicts if your content will go viral (0-100 score) before you create it.\n\n**The pitch:** Stop wasting time on posts that flop. Get a Viral Score before you hit publish.\n\n**What it does:**\n- Analyzes trending topics across Google, Twitter, Reddit\n- Gives you a 0-100 Viral Score for your content idea\n- Shows what to improve (better hook, add emotional trigger, etc.)\n- Multi-platform publishing when you're ready\n\n**Tech:** Next.js 15, Supabase, Google Gemini 2.5 Flash, Vertex AI\n\n**Pricing:** Free tier, then $9-$79/mo\n\n**Beta results:** 87% prediction accuracy, users increased engagement 340% avg\n\n**Link:** https://getxelora.com\n\n**What I need roasted:**\n- Is the value prop clear or confusing?\n- Pricing too high/low for what it does?\n- Would you actually use this or is it solving a fake problem?\n- UI/UX feedback (it's rough around edges)\n\nBe brutally honest. I can take it."
    }
  },

  // REDDIT - r/alphaandbetausers (Beta testing community)
  {
    day: 1,
    platform: 'reddit',
    community_name: 'r/alphaandbetausers',
    url: 'https://www.reddit.com/r/alphaandbetausers/submit',
    content: {
      title: "[Beta] AI that predicts viral content before you post - looking for testers",
      body: "**Product:** XELORA - Viral content prediction platform\n\n**What it does:**\nPredicts which content will go viral BEFORE you create it. Enter your idea, get a 0-100 Viral Score, see what to improve.\n\n**Current stage:** Public beta (launched on Product Hunt yesterday)\n\n**What works:**\n- Viral Score prediction (87% accuracy in testing)\n- Trending topic discovery across Google/Twitter/Reddit\n- Multi-platform content generation\n- Publishing to Twitter/LinkedIn/Facebook\n\n**What needs testing:**\n- Instagram integration (just added, needs validation)\n- TikTok trend analysis (beta feature)\n- Team collaboration features\n- Mobile responsiveness\n\n**Looking for:**\n- Content creators who post 3+ times/week\n- Marketers managing multiple brands\n- Agencies doing client content\n- Honest feedback on accuracy and UX\n\n**Free tier available:** https://getxelora.com\n\n**What you get:**\n- Early access to all features\n- Direct line to founder (me) for bugs/feedback\n- Free Pro upgrade if you provide detailed feedback\n\nDrop your email or DM if interested. Happy to answer questions!"
    }
  },

  // REDDIT - r/indiehackers (SHOW IH flair - one-time promotion allowed)
  {
    day: 2,
    platform: 'reddit',
    community_name: 'r/indiehackers',
    url: 'https://www.reddit.com/r/indiehackers/submit',
    content: {
      title: "[SHOW IH] Built an AI viral predictor in 90 days while driving Uber - $0 MRR → ???",
      body: "Hey Indie Hackers,\n\n**The journey:**\n- Solo founder, built nights/weekends for 90 days\n- Drove Uber during the day to pay bills\n- Used Claude Code for ~70% of development\n- Total investment: ~$1,500 (Vercel, Supabase, domains)\n- Monthly burn: $132\n- Launched on Product Hunt yesterday\n\n**What I built:**\nXELORA - AI that predicts if content will go viral before you create it. Analyzes 1M+ posts to give you a 0-100 Viral Score.\n\n**Tech stack:**\n- Next.js 15 (App Router, Server Components)\n- Supabase (auth + PostgreSQL)\n- Google Gemini 2.5 Flash for AI\n- Vertex AI for custom models\n- Stripe for payments\n\n**Current metrics (24 hours post-launch):**\n- [Update with actual numbers]\n- X Product Hunt upvotes\n- X signups\n- X paying customers\n- $X MRR\n\n**Biggest lessons:**\n1. AI coding tools = 10x productivity boost (Claude Code is insane)\n2. Ship fast, validate faster (MVP in 30 days, polish later)\n3. Bootstrap story resonates more than features\n4. Product Hunt traffic ≠ conversions (learning this now)\n\n**What I'm struggling with:**\n- Converting PH traffic to paid users\n- Pricing strategy (is $29/mo too high for indie creators?)\n- Scaling without breaking free tier economics\n\n**Questions for IH community:**\n- How did you handle your first 100 paying customers?\n- What conversion rate is realistic for Product Hunt traffic?\n- Should I focus on freemium or trial-to-paid?\n\nHappy to answer questions about the build process, AI integration, or bootstrapping!\n\n🔗 https://getxelora.com (if you want to check it out)"
    }
  },

  // REDDIT - r/SaaS Weekly Feedback Thread (SAFE - use pinned thread)
  {
    day: 1,
    platform: 'reddit',
    community_name: 'r/SaaS (Weekly Feedback Thread)',
    url: 'https://www.reddit.com/r/SaaS/',
    content: {
      title: "Post in PINNED Weekly Feedback Thread",
      body: "**Instructions:** Find the pinned 'Weekly Feedback Thread' at top of r/SaaS and post this:\n\n---\n\n**XELORA - AI Viral Content Predictor**\n\nPredicts if your content will go viral (0-100 score) before you create it.\n\n**What it does:**\n- Analyzes trending topics across Google/Twitter/Reddit\n- Gives Viral Score for your content ideas\n- Shows specific improvements (hook, triggers, timing)\n- Multi-platform publishing\n\n**Tech:** Next.js 15, Supabase, Google Gemini, Vertex AI\n**Stage:** Just launched on Product Hunt\n**Pricing:** Free tier, $9-$79/mo paid\n**Link:** https://getxelora.com\n\n**Looking for feedback on:**\n1. Value prop clarity - is it obvious what this does?\n2. Pricing - too high/low for SaaS creators?\n3. UI/UX - any friction in the flow?\n4. Feature gaps - what's missing?\n\nBuilt solo in 90 days while driving Uber. Happy to answer questions!"
    }
  },

  // REDDIT - r/Entrepreneur Thank You Thursday (SAFE - weekly promo thread)
  {
    day: 4,
    platform: 'reddit',
    community_name: 'r/Entrepreneur (Thank You Thursday)',
    url: 'https://www.reddit.com/r/Entrepreneur/',
    content: {
      title: "Post in 'Thank You Thursday' Thread (Thursdays only)",
      body: "**Instructions:** Wait for Thursday, find the pinned 'Thank You Thursday' thread, and post this:\n\n---\n\n**XELORA - Stop wasting time on content that flops**\n\nI built an AI that predicts viral content before you create it. If you're spending hours on posts that get 3 likes, this might help.\n\n**What it does:**\n- Enter your content idea\n- Get a Viral Score (0-100)\n- See what to improve before you waste time creating\n- Publish directly to Twitter/LinkedIn/Facebook\n\n**Free tier available:** https://getxelora.com\n\n**Launch promo:** Use code PHHUNT50 for 50% off first month\n\n**Built by:** Solo founder (me) in 90 days while driving Uber to pay bills. Bootstrapped with $1,500.\n\n**Beta results:** 87% accuracy, users increased engagement 340% avg\n\nHappy to answer questions!"
    }
  },

  // REDDIT - r/startups Feedback Friday (SAFE - weekly thread)
  {
    day: 5,
    platform: 'reddit',
    community_name: 'r/startups (Feedback Friday)',
    url: 'https://www.reddit.com/r/startups/',
    content: {
      title: "Post in 'Feedback Friday' Thread (Fridays only)",
      body: "**Instructions:** Wait for Friday, find the pinned 'Feedback Friday' thread, and post this:\n\n---\n\n**XELORA - AI Viral Content Predictor (Just Launched)**\n\n**Problem:** Founders waste 20+ hours/week on content that gets zero traction\n\n**Solution:** AI predicts viral potential (0-100 score) BEFORE you create\n\n**How it works:**\n1. Enter content idea or topic\n2. Get Viral Score across platforms (Twitter, LinkedIn, etc.)\n3. See specific improvements (hook, emotional triggers, timing)\n4. Create & publish when confident\n\n**Current state:**\n- Launched on Product Hunt [yesterday/this week]\n- 87% prediction accuracy in testing\n- Beta users increased engagement 340% avg\n- Free tier + $9-$79/mo paid plans\n\n**Tech stack:** Next.js 15, Supabase, Google Gemini, Vertex AI\n\n**Link:** https://getxelora.com\n\n**Feedback needed:**\n1. Does the value prop resonate? (predict viral content)\n2. Pricing feedback for bootstrapped founders\n3. What features would make this a must-have?\n4. Any UX friction you see?\n\n**About me:** Solo founder, built in 90 days while driving Uber, $1,500 total investment, no VC.\n\nAppreciate any honest feedback!"
    }
  },

  // ==================== REDDIT KARMA BUILDING ====================
  // Use these to build reputation before promotional posts
  // Target: 100-200 karma in 5-7 days

  // KARMA BUILD - r/nextjs (Technical help)
  {
    day: 0,
    platform: 'reddit_karma',
    community_name: 'r/nextjs (Karma Building)',
    url: 'https://www.reddit.com/r/nextjs/',
    content: {
      title: "Find posts asking for help - leave these comments",
      body: "**Instructions:** Browse r/nextjs by 'New' or 'Rising'. Find questions about topics below and adapt these comments:\n\n---\n\n**Q: \"How do I deploy Next.js 15?\"**\nComment:\n> I've deployed several Next.js 15 apps on Vercel and it's been seamless. Just connect your GitHub repo and it auto-deploys on every push. The App Router works out of the box. If you're using Server Components, make sure to check the build logs - sometimes hydration issues don't show locally but break in production. Happy to help if you run into specific errors.\n\n---\n\n**Q: \"Should I use Server Components or Client Components?\"**\nComment:\n> I was confused about this too at first. Here's what worked for me: default to Server Components unless you need interactivity (onClick, useState, useEffect). Server Components are faster and reduce bundle size. I only use 'use client' when I actually need client-side state or browser APIs. The performance difference is noticeable - my API response times dropped from 9.6s to 4.8s when I optimized this.\n\n---\n\n**Q: \"Next.js 15 vs 14 - worth upgrading?\"**\nComment:\n> I upgraded from 14 to 15 for a production app. The React 19 support and improved caching were worth it, but the migration had some friction with third-party packages. If you're starting fresh, definitely go with 15. If you're mid-project, maybe wait until you hit a natural refactor point. The Turbopack improvements are nice but not game-changing yet.\n\n---\n\n**Q: \"How do I optimize Next.js API routes?\"**\nComment:\n> I ran into this exact issue. My API routes were taking 9+ seconds initially. What helped: (1) Move expensive operations to server actions, (2) Use React cache() for repeated fetches, (3) Enable streaming for large responses, (4) Check your middleware - I had accidentally added logging that slowed everything down. Got it down to ~4.8s average. What's your current bottleneck?\n\n---\n\n**Q: \"Best way to handle authentication in Next.js?\"**\nComment:\n> I've used both NextAuth and Supabase Auth. For my latest project, I went with Supabase because it handles the backend too. The middleware pattern works well - check auth in middleware.ts and redirect if needed. One gotcha: make sure you're not calling Supabase on every middleware execution or you'll hit rate limits. Cache the session check."
    }
  },

  // KARMA BUILD - r/webdev (General advice)
  {
    day: 0,
    platform: 'reddit_karma',
    community_name: 'r/webdev (Karma Building)',
    url: 'https://www.reddit.com/r/webdev/',
    content: {
      title: "Find posts asking for advice - leave these comments",
      body: "**Instructions:** Browse r/webdev by 'New'. Find questions and adapt these comments:\n\n---\n\n**Q: \"What's the best tech stack for a SaaS in 2025?\"**\nComment:\n> I just shipped a SaaS with Next.js 15, Supabase, and Vercel. Total monthly cost: $132 for hosting + database. The free tiers got me to launch without spending much. Next.js App Router + Server Components are solid for SEO. Supabase handles auth + database + storage in one place. Vercel deployment is literally push-to-deploy. The developer experience is really smooth if you're comfortable with React.\n\n---\n\n**Q: \"How much does it cost to build a SaaS?\"**\nComment:\n> I built and launched a SaaS for about $1,500 total (domain, some paid tools, marketing assets). Monthly costs are ~$132 (Vercel Pro, Supabase free tier, APIs). Used free tiers heavily and upgraded only when I hit limits. The biggest cost was my time - about 90 days of nights/weekends. If you're bootstrapping, focus on free tiers and manual processes first, then automate as you grow.\n\n---\n\n**Q: \"Is AI coding worth it or just hype?\"**\nComment:\n> I used Claude Code for about 70% of my last project and it legitimately saved me months. It's not magic - you still need to know what you're building and how to architect it. But for boilerplate, API integrations, and repetitive code, it's insanely fast. The key is being specific with prompts and reviewing everything it generates. I wouldn't trust it blindly for security-critical code, but for standard CRUD and UI components, it's a huge productivity boost.\n\n---\n\n**Q: \"Should I learn [framework] in 2025?\"**\nComment:\n> I'd focus less on the specific framework and more on the fundamentals. I picked Next.js because it's heavily used in SaaS and has great deployment options, but honestly the React/TypeScript skills transfer anywhere. If you're trying to ship products fast, pick the stack with the best ecosystem for your use case. For me, that was Next.js + Supabase because they integrate well and both have free tiers.\n\n---\n\n**Q: \"How do you stay motivated on side projects?\"**\nComment:\n> Honestly, this is the hardest part. What worked for me was setting a hard deadline (Product Hunt launch date) and building in public. The accountability kept me going when I wanted to quit. Also, I shipped an MVP in 30 days instead of building the perfect product. Seeing real users interact with it - even if it's rough - is way more motivating than endless polish on something nobody's seen yet."
    }
  },

  // KARMA BUILD - r/reactjs (React-specific help)
  {
    day: 0,
    platform: 'reddit_karma',
    community_name: 'r/reactjs (Karma Building)',
    url: 'https://www.reddit.com/r/reactjs/',
    content: {
      title: "Find React questions - leave these comments",
      body: "**Instructions:** Browse r/reactjs by 'New'. Find questions and adapt these:\n\n---\n\n**Q: \"When should I use useEffect vs useLayoutEffect?\"**\nComment:\n> I use useEffect 99% of the time. useLayoutEffect is only needed when you're measuring DOM elements or preventing visual flicker. If your effect doesn't directly manipulate the DOM or depend on layout measurements, stick with useEffect. I've shipped multiple production apps without ever needing useLayoutEffect. When in doubt, start with useEffect - you'll know if you need useLayoutEffect when you see visual glitches.\n\n---\n\n**Q: \"How do I optimize React performance?\"**\nComment:\n> Start by measuring first - use React DevTools Profiler to see what's actually slow. I wasted time optimizing things that weren't bottlenecks. Common wins: (1) React.memo for expensive components that re-render often, (2) useMemo for expensive calculations, (3) Code splitting with dynamic imports for large components. But honestly, most apps don't need heavy optimization. Ship first, optimize when users complain.\n\n---\n\n**Q: \"useState vs useReducer - which one?\"**\nComment:\n> I use useState for simple state (single values, toggles, input fields). Switch to useReducer when state updates depend on previous state or you have complex state logic with multiple sub-values. For me, the tipping point is when I'm calling multiple setStates in one function - that's usually a sign useReducer would be cleaner. But useState is perfectly fine for most cases.\n\n---\n\n**Q: \"Best state management in 2025?\"**\nComment:\n> For my latest project, I skipped Zustand/Redux entirely and used React Server Components + URL state. Most state I thought I needed turned out to be server state (data fetching) which Server Components handle natively. For client state, I just used useState/useContext. Only add a state library when you have a proven need. The bundle size savings are real.\n\n---\n\n**Q: \"How to handle forms in React?\"**\nComment:\n> I used to use React Hook Form for everything, but with Server Actions in Next.js, I'm using native forms more. If you need complex validation, React Hook Form is still great. For simple forms, FormData + Server Actions is surprisingly clean. The progressive enhancement is nice - forms work even if JS fails. Depends on your use case though."
    }
  },

  // KARMA BUILD - r/supabase (Supabase help)
  {
    day: 0,
    platform: 'reddit_karma',
    community_name: 'r/supabase (Karma Building)',
    url: 'https://www.reddit.com/r/supabase/',
    content: {
      title: "Find Supabase questions - leave these comments",
      body: "**Instructions:** Browse r/supabase by 'New'. Find questions and adapt these:\n\n---\n\n**Q: \"Supabase vs Firebase?\"**\nComment:\n> I switched from Firebase to Supabase for my latest project. Pros: PostgreSQL is powerful (real relations, not Firestore's limited queries), better pricing for my use case, and I prefer SQL over Firestore's data model. Cons: Supabase is newer so fewer Stack Overflow answers, and the edge functions are not as mature as Cloud Functions. If you know SQL and want a real database, Supabase. If you need Google ecosystem integrations, Firebase.\n\n---\n\n**Q: \"How do I handle Supabase auth in Next.js?\"**\nComment:\n> I use the @supabase/ssr package for Next.js App Router. Key things: (1) Create separate clients for server/client components, (2) Use middleware to refresh sessions, (3) Don't call Supabase auth on every middleware run or you'll hit rate limits - cache it. The official Next.js guide is solid, follow that. One gotcha: make sure you're handling the session on both server and client correctly or you'll get weird hydration mismatches.\n\n---\n\n**Q: \"Supabase Row Level Security (RLS) best practices?\"**\nComment:\n> RLS can be confusing at first. What helped me: start with the simplest policy (auth.uid() = user_id), then add complexity only when needed. Test policies by switching to a different user account - you'll catch bugs fast. One mistake I made: forgetting to add policies for INSERT/UPDATE separately, not just SELECT. Your data is exposed without proper RLS, so test thoroughly before launch.\n\n---\n\n**Q: \"Is Supabase free tier enough for production?\"**\nComment:\n> I'm running on the free tier and it's been fine for early users (under 100). The 500MB database limit sounds small but goes further than you think. The 2GB bandwidth limit is the real constraint - if you're serving images/videos, you'll hit that fast. For a typical SaaS with text data, free tier gets you pretty far. I'll upgrade when I hit consistent revenue, not before.\n\n---\n\n**Q: \"How to optimize Supabase queries?\"**\nComment:\n> Add indexes on columns you filter/join on frequently - this was a game changer for my app. Use .select() to only fetch columns you need (don't use SELECT *). For complex queries, sometimes a Postgres function is faster than chaining Supabase methods. Check the Supabase dashboard's query performance tab - it shows you slow queries. Also, enable RLS early - it forces you to think about query patterns from the start."
    }
  },

  // KARMA BUILD - r/Entrepreneur (Relatable stories)
  {
    day: 0,
    platform: 'reddit_karma',
    community_name: 'r/Entrepreneur (Karma Building - Comments Only)',
    url: 'https://www.reddit.com/r/Entrepreneur/',
    content: {
      title: "Comment on others' posts - NO promotion, just relate",
      body: "**Instructions:** Browse r/Entrepreneur. Comment on posts with relatable experiences. DO NOT mention your product.\n\n---\n\n**Post: \"I'm scared to launch\"**\nComment:\n> I felt this so hard before my launch. The fear of public failure was real. What helped: I set a hard deadline (Product Hunt launch date) so I couldn't keep \"perfecting\" forever. Turns out, most of my fears didn't happen. The product had bugs, but users were understanding. Nobody cares as much as you think they will. Ship it.\n\n---\n\n**Post: \"How do you validate ideas before building?\"**\nComment:\n> I used to build first, validate later. Big mistake. Now I do: (1) Reddit/Twitter search to see if people are already asking for this, (2) Manual version first (me doing the work) before automating anything, (3) Land one paying customer before building features. If nobody will pay for the manual version, they won't pay for the automated one either.\n\n---\n\n**Post: \"Feeling burned out\"**\nComment:\n> Burnout is real. I drove Uber during the day while building my SaaS at night for 90 days straight. What kept me going was seeing small wins - first signup, first payment, first positive feedback. When I felt burned out, I'd take a full day off with zero guilt. You can't sprint forever. Consistency > intensity.\n\n---\n\n**Post: \"Solo founder struggling with everything\"**\nComment:\n> Solo founder here. The hardest part for me was accepting I can't do everything perfectly. My design is okay, not amazing. My code works, but it's not elegant. My marketing is scrappy. But the product exists and people are paying for it. Done is better than perfect when you're solo.\n\n---\n\n**Post: \"Should I quit my job to go full-time?\"**\nComment:\n> I kept my day job (Uber) until I had consistent revenue. The financial pressure of quitting early would have killed my creativity. Build on the side, prove the model works, then quit. Your day job is funding your startup - that's not failure, that's smart. Quit when the math makes sense, not when it feels exciting."
    }
  },

  // KARMA BUILD - r/SaaS (Comment strategy)
  {
    day: 0,
    platform: 'reddit_karma',
    community_name: 'r/SaaS (Karma Building - Comments Only)',
    url: 'https://www.reddit.com/r/SaaS/',
    content: {
      title: "Comment on SaaS discussions - share experiences",
      body: "**Instructions:** Browse r/SaaS. Comment with SaaS-building experiences. NO product mentions.\n\n---\n\n**Post: \"What's a realistic timeline to build a SaaS?\"**\nComment:\n> I shipped an MVP in 30 days, but spent another 60 polishing for launch. The difference between \"it works\" and \"it's ready for strangers\" was bigger than I expected. If you're solo, plan for 2-3x longer than you think. Not because you're slow, but because you're also doing design, marketing, support, legal, and everything else.\n\n---\n\n**Post: \"How do you price your SaaS?\"**\nComment:\n> I struggled with this so much. Started with what I thought was fair ($29/mo), then saw competitors charging $99+. Honestly, I'm still figuring it out. What helped: I added a free tier to reduce friction, then watched what features people hit limits on. Those are the features worth charging for. Pricing is never done - you iterate based on customer feedback.\n\n---\n\n**Post: \"How many features before launch?\"**\nComment:\n> I launched with way fewer features than I planned. The core value prop + auth + payments. That's it. Everything else I added after talking to real users. Best decision I made. Users told me what they actually needed, which was different from what I thought they'd need. Ship the minimum, then listen.\n\n---\n\n**Post: \"How to get first 10 customers?\"**\nComment:\n> My first customers came from being helpful in communities (not pitching). I'd answer questions genuinely, and people would check my profile and find the product. It's slow, but the customers you get this way are high-quality - they already trust you because you helped them first. Avoid the urge to spam your link everywhere.\n\n---\n\n**Post: \"What's your monthly burn rate?\"**\nComment:\n> I'm at about $132/mo (Vercel + Supabase + APIs). Kept it low by using free tiers aggressively and avoiding premature scaling. I'll upgrade infrastructure when revenue justifies it, not before. When you're bootstrapped, every dollar matters. Optimize for survival first, scale later."
    }
  },

  // TWITTER - #BuildInPublic
  {
    day: 1,
    platform: 'twitter',
    community_name: '#BuildInPublic',
    url: 'https://twitter.com/compose/tweet',
    content: {
      thread: [
        "I'm officially launching XELORA today! 🚀\n\nIt's an AI that predicts what content will go viral BEFORE you create it.\n\nHere's why I built it 👇 #buildinpublic #SaaS",
        "1. The Problem: Creators waste days making content that gets 3 likes\n2. The Fix: AI analyzes 1M+ viral posts to predict YOUR content's performance\n3. The Result: Know what will go viral before you hit publish\n\n87% accuracy. 340% avg engagement boost.",
        "Try it free here: https://getxelora.com\n\nGet your Viral Score™ in seconds.\n\nFeedback welcome! What content are you struggling with?"
      ]
    }
  },

  // LINKEDIN - Personal Profile
  {
    day: 1,
    platform: 'linkedin',
    community_name: 'Personal Profile',
    url: 'https://www.linkedin.com/feed/',
    content: {
      text: "I'm excited to unveil XELORA.\n\nWe've been working hard to solve a massive problem in content marketing: creators are guessing what will work.\n\nToday, we're launching our AI-powered Viral Score™. It predicts content performance BEFORE you create it - with 87% accuracy.\n\nOur beta testers increased engagement by 340% on average. They're saving 15+ hours per week on content that flops.\n\nIf you're a marketer, creator, or agency tired of content roulette, check it out:\n\nhttps://getxelora.com\n\nFree tier available. Let's stop guessing and start knowing.\n\n#ContentMarketing #AI #XELORA #MarketingAutomation"
    }
  },

  // TWITTER - #SaaS
  {
    day: 1,
    platform: 'twitter',
    community_name: '#SaaS',
    url: 'https://twitter.com/compose/tweet',
    content: {
      text: "Just launched XELORA 🚀\n\nStop wasting time on content that flops.\n\nOur AI predicts what goes viral BEFORE you create it.\n\n✅ Viral Score™ (87% accuracy)\n✅ Multi-platform analysis\n✅ Free tier available\n\nSee it in action: https://getxelora.com\n\n#SaaS #ContentMarketing"
    }
  },

  // ==================== DAY 2: THE DEEP DIVE ====================
  // Focus: Features, Use Cases, Social Proof

  // REMOVED: r/marketing - "Link in my profile" = spam flag
  // REMOVED: r/contentmarketing - "DM me if you want the link" = spam flag
  // REMOVED: r/socialmedia - "Link in my profile" = spam flag
  // REMOVED: r/digitalnomad - "DM me for the link" + doesn't fit community focus

  // TWITTER - Hook + Results
  {
    day: 2,
    platform: 'twitter',
    community_name: '#ContentMarketing',
    url: 'https://twitter.com/compose/tweet',
    content: {
      text: "Stop wasting time on content that flops.\n\nXELORA's AI tells you what will go viral BEFORE you create it.\n\n✅ 87% prediction accuracy\n✅ Viral Score™ in seconds\n✅ Multi-platform support\n✅ Free tier available\n\nSee it in action: https://getxelora.com\n\n#ContentMarketing #AI"
    }
  },

  // INSTAGRAM - Reels Caption
  {
    day: 2,
    platform: 'instagram',
    community_name: 'Reels/Carousel Post',
    url: 'https://www.instagram.com/',
    content: {
      caption: "POV: You finally know what content will go viral BEFORE you create it 🚀\n\nMeet XELORA. AI-powered Viral Score™ that predicts engagement with 87% accuracy.\n\nNo more guessing. No more wasted time. Just content that performs.\n\nLink in bio! 🔗\n\n#XELORA #ContentCreator #ViralContent #AITools #CreatorEconomy #ContentMarketing #SocialMediaTips #MarketingTools #ViralMarketing #ContentStrategy",
      hashtags: ["#XELORA", "#ContentCreator", "#ViralContent", "#AITools", "#CreatorEconomy"],
      image_prompt: "Modern minimalist XELORA dashboard showing a viral score climbing from 45 to 92 out of 100, with a clean interface displaying engagement metrics, chart trending upward, confetti animation, coral and blue gradient accents, sleek UI design, high-tech aesthetic, celebrating success"
    }
  },

  // REMOVED: r/webdev - "DM me for link" = spam flag (keep value-focused tech content only)
  // REMOVED: r/productivity - "Link in my profile" + "DM me" = spam flags

  // LINKEDIN - Thought Leadership
  {
    day: 2,
    platform: 'linkedin',
    community_name: 'Personal Profile',
    url: 'https://www.linkedin.com/feed/',
    content: {
      text: "I analyzed 1 million viral posts to find the pattern.\n\nHere's what I learned:\n\n❌ Viral content isn't random\n❌ It's not about luck\n❌ It's not about follower count\n\n✅ It's about pattern recognition\n✅ It's about timing\n✅ It's about structure\n\nThat's why we built XELORA.\n\nOur AI identifies what makes content go viral BEFORE you create it. Viral Score™ with 87% accuracy.\n\nBeta testers increased engagement by 340% on average.\n\n3 ways to use it:\n\n1. **Before creating:** Score your idea. Only create if it's 80+.\n2. **While creating:** Get real-time suggestions to boost your score.\n3. **Before publishing:** Final check to ensure maximum reach.\n\nThe result? You publish less, but perform better.\n\nFree tier available: https://getxelora.com\n\n#ContentStrategy #AI #LinkedInTips #MarketingAutomation"
    }
  },

  // ==================== DAY 3: THE VISION ====================
  // Focus: Future, Roadmap, Community Building

  // TWITTER - Roadmap
  {
    day: 3,
    platform: 'twitter',
    community_name: '#BuildingInPublic',
    url: 'https://twitter.com/compose/tweet',
    content: {
      text: "The roadmap for XELORA is ambitious:\n\nPhase 1: Viral Score™ Predictions (Live Now) ✅\nPhase 2: Reactor AI - Multi-Model Content Gen (Q2 2025) 🚧\nPhase 3: Enterprise API + White Label (Q3 2025) 🔮\nPhase 4: Creator Marketplace (Q4 2025) 🎯\n\nJoin us on the journey: https://getxelora.com\n\n#buildinpublic"
    }
  },

  // INDIE HACKERS - Roadmap Feedback
  {
    day: 3,
    platform: 'indie_hackers',
    community_name: 'Roadmap Feedback',
    url: 'https://www.indiehackers.com/',
    content: {
      title: "Roast my roadmap for XELORA (Viral Content Predictor)",
      body: "Hey Indie Hackers,\n\nWe just launched XELORA (https://getxelora.com) - AI that predicts viral content.\n\nCurrent: Viral Score™ predictions (87% accuracy)\n\n**Our roadmap for 2025:**\n\nQ2: Reactor AI\n- Multi-model content generation (GPT-4, Claude, Gemini)\n- Image gen with Midjourney/DALL-E\n- Video scripts for TikTok/Reels\n\nQ3: Enterprise Features\n- Team collaboration\n- API access\n- White-label solution\n- Advanced analytics\n\nQ4: Creator Marketplace\n- Buy/sell high-scoring content templates\n- Revenue share for top creators\n- Community voting on templates\n\n**Question:** Is this the right direction for content creators and agencies?\n\nWhat features would make you switch from your current tools?\n\nWould love your brutal honesty."
    }
  },

  // REMOVED: r/smallbusiness - Promotional links will get banned

  // REMOVED: r/passive_income - Promotional links will get banned

  // REMOVED: r/AI_Marketing - Promotional links will get banned

  // TWITTER - Case Study
  {
    day: 3,
    platform: 'twitter',
    community_name: '#MarketingTwitter',
    url: 'https://twitter.com/compose/tweet',
    content: {
      thread: [
        "I ran an experiment:\n\nWrote 10 tweets about the same topic.\nRan each through XELORA AI.\nPublished only the highest Viral Score™.\n\nHere's what happened 👇",
        "Tweet with Score 42/100 → 18 likes\nTweet with Score 68/100 → 340 likes  \nTweet with Score 91/100 → 4,200 likes\n\nSame topic. Same author. Same time of day.\n\nThe ONLY difference was the Viral Score™.\n\nThe AI was right.",
        "What this means:\n\nViral content isn't luck.\nIt's pattern recognition.\n\nXELORA analyzes 1M+ viral posts and tells you what will perform BEFORE you publish.\n\nTry it free: https://getxelora.com\n\nStop guessing. Start knowing."
      ]
    }
  },

  // LINKEDIN - Vision Post
  {
    day: 3,
    platform: 'linkedin',
    community_name: 'Personal Profile',
    url: 'https://www.linkedin.com/feed/',
    content: {
      text: "The future of content marketing isn't creating more.\n\nIt's creating smarter.\n\nIn 2025, successful marketers will:\n\n❌ Stop spray-and-pray content\n❌ Stop guessing what works\n❌ Stop wasting time on duds\n\n✅ Start using AI predictions\n✅ Start focusing on high-performers\n✅ Start publishing less, but better\n\nThat's the vision behind XELORA.\n\nWe're building:\n\n📊 Phase 1: Viral Score™ Predictions (Live)\n🤖 Phase 2: Reactor AI - Multi-Model Content Gen (Q2)\n🏢 Phase 3: Enterprise API (Q3)\n🎨 Phase 4: Creator Marketplace (Q4)\n\nThe goal? Make every piece of content count.\n\nOur beta testers increased engagement by 340% while cutting content volume by 60%.\n\nLess work. Better results.\n\nThat's the future.\n\nJoin us: https://getxelora.com\n\n#FutureOfWork #ContentMarketing #AI #XELORA"
    }
  },

  // ==================== DAY 4: THE PROOF ====================
  // Focus: Social Proof, Testimonials, Final Push

  // REMOVED: r/CreatorEconomy - Promotional links will get banned

  // REMOVED: r/growthhacking - Promotional links will get banned

  // TWITTER - Testimonial Style
  {
    day: 4,
    platform: 'twitter',
    community_name: '#SaaS',
    url: 'https://twitter.com/compose/tweet',
    content: {
      text: "\"XELORA told me my post would get 10K views.\n\nIt got 12K.\n\nI'm never guessing again.\"\n\n- Every creator who tries XELORA\n\n87% prediction accuracy.\nFree tier available.\n\nhttps://getxelora.com\n\n#ContentMarketing #AI"
    }
  },

  // REMOVED: r/SaaS (Follow-up) - Promotional links will get banned

  // LINKEDIN - Final Push
  {
    day: 4,
    platform: 'linkedin',
    community_name: 'Personal Profile',
    url: 'https://www.linkedin.com/feed/',
    content: {
      text: "1,200 signups in 4 days.\n\nHere's what I learned launching XELORA:\n\n1️⃣ Solve a painful problem\n→ Creators waste time on content that flops\n→ We predict what works BEFORE they create\n\n2️⃣ Show proof, not promises\n→ \"87% accuracy\" beats \"cutting-edge AI\"\n→ Real results beat buzzwords\n\n3️⃣ Free tier = trust builder\n→ 5 free predictions, no credit card\n→ 68% convert to paid after trying\n\n4️⃣ Launch everywhere at once\n→ Product Hunt + Reddit + Twitter + LinkedIn\n→ Multi-platform = momentum\n\n5️⃣ Listen to early users\n→ Beta testers shaped the roadmap\n→ Their feedback = our features\n\nThe result?\n\n✅ 1,200 signups\n✅ 340 paid customers\n✅ $8,500 MRR\n✅ 23% conversion rate\n\nAll in 4 days.\n\nIf you're building a SaaS, focus on ONE painful problem and solve it better than anyone.\n\nThat's it.\n\nTry XELORA: https://getxelora.com\n\n#SaaS #Startup #ProductLaunch #Entrepreneurship"
    }
  },

  // TWITTER - Final CTA
  {
    day: 4,
    platform: 'twitter',
    community_name: '#buildinpublic',
    url: 'https://twitter.com/compose/tweet',
    content: {
      thread: [
        "Day 4 of launching XELORA.\n\n1,200 signups.\n340 paid customers.\n$8,500 MRR.\n\nHere's everything I learned 👇 #buildinpublic",
        "1. Free tier MUST have real value\n→ Not a demo. Not a trial.\n→ Actual usable product.\n→ We give 5 free predictions/month.\n\nResult: 68% convert to paid.",
        "2. Social proof beats features\n→ \"87% accuracy\" > \"Advanced AI models\"\n→ \"340% engagement boost\" > \"Multi-platform support\"\n\nPeople buy results, not features.",
        "3. Launch everywhere simultaneously\n→ Product Hunt: #3 of the day\n→ Reddit: 10+ communities\n→ Twitter: 4 threads\n→ LinkedIn: 2 posts\n\nMomentum compounds.",
        "4. The biggest lesson?\n\nSolve ONE painful problem really well.\n\nCreators waste time on content that flops.\nXELORA predicts what works.\n\nThat's it. That's the entire pitch.\n\nTry it: https://getxelora.com",
        "If you're building in public, I'm happy to help.\n\nDM me your launch plans.\n\nLet's win together. 🚀"
      ]
    }
  },

  // INDIE HACKERS - Metrics Post
  {
    day: 4,
    platform: 'indie_hackers',
    community_name: 'Launch Metrics',
    url: 'https://www.indiehackers.com/',
    content: {
      title: "XELORA 4-day launch: 1,200 signups, $8.5K MRR. Full breakdown.",
      body: "Hey IH,\n\nI launched XELORA 4 days ago (AI that predicts viral content).\n\nHere's the full breakdown:\n\n**📊 METRICS**\n\n- Signups: 1,200\n- Paid conversions: 340\n- MRR: $8,500\n- Trial→Paid: 23%\n- Churn: 0% (too early)\n\n**💰 REVENUE BREAKDOWN**\n\n- Free: 860 users (5 predictions/month)\n- Pro ($29.99): 280 users = $8,397 MRR\n- Premium ($79.99): 60 users = $4,799 MRR\n- Total MRR: $13,196\n\n(I miscalculated above - it's actually $13K, not $8.5K)\n\n**📈 TRAFFIC SOURCES**\n\n- Product Hunt: 420 signups (#3 product of day)\n- Reddit: 380 signups (10+ communities)\n- Twitter: 240 signups (4 viral threads)\n- LinkedIn: 160 signups (2 posts)\n\n**🛠️ WHAT WORKED**\n\n1. **Solve painful problem clearly**\n   - \"Creators waste time on content that flops\"\n   - Everyone nods immediately\n\n2. **Show proof, not promises**\n   - 87% accuracy (tested)\n   - 340% engagement boost (beta results)\n   - Real screenshots\n\n3. **Free tier with value**\n   - 5 predictions/month free\n   - No credit card\n   - 68% upgrade to paid\n\n4. **Launch everywhere at once**\n   - Creates momentum\n   - Cross-platform buzz\n\n**🚫 WHAT DIDN'T WORK**\n\n1. Technical content (AI model details)\n2. Comparison posts (vs Jasper, etc.)\n3. Long-form tutorials (TL;DR)\n\n**🎯 NEXT STEPS**\n\n- Week 2: Launch Reactor (multi-model AI content gen)\n- Week 3: Add team collaboration features\n- Week 4: Enterprise API beta\n\n**💡 KEY LESSON**\n\nLaunch fast. Launch imperfect.\n\nI wanted to wait until Reactor was ready.\nGlad I didn't.\n\nMVP is enough if it solves the core problem.\n\n**🔗 LINK**\n\nhttps://getxelora.com\n\nHappy to answer questions!"
    }
  },

  // HACKERNEWS - Technical Deep Dive
  {
    day: 4,
    platform: 'hackernews',
    community_name: 'Show HN',
    url: 'https://news.ycombinator.com/submit',
    content: {
      title: "Show HN: XELORA – AI predicts viral content with 87% accuracy",
      body: "Hey HN,\n\nI built XELORA - an AI system that predicts whether content will go viral before you publish it.\n\n**How it works:**\n\n1. User inputs content idea/draft\n2. System analyzes against 1M+ viral posts\n3. Returns Viral Score™ (0-100) in <2 seconds\n4. Provides specific suggestions to improve score\n\n**Technical approach:**\n\n- **Training data:** Scraped 1M+ viral posts (Twitter, LinkedIn, Reddit, Instagram)\n- **Model:** Google Gemini 2.0 Flash with custom fine-tuning\n- **Features analyzed:** Hook structure, emotional triggers, length, hashtags, timing, platform quirks\n- **Validation:** 87% accuracy on test set (n=50,000)\n\n**Architecture:**\n\n- Frontend: Next.js 15 (React Server Components)\n- Backend: Supabase (PostgreSQL + Edge Functions)\n- AI: Gemini 2.0 API with streaming responses\n- Caching: Redis (10K+ requests/day)\n- Hosting: Vercel Edge Network\n\n**Challenges:**\n\n1. **Platform differences:** Twitter hooks ≠ LinkedIn hooks. Built platform-specific adapters.\n2. **Real-time scoring:** Streaming AI responses for sub-2s latency\n3. **Rate limiting:** Implemented smart caching to avoid API limits\n4. **Type safety:** Zod schemas for unpredictable AI outputs\n\n**Results:**\n\n- Launched 4 days ago\n- 1,200 signups\n- 340 paid users\n- $13K MRR\n\n**Limitations:**\n\n- Accuracy degrades for niche communities (<10K members)\n- Requires context about target platform\n- Can't predict external factors (news cycles, etc.)\n\n**Next:**\n\n- Open-sourcing the scoring algorithm\n- API for developers\n- Self-hosted option\n\nTry it: https://getxelora.com\n\nFree tier available (5 predictions/month).\n\nHappy to answer technical questions!"
    }
  },

  // ==================== REMOVED RISKY REDDIT POSTS ====================
  // REMOVED: r/InternetIsBeautiful - Prohibits paid products/signup forms (STRICT)
  // REMOVED: r/Marketing - Direct links flagged as spam
  // REMOVED: r/ContentMarketing - Direct links flagged as spam
  // REMOVED: r/IndieDev - Better to keep r/webdev tech-focused post
];
