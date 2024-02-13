"use client"
import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  const { pending } = useFormStatus()
  return (
    <button
      {...rest}
      type="submit"
      aria-disabled={pending}
      className={clsx(
        'mt-3 font-medium  w-full bg-[#262945] px-[65px] py-[9px] rounded-3xl outline-2' ,
        className,
      )}
    >
      {children}
    </button>
  );
}
