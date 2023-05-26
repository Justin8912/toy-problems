/*
We have a Java class that models navigation items for our client websites.
There is a root level item which is not displayed, but contains a list of child items.
These child items may have child items, which may also have child items, to an arbitrary level of depth.

Write a method in Java that takes in the root level NavigationItem and prints out the navigation structure
in a format that a non-developer could understand and use to help them troubleshoot issues with a site.
You can assume that all Lists of children are non-null and have length of zero when they are empty.

public class NavigationItem {   public String url;   public String label;   public List<NavigationItem> children;}
*/

/**
 *  1
 *    2
 *       4
 *       5
 *         6
 * ...
 *    3
 * ...
 */


/**
 * O: a printed navigation structure that is easy to read
 * I: The root node of the naviagation structure
 * C: must be at least one page awith at least one child
 * E: multiple nodes cannot share the same child
 */

/**
 * 1
 *  2
 *  3
 *   4
 *  5
 *
 *
 */


// define a general class NavigationItem
class NavigationItem{
  // url, label, a list of children (each are type of NavigationItem)
  constructor(url, label, children) {
    this.url = url;
    this.label = label;
    this.children = children;
  }

  // define method called generateNavigationStructure(space)
  generateNavigationStructure(space) {
    // base case - if the current node label is null  / undefined then we can just return
    // rc
      // printing our current node's label
      if (space.length === 0) {
        let currentLabelStatement = space + this.label;
        console.log(currentLabelStatement);
      }
      // loop through the children of the current node
      for (let i = 0 ; i < this.children; i++) {
        // call recursive function again, with the space parameter incremented by an additional empty space
        this.children[i].generateNavigationStructure(space + ' ');
      }

  }
}

