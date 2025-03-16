import { Item } from '@/gilded-rose';

export interface GildedRoseStrategy {
  updateQuality(item: Item): void;
  updateSellIn(item: Item): void;
}
