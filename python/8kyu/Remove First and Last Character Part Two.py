# "1,2,3"      =>  "2"
# "1,2,3,4"    =>  "2 3"
# "1,2,3,4,5"  =>  "2 3 4"

# ""     =>  NULL
# "1"    =>  NULL
# "1,2"  =>  NULL

def array(string):
    st = string.split(",")
    return " ".join(st[1:-1]) or None
print(array("1,2,3")) # 2
print(array('')) # None