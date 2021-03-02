# 4. Explain how a hash table works.

## What is a hash map?

- Hash maps are unordered associations between keys and values

## What is a hash table

- A hash table is a storage that holds the records (the key and any value associated with the key)
- Hash maps require a hash-table
- The hash-table is usually implemented internally using an array
- Each slot in the array holds a key-value pair or is empty (null)
- Hash tables are ONE WAY

example:
========================================================================== 1 userName1
myPassword --> hash function --> 5======================================== 2 userName2
========================================================================== 3 userName3 && usernameX?
========================================================================== 4 userName4
=======================================================Matches output= 5 = 5 userName5
========================================================================== 6 userName6
========================================================================== 7 userName7

returns an index at which we are able to access the information in an array.
Hash tables are efficient, they do not have to traverse the array, it is a direct grab.
can run
O(1) - best case
O(n) - worst case
