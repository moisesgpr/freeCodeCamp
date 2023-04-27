function checkCashRegister(price, cash, cid) {
    let change = cash - price,
        cua = [
            ["PENNY", 0.01],
            ["NICKEL", 0.05],
            ["DIME", 0.1],
            ["QUARTER", 0.25],
            ["ONE", 1],
            ["FIVE", 5],
            ["TEN", 10],
            ["TWENTY", 20],
            ["ONE HUNDRED", 100]
        ],
        newArr = [],
        result = {
            status: '',
            change: []
        }

    for (let i = cid.length - 1; 0 <= i; i--) {
        if (change >= cua[i][1] && cid[i][1] !== 0) {
            let j = 0
            while (cid[i][1] !== 0) {
                change -= cua[i][1];
                cid[i][1] -= cua[i][1];
                j++
                if (cua[i][1] > change.toFixed(2)) {
                    break
                }
            }
            newArr.push([cid[i][0], cua[i][1] * j])
        }
    }
    
    if (change <= 0 && cid[0][1] < 0) {
        result.change = cid.slice(1)
        result.change.unshift(newArr.pop())
        result.status = 'CLOSED'
    } else if (change <= 0) {
        result.change = newArr.slice(0);
        result.status = 'OPEN'
    } else {
        result.status = 'INSUFFICIENT_FUNDS'
    }
    return result;
}

checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]);

/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */