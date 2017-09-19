## Buffer

1. Buffer在Node里面是一个全局变量。
2. Buffer就像C语言里的指针，操作会影响原来的Buffer, 如slice返回的不是一个新的Buffer，而是原来Buffer里的某个位置。
3. 如果要操作Buffer先拷贝一份，再对拷贝的Buffer进行操作。
