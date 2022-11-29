function insert(bst, item) {
    const nothing = "";
    return is_null(bst)
           ? make_tree(item, nothing, nothing)
           : item === entry(bst)
           ? bst
           : item < entry(bst)
           ? make_tree(entry(bst),
                       insert(item, left_branch(bst)),
                       right_branch(bst))
           : 
             bst;
}

// Copy your binary_search_tree_to_string function here from Task 1.
function binary_search_tree_to_string(bst) {
    const empty = "; ";
    const nothing = "";
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
        : nothing;
    }
    return addelement(entry(left_branch(left_branch(bst))), bst) +
    addelement(entry(left_branch(bst)), bst) + addelement(entry(bst), bst) +
    addelement(entry(left_branch(right_branch(bst))), bst) +
    addelement(entry(right_branch(bst)), bst);
}
// Test

binary_search_tree_to_string(insert(make_empty_tree(), "x"));
// Should produce "x; "

//const bst = accumulate((item, bst) => insert(bst, item),
                       //make_empty_tree(),
                       //list("g", "a", "r", "x", "p"));
//binary_search_tree_to_string(bst);
// Should produce "a; g; p; r; x; "

//const pkd_names_with_aaaaron =  insert(pkd_names, "AAAARON NORAAAA");
//binary_search_tree_to_string(pkd_names_with_aaaaron);
// Should produce "AAAARON NORAAAA; ..."


