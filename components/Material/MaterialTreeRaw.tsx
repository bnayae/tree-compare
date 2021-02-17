import React from 'react';
import { IWithClassName } from '../../interfaces';
import { SampleC } from './SampleC';

interface IProps extends IWithClassName {
  // id: number;
}

export const MaterialTreeRaw = ({ className }: IProps) => {
  return (
    <div className={className}>
      <SampleC />
    </div>
  );
};
