import React from 'react';
import { NormalColorType } from '../../../../theme/types';
import * as S from './Bars.styles';

export interface BarsProps {
  size: 'sm' | 'md' | 'lg';
  color: NormalColorType;
}

export const Bars = ({ size, color }: BarsProps) => {
  return (
    <S.Container size={size}>
      {[0, 0.1, 0.2, 0.3, 0.4].map((number) => (
        <S.Bar key={number} color={color} delay={number} />
      ))}
    </S.Container>
  );
};
