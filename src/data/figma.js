import heroImage from '../assets/projects/figma/hero.png'
import thumbnailImage from '../assets/projects/figma/hero02.png'
import planningImage from '../assets/projects/figma/section-planning.png'
import implementationImage from '../assets/projects/figma/implementation.png'
import highlight01Image from '../assets/projects/figma/highilght01.png'
import highlight02Image from '../assets/projects/figma/highilght02.png'
import highlight03Image from '../assets/projects/figma/highilght03.png'

const figma = {
  slug: 'figma-archive',
  title: 'Figma Design Archive',
  thumbnail: thumbnailImage,

  hero: {
    eyebrow: 'Featured Case Study',
    title: 'Figma Archive',
    description:
      'Figma를 활용해 앱 화면과 커뮤니티 요소를 중심으로 풀어낸 UI 디자인 프로젝트',
    image: heroImage,
  },

  overview: {
    description:
      '축구 커뮤니티와 앱 인터페이스 요소를 결합한 모바일 형태의 UI를 Figma로 디자인한 프로젝트입니다. 기존 축구 커뮤니티 사이트와는 다르게 축구 게임 UI 같은 액티브한 분위기를 더해 보다 몰입감 있는 사용자 경험을 구성하고자 했습니다. 또한 랭킹 시스템과 보상 요소, FIFA 게임 무드의 그래픽을 함께 녹여 커뮤니티와 게임적 감성이 자연스럽게 연결되도록 작업했습니다.',
    techStack: ['Figma', 'UI Design', 'Mobile Design', 'Prototype'],
    role: ['기획', '앱 구조 설계', 'UI 디자인'],
  },

  problem: {
    title: 'Planning',
    description:
      '기존 축구 커뮤니티 사이트들은 정보 확인 중심 구조로 인해 비교적 정적이고 딱딱하게 느껴지는 경우가 많았습니다. 이 프로젝트는 단순한 정보 제공이 아니라, 사용자가 직접 참여하고 몰입할 수 있는 경험을 만드는 것을 목표로 기획했습니다. 축구 게임 UI 같은 역동적인 분위기를 바탕으로 랭킹과 보상 시스템, FIFA 게임 연상 요소를 더해 게임과 커뮤니티의 흐름이 자연스럽게 이어지도록 구성했습니다.',
    image: planningImage,
  },

  solution: {
    title: 'Implementation',
    description:
      'Figma를 사용해 전체 UI 흐름과 화면 구조를 직접 설계했으며, 경기 일정과 랭킹, 보상 시스템이 하나의 흐름 안에서 자연스럽게 연결되도록 구성했습니다. 또한 축구 게임 UI의 분위기를 반영한 강한 비주얼과 인터랙션 중심의 레이아웃을 적용해 보다 액티브한 사용자 경험을 구현했습니다.',
    image: implementationImage,
    buttonLabel: '피그마 보기',
    liveUrl:
      'https://www.figma.com/proto/Ne72vUqjg3cas8G710m1sq/%EC%B6%95%EA%B5%AC%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0%EC%95%B1?node-id=103-126&p=f&t=bMoH7cUd6APZ6PtX-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A2&starting-point-node-id=103%3A126',
  },

  implementation: {
    title: 'Highlights',
    items: [
      {
        number: '01',
        label: 'Match Pick',
        image: highlight01Image,
        imageAlt: 'Figma archive highlight 01',
        imageFit: 'contain',
        description:
          '승부예측 이벤트 요소를 추가해 사용자들이 단순히 정보를 확인하는 것에서 끝나는 것이 아니라, 직접 참여하고 결과를 기대할 수 있는 흐름을 구성했습니다. 이를 통해 커뮤니티의 활동성과 사용자 몰입감을 더욱 높이고자 했습니다.',
      },
      {
        number: '02',
        label: 'Pitch News',
        image: highlight02Image,
        imageAlt: 'Figma archive highlight 02',
        imageFit: 'contain',
        description:
          '최신 축구 기사를 함께 제공해 사용자들이 경기 정보와 커뮤니티 기능뿐만 아니라, 최근 축구 이슈와 소식까지 한곳에서 자연스럽게 확인할 수 있도록 구성했습니다. 이를 통해 정보 탐색과 커뮤니티 경험이 함께 이어질 수 있는 흐름을 만들고자 했습니다.',
      },
      {
        number: '03',
        label: 'Victory Rank',
        image: highlight03Image,
        imageAlt: 'Figma archive highlight 03',
        imageFit: 'contain',
        description:
          '승부예측 보상 시스템을 함께 구성해 사용자들이 단순 참여에 그치지 않고, 결과에 따른 보상을 기대하며 더욱 적극적으로 참여할 수 있는 흐름을 만들고자 했습니다. 이를 통해 사용자 몰입감과 커뮤니티 활동성을 함께 높이는 데 집중했습니다.',
      },
    ],
  },

  review: {
    eyebrow: 'Reflection',
    quote:
      '이번 프로젝트는 표현하고 싶은 기능과 아이디어가 많았던 만큼, 이를 모바일 화면 안에서 자연스럽게 구성하는 과정이 가장 어려웠던 작업 중 하나였습니다. 기존 축구 커뮤니티 사이트와 차별화를 주기 위해 축구 게임 사이트의 분위기와 인터랙션 요소를 반영했으며, 기존 사용자들도 부담 없이 접근할 수 있도록 균형을 맞추는 데 집중했습니다. 특히 FIFA 게임 연동 컨셉과 다양한 커뮤니티 이벤트 요소를 함께 구성한 부분은 프로젝트에서 가장 만족스러운 요소였습니다.',
    description:
      '이 프로젝트를 통해 단순히 화면을 예쁘게 만드는 것을 넘어, 서비스의 성격과 무드를 어떻게 구조로 풀어낼 것인지 고민하는 과정이 중요하다는 점을 배웠습니다. 앞으로는 더 다양한 카테고리와 상호작용 요소를 추가해 작업을 보는 경험 자체도 더 풍부하게 만들고 싶습니다.',
    authorTitle: 'Project Reflection',
    authorDescription: 'What I learned through visual archive design',
  },
}

export default figma
