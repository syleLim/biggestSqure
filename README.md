Biggest Squre
===

## Explain

Have board filled with 1 and 0, One of cell is composed of squre 1 by 1. Wirte function that return biggest squre in board composed of cell(squre means object parallel with vertical, horizontal line)

For example,
|**1**|**2**|**3**|**4**|
|:---:|:---:|:---:|:---:|
|0|1|1|1|
|1|1|1|1|
|1|1|1|1|
|0|0|1|0|
biggest squre in this board is
|**1**|**2**|**3**|**4**|
|:---:|:---:|:---:|:---:|
|0|`1`|`1`|`1`|
|1|`1`|`1`|`1`|
|1|`1`|`1`|`1`|
|0|0|1|0|
It's size is 9, so return 9

**Constraint**
 - Board is 2 dimension array
 - Board row : 1000 or less natural number
 - Board colum : 1000 ro less natural number
 - Board is only composed of 1 or 0

**Ex**
|board|answer|
|:---|:---|
|[[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]|9|
|[[0,0,1,1],[1,1,1,1]]|4|



source : https://programmers.co.kr/learn/courses/30/lessons/12905
출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges