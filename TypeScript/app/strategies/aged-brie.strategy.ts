import { Item } from '@/gilded-rose';
import { GildedRoseStrategy } from '@/strategies/gilded-rose.strategy';

export class AgedBrieStrategy implements GildedRoseStrategy {
  updateQuality(item: Item): void {}

  updateSellIn(item: Item): void {}
}
