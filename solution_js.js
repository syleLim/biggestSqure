function min(a, b)
{
    return a > b ? b : a;
}

function solution(board)
{
    var answer = 0;
    
    let dp = new Array(board[0].length + 1);
    let prevCrossUp = 0;
    let temp = 0;

    for (let i = 0; i < dp.length; i++) dp[i] = 0;    
    board.forEach((row, i) => {
        row.forEach((e, j) => {
            if (e === 1)
            {
                temp = dp[j + 1];
                dp[j + 1] = min(min(dp[j], dp[j + 1]), prevCrossUp) + 1;
                prevCrossUp = temp;
                if (answer < dp[j + 1])
                    answer = dp[j + 1];
            }
            else
                dp[j + 1] = 0;
        })
    })
    
    return answer**2;
}