import classnames from 'classnames';

type TextElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TextProps = {
  children: React.ReactNode;
  as?: TextElements;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  className?: string;
} & React.ComponentPropsWithoutRef<TextElements>

const Text: React.FC<TextProps> = ({ as = 'p', children, size = 'base', className, ...rest }) => {
  const Component = as;
  return (
    <Component
      className={classnames(className, { 
        'text-sm': size === 'sm',
        'text-sm lg:text-base': size === 'base',
        'text-lg lg:text-xl': size === 'lg',
        'text-xl lg:text-[1.375rem]': size === 'xl',
        'text-xl md:text-[1.375rem] lg:text-2xl': size === '2xl',
        'text-2xl lg:text-3xl': size === '3xl',
        'text-2xl md:text-3xl lg:text-4xl': size === '4xl',
        'text-2xl sm:text-3xl md:text-4xl xl:text-5xl !leading-snug': size === '5xl'
      })}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Text;