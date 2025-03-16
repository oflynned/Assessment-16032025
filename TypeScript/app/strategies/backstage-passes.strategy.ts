import { Item } from '@/gilded-rose';
import { GildedRoseStrategy } from '@/strategies/gilded-rose.strategy';

export class BackstagePassesStrategy implements GildedRoseStrategy {
  updateQuality(item: Item): void {
    if (item.sellIn > 10) {
      item.quality++;
    } else if (item.sellIn > 5) {
      item.quality += 2;
    } else if (item.sellIn > 0) {
      item.quality += 3;
    } else {
      item.quality = 0;
    }

    if (item.quality >= 50) {
      item.quality = 50;
    }
  }

  updateSellIn(item: Item): void {
    item.sellIn--;
  }
}
