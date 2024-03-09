import { IconComponent, ImageSlideProps, TitleContent } from './types';
import { Facebook, Instagram, Twitter } from '@/components/icons';
import ProgramRectangle1 from '@/assets/ProgramRectangle1.png';
import ProgramRectangle2 from '@/assets/ProgramRectangle2.png';
import ProgramRectangle3 from '@/assets/ProgramRectangle3.png';
import InstaRectangle1 from '@/assets/InstaRectangle1.png';
import InstaRectangle2 from '@/assets/InstaRectangle2.png';
import InstaRectangle3 from '@/assets/InstaRectangle3.png';

export const navItems: string[] = ['about me', 'programs', 'testimonials'];

export const programServices: string[] = ['fitness tips', 'consultations', 'top programs', 'fitness tips', 'consultations', 'top programs'];

export const aboutContent: TitleContent = {
  title: ['Hey!', 'I\'m Hercules'],
  content: [
    'My journey in fitness began with a deep-seated commitment to leading a healthy lifestyle and inspiring others to do the same. Through personalized training programs tailored to each individual\'s needs and goals, I empower my clients to push beyond their limits and embrace a sustainable approach to fitness.',
    'My training style combines elements of strength training, cardiovascular conditioning, flexibility, and functional movements to deliver comprehensive workouts that yield results. Whether you\'re a beginner looking to kickstart your fitness journey or an experienced athlete aiming to take your performance to the next level, I provide guidance, support, and motivation every step of the way.'
  ]
};

export const aboutStats: TitleContent[] = [
  {
    title: '51+',
    content: 'TRAINING PROGRAMS'
  },
  {
    title: '190+',
    content: 'SATISFIED CLIENTS'
  }
];

export const programsHeader: TitleContent = {
  title: 'Programs',
  content: 'Here are some of the programs i train my clients on to keep you motivated on your journey to achieving your fitness goals.'
};

export const programsSlider: ImageSlideProps[] = [
  {
    src: ProgramRectangle1,
    alt: 'ProgramRectangle1',
    header: 'yoga',
    desc: 'Mindful Movement cultivating inner peace and strength through a harmonious blend of yoga postures...'
  },
  {
    src: ProgramRectangle2,
    alt: 'ProgramRectangle2',
    header: 'cardio & hit',
    desc: 'sessions designed to maximize fat burning, boost endurance, and enhance overall cardiovascular health...'
  },
  {
    src: ProgramRectangle3,
    alt: 'ProgramRectangle3',
    header: 'push ups',
    desc: 'Developing upper body strength, core stability, and endurance through targeted push-up variations...'
  },
  {
    src: ProgramRectangle2,
    alt: 'ProgramRectangle2.5',
    header: 'weight lifting',
    desc: 'Unlocking your full potential through tailored weightlifting programs, focusing on technique refinement...'
  },
];

export const testimonialsHeader: TitleContent = {
  title: 'Clients Word',
  content: 'At the heart of every successful fitness journey are the words of those who have experienced the transformative power of dedicated training and guidance. Here\'s what some of my clients have to say about their experiences.'
};

export const socialsHeader: TitleContent = {
  title: 'Instagram',
  content: 'Stay connected and join me on an inspiring journey toward health, wellness, and fitness on Instagram! Follow along for daily motivation, workout tips, nutritional insights.'
};

export const socialsSlider: ImageSlideProps[] = [
  {
    src: InstaRectangle1,
    alt: 'InstaRectangle1',
  },
  {
    src: InstaRectangle2,
    alt: 'InstaRectangle2',
  },
  {
    src: InstaRectangle3,
    alt: 'InstaRectangle3',
  },
  {
    src: InstaRectangle2,
    alt: 'InstaRectangle2.5',
  },
]

export const footerDetails: TitleContent[] = [
  {
    title: 'About Me',
    content: 'I believe in the importance of balance and self-care, and I\'m always exploring new ways to nourish my mind, body, and soul.'
  },
  {
    title: 'Programs',
    content: 'Ready to take the next step towards a healthier, happier you? Explore my programs and start your journey to wellness today.'
  }
];

export const socialIcons: IconComponent[] = [Facebook, Twitter, Instagram]