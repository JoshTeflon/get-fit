import classnames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <button
      className={classnames(
        className,
        'relative mt-[0.4375rem] w-full max-w-32 lg:max-w-52 h-[3.125rem] text-theme text-sm lg:text-base font-medium uppercase tracking-[-2%] isolate'
      )}
    >
      <div className='button-clip'>
        {children}
      </div>
      <div className='button-border-clip'></div>
    </button>
  );
}

export default Button