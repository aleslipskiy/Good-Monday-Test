# Good-Monday-Test

1. Since I haven't found whether the list is sorted or not, I first sort it just to be safe.
2. Then I split it into 4 arrays: all negative numbers, nulls, ones, and positive numbers. Why so: maximum amount will be received if we multiple negative numbers pairwise in ascending order, add positive numbers multiplied pairwise in descending order, if there is 0 and the biggest negative value which is the least in absolute magnitude, we make out of them a pair for multiplying, we need also to add a number of ones and a positive number left without the pair.
3. Second reduce is already a bypass of the resulting arrays: negative numbers, nulls, ones, and positive numbers.
4. If the array of negative numbers, case 0, has odd number of elements, then we separately save the lowest in absolute magnitude, and then multiply the remaining array pairwise.
5. Case 1: if there are no nulls, then we have to add a remaining negative number, and if there are, then we add nothing, as the operation is multiplication by 0. It does not matter how many nulls we have in a row.
6. Case 2: If there are ones, we add them to an intermediate result; it is because any positive number multiplied by 1 will always be less that an amount with one.
7. Case 3: If the array of positive numbers has even number of elements, then we save the lowest of them separately and multiply the remaining ones pairwise. The resulting amount will be received by adding to the total amount, after all operations with the arrays, the remaining least positive number if any.
Generally, the rows and final amounts specified in the condition match the result of totalSumm() function call.
