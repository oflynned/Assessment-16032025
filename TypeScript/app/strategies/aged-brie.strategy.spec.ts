import { Item } from '@/gilded-rose';
import { AgedBrieStrategy } from './aged-brie.strategy';

const strategy = new AgedBrieStrategy();

describe('Aged Brief Strategy', () => {
  describe('updateQuality', () => {
    it('should increase quality', () => {
      const item = new Item('Item', 10, 20);

      strategy.updateQuality(item);

      expect(item.quality).toBe(21);
    });

    it('should not increase quality above 50', () => {
      const item = new Item('Item', 10, 50);

      strategy.updateQuality(item);

      expect(item.quality).toBe(50);
    });
  });

  describe('updateSellIn', () => {
    it('should decrease sellIn by 1', () => {
      const item = new Item('Item', 10, 20);

      strategy.updateSellIn(item);

      expect(item.sellIn).toBe(9);
    });
  });
});
