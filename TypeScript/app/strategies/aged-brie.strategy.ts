import { Item } from '@/gilded-rose';
import { GildedRoseStrategy } from '@/strategies/gilded-rose.strategy';

export class AgedBrieStrategy implements GildedRoseStrategy {
  updateQuality(item: Item): void {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  updateSellIn(item: Item): void {
    item.sellIn--;
  }
}
