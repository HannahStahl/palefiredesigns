import React from 'react';
import { VisibilityFilters } from '../actions';
import DynamicFilter from '../containers/DynamicFilter';

const Filters = () => (
  <div>
    <DynamicFilter filter={VisibilityFilters.NECKLACE}>Collar Me Beautiful</DynamicFilter>
    <DynamicFilter filter={VisibilityFilters.BRACELET}>Wrist Action</DynamicFilter>
    <DynamicFilter filter={VisibilityFilters.EARRINGS}>Lobe Trotters</DynamicFilter>
  </div>
);

export default Filters;
