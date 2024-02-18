import { tomorrow, raleway } from '@/app/layout';
import { TitleContent } from '@/utils/types';
import { Text } from '.';

interface SectionContentProps extends TitleContent {
  className?: string
}

const SectionContent: React.FC<SectionContentProps> = ({ title, content, className = '' }) => {
  return (
    <section className={className}>
      <div className={`${tomorrow.className} text-current font-semibold uppercase mb-4 flex flex-col`}>
        {typeof title === 'string' ? (
          <Text as='h2' size='4xl'>
            {title}
          </Text>
        ) : (
          title?.map((item: string) => (
            <Text key={item} as='h2' size='4xl'>
              {item}
            </Text>
          ))
        )}
      </div>
      <div className={`${raleway.className} text-current opacity-80 flex flex-col space-y-8`}>
        {typeof content === 'string' ? (
          <Text as='p'>
            {content}
          </Text>
        ) : (
          content?.map((item: string) => (
            <Text key={item} as='p'>
              {item}
            </Text>
          ))
        )}
      </div>
    </section>
  );
};

export default SectionContent;