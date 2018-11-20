export const setFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});
  
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    NECKLACES_ONLY: 'NECKLACES_ONLY',
    BRACELETS_ONLY: 'BRACELETS_ONLY',
    EARRINGS_ONLY: 'EARRINGS_ONLY'
};
