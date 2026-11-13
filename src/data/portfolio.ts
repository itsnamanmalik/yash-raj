/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO DATA: edit this file to update the whole website.
 * ─────────────────────────────────────────────────────────────
 *
 *  • Channels are sorted automatically by `subscribers` (high → low).
 *  • Videos are sorted automatically by `views` (high → low).
 *    The top video becomes the featured video at the top of the Work section.
 *  • Thumbnails are generated from the YouTube URL, so you only need to paste the link.
 *  • To add a video: copy one of the objects in `videos`, paste the new URL,
 *    then update the title, channel, views and date.
 *  • Subscriber and view counts below were taken from YouTube on the date in `stats.statsUpdatedOn`.
 */
import type { PortfolioData } from '../types'

export const portfolio: PortfolioData = {
  profile: {
    name: 'Yash Raj',
    role: 'Video Editor',
    tagline: 'Podcasts, promos and short-form edits that keep audiences watching.',
    yearsOfExperience: '3+',
    summary:
      'Creative and detail-oriented Video Editor with 3+ years of professional experience editing podcasts, commercials, short-form content and digital campaigns. Experienced in working on both Hindi and Chinese shows for Kuku TV, delivering high-quality, engaging video content that aligns with brand and storytelling objectives. Proficient in industry-standard editing software, with strong expertise in AI-powered video editing tools to streamline workflows and enhance visual quality. Passionate about creating compelling content with a strong understanding of pacing, audience engagement and modern content trends.',
    location: 'India',
    email: 'rajyash72206@gmail.com',
    phone: '+91 9557865646',
    socials: [
      // { label: 'Instagram', url: 'https://instagram.com/your-handle' },
      // { label: 'LinkedIn', url: 'https://linkedin.com/in/your-handle' },
    ],
  },

  stats: {
    statsUpdatedOn: '2026-11-13',
  },

  skills: [
    'Video Editing',
    'Motion Graphics',
    'Visual Storytelling',
    'Color Correction & Grading',
    'Audio Editing',
    'Content Creation',
    'AI-Powered Editing Workflows',
    'Time Management',
    'Creative Problem Solving',
    'Project Coordination',
    'Team Collaboration',
  ],

  experience: [
    {
      role: 'Promo Video Editor',
      company: 'Kuku TV (Mebigo Labs Pvt. Ltd.)',
      period: 'Present',
      current: true,
      highlights: [
        'Edited promotional videos, social media content and marketing campaigns.',
        'Added motion graphics, transitions and visual effects to enhance storytelling.',
        'Collaborated with creative teams to ensure brand consistency and project quality.',
        'Managed multiple projects while meeting deadlines and client requirements.',
      ],
    },
    {
      role: 'Senior Podcast Editor',
      company: 'Artificilux VN Pvt. Ltd.',
      period: 'Sep 2024 – May 2026',
      highlights: [
        'Converted full raw files into high-definition podcasts with complete editing, using AI and dedicated software.',
        'Edited short-form content for social media platforms.',
        'Organized footage, audio files and project assets.',
        'Supported senior editors in delivering high-quality visual content.',
      ],
    },
    {
      role: 'Video Editor',
      company: 'Codven Solutions Pvt. Ltd.',
      period: '2023 – 2024',
      highlights: ['Handled clients for video editing to ensure timely delivery, and edited reels.'],
    },
  ],

  projects: [
    {
      title: 'Promos for Kuku TV Shows (Chinese & Hindi)',
      description:
        'Produced and edited a series of short-form promotional videos designed to increase audience engagement across digital platforms.',
    },
    {
      title: 'Podcast Editing for Renowned Clients',
      description:
        'Created a professional company profile video highlighting business services, achievements and brand values.',
    },
    {
      title: 'Event / Content Highlight Reel',
      description:
        'Edited event footage into a dynamic highlights video that captured key moments and audience experiences.',
    },
  ],

  education: [
    { degree: 'Bachelor of Arts', institution: 'DAVV University, Indore' },
    { degree: 'PGDCA', institution: 'Makhan Lal University, Bhopal' },
  ],

  certifications: [
    'Reliance Education: Video Editing Fundamentals',
    'Motion Graphics Essentials',
    'Digital Content Creation',
  ],

  // ── YouTube channels worked on (auto-sorted by subscribers) ──
  channels: [
    {
      name: 'X.Talkss',
      url: 'https://www.youtube.com/@Xtalkss',
      handle: '@Xtalkss',
      channelId: 'UCqlxr0CDFjDQGIYYktg7ncQ',
      subscribers: 131000,
      videoCount: 834,
      avatar:
        'https://yt3.googleusercontent.com/W1JCrPqaY4_7kPDxkTUoRKohBhnyp4QwYBiN1q1_0uPf_BGGS5O84QeicZU1YbW2c6_Y7UPI7A=s240-c-k-c0x00ffffff-no-rj',
      description: 'A spiritual podcast exploring consciousness, ancient wisdom and mystical experiences.',
    },
    {
      name: 'Shreya Talk Show',
      url: 'https://www.youtube.com/@Shreyatalkshow',
      handle: '@Shreyatalkshow',
      channelId: 'UCTXDQsEoPr8TnuCkTkvZQdw',
      subscribers: 58600,
      videoCount: 645,
      avatar:
        'https://yt3.googleusercontent.com/iose2TdbR2wzVUnexQ4ezfL3o_FdbMGZ5hh085W465CxrdyV_0K-KjG1R1BSRbHTp4qllHt8Hg=s240-c-k-c0x00ffffff-no-rj',
      description: 'Knowledge, inspiration and meaningful conversations, from Gwalior, Madhya Pradesh.',
    },
    {
      name: 'Podcast Bavaa',
      url: 'https://www.youtube.com/@PodcastBavaa',
      handle: '@PodcastBavaa',
      channelId: 'UCtvQgu3l7oAGamW9Ix5bFwA',
      subscribers: 46900,
      videoCount: 461,
      avatar:
        'https://yt3.googleusercontent.com/S0zULY7vCNDlGsyNlFjOg5JLHk71lWDP8ToQVGWG3J4NmYknBrWGEZ8YrhoiQBOjGzzPEfLzxg=s240-c-k-c0x00ffffff-no-rj',
      description: 'Spirituality, mysticism and powerful conversations with saints, sadhaks and astrologers.',
    },
    {
      name: 'Adhyay Podcast',
      url: 'https://www.youtube.com/@adhyaypodcast',
      handle: '@adhyaypodcast',
      channelId: 'UC8WsEymaMaQiWQ1TMSVduyQ',
      subscribers: 6090,
      videoCount: 246,
      avatar:
        'https://yt3.googleusercontent.com/aGIDUxHiHwtQNkyQ9Ke1I334aU_0J6K8WBLStjGK8kbHbFkcjauvFeveO1O_9jgqhHPyiwYxxwU=s240-c-k-c0x00ffffff-no-rj',
      description: 'Business leaders, icons, experts and thinkers opening their most powerful chapters.',
    },
    {
      name: 'Chakke Pe Charcha',
      url: 'https://www.youtube.com/@chakkepecharcha',
      handle: '@chakkepecharcha',
      channelId: 'UC1jMrd-Jnan3B4o7zgIlTLw',
      subscribers: 10900,
      videoCount: 22,
      avatar:
        'https://yt3.googleusercontent.com/gO3j6k4JRYpiQ5VL9XO-REDOxWw35xzMHkbuOnGQbfAuiGsxYmmy6AdxO0l6UV6Xxx2WJHOXhA=s240-c-k-c0x00ffffff-no-rj',
      description: 'A podcast on wheels: conversations taken out of the studio and onto the road.',
    },
    {
      name: 'The Dark Verse',
      url: 'https://www.youtube.com/@Thedarkverse1',
      handle: '@Thedarkverse1',
      channelId: 'UCgMdOK3aUd0FtZqR8PIQiFQ',
      subscribers: 98600,
      videoCount: 839,
      avatar:
        'https://yt3.googleusercontent.com/K_26bJUz50yAdp-shmtL7xIyrh20sqgLoiZJ8E5nPPhNi50oNfIIDLhraBtBfa1WRzQKLNzv2A=s240-c-k-c0x00ffffff-no-rj',
      description: 'Deep-dive conversations on tantra, the occult and traditional spiritual practices.',
    },
    {
      name: 'The Inner Podcast',
      url: 'https://www.youtube.com/channel/UC2npK0BCPK5C444701hJsyg',
      handle: '@Innerpodcastshow',
      channelId: 'UC2npK0BCPK5C444701hJsyg',
      subscribers: 18300,
      videoCount: 206,
      avatar:
        'https://yt3.googleusercontent.com/roR3P3B2DGGY1F5xSYUkPTHOUQ02-9V9M7oNec-k8w5UlIPqvSucgvC0-1LmbdNKL3KZqPhmHA=s240-c-k-c0x00ffffff-no-rj',
      description: 'Long-form conversations on life, mind and the inner journey.',
    },
  ],

  // ── Edited videos (auto-sorted by views) ──
  videos: [
    {
      url: 'https://youtu.be/UbRgke2XJ3w',
      title: 'Naga Sadhu in Maha Kumbh | Naga Baba on Muslims | Sanatan Dharm, Hindu Rashtra, Bageshwar Dham & more',
      channel: 'Podcast Bavaa',
      views: 1373309,
      publishedAt: '2024-12-11',
    },
    {
      url: 'https://youtu.be/78CGNPRmXvs',
      title: 'इत्र जो लगा लिया तो मिलेगा पैसा, प्यार और पावर #astrology #trishlachaturvedi',
      channel: 'Tarun Sharma Show',
      views: 88718,
      publishedAt: '2026-08-27',
    },
    {
      url: 'https://www.youtube.com/watch?v=9ROvzEdlZOY',
      title: 'मृत्यु के बाद क्या होता है? | After Death Soul Journey, Garud Puran & Yam Lok Explained',
      channel: 'Adhyay Podcast',
      views: 34268,
      publishedAt: '2026-01-24',
    },
    {
      url: 'https://youtu.be/_mTve9P0FOg',
      title: 'जब तक Salman ने Tweet नहीं किया, पूरा Bollywood चुप रहा | Pooja Ruparel EXCLUSIVE',
      channel: 'Yugcharan',
      views: 4826,
      publishedAt: '2026-09-04',
    },
    {
      url: 'https://www.youtube.com/watch?v=8VXtwwzvxqE',
      title: 'Waste Management Business in India: कमाई, लाइसेंस और पूरा Business Model',
      channel: 'Adhyay Podcast',
      views: 1478,
      publishedAt: '2026-05-20',
    },
    {
      url: 'https://youtu.be/JGBO8oViAcw',
      title: 'From Mohabbatein to OTT: Preeti Jhangiani on Bollywood, SRK, Amitabh & Industry Truth 🔥',
      channel: 'Yugcharan',
      views: 1157,
      publishedAt: '2026-05-01',
    },
    {
      url: 'https://youtu.be/HPEIISwZRGA',
      title: 'Star Kid Pressure, Fame, Nepotism & Rejection: Mithun Chakraborty’s Son Exposed Bollywood Secrets 🔥',
      channel: 'Yugcharan',
      views: 10406,
      publishedAt: '2026-03-06',
    },
    {
      url: 'https://youtu.be/SzExXguMrSM',
      title: 'UPSC/SSC 2026 Complete Blueprint 🔥 | What to Study, How to Study & What NOT to Do | UPSC Podcast',
      channel: 'Yugcharan',
      views: 3195,
      publishedAt: '2025-11-15',
    },
    {
      url: 'https://youtu.be/ITjCgBpL_g0',
      title: 'मूलाधार चक्र कैसे Activate करें? Root Chakra Healing, Stability और Energy Balance समझें | आसान तरीका',
      channel: 'Adhyay Podcast',
      views: 15309,
      publishedAt: '2026-02-21',
    },
    {
      url: 'https://youtu.be/rSfS6G8JrZs',
      title: '90-Day Weight Loss Formula: पराठा-पिज्जा खाकर भी घटेगा वजन? जानें डाइट, कार्ब्स और फिटनेस का सच 🔥',
      channel: 'Adhyay Podcast',
      views: 3078,
      publishedAt: '2026-06-04',
    },
    {
      url: 'https://youtu.be/UfnU4hnAXMo',
      title: 'जलती चिता, अघोरी और तंत्र साधना: रात के श्मशान का खौफनाक सच! 🔥 | Tantrik Ramgopal Ji',
      channel: 'Mukul Dagar',
      views: 946,
      publishedAt: '2026-04-18',
    },
    {
      url: 'https://youtu.be/JZv0MVBE2Eg',
      title: 'Powerful Vashikaran Remedies for Love, Marriage & Success | Tantra Podcast ft. Astro Gulshan Kumar',
      channel: 'Podcast Bavaa',
      views: 48108,
      publishedAt: '2026-08-07',
    },
    {
      url: 'https://youtu.be/7am7kjb0kzs',
      title: "Bhagirath Bhatt: The Man Behind Bollywood & Hollywood's Most Iconic Sitar Tunes",
      channel: 'Podcast Bavaa',
      views: 612,
      publishedAt: '2025-12-11',
    },
    {
      url: 'https://youtu.be/2JYZv1rzcR0',
      title: 'Sawan, Kawar Yatra aur Shiv ke Rahasya | Shubham Shastri ji ke saath Adhyatmik Baatein | Ep. 31',
      channel: 'Podcast Bavaa',
      views: 29061,
      publishedAt: '2025-07-04',
    },
    {
      url: 'https://youtu.be/LvLmcR6gpt0',
      title: 'Rajiv Gandhi Assassination केस खोलने वाले IPS Officer आमोद कंठ ने कैसे कैमरे के रील से खोले राज़?',
      channel: 'Chakke Pe Charcha',
      views: 10100,
      publishedAt: '2026-03-01',
    },
    {
      url: 'https://youtu.be/8wnHDbKlGVo',
      title: 'Internet Band Ho Jayega? Kya Sach Me Hone Wala Hai MahaVinash? Bhavishya Malika ki Future Prediction',
      channel: 'Podcast Bavaa',
      views: 94878,
      publishedAt: '2025-06-20',
    },
  ],
}
