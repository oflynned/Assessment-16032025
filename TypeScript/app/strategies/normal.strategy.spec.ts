import { Item } from '@/gilded-rose';
import { NormalStrategy } from './normal.strategy';

const strategy = new NormalStrategy();

describe('Normal Strategy', () => {
  describe('updateQuality', () => {
    it('should not be below 0', () => {
      const item = new Item('Item', -1, 0);

      strategy.updateQuality(item);

      expect(item.quality).toBe(0);
    });

    it('should decrease by 1 with a non-negative sellIn', () => {
      const item = new Item('Item', 10, 10);

      strategy.updateQuality(item);

      expect(item.quality).toBe(9);
    });

    it('should decrease by 1 with a negative sellIn', () => {
      const item = new Item('Item', -1, 10);

      strategy.updateQuality(item);

      expect(item.quality).toBe(8);
    });
  });

  describe('updateSellIn', () => {
    it('should decrease by 1', () => {
      const item = new Item('Item', 10, 100);

      strategy.updateSellIn(item);

      expect(item.sellIn).toBe(9);
    });
  });
});
