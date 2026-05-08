import heroImage from '../assets/projects/informationprotect/hero.jpeg'
import planningImage from '../assets/projects/informationprotect/section-planning.jpg'
import implementationImage from '../assets/projects/informationprotect/implementation.jpg'

const informationProtect = {
  slug: 'security',
  title: 'Information Security Platform',

  hero: {
    eyebrow: 'Featured Case Study',
    title: 'Protect Information',
    description:
      '보안 정보 탐색, 위협 인지, 대응 가이드까지 하나의 흐름으로 연결한 정보보호 웹사이트',
    image: heroImage,
  },

  overview: {
    description:
      '정보보호 개념과 위협 유형, 예방 및 대응 방법을 한곳에서 이해할 수 있도록 구성한 웹사이트다. 단순 정보 나열이 아닌 흐름 중심 구조를 통해 사용자가 필요한 정보를 빠르게 찾고 이해할 수 있도록 설계했다.',
    techStack: ['React', 'React Router', 'SCSS', 'Vercel'],
    role: ['기획', 'UI 구조 설계', '프론트엔드 구현'],
  },

  problem: {
    title: 'Planning',
    description:
      '기존 정보보호 사이트들은 긴 텍스트와 복잡한 구조로 인해 필요한 정보를 빠르게 찾기 어렵고, 비전문 사용자에게는 진입 장벽이 높았다. 이 프로젝트는 보안 정보를 직관적으로 이해하고, 위협 인지부터 대응까지 자연스럽게 이어지는 흐름을 만드는 것을 목표로 기획되었다.',
    image: planningImage,
  },

  solution: {
    title: 'Implementation',
    description:
      '메인에서는 정보보호의 핵심 개념을 먼저 제시하고, 세부 페이지에서는 위협 유형, 예방 방법, 대응 가이드를 역할별로 나누어 탐색할 수 있도록 구성했다. 카드 기반 UI와 명확한 레이아웃을 통해 복잡한 정보를 단계적으로 인지할 수 있게 했고, 페이지 간 이동 또한 단순하게 유지해 사용자 흐름이 끊기지 않도록 구현했다.',
    image: implementationImage,
    buttonLabel: '사이트 보기',
    liveUrl: 'https://protect-information.vercel.app/',
  },

  implementation: {
    title: 'Highlights',
    items: [
      {
        number: '01',
        label: 'Clarity',
        description:
          '보안 정보를 긴 텍스트 대신 카드와 섹션 단위로 나눠 가독성과 이해도를 높였다.',
      },
      {
        number: '02',
        label: 'Flow',
        description:
          '위협 이해 → 예방법 확인 → 대응 가이드로 이어지는 사용자 흐름 중심 구조를 설계했다.',
      },
      {
        number: '03',
        label: 'Accessibility',
        description:
          '비전문 사용자도 쉽게 접근할 수 있도록 시각적 위계와 단순한 탐색 구조를 적용했다.',
      },
    ],
  },

  result: {
    eyebrow: 'Project Document',
    title: 'Documentation',
    description:
      '기획 배경, 정보 구조 설계, 주요 화면 구성과 구현 과정을 정리한 프로젝트 문서입니다.',
    buttonLabel: '노션 보기',
    href: 'https://www.notion.so/348398be8ce2807bbfeefbb5e9482519?source=copy_link',
  },

  review: {
    eyebrow: 'Reflection',
    quote:
      '이 프로젝트를 통해 정보가 많을수록 더 단순한 구조와 명확한 흐름이 필요하다는 것을 체감했다.',
    description:
      '특히 정보보호처럼 복잡한 주제일수록, 사용자가 이해하기 쉬운 구조를 만드는 것이 중요하다는 점을 배웠다. 앞으로는 검색, 필터 기능을 추가해 실사용성을 더 강화하고 싶다.',
    authorTitle: 'Project Reflection',
    authorDescription: 'What I learned through information architecture',
  },
}

export default informationProtect