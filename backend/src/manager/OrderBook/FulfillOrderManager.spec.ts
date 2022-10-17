import FulfillOrderManager from './FulfillOrderManager';

describe('FulfillOrderManager', () => {
    let fulfillOrderManager: FulfillOrderManager;

    describe('having no provider order books', () => {
        beforeEach(() => {
            fulfillOrderManager = new FulfillOrderManager([]);
        });

        it('should return an empty array', () => {
            expect(fulfillOrderManager.dryFulfill('1')).resolves.toEqual([]);
        });
    });

    describe('having 3 provider order books', () => {
        describe('where none of the provider order book can 100% fulfill the amount required', () => {
            beforeEach(() => {
                fulfillOrderManager = new FulfillOrderManager([
                    {
                        provider: 'binance',
                        orderBook: [
                            {
                                exchangeSymbolPrice: '19927.97',
                                currencyAmount: '0.12557557'
                            },
                            {
                                exchangeSymbolPrice: '19927.00',
                                currencyAmount: '0.15'
                            }
                        ]
                    },
                    {
                        provider: 'kraken',
                        orderBook: [
                            {
                                exchangeSymbolPrice: '19927.97',
                                currencyAmount: '0.12557557'
                            },
                            {
                                exchangeSymbolPrice: '19927.00',
                                currencyAmount: '0.15'
                            }
                        ]
                    },
                    {
                        provider: 'coinbase',
                        orderBook: [
                            {
                                exchangeSymbolPrice: '19927.97',
                                currencyAmount: '0.12557557'
                            },
                            {
                                exchangeSymbolPrice: '19927.00',
                                currencyAmount: '0.15'
                            }
                        ]
                    }
                ]);
            });

            it('should return an empty array', () => {
                expect(fulfillOrderManager.dryFulfill('1')).resolves.toEqual([]);
            });
        });

        describe('where only one provider order book can 100% fulfill the amount required', () => {
            describe('with just one order from the order book', () => {
                beforeEach(() => {
                    fulfillOrderManager = new FulfillOrderManager([
                        {
                            provider: 'binance',
                            orderBook: [
                                {
                                    exchangeSymbolPrice: '19927.97',
                                    currencyAmount: '0.12557557'
                                },
                                {
                                    exchangeSymbolPrice: '19927.00',
                                    currencyAmount: '0.15'
                                }
                            ]
                        },
                        {
                            provider: 'kraken',
                            orderBook: [
                                {
                                    exchangeSymbolPrice: '19927.97',
                                    currencyAmount: '0.12557557'
                                },
                                {
                                    exchangeSymbolPrice: '19927.00',
                                    currencyAmount: '0.15'
                                }
                            ]
                        },
                        {
                            provider: 'coinbase',
                            orderBook: [
                                {
                                    exchangeSymbolPrice: '19927.97',
                                    currencyAmount: '10.12557557'
                                },
                                {
                                    exchangeSymbolPrice: '19927.00',
                                    currencyAmount: '0.15'
                                }
                            ]
                        }
                    ]);
                });

                it('should return that provider', () => {
                    expect(fulfillOrderManager.dryFulfill('1')).resolves.toEqual([
                        {
                            amount: '1',
                            cost: '19927.97',
                            totalOrders: 1,
                            provider: 'coinbase'
                        }
                    ]);
                });
            });

            describe('with multiple orders from the order book', () => {
                beforeEach(() => {
                    fulfillOrderManager = new FulfillOrderManager([
                        {
                            provider: 'binance',
                            orderBook: [
                                {
                                    exchangeSymbolPrice: '19927.97',
                                    currencyAmount: '0.12557557'
                                },
                                {
                                    exchangeSymbolPrice: '19927.00',
                                    currencyAmount: '0.15'
                                }
                            ]
                        },
                        {
                            provider: 'kraken',
                            orderBook: [
                                {
                                    exchangeSymbolPrice: '19927.97',
                                    currencyAmount: '0.12557557'
                                },
                                {
                                    exchangeSymbolPrice: '19927.00',
                                    currencyAmount: '0.15'
                                }
                            ]
                        },
                        {
                            provider: 'coinbase',
                            orderBook: [
                                {
                                    exchangeSymbolPrice: '19927.97',
                                    currencyAmount: '1.12557557'
                                },
                                {
                                    exchangeSymbolPrice: '19927.00',
                                    currencyAmount: '0.15'
                                }
                            ]
                        }
                    ]);
                });

                it('should return that provider', () => {
                    expect(fulfillOrderManager.dryFulfill('1.2')).resolves.toEqual([
                        {
                            amount: '1.2',
                            cost: '23913.4918083029',
                            totalOrders: 2,
                            provider: 'coinbase'
                        }
                    ]);
                });
            });
        });

        describe('where all 3 provider order books can 100% fulfill the amount required', () => {
            beforeEach(() => {
                fulfillOrderManager = new FulfillOrderManager([
                    {
                        provider: 'binance',
                        orderBook: [
                            {
                                exchangeSymbolPrice: '19927.97',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19928.97',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19929.97',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19930.97',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19931.97',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19932.97',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19933.97',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19934.97',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19935.97',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19936.97',
                                currencyAmount: '1'
                            }
                        ]
                    },
                    {
                        provider: 'kraken',
                        orderBook: [
                            {
                                exchangeSymbolPrice: '19927.99',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19928.99',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19929.99',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19930.99',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19931.99',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19932.99',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19933.99',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19934.99',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19935.99',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19936.99',
                                currencyAmount: '1'
                            }
                        ]
                    },
                    {
                        provider: 'coinbase',
                        orderBook: [
                            {
                                exchangeSymbolPrice: '19927.95',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19928.95',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19929.95',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19930.95',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19931.95',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19932.95',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19933.95',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19934.95',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19935.95',
                                currencyAmount: '1'
                            },
                            {
                                exchangeSymbolPrice: '19936.95',
                                currencyAmount: '1'
                            }
                        ]
                    }
                ]);
            });

            describe('and only half of the orders are needed to fulfill the request', () => {
                it('should return the lowest cost (coinbase) while only using 5 orders for all providers', () => {
                    expect(fulfillOrderManager.dryFulfill('5')).resolves.toEqual([
                        {
                            amount: '5',
                            cost: '99649.75',
                            totalOrders: 5,
                            provider: 'coinbase'
                        },
                        {
                            amount: '5',
                            cost: '99649.85',
                            totalOrders: 5,
                            provider: 'binance'
                        },
                        {
                            amount: '5',
                            cost: '99649.95',
                            totalOrders: 5,
                            provider: 'kraken'
                        }
                    ]);
                });
            });

            describe('and 8 of the orders are needed to fulfill the request', () => {
                it('should return the lowest cost (coinbase) while only using 8 orders for all providers', () => {
                    expect(fulfillOrderManager.dryFulfill('8')).resolves.toEqual([
                        {
                            amount: '8',
                            cost: '159451.6',
                            totalOrders: 8,
                            provider: 'coinbase'
                        },
                        {
                            amount: '8',
                            cost: '159451.76',
                            totalOrders: 8,
                            provider: 'binance'
                        },
                        {
                            amount: '8',
                            cost: '159451.92',
                            totalOrders: 8,
                            provider: 'kraken'
                        }
                    ]);
                });
            });
        });
    });
});
