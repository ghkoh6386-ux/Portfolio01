import heroImage from '../assets/projects/movie-app/hero.jpg'
import planningImage from '../assets/projects/movie-app/section-planning.jpg'
import implementationImage from '../assets/projects/movie-app/implementation.jpg'
import highlight01Image from '../assets/projects/movie-app/highlight01.jpg'
import highlight02Image from '../assets/projects/movie-app/highlight02.jpg'
import highlight03Image from '../assets/projects/movie-app/highlight03.jpg'

const movieApp = {
  slug: 'movie-app',
  title: 'Movie-App',

  hero: {
    eyebrow: 'Featured Case Study',
    title: 'Movie-App',
    description:
      'API를 활용하여 구현한 영화 정보를 시네마 무드로 탐색하는 영화 아카이브 웹사이트',
    image: heroImage,
  },

  overview: {
    description:
      '이 프로젝트는 전체적으로 영화관의 분위기를 느낄 수 있도록 시네마 콘셉트로 디자인한 무비 앱입니다. 실제 영화 데이터를 활용하기 위해 API를 연동하여 영화 정보를 불러오는 구조로 구현한 점이 주요 특징입니다. React를 기반으로 컴포넌트를 분리해 구조적으로 설계했으며, 이를 통해 데이터를 효율적으로 관리하고 화면에 출력할 수 있도록 구성했습니다. 또한 Vercel을 통해 배포하여 실제 서비스 형태로 확인할 수 있도록 했습니다.',
    techStack: ['API', 'React', 'React Router',  'Vercel'],
    role: ['기획', 'UI/UX 설계', '프론트엔드 구현'],
  },

  problem: {
    title: 'Planning',
    description:
      '홈페이지는 시네마틱한 분위기를 중심으로 구성하고, 영화 목록을 한눈에 확인할 수 있도록 카드 형태로 보여주는 구조로 기획했습니다. 또한 영화 정보를 API로 불러와 실제 데이터를 기반으로 콘텐츠를 구성하고, 각 카드에서는 예고편을 바로 감상할 수 있도록 모달 창이 열리게 설계했습니다. 카드를 선택하면 해당 영화의 상세 정보를 확인할 수 있는 디테일 페이지로 이동하도록 흐름을 구성했습니다.',
    image: planningImage,
  },

  solution: {
    title: 'Implementation',
    description:
      '영화 정보를 API를 통해 불러오는 기능을 구현했으며, 카드 형태의 영화 목록, 예고편을 모달로 감상할 수 있는 기능, 영화 상세 정보를 확인할 수 있는 디테일 페이지까지 모두 구현하여 기획한 흐름이 실제로 동작하도록 완성했습니다.',
    image: implementationImage,
    buttonLabel: '사이트 보기',
    liveUrl: 'https://movie-app-two-gules-46.vercel.app/',
  },

  implementation: {
    title: 'Highlights',
    items: [
      {
        number: '01',
        label: 'Cinema Card',
        image: highlight01Image,
        imageAlt: 'Movie-app highlights cinema card preview',
        description:
          '무비앱 홈에서는 영화 정보를 한눈에 확인할 수 있도록 카드 형태로 구성했으며, 각 카드에 영화 포스터와 기본 정보를 담아 직관적으로 탐색할 수 있도록 설계했습니다.',
      },
      {
        number: '02',
        label: 'Curated Flow',
        image: highlight02Image,
        imageAlt: 'Movie-app highlights curated flow preview',
        description:
          '각 영화 카드에서 예고편을 바로 확인할 수 있도록 구성했으며, 버튼을 클릭하면 모달 창이 열려 페이지 이동 없이 예고편 영상을 감상할 수 있도록 구현했습니다.',
      },
      {
        number: '03',
        label: 'Detail Focus',
        image: highlight03Image,
        imageAlt: 'Movie-app highlights detail focus preview',
        description:
          '영화의 상세 정보를 확인할 수 있는 디테일 페이지를 별도로 구성하고, API를 통해 불러온 영화 데이터를 해당 페이지에 반영하여 다양한 정보를 확인할 수 있도록 구현했습니다.',
      },
    ],
  },

  result: {
    eyebrow: 'Project Document',
    title: 'Documentation',
    description:
      '기획 의도, 페이지 구조, 시네마 무드 설정, 상세 정보 구성 방식을 정리한 프로젝트 문서입니다.',
    buttonLabel: '노션 보기',
    href: 'https://www.notion.so/Movie-app-348398be8ce2803abe39de59733f516d?source=copy_link',
  },

  review: {
    eyebrow: 'Reflection',
    quote:
      '이 프로젝트를 통해 API를 활용해 실제 데이터를 기반으로 서비스를 구현해본 경험이 매우 의미 있게 느껴졌습니다. 단순한 정적 콘텐츠가 아니라 외부 데이터를 불러와 화면에 구성하는 과정을 직접 경험하면서, 데이터 흐름과 구조를 이해하는 데 큰 도움이 되었습니다. 특히 영화 정보를 실시간으로 반영하는 구조를 구현하면서, API 연동에 대한 이해도를 높일 수 있었습니다. 디자인 측면에서는 영화 사이트 특유의 시네마틱한 분위기를 표현하고자 했으며, 기존 OTT 서비스인 Netflix나 Watcha처럼 어두운 톤을 기반으로 하되, 차별화를 위해 골드 계열 색상을 포인트로 사용했습니다. 이를 통해 보다 클래식하고 극장 같은 분위기를 표현하고자 했고, 결과적으로 전체 콘셉트와 잘 어울린다고 느꼈습니다. 전반적으로 기술적인 경험과 디자인적인 시도를 함께 해볼 수 있었던 프로젝트였으며, 개인적으로 만족도가 높은 작업이었습니다.',
    description:
      '특히 포스터와 메타 정보를 한 화면 안에서 어떻게 배치하느냐에 따라 작품의 인상이 크게 달라진다는 점이 인상적이었다. 앞으로는 여기에 실제 API 데이터와 장르별 필터, 추천 기능을 더해 탐색 경험을 더욱 풍부하게 만들고 싶다.',
    authorTitle: 'Project Reflection',
    authorDescription: 'What I learned through cinematic UI design',
  },
}

export default movieApp
