import { Item } from '@/gilded-rose';
import { GildedRoseStrategy } from '@/strategies/gilded-rose.strategy';

export class ConjuredStrategy implements GildedRoseStrategy {
  updateQuality(item: Item): void {
    item.quality -= 2;

    if (item.quality < 0) {
      item.quality = 0;
    }
  }

  updateSellIn(item: Item): void {
    item.sellIn--;
  }
}
