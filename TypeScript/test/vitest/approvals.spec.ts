import { GildedRose, Item } from '@/gilded-rose';
import { describe, expect, it } from 'vitest';

describe('Gilded Rose Approval', () => {
  it('should simulate 30 days of updates', () => {
    const items = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Conjured Mana Cake', 3, 6),
    ];

    const gildedRose = new GildedRose(items);

    const results: string[] = [];

    for (let day = 0; day < 30; day++) {
      results.push(`-------- Day ${day} --------`);
      results.push(JSON.stringify(items, null, 2));
      gildedRose.updateQuality();
    }

    expect(results.join('\n')).toMatchSnapshot();
  });
});
