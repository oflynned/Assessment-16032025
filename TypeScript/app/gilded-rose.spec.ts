import { GildedRoseStrategy } from '@/strategies';
import { mock } from 'vitest-mock-extended';
import { GildedRose, Item } from './gilded-rose';

const items = [{ name: 'Item', sellIn: 10, quality: 20 }] satisfies Item[];

describe('Gilded Rose', () => {
  describe('when using legacy mode', () => {
    it('should call legacy strategy', () => {
      const mockLegacyStrategy = mock<GildedRoseStrategy>();
      const mockNextStrategy = mock<GildedRoseStrategy>();
      const gildedRose = new GildedRose(items, 'legacy', {
        legacy: mockLegacyStrategy,
        normal: mockNextStrategy,
      });

      gildedRose.updateQuality();

      expect(mockLegacyStrategy.updateQuality).toHaveBeenCalled();
      expect(mockLegacyStrategy.updateSellIn).not.toHaveBeenCalled();
    });

    it('should call strategy per item', () => {
      const mockLegacyStrategy = mock<GildedRoseStrategy>();
      const gildedRose = new GildedRose(items, 'legacy', {
        legacy: mockLegacyStrategy,
      });

      gildedRose.updateQuality();

      expect(mockLegacyStrategy.updateQuality).toHaveBeenCalledTimes(
        items.length,
      );
    });
  });

  describe('when using next mode', () => {
    it('should call strategy methods', () => {
      const legacyStrategy = mock<GildedRoseStrategy>();
      const strategy = mock<GildedRoseStrategy>();
      const gildedRose = new GildedRose(items, 'next', {
        legacy: legacyStrategy,
        normal: strategy,
      });

      gildedRose.updateQuality();

      expect(legacyStrategy.updateQuality).not.toHaveBeenCalled();
      expect(strategy.updateQuality).toHaveBeenCalled();
      expect(strategy.updateSellIn).toHaveBeenCalled();
    });

    it('should call strategy per item', () => {
      const strategy = mock<GildedRoseStrategy>();
      const gildedRose = new GildedRose(items, 'next', {
        normal: strategy,
      });

      gildedRose.updateQuality();

      expect(strategy.updateQuality).toHaveBeenCalledTimes(items.length);
      expect(strategy.updateSellIn).toHaveBeenCalledTimes(items.length);
    });
  });
});
