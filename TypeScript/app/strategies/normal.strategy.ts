import { Item } from '@/gilded-rose';
import { GildedRoseStrategy } from '@/strategies/gilded-rose.strategy';

export class NormalStrategy implements GildedRoseStrategy {
  updateQuality(item: Item): void {
    if (item.sellIn >= 0) {
      item.quality--;
    } else {
      item.quality -= 2;
    }

    if (item.quality < 0) {
      item.quality = 0;
    }
  }

  updateSellIn(item: Item): void {
    item.sellIn--;
  }
}
