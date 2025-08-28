exports.fibonacci = function(n) {
    if(n==0 || n==1)
        return n;
    if(n<0)
        return undefined;
    return this.fibonacci(n-1) + this.fibonacci(n-2);
}