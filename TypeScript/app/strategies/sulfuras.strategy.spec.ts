import { Item } from '@/gilded-rose';
import { SulfurasStrategy } from './sulfuras.strategy';

const strategy = new SulfurasStrategy();

describe('Sulfuras Strategy', () => {
  describe('updateQuality', () => {
    it("should not change the item's quality", () => {
      const item = new Item('Item', 10, 10);

      strategy.updateQuality(item);

      expect(item.quality).toBe(10);
    });

    it('should allow a quality above 50', () => {
      const item = new Item('Item', 10, 80);

      strategy.updateQuality(item);

      expect(item.quality).toBe(80);
    });
  });

  describe('updateSellIn', () => {
    it("should not change the item's sellIn", () => {
      const item = new Item('Item', 10, 10);

      strategy.updateSellIn(item);

      expect(item.sellIn).toBe(10);
    });
  });
});
