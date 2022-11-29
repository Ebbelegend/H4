function binary_search_tree_to_string(bst) {
    const empty = "; ";
    function is_element_true(x, set) {
    return is_null(set) 
           ? false
           : x === entry(set) 
           ? true
           : x < entry(set)
           ? is_element_true(x, left_branch(set))
           :is_element_true(x, right_branch(set));
    }
    function addelement(x, bst) {
        return is_element_true(x, bst)
        ? x + empty
        : null;
    }
    return addelement(entry(left_branch(left_branch(bst))), bst) +
    addelement(entry(left_branch(bst)), bst) + addelement(entry(bst), bst) +
    addelement(entry(left_branch(right_branch(bst))), bst) +
    addelement(entry(right_branch(bst)), bst);
}
const h = make_tree("h", make_empty_tree(), make_empty_tree());
const a = make_tree("a", make_empty_tree(), make_empty_tree());
const n = make_tree("n", h, make_empty_tree());
const c = make_tree("c", a, make_empty_tree());
const test_bst = make_tree("e", c, n);

// Test
binary_search_tree_to_string(test_bst);
binary_search_tree_to_string(pkd_names);







