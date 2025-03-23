def same(nums):
    return len(nums)>1 and nums[0]== nums[-1]

a= [12,2,3,12,1,12]
print(same(a))