function binary_search_tree_to_string(bst) {
    const semicolon = "; ";
    const nothing = "";
    function is_element_true(x, set) {
    return is_null(set) 
           ? x
           : is_element_true(entry(set), left_branch(set)) + semicolon + is_element_true(x, right_branch(set));
    }
    return is_element_true(nothing, bst);
}
    
    
const h = make_tree("h", make_empty_tree(), make_empty_tree());
const a = make_tree("a", make_empty_tree(), make_empty_tree());
const n = make_tree("n", h, make_empty_tree());
const c = make_tree("c", a, make_empty_tree());
const test_bst = make_tree("e", c, n);

// Test
binary_search_tree_to_string(test_bst);
binary_search_tree_to_string(pkd_names);