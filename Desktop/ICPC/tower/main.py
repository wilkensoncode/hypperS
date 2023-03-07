import sys


def stack_boxes(box_in):
    line: str = box_in.split()
    if len(line) < 8 or len(line) > 8:
        return

    tower_height1 = int(line[-1])
    tower_height2 = int(line[-2])

    num = []  # store the first 6 numbers
    tower_one = []  # store the first 3 boxes
    tower_two = []  # store the last 3 boxes

    if tower_height1 == tower_height2:
        return
    [num.append(int(x)) for x in line[:6] if int(x) <= 100]

    if len(set(num)) < 6:
        return
    num.sort()
    for i in range(len(num)):
        left_pointer = i + 1
        right_pointer = len(num) - 1

        while left_pointer < right_pointer:
            box_sum: int = num[i] + num[left_pointer] + num[right_pointer]

            if tower_height1 == box_sum or tower_height2 == box_sum:
                tower_one.append(num[i])
                tower_one.append(num[left_pointer])
                tower_one.append(num[right_pointer])
                tower_one.sort(reverse=True)
                [tower_two.append(x) for x in num if x not in tower_one]
                tower_two.sort(reverse=True)
                [tower_one.append(x) for x in tower_two if x not in tower_one]
                [tower_two.append(x) for x in tower_one if x not in tower_two]
                if tower_height1 == box_sum:
                    return sys.stdout.writelines(' '.join([str(box) for box in tower_two]))
                else:
                    return sys.stdout.writelines(' '.join([str(box) for box in tower_one]))
            elif tower_height1 > box_sum:
                left_pointer += 1
            else:
                right_pointer -= 1
    return ''


for input_in in sys.stdin:
    stack_boxes(input_in)
    print()


# test1 = '12 8 2 4 10 3 25 14'  # 12 10 3 8 4 2
# test2 = '12 8 2 4 10 3 14 25'  # 8 4 2 12 10 3
# test3 = '12 17 36 37 51 63 92 124'  # 63 17 12 51 37 36
# test4 = '12 17 36 37 51 63 124 92'  # 51 37 36 63 17 12
#
#
# test5 = '12 17 36 37 51 63 124 124'  # return tower same height
# test6 = '12 17 36 37 51 12 124 92'  # return boxes same height
# test7 = '12 101 36 37 51 12 124 92'  # return box too height
#
# ############################################
#
# all_t = [test1, test2, test3, test4, test5, test6, test7]
# all_n = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7']
#
# for t in range(len(all_t)):
#     print(all_n[t], end=': ')
#     print(f'input: {all_t[t]} output: ', end=" ")
#     stack_boxes(all_t[t])
#     print()
#
