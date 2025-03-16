import { Item } from '@/gilded-rose';
import { GildedRoseStrategy } from '@/strategies/gilded-rose.strategy';

export class BackstagePassesStrategy implements GildedRoseStrategy {
  updateQuality(item: Item): void {}

  updateSellIn(item: Item): void {}
}
