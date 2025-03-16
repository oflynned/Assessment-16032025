import { Item } from '@/gilded-rose';
import { BackstagePassesStrategy } from './backstage-passes.strategy';

const strategy = new BackstagePassesStrategy();

describe('Backstage Passes Strategy', () => {
  describe('updateQuality', () => {
    it('should increase quality by 1 when sellIn is greater than 10', () => {
      const item = new Item('Item', 15, 20);

      strategy.updateQuality(item);
      expect(item.quality).toBe(21);
    });

    it('should increase quality by 2 when sellIn is 10 or less', () => {
      const item = new Item('Item', 10, 20);

      strategy.updateQuality(item);
      expect(item.quality).toBe(22);
    });

    it('should increase quality by 3 when sellIn is 5 or less', () => {
      const item = new Item('Item', 5, 20);

      strategy.updateQuality(item);
      expect(item.quality).toBe(23);
    });

    it('should drop quality to 0 after concert', () => {
      const item = new Item('Item', -1, 20);

      strategy.updateQuality(item);
      expect(item.quality).toBe(0);
    });

    it('should not increase quality above 50', () => {
      const item = new Item('Item', 5, 50);

      strategy.updateQuality(item);
      expect(item.quality).toBe(50);
    });
  });

  describe('updateSellIn', () => {
    it('should decrease sellIn by 1', () => {
      const item = new Item('Item', 5, 20);

      strategy.updateSellIn(item);
      expect(item.sellIn).toBe(4);
    });
  });
});
