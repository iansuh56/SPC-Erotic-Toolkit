import type { NavLink } from "./types";

/**
 * Single source of truth for global site config: nav, footer, utility bar,
 * quick exit, and home page section copy. The group edits every string here
 * — see CONTENT_GUIDE.md. Everything below is a placeholder.
 */

export const siteConfig = {
  siteName: "[Site name]",

  meta: {
    defaultTitle: "[Site name]",
    titleTemplate: "%s · [Site name]",
    description: "[Site description for search engines and browser tabs]",
  },

  quickExit: {
    /** Destination used by both the Quick Exit button and the double-Escape shortcut. */
    url: "https://www.google.com",
    buttonLabel: "Quick exit",
  },

  utilityBar: {
    message: "[Utility message: audience / age guidance]",
    forAdultsLabel: "[For parents & educators]",
    forAdultsHref: "/for-adults",
    utilityLink: {
      label: "[Utility link]",
      href: "/resources",
    } satisfies NavLink,
  },

  nav: {
    links: [
      { label: "[Nav: Home]", href: "/" },
      { label: "[Nav: Topics]", href: "/topics" },
      { label: "[Nav: Activities]", href: "/activities" },
      { label: "[Nav: For adults]", href: "/for-adults" },
      { label: "[Nav: Resources]", href: "/resources" },
      { label: "[Nav: About]", href: "/about" },
    ] satisfies NavLink[],
    primaryAction: {
      label: "[Primary action]",
      href: "/activities",
    } satisfies NavLink,
  },

  footer: {
    description: {
      lines: 2,
    },
    columns: [
      {
        heading: "[COLUMN]",
        links: [
          { label: "[Footer link]", href: "/topics" },
          { label: "[Footer link]", href: "/activities" },
          { label: "[Footer link]", href: "/about" },
        ] satisfies NavLink[],
      },
      {
        heading: "[COLUMN]",
        links: [
          { label: "[Footer link]", href: "/resources" },
          { label: "[Footer link]", href: "/for-adults" },
          { label: "[Footer link]", href: "/resources" },
        ] satisfies NavLink[],
      },
    ],
    bottomRow: {
      courseLine: "[COURSE · INSTITUTION · TERM]",
      credits: "[CREDITS]",
      backToTopLabel: "[BACK TO TOP]",
    },
  },

  home: {
    hero: {
      tag: "[PROGRAM / AUDIENCE LABEL]",
      heading: "[Your heading here]",
      body: { lines: 3 },
      primaryAction: { label: "[Primary action]", href: "/activities" } satisfies NavLink,
      secondaryAction: { label: "[Secondary action]", href: "/topics" } satisfies NavLink,
      figureTag: "[PHOTO OR ILLUSTRATION]",
      caption: "[Image caption / credit]",
    },

    mission: {
      index: "01",
      label: "[MISSION LABEL]",
      statement: "[Mission or purpose statement, written by the group]",
      link: { label: "[Learn about the project]", href: "/about" } satisfies NavLink,
    },

    topicsSection: {
      index: "02",
      label: "[SECTION LABEL]",
      heading: "[Section title]",
      viewAllLink: { label: "[View all topics]", href: "/topics" } satisfies NavLink,
    },

    interactive: {
      index: "03",
      label: "[INTERACTIVE TOOLS LABEL]",
      heading: "[Activity section title]",
      body: { lines: 3 },
      action: { label: "[Try the activity]", href: "/activities" } satisfies NavLink,
      previewOptions: ["[Option A]", "[Option B]", "[Option C]"],
    },

    pathways: {
      index: "04",
      label: "[PATHWAYS LABEL]",
      goLabel: "[Go]",
      learners: {
        audience: "[AUDIENCE]",
        title: "[Pathway title, e.g. for young learners]",
        href: "/topics",
      },
      adults: {
        audience: "[AUDIENCE]",
        title: "[Pathway title, e.g. for parents & educators]",
        href: "/for-adults",
      },
    },

    trustStrip: [
      { label: "[Sources & methodology]", href: "/resources" },
      { label: "[Content note / age guidance]", href: "/resources" },
      { label: "[Get support / trusted adult resources]", href: "/resources" },
    ],
  },

  pages: {
    forAdults: {
      title: "[For parents & educators]",
      intro: { lines: 3 },
      sections: [
        { heading: "[Section heading]", body: { lines: 4 } },
        { heading: "[Section heading]", body: { lines: 4 } },
      ],
    },
    resources: {
      title: "[Resources]",
      sections: [
        { heading: "[Sources & methodology]", body: { lines: 3 } },
        { heading: "[Content note / age guidance]", body: { lines: 3 } },
        { heading: "[Get support / trusted adult resources]", body: { lines: 3 } },
      ],
    },
    about: {
      title: "[About the project]",
      intro: { lines: 3 },
      sections: [
        { heading: "[Section heading]", body: { lines: 4 } },
        { heading: "[Credits]", body: { lines: 2 } },
      ],
    },
    activityTemplate: {
      instructionsHeading: "[Instructions]",
      completionHeading: "[Completion message]",
      completionBody: { lines: 2 },
      backToActivitiesLabel: "[Back to activities]",
    },
    topicTemplate: {
      tocHeading: "[On this page]",
      activityHeading: "[Try it]",
      previousLabel: "[Previous topic]",
      nextLabel: "[Next topic]",
    },
    notFound: {
      title: "[Page not found]",
      message: "[Page not found message]",
      backHomeLabel: "[Back to home]",
    },
  },
};

export type SiteConfig = typeof siteConfig;
