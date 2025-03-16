import { GildedRoseStrategy } from '@/strategies';
import { mock } from 'vitest-mock-extended';
import { GildedRose, Item } from './gilded-rose';

const items = [{ name: 'Item', sellIn: 10, quality: 20 }] satisfies Item[];

describe('Gilded Rose', () => {
  it('should call strategy methods', () => {
    const strategy = mock<GildedRoseStrategy>();
    const gildedRose = new GildedRose(items, { normal: strategy });

    gildedRose.updateQuality();

    expect(strategy.updateQuality).toHaveBeenCalled();
    expect(strategy.updateSellIn).toHaveBeenCalled();
  });

  it('should call strategy per item', () => {
    const strategy = mock<GildedRoseStrategy>();
    const gildedRose = new GildedRose(items, { normal: strategy });

    gildedRose.updateQuality();

    expect(strategy.updateQuality).toHaveBeenCalledTimes(items.length);
    expect(strategy.updateSellIn).toHaveBeenCalledTimes(items.length);
  });
});
