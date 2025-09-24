export const mockSupplyChain = [
    {
        productId: 'prod-1',
        stages: [
            {
                stage: "Planting",
                date: "2025-04-15",
                location: "Green Valley Farm, Salinas, CA",
                responsible: "John Smith",
                qualityCheck: { status: "passed", score: 98 }
            },
            {
                stage: "Harvest",
                date: "2025-07-20",
                location: "Green Valley Farm, Salinas, CA",
                responsible: "Harvest Team A",
                qualityCheck: { status: "passed", score: 95 }
            },
            {
                stage: "Distribution",
                date: "2025-07-21",
                location: "Central Valley Distributors",
                responsible: "Jane Dealer",
                qualityCheck: { status: "passed", score: 92 }
            },
            {
                stage: "Retail",
                date: "2025-07-22",
                location: "Organic Market, San Francisco, CA",
                responsible: "Mike Market",
                qualityCheck: { status: "passed", score: 99 }
            },
        ]
    },
    {
        productId: 'prod-2',
        stages: [
             {
                stage: "Planting",
                date: "2025-05-01",
                location: "Fresno Fields, Fresno, CA",
                responsible: "John Smith",
                qualityCheck: { status: "passed", score: 96 }
            },
            {
                stage: "Harvest",
                date: "2025-08-10",
                location: "Fresno Fields, Fresno, CA",
                responsible: "Harvest Team B",
                qualityCheck: { status: "passed", score: 94 }
            },
        ]
    }
];