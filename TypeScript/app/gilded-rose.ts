import {
  AgedBrieStrategy,
  BackstagePassesStrategy,
  ConjuredStrategy,
  GildedRoseStrategy,
  NormalStrategy,
  SulfurasStrategy,
} from '@/strategies';

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

type Strategy =
  | 'agedBrie'
  | 'backstagePasses'
  | 'sulfuras'
  | 'conjured'
  | 'normal';

const defaultStrategyMap: Record<Strategy, GildedRoseStrategy> = {
  agedBrie: new AgedBrieStrategy(),
  backstagePasses: new BackstagePassesStrategy(),
  sulfuras: new SulfurasStrategy(),
  conjured: new ConjuredStrategy(),
  normal: new NormalStrategy(),
};

export class GildedRose {
  items: Array<Item>;

  private readonly strategyMap: Record<Strategy, GildedRoseStrategy>;

  constructor(
    items = [] as Array<Item>,
    strategyMap: Partial<Record<Strategy, GildedRoseStrategy>> = {},
  ) {
    this.items = items;
    this.strategyMap = { ...defaultStrategyMap, ...strategyMap };
  }

  private getStrategyKey(item: Item): Exclude<Strategy, 'legacy'> {
    if (item.name === 'Aged Brie') {
      return 'agedBrie';
    }

    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      return 'backstagePasses';
    }

    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      return 'sulfuras';
    }

    if (item.name === 'Conjured Mana Cake') {
      return 'conjured';
    }

    return 'normal';
  }

  updateQuality() {
    for (const item of this.items) {
      const key = this.getStrategyKey(item);
      const strategy = this.strategyMap[key];

      strategy.updateQuality(item);
      strategy.updateSellIn(item);
    }

    return this.items;
  }
}
