import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { promise } from 'protractor';

export interface Item {
  id: number;
  name: string;
  tmp: string;
  modified: string;
}

export interface ChildItem {
  id: number;
  name: string;
  birthdate: string;
  weight: number;
}

const ITEMS_KEY = 'temperatures';
const CHILDREN_KEY = 'children';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  addChild(childitem: ChildItem): Promise<any> {
    return this.storage.get(CHILDREN_KEY).then((childrenitems: ChildItem[]) => {
      if (childrenitems) {
        childrenitems.push(childitem);
        return this.storage.set(CHILDREN_KEY, childrenitems);
      } else {
        return this.storage.set(CHILDREN_KEY, [childitem]);
      }
    });
  }


  getItems(): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }

  getChildren(): Promise<ChildItem[]> {
    return this.storage.get(CHILDREN_KEY);
  }

  updateItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let newItems: Item[] = [];
      for (let i of items) {
        if (i.id === item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newItems);
    });
  }

  updateChildItem(childitem: ChildItem): Promise<any> {
    return this.storage.get(CHILDREN_KEY).then((children: ChildItem[]) => {
      if (!children || children.length === 0) {
        return null;
      }

      let newItems: ChildItem[] = [];
      for (let i of children) {
        if (i.id === childitem.id) {
          newItems.push(childitem);
        } else {
          newItems.push(i);
        }
        console.log(i.id);
      }
      return this.storage.set(CHILDREN_KEY, newItems);
    });
  }

  deleteItem(id: number): Promise<Item> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let toKeep: Item[] = [];

      for (let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }

  deleteChild(id: number): Promise<Item> {
    return this.storage.get(CHILDREN_KEY).then((children: ChildItem[]) => {
      if (!children || children.length === 0) {
        return null;
      }

      let toKeep: ChildItem[] = [];

      for (let i of children) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(CHILDREN_KEY, toKeep);
    });
  }

}
