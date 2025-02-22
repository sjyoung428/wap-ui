import React from 'react';
import { useDropdownContext } from '../DropdownContext';
import * as S from './DropdownMenu.styles';
import { AnimatePresence } from 'framer-motion';

export interface DropdownMenuProps {
  children: React.ReactNode[] | React.ReactNode;
}

export const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const { state, ref } = useDropdownContext();

  /** 아래 두 코드는 trigger button 밑에 content를 높기 위한 코드 */
  const offset = ref?.current?.getBoundingClientRect();
  const style = offset
    ? {
        top: offset.top + offset.height,
        left: offset.left,
      }
    : {};

  return (
    <AnimatePresence>
      {state && (
        <S.StyledMenu
          initial={{ scale: 0.9, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', bounce: 0.33, duration: 0.3 }}
          style={style}
        >
          {children}
        </S.StyledMenu>
      )}
    </AnimatePresence>
  );
};
