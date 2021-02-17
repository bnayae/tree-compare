import styled from 'styled-components';
import { SampleCRaw } from './SampleCRaw';

export const SampleC = styled(SampleCRaw)`
  display: grid;
  justify-items: left;
  padding: 10rem;

  height: 110;
  flex-grow: 1;
  max-width: 400;

  .item {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    justify-items: start;
    grid-column-gap: 1rem;
  }
`;
