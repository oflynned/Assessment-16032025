import { DeprecatedStrategy } from '@/strategies/legacy.strategy';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  private readonly mode: 'old' | 'new' = 'new';

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  private updateItemQuality(item: Item) {}

  private updateItemSellIn(item: Item) {}

  private handleExpiredItems(item: Item) {}

  updateQuality() {
    if (this.mode === 'old') {
      const strategy = new DeprecatedStrategy();

      for (let i = 0; i < this.items.length; i++) {
        // legacy code lifted from the original implementation with minimal changes
        // to make it work with individual items
        strategy.updateQuality(this.items[i]);
      }

      return this.items;
    }

    for (const item of this.items) {
      // this.updateItemQuality(item);
      // this.updateItemSellIn(item);
      // this.handleExpiredItems(item);
    }

    return this.items;
  }
}
