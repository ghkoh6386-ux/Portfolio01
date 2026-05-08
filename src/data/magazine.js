import heroImage from '../assets/projects/magazine/hero.jpg'
import planningImage from '../assets/projects/magazine/section-planning.jpg'
import implementationImage from '../assets/projects/magazine/implementation.jpg'
import highlight01Image from '../assets/projects/magazine/highlight01.jpg'
import highlight02Image from '../assets/projects/magazine/highlight02.jpg'
import highlight03Image from '../assets/projects/magazine/highlight03.jpg'

const magazine = {
  slug: 'magazine',
  title: 'Bareline Magazine',

  hero: {
    eyebrow: 'Featured Case Study',
    title: 'Bareline Magazine',
    description:
      '패션, 공간, 오브제 등 다양한 콘텐츠를 에디토리얼 형태로 보여주고 직접 전시할 수 있는  매거진 아카이브 플랫폼',
    image: heroImage,
  },

  overview: {
    description:
      '미니멀 디자인과 공간, 패션에 대한 관심을 바탕으로 제작한 매거진형 웹사이트입니다. 각 콘텐츠는 독립적인 아티클이면서도 전체 흐름 안에서 연결되도록 설계했습니다. React를 사용해 UI와 데이터를 분리하고 재사용 가능한 구조로 구성했으며, 이러한 방식이 제 작업 성향과 잘 맞아 선택했습니다. Tailwind CSS를 통해 빠른 스타일링과 유지보수를 고려했습니다. 기능과 디자인 구조는 직접 설계했으며, 구현 과정에서는 Codex를 활용해 기본 기능을 구현하고, 이후 수정과 디테일 작업은 직접 진행했습니다.',
    techStack: ['React', 'React Router', 'TailwindCSS', 'Vercel'],
  },

  problem: {
    title: 'Planning',
    description:
      '미니멀한 디자인을 기반으로 콘텐츠에 집중할 수 있는 구조로 기획했습니다. 메인 페이지는 히어로와 주요 서브페이지를 간략히 보여주는 형태로 구성하고, 서브페이지는 아카이브, 소개, 프로젝트, 문의 페이지로 나누어 설계했습니다. 아카이브에서는 다양한 작품들을 탐색할 수 있도록 하고, 프로젝트 페이지는 디자이너와 작품을 함께 보여주게 구성했습니다. 문의 페이지도 만들어서 전시 참여가 가능하도록 유도하는 흐름을 구성했습니다. 단순 정보 제공이 아닌, 탐색과 참여로 이어지는 경험을 목표로 했습니다.',
    image: planningImage,
  },

  solution: {
    title: 'Implementation',
    description:
      '메인 페이지는 사이트의 전반적인 분위기와 핵심 정보를 간략히 보여주도록 구현했습니다. 서브페이지는 아카이브를 섹션별로 나누고, 각 콘텐츠를 디테일 페이지로 연결되도록 구현했습니다. 프로젝트페이지는 디자이너와 작품을 연결하여 소개 될 수 있게 구현하였고 소개 페이지를 통해 사이트를 설명하여 사이트의 목적과 분위기를 전달할 수 있도록 구현하였습니다.',
    image: implementationImage,
    buttonLabel: '사이트 보기',
    liveUrl: 'https://bareline-9t5f.vercel.app/',
  },

  implementation: {
    title: 'Highlights',
    items: [
      {
        number: '01',
        label: 'Archives',
        image: highlight01Image,
        imageAlt: 'Magazine highlights archive preview',
        description:
          '다양한 아카이브들을 섹션별로 나누고, 각 콘텐츠를 디테일 페이지로 연결되도록 구현.',
      },
      {
        number: '02',
        label: 'Projects',
        image: highlight03Image,
        imageAlt: 'Magazine highlights projects preview',
        description:
          '프로젝트 페이지를 통해 디자이너와 작품을 함께 보여주도록 구현.',
      },
      {
        number: '03',
        label: 'Intoduce',
        image: highlight02Image,
        imageAlt: 'Magazine highlights introduce preview',
        description:
          '사이트를 소개하는 페이지를 만들어 사이트의 목적과 분위기를 명확히 전달할 수 있도록 구현.',
      },
    ],
  },

  result: {
    eyebrow: 'Project Document',
    title: 'Documentation',
    description:
      '기획 의도, 콘텐츠 구조, UI 설계, 페이지 흐름을 정리한 매거진 프로젝트 문서입니다.',
    buttonLabel: '노션 보기',
    href: 'https://www.notion.so/348398be8ce280929d3ed26fab777eaf?source=copy_link',
  },

  review: {
    eyebrow: 'Reflection',
    quote:
      '이 프로젝트는 제가 좋아하는 요소들로 콘텐츠를 구성했기 때문에 작업하는 과정 자체가 매우 즐거웠던 프로젝트입니다. 관심 있는 분야를 직접 다루며 사이트를 채워나가는 경험이 특히 인상적이었습니다. 디자인 또한 학원에서 배운 내용을 바탕으로, 스스로 구상하고 처음부터 끝까지 구현해봤다는 점에서 의미가 컸습니다. 단순히 따라 만드는 것이 아니라, 직접 고민하고 선택하며 결과물을 만들어냈다는 점이 만족스러웠습니다. 특히 여백을 어떻게 활용할지, 텍스트와 이미지를 미니멀한 감성을 유지하면서 어떻게 배치할지에 대한 고민이 가장 어려웠습니다. 그 과정에서 제 감각을 믿고 방향을 잡아가며 완성도를 높이고자 했습니다. 결과적으로 과정과 결과 모두에 대해 개인적으로 만족도가 높은 프로젝트입니다.',
    authorTitle: 'Project Reflection',
    authorDescription: 'What I learned through editorial UI design',
  },
}

export default magazine
