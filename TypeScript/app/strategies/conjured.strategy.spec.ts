import { Item } from '@/gilded-rose';
import { ConjuredStrategy } from './conjured.strategy';

const strategy = new ConjuredStrategy();

describe('Conjured', () => {
  describe('updateQuality', () => {
    it('should decrease quality twice as fast', () => {
      const item = new Item('Item', 10, 20);

      strategy.updateQuality(item);

      expect(item.quality).toBe(18);
    });

    it('should not decrease quality below 0', () => {
      const item = new Item('Item', 10, 0);

      strategy.updateQuality(item);

      expect(item.quality).toBe(0);
    });

    it('should decrease quality when sellIn is negative', () => {
      const item = new Item('Item', -1, 20);

      strategy.updateQuality(item);

      expect(item.quality).toBe(18);
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
