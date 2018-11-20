import React from 'react';
import { VisibilityFilters } from '../actions';
import DynamicFilter from '../containers/DynamicFilter';

const Filters = () => (
  <div>
    <DynamicFilter filter={VisibilityFilters.SHOW_ALL}>All</DynamicFilter>
    <DynamicFilter filter={VisibilityFilters.NECKLACES_ONLY}>Collar Me Beautiful</DynamicFilter>
    <DynamicFilter filter={VisibilityFilters.BRACELETS_ONLY}>Wrist Action</DynamicFilter>
    <DynamicFilter filter={VisibilityFilters.EARRINGS_ONLY}>Lobe Trotters</DynamicFilter>
  </div>
);

export default Filters;
