import heroImage from '../assets/projects/pages-and-places/hero.jpg'
import planningImage from '../assets/projects/pages-and-places/section-planning.jpg'
import implementationImage from '../assets/projects/pages-and-places/implementation.jpg'

const pagesAndPlace = {
  slug: 'pages-and-place',
  title: 'Pages & Place Travel Guide',

  hero: {
    eyebrow: 'Featured Case Study',
    title: 'Pages & Place',
    description:
      '여행 정보와 장소 탐색을 감성적인 비주얼과 구조화된 흐름으로 연결한 트래블 가이드 웹사이트',
    image: heroImage,
  },

  overview: {
    description:
      '여행지 소개, 장소 정보, 분위기 탐색을 하나의 흐름 안에서 경험할 수 있도록 구성한 여행 정보 웹사이트다. 단순한 관광 정보 나열이 아니라, 사용자가 장소의 분위기를 먼저 느끼고 세부 정보를 자연스럽게 탐색하도록 설계했다.',
    techStack: ['React', 'React Router', 'SCSS', 'Vercel'],
    role: ['기획', 'UI/UX 설계', '프론트엔드 구현'],
  },

  problem: {
    title: 'Planning',
    description:
      '기존 여행 정보 사이트들은 정보량은 많지만 시각적 흐름이 약해 장소의 분위기를 충분히 전달하지 못하는 경우가 많았다. 이 프로젝트는 여행지를 단순히 검색하는 경험이 아니라, 사용자가 이미지와 레이아웃을 통해 먼저 무드를 느끼고 그다음 정보를 읽어가도록 만드는 것을 목표로 기획되었다.',
    image: planningImage,
  },

  solution: {
    title: 'Implementation',
    description:
      '메인에서는 장소의 인상과 대표 이미지를 먼저 보여주고, 이후 상세 페이지에서 지역 정보, 추천 장소, 관련 콘텐츠를 단계적으로 탐색할 수 있도록 구현했다. 넓은 여백과 이미지 중심의 카드 구조를 사용해 감성적인 분위기를 살리면서도, 여행 정보가 명확하게 정리되도록 레이아웃을 구성했다.',
    image: implementationImage,
    buttonLabel: '사이트 보기',
    liveUrl: 'https://pages-and-place.vercel.app/',
  },

  implementation: {
    title: 'Highlights',
    items: [
      {
        number: '01',
        label: 'Mood First',
        description:
          '장소의 분위기를 먼저 전달하고, 이후 세부 정보를 읽게 하는 흐름으로 여행 콘텐츠의 몰입감을 높였다.',
      },
      {
        number: '02',
        label: 'Visual Guide',
        description:
          '이미지와 카드형 레이아웃을 활용해 여행 정보를 직관적으로 탐색할 수 있도록 구성했다.',
      },
      {
        number: '03',
        label: 'Readable Flow',
        description:
          '정보량이 많아도 여백과 위계를 통해 사용자가 부담 없이 읽을 수 있는 구조를 만들었다.',
      },
    ],
  },

  result: {
    eyebrow: 'Project Document',
    title: 'Documentation',
    description:
      '기획 의도, 페이지 구조, 장소 정보 흐름, 주요 UI 설계를 정리한 프로젝트 문서입니다.',
    buttonLabel: '노션 보기',
    href: 'https://www.notion.so/Pages-Places-348398be8ce2806ea94acf10048772e5?source=copy_link',
  },

  review: {
    eyebrow: 'Reflection',
    quote:
      '이 프로젝트를 통해 여행 정보 사이트에서도 단순한 정보 제공보다, 먼저 분위기를 전달하는 경험 설계가 중요하다는 점을 느꼈다.',
    description:
      '특히 이미지와 여백, 레이아웃만으로도 장소의 인상을 강하게 남길 수 있다는 점이 인상적이었다. 앞으로는 여기에 실제 데이터와 지도, 필터 기능을 더해 탐색 경험을 더 풍부하게 만들고 싶다.',
    authorTitle: 'Project Reflection',
    authorDescription: 'What I learned through travel content design',
  },
}

export default pagesAndPlace