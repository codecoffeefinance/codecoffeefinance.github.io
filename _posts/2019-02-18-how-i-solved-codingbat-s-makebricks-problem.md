---
title: How I solved Codingbat's makeBricks problem
date: 2019-02-18 16:20:26 +0000

---
### Make if statements for what will not result in the goal

As you can see below ,if all the small blocks of length 1 and big blocks of length 5 cannot make up the goal,you can already assume false.The else if statement contains the case where ,if you take the remainder after dividing the goal by the length of the big blogs ,so 5,if you have less small blocks than the remainder then obviously would not be able to make the goal length.Other than that every other test case instance should be true.

{% highlight java %}

public boolean makeBricks(int small, int big, int goal) {

if((small_1)+(big_5)<goal){

    return false; 

}

else if(small<goal%5){

    return false;

}

return true;

}

{% endhighlight %}