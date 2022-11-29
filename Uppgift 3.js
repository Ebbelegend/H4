
function insert(bst, item) {
    const nothing = "";
    return is_null(bst)
           ? make_tree(item, null, null)
           : item === entry(bst)
           ? bst
           : item < entry(bst)
           ? make_tree(entry(bst),
                       insert(left_branch(bst), item),
                       right_branch(bst))
           : 
             make_tree(entry(bst),
                       left_branch(bst),
                       insert(right_branch(bst), item));
}

// Copy your binary_search_tree_to_string function here from Task 1.
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
// Test

//binary_search_tree_to_string(insert(make_empty_tree(), "x"));
// Should produce "x; "

//const bst = accumulate((item, bst) => insert(bst, item),
                       //make_empty_tree(),
                       //list("g", "a", "r", "x", "p"));
//binary_search_tree_to_string(bst);
// Should produce "a; g; p; r; x; "

//const pkd_names_with_aaaaron =  insert(pkd_names, "AAAARON NORAAAA");
//binary_search_tree_to_string(pkd_names_with_aaaaron);
// Should produce "AAAARON NORAAAA; ..."
