import { Item } from '@/gilded-rose';
import { GildedRoseStrategy } from './gilded-rose.strategy';

/**
 * @deprecated  Please use an alternative strategy!
 *              This will be removed in ticket QOVER-ABC-123 as of <date>
 */
export class LegacyStrategy implements GildedRoseStrategy {
  updateQuality(item: Item): void {
    if (
      item.name != 'Aged Brie' &&
      item.name != 'Backstage passes to a TAFKAL80ETC concert'
    ) {
      if (item.quality > 0) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != 'Aged Brie') {
        if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }

  updateSellIn(_item: Item): void {
    // Do nothing since it was all handled in updateQuality initially
    // quality and sellIn are mixed together anyway so let's keep it that way
  }
}
