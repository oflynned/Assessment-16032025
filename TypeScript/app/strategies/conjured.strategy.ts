import { Item } from '@/gilded-rose';
import { GildedRoseStrategy } from '@/strategies/gilded-rose.strategy';

export class ConjuredStrategy implements GildedRoseStrategy {
  updateQuality(item: Item): void {}

  updateSellIn(item: Item): void {}
}
