import heroImage from '../assets/projects/informationprotect/hero.jpeg'
import planningImage from '../assets/projects/informationprotect/section-planning.jpg'
import implementationImage from '../assets/projects/informationprotect/implementation.jpg'
import highlight01Image from '../assets/projects/informationprotect/highlight01.png'
import highlight02Image from '../assets/projects/informationprotect/highlight02.png'
import highlight03Image from '../assets/projects/informationprotect/highlight03.png'

const informationProtect = {
  slug: 'security',
  title: 'Information Security Platform',

  hero: {
    eyebrow: 'Featured Case Study',
    title: 'Protect Information',
    description: '보안 정보 탐색, 유형 인지, 대응 가이드까지 하나의 흐름으로 연결한 정보보호 웹사이트',
    image: heroImage,
  },

  overview: {
    description: '정보보호 개념과 위협 유형, 대응 방법을 보다 쉽게 이해할 수 있도록 구성한 가이드 중심의 웹사이트입니다. After Effects를 활용한 메인 영상과 모션 그래픽을 직접 제작했으며, 설문조사와 점수 체크 기능을 추가해 사용자가 자신의 보안 습관을 직접 확인할 수 있도록 구성했습니다. 무거워지기 쉬운 정보보호 주제를 기반으로, MZ세대가 선호하는 아날로그 감성을 더해 낯설지 않은 무드로 표현했습니다.',
    techStack: ['React', 'React Router', 'Vercel'],
    role: ['기획', 'UI 구조 설계', '프론트엔드 구현'],
  },

  problem: {
    title: 'Planning',
    description: '기존의 정보보호 사이트들은 정보 전달 중심의 구조로 인해 어렵고 딱딱하게 느껴지는 경우가 많았습니다. 이 프로젝트는 정보보호 내용을 보다 쉽고 자연스럽게 이해할 수 있도록 흐름 중심의 화면으로 구성했으며, 설문조사와 점수 체크 기능을 통해 사용자가 자신의 보안 습관을 직접 확인할 수 있도록 기획했습니다. 또한 무게감 있는 분위기에 아날로그 감성을 더해 보다 친숙한 무드로 표현하고자 했습니다.',
    image: planningImage,
  },

  solution: {
    title: 'Implementation',
    description: '메인에서는 정보보호 핵심 개념을 먼저 제시하고, 내부 페이지에서는 위협 유형과 대응 방법, 대응 가이드를 단계별로 나누어 탐색할 수 있도록 구성했습니다. 카드 기반 UI와 명확한 레이아웃을 통해 복잡한 정보를 단계적으로 인식할 수 있도록 했으며, 페이지 간 이동 또한 단순하게 이어져 사용자 흐름이 끊기지 않도록 구현했습니다.',
    image: implementationImage,
    buttonLabel: '사이트 보기',
    liveUrl: 'https://protect-information.vercel.app/',
  },

  implementation: {
    title: 'Highlights',
    items: [{
        number: '01',
        label: 'Video Guide',
        description: '정보보호 가이드 영상을 사이트 분위기와 자연스럽게 어우러질 수 있도록 After Effects를 활용해 직접 제작했습니다. 단순한 정보 전달보다 모션과 흐름을 통해 사용자가 콘텐츠에 더욱 몰입할 수 있도록 구성했습니다.',
        image: highlight01Image,
        imageAlt: 'Information Protect highlight 01',
      },
      {
        number: '02',
        label: 'Assessment',
        description: '정보보호와 관련된 설문조사와 점수 체크 기능을 추가해 단순한 정보 제공에 그치지 않도록 구성했습니다. 사용자가 직접 참여하며 자신의 보안 습관을 확인할 수 있는 흐름을 통해 사이트 경험을 더욱 능동적이고 흥미롭게 만들고자 했습니다.',
        image: highlight02Image,
        imageAlt: 'Information Protect highlight 02',
      },
      {
        number: '03',
        label: 'Result',
        description: '설문조사 결과를 통해 사용자가 자신의 정보보호 지식과 보안 습관 수준을 직접 확인할 수 있도록 구성했습니다. 결과에 맞는 가이드와 솔루션도 함께 제공해 단순한 확인에서 끝나는 것이 아닌, 실제 예방과 개선으로 이어질 수 있는 흐름을 구현했습니다.',
        image: highlight03Image,
        imageAlt: 'Information Protect highlight 03',
      },
    ],
  },

  result: {
    eyebrow: 'Project Document',
    title: 'Documentation',
    description: '기획 배경, 정보 구조 설계, 주요 화면 구성과 구현 과정을 정리한 프로젝트 문서입니다.',
    buttonLabel: '노션 보기',
    href: 'https://www.notion.so/348398be8ce2807bbfeefbb5e9482519?source=copy_link',
  },

  review: {
    eyebrow: 'Reflection',
    quote: '이번 프로젝트에서는 단순한 화면 구현보다 사이트 분위기와 자연스럽게 어우러지는 영상을 직접 제작하는 과정에 가장 큰 중점을 두었습니다. After Effects를 활용해 정보보호라는 주제에 맞는 모션과 분위기를 직접 구성했으며, 페이지의 흐름과 디자인 무드가 영상과 자연스럽게 연결될 수 있도록 디테일하게 작업했습니다. 또한 정보보호 사이트 특유의 딱딱하고 어렵게 느껴지는 분위기를 줄이기 위해, 설문조사와 점수 체크 같은 참여형 요소를 추가해 사용자가 직접 참여하며 경험할 수 있는 보다 액티브한 형태의 사이트로 풀어내고자 했습니다.',
    authorTitle: 'Project Reflection',
    authorDescription: 'What I learned through information architecture',
  },
}

export default informationProtect