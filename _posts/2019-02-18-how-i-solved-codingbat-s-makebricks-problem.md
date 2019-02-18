---
title: How I solved Codingbat's makeBricks problem
date: 2019-02-18 16:20:26 +0000

---
{% highlight python %} 

public boolean makeBricks(int small, int big, int goal) {

  if((small*1)+(big*5)<goal){

    return false; 

  }

  else if(small<goal%5){

    return false;

  }

  return true;

}

 {% endhighlight %} 