import { Item } from '@/gilded-rose';
import { GildedRoseStrategy } from '@/strategies/gilded-rose.strategy';

export class SulfurasStrategy implements GildedRoseStrategy {
  updateQuality(_item: Item): void {}

  updateSellIn(_item: Item): void {}
}
