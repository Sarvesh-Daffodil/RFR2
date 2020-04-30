### Task ###

* Load items in input.json
For input sample refer in input.json

[
    {
        "name": "Item 1",
        "desc": "Item 1 Desc",
        "amount": 75,
        "currency": ""
    },
    {
        "name": "Item 2",
        "desc": "Item 2 Desc",
        "amount": 25,
        "currency": ""
    },
    {
        "name": "Item 3",
        "desc": "Item 3 Desc",
        "amount": 50,
        "currency": ""
    },
    {
        "name": "Item 4",
        "desc": "Item 4 Desc",
        "amount": 50,
        "currency": ""
    }
]

* Run node index.js

* Check console


Question was not clear so providing you with possible 2 solutions

Sol I: Cart.js
[ 
    [ 
        { name: 'Item 1', desc: 'Item 1 Desc', amount: 75, currency: '' } 
    ],
    [ 
        { name: 'Item 3', desc: 'Item 3 Desc', amount: 50, currency: '' } 
    ],
    [ 
        { name: 'Item 4', desc: 'Item 4 Desc', amount: 50, currency: '' } 
    ],
    [ 
        { name: 'Item 2', desc: 'Item 2 Desc', amount: 25, currency: '' }
    ] 
]

Sol II: Knapsack.js
[ 
    [ 
        { name: 'Item 1', desc: 'Item 1 Desc', amount: 75, currency: '', flag: false },
        { name: 'Item 2', desc: 'Item 2 Desc', amount: 25, currency: '', flag: false } 
    ],
    [ 
        { name: 'Item 3', desc: 'Item 3 Desc', amount: 50, currency: '', flag: false },
        { name: 'Item 4', desc: 'Item 4 Desc', amount: 50, currency: '', flag: false } 
    ] 
]
