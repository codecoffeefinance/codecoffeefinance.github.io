---
title: How I solved codingbats makeChocolate problem
date: 2019-02-18 16:58:05 +0000

---
def make_chocolate(small, big, goal):

  

  if(small+big*5<goal):

    return -1

  elif small<goal%5:

    return -1

  else:

    if(goal<10):

      return goal%5

    return goal-(big*5)

for this problem you need to return the number

of small blocks you need to use

\## Make cases for what would not result in the goal

Let's use an example

6,1,11

the first if statement is false because

the length of all the small blocks and the big blocks

is not less than the goal

Like in the makeBricks the second case is when

the number of small blocks is less than goal%5 which in

this case is not true

Otherwise we check the further cases within the else

section 

We first check if goal is less than 10 for which we can just take a big block

and the remaining small blocks to make the goal

for any goal length more than 10 to get the smaller

block you could just take the (goal)and minus it by

the number of big blocks you have *5

so 11-(1*5) which equals 6.so we need to use 6 of our small blocks

6,2,12

have 6 small blocks

have 2 big blocks

Again 

for any goal length more than 10 to get the smaller

block you could just take the (goal)and minus it by

the number of big blocks you have *5

so 12-(2*5) which equals 2.so we need to use 2 of our small blocks

60,100,550

have 60 small blocks

have 100 big blocks

Again 

for any goal length more than 10 to get the smaller

block you could just take the (goal)and minus it by

the number of big blocks you have *5

so 550-(100*5) which equals 50.so we need to use 50 of our small blocks