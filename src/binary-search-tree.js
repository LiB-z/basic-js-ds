const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(value) {
    this.rootNode = addNode(this.rootNode, value);
    function addNode(node, value) {
      if(!node) {
        return node = new Node(value);
      }
      if(node.data == value) {
        return node;
      }
      if(node.data < value) {
        node.right = addNode(node.right, value);
      } else if(node.data > value) {
        node.left = addNode(node.left, value);
      }
      return node;
    }
  }

  has(value) {
    function findNode(node, value) {
      if(!node) {
        return false;
      }
      if(node.data == value) {
        return true;
      } else if(node.data > value) {
        return findNode(node.left, value);
      } else if(node.data < value) {
        return findNode(node.right, value);
      }
    }
    return findNode(this.rootNode, value);
  }

  find(value) {
    function findNode(node, value) {
      if(!node) {
        return null;
      }
      if(node.data == value) {
        return node;
      } else if(node.data > value) {
        return findNode(node.left, value);
      } else if(node.data < value) {
        return findNode(node.right, value);
      }
    }
    return findNode(this.rootNode, value);
  }

  remove(value) {
    this.rootNode = DeleteNode(this.rootNode, value);

    function DeleteNode(node,value) {
      if(!node) {
        return null
      }
      //Найти узел, который нужно удалить.
      if(node.data > value) {
        node.left = DeleteNode(node.left, value)
        return node;
      } else if (node.data < value) {
        node.right = DeleteNode(node.right, value)
        return node;
      } else {
        //Если узел "крайний"
        if(!node.right && !node.left) {
          return null;
        }
        // Если существует только одна из веток
        if(!node.right) {
          node = node.left;
          return node;
        } else if(!node.left) {
          node = node.right;
          return node;
        }
        // При наличии обеих дочерних веток
        // Определяем НОВЫЙ УЗЕЛ как максимальный узел из левых
        let newNode = node.left;
        while(newNode.right) {
          newNode = newNode.right;
        }
        node.data = newNode.data;
        //Удялем перенесённые элементы ветки
        node.left = DeleteNode(node.left, newNode.data);
        return node;
      }
    }
  }

  min() {
    let node = this.rootNode;
    if(!node) {
      return null
    }
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.rootNode;
    if(!node) {
      return null
    }
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};