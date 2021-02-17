import React from 'react';
import { IWithClassName } from '../../interfaces';
import { SampleA } from './SampleA';

interface IProps extends IWithClassName {
  // id: number;
}

export const RcTreeRaw = ({ className }: IProps) => {
  return (
    <div className={className}>
      <h2>Sample A</h2>
      <SampleA />
    </div>
  );
};
