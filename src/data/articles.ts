export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  content: {
    heading: string;
    points: readonly string[];
    closing?: string;
  };
};

const mockArticles = [
  {
    slug: 'a-grid-for-everyday-projects',
    title: 'A Grid for Everyday Projects',
    excerpt: 'A simple grid gives notes, images, and captions room to breathe. Start with a few shared spacing and alignment rules, then see how they hold up across different page sizes.',
    publishedAt: '2026-03-12',
    content: {
      heading: 'Start with a few shared rules',
      points: [
        'Choose a base unit for margins and gaps so related elements feel connected.',
        'Test the grid with a long headline, a short caption, and an image that needs extra room.',
        'Check the layout at a narrow width and let the columns stack where reading becomes difficult.',
      ],
      closing: 'Keep the rules that help people scan the page. Adjust the rest as the work changes.',
    },
  },
  {
    slug: 'building-a-small-color-palette',
    title: 'Building a Small Color Palette',
    excerpt: 'A compact palette starts with a neutral base and an accent with a clear purpose. Try the colors in a layout with real headings, links, and controls.',
    publishedAt: '2026-03-10',
    content: {
      heading: 'Give each color a job',
      points: [
        'Start with background and text colors that remain legible in different lighting conditions.',
        'Use an accent for links or active states, and test neighboring colors in context.',
      ],
    },
  },
  {
    slug: 'a-field-guide-to-paper-prototypes',
    title: 'A Field Guide to Paper Prototypes',
    excerpt: 'A handful of paper sketches can make a new interface easier to discuss. Turn each step into a separate sheet and invite someone to try it.',
    publishedAt: '2026-03-08',
    content: {
      heading: 'Build a sequence of screens',
      points: [
        'Sketch one task at a time and lay out the screens in the order they appear.',
        'Ask someone to try the task and note where they pause, look around, or choose an unexpected path.',
        'Revise the unclear screen and run the task again.',
      ],
    },
  },
  {
    slug: 'making-room-for-better-feedback',
    title: 'Making Room for Better Feedback',
    excerpt: 'A focused review gives people a clear idea of what to look at. Share the work in context and ask a few questions about how it reads.',
    publishedAt: '2026-03-06',
    content: {
      heading: 'Frame the review',
      points: [
        'Introduce the audience and the task before showing the design.',
        'Ask reviewers to identify the first thing they notice and where they would click next.',
        'Record comments as observations that the team can check in the next version.',
      ],
    },
  },
] satisfies Article[];

export async function listArticles(): Promise<readonly Article[]> {
  return mockArticles;
}

export function articlePath(slug: string): string {
  return `/articles/${encodeURIComponent(slug)}/`;
}
