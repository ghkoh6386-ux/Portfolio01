import heroImage from '../assets/projects/babymonster/hero.jpg'
import planningImage from '../assets/projects/babymonster/section-planning.jpg'
import implementationImage from '../assets/projects/babymonster/implementation.jpg'
import highlight01Image from '../assets/projects/babymonster/highlight01.jpg'
import highlight02Image from '../assets/projects/babymonster/highlight02.jpg'
import highlight03Image from '../assets/projects/babymonster/highlight03.jpg'

export const projects = [
  {
    slug: 'babymonster',
    title: 'BABYMONSTER Archive',

    hero: {
      eyebrow: 'Featured Case Study',
      title: 'BABYMONSTER Archive',
      description:
        '무대, 비디오, 음악, 팀의 무드를 하나의 흐름 안에서 탐색할 수 있도록 구성한 아카이브 웹사이트입니다.',
      image: heroImage,
    },

    overview: {
      description:
        '이 프로젝트는 베이비몬스터의 강렬한 퍼포먼스 이미지를 반영해, 전체 디자인을 맥시멀한 스타일로 구성했습니다. 시각적인 임팩트를 강조하기 위해 블랙 배경을 기반으로 하고, 포인트 컬러는 베이비몬스터를 대표하는 선명한 레드(#C62828)와 네온 그린(#39FF14)을 사용해 힙하고 에너지 있는 분위기를 표현했습니다. 전체적인 구조와 디자인, 설계는 직접 진행했으며, 구현 과정에서는 빠른 작업을 위해 Codex를 활용했습니다. 구현은 React를 기반으로 컴포넌트를 분리하여 구조적으로 설계했으며, 반복되는 UI 요소를 효율적으로 관리할 수 있도록 구성했습니다. 스타일링은 SCSS를 활용해 구조화된 방식으로 작성하며, 유지보수와 확장성을 고려했습니다. 또한 Vercel을 통해 프로젝트를 배포하여 실제 서비스 형태로 확인할 수 있도록 했습니다.',
      techStack: ['React', 'React Router', 'SCSS', 'Vercel'],
      role: ['기획', 'UI 구조 설계', '프론트엔드 구현'],
    },

    planning: {
      title: 'Planning',
      description:
        '이 프로젝트는 베이비몬스터를 소개하는 웹사이트로, 아이돌 콘텐츠 특성을 반영해 음악과 영상을 함께 즐길 수 있는 구조로 기획했습니다. 음악을 언제든지 재생할 수 있도록 플레이바를 화면 하단에 고정하고, 플레이리스트와 좋아요한 콘텐츠는 사이드 메뉴에서 바로 확인할 수 있도록 구성했습니다. 또한 이미지 소비가 중요한 점을 고려해 사이드 메뉴에서 다양한 이미지 컷을 빠르게 탐색할 수 있도록 설계했습니다. 페이지는 전체 분위기를 보여주는 홈, 비디오 페이지, 음악과 정보를 함께 제공하는 페이지, 그리고 그룹을 소개하는 페이지로 구성했습니다.',
      image: planningImage,
    },

    implementation: {
      title: 'Implementation',
      description:
        '음악 재생이 가능한 하단 고정 플레이바, 사이드 메뉴를 통한 플레이리스트와 좋아요 콘텐츠 관리, 이미지 컷의 빠른 탐색 기능을 중심으로 구성하고, 홈·비디오·음악·소개 페이지로 나누어 전체 흐름이 자연스럽게 이어지도록 구현했습니다.',
      image: implementationImage,
      buttonLabel: '사이트 보기',
      liveUrl: 'https://babymonster-ivory.vercel.app/',
    },

    highlights: [
      {
        number: '01',
        label: 'Music Player',
        image: highlight01Image,
        imageFit: 'contain',
        imageAlt: 'BABYMONSTER highlights structure preview',
        description:
          '사용자가 별도의 이동 없이도 음악을 자연스럽게 감상할 수 있도록, 페이지 전반에서 끊김 없이 동작하는 뮤직 플레이어를 구현했습니다.',
      },
      {
        number: '02',
        label: 'Visual Flow',
        image: highlight02Image,
        imageFit: 'contain',
        imageAlt: 'BABYMONSTER highlights visual flow preview',
        description:
          '사용자가 언제든지 쉽게 접근할 수 있도록 사이드 메뉴에 플레이리스트를 고정 배치하여, 음악을 보다 편리하게 탐색하고 감상할 수 있도록 구성했습니다.',
      },
      {
        number: '03',
        label: 'Scalability',
        image: highlight03Image,
        imageFit: 'contain',
        imageAlt: 'BABYMONSTER highlights scalability preview',
        description:
          '베이비몬스터의 다양한 이미지 컷을 보다 쉽게 접할 수 있도록 사이트 메뉴에 별도로 구성하여, 사용자가 원하는 이미지를 빠르게 탐색하고 감상할 수 있도록 설계했습니다.',
      },
    ],

    documentation: {
      eyebrow: 'Project Document',
      title: 'Documentation',
      description:
        '기획 배경, 구조 설계, 페이지별 역할, 구현 방향을 정리한 프로젝트 문서입니다.',
      buttonLabel: '노션 보기',
      href: 'https://www.notion.so/BABYMONSTER-348398be8ce280f4b436fd1b178af40a?source=copy_link',
    },

    reflection: {
      eyebrow: 'Reflection',
      quote:
        '이 프로젝트는 평소 선호하던 미니멀한 디자인이 아닌 맥시멀한 스타일에 도전해보고자 시작했습니다. 다양한 디자인을 직접 구현해보고 싶다는 목적에서 접근했지만, 익숙하지 않은 영역이었기 때문에 구성과 표현 방식에서 어려움이 있었습니다. 이러한 부분은 레퍼런스를 참고하고 여러 시안을 반복하며 비교하는 과정을 통해 방향을 잡아갔고, 무엇보다 제 감각을 믿고 끝까지 구현해내는 데 집중했습니다. 또한 학원에서 배운 내용을 바탕으로 기획부터 디자인, 구현까지 전 과정을 스스로 진행했다는 점에서 큰 의미가 있었고, 결과물을 완성해나가는 과정에서 높은 성취감을 느꼈습니다. 작업 과정 중에는 주변 지인들에게 결과물을 공유하며 피드백을 받고, 보다 객관적인 시각으로 프로젝트를 보려 노력했습니다. 콘셉트로 선택한 베이비몬스터는 그룹 특유의 힙한 이미지가 맥시멀한 디자인과 잘 어울린다고 판단해 적용했으며, 결과적으로 전체 분위기와 잘 맞아떨어졌다고 생각합니다. 개인적으로 과정과 결과 모두에 대해 만족도가 높은 프로젝트입니다.',
      authorTitle: 'Project Reflection',
      authorDescription: 'What I learned through UI flow design',
    },
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
