import heroImage from '../assets/projects/pages-and-places/hero.jpg'
import planningImage from '../assets/projects/pages-and-places/section-planning.jpg'
import implementationImage from '../assets/projects/pages-and-places/implementation.jpg'
import highlight01Image from '../assets/projects/pages-and-places/highlight01.png'
import highlight02Image from '../assets/projects/pages-and-places/highlight02.png'
import highlight03Image from '../assets/projects/pages-and-places/highlight03.png'

const pagesAndPlace = {
  slug: 'pages-and-place',
  title: 'Pages & Place Travel Guide',

  hero: {
    eyebrow: 'Featured Case Study',
    title: 'Pages & Place',
    description: '여행 정보와 숙소 탐색을 감성적인 비주얼과 구조적인 흐름으로 연결한 트래블 가이드 웹사이트',
    image: heroImage,
  },

  overview: {
    description: '여행 정보를 보다 자연스럽게 탐색하고 공유할 수 있도록 구성한 프로젝트입니다. Supabase를 활용해 여행 데이터를 관리하고 회원가입과 로그인 기능을 구현해 사용자 흐름을 연결했습니다. 또한 글쓰기 기능을 추가해 사용자들이 직접 여행 정보와 경험을 공유할 수 있도록 제작했습니다.',
    techStack: ['Supabase', 'Vercel'],
    role: ['기획', 'UI/UX 설계', '프론트엔드 구현'],
  },

  problem: {
    title: 'Planning',
    description: '여행 정보를 보다 쉽고 직관적으로 탐색할 수 있도록 구성한 프로젝트입니다. 단순히 여행지를 보여주는 것에 그치지 않고, 회원가입과 로그인 기능, 그리고 글쓰기 기능을 추가해 사용자들이 직접 여행 정보를 공유할 수 있도록 제작했습니다. 이를 통해 다양한 사용자 경험과 실제 후기를 기반으로 한 정보 공유 흐름까지 함께 구성하고자 했습니다.',
    image: planningImage,
  },

  solution: {
    title: 'Implementation',
    description: '메인에서는 장소의 인상과 대표 이미지를 먼저 보여주고, 이후 상세 페이지에서 지역 정보, 추천 숙소, 관련 콘텐츠를 단계적으로 탐색할 수 있도록 구현했습니다. 넓은 여백과 이미지 중심의 카드 구조를 사용해 감성적인 분위기를 살리면서도 여행 정보가 명확하게 정리되도록 레이아웃을 구성했습니다.',
    image: implementationImage,
    buttonLabel: '사이트 보기',
    liveUrl: 'https://pages-and-place.vercel.app/',
  },

  implementation: {
    title: 'Highlights',
    items: [{
        number: '01',
        label: 'Travel Archive',
        description: 'Supabase를 활용해 여행 데이터를 저장하고 불러오는 구조로 구성했으며, 데이터를 효율적으로 관리할 수 있도록 구현했습니다.',
        image: highlight01Image,
        imageAlt: 'Pages & Place highlight 01',
      },
      {
        number: '02',
        label: 'Shared Notes',
        description: 'Supabase를 활용해 사용자들이 직접 여행 정보와 경험을 작성하고 수정할 수 있도록 구현했습니다. 여행 후기를 자유롭게 공유할 수 있는 흐름을 구성해 사용자 간 정보 교류와 실제 경험 기반의 콘텐츠 활용도를 높이고자 했습니다.',
        image: highlight02Image,
        imageAlt: 'Pages & Place highlight 02',
      },
      {
        number: '03',
        label: 'Connected Access',
        description: 'Supabase를 활용해 회원가입과 로그인 기능을 구현했으며, 사용자별 접근 흐름을 자연스럽게 연결할 수 있도록 구성했습니다. 계정 기반 기능을 통해 사용자 경험의 연속성과 정보 활용의 편의성을 높이고자 했습니다.',
        image: highlight03Image,
        imageAlt: 'Pages & Place highlight 03',
      },
    ],
  },

  result: {
    eyebrow: 'Project Document',
    title: 'Documentation',
    description: '기획 의도, 페이지 구조, 숙소 정보 흐름, 주요 UI 설계를 정리한 프로젝트 문서입니다.',
    buttonLabel: '노션 보기',
    href: 'https://www.notion.so/Pages-Places-348398be8ce2806ea94acf10048772e5?source=copy_link',
  },

  review: {
    eyebrow: 'Reflection',
    quote: '이번 프로젝트를 진행하며 Supabase를 활용해 데이터를 관리하고 활용하는 과정에 대해 많은 것을 경험할 수 있었습니다. 여행 정보를 저장하고 불러오는 기능뿐만 아니라 회원가입, 로그인, 글쓰기 기능까지 함께 구현하면서 사용자 데이터와 콘텐츠 흐름이 하나의 구조 안에서 자연스럽게 연결되는 과정을 직접 확인할 수 있었습니다. 특히 데이터를 실시간으로 관리하고 필요한 정보를 효율적으로 불러와 사용할 수 있다는 점이 인상 깊었으며, 단순한 화면 구현을 넘어 실제 서비스 흐름을 구성해본 경험이라는 점에서 더욱 의미 있게 느껴졌습니다. 또한 사용자들이 직접 여행 정보를 공유하고 수정할 수 있는 기능까지 구현하면서 데이터 기반의 사용자 경험이 서비스 완성도에 얼마나 중요한 요소인지 다시 한번 느낄 수 있었습니다.',
    authorTitle: 'Project Reflection',
    authorDescription: 'What I learned through travel content design',
  },
}

export default pagesAndPlace