import { Item } from '@/gilded-rose';
import { LegacyStrategy } from '@/strategies/legacy.strategy';
import { describe, expect, it } from 'vitest';

const strategy = new LegacyStrategy();

describe('LegacyStrategy', () => {
  describe('Normal Items', () => {
    it('should decrease quality', () => {
      const item = new Item('Normal Item', 10, 20);

      strategy.updateQuality(item);

      expect(item.quality).toBe(19);
    });

    it('should decrease sellIn', () => {
      const item = new Item('Normal Item', 10, 20);

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(9);
    });

    it('should decrease quality twice as fast when sellIn is negative', () => {
      const item = new Item('Normal Item', -1, 20);

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(-2);
      expect(item.quality).toBe(18);
    });

    it('should not decrease quality below 0', () => {
      const item = new Item('Normal Item', 10, 0);

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(0);
    });
  });

  describe('Aged Brie', () => {
    it('should increase quality', () => {
      const item = new Item('Aged Brie', 10, 20);

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(21);
    });

    it('should not increase quality above 50', () => {
      const item = new Item('Aged Brie', 10, 50);

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(50);
    });

    it('should handle sellIn below zero', () => {
      const item = new Item('Aged Brie', 0, 20);

      strategy.updateQuality(item);

      expect(item.quality).toBe(22);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', () => {
    it('should not change quality', () => {
      const item = new Item('Sulfuras, Hand of Ragnaros', 10, 80);

      strategy.updateQuality(item);

      expect(item.quality).toBe(80);
    });

    it('should not change sellIn', () => {
      const item = new Item('Sulfuras, Hand of Ragnaros', 10, 80);

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(10);
    });
  });

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('should increase quality when sellIn is greater than 10', () => {
      const item = new Item(
        'Backstage passes to a TAFKAL80ETC concert',
        15,
        20,
      );

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(14);
      expect(item.quality).toBe(21);
    });

    it('should increase quality by 2 when sellIn is 10 or less', () => {
      const item = new Item(
        'Backstage passes to a TAFKAL80ETC concert',
        10,
        20,
      );

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(22);
    });

    it('should increase quality by 3 when sellIn is 5 or less', () => {
      const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(4);
      expect(item.quality).toBe(23);
    });

    it('should drop quality to 0 after concert', () => {
      const item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(-1);
      expect(item.quality).toBe(0);
    });

    it('should not increase quality above 50', () => {
      const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49);

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(4);
      expect(item.quality).toBe(50);
    });

    it('should handle sellIn below zero', () => {
      const item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);

      strategy.updateQuality(item);

      expect(item.sellIn).toBe(-1);
      expect(item.quality).toBe(0);
    });
  });
});
