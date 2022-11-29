function find(bst, name) {
    return is_null(bst) 
           ? false
           : name === entry(bst) 
           ? true
           : name < entry(bst)
           ? find(left_branch(bst), name)
           : find(right_branch(bst), name);
    }


// Test
find(pkd_names, "Buxton, Eric");




