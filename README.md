# JS-Recursive-Breadth-First-Search
Binary search tree with recursive breadth first search. 

This is an attempt to create a binary search tree with recursive breadth first search in JavaScript. I will attempt to achieve this using two-part recursion.

*Breadth first search* (BFS) on a *binary search tree* (BST) alternates between enqueuing child nodes of a tree node and dequeuing nodes from the queue. The two-part recursion approach to this will have one function for each procedure. Each one will call the other so that the recursion happens between two functions. 

## Purpose of this project
Nobody seems to have done this approach in JavaScript yet. 

## Approach
I will implement a queue using a linked list, but I will first implement the linked list. I will then use the queue in the BST to enable BFS methods.
