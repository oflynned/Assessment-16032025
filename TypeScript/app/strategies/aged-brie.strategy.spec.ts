import { Item } from '@/gilded-rose';
import { AgedBrieStrategy } from './aged-brie.strategy';

const strategy = new AgedBrieStrategy();

describe('Aged Brief Strategy', () => {
  it('should increase quality', () => {
    const item = new Item('Item', 10, 20);

    strategy.updateQuality(item);
    expect(item.quality).toBe(21);

    strategy.updateSellIn(item);
    expect(item.sellIn).toBe(9);
  });

  it('should not increase quality above 50', () => {
    const item = new Item('Item', 10, 50);

    strategy.updateQuality(item);
    expect(item.quality).toBe(50);

    strategy.updateSellIn(item);
    expect(item.sellIn).toBe(9);
  });
});
