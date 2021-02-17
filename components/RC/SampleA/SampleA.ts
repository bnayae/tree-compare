import styled from 'styled-components';
import { SampleARaw } from './SampleARaw';

export const SampleA = styled(SampleARaw)`
  display: grid;
  justify-items: left;
  padding: 10rem;

  .rc-tree li a.rc-tree-node-selected {
    .cus-label {
      background-color: white;
      border: none;
    }
  }

  border: 1px solid transparent;

  &-focused:not(&-active-focused) {
    border-color: cyan;
  }
`;
